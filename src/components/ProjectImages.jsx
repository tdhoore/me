"use client";
import React from "react";
import ProjectImage from "./ProjectImage";

export default function ProjectImages(props) {
  const imageClasses = [
    "h-2/5 bottom-[6%] left-[55%]",
    "h-1/5 top-[8%] right-[10%] -z-50",
    "h-2/6 top-[22%] right-[38%] opacity-50 -z-50 blur",
    "h-1/5 top-[50%] right-[15%] opacity-50 -z-50 blur-sm",
    "!w-2/12 h-auto top-[8%] left-[4%]",
    "h-1/5 bottom-[8%] left-[12%]",
    "h-1/6 bottom-[50%] left-[2%] opacity-50 -z-50 blur-sm",
  ];

  const images = [
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
    {
      url: "/test.png",
      alt: "Test",
    },
  ];

  return (
    <div className="project-images">
      {imageClasses.map((imageClass, index) => {
        return (
          <ProjectImage
            className={imageClass}
            key={imageClass}
            img={images[index]}
            index={index}
          />
        );
      })}
    </div>
  );
}
