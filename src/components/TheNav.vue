<template>
    <nav class="navbar is-spaced -has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" title="you know the sh*t">✝️👽🧠🖤</a>
            <button ref="hamburgerRef" @click.stop.prevent="toggleHamburger" class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>

        <div class="navbar-menu" ref="navMenuRef">
            <div class="navbar-start">
                <router-link v-for="route in routes" :key="route.path" class="navbar-item" :to="route.path">
                    {{ route.name }}
                </router-link>
            </div>
        </div>

    </nav>
</template>

<style scoped>

</style>

<script setup lang="ts">
    import {useRoute, useRouter} from "vue-router";
    import {type Events, ref} from "vue";

    const router = useRouter();
    const routes = router.getRoutes();
    const navMenuRef = ref<HTMLDivElement | null>(null);
    const hamburgerRef = ref<HTMLDivElement | null>(null);

    function toggleHamburger(event: Event) {
        navMenuRef.value?.classList.toggle("is-active");
        if(hamburgerRef.value)
            hamburgerRef.value.ariaExpanded = String(hamburgerRef.value.classList.toggle("is-active"));
    }

</script>
