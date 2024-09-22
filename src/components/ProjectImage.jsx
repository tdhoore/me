"use client";
import Image from "next/image";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function ProjectImages(props) {
  const animateIn = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: {
      tension: 500,
      friction: 30,
      precision: 0.001,
    },
    delay: props.index * 100,
  });

  return (
    <animated.div
      style={animateIn}
      className={`project-images__img ${props.className}`}
    >
      <Image src={props.img.url} alt={props.img.alt} width={500} height={500} />
    </animated.div>
  );
}
