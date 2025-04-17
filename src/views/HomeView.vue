<template>
    <section :class="$style.main">
        <h1 ref="h1">Christofer Cousins</h1>
        <div>
            <p>Fullstack Developer</p>
            <p>Software Engineer</p>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { animate } from 'animejs';
    import { onMounted, useTemplateRef } from 'vue';
    const h1 = useTemplateRef('h1');
    onMounted(() => {
        if (!h1.value)
            return;

        h1.value.innerHTML = "Christofer Cousins".split("").map(char => `<span>${char}</span>`).join("");

        animate(h1.value?.querySelectorAll("span") || [], {
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0
            },
            delay: (_, i) => i * 50, // Function based value
            ease: 'inOutCirc',
            loopDelay: 1000,
            loop: true

        });
    });

</script>

<style module>
    .main {
        /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
        padding: 12px;
    }

    p {
        font-size: xx-large;
    }

    @media screen and (min-width: 1024px) {
        h1 {
            min-height: 80vh;
            display: inline-flex;
            align-items: center;
            /* width: min-content; */
            /* margin: auto; */
        }

        h1 + div {
            display: inline-block;
            width: max-content;
            margin-inline-start: auto;
        }
    }
</style>