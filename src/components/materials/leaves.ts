import { uv, Fn, color, vec4, mix, time, positionLocal, texture, positionWorld, mul, vec3 } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

const textureLoader = new THREE.TextureLoader();
const simplexNoiseTexture = textureLoader.load("./assets/textures/simplex-tiling-noise-256x256.png");
simplexNoiseTexture.wrapS = THREE.RepeatWrapping;
simplexNoiseTexture.wrapT = THREE.RepeatWrapping;

export const leaves = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

const ownHeightMap = uv().x.oneMinus();

leaves.colorNode = Fn(() => {
  const colorMix = ownHeightMap.add(1.4);

  const darkColor = color("#2C7206");
  const baseColor = color("#3f9b0b");

  return vec4(mix(darkColor, baseColor, colorMix), 0);
})();

leaves.positionNode = Fn(() => {
  const timeWiggle = time.add(positionLocal.xz).mul(0.5);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.05).add(time.mul(0.08))).r;

  const anchor = mul(wind, timeWiggle.sin(), 0.03, ownHeightMap);

  return positionLocal.add(vec3(0, anchor, anchor));
})();
