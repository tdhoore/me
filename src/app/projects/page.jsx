"use client";
import { useSpring, animated } from "@react-spring/web";
import ProjectLink from "../../components/ProjectLink";
import ProjectImages from "../../components/ProjectImages";
import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "tester",
      images: [
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
      ],
    },
    {
      name: "tester2",
      images: [
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
        {
          url: "/test2.png",
          alt: "Test",
        },
      ],
    },
    {
      name: "teste3",
      images: [
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
      ],
    },
  ];

  const animateInList = useSpring({
    from: { y: "100%" },
    to: { y: "0%" },
    config: {
      tension: 500,
      friction: 30,
      precision: 0.001,
    },
  });

  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <animated.ul className="projects-list" style={animateInList}>
            {projects.map((project, index) => {
              return (
                <li key={`Project-${project.name}-${index}`}>
                  <ProjectLink
                    {...project}
                    count={index}
                    setActiveProject={setActiveProject}
                  />
                </li>
              );
            })}
          </animated.ul>
        </div>
      </div>
      <ProjectImages
        images={
          projects[activeProject]
            ? projects[activeProject].images.map((img, index) => ({
                imgIndex: index,
                ...img,
              }))
            : []
        }
      />
    </>
  );
}
