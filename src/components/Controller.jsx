import React from "react";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Html,
  Float,
} from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

useGLTF.preload("/controller.glb");

export default function Scene(props) {
  const mainAnim = useSpring({
    ...props,
  });

  const { nodes, materials } = useGLTF("/controller.glb");

  return (
    <animated.group {...mainAnim} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.bar}
        position={[0, 0.062, 0.508]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lens.geometry}
        material={materials["electronics.001"]}
        position={[0.677, 0.061, -0.677]}
      />
      <group position={[-0.226, 0.06, -0.226]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["screen.001"]}
        >
          <Html
            className="content w-[48px] h-[48px] bg-blue-100 rounded-[1px]"
            position={[0, 0.06, 0]}
            rotation-x={-Math.PI / 2}
            transform
            occlude
          >
            <div
              className="wrapper"
              onPointerDown={(e) => e.stopPropagation()}
            ></div>
          </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.gradient}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button.geometry}
        material={materials.gradient}
        position={[0.677, 0.062, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body001.geometry}
        material={materials.cam}
        position={[0.677, 0.063, -0.677]}
      />
    </animated.group>
  );
}
/* */
