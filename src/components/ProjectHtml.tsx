import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ProjectCounter from "./ProjectCounter";

export default function ProjectHtml() {
  const projectHtmlRef = useRef(null);
  const searchBtnRef = useRef(null);
  const navigate = useNavigate();

  const { contextSafe } = useGSAP();

  const { id } = useParams();
  const [closeBtnHover, setCloseBtnHover] = useState(false);

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
    <article
      className={`project-html ${closeBtnHover ? "project-html--close" : ""}`}
      ref={projectHtmlRef}
    >
      <div className="wrapper project-html__wrapper">
        <header
          className="project-html__header move-in"
          data-delay={0.3}
        >
          <h2 className="project-html__title">lorem ipsum</h2>
        </header>
        <dl
          className="project-html__details move-in"
          data-delay={0.5}
        >
          <div className="project-html__detail">
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>
          </div>
          <div className="project-html__detail">
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>
          </div>
        </dl>
        <div
          className="project-html__content move-in"
          data-delay={0.6}
        >
          <div className="project-html__text">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio ea consequatur tenetur eos, ducimus cupiditate cumque possimus quasi mollitia nobis rem dicta nemo odio quis corporis minima sunt sit?</p>
          </div>
          <a className="btn">Lorem ipsum</a>
        </div>
        <div className="project-html__top-img project-html__img move-in">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="project-html__bottom-img project-html__img move-in">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="project-html__bottom-img-2 project-html__img move-in">
          <img
            src=""
            alt=""
          />
        </div>
        <section className="project-html__section-1 move-in">
          <header>
            <h2 className="h3">lorem ipsum</h2>
          </header>
          <div className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
          </div>
        </section>
        <figure className="project-html__full-width-img project-html__img move-in">
          <img
            src=""
            alt=""
          />
        </figure>
        <section className="project-html-section wrapper col-span-full">
          <div className="project-html-section__content move-in">
            <header>
              <h2 className="h3">lorem ipsum</h2>
            </header>
            <div className="project-html-section__text">
              <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
            </div>
          </div>
          <div className="project-html-section__imgs">
            <figure className="project-html__img move-in">
              <img
                src=""
                alt=""
              />
            </figure>
            <figure
              className="project-html__img move-in"
              data-delay={0.2}
            >
              <img
                src=""
                alt=""
              />
            </figure>
            <figure
              className="project-html__img move-in"
              data-delay={0.3}
            >
              <img
                src=""
                alt=""
              />
            </figure>
          </div>
        </section>
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
  );
}
