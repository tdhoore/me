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

  const pages = [
    {
      url: "/",
      scene: 1,
    },

    {
      url: "/projects/1",
      model: "/btn.glb",
      scene: 3,
    },
    {
      url: "/projects/2",
      model: "/btn.glb",
      scene: 3,
    },
    {
      url: "/projects/3",
      model: "/btn.glb",
      scene: 3,
    },
    {
      url: "/about",
      model: "/btn.glb",
      scene: 3,
    },
    {
      url: "/contact",
      model: "/btn.glb",
      scene: 2,
    },
  ];

  const [activePage, setActivePage] = useState(
    pages.filter((page) => page.url === pathname)[0]
  );

  useEffect(() => {
    setActivePage(pages.filter((page) => page.url === pathname)[0]);
  }, [pathname]);

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
      <Controller />
    </group>
  );
}
