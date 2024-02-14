<script lang="ts">
	import { onMount } from 'svelte';
	import SudokuBoard from '$lib/components/SudokuBoard.svelte';

	const BLANK_BOARD = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	// Fisher-Yates shuffle
	function shuffle(array: number[]) {
		let newArray = [...array];
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			// swap the two elements
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	}

	type Board = number[][];

	function doesColContain(board: Board, col: number, num: number) {
		return board.some((row) => row[col] === num);
	}

	function doesRowContain(board: Board, row: number, num: number) {
		return board[row].some((cell) => cell === num);
	}

	function doesBoxContain(board: Board, row: number, col: number, num: number) {
		const boxRow = Math.floor(row / 3) * 3;
		const boxCol = Math.floor(col / 3) * 3;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (board[boxRow + i][boxCol + j] === num) {
					return true;
				}
			}
		}

		return false;
	}

	function isSafe(board: Board, row: number, col: number, num: number) {
		return !(
			doesRowContain(board, row, num) ||
			doesColContain(board, col, num) ||
			doesBoxContain(board, row, col, num)
		);
	}

	function getNextEmptyCell(board: Board): { row: number; col: number } | undefined {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] === 0) {
					return { row: i, col: j };
				}
			}
		}
		return undefined;
	}

	function backtrackFillBoard(staringBoard: Board): Board | false {
		const emptyCell = getNextEmptyCell(staringBoard);
		if (!emptyCell) {
			return staringBoard;
		}

		const { row, col } = emptyCell;
		for (let num of shuffle(numbers)) {
			if (isSafe(staringBoard, row, col, num)) {
				staringBoard[row][col] = num;

				const result = backtrackFillBoard(staringBoard);
				if (result) {
					return result;
				}
				// if we can't find a solution, reset the cell
				staringBoard[row][col] = 0;
			}
		}
		return false;
	}

	function generateSolvedBoard(): Board {
		const board = BLANK_BOARD.map((row) => [...row]);
		backtrackFillBoard(board);
		return board;
	}

	function checkBoardCompleted(board: Board): boolean {
		for (let i = 0; i < board.length; i++) {
			const row = board[i];
			for (let j = 0; j < row.length; j++) {
				const cell = row[j];
				if (cell === 0) return false;

				for (let k = 0; k < 9; k++) {
					if (k != i && board[k][j] === cell) return false;
					if (k != j && row[k] === cell) return false;

					let boxI = i - (i % 3) + Math.floor(k / 3);
					let boxJ = j - (j % 3) + (k % 3);

					if (boxI != i && boxJ != j && board[boxI][boxJ] === cell) return false;
				}
			}
		}
		return true;
	}

	let board: Board | undefined;
	let selectedNumber: number = 1;
	let numbersLeftToPlace = Array(10).fill(9);

	onMount(() => {
		board = generateSolvedBoard();

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (Math.random() < 0.5) {
					board[i][j] = 0;
				}
			}
		}
		numbersLeftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (numbersLeftToPlace[cell] -= 1)));
	});

	function onCellClicked(event: CustomEvent<{ row: number; col: number }>) {
		if (!board) return;
		const { row, col } = event.detail;

		let oldValue = board[row][col];
		if (oldValue === selectedNumber) {
			board[row][col] = 0;
		} else {
			board[row][col] = selectedNumber || 0;
			let isCompleted = checkBoardCompleted(board);
			console.log('isCompleted:', isCompleted);
		}

		numbersLeftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (numbersLeftToPlace[cell] -= 1)));
	}

	function onKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Backspace':
			case '0':
			case '\\':
				selectedNumber = 0;
				break;
			case '1':
				selectedNumber = 1;
				break;
			case '2':
				selectedNumber = 2;
				break;
			case '3':
				selectedNumber = 3;
				break;
			case '4':
				selectedNumber = 4;
				break;
			case '5':
				selectedNumber = 5;
				break;
			case '6':
				selectedNumber = 6;
				break;
			case '7':
				selectedNumber = 7;
				break;
			case '8':
				selectedNumber = 8;
				break;
			case '9':
				selectedNumber = 9;
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<section class="p-4">
	<h1 class="text-main text-4xl pb-8">Sudoku</h1>

	<div class="flex justify-center py-12">
		<SudokuBoard {board} on:cellClicked={onCellClicked} {selectedNumber}></SudokuBoard>
	</div>

	<div class="flex justify-center pb-8 text-2xl text-stone-700 dark:text-stone-300 gap-2">
		{#each [...numbers, 0] as number}
			<button
				on:click={() => (selectedNumber = number)}
				class="relative border-stone-400 dark:border-stone-700 border-2 rounded-lg w-12 h-12 border-b-4
				transition-colors bg-stone-200 dark:bg-stone-900 hover:bg-stone-300 dark:hover:bg-stone-800
				{selectedNumber === number ? ' border-amber-600 dark:border-amber-700' : '  '}"
			>
				{#if number === 0}
					<i class="fas fa-eraser"></i>
				{:else}
					<span>
						{number}
					</span>
					{#if numbersLeftToPlace[number] != 0}
						<span class="sr-only">Numbers left to place</span>
						<div
							class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-4 sm:-top-1 -end-1 text-stone-500 dark:text-stone-400 bg-stone-200 dark:bg-stone-800 shadow"
						>
							{numbersLeftToPlace[number]}
						</div>
					{/if}
				{/if}
			</button>
		{/each}
	</div>
</section>
