<template>
    <section class="section">
        <h2 class="title is-2">{{ title }}</h2>
        <p>{{ description }}</p>
        <small>{{ blurb }}</small>
        <ul
            class="is-flex is-justify-content-center is-flex-wrap-wrap is-flex-direction-row is-align-content-space-around">
            <li v-for="icon in icons" :key="icon">
                <dev-icon :size="5" :icon="icon" v-bind="iconStyle" :title="icon" />
            </li>
        </ul>
    </section>
</template>


<script setup lang="ts">
    import type { IconListSectionProps } from '@/types/iconListSection';
    import { defineProps, withDefaults } from 'vue';

    import DevIcon from '@/components/DevIcon.vue';


    const props = withDefaults(defineProps<IconListSectionProps>(),
        {
            iconStyle() {
                return {
                size: 12,
                coloured: true,
                wordmark: true,
                design: 'plain',
                fallback: 'no-text'
            }
        }
    });
</script>