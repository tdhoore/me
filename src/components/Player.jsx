import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { Box, OrthographicCamera } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export default function Player(props) {
  const playerRigidBody = useRef();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    if (playerRigidBody.current && typeof get === "function") {
      const { forward, backward, left, right } = get();
      const velocity = playerRigidBody.current.linvel();

      frontVector.set(0, 0, backward - forward);
      sideVector.set(left - right, 0, 0);

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED);

      playerRigidBody.current.setLinvel({
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      });
    }
  });

  return (
    <RigidBody
      ref={playerRigidBody}
      colliders={false}
      mass={1}
      type="dynamic"
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.75, 0.5]}>
        <Box args={[1, 1, 1]} />
      </CapsuleCollider>
      <OrthographicCamera
        makeDefault
        zoom={100}
        position={[12, 8.738, 6.135]}
        rotation={[-0.959, 0.844, 0.816]}
      />
    </RigidBody>
  );
}
