import React from "react";
import { useGLTF, MeshTransmissionMaterial, Html } from "@react-three/drei";

useGLTF.preload("/controller.glb");

export default function Scene(props) {
  const { nodes, materials } = useGLTF("/controller.glb");
  console.log(materials["glow.001"]);

  materials["glow.001"].emissiveIntensity = 2;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube019.geometry}>
        <MeshTransmissionMaterial
          samples={16}
          resolution={256}
          transmission={0.95}
          roughness={0.5}
          clearcoat={0.1}
          clearcoatRoughness={0.1}
          thickness={0.08}
          backsideThickness={0.5}
          ior={1.5}
          chromaticAberration={1}
          anisotropy={1}
          distortionScale={0.1}
          attenuationDistance={0.5}
          attenuationColor={"#fff"}
          color="#fff"
          toneMapped={false}
          backside="true"
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Cube018.geometry}>
        <MeshTransmissionMaterial
          samples={16}
          resolution={256}
          transmission={0.95}
          roughness={0.5}
          clearcoat={0.1}
          clearcoatRoughness={0.1}
          thickness={0.08}
          backsideThickness={0.5}
          ior={1.5}
          chromaticAberration={1}
          anisotropy={1}
          distortionScale={0.1}
          attenuationDistance={0.5}
          attenuationColor={"#fff"}
          color="#fff"
          toneMapped={false}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["electronics.001"]}
        position={[0.911, 0.059, -0.543]}
        scale={0.141}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["cirquitplate.001"]}
        position={[-0.407, 0, -0.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["electronics.001"]}
        position={[0.911, 0.084, -0.543]}
        scale={[0.2, 0.082, 0.2]}
      />
      <group position={[0.753, 0.041, 0.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials["electronics.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials["glow.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["electronics.001"]}
        position={[0.911, 0.062, -0.134]}
        scale={[0.133, 0.046, 0.133]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["electronics.001"]}
        position={[-0.563, 0.085, 0.586]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["electronics.001"]}
        position={[0.57, 0.015, 0.584]}
      />
      <group position={[0.483, 0.041, 0.753]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials["electronics.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials["glow.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["electronics.001"]}
        position={[0.369, 0.015, 0.561]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["electronics.001"]}
        position={[1.011, 0.015, 0.556]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["electronics.001"]}
        position={[0.863, 0.015, 0.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["electronics.001"]}
        position={[-0.982, 0.015, 0.732]}
        scale={[0.739, 1, 0.739]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["electronics.001"]}
      >
        <Html
          className="content w-[70px] h-[52px] bg-black rounded-[8px]"
          position={[-0.205, 0.1, -0.15]}
          rotation-x={-Math.PI / 2}
          transform
          occlude
        >
          <div
            className="wrapper"
            onPointerDown={(e) => e.stopPropagation()}
          ></div>
        </Html>
      </mesh>
    </group>
  );
}
