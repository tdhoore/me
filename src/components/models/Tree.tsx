import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    BézierCurve003: THREE.Mesh;
    BézierCurve003_1: THREE.Mesh;
  };
  materials: {
    ["M_Leaf_01.008"]: THREE.MeshStandardMaterial;
    ["M_Bark_01.004"]: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function TreeInstances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/tree.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      BzierCurve: nodes.BézierCurve003,
      BzierCurve1: nodes.BézierCurve003_1,
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

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.062, 0.002, 0.002]}>
        <instances.BzierCurve />
        <instances.BzierCurve1 />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/tree.glb");
