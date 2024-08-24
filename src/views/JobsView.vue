<template lang="html">
    <section class="section">
        <h2 class="title is-2">Work Experience</h2>

        <div class="is-flex is-flex-direction-row is-justify-content-space-evenly is-flex-wrap-wrap">
            <WorkCard class="is-flex-shrink-1" style="margin-bottom: 1rem;" v-for="(job, i) in jobs" v-bind="job"
                :key="i" />
        </div>
    </section>
</template>
<script setup lang="ts">
    import resume from '@/assets/resumer.json';
    import WorkCard from '@/components/WorkCard.vue';
    const jobs: typeof resume.work = resume.work;
</script>