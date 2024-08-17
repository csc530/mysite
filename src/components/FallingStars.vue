<template lang="html">
    <div ref="skyRef"></div>
</template>

<style lang="css">

    /* huge lovesXshoutouts to starknight */

    .star::before {
        /* content: "\f005";
        font-family: FontAwesome; */
        text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 50px #fff;
    }

    @keyframes starfallAnimation {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }

        80% {
            opacity: 1;
        }

        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @media screen and (max-width: 600px) {
        .star {
            font-size: 8px;
        }
    }

</style>

<script setup lang="ts">
    import { useInterval, useIntervalFn } from "@vueuse/core";
    import { defineProps, onUnmounted, watch, watchEffect, withDefaults } from "vue";
    import { ref } from "vue";
    const props = withDefaults(defineProps<{
        size?: number;
        duration?: number;
        interval?: number;
        colour?: string;
        position?: 'infront' | 'behind' | 'interleave';
    }>(),
        {
            interval: Math.random() + 0.25,
            duration: Math.random() * 5 + 5,
            size: Math.random() * 12 + 1,
            position: 'behind',
        }
    );


    const skyRef = ref<HTMLElement | null>();
    const fallingStars = ref<number | null>(null);
    // setInterval(stars,  1000);
    const count = ref(0);


    function stars() {
        const star = document.createElement('i');
        star.id = `star-${count.value}`;

        count.value++;

        star.classList.add('fa-solid', 'fa-star', 'star');
        star.style.position = 'absolute';
        star.style.top = '-16px';
        star.style.left = (Math.random() * (skyRef.value?.clientWidth || window?.clientWidth  || document?.clientWidth || document.body?.clientWidth)).toString() + 'px';
        star.style.fontSize = props.size + 'px';
        star.style.color = props.colour ?? 'white';
        star.style.animation = `starfallAnimation ${props.duration}s linear forwards`;

        switch (props.position) {
            case 'infront':
                star.style.zIndex = '1000';
                break;
            case 'behind':
                star.style.zIndex = '-1000';
                break;
            case 'interleave': {
                let zIndex = Math.round(Math.random() * 10);
                if (Math.random() > 0.5)
                    zIndex *= -1
                star.style.zIndex = zIndex.toString();
                break;
            }
        }

        const animation = star.getAnimations()?.[0];
        if (animation)
            animation.addEventListener("finish", () => {
                document.querySelector(`#${star.id}`)?.remove();
            })

        skyRef.value?.appendChild(star);

        setTimeout(() => {
            const icon: HTMLElement | null = document.querySelector(`#${star.id}`);
            if (icon) {
                icon.getAnimations()?.[0].addEventListener("finish", () => {
                    icon.remove();
                    count.value--;
                })
            }
        }, props.duration * 1000);
    }

    watch(skyRef, () => {
        if (skyRef.value) {
            fallingStars.value = setInterval(stars, props.interval * 100);
        }
    })

    onUnmounted(() => {
        clearInterval(fallingStars.value ?? -0);
    })
</script>