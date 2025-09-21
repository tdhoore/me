import { Float, useTexture } from "@react-three/drei";
import { getRandomArbitrary } from "../js/functions";

const particlesCount = 1000;
const particlePositions = new Float32Array(particlesCount * 3);
const fieldSize = 10;

for (let i = 0; i < particlesCount; i++) {
  const i3 = i * 3;

  particlePositions[i3] = getRandomArbitrary(-fieldSize, fieldSize);
  particlePositions[i3 + 1] = getRandomArbitrary(-fieldSize, fieldSize);
  particlePositions[i3 + 2] = getRandomArbitrary(-fieldSize, fieldSize);
}

export default function Dust() {
  const dust = useTexture("/assets/textures/dust.png");

  return (
    <Float rotationIntensity={0.5}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            itemSize={3}
            array={particlePositions}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          transparent
          depthTest={false}
          map={dust}
          opacity={0.2}
        />
      </points>
    </Float>
  );
}
