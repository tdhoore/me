import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { map } from "../js/functions";
import useAnimationFrame from "use-animation-frame";
import { useVoidStore } from "../stores/VoidStore";

export default function Overlay({ camController }) {
  const noiseRef = useRef();
  const otherNoiseRef = useRef();
  const lightRef = useRef();

  const activeProjectId = useVoidStore((state) => state.activeProjectId);

  useAnimationFrame((e) => {
    if (camController.current) {
      const rot = camController.current.camera.rotation;

      //update the overlay positioning
      if (noiseRef.current && otherNoiseRef.current) {
        noiseRef.current.style.backgroundPosition = `${map(rot.y, -Math.PI, Math.PI, -500, 500)}px ${map(rot.x, -Math.PI, Math.PI, -500, 500)}px`;

        otherNoiseRef.current.style.backgroundPosition = `${map(rot.y, -Math.PI, Math.PI, -400, 400)}px ${map(rot.x, -Math.PI, Math.PI, -500, 500)}px`;
      }

      if (lightRef.current) {
        lightRef.current.style.opacity = map(camController.current.polarAngle, 0, Math.PI, 0.4, 0.8);
      }
    }
  });

  return (
    <>
      <div
        className="fixed top-0 left-0 size-full z-10 bg-top bg-radial-[ellipse_at_top_center] from-back-light to-transparent opacity-40 pointer-events-none transition-opacity"
        ref={lightRef}
      ></div>
      <div className="fixed z-20 top-0 size-full mix-blend-color-dodge pointer-events-none">
        <div
          className="fixed top-0 left-0 size-full z-20 bg-[url(/assets/textures/perlin.png)] opacity-100 bg-size-[120%]"
          ref={otherNoiseRef}
        ></div>
        <div className="fixed top-0 left-0 size-full z-30 bg-noise-color mix-blend-multiply opacity-25"></div>
        <div
          className="fixed top-0 left-0 size-full z-40 bg-[url(/assets/textures/perlin.png)]  bg-size-[80%]  opacity-40 bg-bottom "
          ref={noiseRef}
        ></div>
      </div>
      <div className="fixed top-0 left-0 size-full z-40 bg-[url(/assets/textures/noise.png)] opacity-[0.03] bg-bottom pointer-events-none"></div>
      <div className={`wrapper fixed top-1/2 left-1/2 -translate-1/2 size-full z-40 pointer-events-none transition-opacity duration-500 ${activeProjectId ? "opacity-10 blur-xs" : "opacity-0 blur-xl"}`}>
        <img
          src=""
          alt=""
          className="project-html__img col-start-2 col-span-3 object-cover aspect-[4/5] self-end"
        />
      </div>
    </>
  );
}
