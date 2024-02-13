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

	let board: Board | undefined;

	onMount(() => {
		board = generateSolvedBoard();
	});

	function onCellClicked(event: CustomEvent<{ row: number; col: number }>) {
		const { row, col } = event.detail;
		console.log(`Cell clicked: row ${row}, col ${col}`);

		board[row][col] = (board[row][col] + 1) % 10;
	}
</script>

<section class="p-4">
	<h1 class="text-main text-4xl pb-8">Sudoku</h1>
	<div class="flex justify-center py-12">
		<SudokuBoard {board} on:cellClicked={onCellClicked}></SudokuBoard>
	</div>
</section>
