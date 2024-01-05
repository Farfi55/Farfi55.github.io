<script lang="ts">
	import { tecnologies } from '$lib/Tecnologies';
	import { get } from 'svelte/store';
	import type { Step } from '../../app';
	import Steps from './Steps.svelte';
	import Tech from './Tech.svelte';

	let steps: Step[] = [
		{
			name: 'School timetable',
			icon: 'fa-solid fa-school'
		},
		{
			name: 'CookedUp',
			icon: 'fa-brands fa-unity'
		},
		{
			name: 'RiskASP',
			icon: 'fa-solid fa-earth-europe'
		}
	];

	let benefits = [
		{
			name: 'a passionate nerd',
			description:
				"I'm a nerd at the very core, I love programming and building interactive experiences, let it be a game or a website, I'm always up for it.<br>I love learning new things and experimenting with new technologies, for example this website is built using SvelteKit, which I'm learning right now."
		},
		{
			name: 'a problem solver',
			description:
				"from the high school problem solving competitions, to building enterprise level applications my role was always to analyze the problem at hand and solving it in a fast and sensible way.<br>Over the years I've gained experience in many different fields of computer science, from web development to game development, from AI to databases. I'm always up for a challenge and the next problem to solve."
		},
		{
			name: 'An Artificial Intelligence Student',
			description:
				'At the University of Calabria, I learned to build Artificial Intelligence agents using Answer Set Programming (ASP) from the most brilliant minds in the field.'
		}
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8 sm:py-14">
		<div
			class="flex flex-col lg:justify-center text-center lg:col-span-2 lg:text-left gap-6 md:gap-8"
		>
			<h2 class="font-semibold text-3xl sm:text-5xl">
				Ciao! I'm <span class="poppins text-violet-400">Alessio</span> Farfaglia<br />
				<span class="poppins text-violet-400">Computer Science</span> Student
			</h2>

			<p>
				I'm a <span class="poppins text-violet-400">Computer Science</span> student at
				<a href="https://www.unical.it/?lang=en" target="_blank" class="underline">
					University of Calabria</a
				>, Italy.
				<br />
				I'm passionate about
				<span class="poppins text-violet-400" title="Game development">Game Dev</span>,
				<span class="poppins text-violet-400" title="Web development">Web Dev</span>
				and <span class="poppins text-violet-400" title="Artificial Intelligence">AI</span>.
			</p>

			<p class="text-base sm:text-lg md:text-xl">
				My <span class="poppins text-violet-400">Favourite tech</span> includes:
			</p>
			<ul class="flex flex-wrap justify-center lg:justify-start gap-4">
				{#each tecnologies as tecnology}
					<Tech {tecnology} padding="px-1.5 py-1" />
				{/each}
			</ul>
		</div>
	</section>

	<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">A few of my projects</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-violet-400">see</span> my work?
			</h3>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Steps step={steps[0]}>
				<p class="">
					A <Tech name="Svelte" /> web app to create and manage your school timetable.<br />
					Contains automatic timetable generation using <Tech name="ASP" />.
				</p>
			</Steps>
			<Steps step={steps[1]}>
				<p>
					{steps[1].name} is a 3D <Tech name="Unity" /> game made for my bachelor's degree thesis, inspired
					by
					<i>Overcooked</i>
					and <i>PlateUp</i>.<br />
					BOTs behaviour is implemented using <Tech name="ASP" />.
				</p>
			</Steps>
			<Steps step={steps[2]}>
				<p>
					{steps[2].name} is a <Tech name="Unity" /> implementation of the classic
					<i>Risk</i> board game.<br />
					BOTs behaviour is implemented using <Tech name="ASP" />.
				</p>
			</Steps>
		</div>
		<a
			href="#"
			class="mx-auto px-4 py-1 rounded-md border border-solid border-white flex items-center hover:border-violet-700 -mt-16 duration-200"
		>
			<p class="text-base sm:text-lg md:text-xl">See more</p>
		</a>
	</section>

	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-10 sm:gap-16 md:gap-16 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative py-6
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 before:rounded
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 after:rounded"
		>
			<h6 class="text-lg sm:text-xl md:text-xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-violet-400">about</span> me.
			</h3>
		</div>

		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] text-start">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p class="text-base">
							{@html benefit.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
