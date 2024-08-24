<template lang="html">
    <IconListSection v-bind="data" />
</template>

<script setup lang="ts">
    import type { IconListSectionProps } from '@/types/iconListSection';
    import IconListSection from '@/components/IconListSection.vue';
    const languages = [
        "vuejs",
        "react",
        "angularjs",
        "typescript",
        "javascript",
        "nodejs",
        "php",
        "json",
        "java",
        "bash",
        "powershell",
        // "nushell",
        "c",
        "csharp",
        "css3",
        "html5",
        "markdown",
        "kotlin",
        "visualbasic",
        "mysql",
        "sqlite",
        "xml",
        "yaml",
    ];

    const data: IconListSectionProps = {
        title: 'Languages',
        description: 'Programming languages I have worked with and comfortable using to solution problems.',
        blurb: "in no particular order",
        icons: languages.sort(() => Math.random() - 0.5),
    }
</script>