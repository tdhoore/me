import { Html } from "@react-three/drei";
import { useVoidStore } from "../stores/VoidStore";
import { MathUtils } from "three";

export default function SocialLinks() {
	const content = useVoidStore((state) => state.content);
	const minRot = 80;
	const maxRot = 280;
	const rotationStep = (maxRot - minRot) / (content.socials.length - 1);

	return content.socials.map((social, index) => {
    return (
      <group
        key={`${social.icon}`}
        rotation={[0, MathUtils.degToRad(rotationStep * index + minRot), 0]}
      >
        <Html
          transform
          position={[0, 0, -5]}
        >
          <a href={social.link} target="_blank">
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </a>
        </Html>
      </group>
    );
  });
}
