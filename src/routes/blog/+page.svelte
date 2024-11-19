<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="p-4">
	<h1 class="text-main text-4xl pb-8">Latest posts</h1>
	<ul class="grid grid-cols items-center">
		{#each data.posts as post, index}
			<a href="blog/{post.slug}">
				<li class="p-4 bg-stone-200 dark:bg-stone-900 rounded-lg shadow-lg">
					<h2 class="text-main hover:underline capitalize text-2xl sm:text-3xl md:text-4xl">
						{post.title}
					</h2>
					<p class="text-muted">{formatDate(post.date)}</p>
					<p>{post.description}</p>
				</li>
			</a>
			{#if index !== data.posts.length - 1}
				<hr class="my-12 mx-8 border-stone-600 dark:border-stone-700" />
			{/if}
		{:else}
			<p class="text-muted text-2xl">I'm sorry, there aren't any blog posts yet, stay tuned!</p>
		{/each}
	</ul>
</section>
