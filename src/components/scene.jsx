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
  Gltf,
} from "@react-three/drei";
import Subject from "./subject";

useGLTF.preload("/portfolio.glb");

export default function Scene(props) {
  const router = useRouter();
  const pathname = usePathname();
  const pages = [
    { url: "/", model: "/asset.glb" },
    { url: "/about", model: "/btn.glb" },
    { url: "/projects/1", model: "/btn.glb" },
    { url: "/projects/2", model: "/btn.glb" },
    { url: "/projects/3", model: "/btn.glb" },
    { url: "/contact", model: "/btn.glb" },
  ];

  const { nodes, materials } = useGLTF("/portfolio.glb");
  const [angle, setAngle] = useState(0);
  const [modelIndex, setModelIndex] = useState(0);
  const camControlls = useRef();
  const camera = useRef();

  const ACTION = {
    NONE: 0,
    ROTATE: 1,
    TRUCK: 2,
    OFFSET: 4,
    DOLLY: 8,
    ZOOM: 16,
    TOUCH_ROTATE: 32,
    TOUCH_TRUCK: 64,
    TOUCH_OFFSET: 128,
    TOUCH_DOLLY: 256,
    TOUCH_ZOOM: 512,
    TOUCH_DOLLY_TRUCK: 1024,
    TOUCH_DOLLY_OFFSET: 2048,
    TOUCH_DOLLY_ROTATE: 4096,
    TOUCH_ZOOM_TRUCK: 8192,
    TOUCH_ZOOM_OFFSET: 16384,
    TOUCH_ZOOM_ROTATE: 32768,
  };

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

    setModelIndex(index);

    return pages[index];
  };

  const setPage = () => {
    const page = getActivePage();
    if (pathname !== page.url) {
      //set url
      router.push(page.url);
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
      {pages.map((page, index) => {
        return (
          <Subject
            key={page.url}
            model={page.model}
            active={modelIndex === index}
          />
        );
      })}

      <CameraControls
        mouseButtons={{
          left: ACTION.ROTATE,
          middle: ACTION.NONE,
          right: ACTION.NONE,
          wheel: ACTION.NONE,
        }}
        touches={{
          one: ACTION.TOUCH_ROTATE,
          two: ACTION.NONE,
          three: ACTION.NONE,
        }}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        onChange={() => handleChangeOrbit()}
        ref={camControlls}
      />
    </group>
  );
}
