<template>
    <section ref="heroRef" class="hero has-text-centered is-fullheight-with-navbar">
        <section class="hero-head">
            <FallingRain container="body" :items="['0', '1']" :size="[10, 18]" :interval="0.3" :duration="[2, 15]"
                :colour="starColours" position="interleave" />
            <FallingRain container="body" rotate :items="['0', '1']" :size="[5, 150]" :interval="[0.1, 100]"
                :duration="0.045" :colour="catFlavour.colors.text.hex" position="infront" />
            <FallingRain container="body" :items="['0', '1']" :size="[4, 12]" :interval="0.25" :duration="[1, 10]"
                :colour="starColours" />
            <FallingRain container="body" :items="['0', '1']" :size="24" :interval="1" :duration="[15, 20]"
                :colour="starColours" position="behind" />
        </section>
        <div class="hero-body">
            <section class="container">
                <h1 class="title" id="theone">Christofer Cousins</h1>
                <!--    and my pfp is spinning in the middle with radiance-->
                <!-- huge loves to starknoght https://github.com/StarKnightt/Falling-Stars -->
                <img alt="" src="">

            </section>
        </div>
        <section class="hero-foot">
            <nav class="tabs is-centered">
                <ul>
                    <li><a class="icon is-large" href="https://github.com/csc530"><i
                                class="fab fa-github fa-2xl"></i></a></li>
                    <li><a class="icon is-large" href="https://www.linkedin.com/in/christofer-cousins/"><i
                                class="fab fa-linkedin fa-2xl"></i></a></li>
                    <li @click="nope"><a class="icon is-large"><i class="fab fa-twitter fa-2xl"></i></a></li>
                    <li><a class="icon is-large" :href="resume" target="_parent"><i
                                class="fa-solid fa-file fa-2xl"></i></a></li>
                </ul>
            </nav>
        </section>
    </section>
</template>

<style lang="css" scoped>
    h1 {
        text-transform: uppercase;
    }
</style>

<script setup lang="ts">

    import resume from "@/assets/resume.pdf";
    import FallingRain from "@/components/FallingRain.vue";
    import { PuccinTheme } from "@/types/helper";
    import { flavors, type MonochromaticName } from "@catppuccin/palette";
    import { useColorMode } from "@vueuse/core";
    import { computed, ref, watch } from "vue";
    const monochromaticColours: MonochromaticName[] = ['text', 'base', 'overlay0', 'overlay1', 'overlay2', 'mantle', 'crust', 'surface0', 'surface1', 'surface2', 'subtext0', 'subtext1']
    const colour = useColorMode<PuccinTheme>()
    const catFlavour = computed(() => {
        if (colour.value === PuccinTheme.latte || colour.value === 'light')
            return flavors.latte
        return flavors.mocha
    })
    const getCatppuccinColours = (coloursEntries: typeof flavors.latte.colorEntries) => coloursEntries.filter(colour => !monochromaticColours.includes(colour[0])).map(colour => colour[1].hex)

    const starColours = computed(() => {
        switch (colour.value) {
            case PuccinTheme.latte:
                return getCatppuccinColours(flavors.latte.colorEntries);
            case 'light':
                return 'Black';
            case PuccinTheme.mocha:
                return getCatppuccinColours(flavors.mocha.colorEntries);
            case 'dark':
                return 'White';
            default:
                return undefined;
        }
    })

    const heroRef = ref<HTMLElement | null>(null);

    function nope() {
        return alert('I don\'t have twitter (X) 😹😜');
    }





</script>