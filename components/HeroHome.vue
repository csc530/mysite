<template>
	<!-- Hero content: will be in the middle -->
	<article class="is-flex-grow-2">
		<p class="is-size-5">{{ currentTopic.content }}</p>
		<figure class="image  is-centered">
			<img v-if="currentTopic.img" :alt="currentTopic?.alt" :src="(getImg(currentTopic.img))" class="has-ratio " />
		</figure>
	</article>
	<nav class="tabs is-boxed is-dark is-inverted has-text-centered is-fullwidth is-medium">
		<ul>
			<li v-for="(topic, index) in topics" :class="activeTopic(topic)" @click="currentTopic = topic">
				<!--todo: createApp functionality topics have TheNavbar active TODO something isHome routing-->
				<a>{{ topic.title }}</a>
			</li>
		</ul>
	</nav>
</template>

<style>
	img {
		max-width : 15rem;
		height    : auto;
	}
</style>

<script lang="ts" setup>
	import {ref} from "vue";
	import Topic from "../models/topic";
	
	const props = defineProps<{
		topics: Topic[];
	}>();
	const currentTopic = ref(props.topics[0]);
	const getImg = (img: string) => {
		const old = async (img) => {
			// const src = await import(/* @vite-ignore */`./assets/images/${img}`);
			// console.log(src, img);
			// src.default = src.default.replace(/^\/@fs/, '')
		}
		return 'assets/images/'.concat(img);
	};
	
	
	function activeTopic(index: Topic) {
		return index === currentTopic.value ? 'has-text-weight-bold is-active' : '';
	}

</script>

