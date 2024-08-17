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
    import { computed, defineProps, onUnmounted, ref, watch, watchEffect, withDefaults } from "vue";
    export type MinMaxArray = [number, number];
    const props = withDefaults(defineProps<{
        size?: number | MinMaxArray;
        duration?: number | MinMaxArray;
        interval?: number | MinMaxArray;
        colour?: string | string[];
        position?: 'infront' | 'behind' | 'interleave';
        container?: 'self' | 'parent' | 'body';
    }>(),
        {
            interval: Math.random() + 0.25,
            duration: Math.random() * 5 + 5,
            size: Math.random() * 12 + 1,
            position: 'behind',
            container: 'self'
        }
    );


    const skyRef = ref<HTMLElement | null>();
    const fallingStars = ref<number | null>(null);
    // setInterval(stars,  1000);
    const count = ref(0);

    const containerConstraint = computed(() => {
        let refElement;
        switch (props.container) {
            case 'self':
            default:
                refElement = skyRef.value;
                break;
            case 'parent':
                refElement = skyRef.value?.parentElement;
                break;
            case 'body':
                refElement = document.body;
                break;
        }


        return {
            min: refElement?.offsetLeft ?? 0,
            max: refElement?.offsetWidth - props.size ?? 0,
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

    function getStarSize() {
        if (typeof props.size === 'number')
            return props.size;
        return Math.random() * props.size[1] + props.size[0];
    }

    function stars() {
        const duration = getDuration();
        const startPos = Math.random() * containerConstraint.value.max + containerConstraint.value.min
        const star = document.createElement('i');
        star.id = `star-${count.value}`;

        count.value++;

        star.classList.add('fa-solid', 'fa-star', 'star');
        star.style.position = 'absolute';
        star.style.top = '-16px';
        star.style.left = startPos.toString() + 'px';
        star.style.fontSize = getStarSize() + 'px';
        star.style.color = getStarColour();
        star.style.animation = `starfallAnimation ${duration}s linear forwards`;

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
        }, duration * 1000);
    }

    watchEffect((onCleanup) => {
        if (!skyRef.value)
            return
        if (typeof props.interval === 'number')
            fallingStars.value = setInterval(stars, getInterval() * 1000);
        else {
            fallingStars.value = setTimeout(() => {
                stars();
                // recursive timeout
                fallingStars.value = setTimeout(stars, getInterval() * 1000);
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