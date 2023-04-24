import * as THREE from 'three';
const canvas = document.querySelector('webgl'); 
const scene = THREE.scene(); 


/*
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//create scene
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load( 'blender-upload/globe.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} ); 

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}




*/ 