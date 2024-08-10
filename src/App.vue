<template>
    <div class="is-flex is-flex-direction-column">
        <header>
            <TheNav />
        </header>
        <main class="container is-fluid">
            <RouterView />
        </main>
        <TheFoot />
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