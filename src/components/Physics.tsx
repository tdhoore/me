import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, useKeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ecctrl } from "ecctrl";
import { EcctrlCameraControls } from "ecctrl/camera";
import * as THREE from "three/webgpu";

const _target = new THREE.Vector3();
const _offset = new THREE.Vector3(-5, 5, 5);

export default function PhysicsScene({ children }) {
  const [, getKeys] = useKeyboardControls();

  const ecctrlRef = useRef(null);
  const cameraRef = useRef(null);

  useFrame(() => {
    const ctrl = ecctrlRef.current;
    const cam = cameraRef.current;

		if (ctrl) {
      const { forward, backward, leftward, rightward, jump, run } = getKeys();
      ctrl.setMovement({ forward, backward, leftward, rightward, jump, run });
    }

    if (ctrl && cam) {
      // Character world position
      const pos = ctrl.currPos; // THREE.Vector3 exposed by ecctrl ref
			_target.set(pos.x + _offset.x, pos.y + _offset.y, pos.z + _offset.y);
			
      // Smoothly move the camera pivot to follow the character
    	//cam.setLookAt(_target.x, _target.y, _target.z, ctrl.currPos.x, ctrl.currPos.y, ctrl.currPos.z, true);
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
			>
				
			</Ecctrl>

      <EcctrlCameraControls
				ref={cameraRef}
				makeDefault
				smoothTime={0.1}
      />

      {children}
    </Physics>
  );
}
