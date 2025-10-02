import { useState } from "react";
import { useVoidStore } from "../stores/VoidStore";
import { useParams } from "react-router";

export default function ProjectHtml() {
  const { id } = useParams();
  const [closeBtnHover, setCloseBtnHover] = useState(false);

  const showProjectDetail = useVoidStore((state) => state.showProjectDetail);
  const setShowProjectDetail = useVoidStore((state) => state.setShowProjectDetail);

  const clickBtn = () => setShowProjectDetail(false);
  const hoverBtn = () => setCloseBtnHover(true);
  const resetHoverBtn = () => setCloseBtnHover(false);

  return (
    <article className={`project-html ${showProjectDetail && id ? "" : "project-html--hide"} ${closeBtnHover ? "project-html--close" : ""}`}>
      <div className="wrapper project-html__wrapper">
        <header className="project-html__header">
          <h2 className="project-html__title">lorem ipsum</h2>
        </header>
        <dl className="project-html__details">
          <div className="project-html__detail">
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>
          </div>
          <div className="project-html__detail">
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>
          </div>
        </dl>
        <div className="project-html__content">
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
        <div className="project-html__top-img project-html__img">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="project-html__bottom-img project-html__img">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="project-html__bottom-img-2 project-html__img">
          <img
            src=""
            alt=""
          />
        </div>
        <section className="project-html__section-1">
          <header>
            <h2 className="h3">lorem ipsum</h2>
          </header>
          <div className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
          </div>
        </section>
        <figure className="project-html__full-width-img project-html__img">
          <img
            src=""
            alt=""
          />
        </figure>
        <section className="project-html-section wrapper col-span-full">
          <div className="project-html-section__content">
            <header>
              <h2 className="h3">lorem ipsum</h2>
            </header>
            <div className="project-html-section__text">
              <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Ornare magnis pretium enim ut netus adipiscing nulla. Leo arcu amet sed faucibus vel lorem amet congue. Morbi aenean imperdiet in libero tellus egestas adipiscing. Feugiat risus etiam scelerisque massa. Arcu nunc viverra laoreet amet diam nibh consequat suscipit. Elit amet sed at mattis odio eget eget velit. Suscipit morbi in lectus sodales laoreet montes proin ultricies tellus. Turpis elit quis metus at.</p>
            </div>
          </div>
          <div className="project-html-section__imgs">
            <figure className="project-html__img">
              <img
                src=""
                alt=""
              />
            </figure>
            <figure className="project-html__img">
              <img
                src=""
                alt=""
              />
            </figure>
            <figure className="project-html__img">
              <img
                src=""
                alt=""
              />
            </figure>
          </div>
        </section>
        <section className="project-html__found">
          <header>
            <h2 className="h3 text-center">Found</h2>
          </header>
          <p className="h2 text-center">00/09</p>
        </section>
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
