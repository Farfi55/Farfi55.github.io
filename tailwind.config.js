/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			mono: ['Cascadia Code', 'monospace']
		}
	},
	plugins: []
};
