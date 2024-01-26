<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url = '';
</script>

{#key url}
	<div in:fade={{ duration: 200 }} class="h-full">
		<slot />
	</div>
{/key}
