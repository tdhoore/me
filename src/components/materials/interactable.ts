import { uniform, Fn, remapClamp, positionGeometry, vec4, mix, vec3 } from "three/tsl";
import * as THREE from "three/webgpu";

export const interactableBaseColor = uniform(new THREE.Color("#ff5c5c"));
export const interactableDarkColor = uniform(new THREE.Color("#d95e5e"));

export const interactable = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

interactable.colorNode = Fn(() => {
  const worldHeight = remapClamp(positionGeometry.y.add(0.1), 0, 1);

  return vec4(mix(interactableDarkColor, interactableBaseColor, worldHeight), 0);
})();
