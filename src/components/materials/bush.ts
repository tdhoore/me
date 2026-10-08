import { Fn, mix, mul, positionGeometry, positionLocal, positionWorld, texture, time, vec2, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";
import { leavesBaseColor, leavesDarkColor } from "./leaves";
import simplexNoiseTexture from "./simplexNoiseTexture";

export const bush = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

const ownHeightMap = positionGeometry.y.sub(1).mul(0.2);

bush.colorNode = Fn(() => {
  const colorMix = ownHeightMap;

  return vec4(mix(leavesDarkColor, leavesBaseColor, colorMix), 0);
})();

bush.positionNode = Fn(() => {
  const pos = positionLocal;
  const timeWiggle = time.mul(2).add(positionLocal.x).add(positionLocal.z);

  const wind = texture(simplexNoiseTexture, positionWorld.xz.mul(0.05).add(vec2(time.mul(0.02)))).r;

  const anchor = mul(wind, timeWiggle.sin(), ownHeightMap, 0.2);
  //return vec3(anchor,0,anchor);
  return pos.add(vec3(anchor, 0, anchor));
})();