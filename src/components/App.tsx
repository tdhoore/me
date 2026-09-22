import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";
import PhysicsScene from "./Physics";
import { CuboidCollider } from "@react-three/rapier";
import * as THREE from "three/webgpu";
import { KeyboardControls } from "@react-three/drei";
import { Outside, OutsideInstances } from "./Outside";
import { StatsGl } from "@react-three/drei";

declare module "@react-three/fiber" {
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

extend(THREE as any);

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "interact", keys: ["KeyE"] },
];

export default function App() {
  return (
    <>
      <nav className="fixed z-50 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <div className="fixed top-0 left-0 w-full h-dvh canvas">
        <Canvas
          shadows
          gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(props as any);
            
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap

            await renderer.init();
            return renderer;
          }}
          
        >
          <StatsGl />
          <KeyboardControls map={keyboardMap}>
            <PhysicsScene>
              <CuboidCollider
                position={[0, -3, 0]}
                args={[10, 1, 10]}
              />
            </PhysicsScene>
            <OutsideInstances>
              <Outside />
            </OutsideInstances>
            <ambientLight intensity={1} castShadow/>
          </KeyboardControls>
        </Canvas>
      </div>
    </>
  );
}
//  <Overlay camController={camController} />
const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
