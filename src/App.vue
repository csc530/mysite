<template>
    <div class="is-flex is-flex-direction-column">
        <header class="is-flex-grow-0">
            <TheNav />
        </header>
        <main class="container is-fluid is-flex-grow-1">
            <RouterView />
        </main>
        <TheFoot class="is-flex-shrink-1 is-flex-grow-0" />
    </div>
</template>


<style scoped lang="css">
    div {
        min-height: 100vh;
    }
</style>

<script setup lang="ts">
    import { RouterView } from "vue-router";
    import TheNav from "@/components/TheNav.vue";
    import TheFoot from "@/components/TheFoot.vue";

</script>