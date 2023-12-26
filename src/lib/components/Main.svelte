<script lang="ts">
	import Steps from './Steps.svelte';

	let steps = [
		{
			name: 'School timetable',
			icon: 'fa-solid fa-school',
			description:
				'A web app to create and manage your school timetable, which can be automatically generated using ASP.',
			href: ''
		},
		{
			name: 'CookedUp',
			icon: 'fa-brands fa-unity',
			href: ''
		},
		{
			name: 'RiskASP',
			icon: 'fa-solid fa-earth-europe',
			href: ''
		}
	];

	let tecnologies = [
		{
			name: 'Unity',
			slug: 'unity',
			website: 'https://unity.com/'
		},
		{
			name: 'Svelte',
			slug: 'svelte',
			website: 'https://svelte.dev/'
		},
		{
			name: 'Angular',
			slug: 'angular/c3002f',
			website: 'https://angular.io/'
		},
		{
			name: 'Answer Set Programming',
			website: 'https://en.wikipedia.org/wiki/Answer_set_programming'
		},
		{
			name: 'Spring',
			slug: 'spring',
			website: 'https://spring.io/'
		},
		{
			name: 'Bootstrap',
			slug: 'bootstrap',
			website: 'https://getbootstrap.com/'
		},
		{
			name: 'Tailwind',
			slug: 'tailwindcss',
			website: 'https://tailwindcss.com/'
		},
		{
			name: 'Python',
			slug: 'python',
			website: 'https://www.python.org/'
		},
		{
			name: 'C#',
			slug: 'csharp',
			website: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
		},
		{
			name: 'TypeScript',
			slug: 'typescript',
			website: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Java',
			website: 'https://www.java.com/'
		},
		{
			name: 'Rust',
			slug: 'rust',
			website: 'https://www.rust-lang.org/'
		},
		{
			name: 'Godot',
			slug: 'godotengine',
			website: 'https://godotengine.org/'
		},
		{
			name: 'C++',
			slug: 'cplusplus',
			website: 'https://isocpp.org/'
		},
		{
			name: 'Perl',
			slug: 'perl',
			website: 'https://www.perl.org/'
		}
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="intro-page" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8">
			<h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
				Ciao! I'm <span class="poppins text-violet-400">Alessio</span> Farfaglia<br />
				<span class="poppins text-violet-400">Software Engineer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="poppins text-violet-400">Favourite tech</span> includes:
			</p>
			<ul class="flex flex-wrap justify-center lg:justify-start gap-4">
				{#each tecnologies as tecnology}
					<a href={tecnology.website ?? '#'} target="_blank">
						<li
							class="flex items-center px-2 py-1 gap-2 bg-slate-800 text-white rounded-md border-b-2 border-slate-900 hover:border-slate-700 hover:translate-y-1 duration-200"
						>
							{#if tecnology.slug}
								<img
									height="24"
									width="24"
									src="https://cdn.simpleicons.org/{tecnology.slug}/"
									alt={tecnology.name}
								/>
							{/if}

							{tecnology.name}
						</li>
					</a>
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
			<a
				href="#"
				class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:mb-0 mt-10 hover:border-violet-700 duration-200"
			>
				<i class="fa-regular fa-circle-play"></i>
				<p class="text-base sm:text-lg md:text-xl">Watch the video</p>
			</a>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Steps step={steps[0]}></Steps>
			<Steps step={steps[1]}></Steps>
			<Steps step={steps[2]}></Steps>
		</div>
	</section>
</main>
