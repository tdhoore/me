import React, { useState } from "react";

import { map } from "../functions/functions";
import Slice from "./slice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  useGLTF,
  PerspectiveCamera,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import Subject from "./subject";
import CameraController from "./cameraController";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/scene.glb");

export default function Scene(props) {
  const wat = useScroll();
  const router = useRouter();
  const pathname = usePathname();
  const pages = [
    {
      url: "/",
      model: "/asset.glb",
      camSettings: {
        position: [-2.955, 1.907, 11.844],
        rotation: [-0.04, -0.244, -0.01],
      },
    },

    {
      url: "/projects/1",
      model: "/btn.glb",
      camSettings: {
        position: [-1.775, 1.484, 7.265],
        rotation: [0.002, -0.347, 0.001],
      },
    },
    {
      url: "/projects/2",
      model: "/btn.glb",
      camSettings: {
        position: [-1.775, 1.484, 7.265],
        rotation: [0.002, -0.347, 0.001],
      },
    },
    {
      url: "/projects/3",
      model: "/btn.glb",
      camSettings: {
        position: [-1.775, 1.484, 7.265],
        rotation: [0.002, -0.347, 0.001],
      },
    },
    {
      url: "/about",
      model: "/btn.glb",
      camSettings: {
        position: [-3.175, 1.489, 6.759],
        rotation: [0.002, -0.347, 0.001],
      },
    },
    {
      url: "/contact",
      model: "/btn.glb",
      camSettings: {
        position: [-2.955, 1.907, 11.844],
        rotation: [-0.04, -0.244, -0.01],
      },
    },
  ];

  const { nodes, materials } = useGLTF("/scene.glb");

  const [pageIndex, setPageIndex] = useState(0);

  /*useEffect(() => {
    const currentPage = pages.indexOf(pathname);
    if (currentPage !== -1) {
      const newAngle = map(currentPage, 0, pages.length - 1, 0, Math.PI * 2);

      camControlls.current?.rotateAzimuthTo(newAngle);
      setAngle(newAngle);
    }
  }, []);

  const handleChangeOrbit = () => {
    if (camControlls.current) {
      setAngle(
        new THREE.Vector2(
          camera.current.position.x,
          camera.current.position.z
        ).angle()
      );

      setPage();
    }
  };*/

  const getActivePage = (offset) => {
    let index = Math.round(map(offset, 0, 1, 0, pages.length - 1));
    setPageIndex(index);

    return pages[index];
  };

  const setPage = (offset) => {
    const page = getActivePage(offset);
    if (pathname !== page.url) {
      //set url
      router.push(page.url);
    }
  };

  const createSlices = () => {
    const slicesCount = 32;
    const slices = [];

    for (let i = 0; i < slicesCount; i++) {
      slices.push(
        <Slice
          key={`slice-${i}`}
          castShadow
          receiveShadow
          geometry={nodes.pannel.geometry}
          material={materials["Material.002"]}
          rotation={[0, ((Math.PI * 2) / slicesCount) * i, 0]}
        />
      );
    }

    return slices;
  };
  /*
 <PerspectiveCamera
          makeDefault={true}
          far={100}
          near={0.1}
          fov={22.895}
          {...pages[pageIndex].camSettings}
        />
*/
  return (
    <ScrollControls pages={pages.length}>
      <group {...props} dispose={null}>
        <CameraController pages={pages} />
        <directionalLight
          name="light"
          intensity={1}
          color="#dbe1e0"
          position={[2.24, 5.29, 4.57]}
          rotation={[-0.86, 0.31, -1.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground001.geometry}
          material={materials["Material.003"]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pedastol001.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plafform001.geometry}
          material={materials["Material.002"]}
        />
        {createSlices()}

        <PerspectiveCamera
          makeDefault={false}
          far={100}
          near={0.1}
          fov={22.895}
          position={[-1.775, 1.484, 7.265]}
          rotation={[0.002, -0.347, 0.001]}
        />
        <PerspectiveCamera
          makeDefault={false}
          far={100}
          near={0.1}
          fov={22.895}
          position={[-3.175, 1.489, 6.759]}
          rotation={[0.002, -0.347, 0.001]}
        />
      </group>
    </ScrollControls>
  );
}
/*<PerspectiveCamera
        ref={camera}
        name="cam"
        makeDefault={true}
        far={100}
        near={0.1}
        fov={22.9}
        position={[-2.95, 1.91, 11.84]}
      />

      <directionalLight
        name="light"
        intensity={1}
        color="#dbe1e0"
        position={[2.24, 5.29, 4.57]}
        rotation={[-0.86, 0.31, -1.18]}
      />
      <mesh
        name="ground"
        receiveShadow
        geometry={nodes.ground.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        name="pedastol"
        castShadow
        receiveShadow
        geometry={nodes.pedastol.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="plafform"
        castShadow
        receiveShadow
        geometry={nodes.plafform.geometry}
        material={materials["Material.002"]}
      />

      {createSlices()}
      {pages.map((page, index) => {
        return (
          <Subject
            key={page.url}
            model={page.model}
            active={modelIndex === index}
          />
        );
      })}

      <CameraControls
        mouseButtons={{
          left: ACTION.ROTATE,
          middle: ACTION.NONE,
          right: ACTION.NONE,
          wheel: ACTION.NONE,
        }}
        touches={{
          one: ACTION.TOUCH_ROTATE,
          two: ACTION.NONE,
          three: ACTION.NONE,
        }}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        onChange={() => handleChangeOrbit()}
        ref={camControlls}
      />*/
