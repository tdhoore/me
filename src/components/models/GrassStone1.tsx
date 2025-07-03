import { useGLTF, Merged } from "@react-three/drei";
import React, { createContext, useContext, useMemo } from "react";

const context = createContext(null);

export function GrassStone1Instances({ children }: any) {
  const { nodes } = useGLTF("/assets/grass-stone1.glb");

  const instances = useMemo(
    () => ({
      Plane: nodes.Plane011,
      Plane1: nodes.Plane011_1,
    }),
    [nodes]
  );

  return (
    <Merged meshes={instances}>
      {(instances: any) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export default function GrassStone1(props: any) {
  const instances = useContext(context);

  return (
    <group {...props} dispose={null}>
      <instances.Plane />
      <instances.Plane1 />
    </group>
  );
}

useGLTF.preload("assets/grass-stone1.glb");
