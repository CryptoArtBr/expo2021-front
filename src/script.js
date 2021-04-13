import './style.css'
import * as THREE from 'three'

var text = "CryptoArtBr";

var scene, renderer, camera, container;
var torus, group;

function init(){

	renderer = new THREE.WebGLRenderer({
		antialias		: true,
	});
	renderer.setClearColor( 0xffff00 );


	container = document.getElementById('container');

	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	camera	= new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1500 );
	camera.position.set( 0, 400, 700 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
	scene.add(camera);

	group = new THREE.Group();
	scene.add( group );


	var geometry	= new THREE.TorusGeometry( 150, 30, 32, 32 );
	material		= new THREE.MeshNormalMaterial();
	torus			= new THREE.Mesh( geometry, material );
	scene.add( torus );

	loadFont();

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
Text functions
**/
const height = 20, size = 30, curveSegments = 4, bevelThickness = 2, bevelSize = 1.5, hover = 30;
var font, textMesh1, material;

function loadFont() {
	const loader = new THREE.FontLoader();
	loader.load( 'fonts/optimer_bold.typeface.json', function ( response ) {
		font = response;
		createText();
	});
}

function createText() {
	if(textMesh1) group.remove( textMesh1 );

	const textGeo = new THREE.TextGeometry(text, {
		font: font,
		size: size,
		height: height,
		curveSegments: curveSegments,
		bevelThickness: bevelThickness,
		bevelSize: bevelSize,
		bevelEnabled: true

	});

	textGeo.computeBoundingBox();

	textMesh1 = new THREE.Mesh( textGeo, material );

	const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
	textMesh1.position.x = centerOffset;
	
	group.add( textMesh1 );

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
		text += ch;
		createText();
	}
}

function onDocumentKeyDown( event ) {
	const keyCode = event.keyCode;

	// backspace
	if ( keyCode == 8 ) {
		event.preventDefault();
		text = text.substring( 0, text.length - 1 );
		createText();
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

let windowHalfX = window.innerWidth / 2;
function onPointerDown( event ) {
	if ( event.isPrimary === false ) return;
	pointerXOnPointerDown = event.clientX - windowHalfX;
	targetRotationOnPointerDown = targetRotation;
	document.addEventListener( 'pointermove', onPointerMove );
	document.addEventListener( 'pointerup', onPointerUp );
}

function onPointerMove( event ) {
	if ( event.isPrimary === false ) return;
	pointerX = event.clientX - windowHalfX;
	targetRotation = targetRotationOnPointerDown + ( pointerX - pointerXOnPointerDown ) * 0.02;
}

function onPointerUp(event) {
	if ( event.isPrimary === false ) return;
	document.removeEventListener( 'pointermove', onPointerMove );
	document.removeEventListener( 'pointerup', onPointerUp );
}

document.addEventListener("DOMContentLoaded", function(event) {
	init();
});