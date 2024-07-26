import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

export default function Slice(props) {
  const [hover, setHover] = useState(false);
  const mat = props.material.clone();
  const { position, color } = useSpring({
    position: [0, hover ? 0.5 : 0, 0],
    color: hover ? "#C1D9CC" : "#DFE5E4",
    config: {
      mass: 1,
      tension: 500,
      friction: hover ? 50 : 400,
      precision: 0.0001,
    },
  });

  const onHover = (e, setting) => {
    e.stopPropagation();
    setHover(setting);
  };

  return (
    <animated.mesh
      name={`slice-${props.index}`}
      castShadow
      receiveShadow
      geometry={props.geometry}
      material={mat}
      material-color={color}
      rotation={props.rotation}
      position={position}
      onPointerOver={(e) => onHover(e, true)}
      onPointerOut={(e) => onHover(e, false)}
    />
  );
}
