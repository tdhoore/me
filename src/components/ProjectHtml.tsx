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
        <div className="project-html__top-img">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="project-html__bottom-img">
          <img
            src=""
            alt=""
          />
        </div>
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
        className={`btn-close btn-close--b btn-close--l btn-close--bl ${closeBtnHover ? "active" : ""}`}
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
        className={`btn-close btn-close--b btn-close--r btn-close--br ${closeBtnHover ? "active" : ""}`}
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
    </article>
  );
}
