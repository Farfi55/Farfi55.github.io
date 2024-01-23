<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	let colorScheme = 'dark';
	let loaded = false;

	if (browser) {
		let prefersLightMode = window?.matchMedia('(prefers-color-scheme: light)');
		console.log(prefersLightMode.media);

		onMount(() => {
			prefersLightMode.addEventListener('change', UpdateParticlesOnColorSchemeChange);

			colorScheme = prefersLightMode.matches ? 'light' : 'dark';

			loadParticles();
		});

		const UpdateParticlesOnColorSchemeChange = () => {
			colorScheme = prefersLightMode.matches ? 'light' : 'dark';
			loadParticles();
		};

		function loadParticles() {
			let particlesConfig = 'assets/particles.json';
			if (colorScheme === 'light') {
				particlesConfig = 'assets/particles-light.json';
			}
			// @ts-ignore
			particlesJS.load('particles-js', particlesConfig, function () {
				loaded = true;
				console.log('callback - particles.js config loaded', colorScheme);
			});
		}

		onDestroy(() => {
			prefersLightMode.removeEventListener('change', UpdateParticlesOnColorSchemeChange);
		});
	}
</script>

<svelte:head>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"
		integrity="sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	></script>
</svelte:head>

<div
	class="absolute min-h-screen top-0 left-0 w-full z-[-1] duration-500 bg-gradient-to-b {loaded
		? 'opacity-70'
		: 'opacity-0'}"
>
	<div class="absolute inset-0" id="particles-js"></div>
</div>
