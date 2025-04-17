<template>
  <RouterView />
  <footer>
    <nav>
    <ul>
      <li v-for="route in $router.options.routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>