import { uniform, Fn, remapClamp, positionGeometry, vec4, mix, vec3 } from "three/tsl";
import * as THREE from "three/webgpu";

export const concreteBaseColor = uniform(new THREE.Color("#bed9ea"));
export const concreteDarkColor = uniform(new THREE.Color("#89a9be"));

export const concrete = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

concrete.colorNode = Fn(() => {
  const worldHeight = remapClamp(positionGeometry.y.add(0.1), 0, 1);

  return vec4(mix(concreteDarkColor, concreteBaseColor, worldHeight), 0);
})();
