import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { map } from "../functions/functions";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function CameraController(props) {
  const scrollData = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  const [pageIndex, setPageIndex] = useState(0);

  const animProps = useSpring({
    ...props.pages[pageIndex].camSettings,
    config: {
      mass: 1,
      tension: 500,
      friction: 50,
      precision: 0.0001,
    },
  });

  useFrame((state, delta) => {
    setPage(scrollData.offset);
  });

  const getActivePage = (offset) => {
    let index = Math.round(map(offset, 0, 1, 0, props.pages.length - 1));
    setPageIndex(index);

    return props.pages[index];
  };

  const setPage = (offset) => {
    const page = getActivePage(offset);
    if (pathname !== page.url) {
      //set url
      router.push(page.url);
    }
  };

  return (
    <animated.group {...animProps}>
      <PerspectiveCamera makeDefault={true} far={100} near={0.1} fov={22.895} />
    </animated.group>
  );
}
