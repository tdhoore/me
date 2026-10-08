import { color, Fn, mix, positionLocal, uniform, uv, vec3, vec4 } from "three/tsl";
import * as THREE from "three/webgpu";

export const bark = new THREE.MeshStandardNodeMaterial({
  roughness: 1,
});

export const barkBaseColor = uniform(new THREE.Color("#a07c73"));
export const barkDarkColor = uniform(new THREE.Color("#9e746b"));

const ownHeightMap = positionLocal.y;

bark.colorNode = Fn(() => {
  const colorMix = ownHeightMap.clamp();
  
  return vec4(mix(barkDarkColor, barkBaseColor, colorMix), 0);
})();