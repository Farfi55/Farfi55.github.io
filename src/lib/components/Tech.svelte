<script lang="ts">
	import { getTechnology } from '$lib/technologies';
	import type { Technology } from '$lib/types';
	export let openNewTab: boolean = true;

	export let name: string | null = null;
	export let technology: Technology | null = null;
	let src:string = '';

	$: {
		if (name) {
			technology = getTechnology(name);
			if (color === '' && technology?.color) {
				color = technology.color;
			}
		}

		src = `https://cdn.simpleicons.org/${technology?.iconSlug}`;
		if (color) {
			src += `/${color}`;
		}
	}

	export let padding = 'p-1';
	export let color = '';

	if (color === '' && technology?.color) {
		color = technology.color;
	}

	
</script>

{#if technology}
	<a
		href={technology.website ?? '#'}
		target={openNewTab ? '_blank' : '_self'}
		class="inline-block min-w-fit"
	>
		<div
			class="flex {padding} gap-2 bg-stone-100 text-normal dark:bg-stone-800 dark:text-white rounded-md border-b-2 border-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 dark:border-stone-900 dark:hover:border-stone-800 hover:translate-y-1 duration-200 place-items-baseline"
		>
			{#if technology.iconSlug}
				{#if technology.iconSlug.startsWith('fa-')}
					<i class="{technology.iconSlug} text-base w-6 h-6 self-center text-center"></i>
				{:else}
					<img {src} class="w-6 h-6 self-center" />
				{/if}
			{/if}

			<span class="text-base">{technology.name}</span>
		</div>
	</a>
{/if}
