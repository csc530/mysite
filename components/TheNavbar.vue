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
				<!--Create iterative sublist for child routes-->
				{{ route.name }}
			</NuxtLink>
		</nav>
	</header>
</template>

<style scoped></style>

<script lang="ts" setup>
	
	import {computed, useRouter} from "#imports";
	import {$computed} from "vue/macros";
	
	const router = useRouter();
	const routes = useRouter().getRoutes();
	const rootRoutes = $computed(() => {
		const roots = routes.filter(route => route.path.lastIndexOf("/") === 0 && route.name !== "404");
		//todo make so all index page reference their nearest parent name
		roots.find(route => route.name === 'index').name = 'Home';
		return roots;
	});
	const childRoutes = $computed(() => {
		return routes.filter(route => route.path.lastIndexOf("/") !== 0);
	});
	const getParents = computed(() => {
		return childRoutes.map(route => route.path.split("/")[1]);
	});
</script>

