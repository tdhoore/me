import { useGLTF } from "@react-three/drei";

export function Player(props) {
  const { nodes, materials } = useGLTF("/assets/player.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_1.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/assets/player.glb");
