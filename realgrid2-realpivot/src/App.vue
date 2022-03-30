<template>
  <div id="app">
    <h2>RealGrid2 RealPivot Vue Sample</h2>
    <RealGrid/>
  </div>
</template>

<script>
import RealGrid from './components/RealGrid1.vue'

export default {
  name: 'App',
  components: {
    RealGrid,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
