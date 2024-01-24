<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	import { getTecnology } from '$lib/Tecnologies';
	import Tech from '$lib/components/Tech.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="p-4">
	<hgroup>
		<h1 class="poppins text-main text-4xl sm:text-5xl md:text-6xl py-6 sm:py-8 md:py-10">
			{data.meta.title}
		</h1>
		<p class="text-muted py-3">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="flex gap-2">
		<span>Tags:</span>
		{#each data.meta.tags as tag}
			<Tech tecnology={getTecnology(tag)}></Tech>
		{/each}
	</div>

	<section class="prose">
		<svelte:component this={data.content} />
	</section>
</article>
