import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import grassVertexShader from "../../shaders/grass/vertex.glsl";
import grassFragmentShader from "../../shaders/grass/fragment.glsl";
import { useTexture } from "@react-three/drei";

export function GrassMaterial() {
  const materialRef = useRef(null);

  const [grassAlpha, perlinNoise] = useTexture(
    ["assets/grass.jpeg", "assets/perlinnoise.webp"],
    (loadedTextures) => {
      if (materialRef.current) {
        materialRef.current.uniforms.uNoiseTexture = loadedTextures[1];
      }
    }
  );

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  if (grassAlpha) {
    grassAlpha.rotation = Math.PI;
  }

  return (
    <CustomShaderMaterial
      ref={materialRef}
      baseMaterial={THREE.MeshPhysicalMaterial}
      vertexShader={grassVertexShader}
      fragmentShader={grassFragmentShader}
      map={grassAlpha}
      uniforms={{
        uTime: { value: 0 },
        uEnableShadows: { value: true },
        uShadowDarkness: { value: 0.5 },
        uGrassLightIntensity: { value: 2 },
        uNoiseScale: { value: 0.05 },
        uPlayerPosition: { value: new THREE.Vector3() },
        uBaseColor: { value: new THREE.Color("#313f1b") },
        uTipColor1: { value: new THREE.Color("#9bd38d") },
        uTipColor2: { value: new THREE.Color("#1f352a") },
        uNoiseTexture: { value: new THREE.Texture() },
      }}
      side={THREE.DoubleSide}
      transparent
      shadowSide={1}
      color="#313f1b"
      alphaTest={0.1}
    />
  );
}
