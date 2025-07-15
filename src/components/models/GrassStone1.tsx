import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane011: THREE.Mesh;
    Plane011_1: THREE.Mesh;
  };
  materials: {
    stone: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function GrassStone1Instances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/grass-stone1.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      Plane: nodes.Plane011,
      Plane1: nodes.Plane011_1,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props} receiveShadow castShadow>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function GrassStone1(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.Plane />
      <instances.Plane1 />
    </group>
  );
}

useGLTF.preload("/assets/grass-stone1.glb");
