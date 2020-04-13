<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg=" - Vue.js App"/>
    <YieldCurve :chartData="[{x:1, y:0.5}, {x:2, y:1.3}]"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import YieldCurve from './components/yieldCurve/YieldCurve.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    YieldCurve
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
