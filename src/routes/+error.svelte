<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 items-center py-8 px-4">
	<div>
		<h1 class="text-4xl poppins py-4">
			<span class="text-5xl poppins">error {$page.status}</span><br />
			{$page.error?.message}
		</h1>

		{#if $page.status === 404}
			<p class="py-3">
				if you typed <span class="decoration-dashed italic font-semibold"
					>"{$page.url.pathname}"</span
				> manually, check for typos
			</p>
		{/if}

		<div class="flex py-4">
			<Button href="/">Go back home</Button>
		</div>
	</div>
	<div class="p-5">
		<img
			src="https://http.dog/{$page.status}.jpg"
			alt="{$page.status} status code error image"
			class="rounded w-auto"
		/>
	</div>
</div>
