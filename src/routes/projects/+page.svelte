<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<section class="p-4 py-16">
	<div class="flex flex-col gap-16 items-center">
		{#each data.projects as project, index}
			{@const year = new Date(project.date).getFullYear()}
			{@const prevYear = index === 0 ? null : new Date(data.projects[index - 1].date).getFullYear()}
			<!-- when the project year is different from the previous project year, create a h3 header with the year in question -->
			{#if index === 0 || year !== prevYear}
				<div
					class="w-full text-center relative py-6 mt-6 scroll-mt-24
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-amber-600 dark:before:bg-amber-700 before:rounded
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-amber-600 dark:after:bg-amber-700 after:rounded"
					id={year.toString()}
				>
					<h3 class="text-4xl font-bold">
						year <span class="text-main poppins">{year}</span>
					</h3>
				</div>
			{/if}

			<div class="w-full max-w-6xl {index % 2 ? 'sm:ps-4 md:ps-20' : 'sm:pe-4 md:pe-20'}">
				<div
					class="bg-stone-200 dark:bg-stone-900 rounded-lg shadow-md flex flex-col sm:flex-row sm:gap-2 overflow-hidden w-full snap-center scroll-mt-24"
					id={project.slug}
				>
					{#if project.coverImage}
						<div class="sm:max-w-[40%] h-full self-center p-2">
							<img src={project.coverImage} alt={project.title} class="rounded" />
						</div>
					{/if}
					<div class="p-2 w-full">
						<span class="flex text-center sm:text-start flex-wrap">
							<a href="/projects#{project.slug}" class="self-center">
								<h3 class="text-3xl py-3 text-main">
									{project.title}
								</h3>
							</a>
							<p class="text-muted ms-auto">{formatDate(project.date)}</p>
						</span>
						<p class="pb-3 self-center">{project.description}</p>
						<div class="flex flex-wrap gap-2 content-around">
							{#each project.tags as tag}
								<div class="inline">
									<Tech name={tag}></Tech>
								</div>
							{/each}

							<div class="flex h-fit ms-auto">
								<Button href={project.repo}>
									<i class="fab fa-github"></i>
									View on GitHub
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}

		<h3 class="text-muted py-8 text-3xl">And many other unfinished projects...</h3>
	</div>
</section>
