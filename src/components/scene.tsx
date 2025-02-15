import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

import Stone1, { Stone1Instances } from "./models/Stone1";
import React from "react";
import GrassStone1, { GrassStone1Instances } from "./models/GrassStone1";
import GrassStone2, { GrassStone2Instances } from "./models/GrassStone2";

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
          <GrassStone1Instances>
            <GrassStone2Instances>
              <GrassStone2 /><GrassStone1 />
            </GrassStone2Instances>
          </GrassStone1Instances>

        </KeyboardControls>
      </Physics>
    </>
  );
}
