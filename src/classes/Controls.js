import SocketController from './SocketController'



class Controls {
    constructor() {
        this.bind()
        this.inputs = {
            up: false,
            down: false,
            left: false,
            right: false,
        }
    }

    start() {
        window.addEventListener('keydown', this.onKeyDown)
        window.addEventListener('keyup', this.onKeyUp)
    }

    onKeyDown(e) {
        let c = e.keyCode

        switch (c) {
            case 90:
                this.inputs.up = true
                break;
            case 83:
                this.inputs.down = true
                break;
            case 81:
                this.inputs.left = true
                break;
            case 68:
                this.inputs.right = true
                break;
        }
        SocketController.socket.emit('keyState', this.inputs)
    }

    onKeyUp(e) {
        let c = e.keyCode

        switch (c) {
            case 90:
                this.inputs.up = false
                break;
            case 83:
                this.inputs.down = false
                break;
            case 81:
                this.inputs.left = false
                break;
            case 68:
                this.inputs.right = false
                break;
        }
    }

    bind() {
        this.start = this.start.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this)
    }

}

const _instance = new Controls()
export default _instance