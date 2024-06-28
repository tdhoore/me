import React, { useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { map } from "../functions/functions";
import Slice from "./slice";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";

useGLTF.preload("/portfolio.glb");

export default function Scene(props) {
  const { nodes, materials } = useGLTF("/portfolio.glb");
  const [angle, setAngle] = useState(0);

  useFrame((state, delta, xrFrame) => {
    setAngle(
      new THREE.Vector2(
        state.camera.position.x,
        state.camera.position.z
      ).angle()
    );
  });

  const createSlices = () => {
    const slices = [];
    const activeIndex = Math.round(map(angle, 0, Math.PI * 2, 0, 7));

    for (let i = 0; i < 8; i++) {
      slices.push(
        <Slice
          key={`slice-${i}`}
          index={i}
          activeIndex={activeIndex}
          geometry={nodes["slice-3"].geometry}
          material={materials["Material.002"]}
          rotation={[0, ((Math.PI * 2) / 8) * i, 0]}
        />
      );
    }

    return slices;
  };

  return (
    <group {...props} dispose={null} position={[0, -1.5, 0]}>
      <PerspectiveCamera
        name="cam"
        makeDefault={true}
        far={100}
        near={0.1}
        fov={22.9}
        position={[-2.95, 1.91, 11.84]}
        rotation={[-0.04, -0.24, -0.01]}
      />

      <directionalLight
        name="light"
        intensity={1}
        color="#dbe1e0"
        position={[2.24, 5.29, 4.57]}
        rotation={[-0.86, 0.31, -1.18]}
      />
      <mesh
        name="ground"
        receiveShadow
        geometry={nodes.ground.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        name="pedastol"
        castShadow
        receiveShadow
        geometry={nodes.pedastol.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="plafform"
        castShadow
        receiveShadow
        geometry={nodes.plafform.geometry}
        material={materials["Material.002"]}
      />

      {createSlices()}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </group>
  );
}
/*<mesh
        name="slice-8"
        castShadow
        receiveShadow
        geometry={nodes["slice-8"].geometry}
        material={materials["Material.002"]}
        position={[0, 0, 0]}
      />
      <mesh
        name="slice-1"
        castShadow
        receiveShadow
        geometry={nodes["slice-1"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-2"
        castShadow
        receiveShadow
        geometry={nodes["slice-2"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-3"
        castShadow
        receiveShadow
        geometry={nodes["slice-3"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-4"
        castShadow
        receiveShadow
        geometry={nodes["slice-4"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-5"
        castShadow
        receiveShadow
        geometry={nodes["slice-5"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-6"
        castShadow
        receiveShadow
        geometry={nodes["slice-6"].geometry}
        material={materials["Material.002"]}
      />
      <mesh
        name="slice-7"
        castShadow
        receiveShadow
        geometry={nodes["slice-7"].geometry}
        material={materials["Material.002"]}
      />*/
