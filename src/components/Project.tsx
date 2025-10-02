import { Html } from "@react-three/drei";
import { useLocation, useNavigate, useParams } from "react-router";
import { useVoidStore } from "../stores/VoidStore";

export interface projectPropsType {
  position: [number, number, number];
  isHidden: boolean;
  isActive: boolean;
}

export default function Project({ position, isHidden = false, isActive }: projectPropsType) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const showProjectDetail = useVoidStore((state) => state.showProjectDetail);
  const setShowProjectDetail = useVoidStore((state) => state.setShowProjectDetail);
  const setActiveProjectId = useVoidStore((state) => state.setActiveProjectId);

  const handleLink = (e) => {
    e.preventDefault();

    setShowProjectDetail(true);
    navigate(e.currentTarget.getAttribute("href"));
  };

  const handleMouseOver = (e) => {
    setActiveProjectId(1);
  };

  const handleMouseLeave = () => {
    setActiveProjectId(null);
  };

  //set the links as hidden
  if (location.pathname !== "/" && !location.pathname.includes("project")) {
    isHidden = true;
  } else if (id) {
    isHidden = showProjectDetail;
  }

  return (
    <Html position={position}>
      <a
        href="/project/test"
        className={`c-project ${isHidden ? "c-project--hidden" : ""} ${isActive ? "c-project--active" : ""}`}
        onClick={(e) => handleLink(e)}
        onMouseEnter={(e) => handleMouseOver(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
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
              <path
                d="M4 2H6V4H4V6H2V4H0V2H2V0H4V2Z"
                fill="currentColor"
              />
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
