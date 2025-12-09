<template>
  <div id="app">
    <h2>RealGrid Vue Sample</h2>
    <RealGrid :domName="dom1"/>
    <RealGrid :domName="dom2"/>
  </div>
</template>

<script>
import RealGrid from './components/RealGrid.vue';

export default {
  name: 'App',
  components: {
    RealGrid
  },
  data() {
    return {
      dom1: "realgrid1",
      dom2: "realgrid2"
    }
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