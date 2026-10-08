import { Fn, vec3, positionLocal, color, vec4, mix, uv, time, mul, texture, positionWorld, vec2, instanceIndex, uniform } from "three/tsl";
import * as THREE from "three/webgpu";
import simplexNoiseTexture from "./simplexNoiseTexture";

export const tallGrassBaseColor = uniform(new THREE.Color("#89be7e"));
export const tallGrassDarkColor = uniform(new THREE.Color("#7c9e76"));

export const tallGrass = new THREE.MeshBasicNodeMaterial({
  side: THREE.DoubleSide,
});

const ownHeightMap = uv().x.oneMinus();

tallGrass.colorNode = Fn(() => {
  const colorMix = ownHeightMap.pow(0.5);

  return vec4(mix(tallGrassDarkColor, tallGrassBaseColor, colorMix), 0);
})();

tallGrass.positionNode = Fn(() => {
  const timeWiggle = time.add(instanceIndex).mul(6);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.05).add(vec2(time.mul(0.02)))).r;

  const anchor = mul(wind, timeWiggle.sin(), 0.02, ownHeightMap);

  return positionLocal.add(vec3(anchor, 0, anchor));
})();
