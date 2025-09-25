import { useFrame, useThree } from "@react-three/fiber";
import Eye from "./Eye";
import { useEffect, useRef } from "react";
import { Object3D, Vector2, Vector3 } from "three";
import { map } from "../js/functions";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { useLocation } from "react-router";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface eyePosPerLocType {
  [key: string]: Vector3;
}

const eyeTarget = new Vector3(0, 0, 4);
const dummy = new Object3D();

const eyePosPerLoc: eyePosPerLocType = {
  "/about": new Vector3(2.5, -0.2, -5.8),
  "/contact": new Vector3(-2.5, -0.2, -5.8),
  default: new Vector3(2.5, -0.2, -8),
};

export default function EyeScene({ camController }) {
  const location = useLocation();

  const eyeWrapperRef = useRef(null);
  const lookAtRef = useRef(null);

  const eyeYClamp = 2;
  const eyeXClamp = 2;

  useGSAP(() => {
    //set new eye location based on path name
    const path = location.pathname;
    const pos = eyePosPerLoc[path] ? eyePosPerLoc[path] : eyePosPerLoc.default;

    gsap.to(lookAtRef.current?.position, {
      ...pos,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, [location, lookAtRef]);

  useFrame((state, dt) => {
    eyeWrapperRef.current.position.copy(camController.current._camera.position);
    eyeWrapperRef.current.rotation.copy(camController.current._camera.rotation);

    //set eye target based on mouse position
    const lookAtPos = lookAtRef.current.position;

    eyeTarget.y = map(state.pointer.y, -1, 1, -eyeYClamp, eyeYClamp);
    eyeTarget.x = map(state.pointer.x, -1, 1, Math.min(-eyeXClamp - lookAtPos.x, -eyeXClamp), Math.max(eyeXClamp - lookAtPos.x, eyeXClamp));

    dummy.lookAt(eyeTarget);

    easing.dampQ(lookAtRef.current.quaternion, dummy.quaternion, 0.3, dt);
  });

  return (
    <group ref={eyeWrapperRef}>
      <group
        ref={lookAtRef}
        position={[2.5, -0.2, -5.8]}
      >
        <Float>
          <pointLight
            intensity={10}
            position={[0.5, 0.5, 3]}
          />
          <Eye scale={2} />
        </Float>
      </group>
    </group>
  );
}
