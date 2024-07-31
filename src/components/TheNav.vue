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
                <img @click="toggleTheme" :src="themeIcons[colourTheme]" alt="theme icon" decoding="auto"
                        loading="lazy" />
            </div>
        </div>

    </nav>
</template>

<script setup lang="ts">
    import {useRouter} from "vue-router";
    import {ref,} from "vue";
    import {PuccinTheme} from "@/types/helper";
    import {useColorMode, usePreferredDark} from "@vueuse/core";
    import consola from "consola";

    const router = useRouter();
    const routes = router.getRoutes();
    const navMenuRef = ref<HTMLDivElement | null>(null);
    const hamburgerRef = ref<HTMLDivElement | null>(null);

    function toggleHamburger(event: Event) {
        navMenuRef.value?.classList.toggle("is-active");
        if(hamburgerRef.value)
            hamburgerRef.value.ariaExpanded = String(hamburgerRef.value.classList.toggle("is-active"));
    }

    const themeIcons = {
        [PuccinTheme.latte]: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/latte_squircle.png?raw=true",// 'https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/latte_squircle.png?raw=true',
        [PuccinTheme.mocha]: "https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/macchiato_squircle.png?raw=true"
    };
    const colourTheme = useColorMode({
        attribute: "data-theme",
        modes: {
            [PuccinTheme.latte]: PuccinTheme.latte,
            [PuccinTheme.mocha]: PuccinTheme.mocha
        }
    });

    function toggleTheme() {
        colourTheme.value = colourTheme.value === PuccinTheme.latte ? PuccinTheme.mocha : PuccinTheme.latte;
        consola.log(colourTheme.value);
    }

    colourTheme.value = usePreferredDark() ? PuccinTheme.mocha : PuccinTheme.latte;
</script>
