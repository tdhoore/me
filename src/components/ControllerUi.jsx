import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Lottie from "lottie-react";
import companyLogoAnim from "../../public/company-logo-animation.json";

export default function ControllerUi(props) {
  const lottiePlayer = useRef(null);

  const [showMenu, setShowMenu] = useState(props.showMenu);

  const [{ opacity }, api] = useSpring(() => ({
    from: {
      opacity: 0.2,
    },
    to: {
      opacity: 1,
    },
    loop: {
      reverse: true,
    },
    cancel: props.startAnim,
    config: {
      mass: 1,
      friction: 200,
      tension: 1000,
    },
  }));

  useEffect(() => {
    if (props.startAnim) {
      //stop the spring breathing animation
      api({
        from: {
          opacity: 1,
        },
      });

      if (lottiePlayer.current) {
        //play lottie animation
        lottiePlayer.current.play();
      }
    }
  });

  return (
    <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
      {!showMenu ? (
        <animated.div style={{ opacity }} onClick={(e) => props.clickScreen(e)}>
          <Lottie
            lottieRef={lottiePlayer}
            animationData={companyLogoAnim}
            loop={false}
            autoplay={false}
            onComplete={() => {
              setShowMenu(true);
              props.aftermainAnim();
            }}
          />
        </animated.div>
      ) : (
        <nav>menu</nav>
      )}
    </div>
  );
}
