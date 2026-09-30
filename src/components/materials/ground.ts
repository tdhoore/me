import { Fn, vec3, positionLocal, color, vec4, mix, clamp } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";

export const ground = new THREE.MeshStandardNodeMaterial(
	{
		color: 0xff00dd,
		roughness: 1
	}
);

ground.colorNode = Fn(() => {
	const worldHeight = clamp(vec3(positionLocal.y.add(2.1).smoothstep(0, 0.15)));

	const darkColor = color("#2C7206")
	const baseColor = color("#3f9b0b")
	
	//return vec4(mix(darkColor, baseColor, worldHeight), 0);

	return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();