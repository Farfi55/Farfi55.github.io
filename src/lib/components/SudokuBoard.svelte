<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		cellClicked: { row: number; col: number };
	}>();

	export let board: number[][] | undefined;
</script>

{#if board}
	<section
		class="flex flex-col bg-stone-100 border dark:bg-stone-900 items-center justify-center w-full sm:w-fit h-fit rounded-xl p-4"
	>
		{#each board as row, i}
			<div class="flex w-full">
				{#each row as cell, j}
					<button
						on:click={() => dispatch('cellClicked', { row: i, col: j })}
						class="flex-grow group h-10 w-12 sm:h-12 flex items-center justify-center
						border-stone-400 dark:border-stone-700
						text-stone-700 dark:text-stone-300 text-xl md:text-2xl poppins p-1
						
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
							class="flex bg-transparent rounded w-full h-full group-hover:bg-stone-200 dark:group-hover:bg-stone-800 items-center justify-center"
						>
							{cell || ' '}
						</div>
					</button>
				{/each}
			</div>
		{/each}
	</section>
{:else}
	<p>Loading...</p>
{/if}
