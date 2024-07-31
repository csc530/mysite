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

        <div class="navbar-end">
            <div class="navbar-item">
                <img @click="toggleTheme" :src="themeIcons[theme]" alt="theme icon" decoding="auto" loading="lazy" />
            </div>
        </div>

    </nav>
</template>

<style scoped>

</style>

<script setup lang="ts">
    import {useRoute, useRouter} from "vue-router";
    import {computed, type Events, ref} from "vue";

    const router = useRouter();
    const routes = router.getRoutes();
    const navMenuRef = ref<HTMLDivElement | null>(null);
    const hamburgerRef = ref<HTMLDivElement | null>(null);

    function toggleHamburger(event: Event) {
        navMenuRef.value?.classList.toggle("is-active");
        if(hamburgerRef.value)
            hamburgerRef.value.ariaExpanded = String(hamburgerRef.value.classList.toggle("is-active"));
    }

    enum Theme {
        latte = "latte",
        mocha = "mocha",
    }

    const themeIcons = {
      [Theme.latte]: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/latte_squircle.png?raw=true",// 'https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/latte_squircle.png?raw=true',
      [Theme.mocha]: "https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/macchiato_squircle.png?raw=true"
    };
    const theme = ref(window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.mocha : Theme.latte);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => theme.value = event.matches ? Theme.mocha : Theme.latte);

    function toggleTheme() {
        theme.value = theme.value === Theme.latte ? Theme.mocha : Theme.latte;
        document.documentElement.setAttribute("data-theme", theme.value);
    }

</script>
