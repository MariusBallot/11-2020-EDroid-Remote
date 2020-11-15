let flags = {
    up: false,
    down: false,
    left: false,
    right: false,
}

class Controls {
    constructor() {
        this.bind()
    }

    start() {
        window.addEventListener('keydown', this.onKeyDown)
        window.addEventListener('keyup', this.onKeyUp)
    }

    onKeyDown(e) {
        let c = e.keyCode

        switch (c) {
            case 90:
                flags.up = true
                break;
            case 83:
                flags.down = true
                break;
            case 81:
                flags.left = true
                break;
            case 68:
                flags.right = true
                break;
        }

    }

    onKeyUp(e) {
        let c = e.keyCode

        switch (c) {
            case 90:
                flags.up = false
                break;
            case 83:
                flags.down = false
                break;
            case 81:
                flags.left = false
                break;
            case 68:
                flags.right = false
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