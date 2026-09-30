import { Fn, vec3, positionLocal, color, vec4, mix, uv, time, mul, texture, positionWorld } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

const textureLoader = new THREE.TextureLoader();
const simplexNoiseTexture = textureLoader.load("./assets/textures/simplex-tiling-noise-256x256.png");
simplexNoiseTexture.wrapS = THREE.RepeatWrapping;
simplexNoiseTexture.wrapT = THREE.RepeatWrapping;

export const tallGrass = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

const ownHeightMap = uv().x.oneMinus();

tallGrass.colorNode = Fn(() => {
  const colorMix = ownHeightMap.add(1.4);

  const darkColor = color("#2C7206");
  const baseColor = color("#3f9b0b");

  return vec4(mix(darkColor, baseColor, colorMix), 0);
})();

tallGrass.positionNode = Fn(() => {
  const timeWiggle = time.add(positionLocal.xz).mul(6);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.1).add(time.mul(0.08))).r;

  const anchor = mul(wind, timeWiggle.sin(), 0.5, ownHeightMap);

  return positionLocal.add(vec3(0, anchor, anchor));
})();
