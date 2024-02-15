<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{
		click: void;
	}>();

	export let active = false;

	export let disabled = false;
</script>

<button
	class="relative border-0 rounded-lg w-full h-12 text-xl poppins
				hover:bg-stone-300 dark:hover:bg-stone-700
				hover:border-amber-600 hover:dark:border-amber-700
				duration-150
				active:translate-y-0.5 active:border-b-0
				disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
				{active
		? 'bg-stone-300 dark:bg-stone-700 border-amber-600 dark:border-amber-700 translate-y-0.5' +
		  ' before:w-30 before:h-12 text-main font-bold'
		: 'bg-stone-200 dark:bg-stone-800 border-stone-400 dark:border-stone-700 border-b-4 border-x-transparent border-t-transparent shadow'}"

	aria-pressed={active}
	disabled={disabled}
	on:click={() => dispatch('click')}
	{...$$restProps}
>
	<slot />
</button>
