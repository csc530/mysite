<template>
	<header class="navbar hero-head ml-1 mr-1">
		<!-- Hero head: will stick at the top -->
		<div class=" navbar-brand is-align-content-center is-flex">
			<img src="public/bitmoji_sipping%20tea.png" alt="Bitmoji of myself waving hi" class="is-64x64 image is-rounded" />
			<p class="title m-auto"><strong>Christofer Cousins</strong></p>
			
			
			<div class="navbar-burger" data-target="navbarMenuHeroC">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		
		<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
			<!--Create iterative sublist for child routes-->
			<NuxtLink v-for="route in rootRoutes" :to="route.path" class="navbar-item">
				{{ route.name }}
			</NuxtLink>
			<div v-for="parent in Object.keys(childRoutesStructure)" class="has-dropdown navbar-item is-hoverable">
				<a class="navbar-link">{{ parent }}</a>
				<div class="navbar-dropdown is-right">
					<NuxtLink v-if="Array.isArray(childRoutesStructure[parent])" v-for="route in childRoutesStructure[parent]"
					          :to="route.path" class="navbar-item">
						{{ route.name }}
					</NuxtLink>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	
	import {useRouter} from "#imports";
	import {$computed} from "vue/macros";
	
	
	const routes = useRouter().getRoutes();
	//rename index route to their nearest parent route
	routes.forEach(route => {
		if(typeof route.name === 'string') {
			if(route.name.endsWith('index')) {
				const split = route.name.split('-');
				route.name = split.length > 1 ? split.slice(0, -1).pop() : 'Home';
			}
			else if(route.name.includes('-'))
				route.name = route.name.split('-').pop();
		}
	});
	const rootRoutes = $computed(() => {
		return routes.filter(route => route.path.lastIndexOf("/") === 0 && route.name !== "404");
	});
	const childRoutesStructure = $computed(() => {
		const children = routes.filter(route => route.path.lastIndexOf("/") !== 0);
		
		const struct = {};
		children.forEach(child => {
			const pathList = child.path.split('/');
			
			//remove dummy empty string from pathList
			pathList.shift();
			const ancestry = [struct];
			
			for(let i = 0; i < pathList.length; i++) {
				if(i === pathList.length - 1) {
					if(Array.isArray(ancestry[i - 1][pathList[i - 1]]))
						ancestry[i - 1][pathList[i - 1]].push(child);
					else
						ancestry[i - 1][pathList[i - 1]] = [child];
				}
				else {
					if(Object.hasOwn(ancestry[i], pathList[i]))
						ancestry.push(ancestry[i][pathList[i]]);
					else {
						const kid = {};
						ancestry[i][pathList[i]] = kid;
						ancestry.push(kid);
					}
				}
			}
		});
		return struct;
	});
</script>

