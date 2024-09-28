import React, { useEffect, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { usePathname, useRouter } from "next/navigation";
import { map } from "../functions/functions";
import ControllerUi from "./ControllerUi";

useGLTF.preload("/controller.glb");

export default function Controller(props) {
  const { nodes, materials } = useGLTF("/controller.glb");
  const router = useRouter();
  const pathname = usePathname();

  //filter loaction based on the active url
  //for other urls that are not / use partial url
  const locations = [
    {
      urls: ["/"],
      transform: {
        rotation: [Math.PI / 2, 0, 0],
        position: [0, 0, -4],
      },
      showMenu: false,
    },
    {
      urls: ["/projects", "/about"],
      transform: {
        rotation: [Math.PI / 1.8, Math.PI / 16, Math.PI / 5],
        position: [2.5, 1, 0],
      },
      showMenu: true,
    },
    {
      urls: ["/contact"],
      transform: {
        rotation: [Math.PI / 2, 0, 0],
        position: [0, 0, 3],
      },
      showMenu: true,
    },
  ].filter((loc) =>
    pathname === "/"
      ? loc.urls.includes(pathname)
      : loc.urls.filter((url) => pathname.includes(url)).length
  );

  const [startMainAnim, setStartMainAnim] = useState(false);
  const [mainAnim, setMainAnim] = useSpring(() => ({
    ...locations[locations.length - 1].transform,
    config: {
      mass: 1,
      friction: 80,
      tension: 800,
    },
  }));

  const [userInterAction, setUserInterAction] = useState({
    rotation: [0, 0, 0],
  });

  useEffect(() => {
    document.body.addEventListener("mousemove", (e) => handleMoveOver(e));

    return () => {
      document.body.removeEventListener("mousemove", (e) => handleMoveOver(e));
    };
  }, [pathname]);

  const handleMoveOver = (e) => {
    const rotFactor = Math.PI / 32;

    setUserInterAction({
      rotation: [
        map(e.pageY, 0, window.innerHeight, -rotFactor, rotFactor),
        0,
        map(e.pageX, 0, window.innerWidth, rotFactor, -rotFactor),
      ],
    });
  };

  const handleShowLogoAnimation = (e) => {
    props.setBg("");
    setStartMainAnim(true);

    setMainAnim({
      rotation: [Math.PI / 2, 0, 0],
      position: [0, 0, 3],
    });
  };

  const goToProjects = () => {
    router.push("/projects");

    setMainAnim({
      rotation: [Math.PI / 1.8, Math.PI / 16, Math.PI / 5],
      position: [2.5, 1, 0],
    });
  };

  return (
    <animated.group {...mainAnim} dispose={null}>
      <group {...userInterAction}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body.geometry}
          material={materials.bar}
          position={[0, 0.062, 0.508]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens.geometry}
          material={materials["electronics.001"]}
          position={[0.677, 0.061, -0.677]}
        />
        <group position={[-0.226, 0.06, -0.226]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials["screen.001"]}
          >
            <Html
              className="content w-[480px] h-[480px] rounded-lg overflow-hidden bg-[#151515]"
              distanceFactor={1}
              position={[0, 0.06, 0]}
              rotation-x={-Math.PI / 2}
              transform
              occlude
            >
              <ControllerUi
                startAnim={startMainAnim}
                clickScreen={handleShowLogoAnimation}
                aftermainAnim={goToProjects}
                showMenu={locations[locations.length - 1].showMenu}
              />
            </Html>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.gradient}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.button.geometry}
          material={materials.gradient}
          position={[0.677, 0.062, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body001.geometry}
          material={materials.cam}
          position={[0.677, 0.063, -0.677]}
        />
      </group>
    </animated.group>
  );
}
