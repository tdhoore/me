import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    GrassLOD00: THREE.Mesh;
    GrassLOD01: THREE.Mesh;
    GrassLOD02: THREE.Mesh;
  };
  materials: {};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/grassLODs.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.GrassLOD00.geometry} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrassLOD01.geometry}
        position={[-0.363, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrassLOD02.geometry}
        position={[-0.743, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/grassLODs.glb");
