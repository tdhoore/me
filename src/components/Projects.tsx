import { kebabCase } from "case-anything";
import Project from "./Project";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";

const projects = [
  {
    title: "test",
    position: [2, 0, 2],
  },
];

export default function Projects({ camController }) {
  let { id } = useParams();

  const moveToPosition = (pos: number[], initSetup: boolean = false) => {
    if (camController.current) {
      camController.current.setTarget(...pos, !initSetup);
    }
  };

  useEffect(() => {
    projects.forEach((project) => {
      if (id === kebabCase(project.title)) {
        //is the active project
        moveToPosition(project.position, true);
      }
    });
  }, [camController]);

  if (!id) {
    moveToPosition([0, 0, 0], true);
  }

  return (
    <group>
      {projects.map((project, index) => {
        if (id === kebabCase(project.title)) {
          //is the active project
          moveToPosition(project.position);
        }

        return (
          <Project
            {...project}
            key={`project${index}`}
            isActive={id === kebabCase(project.title)}
          />
        );
      })}
    </group>
  );
}
