<template>
	<footer class="hero-foot is-fullwidth has-text-centered">
		
		<!-- Hero footer: will stick at the bottom -->
		<ul class="tabs columns is-multiline">
			<li v-for="link in links" class="column">
				<a :href="link.href" :title="link.title">
					<font-awesome-icon :icon="link.icon" color="#aa3344" size="lg" />
				</a>
			</li>
		</ul>
		
		<p><small>The site made courtesy of yours truly <strong>Christofer Cousins 😁</strong></small></p>
		<small><a href="https://y.at/✝️🧠🍁👽" referrerpolicy="origin" title="Come check me out!">✝️🧠🍁👽</a></small>
	
	</footer>
</template>

<script lang="ts" setup>
	const links = [
		{
			href: 'mailto:csc530@vivaldi.net?subject=What did you wanna tell me???&body=Let me know in as many or as little words as you\'d like!😁',
			icon: 'envelope',
			title: 'Send me an email me',
		},
		{
			href: '/resume.PDF',
			icon: 'file-lines',
			title: 'My resume'
		},
		{
			href: 'https://github.com/csc530',
			icon: 'fa-brands fa-github-alt',
			title: 'My Github'
		}
	];

</script>