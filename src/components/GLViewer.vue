<template>
  <div class="gLViewer" ref="gLViewer"></div>
</template>

<script>
import ThreeScene from "../classes/ThreeScene";
export default {
  name: "GLViewer",
  mounted() {
    ThreeScene.init(this.$refs.gLViewer);
  },
};
</script>

<style scoped lang="stylus">
.gLViewer {
  width: 100vw;
  height: 100vh;
  background: pink;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
