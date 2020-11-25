import socketConfig from "../../private/socket";
import io from "socket.io-client";

class SocketController {
    constructor() {

    }

    init() {
        var connectionOptions = {
            "force new connection": true,
            reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            timeout: 10000, //before connect_error and connect_timeout are emitted.
            transports: ["websocket"],
        };

        this.socket = io(socketConfig.socketUrl, connectionOptions);
    }

    bind() {

    }
}

const _instance = new SocketController()
export default _instance