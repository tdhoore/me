/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    bush001: THREE.Mesh;
  };
  materials: {
    ["M_Leaf_01.008"]: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function BushInstances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/bush.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      Bush: nodes.bush001,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Bush(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.Bush scale={0.451} />
    </group>
  );
}

useGLTF.preload("/assets/bush.glb");
