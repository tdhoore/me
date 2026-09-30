import { Fn, vec3, positionLocal, color, vec4, mix, clamp } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

export const rock = new THREE.MeshStandardNodeMaterial({
  color: 0x0000ff,
  roughness: 1,
});

rock.colorNode = Fn(() => {
  const worldHeight = clamp(vec3(positionLocal.y).add(1.4));

  const darkColor = color("#1f282e");
  const baseColor = color("#36454f");

  return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();