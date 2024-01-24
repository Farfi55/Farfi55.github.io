import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';


/** @type {import('mdsvex').MdsvexOptions}*/
const mdsvexConfig = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await shiki.getHighlighter({
				theme: 'slack-dark'
			});
			const result = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${result}\`}`;
		}
	}	
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
