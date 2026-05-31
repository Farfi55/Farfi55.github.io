<script lang="ts">
	import { getTechnologiesByType, tecnologyType } from '$lib/technologies';
	import type { Step } from '$lib/types';
	import { titleCase } from '$lib/utils';
	import AboutFact from './AboutFact.svelte';
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
</script>

<Particles />
<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-4 py-8 gap-2 sm:py-8">
		<div class="flex flex-col lg:justify-center text-center lg:col-span-3 lg:text-left amber-">
			<div class="flex items-center justify-center lg:hidden">
				<img
					src="/assets/graduation_face.webp"
					alt=""
					class="border-8 rounded-full border-amber-600 bg-amber-600/20 dark:border-amber-700 dark:bg-amber-600/20 max-w-[200px]"
				/>
			</div>
			<h1 class="text-3xl sm:text-5xl pb-2">
				Ciao! I'm <b>Alessio Farfaglia</b>!<br />
			</h1>

			<p class="text-base sm:text-lg md:text-xl pb-4">
				I'm a <b>Software Engineering</b> just graduated from the
				<a href="https://www.unical.it/?lang=en" target="_blank" class="link-main poppins italic">
					University of Calabria</a
				>
				🇮🇹.
				<br />
				that loves making
				<b>Games</b>,
				<b>Websites</b>
				and <b>AI projects</b>.
			</p>

			<p class="text-base sm:text-lg md:text-xl pb-5 pt-4">
				Here are some of the technologies that I have experience with:
			</p>
			{#each Object.keys(tecnologyType) as type}
				{#if getTechnologiesByType(type).length > 0}
					<div class="flex gap-4 items-start pb-2">
						<b class="w-28 shrink-0 text-base">
							{'>'}
							{titleCase(type)}
						</b>
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
			class="hidden lg:flex flex-col lg:h-full text-center lg:col-span-1 lg:text-left items-left max-w-[300px] mx-auto"
		>
			<img src="/assets/graduation.webp" alt="Alessio Farfaglia at graduation" />
			<hr class="border-amber-600 dark:border-amber-700 border-b-4 w-3/4 rounded-b ml-[14.7%]" />

			<p class="text-sm mt-2 text-muted text-center">
				That's me at my graduation ceremony 🎓<br />Graduated
				<span class="font-semibold">with honors</span> on 15 December 2025
			</p>
		</div>
	</section>

	<div class="flex justify-center pt-2">
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
		<div class="flex flex-col gap-16 w-full mx-auto max-w-[800px] text-start">
			<AboutFact id="01" title="passionate nerd">
				<p>
					I'm a nerd at the very core 🤓, I love programming and building things, let it be a game
					or a website, I'm always up for it 🕹️.
					<br />
					I love learning new things and experimenting with the latest technologies 📖.
					<br />
					In my free time, I like to play and <b>develop games</b>, learning about
					<b>AI, Cyber Security</b> and history 📚.
				</p>
			</AboutFact>
			<AboutFact id="02" title="problem solver">
				<p>
					As a software engineer, the focus is always on <b>solving problems</b> 🪲, using my
					<b>brain</b>
					and <b>AI capabilities</b> to get the most out of my experience 🤖.<br />I don't trust the
					AI without human supervision, but it remains a powerful tool to know how to use and to use
					wisely 🧠.
				</p>
			</AboutFact>
			<AboutFact id="03" title="AI and Cyber Security Graduate">
				<p>
					At
					<a href="https://www.unical.it/?lang=en" target="_blank" class="link-main poppins italic">
						University of Calabria
					</a>, I learned a lot on <b>Artificial Intelligence</b>, <b>Cyber Security</b> and
					software engineering. <br /> <b>I'm now looking for new jobs and opportunities</b> to grow
					and to put my knowledge into practice, especially in the field of AI or Cyber Security, but
					I'm open to any opportunity that can help me grow as a software engineer and as a person.
				</p>
			</AboutFact>
		</div>
	</section>

	<section>
		<div
			class="flex flex-col gap-2 text-center relative py-6
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-amber-600 dark:before:bg-amber-700 before:rounded
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-amber-600 dark:after:bg-amber-700 after:rounded"
		>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Let's <span class="poppins text-main">collaborate</span>!
			</h3>
		</div>

		<p class="text-center text-lg sm:text-xl md:text-2xl poppins font-semibold my-10">
			Feel free to reach out to me for any project or just to say hi! 👋
		</p>

		<div class="flex items-center justify-center mb-20">
			<Button href="/contact">Get in touch</Button>
		</div>
	</section>
</main>

<style lang="postcss">
	b {
		@apply font-semibold;
		font-family: 'Poppins', sans-serif;
		@apply text-amber-600 dark:text-amber-700;
	}
</style>
