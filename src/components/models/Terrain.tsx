import * as THREE from "three";
import React, { useRef } from "react";
import { Sampler, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CustomShaderMaterial from "three-custom-shader-material";
import terrainVertexShader from "../../shaders/terrain/vertex.glsl";
import terrainFragmentShader from "../../shaders/terrain/fragment.glsl";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
  };
};

export function Terrain(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/assets/terrain.glb") as GLTFResult;
  const mesh = useRef(null);
  const materialRef = useRef(null);

  useFrame(({ clock }) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        position={[0.015, -0.158, 0.435]}
        scale={[1.385, 0.192, 1.385]}
      >
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={THREE.MeshPhysicalMaterial}
          vertexShader={terrainVertexShader}
          fragmentShader={terrainFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uSandColor: { value: new THREE.Color("#EDE9D9") },
            uGrassColor: { value: new THREE.Color("#61CF82") },
            uWaterLevel: { value: 0.001 },
            uWaveSpeed: { value: 1 },
            uWaveAmplitude: { value: 0.01 },
            uFoamDepth: { value: 0.002 },
          }}
        />
      </mesh>

      <Sampler count={5000} mesh={mesh}>
        <instancedMesh args={[null, null, 5000]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </instancedMesh>
      </Sampler>
    </group>
  );
}

useGLTF.preload("/assets/terrain.glb");

/* <shaderMaterial
          vertexShader={terrainVertexShader}
          fragmentShader={terrainFragmentShader}
          uniforms={{
            uSandColor: { value: new THREE.Color("#EDE9D9") },
            uGrassColor: { value: new THREE.Color("#61CF82") },
          }}
        />*/
/*       */
