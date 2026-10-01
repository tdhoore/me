import { clamp, color, Fn, mix, positionGeometry, positionLocal, remapClamp, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";

export const grass = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});



grass.colorNode = Fn(() => {
  const worldHeight = remapClamp(positionGeometry.y.add(0.5), 0, 1);

  const darkColor = color(0x77e276);
  const baseColor = color(0x86fe85);

  return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();