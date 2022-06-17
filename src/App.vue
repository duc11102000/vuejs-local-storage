<template>
  <div id="app">
    <nav-bar></nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>
