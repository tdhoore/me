import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {  useKeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ecctrl } from "ecctrl";
import * as THREE from "three/webgpu";
import { damp, damp3 } from "maath/easing";
import { InteractionZone } from "./InteractionZone";
import { map } from "../js/functions";

const newCamPosition = new THREE.Vector3();
const playerDistance = new THREE.Vector3();


const screenBase = 1728;
const screenDistance = 0.4;

const right = new THREE.Vector3();
const up = new THREE.Vector3();

const originalPosition = new THREE.Vector3();

let panValue = { value: 0 };

const panOffset = new THREE.Vector2();
const maxPan = 5;
const panSpeed = 0.05;

const panCamera = (dx: number, dy: number, camera: THREE.Camera, delta: number) => {
  const rightAxis = right.setFromMatrixColumn(camera.matrixWorld, 0).normalize();

  const upAxis = up.setFromMatrixColumn(camera.matrixWorld, 1).normalize();

  panOffset.x += dx;
  panOffset.y += dy;

  const calcMaxPan = Math.min(maxPan * 2, maxPan * (screenBase / window.innerWidth));

  panOffset.x = THREE.MathUtils.clamp(panOffset.x, -calcMaxPan, calcMaxPan);
  panOffset.y = THREE.MathUtils.clamp(panOffset.y, -calcMaxPan, calcMaxPan);

  newCamPosition.copy(originalPosition);

  newCamPosition.addScaledVector(rightAxis, -panOffset.x);
  newCamPosition.addScaledVector(upAxis, panOffset.y);

  damp3(camera.position, newCamPosition, 0.05, delta);
};

export default function PhysicsScene({ children }) {
  const [, getKeys] = useKeyboardControls();
  const { camera } = useThree();

  const ecctrlRef = useRef(null);

  useEffect(() => {
    originalPosition.copy(camera.position);
  }, [camera]);

  useFrame((_, delta) => {
    const ctrl = ecctrlRef.current;

    if (ctrl) {
      const { forward, backward, leftward, rightward, jump, run } = getKeys();
      //@ts-ignore
      ctrl.setMovement({ forward, backward, leftward, rightward, jump, run });
    }

    if (ctrl && camera) {
      let dampTarget = 0;
      //@ts-ignore
      playerDistance.copy(ctrl.currPos);
      playerDistance.project(camera);

      const calcScreenDistance = map(window.innerWidth, 0, screenBase, 0, screenDistance);

      const dampSpeed = Math.min(panSpeed * 2, panSpeed * (screenBase / window.innerWidth));

      if (playerDistance.x < -1 + calcScreenDistance) {
        dampTarget = dampSpeed;
      }

      if (playerDistance.x > 1 - calcScreenDistance) {
        dampTarget = -dampSpeed;
      }

      damp(panValue, "value", dampTarget, 0.8, delta);

      panCamera(panValue.value, 0, camera, delta);
    }
  });

  return (
    <Physics debug>
      <Ecctrl
        ref={ecctrlRef}
        maxWalkVel={5}
        accDeltaTime={6}
        decDeltaTime={6}
        debug
        friction={-0.05}
      ></Ecctrl>
     
      {children}
    </Physics>
  );
}

