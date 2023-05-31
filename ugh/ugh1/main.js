import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 

//scene
const scene = new THREE.Scene();


// Camera, so that things will show up on the screen 
const camera = new THREE.PerspectiveCamera( 45, 800 / 600, 0.1, 1000 );
camera.position.z = 20;
scene.add(camera);

//renderer
const canvas = document.querySelector('.webgl'); 
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( 800, 600 ); //renders size of camera
renderer.render(scene, camera); 

//3d model 
const loader = new THREE.GLTFLoader();
loader.load('earth_globe/scene.gltf', function(gltf) {
  scene.add(gltf.scene);
});

//light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

//render 
 function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
  }
  animate();




