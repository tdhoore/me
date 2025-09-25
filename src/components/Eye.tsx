import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Eye_Eye_0: THREE.Mesh;
    Eye_Iris_0: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshPhysicalMaterial;
    Iris: THREE.MeshStandardMaterial;
  };
};

export default function Eye(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/eye.glb") as GLTFResult;

  return (
    <group
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eye_Eye_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eye_Iris_0.geometry}
          material={materials.Iris}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/eye.glb");
