<script lang="ts">
	import { onMount } from 'svelte';
	import SudokuBoard from '$lib/components/SudokuBoard.svelte';
	import ButtonSimple from '$lib/components/ui/ButtonSimple.svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicOut, quadInOut, quadOut } from 'svelte/easing';

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

	let board: Board | undefined = BLANK_BOARD;
	let selectedNumber: number = 1;
	let numbersLeftToPlace = Array(10).fill(9);
	let gameOver = false;
	let showGameOverDialog = false;
	let startedAt = Date.now();

	onMount(() => newGame());

	function newGame() {
		showGameOverDialog = false;
		gameOver = false;
		selectedNumber = 1;
		startedAt = Date.now();

		board = BLANK_BOARD;
		let tmpBoard = generateSolvedBoard();

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (Math.random() < 0.1) {
					tmpBoard[i][j] = 0;
				}
			}
		}

		board = tmpBoard;
		numbersLeftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (numbersLeftToPlace[cell] -= 1)));
	}

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
			if (isCompleted) {
				onBoardCompleted();
			}
		}

		numbersLeftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (numbersLeftToPlace[cell] -= 1)));
	}

	function onCellClickedAlt(event: CustomEvent<{ row: number; col: number }>) {
		if (!board) return;
		const { row, col } = event.detail;
		board[row][col] = 0;
		numbersLeftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (numbersLeftToPlace[cell] -= 1)));
	}

	function onKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Backspace':
			case '\\':
			case 'Delete':
				selectedNumber = 0;
				event.preventDefault();
				break;
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				selectedNumber = parseInt(event.key);
				event.preventDefault();
				break;
			case 'r':
				onBoardCompleted();
				break;
			default:
				break;
		}
	}

	function onBoardCompleted() {
		gameOver = true;
		showGameOverDialog = true;
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<section class="p-4">
	<h1 class="text-main text-4xl">Sudoku</h1>

	<div class="flex justify-center py-12">
		<SudokuBoard
			{board}
			on:cellClicked={onCellClicked}
			on:cellClickedAlt={onCellClickedAlt}
			{selectedNumber}
		></SudokuBoard>
	</div>

	<div class="flex justify-center pb-8 text-2xl text-stone-700 dark:text-stone-300 gap-1 sm:gap-2">
		{#each [...numbers] as number}
			{@const leftToPlace = numbersLeftToPlace[number]}
			<div class="w-12 relative">
				<ButtonSimple on:click={() => (selectedNumber = number)} active={selectedNumber === number}>
					{number}
					<span class="sr-only">Numbers left to place</span>
					{#key leftToPlace}
						<div
							class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-4 sm:-top-1 -end-1 text-stone-500 dark:text-stone-400 bg-stone-200 dark:bg-stone-800 shadow
								{leftToPlace === 0 ? 'hidden' : ''}"
						>
							<span in:scale={{ opacity: 0, easing: quadOut, duration: 200 }}>{leftToPlace}</span>
						</div>
					{/key}
				</ButtonSimple>
			</div>
		{/each}
		<div class="w-12 relative">
			<ButtonSimple
				on:click={() => (selectedNumber = 0)}
				active={selectedNumber === 0}
				aria-label="Erase"
			>
				<i class="fas fa-eraser"></i>
			</ButtonSimple>
		</div>
	</div>
</section>

<!-- you won dialog with backdrop -->

{#if showGameOverDialog}
	<button
		class="fixed inset-0 z-10 w-full flex items-center justify-center bg-black bg-opacity-50"
		in:fade={{ duration: 200, easing: quadInOut }}
		on:click={() => (showGameOverDialog = true)}
		aria-label="Close dialog"
	>
		<div
			class="bg-stone-100 dark:bg-stone-900 rounded-lg p-8 text-center"
			in:fly={{ duration: 300, y: 300, easing: cubicOut }}
		>
			<h2 class="text-4xl text-main pb-4">You won!</h2>
			<div class="flex flex-col gap-4">
				<ButtonSimple on:click={() => newGame()}>New Game</ButtonSimple>
				<ButtonSimple on:click={() => (showGameOverDialog = false)}>Close</ButtonSimple>
			</div>
		</div>
	</button>
{/if}
