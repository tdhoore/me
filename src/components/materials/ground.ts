import { Fn, vec3, positionLocal, color, vec4, mix, clamp } from "three/src/nodes/TSL.js";
import * as THREE from "three/webgpu";
import { positionWorld, smoothstep, uniform } from "three/tsl";
import { foamLevel, foamShickness, foamSmoothing, foamThickness, waterLevel } from "./water";

export const landGroundColor = uniform(new THREE.Color("#C2B99C"));
export const landGrassColor = uniform(new THREE.Color("#a6df9a"));

export const ground = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

ground.colorNode = Fn(() => {
  const groundHeight = positionLocal.y.add(1).clamp().smoothstep(0, 0.15);

  const waterHeight = smoothstep(foamLevel.add(foamSmoothing), foamLevel.sub(foamSmoothing), positionWorld.y);

  /*mix(mix(vec3(1), landGroundColor, waterHeight), landGrassColor, groundHeight)*/
  /*mix(vec3(1), landGroundColor, waterHeight)*/
  return vec4(mix(mix( landGroundColor , vec3(1), waterHeight), landGrassColor, groundHeight), 0);
})();
