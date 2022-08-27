<template>
	<div id="nuxt-wrapper" class="hero is-fullheight">
		<the-navbar />
		<main id="mainHeroBody" class="hero-body is-flex-direction-column">
			<NuxtPage :page-key="$route.fullName" />
		</main>
		<the-footer />
	</div>
</template>

<style lang="sass">
	// Import a Google Font
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700')
	
	// Set your brand colors
	/* SCSS HEX */
	$persian-red: #C53230FF
	$snow: #FCF7F8FF
	$light-gray: #CED3DCFF
	$teal-blue: #4E8098FF
	$dark-purple: #241623FF
	$ultra-red: #FF6978FF
	$baby-powder: #FFFCF9FF
	$celeste: #B1EDE8FF
	$eggplant: #6D435AFF
	$black-coffee: #352D39FF
	
	/* SCSS Gradient */
	$gradient-top: linear-gradient(0deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-right: linear-gradient(90deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom: linear-gradient(180deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-left: linear-gradient(270deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-top-right: linear-gradient(45deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom-right: linear-gradient(135deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-top-left: linear-gradient(225deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom-left: linear-gradient(315deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-radial: radial-gradient(#C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	
	// Update Bulma's global variables
	$family-sans-serif: "Nunito", sans-serif
	$primary: $persian-red
	$info: $teal-blue
	
	// Update some of Bulma's component variables
	$body-background-color: $celeste
	$control-border-width: 2px
	
	// Import only what you need from Bulma
	//@import "bulma/sass/utilities/_all.sass"
	@import "bulma/sass/base/_all.sass"
	//@import "bulma/sass/elements/button.sass"
	//@import "bulma/sass/elements/container.sass"
	//@import "bulma/sass/elements/title.sass"
	//@import "bulma/sass/form/_all.sass"
	//@import "bulma/sass/components/navbar.sass"
	//@import "bulma/sass/layout/hero.sass"
	//@import "bulma/sass/layout/section.sass"
	
</style>

<script lang="ts" setup>
	import {definePageMeta, useHead,} from "#imports";
	import TheNavbar from "~/components/TheNavbar.vue";
	import TheFooter from "~/components/TheFooter.vue";
	
	// Import the functions you need from the SDKs you need
	import {initializeApp,} from "firebase/app";
	import {getAnalytics, isSupported} from "firebase/analytics";
	import {FirebaseOptions} from "@firebase/app-types";
	
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
	
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig: FirebaseOptions = {
		apiKey: import.meta.env.VITE_FIREBASE_API_KEY.toString(),
		authDomain: "csc-page.firebaseapp.com",
		projectId: "csc-page",
		storageBucket: "csc-page.appspot.com",
		messagingSenderId: "208420085066",
		appId: "1:208420085066:web:a89afe592c4cb27093b5b3",
		measurementId: "G-HJM736L47K"
	};
	
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	let analytics = null;
	if(await isSupported() === true)
		analytics = getAnalytics(app);
	app.automaticDataCollectionEnabled = true;
	
	
	useHead({
		titleTemplate: (title: string) => title ? title + ' | Chris.dev' : 'My Portfolio | Chris.dev',
		meta: [
			{
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [
			// {href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css', rel: 'stylesheet'}
		],
		script: [
			{src: "https://kit.fontawesome.com/f6ae6b9ec4.js", crossorigin: "anonymous"},
				{src: "/bulma.js", async: true, type: "text/javascript"},
		]
	});
	
	definePageMeta(
			{
				pageTransition: false,
				layoutTransition: false,
				key: route => route.fullPath,
			}
	);
</script>


