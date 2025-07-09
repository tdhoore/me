import { Tree } from "./models/Tree";
import { Well } from "./models/Well";
import { Tower } from "./models/Tower";
import { Ruin } from "./models/Ruin";
import { Bush } from "./models/Bush";
import React from "react";
import ModelProvider from "./ModelProvider";
import { Sea } from "./models/Sea";
import { Terrain } from "./models/Terrain";
import { Box, Environment, SoftShadows, Sphere } from "@react-three/drei";
import { LayerMaterial, Depth } from "lamina";
import * as THREE from "three";

export default function Land(props) {
  return (
    <>
      <ModelProvider>
        <group {...props}>
          <Bush
            position={[-10.33, 0.45, -6.28]}
            rotation={[0, 0.7330382858376184, 0]}
            scale={[0.85, 0.85, 0.85]}
          />
          <Bush
            position={[-18.97, 0.49, -6.26]}
            rotation={[0, -0.8028514559173917, 0]}
            scale={[1.09, 1.09, 1.09]}
          />
          <Bush
            position={[-11.28, 0.52, -14.4]}
            rotation={[-0.4928056372554789, 0.641417455211948, 0.004120902775179418]}
            scale={[1.12, 1.12, 1.12]}
          />
          <Bush
            position={[-12.04, 0.33, -4.49]}
            scale={[0.81, 0.81, 0.81]}
          />
          <Bush
            position={[-13.75, 0.41, -7.08]}
            scale={[1.06, 1.06, 1.06]}
          />
          <Bush
            position={[-13.46, 0.68, -8.1]}
            rotation={[0, -0.9599310885968813, 0]}
            scale={[0.85, 0.85, 0.85]}
          />
          <Bush
            position={[-12.75, 0.5, -13.54]}
            rotation={[0, -0.6632251157578454, 0]}
            scale={[0.85, 0.85, 0.85]}
          />
          <Bush
            position={[-18.27, 0.57, -13.42]}
            rotation={[3.141592653589793, -0.4014257279586958, 3.141592653589793]}
            scale={[0.91, 0.91, 0.91]}
          />
          <Bush
            position={[-18.28, 0.57, -15.63]}
            rotation={[0.01106571110410394, 0.7534290972057655, -0.002182570916318906]}
            scale={[0.91, 0.91, 0.91]}
          />
          <Bush
            position={[-17.29, 0.57, -14.7]}
            rotation={[0, -0.4014257279586958, 0]}
            scale={[1.21, 1.21, 1.21]}
          />
          <Bush
            position={[-20.14, 0.57, -13.29]}
            rotation={[0, 0.4363323129985824, 0]}
            scale={[0.89, 0.89, 0.89]}
          />
          <Bush
            position={[-21.65, 0.57, -8.12]}
            rotation={[0, 1.1519173063162573, 0]}
            scale={[0.9, 0.9, 0.9]}
          />
          <Bush
            position={[-16.49, 0.79, -11.8]}
            rotation={[0, 0.6457718232379019, 0]}
          />
          <Bush
            position={[-17.57, 0.79, -11.54]}
            rotation={[0, 0.5934119456780722, 0]}
            scale={[0.89, 0.89, 0.89]}
          />
          <Bush position={[-11.53, 0.31, -6.65]} />
          <Bush
            position={[-20, 0.57, -5.13]}
            rotation={[1.5284227110232602e-17, 1.0995574287564276, 0.12217304763960309]}
            scale={[1.07, 1.07, 1.07]}
          />
          <Bush
            position={[-12.41, 0.44, -15.59]}
            rotation={[-0.08740211050093448, -0.5411440220781925, 0.6412271608610907]}
            scale={[0.86, 0.86, 0.86]}
          />
          <Bush
            position={[-13.06, 0.5, -11.61]}
            rotation={[0.0429349453837272, 0.7373921034452884, -0.6722481630627912]}
            scale={[0.86, 0.86, 0.86]}
          />
          <Bush
            position={[-17.02, 0.82, -7.85]}
            rotation={[0, -0.9250245035569946, 0]}
            scale={[1.04, 1.04, 1.04]}
          />
          <Bush
            position={[-10.11, 0.5, -15.56]}
            rotation={[0.5046108734207362, -0.25092860947807877, -0.13765895349201815]}
            scale={[0.9, 0.9, 0.9]}
          />
          <Bush
            position={[-14.54, 0.57, -4.79]}
            rotation={[0, 0.8552113334772216, 0]}
            scale={[1.14, 1.14, 1.14]}
          />
          <Sea
            receiveShadow={true}
            castShadow={true}
            frustumCulled={false}
            visible={true}
          />
          <Terrain />
          <Ruin position={[3.09, 0, 0]} />
          <Tower
            position={[4.27, 0, -5.11]}
            castShadow={true}
            receiveShadow={true}
            visible={false}
          />
          <Well position={[-15.68, 0, -9.87]} />
          <Tree position={[-17.64, 0.04, -16.86]} />
          <Tree
            position={[-19.13, 0.04, -5.34]}
            rotation={[3.141592653589793, -1.4137166941154073, 3.141592653589793]}
          />
          <Tree
            position={[-15.64, 0.04, -5.11]}
            rotation={[0, 0.4014257279586958, 0]}
          />
          <Tree
            position={[-15.59, 0.04, -14.74]}
            rotation={[0, -0.31415926535897937, 0]}
          />
          <Tree
            position={[-11.94, 0.04, -15.07]}
            rotation={[0, 0.767944870877505, 0]}
          />
          <Tree position={[-10.61, 0.04, -12.33]} />
          <Tree position={[-7.37, 0.04, -14.25]} />
          <Tree position={[-6.75, 0.04, -9.35]} />
          <ambientLight
            position={[0, 2.38, 0]}
            color={"#a2cfe6"}
            intensity={1.5}
          />
          <group>
            <directionalLight
              position={[5.47, 8.53, -7.3]}
              color={"#fffbe6"}
              intensity={5.2}
              castShadow
              shadow-mapSize={[1024, 1024]}
            >
              <orthographicCamera
                attach="shadow-camera"
                args={[-101.52, 63.34, 79.98, -106.7]}
                bottom={undefined}
                castShadow={false}
              />
            </directionalLight>

            <SoftShadows
              size={10}
              samples={15}
            />
          </group>
        </group>
      </ModelProvider>
      <group>
        <Box
          castShadow
          receiveShadow
          position={[-19.31, 1.46, -14.53]}
          rotation={[-0.0864966790500266, 0.49933382570999274, 0.17914803975557061]}
          scale={[1, 5.48, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-20.15, 0.42, -6.36]}
          rotation={[-0.2967059728390361, 0.575958653158129, 0.13962634015954645]}
          scale={[1, 3.97, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-23.13, 0.63, -8.93]}
          rotation={[-0.29884536543998647, 0.5051832733151859, -0.003908279821035592]}
          scale={[1, 1, 2.76]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-12.61, 0.58, -14.53]}
          rotation={[-0.17453292519943298, -0.5759586531581289, 0]}
          scale={[1, 1.47, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-10.69, 0.37, -17.43]}
          rotation={[-0.12133786189145214, -0.36664834239864874, 0.0022783475322360382]}
          scale={[1, 1, 4.39]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-12.07, 0.43, -5.94]}
          rotation={[0.2916132371187334, -0.32765957997180295, 0.23095978090631877]}
          scale={[1, 1.7, 1]} frustumCulled={false}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-14, 0.1, -4.06]}
          rotation={[-0.7221608959195684, 0.5506751742763274, 0.34838266146910185]}
          scale={[2.84, 1, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-19.25, 0.75, -13.62]}
          scale={[1.28, 1.98, 0.2]}
          rotation={[-0.41824552104456886, 0.1916398383305512, 0.33189273618175974]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-17.9, 0.44, -14.53]}
          rotation={[2.146876219653779, -1.1030481149216427, 0.42914264888790665]}
          scale={[1.46, 1.3, 0.17]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-11.3, 0.44, -5.34]}
          rotation={[2.3292352795133846, -0.5425422646695444, 0.6706677025690871]}
          scale={[1.46, 1.05, 0.17]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-19.95, 0.65, -7.44]}
          scale={[1, 1.35, 0.17]}
          rotation={[0.5052484821651665, -0.24584225309259258, 0.13381433636404116]}
        >
          <meshPhysicalMaterial />
        </Box>
      </group>
    </>
  );
}
//a2cfe6
/*
  <Environment
            //preset="park"
            environmentIntensity={0.1}
          />
*/
