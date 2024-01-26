<script lang="ts">
	import { fly } from 'svelte/transition';
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button
	on:click={toggleTheme}
	aria-label="Toggle theme"
	class="mx-auto border-2 w-7 h-7 rounded-full text-amber-600 dark:text-stone-400 border-stone-400/40 dark:border-stone-800 hover:border-amber-600 hover:dark:border-stone-400 transition-colors duration-200"
>
	{#if $theme === 'dark'}
		<div in:fly={{ y: -10, duration: 100, delay: 100 }} out:fly={{ y: -10, duration: 100 }}>
			<i class="fa fa-moon"></i>
		</div>
	{:else}
		<div in:fly={{ y: 10, duration: 100, delay: 100 }} out:fly={{ y: 10, duration: 100 }}>
			<i class="fa fa-sun"></i>
		</div>
	{/if}
</button>
