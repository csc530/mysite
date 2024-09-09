import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			features: { optionsAPI: false }
		}),
		VueDevTools(),
		checker({ typescript: true, vueTsc: true }),
	],
	build: {
		reportCompressedSize: true,
		cssMinify: 'lightningcss',
		minify: "terser",
	},
	css: {
		devSourcemap: true,
		// transformer: 'lightningcss',

		// lightningcss: {
		// 	errorRecovery: true,
		// 	targets: browserslistToTargets(browserlists('>= 0.25%'))
		// }
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src/", import.meta.url))
		}
	},
	experimental: {
		hmrPartialAccept: true,
	},
	appType: "spa",
});
