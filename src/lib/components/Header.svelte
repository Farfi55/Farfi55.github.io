<script lang="ts">
	import Button from './Button.svelte';
	import ThemeSelector from './ThemeSelector.svelte';

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
</script>

<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex item-center items-center justify-between border-b-2 border-solid ' +
		(y > 0
			? 'py-4 text-white bg-stone-700 dark:bg-stone-900 border-amber-700 dark:border-amber-900'
			: 'py-6 border-none border-transparent  ')}
>
	<!-- TODO: amburger menu for mobile -->

	<h1 class="font-medium">
		<a href="/" class="link-main duration-200"><b class="font-bold poppins">Alessio</b> Farfaglia</a
		>
	</h1>
	<div class="hidden sm:flex items-center gap-4">
		{#each tabs as tab}
			<a href={tab.href} class="link-main duration-200">
				<p>{tab.text}</p>
			</a>
		{/each}
	</div>

	<div class="flex gap-2">
		<div class="">
			<Button href="/contact">Get in touch</Button>
		</div>
		<div class="flex items-center">
			<ThemeSelector />
		</div>
	</div>
</header>
