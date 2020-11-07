<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Manager />
  </div>
</template>

<script>
import Manager from "./components/Manager.vue";

export default {
  name: "App",
  components: {
    Manager,
  },
};
</script>

<style>
body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
body * {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
