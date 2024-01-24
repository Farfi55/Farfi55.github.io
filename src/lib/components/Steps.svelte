<script lang="ts">
	import type { Step } from '../../app';

	export let step: Step;
</script>

<a
	href={step.href}
	target="_blank"
	class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border-2 border-solid link-main-border border-stone-700 text-center group cursor-pointer duration-200 bg-body"
>
	<div
		class="grid place-items-center bg-body px-3 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200 before:translate-x-full group-hover:text-amber-600 dark:group-hover:text-amber-700 text-stone-700"
	>
		<i class={step.icon}></i>
	</div>

	<h3 class="font-medium text-xl sm:text-2xl md:text-3xl text-main">
		{step.name}
	</h3>
	<slot />
	<div class="flex-1 flex justify-between gap-4 items-center">
		<div
			class="ml-auto rounded px-1 cursor-pointer hover:text-stone-950 duration-200 relative before:absolute before:top-0 before:h-full before:right-full before:w-full before:bg-amber-500 dark:before:bg-amber-700 hover:before:h-full before:duration-200 before:hover:translate-x-full overflow-hidden"
		>
			<p class="relative font-normal">Go to &rarr;</p>
		</div>
	</div>
</a>
