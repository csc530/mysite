<template>
	<!--	<base-columns :data="publicRepos" :header="{text: 'Github Projects', level: 2}" :bulma="['is-centered','is-multiline']">-->
	<!--		<template v-slot="item">-->
	<!--			<base-card>-->
	<!--				<template #header>-->
	<!--					<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>-->
	<!--				</template>-->
	<!--				<p>{{ item.description }}</p>-->
	<!--				<template #footer="item" >-->
	<!--					<p>{{item.stars}}</p>-->
	<!--				</template>-->
	<!--			</base-card>-->
	<!--		</template>-->
	<!--	</base-columns>-->
	<main>poop</main>
	<!--	Columns of the private repos-->
	<!--	<base-columns :data="privateRepos" :header="{text: 'Private Projects & school work', level: 2}" :bulma="['is-centered','is-multiline']">-->
	<!--		<template v-slot="item">-->
	<!--			<base-card>-->
	<!--				<template #header>-->
	<!--					<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>-->
	<!--				</template>-->
	<!--				<p>{{ item.description }}</p>-->
	<!--			</base-card>-->
	<!--		</template>-->
	<!--	</base-columns>-->
</template>
<style scoped></style>
<script lang="ts" setup>
	/// Octokit.js	// https://github.com/octokit/core.js#readme
	import {definePageMeta} from "#imports";
	
	definePageMeta({
		title: "Projects",
		description: "Projects I have worked on",
		image: "https://avatars0.githubusercontent.com/u/17098?s=460&v=4",
		middleware: ["projects"]
	});


</script>