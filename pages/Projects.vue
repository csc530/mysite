<template>
	<main>
		<app-columns :bulma="['is-centered','is-multiline']" :data="publicRepos"
		             :header="{text: 'Github Projects', level: 2}">
			<template v-slot="item">
				<app-card>
					<template #header>
						<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>
					</template>
					<p>{{ item.description }}</p>
					<template #footer="item">
						<p>{{ item.stars }}</p>
					</template>
				</app-card>
			</template>
		</app-columns>
		Columns of the private repos
		<app-columns :bulma="['is-centered','is-multiline']" :data="privateRepos"
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
	</main>
</template>
<style scoped></style>
<script lang="ts" setup>
	/// Octokit.js	// https://github.com/octokit/core.js#readme
	import {useAsyncData} from "#imports";
	
	const {data: projects} = await useAsyncData(async () => $fetch('/api/projects'))
	const {public: publicRepos, private: privateRepos} = projects.value;
</script>