<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <index></index>
    <father></father>
    <div>vuex 使用</div>
    <countVuex></countVuex>
  </div>
</template>

<script>
// import count from "./components/count.vue"
import HelloWorld from './components/HelloWorld.vue'
import index from "./components/index.vue"
import father from "./components/father/father.vue"
import countVuex from "./components/countVuex.vue"
export default {
  name: 'App',
  components: {
    HelloWorld,
    index,
    father,
    countVuex
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
