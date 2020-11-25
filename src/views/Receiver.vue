<template>
  <div class="receiver">Here u'll see the controls pop up</div>
</template>

<script>
// @ is an alias to /src
import SocketController from "../classes/SocketController";

export default {
  name: "Home",

  created() {},

  mounted() {
    SocketController.socket.on("init", (data) => {
      console.log(data);
    });
    SocketController.socket.on("keyState", (data) => {
      console.log(data);
    });
  },
};
</script>
