<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import HtmlContent from '$lib/components/HtmlContent.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import CarouselModal from '$lib/components/CarouselModal.svelte';
	import { formatDate } from '$lib/utils';

	export let data;

	let modalOpen = false;
	let modalImages: string[] = [];
	let modalStartIndex = 0;

	function openCarousel(images: string[], startIndex: number = 0) {
		modalImages = images;
		modalStartIndex = startIndex;
		modalOpen = true;
	}

	function closeCarousel() {
		modalOpen = false;
	}

	function getGalleryImages(project: { coverImage?: string; images?: string[] }) {
		const galleryImages = project.images?.filter((image): image is string => Boolean(image));

		if (galleryImages && galleryImages.length > 0) {
			return galleryImages;
		}

		return project.coverImage ? [project.coverImage] : [];
	}
</script>

<section class="p-4 pb-16 flex flex-col gap-16 items-center">
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
				<a href="/projects#{year}">
					<h3 class="text-4xl font-bold">
						year <span class="text-main poppins">{year}</span>
					</h3>
				</a>
			</div>
		{/if}

		<div class="w-full max-w-6xl {index % 2 ? 'md:ps-20' : 'md:pe-20'}">
			<div
				class="bg-stone-200 dark:bg-stone-900 rounded-lg shadow-md flex flex-col sm:flex-row sm:gap-2 overflow-hidden w-full snap-center scroll-mt-24"
				id={project.slug}
			>
				{#if project.coverImage}
					<div class="sm:max-w-[40%] h-full self-center p-2">
						<button
							on:click={() => openCarousel(getGalleryImages(project), 0)}
							class="relative w-full h-full rounded overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-105 aspect-video"
							title="Click to view gallery"
						>
							<img
								src={project.coverImage}
								alt={project.title}
								class="w-full h-full object-cover rounded"
							/>
							<!-- Hover overlay indicator -->
							<div
								class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded flex items-center justify-center"
							>
								<i
									class="fas fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
								></i>
							</div>
							<!-- Badge showing image count -->
							{#if project.images && project.images.length > 1}
								<div
									class="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1"
								>
									<i class="fas fa-images"></i>
									{project.images.length}
								</div>
							{/if}
						</button>
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
					<HtmlContent content={project.description} className="pb-3 self-center" />
					<div class="flex flex-wrap gap-2 content-around">
						{#each project.tags as tag}
							<div class="inline">
								<Tech name={tag}></Tech>
							</div>
						{/each}

						{#if project.itchio}
							<div class="flex h-fit ms-auto">
								<Button href={project.itchio} openNewTab={true}>
									<i class="fab fa-itch-io"></i>
									Play on Itch.io
									<i class="fas fa-external-link-alt text-xs align-super"></i>
								</Button>
							</div>
						{/if}
						{#if project.crates}
							<div class="flex h-fit ms-auto">
								<Button href={project.crates} openNewTab={true}>
									<i class="fab fa-rust"></i>
									View on Crates.io
									<i class="fas fa-external-link-alt text-xs align-super"></i>
								</Button>
							</div>
						{/if}
						{#if project.repo}
							<div class="flex h-fit ms-auto">
								<Button href={project.repo} openNewTab={true}>
									<i class="fab fa-github"></i>
									View on GitHub
									<i class="fas fa-external-link-alt text-xs align-super"></i>
								</Button>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/each}

	<h3 class="text-muted py-8 text-3xl">And many other unfinished projects...</h3>
</section>

<CarouselModal
	isOpen={modalOpen}
	images={modalImages}
	startIndex={modalStartIndex}
	on:close={closeCarousel}
/>
