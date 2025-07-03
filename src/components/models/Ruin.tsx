import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ruin: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function RuinInstances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/ruin.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      Ruin: nodes.ruin,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props} castShadow receiveShadow>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Ruin(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.Ruin scale={0.444} />
    </group>
  );
}

useGLTF.preload("/assets/ruin.glb");
