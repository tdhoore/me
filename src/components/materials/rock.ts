import { remapClamp, Fn, vec3, mix, color, vec4, positionGeometry } from "three/tsl";
import * as THREE from "three/webgpu";

export const rock = new THREE.MeshStandardNodeMaterial({
  color: 0x0000ff,
  roughness: 1,
});

rock.colorNode = Fn(() => {
  const worldHeight = remapClamp(positionGeometry.y.add(1.2), 0, 1);

  const darkColor = color(0x4f5e81);
  const baseColor = color(0x6e83b4).mul(1.6);
  
  return vec4(mix(darkColor, baseColor, worldHeight), 0);
})();