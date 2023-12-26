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
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8 sm:py-14">
		<div
			class="flex flex-col lg:justify-center text-center lg:col-span-2 lg:text-left gap-6 md:gap-8"
		>
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Ciao! I'm <span class="poppins text-violet-400">Alessio</span> Farfaglia<br />
				<span class="poppins text-violet-400">Software Engineer</span>
			</h2>
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
			<!-- <a
				href="#"
				class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:mb-0 mt-10 hover:border-violet-700 duration-200"
			>
				<i class="fa-regular fa-circle-play"></i>
				<p class="text-base sm:text-lg md:text-xl">Watch the video</p>
			</a> -->
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Steps step={steps[0]}>
				<p class="">
					A <Tech name="Svelte" /> web app to create and manage your school timetable.<br />
					Contains automatic timetable generation using
					<Tech name="ASP">ASP</Tech>.
				</p>
			</Steps>
			<Steps step={steps[1]}>
				<p>
					3D <Tech name="Unity" /> game made for my bachelor's degree thesis, inspired by
					<i>Overcooked</i>
					and <i>PlateUp</i>.<br />
					BOTs behaviour is implemented using
					<Tech name="ASP">ASP</Tech>.
				</p>
			</Steps>
			<Steps step={steps[2]}>
				<p>
					<Tech name="Unity" /> implementation of the
					<i>Risk</i>
					board game.<br />
					BOTs behaviour is implemented using
					<Tech name="ASP">ASP</Tech>.
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
</main>
