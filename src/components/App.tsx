import { Canvas, useFrame } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { Box, CameraControls } from "@react-three/drei";
import Dust from "./Dust";
import Projects from "./Projects";
import { BrowserRouter, Route, Routes } from "react-router";
import Overlay from "./Overlay";

export default function App() {
  const camController = useRef(null);

  return (
    <div className="relative size-full">
      <Overlay camController={camController} />
      <Canvas shadows>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 0, 5]} />;
        <Dust />
        <Box />
        <Projects camController={camController} />
        <CameraControls ref={camController} />
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
        <Route path="*" element={<App />} />
        <Route index element={<App />} />
        <Route path="project/:id" element={<App />} />
        <Route path="about" element={<App />} />
        <Route path="contact" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
