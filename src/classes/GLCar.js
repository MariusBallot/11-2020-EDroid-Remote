import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Controls from '../classes/Controls'
import RAF from '../utils/RAF'

class GLCar {
    constructor() {
        this.bind()
        this.mLoader = new GLTFLoader()
        this.carModel
        this.axisRotation = new THREE.Vector3(0, 1, 0)
        this.carParams = {
            speed: 0.2,
            direction: new THREE.Vector3(0, 0, 1),
            pos: new THREE.Vector3(0, 0, 0),
            angle: 0,
            angleSpeed: 0.1,
        }
    }

    init(scene) {
        this.scene = scene
        this.mLoader.load('./models/carProto.glb', this.carLoaded)
    }

    carLoaded(glb) {
        console.log(glb)
        this.carModel = glb.scene
        this.carModel.traverse(child => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true; //default is false
                child.receiveShadow = false;
            }
        })
        this.scene.add(this.carModel)
        RAF.subscribe('carUpdate', this.update)
    }

    update() {
        if (Controls.inputs.up) {
            const v = new THREE.Vector3().copy(this.carParams.direction).multiplyScalar(this.carParams.speed)
            this.carParams.pos.add(v)
        }

        if (Controls.inputs.down) {
            const v = new THREE.Vector3().copy(this.carParams.direction).multiplyScalar(this.carParams.speed)
            this.carParams.pos.sub(v)
        }

        if (Controls.inputs.left) {
            this.carParams.angle += this.carParams.angleSpeed
            this.carParams.direction.applyAxisAngle(this.axisRotation, this.carParams.angleSpeed)
            this.carModel.rotation.y = this.carParams.angle
        }

        if (Controls.inputs.right) {
            this.carParams.angle -= this.carParams.angleSpeed
            this.carParams.direction.applyAxisAngle(this.axisRotation, -this.carParams.angleSpeed)
            this.carModel.rotation.y = this.carParams.angle

        }
        this.carModel.position.copy(this.carParams.pos)
    }

    bind() {
        this.carLoaded = this.carLoaded.bind(this)
        this.update = this.update.bind(this)

    }
}

const _instance = new GLCar()
export default _instance