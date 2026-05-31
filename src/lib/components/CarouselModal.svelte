<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let images: string[] = [];
	export let isOpen = false;
	export let startIndex = 0;

	const dispatch = createEventDispatcher();

	let currentIndex = startIndex;
	let modalElement: HTMLElement;

	$: if (isOpen) {
		currentIndex = startIndex;
	}

	function goNext() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function goPrev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			goNext();
		}
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			goPrev();
		}
		if (e.key === 'Escape') {
			e.preventDefault();
			dispatch('close');
		}
	}

	function handleBackdropClick() {
		dispatch('close');
	}

	function handleCloseClick() {
		dispatch('close');
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if isOpen}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-40 w-full h-full bg-black bg-opacity-50 duration-200"
		on:click={handleBackdropClick}
		in:fade={{ duration: 200 }}
		aria-label="Close carousel"
	></button>

	<!-- Modal Container -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
		bind:this={modalElement}
		role="dialog"
		aria-modal="true"
		aria-label="Project image gallery"
	>
		<div
			class="pointer-events-none flex h-full w-full max-w-6xl flex-col items-center justify-center gap-2 sm:gap-4"
		>
			<!-- Close button -->
			<button
				class="pointer-events-auto fixed right-3 top-3 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition sm:right-4 sm:top-4 carousel-button"
				on:click={handleCloseClick}
				aria-label="Close gallery"
				title="Close (Esc)"
			>
				<i class="fas fa-xmark text-lg"></i>
			</button>

			<!-- Main Image -->
			<div
				class="pointer-events-none flex min-h-0 w-full flex-1 items-center justify-center p-3 sm:p-4"
			>
				<img
					src={images[currentIndex]}
					alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
					class="block max-h-[68vh] w-full max-w-full object-contain"
				/>
			</div>

			<!-- Navigation Arrows (Fixed on sides) -->
			{#if images.length > 1}
				<button
					class="pointer-events-auto fixed left-3 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full sm:left-4 sm:h-14 sm:w-14 carousel-button"
					on:click={goPrev}
					aria-label="Previous image"
					title="Previous (← or Left Arrow)"
				>
					<i class="fas fa-chevron-left text-lg sm:text-xl"></i>
				</button>

				<button
					class="pointer-events-auto fixed right-3 top-1/2 z-50 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full sm:right-4 sm:h-14 sm:w-14 carousel-button"
					on:click={goNext}
					aria-label="Next image"
					title="Next (→ or Right Arrow)"
				>
					<i class="fas fa-chevron-right text-lg sm:text-xl"></i>
				</button>
			{/if}
			<!-- Thumbnail Strip at Bottom -->
			<div class="pointer-events-auto w-full overflow-x-auto px-1 pb-1">
				<div class="flex min-w-full w-max items-center justify-start gap-2 sm:justify-center">
					{#each images as image, index (index)}
						<button
							class="flex-none overflow-hidden rounded-lg border-2 transition-all duration-200 w-24 h-16 sm:w-28 sm:h-20 {index ===
							currentIndex
								? 'border-amber-600 dark:border-amber-700 ring-2 ring-amber-600/70 dark:ring-amber-700/70'
								: 'border-stone-400/80 dark:border-stone-600 hover:border-stone-300 dark:hover:border-stone-500'}"
							on:click={() => {
								currentIndex = index;
							}}
							aria-label={`Go to image ${index + 1}`}
							aria-current={index === currentIndex ? 'true' : 'false'}
						>
							<img
								src={image}
								alt={`Thumbnail ${index + 1}`}
								class="block h-full w-full object-cover"
							/>
						</button>
					{/each}
				</div>
			</div>

			<!-- Image Counter -->
			<div class="rounded-full bg-black/50 px-4 py-2 text-center text-sm text-white/90">
				{currentIndex + 1} / {images.length}
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.carousel-button {
		@apply pointer-events-auto fixed z-50 flex items-center justify-center rounded-full bg-stone-50/80 text-main shadow-lg transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:bg-stone-800/80 dark:hover:bg-stone-800 dark:focus-visible:ring-amber-700;
	}
</style>
