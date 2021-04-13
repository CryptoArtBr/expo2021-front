import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Dat gui
 */
const gui = new dat.GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Text
 */
const fontLoader = new THREE.FontLoader();
fontLoader.load(
    './fonts/optimer_bold.typeface.json',
    (font) => {
        // Material
        const material = new THREE.MeshNormalMaterial()

        // Text
        const textGeometry = new THREE.TextBufferGeometry(
            'CryptoArtBr',
            {
                font: font,
                size: 3,
                height: 2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.05,
                bevelSize: 0.05,
                bevelOffset: 0,
                bevelSegments: 10
            }
        )
        textGeometry.center()

        const text = new THREE.Mesh(textGeometry, material)
        text.rotation.x = -90
        scene.add(text)
    }
)


/**
 * Objects
 */
const torusGeometry = new THREE.TorusGeometry( 15, 3, 32, 32 )
const torusMaterial = new THREE.MeshNormalMaterial()
const torus = new THREE.Mesh( torusGeometry, torusMaterial )
torus.rotation.set(90, 0, 0)
scene.add(torus)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set( 0, 50, 0 );
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor( 0xffff00 )
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Update controls
    controls.update()

    const now = new Date()

    torus.rotation.y = Math.PI*elapsedTime*0.2;
	torus.rotation.x = Math.PI*elapsedTime*0.2;

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()