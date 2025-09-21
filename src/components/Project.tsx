import { Html } from "@react-three/drei";
import { useNavigate } from "react-router";

export interface projectPropsType {
  position: [number, number, number];
  isActive: boolean;
}

export default function Project({ position, isActive }: projectPropsType) {
  const navigate = useNavigate();

  const handleLink = (e) => {
    e.preventDefault();

    navigate(e.currentTarget.getAttribute("href"));
  };

  return (
    <Html position={position}>
      <a
        href="/project/test"
        className={`c-project ${isActive ? "c-project--active" : ""}`}
        onClick={(e) => handleLink(e)}
      >
        <article className="c-project__container">
          <div className="c-project__plus fog-effect">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              className=" size-2"
            >
              <path d="M4 2H6V4H4V6H2V4H0V2H2V0H4V2Z" fill="currentColor" />
            </svg>
          </div>
          <div className="c-project__text-container fog-effect">
            <h2 className="c-project__title">lorem ipsum</h2>
            <div className="c-project__line"></div>
            <p className="c-project__sub-title">design</p>
          </div>
        </article>
      </a>
    </Html>
  );
}
