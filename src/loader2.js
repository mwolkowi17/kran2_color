import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

export let mixer2= new THREE.AnimationMixer();
export let action2;
export let model_kurek;
model_kurek='./zawor_kulowy_three_kula3_kurek.glb';
let root;
export const gltfLoader2 = new GLTFLoader()
    //gltfLoader2.load('./zawor_kulowy_three_move3.glb', (gltf) => {
    gltfLoader2.load(model_kurek, (gltf) => {
      root = gltf.scene;
      const anim = gltf.animations;
      scene.add(root); //co zrobic z tym?
      mixer2 = new THREE.AnimationMixer(root);
      
      action2 = mixer2.clipAction( anim[ 0 ])
     
      //action.play();

     
    })

const colorbutton = document.getElementById("color_button");


colorbutton.addEventListener("click", function(){
  model_kurek="./zawor_kulowy_three_kula3_kurek_blue.glb"
  scene.remove(root);
  gltfLoader2.load(model_kurek, (gltf) => {
    root = gltf.scene;
    const anim = gltf.animations;
    //root.scale.x=2;
    scene.add(root); //co zrobic z tym?
    mixer2 = new THREE.AnimationMixer(root);
    
    action2 = mixer2.clipAction( anim[ 0 ])
   
    //action.play();

   
  })
}, false);

const colorbackbutton = document.getElementById("color_back_button");

colorbackbutton.addEventListener("click", function(){
  model_kurek='./zawor_kulowy_three_kula3_kurek.glb';
  scene.remove(root);
  gltfLoader2.load(model_kurek, (gltf) => {
    root = gltf.scene;
    const anim = gltf.animations;
    //root.scale.x=2;
    scene.add(root); //co zrobic z tym?
    mixer2 = new THREE.AnimationMixer(root);
    
    action2 = mixer2.clipAction( anim[ 0 ])
   
    //action.play();

   
  })
},false)