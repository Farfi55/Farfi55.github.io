<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import ThemeSelector from './ThemeSelector.svelte';
	import { flip } from 'svelte/animate';

	export let y: number;

	let tabs = [
		{
			href: '/projects',
			text: 'Projects'
		},
		{
			href: '/blog',
			text: 'Blog'
		}
	];

	let isDrawerOpen = false;

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	function closeDrawer() {
		isDrawerOpen = false;
	}
</script>

<header class="sticky z-10 top-0">
	<div
		class={'duration-200 px-6 flex gap-3 item-center items-center border-b-2 border-solid ' +
			(y > 0 || isDrawerOpen
				? 'py-4 text-white bg-stone-700 dark:bg-stone-900 border-amber-700 dark:border-amber-900'
				: 'py-6 border-none border-transparent  ')}
	>
		<div class="inline sm:hidden pe-2">
			<button on:click={toggleDrawer} class="text-2xl items-center w-5">
				{#if isDrawerOpen}
					<i class="fas fa-times" in:fade></i>
				{:else}
					<i class="fas fa-bars" in:fade></i>
				{/if}
			</button>
		</div>
		<h1 class="font-medium h-full">
			<a href="/" class="link-main duration-200"
				><b class="font-bold poppins">Alessio</b> Farfaglia</a
			>
		</h1>
		<div class="hidden sm:flex items-center gap-4">
			{#each tabs as tab}
				<a href={tab.href} class="link-main duration-200">
					<p>{tab.text}</p>
				</a>
			{/each}
		</div>

		<div class="flex gap-2 ms-auto">
			<div class="">
				<Button href="/contact">Get in touch</Button>
			</div>
			<div class="hidden sm:flex items-center">
				<ThemeSelector />
			</div>
		</div>
	</div>
	{#if isDrawerOpen}
		<button
			class="fixed -z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 duration-200"
			on:click={closeDrawer}
			in:fade={{ duration: 200 }}
			aria-label="Close drawer"
		></button>
		<div
			class="absolute w-full h-fit bg-stone-700 dark:bg-stone-900 duration-200 px-6 flex border-b-2 border-solid py-4 text-white border-amber-700 dark:border-amber-900"
			in:slide={{ duration: 200, delay: y > 0 ? 0 : 200 }}
			out:slide={{ duration: 200 }}
		>
			<ul class="flex flex-col gap-3 text-lg">
				<li>
					<a href="/" class="link-main duration-200" on:click={closeDrawer}>
						<p>
							<i class="fa fa-home pe-2"></i>
							Home
						</p>
					</a>
				</li>
				<li>
					<a href="/projects" class="link-main duration-200" on:click={closeDrawer}>
						<p>
							<i class="fa-solid fa-cubes pe-2"></i>
							<!-- <i class="fa-solid fa-box-archive pe-2"></i> -->
							<!-- <i class="fa fa-project-diagram pe-2"></i> -->
							Projects
						</p>
					</a>
				</li>
				<li>
					<a href="/blog" class="link-main duration-200" on:click={closeDrawer}>
						<p>
							<i class="fa-solid fa-quote-left pe-2"></i>
							<!-- <i class="fa fa-blog pe-2"></i> -->
							Blog
						</p>
					</a>
				</li>

				<li>
					<a href="/contact" class="link-main duration-200" on:click={closeDrawer}>
						<p>
							<i class="fa fa-envelope pe-2"></i>
							Contact
						</p>
					</a>
				</li>
			</ul>
			<div class="flex gap-2 ms-auto items-end">
				<ThemeSelector />
			</div>
		</div>
	{/if}
</header>
