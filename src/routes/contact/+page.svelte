<script>
	import * as config from '$lib/config';

	let socials = [
		{
			name: 'GitHub',
			href: 'https://github.com/Farfi55',
			icon: 'fa-brands fa-github',
			color: 'bg-[#171515]'
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/farfi__',
			icon: 'fa-brands fa-x-twitter',
			color: 'bg-[#000000]'
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/farfi__/',
			icon: 'fa-brands fa-instagram',
			color: 'bg-[#125688]'
		},
		{
			name: 'Spotify',
			href: 'https://open.spotify.com/user/djalex54',
			icon: 'fa-brands fa-spotify',
			color: 'bg-[#0db954]'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/alessio-farfaglia-8780891aa/',
			icon: 'fa-brands fa-linkedin',
			color: 'bg-[#007bb5]'
		},
		{
			name: 'Itch.io',
			href: 'https://farfi55.itch.io/',
			icon: 'fa-brands fa-itch-io',
			color: 'bg-[#fa5c5c]'
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/@farfi55',
			icon: 'fa-brands fa-youtube',
			color: 'bg-[#bb0000]'
		}
	];
</script>

<!-- modify this form HTML and place wherever you want your form -->

<section class="flex sm:justify-center p-4 pb-16">
	<form
		action={config.contactFormEndpoint}
		method="POST"
		class="flex flex-col gap-4 py-8 px-4 sm:px-8 rounded border border-y-4 border-y-amber-500 dark:border-y-amber-700 shadow bg-stone-100 dark:bg-stone-900 w-full sm:w-auto"
	>
		<h1 class="text-main text-3xl text-center mb-4">Get in touch</h1>

		<p class="text-muted">
			Feel free to reach out to me for any reason. I'll get back to you as soon as possible.
		</p>

		<div class="flex flex-wrap gap-1 mt-4">
			<label for="name" class="w-full sm:w-28 text-stone-800 dark:text-stone-300 poppins"
				>Name:
			</label>
			<input
				type="text"
				name="name"
				class="bg-stone-200 dark:bg-stone-800 placeholder-stone-400 dark:placeholder-stone-500 border p-1 rounded w-full sm:w-auto flex-grow"
				placeholder="First and Last name"
			/>
		</div>
		<div class="flex flex-wrap gap-1">
			<label for="email" class="w-full sm:w-28 text-stone-800 dark:text-stone-300 poppins"
				>Email:
			</label>
			<input
				type="email"
				name="email"
				class="bg-stone-200 dark:bg-stone-800 placeholder-stone-400 dark:placeholder-stone-500 border p-1 rounded w-full sm:w-auto flex-grow"
				placeholder="example@email.com"
				required
			/>
		</div>
		<div class="flex flex-wrap gap-1">
			<label for="message" class="w-full sm:w-28 text-stone-800 dark:text-stone-300 poppins">
				<span>Message: </span>
			</label>
			<textarea
				name="message"
				class="bg-stone-200 dark:bg-stone-800 placeholder-stone-400 dark:placeholder-stone-500 border p-1 rounded w-full sm:w-auto flex-grow max-w-2xl"
				placeholder="Your message here"
				rows="5"
				required
			></textarea>
		</div>
		<div class="flex justify-end">
			<!-- your other form fields go here -->
			<button
				type="submit"
				class="shadow-amber-600/10 text-center shadow-xl flex relative overflow-hidden px-5 py-2 group rounded-full text-white dark:bg-amber-700 bg-amber-600 ms-auto"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-amber-800 dark:opacity-100 opacity-50 group-hover:translate-x-full duration-200"
				></div>
				<h4 class="relative text-lg w-24">Send</h4>
			</button>
		</div>

		<hr class="my-4" />

		<div>
			<h2 class="text-main text-xl text-center">My Socials</h2>

			<p class="text-muted text-center">You can also follow me through the following channels:</p>

			<div
				class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 text-white text-2xl text-center"
			>
				{#each socials as social}
					<a
						class="{social.color} w-10 h-10 sm:w-12 sm:h-12 rounded sm:rounded-md flex justify-center hover:opacity-75 border-2 border-transparent hover:border-stone-900 hover:dark:border-stone-100 duration-200 transition-colors"
						target="_blank"
						href={social.href}
						aria-label={social.name}
						title={social.name}
					>
						<i class="{social.icon} self-center justify-self-center"> </i>
					</a>
				{/each}
			</div>
		</div>
	</form>
</section>
