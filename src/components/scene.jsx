import React, { useState, useEffect } from "react";
import { map } from "../functions/functions";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { PerspectiveCamera } from "@react-three/drei";

import ProjectScene from "../app/projects/[projectId]/scene";
import Controller from "./Controller";

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

  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={true}
        far={100}
        near={0.1}
        fov={22.895}
        position={[0, 0.6, 12]}
        rotation={[-0.04, 0, 0]}
      />
      <directionalLight
        name="light"
        intensity={1}
        color="#dbe1e0"
        position={[2.24, 5.29, 4.57]}
        rotation={[-0.86, 0.31, -1.18]}
      />
      <Controller
        rotation={[Math.PI / 1.8, Math.PI / 16, Math.PI / 5]}
        position={[2.5, 1, 0]}
      />
    </group>
  );
}
//[0, 0, 3] [Math.PI / 2, 0, 0]
//[0, 0, -8] [Math.PI / 2, 0, 0]
//[2.5, 1, 0] [Math.PI / 1.8, Math.PI / 16, Math.PI / 5]
