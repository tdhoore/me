import { Canvas, useFrame } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { Box, CameraControls } from "@react-three/drei";
import Dust from "./Dust";
import Projects from "./Projects";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router";
import Overlay from "./Overlay";
import EyeScene from "./EyeScene";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectHtml from "./ProjectHtml";

gsap.registerPlugin(useGSAP);

export default function App() {
  const location = useLocation();

  const disableControllsPaths = ["/about", "/contact"];

  const camController = useRef(null);

  return (
    <div className="relative size-full">
      <nav className="fixed z-50 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <ProjectHtml />
      <Overlay camController={camController} />
      <Canvas shadows>
        <color
          attach="background"
          args={["#000"]}
        />
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
  );
}

const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<App />}
        />
        <Route
          index
          element={<App />}
        />
        <Route
          path="project/:id"
          element={<App />}
        />
        <Route
          path="about"
          element={<App />}
        />
        <Route
          path="contact"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  );
}
