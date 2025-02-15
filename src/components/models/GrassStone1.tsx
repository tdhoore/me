import { useGLTF, Merged } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";
import { Group } from "three";

const context = createContext();

export function GrassStone1Instances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/grass-stone1.glb");
  console.log("nodes", nodes);
  const instances = useMemo(
    () => ({
      Plane: nodes.Plane011,
      Plane1: nodes.Plane011_1,
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

export default function GrassStone1(props: any) {
  const instances = useContext(context);
  console.log(instances);
  return (
    <group {...props} dispose={null}>
      <instances.Plane />
      <instances.Plane1 />
    </group>
  );
}

useGLTF.preload("assets/grass-stone1.glb");
