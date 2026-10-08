import {  Fn, mix, mul, positionGeometry, positionLocal, positionWorld, texture, time, uniform, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";
import simplexNoiseTexture from "./simplexNoiseTexture";

export const leavesBaseColor = uniform(new THREE.Color("#80db97"));
export const leavesDarkColor = uniform(new THREE.Color("#7ec990"));

export const leaves = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

const ownHeightMap = positionGeometry.y.sub(1).mul(0.2);

leaves.colorNode = Fn(() => {
  const colorMix = ownHeightMap;

  return vec4(mix(leavesDarkColor, leavesBaseColor, colorMix), 0);
})();

leaves.positionNode = Fn(() => {
  const pos = positionLocal;
  const timeWiggle = time.mul(2).add(positionLocal.x).add(positionLocal.z);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.1).add(time.mul(0.08))).r;

  const anchor = mul(wind, timeWiggle.sin(), ownHeightMap, 0.2);
  //return vec3(anchor,0,anchor);
  return pos.add(vec3(anchor, 0, anchor));
})();
