<template>
	<div>
		<!--     <NuxtWelcome />-->
		<NuxtPage />
		<!--	  <h1>Hello</h1>-->
	</div>
</template>

<script lang="ts" setup>
	import {useHead} from "#imports";
	
	useHead({
		title: 'Nuxt.js',
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