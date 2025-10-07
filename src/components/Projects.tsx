import { kebabCase } from "case-anything";
import Project from "./Project";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { useVoidStore } from "../stores/VoidStore";

export default function Projects({ camController }) {
  const location = useLocation();
  let id = null;

  const content = useVoidStore((state) => state.content);
  const foundProjects = useVoidStore((state) => state.foundProjects);

  if (location.pathname.includes("project")) {
    const urlParts = location.pathname.split("/");

    id = urlParts[urlParts.length - 1];
  }

  const moveToPosition = (pos: number[], initSetup: boolean = false) => {
    if (camController.current) {
      camController.current.setTarget(...pos, !initSetup);
    }
  };

  useEffect(() => {
    if (content) {
      content.projects.forEach((project) => {
        if (id === kebabCase(project.title)) {
          //is the active project
          moveToPosition(project.position, true);
        }
      });
    }
  }, [camController, content]);

  if (!id) {
    moveToPosition([0, 0, 0], true);
  }

  return (
    <group>
      {content &&
        content.projects.map((project, index) => {
          if (id === kebabCase(project.title)) {
            //is the active project
            moveToPosition(project.position);
          }

          return (
            <Project
              {...project}
              key={`project${index}`}
              isActive={id === kebabCase(project.title)}
              isFound={foundProjects.includes(kebabCase(project.title))}
              id={id}
            />
          );
        })}
    </group>
  );
}
