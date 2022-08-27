<template>
	<main>
		<app-columns v-if="publicRepos" :bulma="['is-centered','is-multiline']" :data="publicRepos" :header="{text: 'Github Projects', level: 2}">
			<template v-slot="item">
				<app-card>
					<template v-slot:header>
						<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>
					</template>
					<p>{{ item.description }}</p>
					<template #footer="item">
						<p>{{ item.stars }}</p>
					</template>
				</app-card>
			</template>
		</app-columns>
		<div class="is-loading" v-else>Loading...</div>
		<app-columns v-if="privateRepos" :bulma="['is-centered','is-multiline']" :data="privateRepos"
		             :header="{text: 'Private Projects & school work', level: 2}">
			<template v-slot="item">
				<app-card>
					<template #header>
						<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>
					</template>
					<p>{{ item.description }}</p>
				</app-card>
			</template>
		</app-columns>
		<div class="is-loading" v-else>Loading...</div>
	
	</main>
</template>
<style scoped></style>
<script lang="ts" setup>
	/// Octokit.js	// https://github.com/octokit/core.js#readme
	import {useLazyAsyncData, watch} from "#imports";
	import {AppCard,AppColumns} from "#components";
	
	const {data: projects} = $(useLazyAsyncData('projects',()=> $fetch('/api/projects')));
	let publicRepos, privateRepos;
	watch(()=>projects,()=> {
		if(!projects)return
		publicRepos = projects.public;
		privateRepos = projects.private;
		console.log('projects changed');
	},{deep: true,immediate: true});
</script>