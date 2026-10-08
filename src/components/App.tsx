import ReactDOM from "react-dom/client";
import { Canvas, extend, ThreeToJSXElements } from "@react-three/fiber";
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
import { PostProcessing } from "./Postprocessing";
import { Perf } from "r3f-webgpu-perf";

declare module "@react-three/fiber" {
  interface ThreeElements extends ThreeToJSXElements<typeof THREE> {}
}

extend(THREE as any);

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

export const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "interact", keys: ["KeyE"] },
];

import GUI from "lil-gui";
import { landGrassColor, landGroundColor } from "./materials/ground";
import { grassBaseColor, grassDarkColor } from "./materials/grass";
import { tallGrassBaseColor, tallGrassDarkColor } from "./materials/tallGrass";
import { flowerColor } from "./materials/flower";
import { leavesBaseColor, leavesDarkColor } from "./materials/leaves";
import { barkBaseColor, barkDarkColor } from "./materials/bark";
import { concreteBaseColor, concreteDarkColor } from "./materials/concrete";
import { interactableBaseColor, interactableDarkColor } from "./materials/interactable";
import { waterBaseColor } from "./materials/water";

export const gui = new GUI();

export const settings = {
  landGrassColor: "#C2B99C",
  landGroundColor: "#9add8d",
  grassBaseColor: "#9add8d",
  grassDarkColor: "#9add8d",
  tallGrassBaseColor: "#86bc7b",
  tallGrassDarkColor: "#bbecb1",
  flowerColor: "C8C497",
  leavesBaseColor: "#57a56b",
  leavesDarkColor: "#68c580",
  barkBaseColor: "#7f5950",
  barkDarkColor: "#9e6f64",
  concreteBaseColor: "#bed9ea",
  concreteDarkColor: "#89a9be",
  interactableBaseColor: "#ff0000",
  interactableDarkColor: "#ff0000",
  waterBaseColor:""
};

gui.addColor(settings, "landGrassColor").onChange((value) => {
  landGrassColor.value.set(value);
});
gui.addColor(settings, "landGroundColor").onChange((value) => {
  landGroundColor.value.set(value);
});

gui.addColor(settings, "grassBaseColor").onChange((value) => {
  grassBaseColor.value.set(value);
});
gui.addColor(settings, "grassDarkColor").onChange((value) => {
  grassDarkColor.value.set(value);
});

gui.addColor(settings, "tallGrassBaseColor").onChange((value) => {
  tallGrassBaseColor.value.set(value);
});
gui.addColor(settings, "tallGrassDarkColor").onChange((value) => {
  tallGrassDarkColor.value.set(value);
});

gui.addColor(settings, "flowerColor").onChange((value) => {
  flowerColor.value.set(value);
});

gui.addColor(settings, "leavesBaseColor").onChange((value) => {
  leavesBaseColor.value.set(value);
});
gui.addColor(settings, "leavesDarkColor").onChange((value) => {
  leavesDarkColor.value.set(value);
});


gui.addColor(settings, "barkBaseColor").onChange((value) => {
  barkBaseColor.value.set(value);
});
gui.addColor(settings, "barkDarkColor").onChange((value) => {
  barkDarkColor.value.set(value);
});

gui.addColor(settings, "concreteBaseColor").onChange((value) => {
  concreteBaseColor.value.set(value);
});
gui.addColor(settings, "concreteDarkColor").onChange((value) => {
  concreteDarkColor.value.set(value);
});

gui.addColor(settings, "interactableBaseColor").onChange((value) => {
  interactableBaseColor.value.set(value);
});
gui.addColor(settings, "interactableDarkColor").onChange((value) => {
  interactableDarkColor.value.set(value);
});

gui.addColor(settings, "waterBaseColor").onChange((value) => {
  waterBaseColor.value.set(value);
});


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
            const renderer = new THREE.WebGPURenderer({
              ...props,
              antialias: true,
            });

            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.toneMapping = THREE.AgXToneMapping;
            renderer.toneMappingExposure = 1.0;

            renderer.useLecacyLights = false;

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFShadowMap;

            await renderer.init();
            return renderer;
          }}
        >
          <Perf position="top-left" />

          <KeyboardControls map={keyboardMap}>
            <PhysicsScene>
              <CuboidCollider
                position={[0, -1, 0]}
                args={[50, 1, 50]}
              />

              <OutsideInstances>
                <Outside />
              </OutsideInstances>
            </PhysicsScene>

            <ambientLight
              intensity={1}
              castShadow
            />
          </KeyboardControls>
          <PostProcessing />
        </Canvas>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
