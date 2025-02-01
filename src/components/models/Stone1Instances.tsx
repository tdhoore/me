import React, { useMemo } from "react";
import { useGLTF, Merged, Instances, Instance } from "@react-three/drei";

export default function Stone1Instances({ children, ...props }: any) {
  const { nodes, materials } = useGLTF("/assets/stone1.glb");

  const instances = useMemo(
    () => ({
      Plane: nodes.Plane011,
      Plane1: nodes.Plane011_1,
    }),
    [nodes]
  );

  return (
    <Instances {...props}>
      <Merged meshes={nodes}>
        {({ Plane011, Plane011_1 }: any) => {
          return (
            <>
              <Plane011 />
              <Plane011_1 />
            </>
          );
        }}
      </Merged>
      {children}
    </Instances>
  );
}

useGLTF.preload("/assets/stone1.glb");
/* */
