import * as THREE from 'three'

import state from './state'
import { DinamicText } from './Elements/DinamicText'

let scene, renderer, container, torus, material, group, dinamicText, camera;

export const setup = () => {
	/**
	 * Scene
	 */
	scene = new THREE.Scene();

	renderer, container;
	torus;

	/**
	 * Material
	 */
	material = new THREE.MeshNormalMaterial();

	/**
	 * Objects
	 */
	group = new THREE.Group();
	scene.add( group );

	dinamicText = new DinamicText(state.text, group, material);

	/**
	 * Camera
	 */
	camera	= new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1500 );
	camera.position.set( 0, 600, 700 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
	scene.add(camera);
}

export const init = (renderCanvas) => {
	container = renderCanvas

	renderer = new THREE.WebGLRenderer({
		antialias		: true,
	});
	renderer.setClearColor( 0xffff00 );

	container = document.getElementById('container');

	renderer.setSize( window.innerWidth * 0.9, window.innerHeight );
	container.appendChild(renderer.domElement);


	var geometry	= new THREE.TorusGeometry( 150, 30, 32, 32 );
	torus	= new THREE.Mesh( geometry, material );
	scene.add( torus );

	animate();


	// EVENTS
	container.style.touchAction = 'none';
	container.addEventListener( 'pointerdown', onPointerDown );

	document.addEventListener( 'keypress', onDocumentKeyPress );
	document.addEventListener( 'keydown', onDocumentKeyDown );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	var PIseconds	= Date.now() * Math.PI;
	torus.rotation.y = PIseconds*0.0003;
	torus.rotation.x = PIseconds*0.0002;

	group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;

	renderer.render( scene, camera );
}

/**
Key pressing
**/
function onDocumentKeyPress( event ) {
	const keyCode = event.which;
	// backspace
	if ( keyCode == 8 ) {
		event.preventDefault();
	} else {
		const ch = String.fromCharCode( keyCode );
		state.text += ch;
		dinamicText.updateText(state.text);
	}
}

function onDocumentKeyDown( event ) {
	const keyCode = event.keyCode;

	// backspace
	if ( keyCode == 8 ) {
		event.preventDefault();
		state.text = state.text.substring( 0, state.text.length - 1 );
		dinamicText.updateText(state.text);
		return false;
	}
}

/**
Mouse Drag
**/
let targetRotation = 0;
let targetRotationOnPointerDown = 0;

let pointerX = 0;
let pointerXOnPointerDown = 0;

function onPointerDown( event ) {
	let windowHalfX = window.innerWidth / 2;
	if ( event.isPrimary === false ) return;
	pointerXOnPointerDown = event.clientX - windowHalfX;
	targetRotationOnPointerDown = targetRotation;
	document.addEventListener( 'pointermove', onPointerMove );
	document.addEventListener( 'pointerup', onPointerUp );
}

function onPointerMove( event ) {
	let windowHalfX = window.innerWidth / 2;
	if ( event.isPrimary === false ) return;
	pointerX = event.clientX - windowHalfX;
	targetRotation = targetRotationOnPointerDown + ( pointerX - pointerXOnPointerDown ) * 0.02;
}

function onPointerUp(event) {
	if ( event.isPrimary === false ) return;
	document.removeEventListener( 'pointermove', onPointerMove );
	document.removeEventListener( 'pointerup', onPointerUp );
}
