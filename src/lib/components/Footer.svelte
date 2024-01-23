<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer
	class="py-10 sm:py-16 bg-amber-100 dark:bg-stone-900 border-t border-solid border-amber-400 dark:border-amber-900 flex flex-col gap-4 sm:gap-8 justify-center items-center z-20"
>
	<p class="px-4 py-2 bg-white text--950 font-medium">Connect with me &darr;</p>
	<div class="flex flex-col gap-4 items-center justify-center">
		<p>
			Email: <span class="ps-2 poppins text-main">alessio.farfaglia [at] gmail [dot] com</span>
		</p>
		<p>
			GitHub:
			<a href="https://github.com/Farfi55/" class="ps-2 poppins text-main"
				>Farfi55
				<i class="fa-solid fa-arrow-up-right-from-square text-xs scale-75 align-top" />
			</a>
		</p>
		<p>
			LinkedIn:
			<a href="https://www.linkedin.com/in/alessio-farfaglia-8780891aa/" class="ps-2 poppins text-">
				Alessio Farfaglia
				<i class="fa-solid fa-arrow-up-right-from-square text-xs scale-75 align-top" />
			</a>
		</p>
		<p>
			{config.title} &copy; {new Date().getFullYear()}
		</p>
	</div>
</footer>
