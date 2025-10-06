import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function VisitWebsite({ link }) {
  const [hoverBtn, setHoverBtn] = useState(false);

  const { contextSafe } = useGSAP();

  const onMove = contextSafe(({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;

    if (!hoverBtn) {
      gsap.to(".project-html__hover", {
        x: clientX - innerWidth / 2,
        y: clientY - innerHeight / 2,
      });
    } else {
      gsap.to(".project-html__hover", {
        x: 0,
        y: 0,
      });
    }
  });

  useEffect(() => {
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, [hoverBtn]);

  return link ? (
    <div
      className=" project-html__visit-btn "
      data-delay={0.4}
      onMouseEnter={() => setHoverBtn(true)}
      onMouseLeave={() => setHoverBtn(false)}
    >
      <div className="project-html__btn-wrapper">
        <a href={link.href}>{link.label}</a>
        <div className="project-html__hover">
          <div></div>
        </div>
      </div>
    </div>
  ) : null;
}
