<template>
	<footer class="hero-foot is-fullwidth has-text-centered">
		<!-- Hero footer: will stick at the bottom -->
		<ul class="columns is-multiline">
			<li class="column" v-for="link in links">
				<a :href="link.href">
					<font-awesome-icon :icon="link.icon" size="m" color="#aa3344" />
				</a>
			</li>
		</ul>
		<p><small>The site made courtesy of yours truly <strong>Christofer Cousins 😁</strong></small></p>
	</footer>
</template>

<script lang="ts" setup>
	const links = [
		{
			href: '#',
			icon: 'fas fa-home'
		},
		{
			href: '#',
			icon: 'fas fa-user'
		},
		{
			href: '#',
			icon: 'fas fa-envelope'
		},
		{
			href: '#',
			icon: 'fas fa-phone'
		},
		{
			href: '#',
			icon: 'fas fa-map-marker-alt'
		}
	];

</script>