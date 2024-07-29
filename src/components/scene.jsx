import React, { useState, useEffect } from "react";
import { map } from "../functions/functions";
import Slice from "./slice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useGLTF, PerspectiveCamera, ScrollControls } from "@react-three/drei";
import ProjectScene from "../app/projects/[projectId]/scene";
import Subject from "./subject";

useGLTF.preload("/scene.glb");

export default function Scene(props) {
  const router = useRouter();
  const pathname = usePathname();

  const components = {
    project: ProjectScene,
  };

  const [currentScene, setCurrentScene] = useState(null);

  const pages = [
    {
      url: "/",
      model: "/asset.glb",
      scene: "project",
    },

    {
      url: "/projects/1",
      model: "/btn.glb",
      scene: "project",
    },
    {
      url: "/projects/2",
      model: "/btn.glb",
      scene: "project",
    },
    {
      url: "/projects/3",
      model: "/btn.glb",
      scene: "project",
    },
    {
      url: "/about",
      model: "/btn.glb",
      scene: "project",
    },
    {
      url: "/contact",
      model: "/btn.glb",
      scene: "project",
    },
  ];

  const { nodes, materials } = useGLTF("/scene.glb");

  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    //set init values

    pages.forEach((page, index) => {
      if (page.url === pathname) {
        //is current page set values
        setPageIndex(index);

        //set current scene
        const CurrentScene = components[page.scene];
        setCurrentScene(<CurrentScene />);
      }
    });
  });

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

  return (
    <ScrollControls pages={pages.length}>
      <group {...props} dispose={null}>
        <PerspectiveCamera
          makeDefault={true}
          far={100}
          near={0.1}
          fov={22.895}
          position={[0, 1.90734, 11.8442]}
          rotation={[-0.04, 0, 0]}
        />
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
        {currentScene}
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
