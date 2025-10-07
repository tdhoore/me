import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ProjectCounter from "./ProjectCounter";
import { useVoidStore } from "../stores/VoidStore";
import { kebabCase } from "case-anything";
import Section1 from "./Section1";
import FullWidthImg from "./FullWidthImg";
import ImgSection from "./ImgsSection";
import { div } from "three/webgpu";
import VisitWebsite from "./VisitWebsite";

const sections = { Section1, FullWidthImg, ImgSection };

export default function ProjectHtml() {
  const projectHtmlRef = useRef(null);
  const navigate = useNavigate();

  const { contextSafe } = useGSAP();

  const { id } = useParams();

  const content = useVoidStore((state) => state.content);
  const foundProjects = useVoidStore((state) => state.foundProjects);
  const setFoundProjects = useVoidStore((state) => state.setFoundProjects);

  const currentContent = content ? content.projects.filter((project) => kebabCase(project.title) === id)[0] : false;

  const projectArray = content ? content.projects.map((project) => kebabCase(project.title)) : [];

  useEffect(() => {
    if (!foundProjects.includes(id)) {
      setFoundProjects(id);
    }
  }, [id]);

  const clickBtn = contextSafe((e) => {
    e.preventDefault();

    if (projectHtmlRef.current) {
      gsap.to(projectHtmlRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        onComplete: () => {
          setTimeout(() => {
            navigate("/");
          }, 150);
        },
      });
    }
  });

  useGSAP(() => {
    gsap.from(projectHtmlRef.current, {
      opacity: 0,
    });

    const targets = gsap.utils.toArray(".move-in");

    targets.forEach((target) => {
      if (target) {
        const delay = target.dataset.delay ? target.dataset.delay : 0;

        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
            start: "20% bottom",
          },
          opacity: 0,
          delay,
          filter: "blur(10px)",
        });

        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
          },
          delay,
          y: 50,
        });
      }
    });

    gsap.from(".project-html__nav-title", {
      x: -10,
      opacity: 0,
      filter: "blur(10px)",
      delay: 0.2,
    });

    gsap.from(".project-html__counter div", {
      x: -10,
      opacity: 0,
      delay: 0.2,
      stagger: 0.1,
    });
  }, [id]);

  return (
    currentContent && (
      <article
        className={`project-html`}
        ref={projectHtmlRef}
      >
        <div className="wrapper project-html__wrapper">
          <div className="wrapper project-html__content">
            <header
              className="project-html__header move-in"
              data-delay={0.3}
            >
              <h2 className="project-html__title">{currentContent.title}</h2>
            </header>
            <div
              className="project-html__text move-in"
              data-delay={0.4}
              dangerouslySetInnerHTML={{ __html: currentContent.intro }}
            ></div>

            <div
              className="project-html__details-wrapper move-in"
              data-delay={0.2}
            >
              <dl className="project-html__details">
                {currentContent.tags?.map((tag, index) => (
                  <div
                    className="project-html__detail"
                    key={`${tag.label}${index}`}
                  >
                    <dt>{tag.label} ///</dt>
                    <dd>{Array.isArray(tag.value) ? tag.value.join(" ") : tag.value}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="project-html__left-img project-html__img move-in"
                data-delay={0.1}
              >
                <img
                  src={currentContent.leftImg.src}
                  alt={currentContent.leftImg.alt}
                />
              </div>
            </div>

            <div
              className="project-html__right-img project-html__img move-in"
              data-delay={0.1}
            >
              <img
                src={currentContent.rightImg.src}
                alt={currentContent.rightImg.alt}
              />
            </div>
            <VisitWebsite link={currentContent.link} />
          </div>
          {currentContent.content.length ? (
            <div className="project-html__imgs">
              {currentContent.content.map((cnt, index) => {
                const Comp = sections[cnt.blockName];

                if (Comp) {
                  return (
                    <Comp
                      {...cnt}
                      key={`${cnt.blockName}${index}`}
                    />
                  );
                }
                return null;
              })}
            </div>
          ) : null}
          <div className="project-html__nav move-in">
            <div className="project-html__nav-header">
              <h3 className="project-html__nav-title">{currentContent.title}</h3>
              <div className="project-html__counter">
                {projectArray.map((projectId) => (
                  <div
                    className={`${id === projectId ? "active" : foundProjects.includes(projectId) ? "found" : ""}`}
                    key={`project-count-${projectId}`}
                  ></div>
                ))}
              </div>
            </div>
            <a
              className="btn-close"
              href="/"
              onClick={clickBtn}
            >
              <span className="sr-only">Close</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78891 4.09067L9.18289 0.696698L11.0922 2.60602L7.69824 6L11.0922 9.39397L9.18289 11.3033L5.78891 7.90933L2.60693 11.0913L0.697606 9.18198L3.87959 6L0.697605 2.81802L2.60693 0.908693L5.78891 4.09067Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <a
            href="/"
            className="project-html__footer-btn move-in"
          >
            Continue exploring
            <span className="arrows">
              <span>&gt;</span>
              <span>&gt;</span>
              <span>&gt;</span>
            </span>
          </a>
        </div>
      </article>
    )
  );
}
