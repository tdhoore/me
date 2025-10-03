import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import Dust from "./Dust";
import Projects from "./Projects";
import { BrowserRouter, NavLink, Route, Routes, useLocation, useParams } from "react-router";
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

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

export default function App() {
  const location = useLocation();

  const disableControllsPaths = ["/about", "/contact"];

  const camController = useRef(null);

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

  return (
    <ReactLenis
      options={{ autoRaf: true }}
      root
    >
      <nav className="fixed z-50 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">About</NavLink>
      </nav>
      <Routes>
        <Route
          path="project/:id"
          element={<ProjectHtml />}
        />
      </Routes>
      <Overlay camController={camController} />
      <div className="fixed top-0 left-0 w-full h-[100dvh]">
        <Canvas shadows>
          <fog
            attach="fog"
            args={["#000", 0, 5]}
          />
          <ambientLight intensity={1} />
          <Dust />
          <EyeScene camController={camController} />
          <Projects camController={camController} />
          <CameraControls
            ref={camController}
            dollySpeed={0}
            truckSpeed={0}
            enabled={!disableControllsPaths.includes(location.pathname)}
          />
        </Canvas>
      </div>
    </ReactLenis>
  );
}

const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
