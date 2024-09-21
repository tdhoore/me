"use client";
import { useSpring, animated } from "@react-spring/web";
import ProjectLink from "../../components/ProjectLink";
import ProjectImages from "../../components/ProjectImages";

export default function Projects() {
  const projects = [
    {
      name: "tester",
    },
    {
      name: "tester2",
    },
    {
      name: "teste3",
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
    <div className="page-wrapper">
      <div className="container">
        <animated.ul className="projects-list" style={animateInList}>
          {projects.map((project, index) => {
            return (
              <li key={`Project-${project.name}-${index}`}>
                <ProjectLink {...project} count={index} />
              </li>
            );
          })}
        </animated.ul>
      </div>
      <ProjectImages />
    </div>
  );
}
