import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Html, Plane } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";

export default function Slider(props) {
  //gewoon swiper gebruiken
  //titel in een appart 3d object zetten en animeren op de juiste slide
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <group>
      <Html
        transform
        center
        position={[-4, 6, -10]}
        rotation={[
          -0.27434834919341156, 0.3503120948109015, 0.1919862177193762,
        ]}
        distanceFactor={10}
      >
        <Swiper
          spaceBetween={64}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          centeredSlides
          className="w-[3000px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              className="aspect-square bg-red-500"
              key={`slides-${index}`}
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </Html>
    </group>
  );
}
/*
 */
