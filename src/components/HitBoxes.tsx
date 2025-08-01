import { Box, useGLTF } from "@react-three/drei";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { GLTF } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    Plane003: THREE.Mesh;
    Cube049: THREE.Mesh;
  };
  materials: {};
};

export default function HitBoxes(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/island_rebuild_hitbox.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <RigidBody>
        <Box args={[0.1, 0.1, 0.1]} position={[-0.087, 3.057, 0.474]} />
      </RigidBody>
      <RigidBody>
        <Box args={[0.1, 0.1, 0.1]} position={[-0.287, 3.057, 0.374]} />
      </RigidBody>
      <RigidBody type="fixed" includeInvisible friction={5}>
        <MeshCollider type="trimesh">
          <mesh
            visible={false}
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={nodes.Cube050.material}
            position={[13.26, 21.923, 7.808]}
            scale={[3.188, 1.135, 0.161]}
          />
        </MeshCollider>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/assets/island_rebuild_hitbox.glb");
