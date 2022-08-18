<template>
	<div id="nuxt wrapper">
		<!--     <NuxtWelcome />-->
		<the-navbar />
		<NuxtPage />
		<the-footer />
		<!--	  <h1>Hello</h1>-->
	</div>
</template>

<script lang="ts" setup>
	import {useHead} from "#imports";
	import TheNavbar from "~/components/TheNavbar.vue";
	import TheFooter from "~/components/TheFooter.vue";
	
	useHead({
		title: 'Home.js',
		titleTemplate: '%s - Nuxt.js',
		meta: [
			{
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [
			{href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css', rel: 'stylesheet'}
		]
	})
</script>