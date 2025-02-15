import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();

export function GrassStone2Instances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/grass-stone2.glb");
  console.log("nodes", nodes.Cube053);
  const instances = useMemo(
    () => ({
      Cube: nodes.Cube053,
      Cube1: nodes.Cube053_1,
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

export default function GrassStone2(props) {
  const instances = useContext(context);
  console.log(instances);
  return (
    <group {...props} dispose={null}>
      <instances.Cube />
      <instances.Cube1 />
    </group>
  );
}

useGLTF.preload("/assets/grass-stone2.glb");
