import { useGSAP } from "@gsap/react";
import { addLeadingZero } from "../js/functions";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function () {
  const projectCounterRef = useRef(null);
  const oldCountRef = useRef(null);
  const newCountRef = useRef(null);
  const foundRef = useRef(null);

  const totalProjectCount = 9;
  const foundProjectCount = 1;

  useGSAP(() => {
    if (projectCounterRef.current && oldCountRef.current && newCountRef.current && foundRef.current) {
      const oldSplit = SplitText.create(oldCountRef.current, { type: "chars" });
      const newSplit = SplitText.create(newCountRef.current, { type: "chars" });

      const charSets = [oldSplit, newSplit];

      const t = gsap.timeline({
        scrollTrigger: {
          trigger: projectCounterRef.current,
          start: "bottom bottom",
        },
      });

      t.to("body", { duration: 0.3 });

      charSets.forEach((charSet) => {
        t.to(
          charSet.chars,
          {
            duration: 1.2,
            y: "-100%",
            ease: "power2.inOut",
          },
          "counter"
        );
      });

      t.from(
        foundRef.current,
        {
          duration: 1.6,
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          ease: "power2.inOut",
        },
        "counter"
      );
    }
  }, [projectCounterRef, oldCountRef, newCountRef, foundRef]);

  return (
    <section
      className="project-counter move-in"
      ref={projectCounterRef}
    >
      <header ref={foundRef}>
        <h2 className="h3 text-center">Found</h2>
      </header>
      <p className="h2 text-center">
        <span className="project-counter__count">
          <span
            className="project-counter__old-count"
            ref={oldCountRef}
          >
            {addLeadingZero(foundProjectCount - 1)}
          </span>
          <span
            className="project-counter__new-count"
            ref={newCountRef}
          >
            {addLeadingZero(foundProjectCount)}
          </span>
        </span>
        /{addLeadingZero(totalProjectCount)}
      </p>
    </section>
  );
}
