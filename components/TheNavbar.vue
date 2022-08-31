<template>
	<header class="navbar hero-head">
		<!-- Hero head: will stick at the top -->
		<div class=" navbar-brand">
			<NuxtLink :to="homeRoute.path" class="is-align-content-center is-flex">
				<picture class="image is-64x64">
					<img alt="Bitmoji of myself waving hi" class="is-rounded" src="/bitmoji_sipping-tea.png" />
				</picture>
				<p class="title m-auto"><strong>Christofer Cousins</strong></p>
			</NuxtLink>
			<div class="navbar-burger" data-target="navbarMenuHeroC">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		
		<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
			<!--Create iterative sublist for child routes-->
			<template v-for="(child, parent, index) in routes" :key="index">
				<NuxtLink v-if="typeof child.path === 'string' && typeof child.name === 'string'" :to="child.path"
				          class="navbar-item">
					{{ child.name }}
				</NuxtLink>
				
				<div v-else class="has-dropdown navbar-item is-hoverable">
					<a class="navbar-link">{{ parent }}</a>
					<div class="navbar-dropdown is-right">
						<NuxtLink v-for="route in routes[parent]" v-if="Array.isArray(routes[parent])"
						          :to="route.path" class="navbar-item">
							{{ route.name }}
						</NuxtLink>
					</div>
				</div>
			
			</template>
		</nav>
	</header>
</template>

<script lang="ts" setup>
	
	import {useRouter} from '#imports';
	import {RouteRecordNormalized} from 'vue-router';
	import {$computed} from 'vue/macros';
	import {toTitleCase} from '~/utils/string';
	
	// todo: reduce complexity and clutter vars; I'm looking at you _routes
	const _routes = useRouter().getRoutes();
	
	
	const homeRoute = _routes.find(route => route.name === 'Home');
	
	const routes = $computed(() => {
		const children = _routes.filter(route => route.path.lastIndexOf('/') !== 0);
		
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
		
		//add root routes to the top of the structure
		const rootRoutes = _routes.filter(route => route.path.lastIndexOf('/') === 0 && route.name !== '404');
		rootRoutes.forEach(route => {
			struct[route.name] = route;
		});
		
		//recursively sort all object keys within struct not just root level
		function sortObjKeys(obj: object, prependKey?: string): object {
			//test if this a route/end point for the object
			const isEndPoint = Array.isArray(obj) || typeof (<RouteRecordNormalized>obj).path === 'string';
			if(isEndPoint) {
				if(Array.isArray(obj))
					obj.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
						const aName = a.name.toString();
						const bName = b.name.toString();
						return aName.localeCompare(bName);
					});
				return obj;
			}
			else {
				const sortedObj = {};
				if(prependKey)
					sortedObj[prependKey] = obj[prependKey];
				const keyDict: Record<string, string> = {};
				const sortedKeys = Object.keys(obj).map(oldKey => {
					const newKey = toTitleCase(oldKey);
					keyDict[newKey] = oldKey;
					return newKey;
				}).sort();
				
				
				for(const newKey of sortedKeys) {
					const key = keyDict[newKey];
					sortedObj[newKey] = sortObjKeys(obj[key]);
				}
				return sortedObj;
			}
		}
		
		return sortObjKeys(struct, 'Home');
	});
</script>

