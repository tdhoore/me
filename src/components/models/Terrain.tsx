import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import CustomShaderMaterial from "three-custom-shader-material";
import { MeshPhysicalMaterial } from "three";
import terrainVertexShader from "../../shaders/terrain/vertex.glsl";
import terrainFragmentShader from "../../shaders/terrain/fragment.glsl";

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
  };
};

export function Terrain(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/terrain.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        position={[0.015, -0.158, 0.435]}
        scale={[1.385, 0.192, 1.385]}
      >
        <CustomShaderMaterial
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={terrainVertexShader}
          fragmentShader={terrainFragmentShader}
          uniforms={{
            uSandColor: { value: new THREE.Color("#EDE9D9") },
            uGrassColor: { value: new THREE.Color("#61CF82") },
          }}
        />
      </mesh>
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
