<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Postlist from "./components/Postlist";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
    Postlist,
  },
};
</script>

<style>
.main {
  margin: 0 auto;
  background-color: #e1e1e1;
  padding: 0;
}
</style>
