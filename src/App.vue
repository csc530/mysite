<template>
    <header>
        <TheNav />
    </header>
    <main class="container is-fluid">
        <RouterView />
    </main>
    <TheFoot />
    <SpeedInsights />
</template>


<style scoped module lang="css">
    main {
        min-height: 50vh;
    }
</style>

<script setup lang="ts">
    import { RouterView } from "vue-router";
    import TheNav from "@/components/TheNav.vue";
    import TheFoot from "@/components/TheFoot.vue";
    import { SpeedInsights } from "@vercel/speed-insights/vue"
    import { useFavicon } from "@vueuse/core";
    import favicon from "./assets/images/favicon.ico"
    useFavicon(favicon, { rel: 'icon' })
</script>