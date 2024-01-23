<script lang="ts">
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
	class={'sticky z-[10] top-0 duration-300 px-6 flex item-center items-center justify-between border-b-2 border-solid ' +
		(y > 0
			? 'py-4 bg-stone-600 dark:bg-stone-900 border-amber-700 dark:border-amber-900'
			: 'py-6 border-none border-transparent  ')}
>
	<h1 class="font-medium">
		<a href="/"><b class="font-bold poppins">Alessio</b> Farfaglia</a>
	</h1>
	<div class="hidden sm:flex items-center gap-4">
		{#each tabs as tab}
			<a href={tab.href} class="duration-200 hover:text-main">
				<p>{tab.text}</p>
			</a>
		{/each}
	</div>

	<a
		class="shadow-amber-600/10 shadow-xl relative overflow-hidden px-5 py-2 group rounded-full dark:text-white dark:bg-amber-700 text-black bg-amber-400"
		href="/contact"
	>
		<div
			class="absolute top-0 right-full w-full h-full bg-amber-500 opacity-50 group-hover:transtone-x-full z-0 duration-200"
		></div>
		<h4 class="relative">Get in touch</h4>
	</a>
</header>
