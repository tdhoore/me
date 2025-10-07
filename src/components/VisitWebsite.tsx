import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { clamp } from "three/src/math/MathUtils.js";

export default function VisitWebsite({ link }) {
  const btnRef = useRef(null);
  const [hoverBtn, setHoverBtn] = useState(false);

  const { contextSafe } = useGSAP();

  const onMove = contextSafe(({ clientX, clientY }) => {
    /*const { innerWidth, innerHeight } = window;

    const xPos = clamp(clientX - innerWidth / 2, -20, 20);
    const yPos = clamp(clientY - innerHeight / 2, -20, 20);

    gsap.to(".project-html__btn-wrapper", {
      x: xPos,
      y: yPos,
      duration: 10,
    });*/
  });

  useEffect(() => {
    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, [hoverBtn]);

  return link ? (
    <div
      className=" project-html__visit-btn "
      data-delay={0.4}
    >
      <div className="project-html__btn-wrapper">
        <a
          href={link.href}
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
        >
          {link.label}
        </a>
      </div>
    </div>
  ) : null;
}
