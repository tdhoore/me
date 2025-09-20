import { Html } from "@react-three/drei";

export interface projectPropsType {
  position: [number, number, number];
}

export default function Project({ position }: projectPropsType) {
  return (
    <Html position={position}>
      <a href="#" className="c-project">
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
