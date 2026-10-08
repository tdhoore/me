import { clamp, color, Fn, mix, positionGeometry, positionLocal, remapClamp, uniform, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";

export const grassBaseColor = uniform(new THREE.Color("#a6df9a"));
export const grassDarkColor = uniform(new THREE.Color("#8fbb86"));

export const grass = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

grass.colorNode = Fn(() => {
  const worldHeight = remapClamp(positionGeometry.y.add(0.5), 0, 1);

  return vec4(mix(grassDarkColor, grassBaseColor, worldHeight), 0);
})();