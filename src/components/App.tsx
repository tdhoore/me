import { Terrain } from "./models/Terrain";
import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { Scene } from "./scene";
import { div } from "three/webgpu";
import { useEffect, useRef } from "react";
import { Box } from "@react-three/drei";

export default function App() {
  const noiseRef = useRef();
  const otherNoiseRef = useRef();

  const updatePos = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(noiseRef);
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
      <div className="absolute size-full z-10 bg-top bg-radial-[ellipse_at_top_center] from-[#1C4859] to-transparent opacity-30"></div>
      <div className="absolute z-20 top-0 size-full mix-blend-color-dodge">
        <div
          className="absolute size-full z-20 bg-[url(/assets/textures/perlin.png)] opacity-4100 bg-size-[120%]"
          ref={otherNoiseRef}
        ></div>
        <div className="absolute size-full z-30 bg-[#02404B] mix-blend-multiply opacity-25"></div>
        <div
          className="absolute size-full z-40 bg-[url(/assets/textures/perlin.png)]  bg-size-[80%]  opacity-40 bg-bottom "
          ref={noiseRef}
        ></div>
      </div>
      <div className="absolute size-full z-40 bg-[url(/assets/textures/noise.png)] opacity-[0.03] bg-bottom"></div>
      <Canvas shadows>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#000", 0, 5]} />
        <Box />
      </Canvas>
    </div>
  );
}

const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(<App />);
}
