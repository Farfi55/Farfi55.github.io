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

	let board: Board = BLANK_BOARD;
	let startingBoard: Board = BLANK_BOARD;
	let annotations: boolean[][][] = newAnnotations();

	let selectedNumber: number = 0;
	let annotationsMode = false;

	let numbersLeftToPlace = Array(10).fill(0);

	let gameOver = false;
	let showGameOverDialog = false;
	let startedAt = Date.now();
	let gameDuration: string = '0:00';

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
				if (Math.random() < 0.5) {
					tmpBoard[i][j] = 0;
				}
			}
		}

		board = tmpBoard;
		startingBoard = tmpBoard.map((row) => [...row]);
		annotations = newAnnotations();
		numbersLeftToPlace = getNumbersLeftToPlace();

		// trigger reactivity
		board = board;
	}

	function onCellClicked(event: CustomEvent<{ row: number; col: number }>) {
		if (isDisabled()) return;
		const { row, col } = event.detail;

		if (annotationsMode) {
			writeAnnotation(row, col);
		} else {
			writeNumber(row, col);
		}
	}

	function onCellClickedAlt(event: CustomEvent<{ row: number; col: number }>) {
		if (isDisabled()) return;
		const { row, col } = event.detail;

		if (annotationsMode) {
			writeNumber(row, col);
		} else {
			writeAnnotation(row, col);
		}
	}

	function writeNumber(row: number, col: number) {
		if (startingBoard && startingBoard[row][col] !== 0) return;

		let oldValue = board[row][col];
		// if the cell already contains the selected number, erase it
		if (oldValue === selectedNumber) {
			if (selectedNumber === 0) {
				annotations[row][col] = Array(10).fill(false);
			}

			board[row][col] = 0;
		} else {
			board[row][col] = selectedNumber;
			let isCompleted = checkBoardCompleted(board);
			if (isCompleted) {
				onBoardCompleted();
			}
		}

		numbersLeftToPlace = getNumbersLeftToPlace();
	}

	function writeAnnotation(row: number, col: number) {
		if (startingBoard && startingBoard[row][col] !== 0) return;
		if (board[row][col] !== 0) {
			board[row][col] = 0;
		}

		if (selectedNumber === 0) {
			annotations[row][col] = Array(10).fill(false);
		} else {
			annotations[row][col][selectedNumber] = !annotations[row][col][selectedNumber];
		}
	}

	function isDisabled() {
		return gameOver || board === BLANK_BOARD;
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
			default:
				break;
		}
	}

	function newAnnotations() {
		return Array(9)
			.fill(0)
			.map(() =>
				Array(9)
					.fill(0)
					.map(() => Array(10).fill(false))
			);
	}

	function getNumbersLeftToPlace(): number[] {
		let leftToPlace = Array(10).fill(9);
		board.forEach((row) => row.forEach((cell) => (leftToPlace[cell] -= 1)));
		return leftToPlace;
	}

	function onBoardCompleted() {
		gameOver = true;
		let gameDurationSeconds = Math.floor((Date.now() - startedAt) / 1000);
		gameDuration = `${Math.floor(gameDurationSeconds / 60)}:${(gameDurationSeconds % 60)
			.toString()
			.padStart(2, '0')}`;
		showGameOverDialog = true;
	}

	function restartGame() {
		if (isDisabled()) return;
		board = startingBoard.map((row) => [...row]);
		annotations = newAnnotations();
		numbersLeftToPlace = getNumbersLeftToPlace();
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<section class="p-4">
	<div class="flex gap-4">
		<h1 class="text-main text-4xl">Sudoku</h1>
		<div class="w-40">
			<ButtonSimple on:click={() => newGame()}>New Game</ButtonSimple>
		</div>
		<div class="w-40">
			<ButtonSimple on:click={() => restartGame()}>Restart</ButtonSimple>
		</div>
	</div>

	<div class="flex flex-col md:flex-row items-center justify-center gap-12 py-12">
		<SudokuBoard
			{board}
			on:cellClicked={onCellClicked}
			on:cellClickedAlt={onCellClickedAlt}
			{selectedNumber}
			{startingBoard}
			{annotations}
			disabled={isDisabled()}
		></SudokuBoard>

		<div
			class="flex md:w-48 justify-center md:justify-center flex-wrap pb-8 text-2xl text-stone-700 dark:text-stone-300 gap-1 gap-y-5 md:gap-3"
		>
			{#each [...numbers] as number}
				{@const leftToPlace = numbersLeftToPlace[number]}
				<div class="w-12 h-fit relative">
					<ButtonSimple
						on:click={() => (selectedNumber = number)}
						active={selectedNumber === number}
					>
						{number}
						<span class="sr-only">Numbers left to place</span>
						{#key leftToPlace}
							<div
								class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-1 -end-1 text-stone-500 dark:text-stone-400 bg-stone-200 dark:bg-stone-800 shadow
								{leftToPlace === 0 ? 'hidden' : ''}"
							>
								<span in:fade={{ easing: quadOut, duration: 300 }}>{leftToPlace}</span>
							</div>
						{/key}
					</ButtonSimple>
				</div>
			{/each}
			<div class="w-12 h-fit relative">
				<ButtonSimple
					on:click={() => (annotationsMode = !annotationsMode)}
					active={annotationsMode}
					aria-label="Annotations mode"
				>
					<i class="fas fa-pencil-alt"></i>
				</ButtonSimple>
			</div>
			<div class="w-12 h-fit relative">
				<ButtonSimple
					on:click={() => (selectedNumber = 0)}
					active={selectedNumber === 0}
					aria-label="Erase"
				>
					<i class="fas fa-eraser"></i>
				</ButtonSimple>
			</div>
		</div>
	</div>
</section>

<!-- you won dialog with backdrop -->

{#if showGameOverDialog}
	<button
		class="fixed inset-0 z-10 w-full flex items-center justify-center bg-black bg-opacity-50"
		in:fade={{ duration: 200, easing: quadInOut }}
		on:click={() => (showGameOverDialog = false)}
		aria-label="Close dialog"
	>
		<div
			class="bg-stone-100 dark:bg-stone-900 rounded-lg p-8 text-center"
			in:fly={{ duration: 300, y: 300, easing: cubicOut }}
			on:click={(e) => e.stopPropagation()}
		>
			<h2 class="text-4xl text-main pb-4">You won!</h2>

			<p class="text-stone-700 dark:text-stone-300 pb-4">
				You completed the game in {gameDuration} minutes
			</p>
			<div class="flex flex-col gap-4">
				<ButtonSimple on:click={() => newGame()}>New Game</ButtonSimple>
				<ButtonSimple on:click={() => (showGameOverDialog = false)}>Close</ButtonSimple>
			</div>
		</div>
	</button>
{/if}
