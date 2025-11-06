import { Float, Html } from "@react-three/drei";
import Eye from "./Eye";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SocialLinks from "./SocialLinks";

export default function Contact({ camController }) {
	const eyeWrapperRef = useRef(null);
	const eyeWrapperBottomRef = useRef(null);
	
	useFrame((state, dt) => {
		eyeWrapperRef.current.position.copy(camController.current._camera.position);
		eyeWrapperBottomRef.current.position.copy(camController.current._camera.position);

		eyeWrapperRef.current.position.y += 7;
		eyeWrapperBottomRef.current.position.y -= 7;

	})

  return (
    <>
      <group
        ref={eyeWrapperRef}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <Float>
          <pointLight
            intensity={10}
            position={[0.5, 0, 3]}
          />
          <Eye scale={5} />
        </Float>
      </group>

      <Html
        as="article"
        transform
        position={[0, 0, -10]}
        className="flex flex-col gap-6"
      >
        <header>
          <h2 className="h2 text-center">Speek to me?</h2>
        </header>
        <p className="body max-w-[600px] text-center text-balance">Sure, why not. You have come this far and I would love to hear and tell your story.</p>
      </Html>

      <group
        ref={eyeWrapperBottomRef}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <Float>
          <pointLight
            intensity={10}
            position={[0.5, 0, 3]}
          />
          <Eye scale={5} />
        </Float>
			</group>
			<SocialLinks/>
    </>
  );
}
