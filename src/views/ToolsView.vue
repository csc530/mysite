<template lang="html">
    <IconListSection v-bind="data" />
</template>

<script setup lang="ts">
    import type { IconListSectionProps } from '@/types/iconListSection';
    import IconListSection from '@/components/IconListSection.vue';
    const    tools = [
        "vscode",
        "git",
        "github",
        "docker",
        "phpstorm",
        "jetbrains",
        "visualstudio",
        "mongodb",
        "webstorm",
        // "fatcow",
        "azure",
        "androidstudio",
        "ubuntu",
        "bun",
        "faunadb",
        "firebase",
        "netlify",
        "intellij",
        "linux",
        "windows11",
        "photoshop",
        "rider",
        "vercel",
    ]

    const data: IconListSectionProps = {
        title: "Tools",
        description: "An essential component to build, test, and deploy any project.",
        blurb: "I am well versed in many tools and not dependent upon any set and can pivot quite easily to new technologies because of my diverse experience.",
        icons: tools.sort(() => Math.random() - 0.5),
    }
</script>