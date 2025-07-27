import { Physics, RigidBody } from "@react-three/rapier";
import {
  Box,
  Environment,
  KeyboardControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Slider from "./Slider";
import Land from "./Land";
import { Island } from "./models/Island";
import ModelProvider from "./ModelProvider";
import HitBoxes from "./HitBoxes";
import Player from "./Player";

export function Scene() {
  const keyboardMap = [
    { name: "left", keys: ["ArrowUp", "KeyW"] },
    { name: "right", keys: ["ArrowDown", "KeyS"] },
    { name: "backward", keys: ["ArrowLeft", "KeyA"] },
    { name: "forward", keys: ["ArrowRight", "KeyD"] },
  ];

  return (
    <Physics debug>
      <KeyboardControls map={keyboardMap}>
        <Slider />
        <Player />
        <ModelProvider>
          <Island />
          <directionalLight
            position={[41.32, 77.72, -52.74]}
            color={"#fffbe6"}
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
          >
            <orthographicCamera
              attach="shadow-camera"
              args={[-10, 10, 10, -10]}
              far={130}
            />
          </directionalLight>

          <Environment preset="park" environmentIntensity={0.1} />
        </ModelProvider>
        <HitBoxes />
      </KeyboardControls>
    </Physics>
  );
}
