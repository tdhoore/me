import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import Stone1 from "./models/Stone1";
import Stone1Instances from "./models/Stone1Instances";
import React from "react";

export function Scene() {
  const keyboardMap = [
    { name: "left", keys: ["ArrowUp", "KeyW"] },
    { name: "right", keys: ["ArrowDown", "KeyS"] },
    { name: "backward", keys: ["ArrowLeft", "KeyA"] },
    { name: "forward", keys: ["ArrowRight", "KeyD"] },
  ];

  return (
    <>
      <Physics debug>
        <KeyboardControls map={keyboardMap}>
          <Stone1 position={[7.04, -0.24, 5.74]} />
          <Stone1 position={[11.74, 1.28, 9.94]} scale={[1.82, 0.6, 1]} />
        </KeyboardControls>
      </Physics>
    </>
  );
}
