<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicIn, cubicOut, elasticIn, elasticInOut, elasticOut } from 'svelte/easing';
	import { fade, fly, scale, slide } from 'svelte/transition';
	const dispatch = createEventDispatcher<{
		cellClicked: { row: number; col: number };
		cellClickedAlt: { row: number; col: number };
	}>();

	export let board: number[][] | undefined;
	export let selectedNumber: number;
	export let startingBoard: number[][] | undefined;
	export let annotations: boolean[][][];

	export let disabled: boolean = false;
</script>

{#if board}
	<section
		class="flex flex-col bg-stone-100 border dark:bg-stone-900 items-center justify-center w-full sm:w-fit h-fit rounded-xl p-2 sm:p-4"
	>
		{#each board as row, i}
			<div class="flex w-full">
				{#each row as cell, j}
					{@const isFixed = startingBoard && startingBoard[i][j] !== 0}
					{@const annotationsCell = annotations[i][j]}

					<button
						on:contextmenu={(e) => {
							e.preventDefault();
							dispatch('cellClickedAlt', { row: i, col: j });
						}}
						on:click={() => dispatch('cellClicked', { row: i, col: j })}
						class="flex-grow group p-1 h-10 w-12 sm:h-12 flex items-center justify-center
						border-stone-400 dark:border-stone-700
						
						{[2, 5].includes(i)
							? 'border-b-4 '
							: i !== 8
							  ? 'border-b-2 border-b-stone-300 dark:border-b-stone-800'
							  : ' '}
						{[2, 5].includes(j)
							? 'border-r-4 '
							: j !== 8
							  ? 'border-r-2 border-r-stone-300 dark:border-r-stone-800'
							  : ' '}
					"
					>
						<div
							class="w-full h-full group-hover:bg-stone-200 dark:group-hover:bg-stone-800 {isFixed
								? ' bg-stone-200 dark:bg-stone-800 rounded-full'
								: 'bg-transparent rounded'}"
						>
							{#key cell}
								{#if cell !== 0}
									<div
										class="flex w-full h-full items-center justify-center text-lg sm:text-xl poppins
								{cell === selectedNumber ? 'font-bold text-main' : 'text-stone-700 dark:text-stone-300'}"
										in:slide={{ duration: 100, axis: 'y', easing: cubicOut }}
									>
										{cell || ''}
									</div>
								{:else}
									<div class="flex w-full h-full flex-wrap">
										{#each annotationsCell as annotation, k}
											{#if k > 0}
												<div
													class="flex w-1/3 h-1/3 items-center justify-center text-xs
													{selectedNumber === k ? 'font-bold text-main' : 'text-stone-600 dark:text-stone-300'}"
													in:fade={{ duration: 100, easing: cubicOut }}
												>
													{annotation ? k : ''}
												</div>
											{/if}
										{/each}
									</div>
								{/if}
							{/key}
						</div>
					</button>
				{/each}
			</div>
		{/each}
	</section>
{:else}
	<p>Loading...</p>
{/if}
