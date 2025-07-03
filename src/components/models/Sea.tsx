import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    sea: THREE.Mesh;
  };
  materials: {
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
};

export function Sea(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/assets/sea.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.sea.geometry}
        material={materials["Material.008"]}
        position={[-45.889, 0, -46.827]}
      />
    </group>
  );
}

useGLTF.preload("/assets/sea.glb");
