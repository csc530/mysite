<template>
	<main class="content">
		<h1 class="title">All about me</h1>
		<!--TODO: Three images with text representing me-->
		<base-columns v-bind:data="aboutMe">
			<template #default="{title,content,list}">
				<base-card>
					<template v-slot:header>
						<h2>{{ title }}</h2>
					</template>
					<p v-if="content" v-html="content" />
					<ul v-if="list" class="">
						<li v-for="item in list">
							<p>{{ item }}</p>
						</li>
					</ul>
				</base-card>
			</template>
		</base-columns>
	</main>

</template>

<style scoped>

</style>
<script lang="ts" setup>
	
	import BaseCard from "@/components/BaseCard.vue";
	import BaseColumns from '@/components/BaseColumns.vue';
	import Columnable from '@/models/columnContent';
	
	interface AboutColumn extends Columnable {
		title: string;
		link?: string[] | Record<string, string>;
		linkText?: string[];
		content?: string;
		list?: string[];
		footer?: string;
	}
	
	const media: AboutColumn = {
		title: 'Favourite Media (Movies, Tv Shows, Games, etc.)',
		list: [
			'Pokémon Mystery Dungeon: Explorers of Darkness',
			'Final Space',
			'The Alchemist Code',
			'Throne of Glass'
		],
		display: function(): string {
			throw new Error('Function not implemented.');
		}
	};
	const education: AboutColumn = {
		title: 'Education',
		content: 'Honours Bachelor of Science (Computer Science)<br/>GPA: 86.57%',
		link: {
			program: 'https://www.lakeheadgeorgian.ca/programs/computer-science/',
			university: 'https://www.lakeheadgeorgian.ca'
		},
		display: function() {
			return this.toString();
		}
	};
	const hobbies: AboutColumn = {
		title: 'Hobbies & Interests',
		list: ['Programming', 'Film Critique', 'Gaming', 'Cooking'],
		display: function(): string {
			throw new Error("Function not implemented.");
		},
		class: ['is-narrow'],
	};
	const aboutMe: AboutColumn[] = [education, hobbies, media];
</script>

