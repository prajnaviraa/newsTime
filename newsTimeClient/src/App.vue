<template>
  <div class="container">
    <NavBar style="margin-bottom: 20px;" />
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style scoped></style>
