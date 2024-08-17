<template>
    <section ref="heroRef" class="hero has-text-centered is-fullheight-with-navbar">
        <section class="hero-head">
            <FallingStars container="body" :size="14" :interval="0.8" :duration="[8,15]" :colour="starColours" position="interleave" />
            <FallingStars container="body" :size="[5,150]" :interval="[3, 100]" :duration="[0.5, 2]" :colour="catFlavour.colors.text.hex" position="infront" />
            <FallingStars container="body" :size="8" :interval="0.5" :duration="[5,10]" :colour="starColours" />
            <FallingStars container="body" :size="24" :interval="2" :duration="[10,20]" :colour="starColours" position="behind" />
        </section>
        <div class="hero-body">
            <section class="container">
                <h1 class="title" id="theone">🤓 Christofer 😽 Cousins 😉</h1>
                <!--    and my pfp is spinning in the middle with radiance-->
                <!-- huge loves to starknoght https://github.com/StarKnightt/Falling-Stars -->
                <img alt="" src="">

                <h2 style="min-height: 5rem; min-width: 5rem;" class="subtitle" ref="attrRef"></h2>
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
    import FallingStars from "@/components/FallingStars.vue";
    import { computed, ref, watch } from "vue";
    import consola from "consola";
    import { flavors, type Colors, type MonochromaticName } from "@catppuccin/palette";
    import { useColorMode } from "@vueuse/core";
    import { PuccinTheme } from "@/types/helper";
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

    const attrRef = ref<HTMLSpanElement | null>(null);
    function nope() {
        return alert('I don\'t have twitter (X) 😹😜');
    }

    const attributes = ref([
        "computer scientist",
        "software engineer",
        "that guy",
        "child of God",
        "doing his best",
        "sleeping",
        "problem solver",
        "solution seeker",
        "life-long learner",
        "student of all",
        "student of adventure!!!",
        "life's kid",
        "i don't want free headphones",
        "code monkey",
        "prime programmer",
        "red-onkulous",
        "REACT-HATER",
        "Vue💚Lover"
    ]);

    watch(attrRef, () => {
        typeAttribute(randomAttribute());
    })

    function typeAttribute(attribute: string) {
        if (!attrRef.value)
            return;

        attrRef.value.textContent = "";
        let index = 0;
        const interval = setInterval(() => {
            if (!attrRef.value) return;

            attrRef.value.textContent += attribute[index];
            index++;
            if (index === attribute.length) {
                clearInterval(interval);
                clearAttribute(attribute);
            }
        }, Math.random() * 1000);
    }

    function clearAttribute(attribute: string) {
        if (!attrRef.value)
            return;

        attrRef.value.textContent = attribute;
        let index = 0;
        const interval = setInterval(() => {
            if (!attrRef.value) return;

            attrRef.value.textContent = attribute.substring(0, attribute.length - index);
            index++;
            if (index === attribute.length) {
                clearInterval(interval);
                typeAttribute(randomAttribute());
            }
        }, Math.random() * 1000);
    }

    function randomAttribute(not?: string | string[]) {
        let attr = not?.[0] ?? attributes.value[Math.random() * attributes.value.length | 0];
        if (not) {
            if (typeof not === "string")
                not = [not];
            while (not.includes(attr))
                attr = attributes.value[Math.random() * attributes.value.length | 0];
        }
        return attr;
    }


</script>