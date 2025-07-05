import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import grassVertexShader from "../../shaders/grass/vertex.glsl";
import grassFragmentShader from "../../shaders/grass/fragment.glsl";
import { useTexture } from "@react-three/drei";

export function GrassMaterial() {
  const [grassAlpha, perlinNoise] = useTexture([
    "assets/grass.jpeg",
    "assets/perlinnoise.webp",
  ]);
  const materialRef = useRef(null);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={THREE.MeshPhysicalMaterial}
      vertexShader={grassVertexShader}
      fragmentShader={grassFragmentShader}
      uniforms={{
        uTime: { value: 0 },
        uEnableShadows: { value: true },
        uShadowDarkness: { value: 0.5 },
        uGrassLightIntensity: { value: 1 },
        uNoiseScale: { value: 1.5 },
        uPlayerPosition: { value: new THREE.Vector3() },
        baseColor: { value: new THREE.Color("#313f1b") },
        tipColor1: { value: new THREE.Color("#9bd38d") },
        tipColor2: { value: new THREE.Color("#1f352a") },
        noiseTexture: { value: perlinNoise },
        grassAlphaTexture: { value: grassAlpha },
      }}
    />
  );
}
