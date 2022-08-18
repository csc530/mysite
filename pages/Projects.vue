<template>
	<main>
		<base-columns :bulma="['is-centered','is-multiline']" :data="publicRepos"
		              :header="{text: 'Github Projects', level: 2}">
			<template v-slot="item">
				<base-card>
					<template #header>
						<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>
					</template>
					<p>{{ item.description }}</p>
					<template #footer="item">
						<p>{{ item.stars }}</p>
					</template>
				</base-card>
			</template>
		</base-columns>
		Columns of the private repos
		<base-columns :bulma="['is-centered','is-multiline']" :data="privateRepos"
		              :header="{text: 'Private Projects & school work', level: 2}">
			<template v-slot="item">
				<base-card>
					<template #header>
						<a :href="item.url" target="_blank"><h2>{{ item.name }}</h2></a>
					</template>
					<p>{{ item.description }}</p>
				</base-card>
			</template>
		</base-columns>
	</main>
</template>
<style scoped></style>
<script lang="ts" setup>
	/// Octokit.js	// https://github.com/octokit/core.js#readme
	import {BaseCard, BaseColumns} from "#components";
	import {useAsyncData} from "#imports";
	
	const {data: projects} = await useAsyncData(async () => $fetch('/api/projects'))
	const {public: publicRepos, private: privateRepos} = projects.value;
</script>