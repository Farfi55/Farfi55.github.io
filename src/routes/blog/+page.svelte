<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="p-4 grid grid-cols items-center">
		{#each data.posts as post, index}
			<li class="p-4 bg-stone-200 dark:bg-stone-900 rounded-lg">
				<a href="blog/{post.slug}">
					<h2 class="text-main hover:underline capitalize text-2xl sm:text-3xl md:text-4xl">
						{post.title}
					</h2>
				</a>
				<p class="text-muted">{formatDate(post.date)}</p>
				<p>{post.description}</p>
			</li>
			{#if index !== data.posts.length - 1}
				<hr class="my-12 mx-8 border-stone-600 dark:border-stone-700" />
			{/if}
		{/each}
	</ul>
</section>
