import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

export let mixer2= new THREE.AnimationMixer();
export let action2;
export const gltfLoader2 = new GLTFLoader()
    //gltfLoader2.load('./zawor_kulowy_three_move3.glb', (gltf) => {
    gltfLoader2.load('./zawor_kulowy_three_kula3_kurek.glb', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      scene.add(root); //co zrobic z tym?
      mixer2 = new THREE.AnimationMixer(root);
      
      action2 = mixer2.clipAction( anim[ 0 ])
     
      //action.play();

     
    })