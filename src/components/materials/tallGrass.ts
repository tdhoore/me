import { Fn, vec3, positionLocal, color, vec4, mix, uv, time, mul, texture, positionWorld, vec2 } from "three/tsl";
import * as THREE from "three/webgpu";

const textureLoader = new THREE.TextureLoader();
const simplexNoiseTexture = textureLoader.load("./assets/textures/simplex-tiling-noise-256x256.png");
simplexNoiseTexture.wrapS = THREE.RepeatWrapping;
simplexNoiseTexture.wrapT = THREE.RepeatWrapping;

export const tallGrass = new THREE.MeshBasicNodeMaterial({
  side: THREE.DoubleSide,
});

const ownHeightMap = uv().x.oneMinus();

tallGrass.colorNode = Fn(() => {
  const colorMix = ownHeightMap.pow(0.5);

  const darkColor = color(0x80f587).mul(0.3);
  const baseColor = color(0x85ff8c).mul(0.6);
  return vec4(mix(darkColor, baseColor, colorMix), 0);
})();

tallGrass.positionNode = Fn(() => {
  const timeWiggle = time.mul(4).add(positionLocal.x).add(positionLocal.z);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.1).add(vec2(time.mul(0.08)))).r;

  const anchor = mul(wind, timeWiggle.sin(), 0.03, ownHeightMap);

  return positionLocal.add(vec3(anchor, 0, anchor));
})();
