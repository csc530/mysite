import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueDevTools from "vite-plugin-vue-devtools";
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        VueDevTools(),
        checker({ typescript: true, vueTsc: true }),
    ],
    build: {
        reportCompressedSize: true,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src/", import.meta.url))
        }
    },
    experimental: {
        hmrPartialAccept: true
    },
    appType: "spa",
});
