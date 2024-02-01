<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import type { Project } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<section class="p-4">
	<div class="flex flex-col gap-16 items-center">
		{#each data.projects as project}
			<div class="w-full max-w-6xl sm:even:ps-4 sm:odd:pe-4 md:even:ps-20 md:odd:pe-20">
				<div
					class="bg-stone-200 dark:bg-stone-900 rounded-lg shadow-md flex flex-col sm:flex-row sm:gap-2 overflow-hidden w-full"
				>
					{#if project.coverImage}
						<div class="sm:max-w-[40%] h-full self-center p-2">
							<img src={project.coverImage} alt={project.title} class="rounded" />
						</div>
					{/if}
					<div class="p-2 w-full">
						<span class="flex text-center sm:text-start flex-wrap">
							<a href="/projects#{project.slug}" class="self-center">
								<h3 id={project.slug} class="text-3xl py-3">
									{project.title}
								</h3>
							</a>
							<p class="text-muted ms-auto">{formatDate(project.date)}</p>
						</span>
						<p class="pb-3">{project.description}</p>
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
	</div>
</section>
