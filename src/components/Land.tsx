import { GrassStone1 } from "./models/GrassStone1";
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
            rotation={[
              -0.4928056372554789, 0.641417455211948, 0.004120902775179418,
            ]}
            scale={[1.12, 1.12, 1.12]}
          />
          <Bush position={[-12.04, 0.33, -4.49]} scale={[0.81, 0.81, 0.81]} />
          <Bush position={[-13.75, 0.41, -7.08]} scale={[1.06, 1.06, 1.06]} />
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
            rotation={[
              3.141592653589793, -0.4014257279586958, 3.141592653589793,
            ]}
            scale={[0.91, 0.91, 0.91]}
          /><Bush
            position={[-19.16, 0.57, -12.81]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-29.06, 0.57, -20.2]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-23.6, 0.57, -25.01]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-22.79, 0.4, -22.2]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-24.87, 0.57, -21.94]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-25.72, 0.45, -26.09]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-25.72, 0.57, -28.49]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-24.11, 0.57, -27.22]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.98, 0.98, 0.98]}
          /><Bush
            position={[-22.99, 0.57, -25.9]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.16, 1.16, 1.16]}
          /><Bush
            position={[-29.96, 0.57, -24.99]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.16, 1.16, 1.16]}
          /><Bush
            position={[-29.72, 0.57, -22.46]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.3, 1.3, 1.3]}
          /><Bush
            position={[-30.74, 0.57, -19.97]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.3, 1.3, 1.3]}
          /><Bush
            position={[-29.79, 0.57, -18.57]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.3, 1.3, 1.3]}
          /><Bush
            position={[-29.58, 0.57, -26.19]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[0.9, 0.9, 0.9]}
          /><Bush
            position={[-32.23, 0.57, -27.71]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.25, 1.25, 1.25]}
          /><Bush
            position={[-25.87, 0.88, -27.4]}
            rotation={[3.141592653589793, 1.1693705988362006, -3.141592653589793]}


            scale={[1.56, 1.56, 1.56]}
          /><Bush
            position={[-23.65, 0.5, -28.96]}
            rotation={[4.787992974268908e-17, 0.03490658503988616, 8.064362226550944e-18]}


            scale={[1.56, 1.56, 1.56]}
          /><Bush
            position={[-25.96, 0.5, -30.06]}
            rotation={[3.141592653589793, 1.0122909661567117, -3.141592653589793]}


            scale={[1.96, 1.96, 1.96]}
          /><Bush
            position={[-20.68, 0.57, -26.59]}
            rotation={[1.2773603941892003e-16, -1.1868238913561444, 1.2817014107225127e-16]}


            scale={[1.32, 1.32, 1.32]}
          /><Bush
            position={[-18.98, 0.57, -19.75]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-15.94, 0.57, -16.33]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-13.56, 0.57, -15.79]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-8.66, 0.57, -14.75]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-9.1, 0.57, -11.81]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-21.85, 0.57, -4.49]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-17.15, 0.57, -4.88]}
            rotation={[4.803354472255525e-17, 0.08726646259971639, 5.548948409624735e-18]}


            scale={[2.05, 2.05, 2.05]}
          /><Bush
            position={[-10.23, 0.57, -4.53]}
            rotation={[5.771844867740946e-17, -0.5934119456780722, 4.201109457646978e-17]}


            scale={[1.57, 1.57, 1.57]}
          />
          <Bush
            position={[-18.28, 0.57, -15.63]}
            rotation={[
              0.01106571110410394, 0.7534290972057655, -0.002182570916318906,
            ]}
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
            rotation={[
              1.5284227110232602e-17, 1.0995574287564276, 0.12217304763960309,
            ]}
            scale={[1.07, 1.07, 1.07]}
          />
          <Bush
            position={[-12.41, 0.44, -15.59]}
            rotation={[
              -0.08740211050093448, -0.5411440220781925, 0.6412271608610907,
            ]}
            scale={[0.86, 0.86, 0.86]}
          />
          <Bush
            position={[-13.06, 0.5, -11.61]}
            rotation={[
              0.0429349453837272, 0.7373921034452884, -0.6722481630627912,
            ]}
            scale={[0.86, 0.86, 0.86]}
          />
          <Bush
            position={[-17.02, 0.82, -7.85]}
            rotation={[0, -0.9250245035569946, 0]}
            scale={[1.04, 1.04, 1.04]}
          />
          <Bush
            position={[-10.11, 0.5, -15.56]}
            rotation={[
              0.5046108734207362, -0.25092860947807877, -0.13765895349201815,
            ]}
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
          <Ruin position={[-31, 0, -26.72]} rotation={[0, -0.31415926535897937, 0]} /><Ruin position={[-26.38, -1.09, -27.27]} rotation={[-0.19498820207907583, -0.7439910587470819, -0.4049144275513527]} /><Ruin position={[-30.72, -1.09, -20.75]} rotation={[0.6622826725849318, 0.553969585637884, -0.47624154168613797]} /><Ruin position={[-23.86, -1.09, -23.47]} rotation={[2.7038957312211864, -0.42758839394819154, 2.771260854976603]} /><Ruin position={[-24, -1.41, -26.07]} rotation={[2.225264167274902, -0.09260443933731737, -2.927006528931437]} /><Ruin position={[-30.6, -1.42, -24.52]} rotation={[2.2414354982672613, -0.3660457644719119, 2.5544342230107424]} />
          <Tower
            position={[-28.33, 0.46, -28.26]}
            castShadow={true}
            receiveShadow={true}
            visible={false} rotation={[-0.15707963267948966, -0.22689280275926285, 0]}
          />
          <Well position={[-15.68, 0, -9.87]} />
          <Tree position={[-17.64, 0.04, -16.86]} /><Tree position={[-25.22, 0.04, -28.96]} scale={[1.08, 1.08, 1.08]} rotation={[0, -1.553343034274955, 0]} /><Tree position={[-21.68, 0.04, -27.78]} scale={[1.08, 1.08, 1.08]} rotation={[0, 1.535889741755011, 0]} /><Tree position={[-20.16, 0.04, -20.17]} scale={[1.08, 1.08, 1.08]} rotation={[0, 1.535889741755011, 0]} /><Tree position={[-20.48, 0.04, -16.96]} scale={[1.08, 1.08, 1.08]} rotation={[0, 0.4886921905584136, 0]} /><Tree position={[-30.62, 0.04, -17.85]} scale={[1.08, 1.08, 1.08]} rotation={[0, 0.24434609527920736, 0]} /><Tree position={[-21.36, 0.04, -2.7]} scale={[1.19, 1.19, 1.19]} rotation={[0, -1.4311699866353498, 0]} /><Tree position={[-32.4, 0.04, -23.4]} scale={[1.08, 1.08, 1.08]} rotation={[3.141592653589793, -0.5934119456780722, 3.141592653589793]} /><Tree position={[-29.58, 0.04, -20.78]} scale={[1.08, 1.08, 1.08]} rotation={[0, -1.5707963267948966, 0]} /><Tree position={[-33.1, 0.04, -20.52]} scale={[1.08, 1.08, 1.08]} rotation={[0, -1.3264502315156905, 0]} /><Tree position={[-32.85, 0.04, -26.05]} scale={[1.08, 1.08, 1.08]} rotation={[3.141592653589793, -1.4137166941154073, 3.141592653589793]} /><Tree position={[-29.58, 0.04, -31.3]} scale={[1.08, 1.08, 1.08]} rotation={[0, -1.221730476396032, 0]} />
          <Tree
            position={[-19.13, 0.04, -5.34]}
            rotation={[
              3.141592653589793, -1.4137166941154073, 3.141592653589793,
            ]}
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
          <Tree position={[-6.98, 0.04, -11.55]} scale={[1.05, 1.05, 1.05]} rotation={[-3.141592653589793, 0.24434609527920592, -3.141592653589793]} />





          {" "}

          <ambientLight
            position={[0, 2.38, 0]}
            color={"#a2cfe6"}
            intensity={3}
          />
          <SoftShadows samples={20} size={200} />
          <group>
            <directionalLight
              position={[41.32, 77.72, -52.74]}
              color={"#fffbe6"}
              intensity={1.2}
              castShadow
              shadow-mapSize={[2048, 2048]}
            >
              <orthographicCamera
                attach="shadow-camera"
                args={[-10, 10, 10, -10]}
                far={130}
              />
            </directionalLight>
          </group>
        </group>
        <Environment preset="park" environmentIntensity={0.1} />
      </ModelProvider>
      <group>
        <Box
          castShadow
          receiveShadow
          position={[-19.31, 1.46, -14.53]}
          rotation={[
            -0.0864966790500266, 0.49933382570999274, 0.17914803975557061,
          ]}
          scale={[1, 5.48, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-20.15, 0.42, -6.36]}
          rotation={[
            -0.2967059728390361, 0.575958653158129, 0.13962634015954645,
          ]}
          scale={[1, 3.97, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-23.13, 0.63, -8.93]}
          rotation={[
            -0.29884536543998647, 0.5051832733151859, -0.003908279821035592,
          ]}
          scale={[1, 1, 2.76]}
        >
          <meshPhysicalMaterial />
        </Box><Box
          castShadow
          receiveShadow
          position={[-27.89, 0.09, -26.75]}
          rotation={[-0.27206561078047115, -0.03558191099515721, -0.25311477863584225]}


          scale={[1.95, 2.75, 0.22]} quaternion={[0, 0, 0, 0]}
        >
          <meshPhysicalMaterial />
        </Box><Box
          castShadow
          receiveShadow
          position={[-27.89, -0.01, -26.51]}
          rotation={[-0.10692885877974853, 0.16833561786252965, 0.30500120784906926]}


          scale={[1.53, 1.78, 0.22]} quaternion={[0, 0, 0, 0]}
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
          rotation={[
            -0.12133786189145214, -0.36664834239864874, 0.0022783475322360382,
          ]}
          scale={[1, 1, 4.39]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-12.07, 0.43, -5.94]}
          rotation={[
            0.2916132371187334, -0.32765957997180295, 0.23095978090631877,
          ]}
          scale={[1, 1.7, 1]}
          frustumCulled={false}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-14, 0.1, -4.06]}
          rotation={[
            -0.7221608959195684, 0.5506751742763274, 0.34838266146910185,
          ]}
          scale={[2.84, 1, 1]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-19.25, 0.75, -13.62]}
          scale={[1.28, 1.98, 0.2]}
          rotation={[
            -0.41824552104456886, 0.1916398383305512, 0.33189273618175974,
          ]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-17.9, 0.44, -14.53]}
          rotation={[
            2.146876219653779, -1.1030481149216427, 0.42914264888790665,
          ]}
          scale={[1.46, 1.3, 0.17]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-11.3, 0.44, -5.34]}
          rotation={[
            2.3292352795133846, -0.5425422646695444, 0.6706677025690871,
          ]}
          scale={[1.46, 1.05, 0.17]}
        >
          <meshPhysicalMaterial />
        </Box>
        <Box
          castShadow
          receiveShadow
          position={[-19.95, 0.65, -7.44]}
          scale={[1, 1.35, 0.17]}
          rotation={[
            0.5052484821651665, -0.24584225309259258, 0.13381433636404116,
          ]}
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
