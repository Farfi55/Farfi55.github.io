<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer
	class="py-10 sm:py-12 mt-auto bg-stone-700 text-white dark:bg-stone-900 border-t-2 border-solid border-amber-700 dark:border-amber-900 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
	<!-- <p class="px-4 py-2 bg-white text-stone-950 font-medium">Connect with me &darr;</p> -->
	<div class="flex flex-col w-100 gap-4 items-start justify-center">
		<div class="flex flex-row w-100">
			<span class="min-w-[90px]">
				<i class="fa-solid fa-envelope" />
				Email:
			</span>
			<span class="ps-2 poppins text-main">
				<a href="mailto:alessio.farfaglia@gmail.com"> alessio.farfaglia@gmail.com </a>
			</span>
		</div>
		<div class="flex flex-row w-100">
			<span class="min-w-[90px]">
				<i class="fa-brands fa-github" />
				GitHub:
			</span>
			<a href="https://github.com/Farfi55/" class="ps-2 poppins text-main"
				>Farfi55
				<i class="fa-solid fa-arrow-up-right-from-square text-xs scale-75 align-top" />
			</a>
		</div>
		<div class="flex flex-row w-100">
			<span class="min-w-[90px]">
				<i class="fa-brands fa-linkedin" />
				LinkedIn:
			</span>
			<a
				href="https://www.linkedin.com/in/alessio-farfaglia-8780891aa/"
				class="ps-2 poppins text-main"
			>
				Alessio Farfaglia
				<i class="fa-solid fa-arrow-up-right-from-square text-xs scale-75 align-top" />
			</a>
		</div>
		<p>
			{config.title} &copy; {new Date().getFullYear()}
		</p>
	</div>
</footer>
