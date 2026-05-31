<script lang="ts">
	export let content = '';
	export let className = '';

	let container: HTMLDivElement | null = null;

	$: if (container) {
		container.innerHTML = content;
	}
</script>

<div bind:this={container} class={className}></div>
