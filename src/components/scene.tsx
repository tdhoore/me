import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import Terrain from "./Terrain";

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
          <Terrain />
        </KeyboardControls>
      </Physics>
    </>
  );
}
