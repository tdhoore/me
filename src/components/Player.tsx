import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { Box, OrthographicCamera } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPEED = 2;
const MAX_VEL = 8;

export default function Player() {
  const playerRigidBody = useRef();
  const playerModel = useRef();

  const [, get] = useKeyboardControls();

  useFrame((state) => {
    if (playerRigidBody.current && typeof get === "function") {
      const { forward, backward, left, right } = get();
      const impulse = { x: 0, y: 0, z: 0 };
      let changeRotation = false;
      //@ts-ignore
      const velocity = playerRigidBody.current.linvel();

      if (right && velocity.x < MAX_VEL) {
        impulse.x += SPEED;
        changeRotation = true;
      }

      if (left && velocity.x > -MAX_VEL) {
        impulse.x -= SPEED;
        changeRotation = true;
      }

      if (backward && velocity.z < MAX_VEL) {
        impulse.z += SPEED;
        changeRotation = true;
      }

      if (forward && velocity.z > -MAX_VEL) {
        impulse.z -= SPEED;
        changeRotation = true;
      }

      //@ts-ignore
      playerRigidBody.current.applyImpulse(impulse, true);

      if (changeRotation) {
        const angle = Math.atan2(velocity.x, velocity.z);
        //@ts-ignore
        playerModel.current.rotation.y = angle;
      }
    }
  });

  return (
    <RigidBody
      //@ts-ignore
      ref={playerRigidBody}
      colliders={false}
      mass={0.1}
      type="dynamic"
      enabledRotations={[false, false, false]}
      position={[0.26, 30, 7.808]}
    >
      <CapsuleCollider args={[1, 1]}>
        <Box
          args={[1, 1, 1]}
          //@ts-ignore
          ref={playerModel}
        />
      </CapsuleCollider>
    </RigidBody>
  );
}
