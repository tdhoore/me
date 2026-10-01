import { color, float, Fn, mix, mul, positionGeometry, positionLocal, positionWorld, texture, time, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";

const textureLoader = new THREE.TextureLoader();
const simplexNoiseTexture = textureLoader.load("./assets/textures/simplex-tiling-noise-256x256.png");
simplexNoiseTexture.wrapS = THREE.RepeatWrapping;
simplexNoiseTexture.wrapT = THREE.RepeatWrapping;

export const leaves = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

const ownHeightMap = positionGeometry.y.sub(1).mul(0.2);

leaves.colorNode = Fn(() => {
  const colorMix = ownHeightMap;

  const darkColor = color(0x57a56b);
  const baseColor = color(0x68c580);

  return vec4(mix(darkColor, baseColor, colorMix), 0);
})();

leaves.positionNode = Fn(() => {
  const pos = positionLocal;
  const timeWiggle = time.mul(2).add(positionLocal.x).add(positionLocal.z);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.1).add(time.mul(0.08))).r;

  const anchor = mul(wind, timeWiggle.sin(), ownHeightMap, 0.2);
  //return vec3(anchor,0,anchor);
  return pos.add(vec3(anchor, 0, anchor));
})();
