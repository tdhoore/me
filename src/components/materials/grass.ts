import { clamp, color, Fn, mix, positionLocal, vec3, vec4 } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

export const grass = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

grass.colorNode = Fn(() => {
  const worldHeight = clamp(vec3(positionLocal.y).add(1.4));

  const darkColor = color("#2C7206")
  const baseColor = color("#3f9b0b")
  
  return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();
