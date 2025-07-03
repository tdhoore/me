import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tower: THREE.Mesh;
  };
  materials: {
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

const context = createContext();
export function TowerInstances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/tower.glb") as GLTFResult;
  const instances = useMemo(
    () => ({
      Tower: nodes.tower,
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

export function Tower(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <instances.Tower scale={1.524} castShadow receiveShadow />
    </group>
  );
}

useGLTF.preload("/assets/tower.glb");
