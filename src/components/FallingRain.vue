<template lang="html">
    <div ref="skyRef"></div>
</template>

<style lang="css">

    /* huge lovesXshoutouts to starknight */

    .star::before {
        /* content: "\f005";
        font-family: FontAwesome; */
        text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 50px #fff;
        text-shadow: 2px 2px;
    }

    @keyframes matrixRain {
        0% {
            transform: v-bind("$props.rotate ? 'rotate(0)' : 'none'");
            transform: translateY(0);
            opacity: 0.9;
        }

        20%{
            /* opacity: 1; */
        }

        80% {
            /* opacity: 0.3; */
        }

        100% {
            transform: v-bind("$props.rotate ? 'rotate(360deg)' : 'none'");
            transform: translateY(100vh);
            opacity: 0;
        }
    }
</style>

<script setup lang="ts">
    import consola from "consola";
    import { computed, defineProps, onUnmounted, ref, watch, watchEffect, withDefaults } from "vue";
    export type MinMaxArray = [number, number];
    const props = withDefaults(defineProps<{
        size?: number | MinMaxArray;
        items?: string | string[];
        duration?: number | MinMaxArray;
        interval?: number | MinMaxArray;
        colour?: string | string[];
        position?: 'infront' | 'behind' | 'interleave';
        container?: 'self' | 'parent' | 'body';
        rotate?: boolean;
    }>(),
        {
            interval: Math.random() + 0.25,
            duration: Math.random() * 5 + 5,
            size: Math.random() * 12 + 1,
            position: 'behind',
            container: 'self',
            items: '🌟',
        }
    );


    const skyRef = ref<HTMLElement | null>();
    const fallingStars = ref<number | null>(null);
    // setInterval(stars,  1000);
    const count = ref(0);

    const containerConstraint = computed(() => {
        let refElement = props.container === 'body' ? document.body : skyRef.value;

        return {
            min: refElement?.offsetLeft ?? 0,
            max: refElement?.offsetWidth - getSize() ?? 0,
        }
    })


    function getStarColour() {
        if (typeof props.colour === 'string')
            return props.colour
        else if (Array.isArray(props.colour))
            return props.colour[Math.floor(Math.random() * props.colour.length)];
        else
            return 'white';
    }

    function getDuration() {
        if (typeof props.duration === 'number')
            return props.duration
        else
            return Math.random() * props.duration[1] + props.duration[0];
    }

    function getInterval() {
        if (typeof props.interval === 'number')
            return props.interval;
        else
            return Math.random() * props.interval[1] + props.interval[0];
    }

    function getSize() {
        if (typeof props.size === 'number')
            return props.size;
        return Math.random() * props.size[1] + props.size[0];
    }

    function fall() {


        const duration = getDuration();
        const startPos = Math.random() * containerConstraint.value.max + containerConstraint.value.min
        const bin = document.createElement('span');
        bin.textContent = typeof props.items === 'string' ? props.items : props.items[Math.floor(Math.random() * props.items.length)];
        bin.id = `fall-${count.value}`;

        count.value++;

        bin.style.position = 'absolute';
        bin.style.top = '-16px';
        bin.style.left = `${startPos}px`;
        bin.style.fontSize = getSize() + 'px';
        bin.style.color = getStarColour();
        bin.style.animation = `matrixRain ${duration}s linear forwards`;

        switch (props.position) {
            case 'infront':
                bin.style.zIndex = '1000';
                break;
            case 'behind':
                bin.style.zIndex = '-1000';
                break;
            case 'interleave': {
                let zIndex = Math.round(Math.random() * 10);
                if (Math.random() > 0.5)
                    zIndex *= -1
                bin.style.zIndex = zIndex.toString();
                break;
            }
        }

        const animation = bin.getAnimations()?.[0];
        if (animation)
            animation.addEventListener("finish", (e) => {
                count.value--;
                bin.remove();
            });

        skyRef.value?.appendChild(bin);

        setTimeout(() => {
            count.value--;
            bin.remove();
        }, duration * 1000 + 100);
    }

    watchEffect((onCleanup) => {
        if (!skyRef.value)
            return
        if (typeof props.interval === 'number')
            fallingStars.value = setInterval(fall, getInterval() * 1000);
        else {
            fallingStars.value = setTimeout(() => {
                fall();
                // recursive timeout
                fallingStars.value = setTimeout(fall, getInterval() * 1000);
            }, getInterval() * 1000);
        }


        onCleanup(() => {
            typeof fallingStars.value === 'number' ?
                clearInterval(fallingStars.value ?? -0) :
                clearTimeout(fallingStars.value ?? -0);
        })
    })

    onUnmounted(() => {
        typeof fallingStars.value === 'number' ?
            clearInterval(fallingStars.value ?? -0) :
            clearTimeout(fallingStars.value ?? -0);
    })
</script>