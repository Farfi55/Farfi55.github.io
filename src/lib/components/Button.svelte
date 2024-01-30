<script lang="ts">
	export let text: string = '';
	export let href: string = '#';
</script>

<a
	class="shadow-amber-600/10 text-center shadow-xl flex relative z-0 overflow-hidden px-5 py-2 group rounded-full text-white dark:bg-amber-700 bg-amber-600"
	{href}
>
	<div
		class="absolute top-0 right-full w-full h-full bg-amber-800 dark:opacity-100 opacity-50 group-hover:translate-x-full duration-200"
	></div>
	<h4 class="relative">{text}<slot /></h4>
</a>
