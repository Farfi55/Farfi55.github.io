<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicIn, elasticIn, elasticInOut, elasticOut } from 'svelte/easing';
	import { fade, fly, scale, slide } from 'svelte/transition';
	const dispatch = createEventDispatcher<{
		cellClicked: { row: number; col: number };
		cellClickedAlt: { row: number; col: number };
	}>();

	export let board: number[][] | undefined;
	export let selectedNumber: number | undefined;
</script>

{#if board}
	<section
		class="flex flex-col bg-stone-100 border dark:bg-stone-900 items-center justify-center w-full sm:w-fit h-fit rounded-xl p-2 sm:p-4"
	>
		{#each board as row, i}
			<div class="flex w-full">
				{#each row as cell, j}
					<button
						on:contextmenu={(e) => {
							e.preventDefault();
							dispatch('cellClickedAlt', { row: i, col: j });
						}}
						on:click={() => dispatch('cellClicked', { row: i, col: j })}
						class="flex-grow group h-10 w-12 sm:h-12 flex items-center justify-center
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
							class="flex rounded w-full h-full group-hover:bg-stone-200 bg-transparent dark:group-hover:bg-stone-800"
						>
							{#key cell}
								<span
									class="flex w-full h-full items-center justify-center text-lg sm:text-xl text-stone-700 dark:text-stone-300 poppins
									{cell === selectedNumber ? 'font-bold text-main' : ''}"
									in:slide={{ duration: 100, axis: 'y', easing: cubicIn }}
								>
									{cell || ''}
								</span>
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
