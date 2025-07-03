import { Terrain } from "./models/Terrain";
import { Canvas } from "@react-three/fiber";
import { createRoot } from "react-dom/client";
import { Scene } from "./scene";

export default function App() {
  return (
    <>
      <Canvas shadows>
        <Scene></Scene>
      </Canvas>
    </>
  );
}

const root = document.querySelector("#root");

if (root) {
  const rootReact = createRoot(root);

  rootReact.render(<App />);
}
