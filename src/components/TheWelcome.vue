<template>
    <h1>[be] in awee</h1>
    <!--    and my pfp is spinning in the middle with radiance-->
    <!--    surrounded by stars? gifs??-->
    <img/>

    <h2>Christofer: {{ attributes[0] }}</h2>

</template>

<script setup lang="ts">
    import WelcomeItem from './WelcomeItem.vue'
    import DocumentationIcon from './icons/IconDocumentation.vue'
    import ToolingIcon from './icons/IconTooling.vue'
    import EcosystemIcon from './icons/IconEcosystem.vue'
    import CommunityIcon from './icons/IconCommunity.vue'
    import SupportIcon from './icons/IconSupport.vue'
    import {computed, ref,watch} from "vue";


    const attributes = ref([
        "computer scientist",
        "software engineer",
        "that guy",
        "child of God",
        "doing his best",
        "sleeping",
        "problem solver",
        "life-long learner",
        "student of all",
        "code monkey",
        "prime programmer",
    ]);
    setInterval(() => {
        const attr = attributes.value.shift();
        if(attr)
            attributes.value.push(attr)
    }, 2000);


</script>