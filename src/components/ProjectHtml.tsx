import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ProjectCounter from "./ProjectCounter";
import { useVoidStore } from "../stores/VoidStore";
import { kebabCase } from "case-anything";
import Section1 from "./Section1";
import FullWidthImg from "./FullWidthImg";
import ImgSection from "./ImgsSection";

const sections = { Section1, FullWidthImg, ImgSection };

export default function ProjectHtml() {
  const projectHtmlRef = useRef(null);
  const searchBtnRef = useRef(null);
  const navigate = useNavigate();

  const { contextSafe } = useGSAP();

  const { id } = useParams();
  const [closeBtnHover, setCloseBtnHover] = useState(false);

  const content = useVoidStore((state) => state.content);
  const currentContent = content ? content.projects.filter((project) => kebabCase(project.title) === id)[0] : false;

  const clickBtn = contextSafe(() => {
    if (projectHtmlRef.current) {
      gsap.to(projectHtmlRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        onComplete: () => {
          navigate("/");
        },
      });
    }
  });
  const hoverBtn = () => setCloseBtnHover(true);
  const resetHoverBtn = () => setCloseBtnHover(false);

  useGSAP(() => {
    const targets = gsap.utils.toArray(".move-in");

    targets.forEach((target) => {
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
    });
  }, [id]);

  useGSAP(() => {
    gsap.from(searchBtnRef.current, {
      scrollTrigger: {
        trigger: searchBtnRef.current,
        start: "-=100% bottom",
      },
      opacity: 0,
      y: "100%",
      filter: "blur(10px)",
    });
  }, [searchBtnRef]);

  return (
    currentContent && (
      <article
        className={`project-html ${closeBtnHover ? "project-html--close" : ""}`}
        ref={projectHtmlRef}
      >
        <div className="wrapper project-html__wrapper">
          <header
            className="project-html__header move-in"
            data-delay={0.3}
          >
            <h2 className="project-html__title">{currentContent.title}</h2>
          </header>
          <dl
            className="project-html__details move-in"
            data-delay={0.5}
          >
            {currentContent.tags?.map((tag, index) => (
              <div
                className="project-html__detail"
                key={`${tag.label}${index}`}
              >
                <dt>{tag.label}</dt>
                <dd>{Array.isArray(tag.value) ? tag.value.join(" ") : tag.value}</dd>
              </div>
            ))}
          </dl>
          <div
            className="project-html__content move-in"
            data-delay={0.6}
          >
            <div
              className="project-html__text"
              dangerouslySetInnerHTML={{ __html: currentContent.intro }}
            ></div>
            {currentContent.link ? (
              <a
                className="btn"
                href={currentContent.link.href}
              >
                {currentContent.link.label}
              </a>
            ) : null}
          </div>
          <div className="project-html__top-img project-html__img move-in">
            <img
              src={currentContent.topImg.src}
              alt={currentContent.topImg.alt}
            />
          </div>
          <div className="project-html__bottom-img project-html__img move-in">
            <img
              src={currentContent.bottomImg.src}
              alt={currentContent.bottomImg.alt}
            />
          </div>
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
          <ProjectCounter />
        </div>
        <button
          onClick={clickBtn}
          onMouseEnter={hoverBtn}
          onMouseLeave={resetHoverBtn}
          onFocus={hoverBtn}
          onBlur={resetHoverBtn}
          className={`btn-close btn-close--t btn-close--l btn-close--tl ${closeBtnHover ? "active" : ""}`}
        >
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
        </button>
        <button
          onClick={clickBtn}
          onMouseEnter={hoverBtn}
          onMouseLeave={resetHoverBtn}
          onFocus={hoverBtn}
          onBlur={resetHoverBtn}
          className={`btn-close btn-close--t btn-close--r btn-close--tr ${closeBtnHover ? "active" : ""}`}
        >
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
        </button>
        <button
          onClick={clickBtn}
          onMouseEnter={hoverBtn}
          onMouseLeave={resetHoverBtn}
          onFocus={hoverBtn}
          onBlur={resetHoverBtn}
          className={`btn-footer ${closeBtnHover ? "active" : ""}`}
          ref={searchBtnRef}
        >
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
          <span>Continue your search</span>
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
        </button>
      </article>
    )
  );
}
