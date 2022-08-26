<template>
	<header class="navbar hero-head ml-1 mr-1">
		<!-- Hero head: will stick at the top -->
		<div class=" navbar-brand is-align-content-center is-flex">
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
		</nav>
	</header>
</template>

<script lang="ts" setup>
	
	import {computed, useRouter} from "#imports";
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
	const childRoutes = $computed(() => {
		const children = routes.filter(route => route.path.lastIndexOf("/") !== 0);
		console.log(children);
		
		/*
		const emptyobj = {};
		const pathList = [...]
		const ancestry = [emptyobj];
		for(each child route in pathList)
		{
		if(last child route in pathList)
		{
		ancestry[i][pathList[i-1]] = pathList[i] //AKA child route;
		}
		else{
		const child = {};
		ancestry[i][pathLsit[i]] = child;
		ancestry.push(child);
		}
		}
		 */
		const struct = {};
		children.forEach(child => {
			const pathList = child.path.split('/');
			//remove dummy empty string from pathList
			pathList.shift();
			
			const ancestry = [struct];
			for(let i = 0; i < pathList.length; i++) {
				if(i === pathList.length - 1) {
					if(Array.isArray(ancestry[i - 1][pathList[i - 1]])) {
						ancestry[i - 1][pathList[i - 1]].push(pathList[i]);
					}
					else {
						ancestry[i - 1][pathList[i - 1]] = [pathList[i]];
					}
					// Object.hasOwn(ancestry[i - 1], pathList[i]) ? (<string[]>ancestry[i][pathList[i]]).push(pathList[i]) : ancestry[i][pathList[i]] = [pathList[i]];
				}
				else {
					if(Object.hasOwn(ancestry[i], pathList[i])) {
						ancestry.push(ancestry[i][pathList[i]]);
					}
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
	
	console.dir(childRoutes);
	
	const getParents = computed(() => {
		return childRoutes.map(route => route.path.split("/")[1]);
	});
</script>

