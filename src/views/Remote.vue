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
import socketConfig from "../../private/socket";
import io from "socket.io-client";

export default {
  name: "Home",
  components: {
    Commands,
    GLViewer,
  },

  created() {
    var connectionOptions = {
      "force new connection": true,
      reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
      timeout: 10000, //before connect_error and connect_timeout are emitted.
      transports: ["websocket"],
    };

    this.socket = io(socketConfig.socketUrl, connectionOptions);

    this.socket.on("data", (data) => {
      console.log(data);
    });
  },

  mounted() {
    Controls.start();
  },
};
</script>
