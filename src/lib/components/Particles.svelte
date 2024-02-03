<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { browser } from '$app/environment';
	let loaded = false;

	$: {
		$theme;
		loadParticles();
	}

	function loadParticles() {
		if (!browser) return;
		loaded = false;
		let particlesConfig = 'assets/particles.json';
		if ($theme === 'light') {
			particlesConfig = 'assets/particles-light.json';
		}
		if (window.particlesJS) {
			window.particlesJS.load('particles-js', particlesConfig, function () {
				loaded = true;
			});
			return;
		}
	}
</script>

<div
	class="absolute -z-10 min-h-screen top-0 left-0 w-full duration-500 bg-gradient-to-b {loaded
		? 'opacity-70'
		: 'opacity-0'}"
>
	<div class="absolute inset-0" id="particles-js"></div>
</div>
