import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	nitro: {
		preset: 'vercel'
	},
	builder: "vite",
	editor: 'webstorm',
	css: ['bulma', '@fortawesome/fontawesome-svg-core/styles.css'],
	store: false,
	experimental: {
		reactivityTransform: true
	},
	sourcemap: true,
})