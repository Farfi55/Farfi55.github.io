<script lang="ts">
	import { getTechnology } from '$lib/technologies';
	import type { Technology } from '$lib/types';
	export let openNewTab: boolean = true;

	export let name: string | null = null;
	export let technology: Technology | null = null;

	$: {
		if (name) {
			technology = getTechnology(name);
		}
	}

	export let padding = 'px-1 py-0.5';
	export let color = '';

	if (color === '' && technology?.color) {
		color = technology.color;
	}
</script>

{#if technology}
	<a href={technology.website ?? '#'} target={openNewTab ? '_blank' : '_self'} class="inline-block">
		<div
			class="flex {padding} gap-2 bg-stone-100 text-normal dark:bg-stone-800 dark:text-white rounded-md border-b-2 border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 dark:border-stone-900 dark:hover:border-stone-800 hover:translate-y-1 duration-200 align-baseline"
		>
			{#if technology.iconSlug}
				<img
					height="24"
					width="24"
					src="https://cdn.simpleicons.org/{technology.iconSlug}/{color}"
					alt={technology.name}
					class="align-baseline"
				/>
			{/if}

			<span class="self-baseline">{technology.name}</span>
		</div>
	</a>
{/if}
