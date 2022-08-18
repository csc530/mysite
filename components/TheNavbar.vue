<template>
	<!-- Hero head: will stick at the top -->
	<header class="navbar hero-head ml-1 mr-1">
		<div class=" navbar-brand is-align-content-center is-flex">
			<p class="title m-auto"><strong>Christofer Cousins</strong></p>
			
			<div class="navbar-burger" data-target="navbarMenuHeroC">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		
		<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
			<NuxtLink v-for="route in rootRoutes" :to="route.path" class="navbar-item">
				{{ route.name }}
			</NuxtLink>
		</nav>
	</header>
</template>
<style scoped></style>
<script lang="ts" setup>
	
	import {computed, useRouter} from "#imports";
	import {RouteRecord, RouteRecordRaw} from "vue-router";
	
	const routes = useRouter().getRoutes().filter(route => !route.meta.isInvisible);
	const getChildRoutes = computed(() => {
		let kids: Array<RouteRecordRaw> = [];
		routes.filter(route => route.children.length > 0).forEach(route => kids = route.children.concat(kids));
		return kids;
	});
	
	function isChildRoute(route: RouteRecord): boolean {
		return getChildRoutes.value.some(child => {
			return child.name === route.name;
		});
	}
	
	const rootRoutes = computed(() => {
		return routes.filter(route => !isChildRoute(route));
	});
</script>

