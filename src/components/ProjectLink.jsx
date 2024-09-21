"use client";
import React from "react";
import { zeroPad } from "../functions/functions";
import { useSpring, animated } from "@react-spring/web";

export default function ProjectLink(props) {
  const setCount = (count, pos) => {
    return zeroPad(count + 1, pos);
  };

  const animateInNumber = useSpring({
    from: { y: "100%" },
    to: { y: "0%" },
    delay: 300 + props.count * 100 + 200,
  });

  const animateInTitle = useSpring({
    from: { y: "100%" },
    to: { y: "0%" },
    delay: 300 + props.count * 100,
  });

  return (
    <a href="#" className="project-link">
      <span className="project-link__number number">
        <animated.span style={animateInNumber}>
          {setCount(props.count, 2)}.
        </animated.span>
      </span>
      <span className="project-link__title h2">
        <animated.span style={animateInTitle}>{props.name}</animated.span>
      </span>
    </a>
  );
}
