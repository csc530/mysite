<template lang="html">
    <IconListSection v-bind="data" />
</template>

<script setup lang="ts">
    import type { IconListSectionProps } from '@/types/iconListSection';
    import IconListSection from '@/components/IconListSection.vue';
    const frameworks = [
        ".net",
        "DotNetCore",
        "bulma",
        "flutter",
        "gatsby",
        "unity",
        "handlebars",
        "junit",
        "nuxtjs"
    ]

    const data: IconListSectionProps = {
        title: "Frameworks",
        description: "I've worked with these frameworks in my professional and personal projects to offload the start of development and build upon known solutions. They're all frameworks I'm comfortable with and have experience with.",
        blurb: "",
        icons: frameworks.sort(() => Math.random() - 0.5),
    }
</script>