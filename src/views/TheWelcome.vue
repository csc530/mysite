<template>
    <section ref="heroRef" class="hero has-text-centered is-fullheight-with-navbar">
        <FallingStars container="body" :size="13" :interval="1" :duration="10" :colour="starColour" position="interleave" />
        <section class="hero-head">
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
                    <li><a class="icon is-large" href="https://github.com/csc530"><i class="fab fa-github fa-2xl"></i></a></li>
                    <li><a class="icon is-large" href="https://www.linkedin.com/in/christofer-cousins/"><i class="fab fa-linkedin fa-2xl"></i></a></li>
                    <li @click="nope"><a class="icon is-large"><i class="fab fa-twitter fa-2xl"></i></a></li>
                    <li><a class="icon is-large" :href="resume" target="_parent"><i class="fa-solid fa-file fa-2xl"></i></a></li>
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
    import { useColorMode } from "@vueuse/core";
    import { PuccinTheme } from "@/types/helper";

    const colour = useColorMode<PuccinTheme>()
    const starColour = computed(() => {
        switch (colour.value) {
            case PuccinTheme.latte:
                return '#04a5e5';
            case 'light':
                return 'Black';
            case PuccinTheme.mocha:
                return '#cba6f7';
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