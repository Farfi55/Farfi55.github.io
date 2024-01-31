<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import PageTransition from './PageTransition.svelte';

	let y: number;

	let innerHeight: number;

	let innerWidth: number;

	export let data;

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<div class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen">
	<Header {y} />

	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
	<Footer />

	<div
		class="fixed bottom-0 mb-4 right-0 mr-4 {y > 0
			? 'flex pointer-events-auto'
			: 'hidden pointer-events-none '}"
	>
		<button
			class="link-main border bg-stone-300 border-stone-400 text-stone-400 dark:bg-stone-900 dark:border-stone-600 dark:text-stone-600 hover:border-amber-500 hover:dark:border-amber-700 rounded-full d-flex flex-items-center flex-justify-center w-10 h-10"
			title="Go to top"
			aria-label="Scroll to top"
			on:click={goTop}
		>
			<i class="fa-solid fa-arrow-up"></i>
		</button>
	</div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
