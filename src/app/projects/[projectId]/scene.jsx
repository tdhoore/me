import React, { useRef } from "react";
import { Image } from "@react-three/drei";

export default function Project(props) {
  return (
    <group>
      <Image
        alt="dsjkfhdsj"
        url="/testrender.png"
        position={[0, 2, 0]}
        scale={[1, 3]}
        transparent
      />
    </group>
  );
}
