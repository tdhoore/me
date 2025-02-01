import React, { useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import { type Vector3Tuple } from "three";

const context = createContext();

export function Stone1Instances({ children, ...props }) {
  const { nodes } = useGLTF("assets/stone1.glb");
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

export default function Stone1({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: {
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  scale?: Vector3Tuple;
}) {
  const instances = useContext(context);
  console.log(instances);
  return (
    <group position={position} scale={scale} rotation={rotation} dispose={null}>
      <instances.Plane />
      <instances.Plane1 />
    </group>
  );
}

useGLTF.preload("assets/stone1.glb");
