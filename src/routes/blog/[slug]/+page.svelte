<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	import Tech from '$lib/components/Tech.svelte';
	import './blog.css';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="container mx-auto">
	<article>
		<hgroup>
			<h1
				class="poppins text-main text-center text-4xl sm:text-5xl md:text-6xl py-6 sm:py-8 md:py-10"
			>
				{data.meta.title}
			</h1>

			{#if data.meta.subtitle}
				<h2>
					{data.meta.subtitle}
				</h2>
			{/if}
		</hgroup>

		<div class="flex justify-between flex-col sm:flex-row">
			<div>
				Tags:
				{#each data.meta.tags as tag}
					<div class="inline pe-2">
						<Tech name={tag}></Tech>
					</div>
				{/each}
			</div>
			<div class="pt-2 sm:pt-0">
				<p class="text-muted">Published at {formatDate(data.meta.date)}</p>
			</div>
		</div>

		<section class="prose pt-5">
			<svelte:component this={data.content} />
		</section>
	</article>
</div>
