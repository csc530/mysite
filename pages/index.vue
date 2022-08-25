<template>
	<div class="hero is-flex-grow-1 is-flex-direction-column">
		<article class="is-flex-grow-1 hero-body is-flex-direction-column is-boxed">
			<p class="is-size-5">{{ currentTopic.content }}</p>
			<img v-if="currentTopic.img" :alt="currentTopic?.alt" :src="(getImg(currentTopic.img))"
			     class="image is-centered has-ratio " />
		</article>
		<nav class="hero-foot tabs is-boxed has-text-centered is-fullwidth is-medium">
			<ul class="subtitle">
				<!--todo: createApp functionality topics have TheNavbar active TODO something isHome routing-->
				<li v-for="(topic, index) in topics" :class="isActiveTopic(topic)" @click="switchTopic(topic)">
					<a :href="'#'+topic.title" @click.prevent="setURL(topic)">{{ topic.title }}</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style>
	img {
		max-width : 15rem;
		height    : auto;
	}
</style>

<script lang="ts" setup>
	import Topic from "@/models/topic";
	import {navigateTo, onMounted, useHead, useRoute} from "#imports";
	import {rand} from "@vueuse/shared";
	
	useHead({
		title: 'Home',
		description: 'Home page of the website',
	});
	
	///todo: maybe add firebase access to load txt for all the topics of me
	const christofer: Topic = {
		title: 'Christofer Cousins',
		content: `Hey I'm Christofer Cousins, I am a software developer and I love to code. I am currently working at the OPS as a web developer assistant.I enjoy problem solving (probably the reason why I love programming), playing games, learning, and volunteering with a local food bank, Umbrella of Hope.`,
	};
	const student: Topic = {
		title: 'Student',
		content: 'I\'m currently studying at Lakehead Georgian in the Honours Bachelor of Science (Computer Science) program',
		img: 'lakehead-georgian.png',
	};
	const developer = {
		title: 'Aspiring Full-Stack Developer',
		content: 'I am an excellent programmer and developer if I do say so myself😎. With experience of various languages and core programming concepts. Right now, I am looking for a job as a full-stack developer.',
		img: 'programmer-typing.gif',
	};
	const projects = {
		title: 'Projects',
		content: 'more project work available upon request',
		img: 'project.jpg',
	};
	const topics: Topic[] = [
		christofer,
		student,
		developer,
	];
	
	
	/**
	 * sets the url to the current topic so a specific topic can be shared
	 * @param topic the topic to set the url to
	 */
	const setURL = (topic: Topic) => window.location.href = '#'.concat(topic.title);
	let currentTopic = $ref<Topic>(topics[0]);
	const getImg = (img: string) => {
		const old = async (img) => {
			// const src = await import(/* @vite-ignore */`./assets/images/${img}`);
			// console.log(src, img);
			// src.default = src.default.replace(/^\/@fs/, '')
		}
		return 'assets/images/'.concat(img);
	};
	const switchTopic = (topic: Topic) => {
		currentTopic.isActive = false;
		currentTopic = topic;
		currentTopic.isActive = true;
	}
	
	const isActiveTopic = (topic: Topic) => {
		return topic.isActive ? 'is-active' : '';
	};
	
	onMounted(() => {
		const route = useRoute();
		if(route.hash)
			currentTopic = topics.find(topic => topic.title === route.hash.slice(1));
		if(!currentTopic || !route.hash) {
			currentTopic = topics[rand(0, topics.length)];
			navigateTo('/#'.concat(currentTopic.title), {replace: true});
		}
	});
</script>
