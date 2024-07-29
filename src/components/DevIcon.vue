<template>
    <i v-bind="$attrs" :class="[iconClass, { colored: coloured }]"></i>
    <p v-if="iconClass && wordmark && !hasWordmark(icon) && fallback !== 'no-text'" class="subtitle is-6 has-text-centered is-capitalized">
        {{ icon }}
    </p>
</template>

<style lang="css" scoped>
@import "devicon/devicon.min.css";

i {
    font-size: v-bind("`${size}rem`");
    margin: auto;
    padding: 4px;
}
</style>

<script setup lang="ts">
import { hasWordmark, type Design, type DeviconProps } from "@/types/devicon";
import consola from "consola";
import deviconJson from "devicon/devicon.json";
import { computed } from "vue";



const props = withDefaults(defineProps<DeviconProps>(),
    {
        design: 'plain',
        size: 3
    });

const iconClass = computed(() => {
    const icon = deviconJson.find(i => i.name === props.icon.trim().toLowerCase() || i.altnames.includes(props.icon.trim().toLowerCase()))
    if (!icon)
        return

    let iconClass = `devicon-${icon.name}-`;

    if (props.wordmark)
        if (icon.versions.font.includes(`${props.design}-wordmark`))
            iconClass += `${props.design}-wordmark`
        else if (props.fallback)
            if (hasWordmark(icon.name))
                iconClass = `devicon-${icon.name}-${icon.versions.font.find(font => /\w+-wordmark/.test(font)) ?? icon.versions.font[0]}`
            else
                iconClass = `devicon-${icon.name}-${icon.versions.font[0]}`
        else
            return consola.warn(`No wordmark icon found for ${props.icon} with style ${props.design}`);
    else
        if (icon.versions.font.includes(props.design))
            iconClass += props.design
        else if (props.fallback)
            iconClass += icon.versions.font[0];
        else
            return consola.warn(`No icon found for ${props.icon} with style ${props.design}`);

    return iconClass;
})
</script>