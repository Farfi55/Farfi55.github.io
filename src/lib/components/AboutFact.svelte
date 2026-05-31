<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<div class="flex gap-6 sm:gap-8 rounded-lg p-4">
	<p class="poppins text-4xl sm:text-5xl md:text-6xl text-stone-500 w-10 md:w-20 flex-shrink-0">
		{id}
	</p>
	<div class="flex flex-col gap-6 sm:gap-8">
		<h3 class="text-2xl sm:text-3xl md:text-5xl">
			{title}
		</h3>
		<div class="text-base">
			<slot />
		</div>
	</div>
</div>
