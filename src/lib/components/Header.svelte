<script lang="ts">
	export let y: number;

	let tabs = [
		{
			href: '#',
			text: 'About me'
		},
		{
			href: '#projects',
			text: 'Projects'
		}
	];
</script>

<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex item-center justify-between border-b border-solid ' +
		(y > 0 ? 'py-4 bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent')}
>
	<h1 class="font-medium">
		<b class="font-bold poppins">Alessio</b> Farfaglia
	</h1>
	<div class="hidden sm:flex items-center gap-4">
		{#each tabs as tab, index}
			<a href={tab.href} class="duration-200 hover:text-violet-400">
				<p>{tab.text}</p>
			</a>
		{/each}
	</div>

	<a
		class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
		href="#"
		target="_blank"
	>
		<div
			class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
		></div>
		<h4 class="relative">Get in touch</h4>
	</a>
</header>
