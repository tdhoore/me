"use client";

import React, { useEffect, useState } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Image } from "@react-three/drei";
import { geometry } from "maath";
import { useSpring, animated } from "@react-spring/three";

extend(geometry);

export default function Img(props) {
  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: props.w * props.h, tension: 350, friction: 40 },
  }));

  useFrame(({ mouse }) => {
    //api({ rotation: [mouse.y * -Math.PI * 0.1, mouse.x * Math.PI * 0.1, 0] });
  });

  const handleMoveOver = (e) => {
    console.log(e);
  };

  return (
    <animated.group
      position={props.position}
      rotation={rotation}
      onPointerMove={(e) => handleMoveOver(e)}
    >
      <Image {...props} position={[0, 0, 0]} transparent>
        <roundedPlaneGeometry args={[props.w, props.h, 0.1]} />
      </Image>
    </animated.group>
  );
}
