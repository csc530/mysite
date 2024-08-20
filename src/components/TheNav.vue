<template>
    <nav class="navbar is-spaced is-transparent is-fixed-top-touch" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <!-- <a class="navbar-item" href="https://y.at/✝️🧠🍁👽" title="beep bop boo deep dorp">🖤✝️🧠🍁👽🖤</a> -->
            <button v-if="routes.length > 0" ref="hamburgerRef" @click.stop.prevent="toggleHamburger"
                class="navbar-burger is-hoverable" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>

            <div class="navbar-item">
                <img @click="toggleTheme" :src="themeIcons.getTheme(colourTheme)" alt="theme icon" decoding="auto"
                    loading="lazy" />
            </div>
        </div>

        <div class="navbar-menu" ref="navMenuRef">
            <div class="navbar-start">
                <router-link v-for="route in routes" :key="route.path" class="navbar-item" :to="route.path">
                    {{ route.name }}
                </router-link>
            </div>

            <div class="navbar-end">

            </div>
        </div>

    </nav>
</template>

<script setup lang="ts">
    import { PuccinTheme } from "@/types/helper";
import { useColorMode } from "@vueuse/core";
import { computed, ref, watch, } from "vue";
import { useRouter } from "vue-router";

    const navMenuRef = ref<HTMLDivElement | null>(null);
    const hamburgerRef = ref<HTMLDivElement | null>(null);
    const router = useRouter();
    const routes = computed(() => {
        const anchors = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        return Array.from(anchors).filter(anchor => anchor.id).map(anchor => ({ name: anchor.textContent, path: `#${anchor.id}` }));
    })

    function toggleHamburger() {
        navMenuRef.value?.classList.toggle("is-active");
        if (hamburgerRef.value)
            hamburgerRef.value.ariaExpanded = String(hamburgerRef.value.classList.toggle("is-active"));
    }

    const themeIcons = {
        [PuccinTheme.latte]: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/latte_squircle.png?raw=true",// 'https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/latte_squircle.png?raw=true',
        [PuccinTheme.mocha]: "https://github.com/catppuccin/catppuccin/blob/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/logos/exports/macchiato_squircle.png?raw=true",
        getTheme(theme: any) {
            if (Object.keys(PuccinTheme).includes(theme))
                return this[theme as PuccinTheme];
            return this.latte;
        }
    };
    const { system: systemColourTheme, store: storeColourTheme } = useColorMode({
        attribute: "data-theme",
        modes: PuccinTheme,
    });
    const colourTheme = computed(() => storeColourTheme.value === 'auto' ? systemColourTheme.value : systemColourTheme.value === 'light' ? PuccinTheme.latte : PuccinTheme.mocha);

    // ? if the prefferedColourScheme changes from outside the component (i.e. system/browser prefs.)
    watch(colourTheme, () => {
        storeColourTheme.value = colourTheme.value;
    })

    function toggleTheme() {
        storeColourTheme.value = storeColourTheme.value === PuccinTheme.latte ? PuccinTheme.mocha : PuccinTheme.latte;
    }
</script>
