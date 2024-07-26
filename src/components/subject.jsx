import React from "react";
import { Gltf } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Subject(props) {
  const { scale, color } = useSpring({
    scale: props.active ? [1, 1, 1] : [0, 0, 0],
    color: props.activeIndex === props.index ? "#C1D9CC" : "#DFE5E4",
  });

  return (
    <animated.group scale={scale}>
      <Gltf src={props.model} />
    </animated.group>
  );
}
