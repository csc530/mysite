<template lang="html">
    <div class="card is-flex is-flex-direction-column">
        <header class="card-header is-flex-shrink-1">
            <p class="card-header-title">
                <a v-if="job.url" :href="job.url" target="_blank">
                    {{ job.position }} @ {{ job.name }}
                </a>
                <template v-else>
                    {{ job.position }} @ {{ job.name }}
                </template>
            </p>
            <!-- <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button> -->
        </header>
        <section class="card-content is-flex-grow-1">
            <div class="content">
                <ul>
                    <li v-for="item in job.highlights" :key="item">{{ item }}</li>
                </ul>
            </div>
        </section>
        <footer class="card-footer is-flex-shrink-1">
            <time class="card-footer-item"
                :datetime="new Date(job.startDate).toISOString()">{{ new Date(job.startDate).toLocaleDateString() }}</time>
            <time class="card-footer-item"
                :datetime="new Date(job.endDate).toISOString()">{{ new Date(job.endDate).toLocaleDateString() ?? 'Present' }}</time>
        </footer>
    </div>
</template>

<script setup lang="ts">
    import type { WorkCardProps } from '@/types/workCard';
    import { defineProps, useAttrs } from 'vue';

    const props = defineProps<WorkCardProps>();
    // merge props with attrs
    const attrs = useAttrs();

    const job: typeof import('@/assets/resumer.json').work[number] = Object.assign({}, props, attrs);
</script>