import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { map } from "../functions/functions";
import Slice from "./slice";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  CameraControls,
} from "@react-three/drei";

useGLTF.preload("/portfolio.glb");

export default function Scene(props) {
  const router = useRouter();
  const pathname = usePathname();
  const pages = [
    "/",
    "/about",
    "/projects/1",
    "/projects/2",
    "/projects/3",
    "/contact",
  ];

  const { nodes, materials } = useGLTF("/portfolio.glb");
  const [angle, setAngle] = useState(0);
  const camControlls = useRef();
  const camera = useRef();

  useEffect(() => {
    const currentPage = pages.indexOf(pathname);
    if (currentPage !== -1) {
      const newAngle = map(currentPage, 0, pages.length - 1, 0, Math.PI * 2);

      camControlls.current?.rotateAzimuthTo(newAngle);
      setAngle(newAngle);
    }
  }, []);

  const handleChangeOrbit = () => {
    if (camControlls.current) {
      setAngle(
        new THREE.Vector2(
          camera.current.position.x,
          camera.current.position.z
        ).angle()
      );

      setPage();
    }
  };

  const getActivePage = () => {
    let index = Math.round(map(angle, 0, Math.PI * 2, 0, pages.length - 1)) - 1;

    if (index < 0) {
      index = pages.length + index;
    }

    return pages[index];
  };

  const setPage = () => {
    const page = getActivePage();
    if (pathname !== page) {
      router.push(page);
    }
  };

  const createSlices = () => {
    const slices = [];
    const activeIndex = Math.round(map(angle, 0, Math.PI * 2, 0, 7));

    for (let i = 0; i < 8; i++) {
      slices.push(
        <Slice
          key={`slice-${i}`}
          index={i}
          activeIndex={activeIndex}
          geometry={nodes["slice-3"].geometry}
          material={materials["Material.002"]}
          rotation={[0, ((Math.PI * 2) / 8) * i, 0]}
        />
      );
    }

    return slices;
  };

  return (
    <group {...props} dispose={null} position={[0, -1.5, 0]}>
      <PerspectiveCamera
        ref={camera}
        name="cam"
        makeDefault={true}
        far={100}
        near={0.1}
        fov={22.9}
        position={[-2.95, 1.91, 11.84]}
      />

      <directionalLight
        name="light"
        intensity={1}
        color="#dbe1e0"
        position={[2.24, 5.29, 4.57]}
        rotation={[-0.86, 0.31, -1.18]}
      />
      <mesh
        name="ground"
        receiveShadow
        geometry={nodes.ground.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        name="pedastol"
        castShadow
        receiveShadow
        geometry={nodes.pedastol.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        name="plafform"
        castShadow
        receiveShadow
        geometry={nodes.plafform.geometry}
        material={materials["Material.002"]}
      />

      {createSlices()}

      <CameraControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        onChange={() => handleChangeOrbit()}
        ref={camControlls}
      />
    </group>
  );
}
