import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import Player from "./components/Player";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Box, KeyboardControls } from "@react-three/drei";

/*import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { Gltf, PerspectiveCamera } from "@react-three/drei";

import ProjectScene from "./app/projects/[projectId]/scene";
import Controller from "./components/Controller";*/

export default function Scene(props) {
  /*const router = useRouter();
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
  }, [pathname]);*/

  const keyboardMap = [
    { name: "left", keys: ["ArrowUp", "KeyW"] },
    { name: "right", keys: ["ArrowDown", "KeyS"] },
    { name: "backward", keys: ["ArrowLeft", "KeyA"] },
    { name: "forward", keys: ["ArrowRight", "KeyD"] },
  ];

  return (
    <Canvas shadows dpr={[1, 1.5]}>
      <Suspense>
        <Physics debug>
          <KeyboardControls map={keyboardMap}>
            <Player />

            <RigidBody colliders="cuboid" type="fixed">
              <Box
                args={[10, 10, 10]}
                position={[0, -5.5, 0]}
                material-color="hotpink"
              />
            </RigidBody>
          </KeyboardControls>
        </Physics>
      </Suspense>
    </Canvas>
  );
}
/*   <Controller setBg={props.setBg} />*/
