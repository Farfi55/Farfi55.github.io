<script lang="ts">
	import { getTechnologiesByType, tecnologyType } from '$lib/technologies';
	import type { Step } from '$lib/types';
	import { titleCase } from '$lib/utils';
	import Button from './Button.svelte';
	import Particles from './Particles.svelte';
	import Steps from './Steps.svelte';
	import Tech from './Tech.svelte';

	let steps: Step[] = [
		{
			name: 'School timetable',
			href: '/projects#school-timetable',
			icon: 'fa-solid fa-school'
		},
		{
			name: 'CookedUp',
			href: '/projects#cookedup',
			icon: 'fa-brands fa-unity'
		},
		{
			name: 'RiskASP',
			href: '/projects#risk-asp',
			icon: 'fa-solid fa-earth-europe'
		}
	];

	let aboutFacts = [
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
			name: 'AI and Cyber Security Student',
			description:
				`At <a href="https://www.unical.it/?lang=en" target="_blank" class="link-main poppins italic">
					University of Calabria</a
				>, I learned to build <b>Artificial Intelligence agents</b> using <b>Answer Set Programming</b> (ASP) from the most brilliant minds in the field. And I've used this knowledge to build a few projects, like ` +
				`<a class='link-main font-semibold' href='/projects#school-timetable'>School Timetable</a> and ` +
				"<a class='link-main font-semibold' href='/projects#cookedup'>CookedUp</a>."
		}
	];
</script>

<Particles />
<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-3 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:col-span-2 lg:text-left amber-">
			<h1 class="text-3xl sm:text-5xl pb-2">
				Ciao! I'm <span class="poppins text-main">Alessio Farfaglia</span>!<br />
			</h1>

			<p class="text-base sm:text-lg md:text-xl pb-4">
				I'm a <span class="poppins text-main font-semibold">Software Engineering</span> just
				graduated from the
				<a href="https://www.unical.it/?lang=en" target="_blank" class="link-main poppins">
					University of Calabria</a
				>
				🇮🇹.
				<br />
				that loves making
				<span class="poppins text-main font-semibold">Games</span>,
				<span class="poppins text-main font-semibold">Websites</span>
				and <span class="poppins text-main font-semibold">AI projects</span>.
			</p>

			<div class="flex items-center justify-center lg:hidden">
				<img
					src="/assets/graduation_face.png"
					alt=""
					class="border-8 rounded-full border-amber-600 bg-amber-600/20 dark:border-amber-700 dark:bg-amber-600/20 max-w-xs"
				/>
			</div>

			<p class="text-base sm:text-lg md:text-xl pb-5 pt-4">
				Here are some of the technologies that I have experience with:
			</p>
			{#each Object.keys(tecnologyType) as type}
				{#if getTechnologiesByType(type).length > 0}
					<div class="flex gap-4 items-start pb-2">
						<p class="w-28 shrink-0 text-base poppins text-main font-semibold">
							{'>'}
							{titleCase(type)}
						</p>
						<ul class="flex flex-1 flex-wrap justify-start gap-x-2 gap-y-1 sm:gap-x-4">
							{#each getTechnologiesByType(type) as technology (technology.name)}
								{#if !technology.hide}
									<Tech {technology} />
								{/if}
							{/each}
						</ul>
					</div>
				{/if}
			{/each}
		</div>
		<div
			class="hidden lg:flex flex-col lg:h-full text-center lg:col-span-1 lg:text-left items-left max-w-[350px] mx-auto"
		>
			<img src="/assets/graduation.png" alt="Alessio Farfaglia at graduation" />
			<hr class="border-amber-600 dark:border-amber-700 border-b-4 w-3/4 rounded-b ml-[14.7%]" />

			<p class="text-sm mt-2 text-muted text-center">That's me at my graduation ceremony 🎓</p>
		</div>
	</section>

	<div class="flex justify-center pt-8">
		<Button href="/#projects">
			Scroll down <i class="fa-solid fa-arrow-down"></i>
		</Button>
	</div>
	<section id="projects" class="py-20 lg:py-28 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center">
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-main">see</span> my work?
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
		<div class="flex items-center justify-center">
			<Button href="/projects">See more</Button>
		</div>
	</section>

	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-10 sm:gap-16 md:gap-16 scroll-mt-20 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative py-6
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-amber-600 dark:before:bg-amber-700 before:rounded
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-amber-600 dark:after:bg-amber-700 after:rounded"
		>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-main">more about</span> me.
			</h3>
		</div>

		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px] text-start">
			{#each aboutFacts as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-stone-500">
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
	<div class="flex items-center justify-center mb-20">
		<Button href="/contact">Get in touch</Button>
	</div>
</main>
