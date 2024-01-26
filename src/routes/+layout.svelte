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
			class="link-main bg-stone-900 border border-stone-600 text-stone-600 hover:border-amber-700 rounded-full d-flex flex-items-center flex-justify-center"
			style="width: 40px; height: 40px;"
			title="Go to top"
			aria-label="Scroll to top"
			on:click={goTop}
		>
			<i class="fa-solid fa-arrow-up"></i>
		</button>
	</div>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
