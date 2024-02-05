import { browser } from '$app/environment';
import '$lib/i18n/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

export async function load({ url }) {
	if (browser) {
		locale.set(window.navigator.language);
	}

	await waitLocale();

	return {
		url: url.pathname,
	};
};
