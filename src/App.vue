<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import SocketController from "./classes/SocketController";

export default {
  created() {
    console.log("kop");
    SocketController.init();
  },
};
</script>


<style lang="stylus">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', sans-serif;
}
</style>
