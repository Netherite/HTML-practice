import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 



//scene
const scene = new THREE.Scene();

//load model 
const loader = new GLTFLoader();

loader.load( 'globe.gltf', function ( gltf ) {

	scene.add( gltf.scene );
    gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

}, undefined, function ( error ) {

	console.error( error );

} );



//sphere
/*
const geometry = new THREE.SphereGeometry( 5, 64, 64 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF5733 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
 /*move camera back by 5 so that camera is not
 on top of sphere. The size of the objects that appear on the screen 
 will be relative to camera distance. The smaller the camera, the larger the objects will appear. */ 

// Camera, so that things will show up on the screen 
const camera = new THREE.PerspectiveCamera( 45, 800 / 600, 0.1, 1000 );
camera.position.z = 20;
scene.add(camera);

//renderer
const canvas = document.querySelector('.webgl'); 
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( 800, 600 ); //renders size of camera
renderer.render(scene, camera); 

 //light
 const light = new THREE.PointLight( 0xff0000, 1, 100 );
 light.position.set( 50, 50, 50 );
 light.castShadow = true; 
 scene.add( light );



