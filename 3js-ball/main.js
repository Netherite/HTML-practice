import * as THREE from 'three';


//Create our sphere 
const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry( 15, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


//create camera 
const camera = new THREE.PerspectiveCamera(45, 800, 600);
scene.add(camera);

//renderer
const canvas = document.querySelector(".webgl"); 
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800, 600); 
renderer.render(scene, camera);