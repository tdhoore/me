"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { getRandomNumber } from "../functions/functions";

export default function ProjectImages(props) {
  const range = 4;

  const [randomPos, setRandomPos] = useState({
    y: getRandomNumber(-range, range),
    x: getRandomNumber(-range, range),
  });

  const move = useSpring({
    from: { x: 0, y: 0 },
    to: { ...randomPos },
    config: {
      mass: 5,
      tension: 10,
      friction: 0,
      precision: 0.001,
    },
    onStart: () => {
      setRandomPos({
        y: getRandomNumber(-range, range),
        x: getRandomNumber(-range, range),
      });
    },
    onRest: () => {
      setRandomPos({
        y: getRandomNumber(-range, range),
        x: getRandomNumber(-range, range),
      });
    },
  });

  return (
    <animated.div style={move}>
      <Image src={props.img.url} alt={props.img.alt} width={500} height={500} />
    </animated.div>
  );
}
