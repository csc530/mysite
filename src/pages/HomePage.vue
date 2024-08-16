<template>
    <TheWelcome />
    <ProjectsView />
    <IconListSection  v-bind="sections[2]" />
    <section class="section">
        <h2 class="title is-2">Schooling🎓</h2>
        <ol>
            <li>
                <h3 class="title is-3">Lakehead University <img
                        srcset="https://www.lakeheadgeorgian.ca/wp-content/uploads/2018/02/cropped-lakehead-georgian-favicon.png, /src/assets/images/cropped-lakehead-georgian-favicon.png"
                        alt="lakehead-Georgian logo" width="48"> Georgian College</h3>
                <p class="subtitle is-3"><a href="https://www.lakeheadgeorgian.ca/programs/computer-science/"
                        rel="noopener" referrerpolicy="origin-when-cross-origin">Computer Science & Computer
                        Programming</a></p>
                <p>Honours bachelor's (BsC) of Science</p>
                <time datetime="2020-2024">2020 - 2024</time>
                <p></p>
            </li>
        </ol>
    </section>
    <IconListSection v-for="section in sections.splice(0,2)" :key="section.title" v-bind="section" />
</template>

<style scoped>
    ol {
        list-style-type: none;
        padding-left: 0;

    }
</style>

<script setup lang="ts">
    import consola from "consola";
    import TheWelcome from "../views/TheWelcome.vue";
    import DevIcon from "@/components/DevIcon.vue";
    import { getDesigns, type Design } from "@/types/devIcon";
    import ProjectsView from "@/views/ProjectsView.vue";
    import IconListSection from "@/views/IconListSection.vue";
    import type { IconListSectionProps } from "@/types/iconListSection";


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


    const randomBool = () => Math.random() > 0.5;
    const iconStyle = (): IconListSectionProps['iconStyle'] => ({ design: randomDesign(), wordmark: randomBool(), coloured: true, fallback: 'no-text', size: 7 });
    const sections: IconListSectionProps[] = [
        { title: 'Languages', blurb: "some programming languages I know and have used over the years (in no particular order(●'◡'●)", icons: languages, iconStyle: iconStyle() },
        { title: 'Tools', blurb: "a list of tools I've gotten familiar with that help soooo much in development, cuz why sweat the small stuff", icons: tools, iconStyle: iconStyle() },
        { title: 'frameworks', blurb: "yep, not quite a frameworker but these libraries and frameworks have made projects easier; I like wheels but I try not to reinvent them ;-)", icons: frameworks, iconStyle: iconStyle() }
    ];

    function randomDesign() {
        const designs = getDesigns();
        return designs[Math.floor(Math.random() * designs.length)];
    }

</script>