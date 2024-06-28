import React from "react";
import { useSpring, animated } from "@react-spring/three";

export default function Slice(props) {
  const mat = props.material.clone();
  const { position, color } = useSpring({
    position: [0, props.activeIndex === props.index ? 0.5 : 0, 0],
    color: props.activeIndex === props.index ? "#C1D9CC" : "#DFE5E4",
  });

  return (
    <animated.mesh
      key={`slice-${props.index}`}
      name={`slice-${props.index}`}
      castShadow
      receiveShadow
      geometry={props.geometry}
      material={mat}
      material-color={color}
      rotation={props.rotation}
      position={position}
    />
  );
}
