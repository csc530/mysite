<template>
	<h1 v-if="level === 1" class="title">{{ text }}</h1>
	<h2 v-else-if="level === 2" class="subtitle">{{ text }}</h2>
	<h3 v-else-if="level === 3" class="subtitle">{{ text }}</h3>
	<h4 v-else-if="level === 4" class="subtitle">{{ text }}</h4>
	<h5 v-else-if="props.level === 5" class="subtitle">{{ text }}</h5>
	<h6 v-else-if="props.level === 6" class="subtitle">{{ text }}</h6>
	<h1 v-else class="title">{{ text }}</h1>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	const props = defineProps<{
		text: string,
		level: number,
	}>();
</script>

