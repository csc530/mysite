<template>
	<div>{{ error }}</div>
	<button @click="handleError">Clear errors</button>
</template>

<script setup>
	import {clearError} from 'nuxt3/app';
	
	const props = defineProps({
		error: Object
	})
	console.log(props.error);
	const handleError = () => clearError({redirect: '/'})
</script>