import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    root: 'src',
    build: {
        outDir: '../dist'
    }
};

export default config;