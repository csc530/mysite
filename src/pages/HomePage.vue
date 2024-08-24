<template>
    <TheWelcome />
    <JobsView/>
    <LanguagesView />
    <ProjectsView />
    <FrameworkView />
    <section class="section">
        <h2 class="title is-2">Schooling 🎓</h2>
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
    <ToolsView />
</template>

<style scoped>
    ol {
        list-style-type: none;
        padding-left: 0;

    }
</style>

<script setup lang="ts">
    import LanguagesView from "@/views/LanguagesView.vue";
    import ProjectsView from "@/views/ProjectsView.vue";
    import FrameworkView from "@/views/FrameworksView.vue";
    import ToolsView from "@/views/ToolsView.vue";
    import TheWelcome from "@/views/TheWelcome.vue";
import JobsView from "@/views/JobsView.vue";

</script>