<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import ThemeSelector from './ThemeSelector.svelte';
	import { page } from '$app/stores';

	export let y: number;

	let tabs = [
		{
			href: '/',
			text: 'Home',
			icon: 'fa-solid fa-home',
			hideInHeader: true
		},
		{
			href: '/projects',
			text: 'Projects',
			icon: 'fa-solid fa-cubes'
		},
		{
			href: '/blog',
			text: 'Blog',
			icon: 'fa-solid fa-quote-left'
		},
		{
			href: '/contact',
			text: 'Contact',
			icon: 'fa fa-envelope',
			hideInHeader: true
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
		class={'duration-200 px-6 flex item-center items-center border-b-2 border-solid ' +
			(y > 0 || isDrawerOpen
				? 'py-4 text-white bg-stone-700 dark:bg-stone-900 border-amber-700 dark:border-amber-900'
				: 'py-6 border-none border-transparent')}
	>
		<div class="inline sm:hidden pe-4">
			<button on:click={toggleDrawer} class="text-2xl items-center w-5">
				{#if isDrawerOpen}
					<i class="fas fa-times" in:fade></i>
				{:else}
					<i class="fas fa-bars" in:fade></i>
				{/if}
			</button>
		</div>
		<h1 class="font-medium h-full pe-7">
			<a
				href="/"
				class="link-main duration-200 border-b {$page.route.id === '/'
					? 'border-main'
					: 'border-transparent'}"
			>
				<b class="font-bold poppins">Alessio</b> Farfaglia</a
			>
		</h1>
		<div class="hidden sm:flex items-center gap-5">
			{#each tabs as tab (tab.href)}
				{#if !tab.hideInHeader}
					<a
						href={tab.href}
						class="link-main duration-200 border-b {tab.href === $page.route.id
							? 'border-main'
							: 'border-transparent'}"
					>
						<p><i class={tab.icon}></i> {tab.text}</p>
					</a>
				{/if}
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
				{#each tabs as tab}
					<li>
						<a
							href={tab.href}
							class="link-main duration-200 border-b pb-1 px-1 {tab.href === $page.route.id
								? 'border-main'
								: 'border-transparent'}"
							on:click={closeDrawer}
						>
							<i class="{tab.icon} w-7"></i>
							{tab.text}
						</a>
					</li>
				{/each}
			</ul>
			<div class="flex gap-2 ms-auto items-end">
				<ThemeSelector />
			</div>
		</div>
	{/if}
</header>
