import { Fn, instanceIndex, mul, positionLocal, positionWorld, texture, time, uniform, vec2, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";
import simplexNoiseTexture from "./simplexNoiseTexture";

export const flowerColor = uniform(new THREE.Color("#eae180"));

export const flower = new THREE.MeshBasicNodeMaterial({});

flower.colorNode = Fn(() => {
  return vec4(flowerColor, 0);
})();

flower.positionNode = Fn(() => {
  const timeWiggle = time.add(instanceIndex).mul(6);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.05).add(vec2(time.mul(0.02)))).r;

  const anchor = mul(wind, timeWiggle.sin(), 0.015);

  return positionLocal.add(vec3(anchor, 0, anchor));
})();
