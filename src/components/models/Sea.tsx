import * as THREE from "three";
import React, { useRef } from "react";
import waterVertexShader from "../../shaders/water/vertex.glsl";
import waterFragmentShader from "../../shaders/water/fragment.glsl";
import { useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material";

export function Sea(props: JSX.IntrinsicElements["group"]) {
  const materialRef = useRef(null);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        position={[-45.889, 0, -46.827]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <planeGeometry args={[256, 256]} />
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshPhysicalMaterial}
          vertexShader={waterVertexShader}
          fragmentShader={waterFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uWaveSpeed: { value: 1 },
            uWaveAmplitude: { value: 0.01 },
          }}
          color="#60CDE6"
        />
      </mesh>
    </group>
  );
}
