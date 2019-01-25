<!--html：模板-->
<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from './components/Top'

  export default {
    name: 'App',
    components: {
      "top": Top
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 10px;
    width:100%;
  }
</style>
