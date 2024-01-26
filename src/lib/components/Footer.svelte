<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer
	class="py-8 sm:py-12 mt-auto bg-stone-700 text-white dark:bg-stone-900 border-t-2 border-solid border-amber-700 dark:border-amber-900 flex justify-center items-center"
>
	<!-- <p class="px-4 py-2 bg-white text-stone-950 font-medium">Connect with me &darr;</p> -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-start justify-center">
		<div class="flex flex-col gap-2">
			<div class="flex">
				<span class="min-w-[90px]">
					<i class="fa-solid fa-envelope" />
					Email:
				</span>
				<span class="ps-2 poppins text-main">
					<a href="mailto:alessio.farfaglia@gmail.com" class="poppins">
						alessio.farfaglia@gmail.com
					</a>
				</span>
			</div>
			<div class="flex">
				<span class="min-w-[90px]">
					<i class="fa-brands fa-github" />
					GitHub:
				</span>
				<a href="https://github.com/Farfi55/" class="ps-2 poppins text-main"
					>Farfi55
					<i class="fa-solid fa-arrow-up-right-from-square text-xs scale-75 align-top" />
				</a>
			</div>
			<div class="flex">
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
		</div>
		<div class="flex flex-col gap-2">
			<div>
				<a href="/blog/rss.xml" target="_blank" class="link-main">
					<i class="fa-solid fa-square-rss" />
					RSS
				</a>
			</div>
			<p>
				{config.title} &copy; {new Date().getFullYear()}
			</p>
		</div>
	</div>
</footer>
