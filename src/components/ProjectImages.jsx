"use client";
import React from "react";
import ProjectImage from "./ProjectImage";
import { useTransition, animated } from "@react-spring/web";

export default function ProjectImages(props) {
  let counter = 0;

  const imageClasses = [
    "h-2/5 bottom-[6%] left-[55%]",
    "h-1/5 top-[8%] right-[10%] -z-50",
    "h-2/6 top-[22%] right-[38%] opacity-50 -z-50 blur",
    "h-1/5 top-[50%] right-[15%] opacity-50 -z-50 blur-sm",
    "!w-2/12 h-auto top-[8%] left-[4%]",
    "h-1/5 bottom-[8%] left-[12%]",
    "h-1/6 bottom-[50%] left-[2%] opacity-50 -z-50 blur-sm",
  ];

  const imageInnerclasses = [
    "",
    "",
    "opacity-50",
    "opacity-50",
    "",
    "",
    "opacity-50",
  ];

  const getClassesByIndex = (index) => {
    let result = index;

    if (index > imageClasses.length - 1) {
      //to big for array use counter
      result = counter;
    }
    //update counter
    counter++;

    if (counter >= imageClasses.length) {
      //is to big so reset
      counter = 0;
    }

    return result;
  };

  const animateIn = useTransition(props.images ? props.images : [], {
    from: { scale: 0, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    leave: { scale: 0, opacity: 0 },
    config: {
      tension: 500,
      friction: 30,
      precision: 0.001,
    },
    trail: 50,
    //exitBeforeEnter: true,
    onChange: () => {
      counter = 0;
    },
  });

  return (
    <div className="project-images">
      {animateIn((style, item, state, index) => {
        return (
          <animated.div
            style={style}
            className={`project-images__img ${imageClasses[item.imgIndex]}`}
          >
            <ProjectImage
              img={item}
              classes={imageInnerclasses[item.imgIndex]}
            />
          </animated.div>
        );
      })}
    </div>
  );
}
