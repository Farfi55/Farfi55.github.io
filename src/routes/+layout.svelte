<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let y: number;

	let innerHeight: number;

	let innerWidth: number;
</script>

<div class="relative flex flex-col max-w-[1440px] mx-auto w-full text-sm sm:text-base min-h-screen">
	<div
		class={'fixed bottom-0 w-full duration-200 flex p-10 z-[10] ' +
			(y > 0 ? 'opacity-100 pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<button>
			<i class="fa-solid fa-arrow-up"></i>
		</button>
	</div>

	<Navbar />
	<slot />
	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
