import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { CameraControls, Environment } from "@react-three/drei";
import Dust from "./Dust";
import Projects from "./Projects";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";
import Overlay from "./Overlay";
import EyeScene from "./EyeScene";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectHtml from "./ProjectHtml";
import ReactLenis from "lenis/react";
import { useVoidStore } from "../stores/VoidStore";
import Contact from "./Contact";
import About from "./About";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const pageAngles = {
  about: {
    rot: Math.PI / 3,
    buffer: Math.PI / 6,
  },
  contact: {
    rot: -Math.PI / 4,
    buffer: Math.PI / 8,
  },
};

export default function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  const disableControllsPaths = ["/about"];

  const camController = useRef(null);

  const activeProjectId = useVoidStore((state) => state.activeProjectId);
  const content = useVoidStore((state) => state.content);
  const setContent = useVoidStore((state) => state.setContent);

  useEffect(() => {
    if (!content) {
      fetch("/assets/content.json")
        .then((r) => r.json())
        .then((r) => {
          setContent(r);
        });
    }
  }, [content]);

  const handleUpdateCameraControls = (e) => {
    if (e.type === "update") {
      let hasActive = false;
      const angle = e.target._camera.rotation.y;

      Object.keys(pageAngles).forEach((page) => {
        const pageRot = pageAngles[page];

        if (
          pageRot.rot + pageRot.buffer >= angle &&
          pageRot.rot - pageRot.buffer <= angle
        ) {
          setActivePage(page);
          hasActive = true;
        }
      });

      if (!hasActive) {
        setActivePage("");
      }
    }
  };

  return (
    <ReactLenis options={{ autoRaf: true }} root>
      <nav className="fixed z-50 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="project/:id" element={<ProjectHtml />} />
      </Routes>

      <About visible={activePage === "about" && !activeProjectId} />
      <div className="fixed top-0 left-0 w-full h-[100dvh] canvas">
        <Canvas shadows>
          <fog attach="fog" args={["#000", 0, 5]} />
          <ambientLight intensity={1} />
          <Dust />
          <Projects camController={camController} />
          <CameraControls
            ref={camController}
            dollySpeed={0}
            truckSpeed={0}
            enabled={!disableControllsPaths.includes(location.pathname)}
            onChange={handleUpdateCameraControls}
          />
          <Environment
            background
            files="../../assets/textures/env.hdr"
            backgroundRotation={[0, 0, -Math.PI / 2]}
          />
          <EffectComposer>
            <Noise opacity={0.02} blendFunction={BlendFunction.ADD} />
            <BrightnessContrast
              brightness={-0.11} // brightness. min: -1, max: 1
              contrast={0} // contrast: min -1, max: 1
            />
          </EffectComposer>
        </Canvas>
      </div>
    </ReactLenis>
  );
}
//  <Overlay camController={camController} />
const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
