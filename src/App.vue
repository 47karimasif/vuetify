<template>
  <v-app id="app">
    <Navbar />
    <v-content class="grey lighten-4 mx-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  setup() {
    return {};
  }
};
</script>

<style scoped>
#app {
  background-color: #f5f5f5;
}
</style>
