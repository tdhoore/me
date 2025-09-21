import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import { Box, CameraControls } from "@react-three/drei";
import Dust from "./Dust";
import Projects from "./Projects";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  const camController = useRef(null);
  const noiseRef = useRef();
  const otherNoiseRef = useRef();

  const updatePos = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (noiseRef.current) {
      noiseRef.current.style.backgroundPosition = `${x / 16}px ${y / 16}px`;
      otherNoiseRef.current.style.backgroundPosition = `${x / 20}px ${
        y / 20
      }px`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePos);

    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  }, []);

  return (
    <div className="relative size-full">
      <div className="absolute size-full z-10 bg-top bg-radial-[ellipse_at_top_center] from-back-light to-transparent opacity-30 pointer-events-none"></div>
      <div className="absolute z-20 top-0 size-full mix-blend-color-dodge pointer-events-none">
        <div
          className="absolute size-full z-20 bg-[url(/assets/textures/perlin.png)] opacity-4100 bg-size-[120%]"
          ref={otherNoiseRef}
        ></div>
        <div className="absolute size-full z-30 bg-noise-color mix-blend-multiply opacity-25"></div>
        <div
          className="absolute size-full z-40 bg-[url(/assets/textures/perlin.png)]  bg-size-[80%]  opacity-40 bg-bottom "
          ref={noiseRef}
        ></div>
      </div>
      <div className="absolute size-full z-40 bg-[url(/assets/textures/noise.png)] opacity-[0.03] bg-bottom pointer-events-none"></div>
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
//
const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="project/:id" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
