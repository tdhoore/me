"use client";
import { Archivo } from "next/font/google";
import "../scss/index.scss";
import React, { useState } from "react";

import { animated, useSpring as useSpringThree } from "@react-spring/three";
import { animated as a, useSpring } from "@react-spring/web";
import Scene from "../scene";
import {
  EffectComposer,
  N8AO,
  Noise,
  DepthOfField,
} from "@react-three/postprocessing";
import { usePathname } from "next/navigation";
import { Physics } from "@react-three/rapier";

const archivo = Archivo({ subsets: [], weight: ["300", "900"] });

/*export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [bgAnim, setBgAnim] = useSpringThree(() => ({
    intensity: pathname !== "/" ? 2 : 0,
    color: pathname !== "/" ? "#dde7dc" : "#000",
    groundColor: pathname !== "/" ? "#bec7bd" : "#000",
  }));

  const [lightAnim, setLightAnim] = useSpringThree(() => ({
    intensity: pathname !== "/" ? 1 : 0.1,
  }));

  const [bg, setBg] = useState(pathname === "/" ? "bg--dark" : "");

  const [{ opacity }, api] = useSpring(() => ({
    from: {
      opacity: 0.2,
    },
    to: {
      opacity: 1,
    },
    loop: {
      reverse: true,
    },

    config: {
      mass: 1,
      friction: 200,
      tension: 1000,
    },
  }));

  const updateBg = () => {
    setBgAnim({
      color: "#dde7dc",
      groundColor: "#bec7bd",
      intensity: 2,
    });

    setLightAnim({
      intensity: 1,
    });

    setBg("");
  };

  return (
    <html lang="en">
      <body className={`bg ${bg} bg--extra ${archivo.className} text-primary`}>
        <main className="relative h-dvh overflow-hidden bg--noise">
          <Scene />
          {children}
        </main>
      </body>
    </html>
  );
}
/*

            <Environment background>
              <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                  <Gradient
                    colorA="#B6BAB1"
                    colorB="#227845"
                    axes="y"
                    start={0}
                    end={-0.5}
                  />
                  <Noise
                    mapping="local"
                    type="cell"
                    scale={0.5}
                    mode="softlight"
                  />
                </LayerMaterial>
              </mesh>
            </Environment>
  <fog attach="fog" args={["#ff0000", 0, 10]} />
 <Environment background>
              <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                  <Gradient
                    style={springs}
                    colorA="#B6BAB1"
                    colorB="#227845"
                    axes="y"
                    start={0}
                    end={-0.5}
                  />
                  <Noise
                    mapping="local"
                    type="cell"
                    scale={0.5}
                    mode="softlight"
                  />
                </LayerMaterial>
              </mesh>
            </Environment>
  <EffectComposer>
              <N8AO aoRadius={3} distanceFalloff={2} intensity={1} />
              <Bloom
                intensity={1.0}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.025}
              />
                <DepthOfField
                focusDistance={0.1}
                focalLength={0.1}
                bokehScale={5}
              />

<Noise opacity={0.02} />
            </EffectComposer>
  <mesh scale={100}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                  <Color color="#B6BAB1" alpha={1} mode="normal" />
                  <Depth
                    colorA="#B6BAB1"
                    colorB="#dfe1df"
                    alpha={0.5}
                    mode="normal"
                    near={0}
                    far={300}
                    origin={[100, 100, 100]}
                  />
                </LayerMaterial>
              </mesh>
<hemisphereLight
              color="#DBE1E0"
              groundColor="#B6BAB1"
              position={[-7, 25, 13]}
              intensity={3.5}
            />
            <color attach="background" args={["#DBE1E0"]} />
            <fog attach="fog" args={["#DBE1E0", 10, 40]} />

            <directionalLight
              name="light"
              intensity={1}
              color="#dbe1e0"
              position={[2.24, 5.29, 4.57]}
              rotation={[-0.86, 0.31, -1.18]}
            />*/
