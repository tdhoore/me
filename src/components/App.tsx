import { Canvas, useFrame } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { Box, CameraControls } from "@react-three/drei";
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

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

export default function App({ children }) {
  const location = useLocation();

  const disableControllsPaths = ["/about", "/contact"];

  const camController = useRef(null);

  return (
    <div className="relative size-full">
      <nav className="fixed z-50 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route
          path="project/:id"
          element={<ProjectHtml />}
        />
      </Routes>

      <Overlay camController={camController} />
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
/*   <Routes>
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
          element={<ProjectHtml />}
        />
        <Route
          path="about"
          element={<App />}
        />
        <Route
          path="contact"
          element={<App />}
        />
      </Routes>*/
