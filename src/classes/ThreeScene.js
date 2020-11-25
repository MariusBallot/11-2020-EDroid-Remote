import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import RAF from '../utils/RAF'
import GLCar from './GLCar'

class ThreeScene {
    constructor() {
        this.bind()

        this.camera
        this.scene
        this.renderer
        this.controls
        this.sceneParams = {
            camDistance: new THREE.Vector3(30, 20, 30)
        }
    }

    init(container) {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.debug.checkShaderErrors = true
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        container.appendChild(this.renderer.domElement)

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.copy(this.sceneParams.camDistance)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enabled = true
        this.controls.maxDistance = 1500
        this.controls.minDistance = 0

        let light = new THREE.AmbientLight()
        let pointLight = new THREE.PointLight()
        pointLight.castShadow = true;
        pointLight.position.set(0, 20, 0)
        // this.scene.add(light)
        this.scene.add(pointLight)

        const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial())
        for (let i = 0; i < 30; i++) {
            let c = cube.clone()
            c.position.set(Math.random() * 100, -0.1, Math.random() * 100)
            this.scene.add(c)
        }

        let floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshLambertMaterial())
        floor.receiveShadow = true
        this.scene.add(floor)
        floor.rotateX(-Math.PI / 2)

        GLCar.init(this.scene)

        window.addEventListener("resize", this.resizeCanvas)
        RAF.subscribe('threeSceneUpdate', this.update)
    }

    update() {
        this.renderer.render(this.scene, this.camera);

        this.camera.position.copy(GLCar.carParams.pos.clone().add(this.sceneParams.camDistance))
    }


    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new ThreeScene()
export default _instance