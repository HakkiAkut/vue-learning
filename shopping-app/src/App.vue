<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
body {
  background-color: #f5e8c7;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.container {
  width: 1240px;
}
</style>
