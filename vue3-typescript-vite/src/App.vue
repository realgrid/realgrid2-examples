<template>
  <h2>RealGrid Vue3 Sample</h2>
  <RealGrid />
</template>

<script lang="ts">
import RealGrid from './components/RealGrid.vue';
export default {
  name: 'App',
  components: {
    RealGrid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
</style>
