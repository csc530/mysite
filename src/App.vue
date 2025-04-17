<template>
  <RouterView />

  <footer>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </footer>

</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>


<style lang="css">
  /* @import url("https://cdn.jsdelivr.net/gh/csc530/cacsscade/cacsscade.min.css"); */
</style>