<template>
    <teleport to="body" :disabled="teleport" ref="teleportRef">
        <footer v-bind="$attrs" class="footer content has-text-centered has-background-inherit">
            <small class="font-italic">insert obligatory mort quote here</small>
        </footer>
    </teleport>
</template>

<style scoped>
    /*place footer at the bottom always*/
    footer {
        margin-top: auto;
    }
</style>

<script setup lang="ts">
    import consola from "consola";
    import {ref, type Teleport, type TeleportProps, watch} from "vue";

    // const teleportRef = ref<InstanceType<typeof Teleport> | null>(null);
    const teleport  = ref(true);
    watch([], () => {
        // teleport.value = true
    });
</script>
