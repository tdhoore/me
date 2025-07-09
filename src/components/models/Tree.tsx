import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import leafsVertexShader from "../../shaders/leafs/vertex.glsl";
import leafsFragmentShader from "../../shaders/leafs/fragment.glsl";

type GLTFResult = GLTF & {
  nodes: {
    BézierCurve003: THREE.Mesh;
    BézierCurve003_1: THREE.Mesh;
  };
  materials: {
    ["M_Leaf_01.008"]: THREE.MeshStandardMaterial;
    ["M_Bark_01.004"]: THREE.MeshStandardMaterial;
  };
};

const context = createContext();

const leafsMaterial = new CustomShaderMaterial({
  baseMaterial: THREE.MeshPhysicalMaterial,
  vertexShader: leafsVertexShader,
  fragmentShader: leafsFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uWindStrenght: { value: 0.15 },
    uColor: { value: new THREE.Color("#55cd62") },
  },
  transparent: true,
  transmission: 0,
  thickness: 0.004,
  metalness: 0,
  alphaTest: 0.1,
});

const barkMaterial = new CustomShaderMaterial({
  baseMaterial: THREE.MeshPhysicalMaterial,

  uniforms: {
    uTime: { value: 0 },
    uWindStrenght: { value: 0.15 },
    uColor: { value: new THREE.Color("#55cd62") },
  },
  transparent: true,
  transmission: 0,
  thickness: 0.004,
  metalness: 0,
  alphaTest: 0.1,
});

export function TreeInstances({ children, ...props }) {
  const { nodes } = useGLTF("/assets/tree.glb") as GLTFResult;
  const [leafsTexture, barkTexture] = useTexture(["assets/textures/T_leaf.png", "assets/textures/T_bark_birch.png"]);

  const instances = useMemo(() => {
    leafsMaterial.alphaMap = leafsTexture;

    nodes.BézierCurve003.material = leafsMaterial;

    barkMaterial.map = barkTexture;
    nodes.BézierCurve003_1.material = barkMaterial;

    return {
      BzierCurve: nodes.BézierCurve003,
      BzierCurve1: nodes.BézierCurve003_1,
    };
  }, [nodes, leafsTexture]);

  useFrame(({ clock }) => {
    leafsMaterial.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <Merged
      meshes={instances}
      {...props}
    >
      {(instances) => (
        <context.Provider
          value={instances}
          children={children}
        />
      )}
    </Merged>
  );
}

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const instances = useContext(context);
  return (
    <group
      {...props}
      dispose={null}
    >
      <group rotation={[0.062, 0.002, 0.002]}>
        <instances.BzierCurve />
        <instances.BzierCurve1 />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/tree.glb");
