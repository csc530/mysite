<template>
    <teleport to="body" :disabled="teleport" ref="teleportRef">
        <footer v-bind="$attrs" class="footer  has-text-centered has-background-inherit">
            <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/18acd8f58d49b551eb8cc0ff035a006d605c9905/assets/footers/ext_black_monochromatic.svg"
                    alt="logo"  :width="width" decoding="auto" loading="lazy" />
            <small class="font-italic">insert obligatory mort quote here</small>

            <section class="section">
                <h2 class="subtitle is-7">Acknowledgements</h2>
                <ul>
                    <li>Icons from <a href="https://feathericons.com/">feathericons.com</a></li>
                    <li><a href="https://bulma.io">Bulma</a></li>
                    <li><a href="https://vuejs.org">Vue</a></li>
                    <li><a href="https://catppuccin.com">Catppuccin</a></li>
                </ul>
            </section>
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
    const teleport = ref(true);
    watch([], () => {
        // teleport.value = true
    });

    const width = ref(window.innerWidth)
</script>
