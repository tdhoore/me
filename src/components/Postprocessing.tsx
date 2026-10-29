import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three/webgpu";
import { pass } from "three/tsl";
import { bloom } from "three/addons/tsl/display/BloomNode.js";
import { pixelationPass } from "three/addons/tsl/display/PixelationPassNode.js";

export function PostProcessing() {
  const { gl, scene, camera } = useThree();

  const postProcessing = useRef<THREE.RenderPipeline | null>(null);

  useEffect(() => {
    const pp = new THREE.RenderPipeline(gl);

    const scenePass = pass(scene, camera);

    const bloomPass = bloom(
      scenePass,
      1.5, // strength
      0.5, // radius
      0.8, // threshold
    );

    const pixelPass = pixelationPass(scene, camera, 4, 0, 0);

    //pp.outputNode = scenePass.add(pixelPass);
    pp.outputNode = pixelPass;

    postProcessing.current = pp;

    return () => {
      pp.dispose();
      postProcessing.current = null;
    };
  }, [gl, scene, camera]);

  useFrame(() => {
    postProcessing.current?.render();
  }, 1);

  return null;
}
