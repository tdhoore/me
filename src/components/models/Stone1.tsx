import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { type Vector3Tuple } from "three";

export default function Stone1({
  position,
  rotation,
  scale,
}: {
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  scale?: Vector3Tuple;
}) {
  const { nodes, materials } = useGLTF("assets/stone1.glb");
  return (
    <group position={position} scale={scale} rotation={rotation} dispose={null}>
      <group position={[0, 0, 0]}>
        <instancedMesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["stone.001"]}
        />
        <instancedMesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_1.geometry}
          material={materials.grass}
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/stone1.glb");
