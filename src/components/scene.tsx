import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls, PerspectiveCamera } from "@react-three/drei";
import Slider from "./Slider";
import Land from "./Land";

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
          <PerspectiveCamera
            makeDefault
            position={[10, 10, 10]}
            rotation={[-0.851, 0.617, 0.584]}
            isPerspectiveCamera={false}
          />
          <Slider />
          <Land />
        </KeyboardControls>
      </Physics>
    </>
  );
}
