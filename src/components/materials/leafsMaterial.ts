import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import leafsVertexShader from "../../shaders/leafs/vertex.glsl";
import leafsFragmentShader from "../../shaders/leafs/fragment.glsl";
import * as THREE from "three";

export const leafsMaterial = new CustomShaderMaterial({
  baseMaterial: THREE.MeshPhysicalMaterial,
  vertexShader: leafsVertexShader,
  fragmentShader: leafsFragmentShader,
  uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color("#55cd62") } },
  transparent: true,
  transmission: 0,
  thickness: 0.004,
  metalness: 0,
  alphaTest: 0.1,
});
