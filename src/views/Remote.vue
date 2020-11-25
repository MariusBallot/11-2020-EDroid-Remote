<template>
  <div class="home">
    <Commands />
    <GLViewer />
  </div>
</template>

<script>
// @ is an alias to /src
import Commands from "@/components/Commands.vue";
import GLViewer from "@/components/GLViewer.vue";
import Controls from "../classes/Controls";

import RAF from "../utils/RAF";

import SocketController from "../classes/SocketController";

export default {
  name: "Home",
  components: {
    Commands,
    GLViewer,
  },

  mounted() {
    Controls.start();
  },

  methods: {
    loop: function () {},
  },
};
</script>
