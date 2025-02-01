import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

import Stone1, { Stone1Instances } from "./models/Stone1";
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
          <Stone1Instances>
            <Stone1 position={[3.14, 0, -3.12]} scale={[1.46, 0.42, 1]} rotation={[0, -0.47123889803846897, 0]} />
          </Stone1Instances>
        </KeyboardControls>{" "}
      </Physics>
    </>
  );
}
