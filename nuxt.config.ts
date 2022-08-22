import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		vue: {reactivityTransform: true}
	},
	nitro: {
		preset: 'heroku'
	},
	builder: "vite",
	editor: 'webstorm',
})