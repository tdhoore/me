import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { Detailed, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
//import { GrassMaterial } from "../materials/GrassMaterial";
import { GrassMaterial } from "../materials/TestGrass";
import CustomShaderMaterial from "three-custom-shader-material";

type GLTFResult = GLTF & {
  nodes: {
    GrassLOD00: THREE.Mesh;
    GrassLOD01: THREE.Mesh;
    GrassLOD02: THREE.Mesh;
  };
  materials: {};
};

export function Grass(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("assets/grassLODs.glb") as GLTFResult;

  const grassMat = useMemo(() => new GrassMaterial(), []);
  const [grassAlpha, perlinNoise] = useTexture(
    ["assets/grass.jpeg", "assets/perlinnoise.webp"],
    (loadedTextures) => {
      grassMat.setupTextures(loadedTextures[0], loadedTextures[1]);
    }
  );

  return (
    <instancedMesh
      args={[null, null, 200000]}
      castShadow
      receiveShadow
      geometry={nodes.GrassLOD00.geometry}
      {...props}
      material={grassMat.material}
    >
      <CustomShaderMaterial baseMaterial={grassMat.material} />
    </instancedMesh>
  );
}

useGLTF.preload("assets/grassLODs.glb");
/*    <Detailed distances={[0, 10, 20]}>
      <mesh castShadow receiveShadow geometry={nodes.GrassLOD00.geometry} />
      <mesh castShadow receiveShadow geometry={nodes.GrassLOD01.geometry} />
      <mesh castShadow receiveShadow geometry={nodes.GrassLOD02.geometry} />
    </Detailed>*/
