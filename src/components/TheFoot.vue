<template>
    <teleport to="body" :disabled="teleport" ref="teleportRef">
        <footer v-bind="$attrs"
            class="footer flex is-flex-direction-column justify-content-center has-text-centered has-background-inherit">
            <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/footers/ext_black_monochromatic.svg"
                alt="logo" :width="width" decoding="auto" loading="lazy" />
            <small class="font-italic" title="get it cuz... heh heh, it's the footer😆    .. oh nvm">insert obligatory
                mort quote here</small>
            <section class="section">
                <h2 class="subtitle is-7">Acknowledgements, Thx, Credits</h2>
                <ul class="is-flex is-flex-direction-row is-gap-3 is-justify-content-space-around">
                    <li title="bulma" class="image is-128x128">
                        <a href="https://bulma.io"><img
                                :src="`https://bulma.io/assets/brand/Bulma%20Logo${colour && '%20'.concat(colour)}.svg`"
                                alt="bulma logo" loading="lazy">
                        </a>
                    </li>
                    <li title="vue" class="image is-128x128">
                        <a href="https://vuejs.org">
                            <img srcset="https://github.com/vuejs/art/blob/master/vue-badge-outlined.svg?raw=true, https://vuejs.org/images/logo.png"
                                width="100" alt="vue logo" loading="lazy" />
                        </a>
                    </li>
                    <li title="catppuccin" class="image is-128x128">
                        <a href="https://catppuccin.com">
                            <img srcset="https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/1544x1544_circle.png?raw=true"
                                width="100" alt="catppuccin logo" loading="lazy" />
                        </a>
                    </li>
                    <li title="le moi" class="image is-128x128" wi lang="fr-CA">
                        <a href="https://github.com/csc530/mysite">
                            <img class="is-rounded" srcset="/bitmoji_sipping-tea.png, /bitmoji_hi.png" alt="bitmoji">
                        </a>
                    </li>
                </ul>
            </section>


            <!-- <figure class="image is-16by9">
                <img class="is-rounded" :src="mort" alt="mort" loading="eager" />
            </figure> -->

        </footer>
    </teleport>
</template>

<style scoped>
    li.image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /*place footer at the bottom always*/
    /* footer::before {
        content: "";
        display: flex;
        position: absolute;
        width: 100%;
        min-height: 55%;
        max-height: max-content;
        align-self: auto;
        height: 100%;
        flex-grow: 1;

        left: 0;

        opacity: 0.25;

        background-image: v-bind("mort");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-clip: border-box;
    } */

    figure {
        width: 12em
    }
</style>

<script setup lang="ts">
    import { PuccinTheme } from "@/types/helper";
    import { useColorMode } from "@vueuse/core";
    import consola from "consola";
    import { computed, ref, type Teleport, type TeleportProps, watch } from "vue";

    // const teleportRef = ref<InstanceType<typeof Teleport> | null>(null);
    const teleport = ref(true);
    watch([], () => {
        // teleport.value = true
    });

    const theme = useColorMode({ modes: PuccinTheme });
    const colour = computed(() => {
        switch (theme.value) {
            case PuccinTheme.latte:
            case 'light':
                return 'Black';
            case PuccinTheme.mocha:
            case 'dark':
                return 'White';
            default:
                return null;
        }
    });
    const width = ref(window.innerWidth)

    const mort = computed(() => 'url(' +
        [
            // 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/f/f8/Ahkjmort.png/revision/latest?cb=20190727144938',
            'https://64.media.tumblr.com/dbcf458d4e48c956fa405194144a40b8/tumblr_omtcvafd8g1qmzwx0o1_640.gif',
            'https://media.giphy.com/media/l2RnsEqcQ0Cveecfu/giphy.gif'
        ].sort(() => Math.random() - 0.5).pop() + ')'
    );
</script>
