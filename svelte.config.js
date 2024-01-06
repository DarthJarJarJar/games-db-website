import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess(),
	'svelte.language-server.runtime': '/usr/local/bin/node'
};

export default config;


