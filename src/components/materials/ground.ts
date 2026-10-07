import { Fn, vec3, positionLocal, color, vec4, mix, clamp } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

export const ground = new THREE.MeshStandardNodeMaterial(
	{
		roughness: 1
	}
);

ground.colorNode = Fn(() => {
  const worldHeight = positionLocal.y.add(1).clamp().smoothstep(0, 0.15);

  const darkColor = color("#d7c888");
  const baseColor = color("#85ff8c");

  return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();