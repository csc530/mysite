<template>
    <section class="hero has-text-centered">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">[be] in awee</h1>
                <!--    and my pfp is spinning in the middle with radiance-->
                <!--    surrounded by stars? gifs??-->
                <img alt="" />

                <h2 class="subtitle">Christofer: <span ref="attrRef"></span></h2>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import WelcomeItem from "./WelcomeItem.vue";
    import DocumentationIcon from "./icons/IconDocumentation.vue";
    import ToolingIcon from "./icons/IconTooling.vue";
    import EcosystemIcon from "./icons/IconEcosystem.vue";
    import CommunityIcon from "./icons/IconCommunity.vue";
    import SupportIcon from "./icons/IconSupport.vue";
    import {computed, ref, watch} from "vue";
    import consola from "consola";

    const attrRef = ref<HTMLSpanElement | null>(null);


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
        "red-onkulous",
        "REACT-HATER"
    ]);

    const attribute = ref(attributes.value[Math.random() * attributes.value.length | 0]);

    watch(attrRef, (value) => {
        typeAttribute(randomAttribute());
    });

    function typeAttribute(attribute: string) {
        if(!attrRef.value)
            return;

        attrRef.value.textContent = "";
        let index = 0;
        const interval = setInterval(() => {
            if(!attrRef.value) return;

            attrRef.value.textContent += attribute[index];
            index++;
            if(index === attribute.length) {
                clearInterval(interval);
                clearAttribute(attribute);
            }
        }, Math.random() * 1000);
    }

    function clearAttribute(attribute: string) {
        if(!attrRef.value)
            return;

        attrRef.value.textContent = attribute;
        let index = 0;
        const interval = setInterval(() => {
            if(!attrRef.value) return;

            attrRef.value.textContent = attribute.substring(0, attribute.length - index);
            index++;
            if(index === attribute.length) {
                clearInterval(interval);
                typeAttribute(randomAttribute());
            }
        }, Math.random() * 1000);
    }

    function randomAttribute(not?: string | string[]) {
        let attr = not?.[0] ?? attributes.value[Math.random() * attributes.value.length | 0];
        if(not) {
            if(typeof not === "string")
                not = [not];
            while(not.includes(attr))
                attr = attributes.value[Math.random() * attributes.value.length | 0];
        }
        return attr;
    }
</script>