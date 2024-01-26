import { writable } from "svelte/store";
import { browser } from "$app/environment";


type Theme = 'light' | 'dark';






const preference = browser && window.matchMedia('(prefers-color-scheme: dark)');
if (preference) {
	preference.addEventListener('change', () => {
		setTheme(getPreferredTheme());
	});
}

function getPreferredTheme(): Theme {
	if (preference)
		return preference.matches ? 'dark' : 'light';
	else
		return 'light';
}

const userTheme = (browser && localStorage.getItem('theme') as Theme) || getPreferredTheme();
export const theme = writable<Theme>(userTheme);

export function toggleTheme() {
	theme.update(current => {
		const next = current === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', next);
		updateClassList(next);
		return next;
	});
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
	localStorage.setItem('theme', newTheme);
	updateClassList(newTheme);
}

function updateClassList(theme: Theme) {
	document.documentElement.classList.remove('dark');
	if (theme === 'dark')
		document.documentElement.classList.add('dark');
}
