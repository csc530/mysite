<template>
    <TheWelcome />
    <ProjectsView />

    <section class="section">
        <h2 class="title is-2">Languages</h2>
        <small>some programming languages I know and have used over the years (in no particular order(●'◡'●)</small>
        <ul
            class="is-flex is-justify-content-center is-flex-wrap-wrap is-flex-direction-row is-align-content-space-around">
            <li v-for="lang in languages" :key="lang">
                <dev-icon :size="5" :icon="lang" fallback="no-text" :wordmark="randomBool()" :design="randomDesign()"
                    coloured :title="lang" />
            </li>
        </ul>
    </section>

    <section class="section">
        <h2 class="title is-2">Tools</h2>
        <small>a list of tools I've gotten familiar with that help soooo much in development, cuz why sweat the small
            stuff</small>
        <ul
            class="is-flex is-justify-content-center is-flex-wrap-wrap is-flex-direction-row is-align-content-space-around">
            <li v-for="tool in tools" :key="tool">
                <dev-icon :size="5" :design="randomDesign()" :wordmark="randomBool()" fallback="no-text" :icon="tool"
                    :title="tool" coloured />
            </li>
        </ul>
    </section>

    <section class="section">
        <h2 class="title is-2">Frameworks</h2>
        <small>yep, not quite a frameworker but these libraries and frameworks have made projects easier; I like wheels
            but I try not to reinvent them ;-)</small>
        <ul
            class="is-flex is-justify-content-center is-flex-wrap-wrap is-flex-direction-row is-align-content-space-around">
            <li v-for="framework in frameworks" :key="framework">
                <dev-icon :design="randomDesign()" :wordmark="randomBool()" :size=5 fallback="no-text"
                    :title="framework" :icon="framework" coloured />
            </li>
        </ul>
    </section>
</template>

<style scoped></style>

<script setup lang="ts">
    import consola from "consola";
    import TheWelcome from "../components/TheWelcome.vue";
    import DevIcon from "@/components/DevIcon.vue";
    import { getDesigns, type Design } from "@/types/devicon";
    import ProjectsView from "@/views/ProjectsView.vue";

    const randomBool = () => Math.random() > 0.5;
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
    ].sort(() => Math.random() - 0.5);

    const tools = [
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
    ].sort(() => Math.random() - 0.5);

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
    ].sort(() => Math.random() - 0.5);

    const randomDesign = () => {
        const designs = getDesigns();
        return designs[Math.floor(Math.random() * designs.length)];
    };

</script>