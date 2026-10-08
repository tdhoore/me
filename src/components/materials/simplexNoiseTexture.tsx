import * as THREE from "three/webgpu";

const textureLoader = new THREE.TextureLoader();
const simplexNoiseTexture = textureLoader.load("./assets/textures/simplex-tiling-noise-256x256.png");
simplexNoiseTexture.wrapS = THREE.RepeatWrapping;
simplexNoiseTexture.wrapT = THREE.RepeatWrapping;

export default simplexNoiseTexture;