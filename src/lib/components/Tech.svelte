<script lang="ts">
	import { getTecnology } from '$lib/Tecnologies';
	import type { Tecnology } from '$lib/types';
	export let openNewTab: boolean = true;

	export let name: string | null = null;
	export let tecnology: Tecnology | null = null;

	$: {
		if (name) {
			tecnology = getTecnology(name);
		}
	}

	export let padding = 'px-1 py-0.5';
	export let color = '';

	if (color === '' && tecnology?.color) {
		color = tecnology.color;
	}
</script>

{#if tecnology}
	<a href={tecnology.website ?? '#'} target={openNewTab ? '_blank' : '_self'} class="inline-block">
		<div
			class="flex {padding} gap-2 bg-stone-100 text-normal dark:bg-stone-800 dark:text-white rounded-md border-b-2 border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 dark:border-stone-900 dark:hover:border-stone-800 hover:translate-y-1 duration-200 align-baseline"
		>
			{#if tecnology.iconSlug}
				<img
					height="24"
					width="24"
					src="https://cdn.simpleicons.org/{tecnology.iconSlug}/{color}"
					alt={tecnology.name}
					class="align-baseline"
				/>
			{/if}

			<span class="self-baseline">{tecnology.name}</span>
		</div>
	</a>
{/if}
