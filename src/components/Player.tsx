import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { Box, OrthographicCamera } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPEED = 1;
const MAX_VEL = 5;

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
      mass={1}
      type="dynamic"
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.75, 0.5]}>
        <Box
          args={[1, 1, 1]}
          //@ts-ignore
          ref={playerModel}
        />
      </CapsuleCollider>

      <OrthographicCamera
        makeDefault
        zoom={30}
        position={[12, 8.738, 6.135]}
        rotation={[-0.959, 0.844, 0.816]}
      />
    </RigidBody>
  );
}
