import { Tree } from "./models/Tree";
import { Well } from "./models/Well";
import { Tower } from "./models/Tower";
import { Ruin } from "./models/Ruin";
import { Bush } from "./models/Bush";
import React from "react";
import ModelProvider from "./ModelProvider";
import { Sea } from "./models/Sea";
import { Terrain } from "./models/Terrain";

export default function Land(props) {
  return (
    <>
      <ModelProvider>
        <group {...props}>
          <Bush position={[0.06, 0.57, -0.83]} />
          <Sea
            receiveShadow={true}
            castShadow={true}
            frustumCulled={false}
            visible={true}
          />
          <Terrain />
          <Ruin position={[3.09, 0, 0]} />
          <Tower
            position={[0, 0, -5.11]}
            castShadow={true}
            receiveShadow={true}
          />
          <Well position={[-15.68, 0, -9.87]} />
          <Tree position={[-16.1, 0, -3.48]} />
          <ambientLight
            position={[0, 2.38, 0]}
            color={"#a2cfe6"}
            intensity={1.66}
            castShadow={false}
            isAmbientLight={true}
            isLight={true}
            visible={true}
          />
          <directionalLight
            position={[5.47, 8.53, -7.3]}
            color={"#fffbe6"}
            isLight={true}
            isDirectionalLight={true}
            intensity={4.32}
            castShadow={true}
            frustumCulled={false}
          />
        </group>
      </ModelProvider>
    </>
  );
}
