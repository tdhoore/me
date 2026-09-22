import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/bunker.glb')
  const instances = useMemo(
    () => ({
      Cube: nodes.Cube027,
      Cube1: nodes.Cube029_1,
      Cube2: nodes.Cube029_2,
      Cube3: nodes.Cube030_1,
      Cube4: nodes.Cube030_2,
      Cube5: nodes.Cube031_1,
      Cube6: nodes.Cube031_2,
      Cube7: nodes.Cube032,
      Cube8: nodes.Cube033,
      Cube9: nodes.Cube034,
      Cube10: nodes.Cube035,
      Cube11: nodes.Cube036,
      Cube12: nodes.Cube038,
      Cylinder: nodes.Cylinder001,
      Icosphere: nodes.Icosphere157,
      Icosphere1: nodes.Icosphere158,
      Icosphere2: nodes.Icosphere159,
      Icosphere3: nodes.Icosphere160,
      Cylinder1: nodes.Cylinder002,
      Icosphere4: nodes.Icosphere161,
      Icosphere5: nodes.Icosphere162,
      Icosphere6: nodes.Icosphere163,
      Icosphere7: nodes.Icosphere164,
      Cylinder2: nodes.Cylinder003,
      Cylinder3: nodes.Cylinder005,
      Flower: nodes.flower,
      GNInstance: nodes.GN_Instance,
      Grass: nodes.grass,
      Grass1: nodes.grass001,
      GNInstance1: nodes.GN_Instance_3666,
      Ground: nodes.ground,
      Cylinder4: nodes.Cylinder,
      Cylinder5: nodes.Cylinder_1,
      GNInstance2: nodes.GN_Instance_5611,
      Lilly: nodes.lilly,
      NurbsPath: nodes.NurbsPath,
      GNInstance3: nodes.GN_Instance_5636,
      NurbsPath1: nodes.NurbsPath001,
      GNInstance4: nodes.GN_Instance_5637,
      NurbsPath2: nodes.NurbsPath002,
      GNInstance5: nodes.GN_Instance_5638,
      NurbsPath3: nodes.NurbsPath003,
      GNInstance6: nodes.GN_Instance_5639,
      NurbsPath4: nodes.NurbsPath004,
      GNInstance7: nodes.GN_Instance_5640,
      NurbsPath5: nodes.NurbsPath005,
      GNInstance8: nodes.GN_Instance_5641,
      NurbsPath6: nodes.NurbsPath006,
      GNInstance9: nodes.GN_Instance_5642,
      Rock: nodes.rock,
      Plane: nodes.Plane019,
      Plane1: nodes.Plane019_1,
      Tree: nodes.tree024,
      Water: nodes.water,
      GNInstance10: nodes.GN_Instance_5643,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <instances.Cube position={[1.339, -0.721, 0.835]} rotation={[0, -0.3, 0]} />
      <group position={[-3.86, -0.427, 2.213]} rotation={[0.128, -0.748, 0.075]}>
        <instances.Cube1 />
        <instances.Cube2 />
      </group>
      <group
        position={[-2.929, -0.179, -1.532]}
        rotation={[0.458, -1.213, 0.214]}
        scale={[0.532, 0.972, 0.529]}>
        <instances.Cube3 />
        <instances.Cube4 />
      </group>
      <group
        position={[1.931, -0.396, -2.928]}
        rotation={[-3.03, -0.866, 3.034]}
        scale={[0.532, 0.972, 0.529]}>
        <instances.Cube5 />
        <instances.Cube6 />
      </group>
      <group
        position={[-4.529, 0.216, -0.223]}
        rotation={[-0.025, -0.923, -0.08]}
        scale={[0.999, 0.52, 1]}>
        <instances.Cube1 />
        <instances.Cube2 />
      </group>
      <instances.Cube7 position={[0.291, 0, -2.716]} scale={0.402} />
      <instances.Cube8
        position={[-0.565, 0.361, -2.025]}
        rotation={[-0.226, 0.638, 0.198]}
        scale={[0.059, 0.09, 0.032]}>
        <instances.Cube9
          position={[-0.366, 0.045, 0.936]}
          rotation={[0.133, 0.006, -0.004]}
          scale={[0.212, 0.489, 0.121]}
        />
        <instances.Cube10 position={[0.134, 0.04, 0.711]} scale={[0.08, 0.052, 0.148]} />
        <instances.Cube11 position={[0.319, 0.247, 0.572]} scale={[0.295, 0.086, 0.148]} />
      </instances.Cube8>
      <group
        position={[0.609, 0.41, -2.865]}
        rotation={[-3.054, -0.613, 3]}
        scale={[0.358, 0.663, 0.353]}>
        <instances.Cube5 />
        <instances.Cube6 />
      </group>
      <instances.Cube12 position={[0.291, 0.346, -2.405]} scale={[0.126, 0.213, 0.021]} />
      <instances.Cylinder
        position={[-0.559, 0.121, -2.036]}
        rotation={[-0.082, 0.202, 0.108]}
        scale={1.144}>
        <instances.Icosphere
          position={[0.231, 1.58, -0.004]}
          rotation={[0.117, 0.001, 0.085]}
          scale={0.057}
        />
        <instances.Icosphere1
          position={[-0.246, 1.552, -0.047]}
          rotation={[0.117, 0.001, 0.085]}
          scale={0.057}
        />
        <instances.Icosphere2
          position={[0.231, 1.357, -0.01]}
          rotation={[0.095, -0.001, -0.022]}
          scale={0.057}
        />
        <instances.Icosphere3
          position={[-0.245, 1.379, -0.043]}
          rotation={[0.085, 0, 0.08]}
          scale={0.057}
        />
      </instances.Cylinder>
      <instances.Cylinder1 position={[-0.252, 1.361, -3.993]} rotation={[0.008, -0.121, 0.094]}>
        <instances.Icosphere4
          position={[0.231, 1.58, -0.004]}
          rotation={[0.117, 0.001, 0.085]}
          scale={0.057}
        />
        <instances.Icosphere5
          position={[-0.246, 1.552, -0.047]}
          rotation={[0.117, 0.001, 0.085]}
          scale={0.057}
        />
        <instances.Icosphere6
          position={[0.231, 1.357, -0.01]}
          rotation={[0.095, -0.001, -0.022]}
          scale={0.057}
        />
        <instances.Icosphere7
          position={[-0.245, 1.379, -0.043]}
          rotation={[0.085, 0, 0.08]}
          scale={0.057}
        />
      </instances.Cylinder1>
      <instances.Cylinder2
        position={[-0.587, 1.424, -2.127]}
        rotation={[-0.061, -0.282, 0.095]}
        scale={[0.066, 0.089, 0.066]}
      />
      <instances.Cylinder2
        position={[-0.697, 1.408, -2.01]}
        rotation={[2.866, -1.123, 2.923]}
        scale={[0.066, 0.089, 0.066]}
      />
      <instances.Cylinder3
        position={[0.291, 0.346, -2.368]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.052, 0.004, 0.052]}
      />
      <instances.Flower position={[0, -1, 0]} />
      <instances.Grass
        position={[0, -1, 0]}
        rotation={[0.779, -0.749, -0.997]}
        scale={[0.07, 0.028, 0.006]}
      />
      <instances.Grass1
        position={[0, -1, 0]}
        rotation={[0.779, -0.749, -0.997]}
        scale={[0.07, 0.028, 0.006]}
      />
      <instances.Ground />
      <group position={[-0.77, 0.648, -3.616]}>
        <instances.Cylinder4 />
        <instances.Cylinder5 />
      </group>
      <group position={[-0.163, -0.043, 2.687]}>
        <instances.GNInstance2
          position={[0.185, 0, -1.262]}
          rotation={[0, -0.152, 0]}
          scale={0.051}
        />
        <instances.GNInstance2
          position={[0.649, 0, -1.082]}
          rotation={[0, -0.166, 0]}
          scale={0.065}
        />
        <instances.GNInstance2
          position={[0.836, 0, -1.021]}
          rotation={[0, 0.683, 0]}
          scale={0.047}
        />
        <instances.GNInstance2
          position={[-2.225, 0, 1.539]}
          rotation={[-Math.PI, 1.415, -Math.PI]}
          scale={0.055}
        />
        <instances.GNInstance2
          position={[-1.643, 0, -0.251]}
          rotation={[0, 0.8, 0]}
          scale={0.068}
        />
        <instances.GNInstance2
          position={[-1.506, 0, 0.726]}
          rotation={[-Math.PI, 1.044, -Math.PI]}
          scale={0.059}
        />
        <instances.GNInstance2
          position={[-1.267, 0, 2.304]}
          rotation={[0, -0.601, 0]}
          scale={0.069}
        />
        <instances.GNInstance2
          position={[-1.334, 0, 1.877]}
          rotation={[Math.PI, -1.252, Math.PI]}
          scale={0.06}
        />
        <instances.GNInstance2
          position={[-1.1, 0, 2.329]}
          rotation={[Math.PI, -0.686, Math.PI]}
          scale={0.067}
        />
        <instances.GNInstance2
          position={[-1.034, 0, 1.354]}
          rotation={[0, -0.603, 0]}
          scale={0.047}
        />
        <instances.GNInstance2
          position={[-0.878, 0, 0.015]}
          rotation={[0, -0.511, 0]}
          scale={0.05}
        />
        <instances.GNInstance2
          position={[-0.535, 0, 1.972]}
          rotation={[0, 0.249, 0]}
          scale={0.048}
        />
        <instances.GNInstance2
          position={[-0.517, 0, 1.256]}
          rotation={[0, 0.509, 0]}
          scale={0.066}
        />
        <instances.GNInstance2
          position={[0.246, 0, 2.122]}
          rotation={[Math.PI, -1.216, Math.PI]}
          scale={0.057}
        />
        <instances.GNInstance2
          position={[-0.01, 0, 2.144]}
          rotation={[-Math.PI, 0.153, -Math.PI]}
          scale={0.069}
        />
        <instances.GNInstance2 position={[-0.377, 0, 0.755]} rotation={[0, -1, 0]} scale={0.047} />
        <instances.GNInstance2
          position={[1.092, 0, 0.605]}
          rotation={[Math.PI, -0.419, Math.PI]}
          scale={0.048}
        />
        <instances.GNInstance2
          position={[1.909, 0, 0.879]}
          rotation={[0, -0.25, 0]}
          scale={0.046}
        />
        <instances.GNInstance2
          position={[1.764, 0, 0.551]}
          rotation={[0, -1.299, 0]}
          scale={0.058}
        />
        <instances.GNInstance2
          position={[0.577, 0, -0.026]}
          rotation={[Math.PI, -1.115, Math.PI]}
          scale={0.065}
        />
        <instances.GNInstance2
          position={[-0.077, 0, -0.428]}
          rotation={[0, 1.04, 0]}
          scale={0.064}
        />
        <instances.GNInstance2
          position={[-0.243, 0, -0.717]}
          rotation={[0, -0.938, 0]}
          scale={0.049}
        />
        <instances.GNInstance2
          position={[0.088, 0, -1.124]}
          rotation={[Math.PI, -1.463, Math.PI]}
          scale={0.043}
        />
        <instances.GNInstance2
          position={[2.693, 0, 0.17]}
          rotation={[0, -0.497, 0]}
          scale={0.045}
        />
        <instances.GNInstance2
          position={[2.499, 0, 0.007]}
          rotation={[0, -0.644, 0]}
          scale={0.059}
        />
      </group>
      <instances.Lilly position={[0, -1, 0]} scale={0.071} />
      <instances.NurbsPath position={[-0.172, 2.988, -3.968]}>
        <instances.GNInstance3 />
      </instances.NurbsPath>
      <instances.NurbsPath1 position={[-0.172, 2.754, -3.968]}>
        <instances.GNInstance4 />
      </instances.NurbsPath1>
      <instances.NurbsPath2 position={[-0.63, 2.912, -4.068]}>
        <instances.GNInstance5 />
      </instances.NurbsPath2>
      <instances.NurbsPath3 position={[-0.63, 2.739, -4.068]}>
        <instances.GNInstance6 />
      </instances.NurbsPath3>
      <instances.NurbsPath4 position={[-0.233, 3.068, -4.093]} scale={1.144}>
        <instances.GNInstance7 />
      </instances.NurbsPath4>
      <instances.NurbsPath5 position={[-0.26, 3.073, -4.084]} scale={1.144}>
        <instances.GNInstance8 />
      </instances.NurbsPath5>
      <instances.NurbsPath6 position={[-0.297, 2.565, -3.826]}>
        <instances.GNInstance9 />
      </instances.NurbsPath6>
      <instances.Rock
        position={[-3.133, 0.293, 0.069]}
        rotation={[0.576, 0.211, -0.955]}
        scale={0.034}
      />
      <instances.Rock
        position={[-2.256, 0.036, -0.259]}
        rotation={[0.599, -0.542, -0.119]}
        scale={0.078}
      />
      <instances.Rock
        position={[-3.162, 0.32, 0.051]}
        rotation={[1.816, 1.185, -2.085]}
        scale={0.043}
      />
      <instances.Rock
        position={[-2.261, 0.078, -0.351]}
        rotation={[0.071, 0.607, -0.27]}
        scale={0.098}
      />
      <instances.Rock
        position={[-2.163, 0.069, -0.36]}
        rotation={[0.244, 0.831, 3.094]}
        scale={0.056}
      />
      <instances.Rock
        position={[-0.459, 0.15, -2.191]}
        rotation={[-0.222, -0.079, -0.42]}
        scale={0.098}
      />
      <instances.Rock
        position={[-0.522, 0.139, -2.048]}
        rotation={[0.672, -1.174, 0.388]}
        scale={0.078}
      />
      <instances.Rock
        position={[-0.354, 0.123, -2.149]}
        rotation={[-0.071, 0.132, 3.055]}
        scale={0.056}
      />
      <instances.Rock
        position={[1.013, 0.05, -2.292]}
        rotation={[0.193, -0.85, -0.551]}
        scale={0.098}
      />
      <instances.Rock
        position={[0.902, 0.038, -2.297]}
        rotation={[2.012, -0.082, 2.348]}
        scale={0.072}
      />
      <instances.Rock
        position={[2.283, 0.101, -2.288]}
        rotation={[1.308, -0.981, 0.616]}
        scale={0.098}
      />
      <instances.Rock
        position={[2.205, 0.052, -2.351]}
        rotation={[2.088, 0.553, 2.642]}
        scale={0.072}
      />
      <instances.Rock
        position={[1.754, 0.339, -2.726]}
        rotation={[-0.406, 0.125, -0.398]}
        scale={0.098}
      />
      <instances.Rock
        position={[1.728, 0.329, -2.667]}
        rotation={[1.313, -0.984, 0.647]}
        scale={0.073}
      />
      <instances.Rock
        position={[1.617, 1.594, -3.378]}
        rotation={[-0.706, -0.923, -1.049]}
        scale={0.098}
      />
      <instances.Rock
        position={[1.553, 1.585, -3.38]}
        rotation={[2.501, -0.461, 2.205]}
        scale={0.073}
      />
      <instances.Rock
        position={[0.138, 1.498, -3.86]}
        rotation={[-2.718, -0.313, 2.828]}
        scale={0.098}
      />
      <instances.Rock
        position={[0.151, 1.489, -3.923]}
        rotation={[2.093, 0.905, -2.82]}
        scale={0.073}
      />
      <instances.Rock
        position={[-2.692, 1.125, -2.129]}
        rotation={[0.652, -0.865, -0.469]}
        scale={0.073}
      />
      <instances.Rock
        position={[-2.773, 1.111, -2.044]}
        rotation={[0.99, 0.238, -0.999]}
        scale={0.07}
      />
      <instances.Rock
        position={[-1.37, 1.345, -3.768]}
        rotation={[-0.88, 1.148, 0.086]}
        scale={0.098}
      />
      <instances.Rock
        position={[-1.333, 1.342, -3.715]}
        rotation={[-0.299, 0.884, 0.102]}
        scale={0.073}
      />
      <instances.Rock
        position={[-1.364, 1.347, -3.6]}
        rotation={[0.854, 0.651, -1.325]}
        scale={0.07}
      />
      <instances.Rock
        position={[-3.594, 1.364, -0.627]}
        rotation={[3.101, 0.609, -3.038]}
        scale={0.098}
      />
      <instances.Rock
        position={[-3.52, 1.311, -0.672]}
        rotation={[1.386, 0.77, -1.596]}
        scale={0.078}
      />
      <instances.Rock
        position={[-3.583, 1.389, -0.763]}
        rotation={[3.074, 0.351, 0.454]}
        scale={0.056}
      />
      <instances.Rock
        position={[-3.511, 1.278, -0.571]}
        rotation={[-0.27, 0.294, -2.905]}
        scale={0.056}
      />
      <instances.Rock
        position={[-4.271, 1.303, 0.977]}
        rotation={[2.428, 1.341, -2.536]}
        scale={0.114}
      />
      <instances.Rock
        position={[-4.179, 1.239, 1.011]}
        rotation={[0.715, 0.361, -0.81]}
        scale={0.09}
      />
      <instances.Rock
        position={[-4.151, 1.302, 0.869]}
        rotation={[2.649, 1.092, 0.735]}
        scale={0.064}
      />
      <instances.Rock
        position={[-4.255, 1.225, 1.107]}
        rotation={[-0.515, -0.417, 3.087]}
        scale={0.064}
      />
      <instances.Rock
        position={[-4.247, 0.565, 1.41]}
        rotation={[3.138, 1.39, 2.681]}
        scale={0.114}
      />
      <instances.Rock
        position={[-4.145, 0.535, 1.456]}
        rotation={[0.301, 0.492, -0.627]}
        scale={0.09}
      />
      <instances.Rock
        position={[-4.13, 0.552, 1.3]}
        rotation={[2.738, 1.154, 0.262]}
        scale={0.064}
      />
      <instances.Rock
        position={[-3.484, 0.36, 1.967]}
        rotation={[0.416, 0.653, -1.114]}
        scale={0.114}
      />
      <instances.Rock
        position={[-3.467, 0.389, 2.116]}
        rotation={[0.003, -0.537, -0.913]}
        scale={0.09}
      />
      <instances.Rock
        position={[-3.337, 0.285, 2.026]}
        rotation={[0.059, 0.402, 1.692]}
        scale={0.064}
      />
      <instances.Rock
        position={[-0.972, 1.292, -4.478]}
        rotation={[-0.442, -0.417, -0.641]}
        scale={0.098}
      />
      <instances.Rock
        position={[-1.025, 1.283, -4.444]}
        rotation={[2.146, -0.879, 1.654]}
        scale={0.073}
      />
      <instances.Rock
        position={[-1.135, 1.256, -4.481]}
        rotation={[0.723, -0.444, 0.006]}
        scale={0.07}
      />
      <instances.Rock
        position={[0.209, -0.026, 1.076]}
        rotation={[1.468, -0.194, 0.792]}
        scale={0.072}
      />
      <instances.Rock
        position={[1.308, 0.048, 0.437]}
        rotation={[-0.537, -0.7, -0.818]}
        scale={0.098}
      />
      <instances.Rock
        position={[1.246, 0.039, 0.453]}
        rotation={[2.389, -0.671, 1.997]}
        scale={0.073}
      />
      <instances.Rock
        position={[1.154, 0.047, 0.383]}
        rotation={[0.866, -0.669, 0.274]}
        scale={0.07}
      />
      <instances.Rock
        position={[-2.727, -0.026, 2.538]}
        rotation={[1.468, -0.194, 0.792]}
        scale={0.072}
      />
      <instances.Rock
        position={[-2.384, -0.002, 2.398]}
        rotation={[-2.399, -1.047, -2.854]}
        scale={0.098}
      />
      <instances.Rock
        position={[-2.407, 0.003, 2.222]}
        rotation={[1.737, -0.195, -2.801]}
        scale={0.072}
      />
      <instances.Rock
        position={[-3.16, 0.207, 0.554]}
        rotation={[3.08, 0.332, 2.932]}
        scale={0.098}
      />
      <instances.Rock
        position={[-3.089, 0.164, 0.496]}
        rotation={[1.572, 1.066, -2.03]}
        scale={0.078}
      />
      <instances.Rock
        position={[-3.225, 0.197, 0.48]}
        rotation={[2.977, 0.093, 0.15]}
        scale={0.056}
      />
      <instances.Rock
        position={[-1.368, 1.153, -2.849]}
        rotation={[-0.235, -0.522, -0.978]}
        scale={0.098}
      />
      <instances.Rock
        position={[-1.533, 1.161, -2.91]}
        rotation={[0.476, -0.258, 0.135]}
        scale={0.07}
      />
      <instances.Rock
        position={[-2.139, 1.183, -2.576]}
        rotation={[-0.406, -0.907, -1.195]}
        scale={0.136}
      />
      <instances.Rock
        position={[-2.227, 1.18, -2.585]}
        rotation={[2.962, -0.464, 2.306]}
        scale={0.1}
      />
      <instances.Rock
        position={[-2.313, 1.2, -2.746]}
        rotation={[0.534, -0.64, 0.323]}
        scale={0.096}
      />
      <instances.Rock
        position={[-2.006, 1.131, -2.567]}
        rotation={[-0.609, -1.033, -1.279]}
        scale={0.071}
      />
      <instances.Rock
        position={[-2.206, 1.131, -2.479]}
        rotation={[0.348, 0.177, -0.425]}
        scale={0.071}
      />
      <instances.Rock
        position={[-3.496, 1.344, -0.771]}
        rotation={[2.647, -0.086, -2.482]}
        scale={0.064}
      />
      <instances.Rock
        position={[0.254, 1.462, -3.975]}
        rotation={[2.488, -0.185, 2.645]}
        scale={0.07}
      />
      <instances.Rock
        position={[-2.193, 0.133, -1.99]}
        rotation={[2.352, 1.09, -2.674]}
        scale={0.073}
      />
      <instances.Rock
        position={[-2.08, 0.135, -2.028]}
        rotation={[2.869, 0.015, 2.635]}
        scale={0.07}
      />
      <instances.Rock
        position={[-2.699, 1.148, -2.189]}
        rotation={[-0.078, 0.771, -0.533]}
        scale={0.098}
      />
      <instances.Rock
        position={[0.213, -0.016, 0.965]}
        rotation={[-0.074, 0.689, -0.478]}
        scale={0.098}
      />
      <instances.Rock
        position={[-2.722, -0.016, 2.427]}
        rotation={[-0.074, 0.689, -0.478]}
        scale={0.098}
      />
      <instances.Rock
        position={[-1.429, 1.148, -2.829]}
        rotation={[2.889, -0.863, 2.149]}
        scale={0.073}
      />
      <instances.Rock
        position={[-2.195, 0.148, -1.891]}
        rotation={[-2.675, -0.715, 2.91]}
        scale={0.098}
      />
      <group position={[4.356, 0.142, -3.535]} rotation={[0.126, -0.381, 0.074]} scale={0.543}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[3.616, 0.036, 2.484]} rotation={[2.386, -1.434, 2.283]} scale={0.419}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[1.636, 0.036, 5.445]} rotation={[-2.643, 1.382, 2.734]} scale={0.568}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[-3.734, 1.382, -0.766]} rotation={[0.334, -1.384, 0.39]} scale={0.481}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[4.843, 0.208, -1.897]} rotation={[-0.148, 1.212, 0.142]} scale={0.597}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[-1.522, 1.269, -3.999]} rotation={[3.075, -0.166, 3.068]} scale={0.575}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[0.91, 1.311, -5.03]} rotation={[-0.068, 1.204, 0.003]} scale={0.428}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[-5.24, 1.364, 1.389]} rotation={[0.116, 1.059, -0.161]} scale={0.569}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[-4.168, 0.304, 4.997]} rotation={[-0.218, -1.036, -0.335]} scale={0.594}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <instances.Tree
        position={[-2.738, 0.039, -0.278]}
        rotation={[0.367, -0.025, 0.293]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-2.505, -0.001, -0.327]}
        rotation={[0.185, 0.671, 0.201]}
        scale={[0.209, 0.226, 0.184]}
      />
      <group position={[-2.246, 0.039, -0.779]} rotation={[-0.092, 0.977, 0.08]} scale={0.597}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[-2.928, 0.267, 2.828]} rotation={[-0.134, -1.034, -0.329]} scale={0.597}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[3.29, 0.28, -2.12]} rotation={[-3.034, -0.569, -3.072]} scale={0.597}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <group position={[2.918, 0.001, 1.055]} rotation={[2.727, -1.409, 2.69]} scale={0.498}>
        <instances.Plane />
        <instances.Plane1 />
      </group>
      <instances.Tree
        position={[-2.543, 0.044, -0.189]}
        rotation={[0.157, 0.036, -0.015]}
        scale={[0.201, 0.124, 0.183]}
      />
      <instances.Tree
        position={[2.286, 0.094, -2.638]}
        rotation={[0.38, 0.256, 0.183]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[2.494, 0.054, -2.754]}
        rotation={[0.256, 0.965, 0.106]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[2.498, 0.099, -2.611]}
        rotation={[0.167, 0.333, -0.064]}
        scale={[0.201, 0.124, 0.183]}
      />
      <instances.Tree
        position={[-3.048, 0.094, 2.041]}
        rotation={[0.733, 1.005, -0.366]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-2.999, 0.054, 1.808]}
        rotation={[2.634, 1.27, -2.336]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[-2.888, 0.099, 1.899]}
        rotation={[0.406, 1.163, -0.385]}
        scale={[0.201, 0.159, 0.184]}
      />
      <instances.Tree
        position={[-3.27, 0.149, 1.698]}
        rotation={[1.998, 1.414, -1.496]}
        scale={[0.22, 0.224, 0.199]}
      />
      <instances.Tree
        position={[-3.25, 0.15, 1.504]}
        rotation={[1.9, 1.062, -1.794]}
        scale={[0.184, 0.179, 0.241]}
      />
      <instances.Tree
        position={[-3.43, 0.234, 1.568]}
        rotation={[1.462, 1.2, -1.763]}
        scale={[0.238, 0.198, 0.217]}
      />
      <instances.Tree
        position={[-2.905, 0.027, 2.196]}
        rotation={[0.172, 0.573, 0.223]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[-1.2, 0.174, -1.922]}
        rotation={[2.893, 0.924, -2.592]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-1.373, 0.138, -2.087]}
        rotation={[-3.076, 0.253, -2.932]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[-1.248, 0.21, -2.128]}
        rotation={[-3.04, 0.888, 3.105]}
        scale={[0.201, 0.159, 0.184]}
      />
      <instances.Tree
        position={[-0.987, 0.146, -1.979]}
        rotation={[-3.036, 1.494, -2.761]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[1.534, 0.013, 0.428]}
        rotation={[2.893, 0.924, -2.592]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[1.361, -0.023, 0.264]}
        rotation={[-3.076, 0.253, -2.932]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[1.486, 0.049, 0.223]}
        rotation={[-3.04, 0.888, 3.105]}
        scale={[0.201, 0.159, 0.184]}
      />
      <instances.Tree
        position={[1.747, -0.015, 0.372]}
        rotation={[-3.036, 1.494, -2.761]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[1.952, -0.041, -2.276]}
        rotation={[2.992, -0.07, -2.803]}
        scale={[0.243, 0.264, 0.215]}
      />
      <instances.Tree
        position={[1.746, -0.073, -2.223]}
        rotation={[-3.054, -0.755, -2.855]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[1.775, 0.084, -2.337]}
        rotation={[-3.077, -0.119, -3.092]}
        scale={[0.178, 0.142, 0.164]}
      />
      <instances.Tree
        position={[2.03, -0.024, -2.468]}
        rotation={[-3.132, 0.484, -2.66]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[0.841, 1.423, -4.526]}
        rotation={[0.353, -0.559, 0.4]}
        scale={[0.229, 0.249, 0.203]}
      />
      <instances.Tree
        position={[0.386, 1.335, -4.597]}
        rotation={[2.829, 0.731, -2.521]}
        scale={[0.268, 0.291, 0.237]}
      />
      <instances.Tree
        position={[0.207, 1.318, -4.714]}
        rotation={[-3.105, 0.086, -2.822]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[0.326, 1.462, -4.772]}
        rotation={[3.121, 0.719, -3.024]}
        scale={[0.178, 0.142, 0.164]}
      />
      <instances.Tree
        position={[0.582, 1.331, -4.667]}
        rotation={[2.782, 1.305, -2.302]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[0.409, 1.303, -4.373]}
        rotation={[-0.075, -0.275, 0.42]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-1.788, 1.2, -3.458]}
        rotation={[2.853, -0.633, -2.907]}
        scale={[0.268, 0.291, 0.237]}
      />
      <instances.Tree
        position={[-1.931, 1.218, -3.312]}
        rotation={[-2.995, -1.321, -2.676]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[-2.004, 1.254, -3.445]}
        rotation={[3.121, -0.689, -3.051]}
        scale={[0.178, 0.219, 0.164]}
      />
      <instances.Tree
        position={[-1.562, 1.204, -3.457]}
        rotation={[-0.168, 1.127, 0.592]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-3.992, 1.302, 0.012]}
        rotation={[2.867, 0.513, -2.584]}
        scale={[0.268, 0.291, 0.237]}
      />
      <instances.Tree
        position={[-4.18, 1.323, -0.066]}
        rotation={[-3.103, -0.137, -2.8]}
        scale={[0.185, 0.201, 0.164]}
      />
      <instances.Tree
        position={[-4.084, 1.357, -0.184]}
        rotation={[3.116, 0.496, -3.014]}
        scale={[0.178, 0.219, 0.164]}
      />
      <instances.Tree
        position={[-3.909, 1.304, 0.222]}
        rotation={[-0.096, -0.131, 0.211]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[-4.416, 1.35, 0.224]}
        rotation={[2.867, 0.513, -2.584]}
        scale={[0.303, 0.329, 0.268]}
      />
      <instances.Tree
        position={[-2.849, 1.189, -2.613]}
        rotation={[2.684, -1.025, -3.131]}
        scale={[0.321, 0.348, 0.284]}
      />
      <instances.Tree
        position={[-2.935, 1.21, -2.384]}
        rotation={[-0.21, -1.396, 0.116]}
        scale={[0.222, 0.241, 0.196]}
      />
      <instances.Tree
        position={[-3.08, 1.253, -2.494]}
        rotation={[3.107, -1.108, -3.069]}
        scale={[0.214, 0.262, 0.196]}
      />
      <instances.Tree
        position={[-3.039, 0.417, -0.8]}
        rotation={[0.144, 0.033, 0.095]}
        scale={[0.17, 0.184, 0.15]}
      />
      <instances.Tree
        position={[-2.834, 0.339, -0.699]}
        rotation={[0.269, 0.262, 0.094]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[-2.954, 0.378, -0.585]}
        rotation={[0.272, -0.666, -0.015]}
        scale={[0.145, 0.129, 0.133]}
      />
      <instances.Tree
        position={[-3.272, 0.347, -0.009]}
        rotation={[1.419, 1.077, -0.798]}
        scale={[0.122, 0.133, 0.108]}
      />
      <instances.Tree
        position={[-3.17, 0.335, -0.15]}
        rotation={[1.965, 1.064, -1.263]}
        scale={[0.15, 0.163, 0.133]}
      />
      <instances.Tree
        position={[-3.117, 0.292, -0.048]}
        rotation={[0.908, 0.456, -0.574]}
        scale={[0.104, 0.093, 0.096]}
      />
      <instances.Tree
        position={[-3.324, 0.404, -0.184]}
        rotation={[2.351, 0.456, -2.158]}
        scale={[0.19, 0.229, 0.168]}
      />
      <instances.Tree
        position={[0.638, 0.81, -2.634]}
        rotation={[3.073, -0.028, -2.633]}
        scale={[0.273, 0.297, 0.242]}
      />
      <instances.Tree
        position={[0.4, 0.809, -2.591]}
        rotation={[-2.853, -0.664, -2.658]}
        scale={[0.209, 0.226, 0.184]}
      />
      <instances.Tree
        position={[0.452, 0.882, -2.711]}
        rotation={[-2.993, -0.042, -2.935]}
        scale={[0.201, 0.124, 0.183]}
      />
      <instances.Tree
        position={[-0.601, 0.14, -1.965]}
        rotation={[2.752, 0.314, -2.697]}
        scale={[0.107, 0.116, 0.095]}
      />
      <instances.Tree
        position={[-0.678, 0.138, -1.964]}
        rotation={[-3.019, 0.816, -2.877]}
        scale={[0.12, 0.131, 0.106]}
      />
      <instances.Tree
        position={[-0.447, 0.125, -2.146]}
        rotation={[3.05, 0.867, -2.573]}
        scale={[0.123, 0.134, 0.109]}
      />
      <instances.Water position={[-0.566, -0.045, 3.374]} scale={4.515} />
      <group position={[-0.163, -0.082, 2.687]}>
        <instances.GNInstance10
          position={[1.366, 0, -0.844]}
          rotation={[1.624, -1.04, 0.621]}
          scale={[0.078, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.328, 0, -1.293]}
          rotation={[0.829, -0.716, -1.446]}
          scale={[0.063, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.246, 0, -1.272]}
          rotation={[0.315, 0.074, -1.342]}
          scale={[0.048, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.028, 0, -1.242]}
          rotation={[0.51, -0.005, -1.892]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[0.932, 0, -0.958]}
          rotation={[0.457, -0.323, -1.743]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[0.627, 0.001, -1.122]}
          rotation={[2.631, -0.153, 1.739]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[0.611, 0.003, -1.185]}
          rotation={[0.913, 0.752, -1.766]}
          scale={[0.092, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[1.235, 0, -0.857]}
          rotation={[2.625, -0.318, 1.214]}
          scale={[0.092, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[1.015, 0, -0.951]}
          rotation={[2.587, -0.297, 1.929]}
          scale={[0.082, 0.01, 0.004]}
        />
        <instances.GNInstance10
          position={[1.049, 0, -0.893]}
          rotation={[1.787, 0.932, -2.889]}
          scale={[0.089, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.424, 0, 0.561]}
          rotation={[0.335, -0.306, -1.305]}
          scale={[0.091, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.394, 0, 0.468]}
          rotation={[2.604, -0.039, 1.227]}
          scale={[0.059, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.184, 0, 0.215]}
          rotation={[2.813, 0.184, 1.77]}
          scale={[0.07, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.148, 0, 0.173]}
          rotation={[2.366, -0.574, 1.413]}
          scale={[0.072, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.197, 0, 0.155]}
          rotation={[0.617, -0.288, -1.677]}
          scale={[0.079, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.943, 0, 0.01]}
          rotation={[0.572, 0.065, -1.327]}
          scale={[0.089, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.864, 0, -0.073]}
          rotation={[2.732, -0.108, 1.874]}
          scale={[0.044, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.678, 0, -0.25]}
          rotation={[2.532, -0.542, 1.771]}
          scale={[0.05, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.664, 0, -0.289]}
          rotation={[0.554, -0.113, -1.325]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.612, 0, -0.419]}
          rotation={[1.133, -0.544, -0.069]}
          scale={[0.079, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.542, 0, -0.554]}
          rotation={[2.275, -0.729, 1.331]}
          scale={[0.074, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.504, 0, -0.656]}
          rotation={[0.499, -0.317, -1.318]}
          scale={[0.038, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.472, 0, -0.862]}
          rotation={[2.065, 0.648, -3.098]}
          scale={[0.064, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.428, 0, -0.949]}
          rotation={[0.748, 0.682, -1.683]}
          scale={[0.044, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.352, 0, -1.071]}
          rotation={[1.623, -0.907, 0.51]}
          scale={[0.059, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.364, 0, 0.596]}
          rotation={[2.18, -0.945, 1.178]}
          scale={[0.09, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.315, 0, 0.526]}
          rotation={[2.601, 0.27, 1.859]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.222, 0, 0.397]}
          rotation={[0.435, -0.094, -1.204]}
          scale={[0.063, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.938, 0, 0.059]}
          rotation={[2.552, 0.358, 1.406]}
          scale={[0.075, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.821, 0, 0.003]}
          rotation={[1.06, -0.704, 0.087]}
          scale={[0.087, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.666, 0, -0.126]}
          rotation={[2.711, 0.471, 1.759]}
          scale={[0.089, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.679, 0, -0.175]}
          rotation={[1.708, 0.843, -2.929]}
          scale={[0.057, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.609, 0, -0.249]}
          rotation={[2.487, -0.358, 1.784]}
          scale={[0.072, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.553, 0, -0.379]}
          rotation={[1.101, 0.809, -2.121]}
          scale={[0.049, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.557, 0, -0.396]}
          rotation={[1.079, -0.964, 0.102]}
          scale={[0.06, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.497, 0, -0.622]}
          rotation={[2.658, -0.333, 1.692]}
          scale={[0.083, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.381, 0, -0.85]}
          rotation={[1.788, -0.886, 0.759]}
          scale={[0.072, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.24, 0, -1.154]}
          rotation={[0.705, 0.495, -1.617]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.229, 0, 0.504]}
          rotation={[2.175, -0.698, 1.324]}
          scale={[0.042, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.252, 0, 0.467]}
          rotation={[0.742, 0.527, -1.44]}
          scale={[0.091, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.029, 0, 0.267]}
          rotation={[2.723, 0.117, 1.801]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.816, 0, 0.071]}
          rotation={[1.748, -0.94, -0.35]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.563, 0, -0.152]}
          rotation={[2.501, -0.499, 1.73]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.518, 0, -0.276]}
          rotation={[2.612, 0.213, 1.285]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.484, 0, -0.44]}
          rotation={[0.754, 0.591, -1.727]}
          scale={[0.06, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.399, 0, -0.695]}
          rotation={[1.107, -0.563, -0.17]}
          scale={[0.081, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.222, 0, -1.097]}
          rotation={[1.803, -0.794, 0.902]}
          scale={[0.064, 0.007, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.219, 0, -1.118]}
          rotation={[0.52, 0.118, -1.918]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.503, 0, 0.933]}
          rotation={[2.727, -0.065, 1.775]}
          scale={[0.065, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.38, 0, 0.784]}
          rotation={[2.649, 0.016, 1.299]}
          scale={[0.09, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.209, 0, 0.581]}
          rotation={[1.739, 0.935, 2.47]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.148, 0, 0.501]}
          rotation={[2.113, -0.756, 1.035]}
          scale={[0.091, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.083, 0, 0.473]}
          rotation={[2.565, -0.369, 1.628]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.992, 0, 0.354]}
          rotation={[1.87, -0.851, -0.21]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.67, 0, 0.095]}
          rotation={[1.13, 0.881, -3.13]}
          scale={[0.047, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.701, 0, 0.08]}
          rotation={[2.039, 0.533, 3.019]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.511, 0, -0.137]}
          rotation={[2.512, -0.38, 1.832]}
          scale={[0.055, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.455, 0, -0.2]}
          rotation={[1.601, -0.927, -0.424]}
          scale={[0.047, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.492, 0, -0.198]}
          rotation={[0.405, 0.105, -1.318]}
          scale={[0.039, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.45, 0, -0.332]}
          rotation={[1.95, 0.782, -2.962]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.415, 0, -0.487]}
          rotation={[2.598, 0.066, 1.325]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.184, 0, -1.136]}
          rotation={[0.496, 0.693, -1.496]}
          scale={[0.075, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.44, 0, 0.895]}
          rotation={[0.664, -0.493, -1.54]}
          scale={[0.036, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.332, 0, 0.821]}
          rotation={[0.576, -0.209, -1.82]}
          scale={[0.077, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.126, 0, 0.578]}
          rotation={[0.607, 0.31, -1.422]}
          scale={[0.091, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.993, 0, 0.51]}
          rotation={[1.093, -0.919, 0.109]}
          scale={[0.097, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.99, 0, 0.423]}
          rotation={[0.69, 0.39, -1.373]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.828, 0, 0.336]}
          rotation={[0.489, 0.038, -1.956]}
          scale={[0.084, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.826, 0, 0.288]}
          rotation={[0.567, 0.304, -1.251]}
          scale={[0.062, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.78, 0, 0.251]}
          rotation={[1.615, -0.945, -0.438]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.655, 0, 0.168]}
          rotation={[2.013, 0.92, -3.071]}
          scale={[0.036, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.449, 0, -0.138]}
          rotation={[0.344, -0.088, -1.343]}
          scale={[0.097, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.387, 0, -0.384]}
          rotation={[0.408, -0.071, -1.261]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.236, 0, -0.916]}
          rotation={[1.766, 1.02, -2.699]}
          scale={[0.058, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.659, 0, 1.292]}
          rotation={[2.509, 0.706, 1.622]}
          scale={[0.096, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-2.634, 0, 1.19]}
          rotation={[2.405, -0.843, 1.493]}
          scale={[0.049, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.527, 0, 1.05]}
          rotation={[2.741, -0.038, 1.843]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.999, 0, 0.604]}
          rotation={[1.092, -0.901, 0.068]}
          scale={[0.061, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.927, 0, 0.556]}
          rotation={[2.697, 0.07, 1.816]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.674, 0, 0.232]}
          rotation={[0.637, 0.532, -1.582]}
          scale={[0.076, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.617, 0, 0.158]}
          rotation={[0.441, 0.297, -1.848]}
          scale={[0.061, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.336, 0, -0.29]}
          rotation={[0.82, 0.985, -1.758]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.324, 0, -0.54]}
          rotation={[2.688, -0.066, 1.858]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.321, 0, -0.636]}
          rotation={[0.563, 0.138, -1.28]}
          scale={[0.051, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[-1.155, 0, -0.95]}
          rotation={[2.611, -0.026, 1.876]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[-1.076, 0, -1.119]}
          rotation={[2.621, -0.191, 1.972]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.605, 0, 1.291]}
          rotation={[1.308, -0.81, 0.088]}
          scale={[0.04, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.407, 0, 1.071]}
          rotation={[2.506, -0.428, 1.603]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[-2.304, 0, 0.932]}
          rotation={[2.685, -0.195, 1.797]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-2.221, 0, 0.901]}
          rotation={[2.307, -0.589, 1.418]}
          scale={[0.064, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[-2.056, 0, 0.762]}
          rotation={[0.442, 0.028, -1.227]}
          scale={[0.042, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.978, 0, 0.656]}
          rotation={[1.103, -0.89, 0.025]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.576, 0, 0.139]}
          rotation={[1.731, 0.926, -2.77]}
          scale={[0.074, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[-1.409, 0, -0.041]}
          rotation={[1.41, -0.978, -0.744]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-1.232, 0, -0.741]}
          rotation={[2.61, -0.085, 1.819]}
          scale={[0.04, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[-0.985, 0, -1.128]}
          rotation={[2.698, 0.072, 1.327]}
          scale={[0.077, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[3.214, 0, 0.472]}
          rotation={[2.023, 0.815, -3.011]}
          scale={[0.068, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[3.248, 0, 0.329]}
          rotation={[0.481, -0.002, -1.19]}
          scale={[0.062, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[3.147, 0, 0.3]}
          rotation={[1.778, -0.893, 0.885]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[3.088, 0, 0.226]}
          rotation={[0.575, -0.207, -1.74]}
          scale={[0.061, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[3.037, 0, 0.149]}
          rotation={[0.674, -0.584, -1.514]}
          scale={[0.057, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[2.903, 0, 0.133]}
          rotation={[2.3, -0.675, 1.25]}
          scale={[0.044, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.746, 0, -0.008]}
          rotation={[1.692, 0.861, -2.67]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[2.736, 0, 0.056]}
          rotation={[1.606, 0.987, 2.598]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.588, 0, -0.131]}
          rotation={[2.572, -0.097, 1.731]}
          scale={[0.048, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.644, 0, -0.062]}
          rotation={[0.648, 0.448, -1.612]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.366, 0, -0.176]}
          rotation={[1.17, -0.891, 0.13]}
          scale={[0.039, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.45, 0, -0.218]}
          rotation={[2.549, -0.358, 1.822]}
          scale={[0.061, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[2.276, 0, -0.311]}
          rotation={[1.271, -1.006, 0.31]}
          scale={[0.056, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[2.285, 0, -0.236]}
          rotation={[1.682, -0.825, 0.549]}
          scale={[0.065, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.232, 0, -0.335]}
          rotation={[1.421, 0.858, -2.269]}
          scale={[0.076, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[2.075, 0, -0.311]}
          rotation={[0.417, -0.19, -1.356]}
          scale={[0.036, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[1.977, 0, -0.357]}
          rotation={[1.687, -0.823, 0.574]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[1.877, 0, -0.353]}
          rotation={[0.479, 0.371, -1.889]}
          scale={[0.071, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[1.913, 0, -0.406]}
          rotation={[2.386, -0.504, 1.666]}
          scale={[0.047, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[1.772, 0, -0.291]}
          rotation={[1.981, 0.861, -3.089]}
          scale={[0.091, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[1.694, 0, -0.374]}
          rotation={[2.679, 0.249, 1.853]}
          scale={[0.073, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[1.562, 0, -0.355]}
          rotation={[1.8, 0.912, 2.441]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[1.548, 0, -0.366]}
          rotation={[1.94, -1.029, 0.927]}
          scale={[0.08, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.43, 0, -0.389]}
          rotation={[2.68, -0.258, 1.265]}
          scale={[0.085, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[1.395, 0, -0.431]}
          rotation={[1.07, 0.752, -1.978]}
          scale={[0.05, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[1.152, 0, -0.485]}
          rotation={[0.731, -0.546, -1.637]}
          scale={[0.079, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.063, 0, -0.533]}
          rotation={[1.423, -0.853, 0.446]}
          scale={[0.081, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.105, 0, -0.486]}
          rotation={[0.398, 0.04, -1.358]}
          scale={[0.074, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.049, 0, -0.63]}
          rotation={[1.577, -0.771, 0.569]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[0.609, 0.001, -0.873]}
          rotation={[0.465, -0.084, -1.188]}
          scale={[0.058, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[0.883, 0, -0.709]}
          rotation={[2.588, -0.542, 1.665]}
          scale={[0.097, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[0.799, 0, -0.716]}
          rotation={[2.024, -0.863, -0.062]}
          scale={[0.072, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[0.596, 0.001, -0.893]}
          rotation={[2.668, 0.008, 1.958]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[0.68, 0, -0.893]}
          rotation={[0.344, -0.539, -1.483]}
          scale={[0.053, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[0.585, 0.006, -0.997]}
          rotation={[2.746, 0.046, 1.781]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[0.713, 0.002, -0.919]}
          rotation={[0.807, 0.556, -1.54]}
          scale={[0.058, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[0.606, 0.003, -1.085]}
          rotation={[0.871, 0.989, -1.82]}
          scale={[0.087, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[0.692, 0.001, -1.023]}
          rotation={[2.793, 0.303, 1.81]}
          scale={[0.074, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[0.389, 0.017, -1.2]}
          rotation={[2.617, 0.002, 1.766]}
          scale={[0.045, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[0.485, 0.01, -1.15]}
          rotation={[2.666, -0.24, 1.196]}
          scale={[0.071, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[3.196, 0, 0.64]}
          rotation={[1.527, -0.908, 0.43]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[3.151, 0, 0.153]}
          rotation={[2.107, 0.856, 1.941]}
          scale={[0.06, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[3.064, 0, 0.085]}
          rotation={[1.484, -0.926, 0.323]}
          scale={[0.052, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.943, 0, 0.054]}
          rotation={[1.453, -0.939, -0.573]}
          scale={[0.087, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[2.83, 0, -0.049]}
          rotation={[2.729, -0.541, 1.749]}
          scale={[0.075, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[2.557, 0, -0.182]}
          rotation={[2.776, 0.142, 1.895]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.551, 0, -0.199]}
          rotation={[0.468, 0.196, -1.261]}
          scale={[0.049, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.446, 0, -0.325]}
          rotation={[0.887, -0.759, -1.243]}
          scale={[0.036, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[2.494, 0, -0.319]}
          rotation={[0.444, -0.15, -1.816]}
          scale={[0.096, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[2.392, 0, -0.364]}
          rotation={[1.075, -0.882, -1.019]}
          scale={[0.047, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[2.292, 0, -0.454]}
          rotation={[0.885, 0.704, -1.681]}
          scale={[0.054, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.303, 0, -0.396]}
          rotation={[1.953, -0.811, -0.041]}
          scale={[0.054, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.157, 0, -0.477]}
          rotation={[0.579, 0.556, -1.327]}
          scale={[0.084, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[2.104, 0, -0.483]}
          rotation={[2.156, -0.761, 1.171]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.033, 0, -0.482]}
          rotation={[2.571, -0.285, 1.681]}
          scale={[0.051, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[1.872, 0, -0.447]}
          rotation={[0.506, 0.465, -1.489]}
          scale={[0.04, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[1.824, 0, -0.437]}
          rotation={[2.683, 0.012, 1.877]}
          scale={[0.079, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.6, 0, -0.423]}
          rotation={[0.485, -0.1, -1.363]}
          scale={[0.056, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[1.428, 0, -0.486]}
          rotation={[1.255, -0.925, -0.802]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[1.291, 0, -0.603]}
          rotation={[0.556, 0.073, -1.19]}
          scale={[0.085, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[1.074, 0, -0.716]}
          rotation={[2.083, 0.445, 3.01]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[0.959, 0, -0.807]}
          rotation={[0.513, 0.331, -1.332]}
          scale={[0.094, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[1.035, 0, -0.746]}
          rotation={[1.404, -0.975, -0.739]}
          scale={[0.071, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[1.14, 0, -0.781]}
          rotation={[2.637, -0.162, 1.822]}
          scale={[0.089, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[1.172, 0, -0.745]}
          rotation={[1.709, -1.014, -0.365]}
          scale={[0.054, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[0.733, 0, -0.985]}
          rotation={[0.497, 0.319, -1.923]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[0.767, 0, -0.957]}
          rotation={[0.358, -0.205, -1.307]}
          scale={[0.081, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[0.897, 0, -0.891]}
          rotation={[0.295, -0.419, -1.44]}
          scale={[0.07, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[3.232, 0, 0.701]}
          rotation={[1.612, -0.821, 0.565]}
          scale={[0.085, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[3.268, 0, 0.578]}
          rotation={[0.955, 0.715, -1.828]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[3.327, 0, 0.505]}
          rotation={[2.629, -0.252, 1.184]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[3.245, 0, 0.168]}
          rotation={[1.555, -0.853, 0.352]}
          scale={[0.046, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.776, 0, -0.187]}
          rotation={[1.724, -0.93, 0.765]}
          scale={[0.036, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[2.624, 0, -0.287]}
          rotation={[2.742, -0.037, 1.805]}
          scale={[0.037, 0.004, 0.002]}
        />
        <instances.GNInstance10
          position={[2.639, 0, -0.344]}
          rotation={[1.211, -0.814, 0.133]}
          scale={[0.05, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.422, 0, -0.494]}
          rotation={[0.502, -0.164, -1.763]}
          scale={[0.043, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.315, 0, -0.555]}
          rotation={[0.378, -0.136, -1.281]}
          scale={[0.054, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.222, 0, -0.549]}
          rotation={[1.566, 0.976, -2.544]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[2.1, 0, -0.579]}
          rotation={[2.471, -0.555, 1.695]}
          scale={[0.075, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.996, 0, -0.52]}
          rotation={[1.609, -0.837, 0.569]}
          scale={[0.074, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.992, 0, -0.575]}
          rotation={[1.387, -0.972, -0.677]}
          scale={[0.062, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[1.909, 0, -0.556]}
          rotation={[1.046, 0.778, -2.173]}
          scale={[0.077, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.737, 0, -0.538]}
          rotation={[2.195, -1.055, 1.249]}
          scale={[0.078, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.544, 0, -0.564]}
          rotation={[1.815, 0.745, -3.046]}
          scale={[0.06, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[1.415, 0, -0.59]}
          rotation={[1.136, -0.886, -1.113]}
          scale={[0.083, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[1.362, 0, -0.679]}
          rotation={[2.711, 0.035, 1.962]}
          scale={[0.046, 0.005, 0.003]}
        />
        <instances.GNInstance10
          position={[1.316, 0, -0.766]}
          rotation={[1.172, 0.859, 3.031]}
          scale={[0.08, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[1.208, 0, -0.767]}
          rotation={[0.402, 0.061, -1.174]}
          scale={[0.063, 0.007, 0.003]}
        />
        <instances.GNInstance10
          position={[1.152, 0, -0.818]}
          rotation={[1.133, -0.445, -0.169]}
          scale={[0.077, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[3.298, 0, 0.599]}
          rotation={[1.294, -0.948, -0.885]}
          scale={[0.067, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.976, 0, -0.062]}
          rotation={[1.425, 0.922, -2.553]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.819, 0, -0.251]}
          rotation={[2.098, 0.809, 3.134]}
          scale={[0.085, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[2.796, 0, -0.255]}
          rotation={[1.966, 0.477, 2.971]}
          scale={[0.087, 0.01, 0.005]}
        />
        <instances.GNInstance10
          position={[2.764, 0, -0.303]}
          rotation={[1.472, -0.83, 0.446]}
          scale={[0.066, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[2.595, 0, -0.468]}
          rotation={[0.412, -0.011, -1.804]}
          scale={[0.042, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[2.429, 0, -0.6]}
          rotation={[2.779, 0.551, 1.667]}
          scale={[0.082, 0.009, 0.004]}
        />
        <instances.GNInstance10
          position={[2.311, 0, -0.605]}
          rotation={[1.385, 0.962, -2.399]}
          scale={[0.051, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[2.011, 0, -0.638]}
          rotation={[1.674, 0.967, -2.658]}
          scale={[0.041, 0.005, 0.002]}
        />
        <instances.GNInstance10
          position={[1.934, 0, -0.614]}
          rotation={[0.428, 0.221, -1.346]}
          scale={[0.048, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[1.717, 0, -0.576]}
          rotation={[0.407, -0.29, -1.297]}
          scale={[0.05, 0.006, 0.003]}
        />
        <instances.GNInstance10
          position={[1.648, 0, -0.634]}
          rotation={[0.537, -0.3, -1.306]}
          scale={[0.065, 0.008, 0.004]}
        />
        <instances.GNInstance10
          position={[1.591, 0, -0.656]}
          rotation={[0.815, 0.946, -1.795]}
          scale={[0.095, 0.011, 0.005]}
        />
        <instances.GNInstance10
          position={[1.493, 0, -0.718]}
          rotation={[0.509, 0.196, -1.885]}
          scale={[0.074, 0.009, 0.004]}
        />
      </group>
      <instances.GNInstance
        position={[1.681, 0.095, -1.909]}
        rotation={[-0.2, -0.774, -0.097]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.928, 0.085, -1.813]}
        rotation={[-0.584, -1.44, -0.523]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.917, 0.057, -2.052]}
        rotation={[-0.095, -0.224, -0.067]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.943, 0.085, -1.839]}
        rotation={[-3.133, -0.73, -3.054]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.665, 0.089, -1.925]}
        rotation={[-0.146, -0.738, -0.035]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.97, 0.058, -2.045]}
        rotation={[-0.103, -0.085, -0.048]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.895, 0.074, -2.106]}
        rotation={[3.118, -0.687, -3.043]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.932, 0.079, -1.885]}
        rotation={[-3.096, -0.885, -2.916]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.815, 0.078, -2.01]}
        rotation={[-3.127, -1.1, -3.016]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.735, 0.105, -1.804]}
        rotation={[-0.946, -1.505, -0.86]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.917, 0.063, -2.135]}
        rotation={[-0.031, 0.501, -0.098]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.813, 0.086, -1.965]}
        rotation={[0.128, 1.119, -0.218]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.012, 0.241, -2.499]}
        rotation={[-3.133, -0.821, -2.916]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.077, 0.228, -2.476]}
        rotation={[0.083, 0.959, -0.254]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.044, 0.261, -2.363]}
        rotation={[-0.229, -0.707, -0.141]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.983, 0.257, -2.361]}
        rotation={[-0.19, -0.696, -0.114]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.202, 0.222, -2.453]}
        rotation={[2.928, 0.775, -2.933]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.025, 0.273, -2.232]}
        rotation={[-0.387, -1.154, -0.307]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.925, 0.282, -2.264]}
        rotation={[2.999, 0.047, -3.044]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.877, 0.266, -2.411]}
        rotation={[-0.275, -1.101, -0.258]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.214, 0.226, -2.469]}
        rotation={[-3.044, -0.966, -2.937]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.977, 0.268, -2.373]}
        rotation={[0.151, 1.043, -0.334]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.127, 0.255, -2.227]}
        rotation={[-0.214, -0.496, -0.215]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.936, 0.258, -2.484]}
        rotation={[-0.212, -0.716, -0.188]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.946, 0.18, 0.411]}
        rotation={[-0.272, 0.8, 0.104]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.878, 0.181, 0.382]}
        rotation={[3.061, 0.697, 3.068]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.965, 0.172, 0.321]}
        rotation={[1.806, -1.479, 1.972]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.853, 0.178, 0.344]}
        rotation={[-0.167, 0.474, 0.132]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.899, 0.16, 0.2]}
        rotation={[2.866, -0.833, 2.975]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.996, 0.148, 0.167]}
        rotation={[-0.094, -0.407, 0.166]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.021, 0.158, 0.283]}
        rotation={[3.022, 0.71, 2.991]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.008, 0.168, 0.29]}
        rotation={[2.944, -0.713, 3.048]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.91, 0.167, 0.284]}
        rotation={[3.129, 0.943, 2.942]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.923, 0.155, 0.198]}
        rotation={[-0.202, 0.139, 0.112]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.92, 0.184, 0.393]}
        rotation={[-0.261, 1.026, 0.082]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.896, 0.176, 0.243]}
        rotation={[-0.51, 1.244, 0.411]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.332, 0.116, -0.836]}
        rotation={[-0.136, 0.786, -0.055]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.469, 0.097, -0.958]}
        rotation={[2.943, -0.63, -3.097]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.423, 0.118, -0.855]}
        rotation={[-0.127, 0.717, -0.01]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.327, 0.09, -0.94]}
        rotation={[-0.162, -0.426, -0.049]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.275, 0.105, -0.874]}
        rotation={[2.931, 1.098, -3.046]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.489, 0.092, -0.992]}
        rotation={[2.953, 0.3, -3.107]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.344, 0.115, -0.791]}
        rotation={[-0.165, -0.258, -0.018]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.421, 0.098, -1.026]}
        rotation={[2.986, 0.993, -3.1]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.436, 0.085, -1.034]}
        rotation={[2.938, 0.758, -3.098]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.508, 0.11, -0.86]}
        rotation={[-2.716, -1.506, -2.583]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.364, 0.09, -0.961]}
        rotation={[2.93, 0.776, -3.13]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.416, 0.122, -0.802]}
        rotation={[-0.137, -0.17, -0.001]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.144, 0.141, -1.232]}
        rotation={[-3.001, 0.884, -3.12]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.424, 0.109, -1.108]}
        rotation={[0.169, -0.307, 0.043]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.287, 0.154, -1.303]}
        rotation={[0.004, 1.156, 0.172]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.331, 0.155, -1.324]}
        rotation={[0.055, 0.871, 0.133]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.262, 0.126, -1.094]}
        rotation={[-3.043, 1.064, -3.095]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.167, 0.136, -1.162]}
        rotation={[-2.832, 1.393, 2.918]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.346, 0.146, -1.246]}
        rotation={[-3.053, -0.819, 3.136]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.176, 0.121, -1.13]}
        rotation={[-2.918, 1.163, 3.086]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.127, 0.136, -1.191]}
        rotation={[-3.001, 0.051, -3.127]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.261, 0.149, -1.191]}
        rotation={[-0.08, 1.284, 0.255]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.186, 0.123, -1.128]}
        rotation={[-2.969, -0.726, 3.133]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.447, 0.131, -1.175]}
        rotation={[-2.982, 0.62, 3.109]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.296, 0.087, -0.222]}
        rotation={[-0.131, 0.474, 0.022]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.327, 0.079, -0.174]}
        rotation={[-0.135, 0.13, 0.03]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.397, 0.092, -0.024]}
        rotation={[-0.128, -0.12, 0.01]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.262, 0.061, -0.258]}
        rotation={[3.024, -0.193, 3.141]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.245, 0.096, -0.084]}
        rotation={[0, -1.157, 0.146]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.381, 0.092, -0.057]}
        rotation={[2.981, 1.134, 3.125]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.429, 0.082, -0.109]}
        rotation={[-0.089, -1.127, 0.022]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.372, 0.077, -0.183]}
        rotation={[-0.265, 1.065, 0.08]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.341, 0.093, -0.054]}
        rotation={[2.956, 1.198, 3.117]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.476, 0.07, -0.163]}
        rotation={[2.998, -0.047, 3.064]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.48, 0.056, -0.243]}
        rotation={[-0.013, -1.166, 0.157]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.494, 0.083, -0.126]}
        rotation={[2.972, -1.037, 3.088]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.676, 0.12, -0.869]}
        rotation={[-3.033, 0.286, 3.087]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.649, 0.122, -0.921]}
        rotation={[0.093, 0.44, 0.015]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.772, 0.136, -1.036]}
        rotation={[-2.941, 1.28, 2.995]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.702, 0.122, -0.877]}
        rotation={[0.108, -0.208, 0.073]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.725, 0.13, -0.904]}
        rotation={[-3.121, -0.282, 3.078]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.825, 0.118, -0.961]}
        rotation={[0.094, -0.872, 0.003]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.655, 0.124, -0.845]}
        rotation={[-2.933, 1.312, 3.052]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.59, 0.14, -1.136]}
        rotation={[-2.77, 1.438, 2.784]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.718, 0.142, -1.041]}
        rotation={[-1.883, 1.492, 2.007]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.711, 0.133, -0.943]}
        rotation={[-2.941, 1.168, 3.016]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.608, 0.142, -1.062]}
        rotation={[0.056, 0.38, 0.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.812, 0.137, -1.098]}
        rotation={[-3.09, 0.091, 3.107]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.803, 0.164, -1.373]}
        rotation={[1.088, 1.399, -0.994]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.832, 0.219, -1.644]}
        rotation={[2.442, 1.373, -2.348]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.626, 0.166, -1.352]}
        rotation={[-0.254, -1.094, -0.37]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.596, 0.153, -1.385]}
        rotation={[-2.966, -0.768, -2.915]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.799, 0.192, -1.499]}
        rotation={[0.122, 0.084, -0.196]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.755, 0.163, -1.453]}
        rotation={[2.976, 1.084, -2.9]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.653, 0.155, -1.444]}
        rotation={[-3.029, -0.252, -3.039]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.544, 0.132, -1.374]}
        rotation={[0.355, 1.039, -0.315]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.811, 0.17, -1.354]}
        rotation={[-2.327, -1.369, -2.357]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.795, 0.194, -1.383]}
        rotation={[0.067, -0.085, -0.186]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.527, 0.142, -1.669]}
        rotation={[-2.663, -1.28, -2.671]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.664, 0.167, -1.479]}
        rotation={[0.006, -0.149, -0.197]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.701, 0.043, 0.666]}
        rotation={[-0.309, -0.928, -0.276]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.755, 0.052, 0.706]}
        rotation={[-0.202, -0.844, -0.16]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.76, 0.053, 0.705]}
        rotation={[-0.174, -0.615, -0.147]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.781, 0.069, 0.82]}
        rotation={[-0.632, -1.3, -0.583]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.604, 0.045, 0.883]}
        rotation={[-0.042, -0.029, -0.197]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.771, 0.05, 0.644]}
        rotation={[3.021, 0.367, -3.015]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.553, 0.019, 0.878]}
        rotation={[-0.114, -0.55, -0.177]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.807, 0.077, 0.65]}
        rotation={[1.874, 1.368, -1.882]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.571, 0.022, 0.649]}
        rotation={[0.108, 0.786, -0.267]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.638, 0.049, 0.944]}
        rotation={[-2.995, -0.749, -2.874]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.684, 0.051, 0.772]}
        rotation={[0.412, 1.2, -0.522]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.62, 0.042, 0.82]}
        rotation={[-0.645, -1.31, -0.654]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.037, 0.076, -0.074]}
        rotation={[-3.044, 0.023, -3.024]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.83, 0.046, -0.05]}
        rotation={[-0.434, -1.385, -0.464]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.881, 0.046, 0.067]}
        rotation={[0.011, -0.704, -0.084]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.936, 0.065, -0.045]}
        rotation={[-0.027, -0.984, -0.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.837, 0.052, -0.092]}
        rotation={[0.069, 0.108, -0.055]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.019, 0.058, 0.041]}
        rotation={[-3.001, -1.235, -3.031]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.062, 0.08, -0.131]}
        rotation={[0.093, -0.318, -0.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.918, 0.054, -0.06]}
        rotation={[-3.059, -0.164, -3.02]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.038, 0.053, 0]}
        rotation={[0.038, -0.817, -0.074]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.955, 0.05, 0.056]}
        rotation={[-2.995, -0.714, -3.024]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.992, 0.072, -0.056]}
        rotation={[-2.447, -1.423, -2.506]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.914, 0.061, -0.131]}
        rotation={[2.776, 1.374, -2.744]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.819, 0.074, -0.28]}
        rotation={[0.084, 0.603, 0.067]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.589, 0.096, -0.33]}
        rotation={[-2.976, -1.155, -3.13]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.814, 0.064, -0.251]}
        rotation={[1.128, -1.543, 1.038]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.626, 0.063, -0.149]}
        rotation={[-3.041, -0.264, 3.088]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.893, 0.056, -0.128]}
        rotation={[-3.01, -0.884, -3.135]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.837, 0.06, -0.199]}
        rotation={[-2.789, 1.372, 2.97]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.859, 0.045, -0.145]}
        rotation={[-3.01, 0.068, 3.086]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.854, 0.067, -0.147]}
        rotation={[-3.037, 0.5, 3.106]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.905, 0.09, -0.357]}
        rotation={[-2.989, -0.329, 3.104]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.815, 0.061, -0.207]}
        rotation={[-3.007, -0.093, 3.104]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.969, 0.059, -0.215]}
        rotation={[-2.971, -0.564, 3.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.799, 0.086, -0.388]}
        rotation={[-3.03, -1.293, -3.099]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.777, 0.073, -0.24]}
        rotation={[3.01, -0.323, -3.135]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.017, 0.046, -0.496]}
        rotation={[-0.143, -0.327, 0.005]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.061, 0.085, -0.319]}
        rotation={[-0.089, 0.718, -0.089]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.791, 0.077, -0.181]}
        rotation={[2.975, 0.878, -3.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.93, 0.081, -0.299]}
        rotation={[-0.154, 0.65, -0.05]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.068, 0.089, -0.217]}
        rotation={[2.864, -1.519, 2.978]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.968, 0.068, -0.347]}
        rotation={[-0.153, 0.763, -0.024]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.67, 0.075, -0.328]}
        rotation={[2.959, -1.289, 3.112]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.68, 0.059, -0.398]}
        rotation={[2.809, 1.335, -2.932]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.754, 0.046, -0.476]}
        rotation={[-0.154, -0.415, 0.012]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.028, 0.087, -0.243]}
        rotation={[-0.297, 1.485, 0.153]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.886, 0.042, -0.52]}
        rotation={[-0.179, 0.997, 0.023]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.222, 0.073, 0.452]}
        rotation={[-0.113, -0.504, -0.135]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.155, 0.07, 0.314]}
        rotation={[0.566, 1.471, -0.614]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.259, 0.068, 0.17]}
        rotation={[-0.111, -0.597, -0.055]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.577, 0.1, 0.262]}
        rotation={[-0.247, -0.996, -0.174]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.243, 0.068, 0.478]}
        rotation={[-1.366, -1.54, -1.323]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.465, 0.086, 0.326]}
        rotation={[-0.084, -0.341, -0.085]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.266, 0.068, 0.291]}
        rotation={[-3.137, -0.905, -3.023]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.423, 0.067, 0.159]}
        rotation={[3.101, -0.021, -3.045]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.229, 0.07, 0.394]}
        rotation={[3.036, -0.096, -3.117]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.47, 0.088, 0.407]}
        rotation={[-0.074, 0.568, -0.099]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.44, 0.074, 0.292]}
        rotation={[-0.162, -0.714, -0.111]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.401, 0.092, 0.324]}
        rotation={[-0.047, 0.1, -0.073]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.458, 0.074, -0.25]}
        rotation={[0.073, 0.203, -0.089]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.49, 0.069, -0.102]}
        rotation={[-3.125, 0.517, -3.099]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.415, 0.079, -0.406]}
        rotation={[-0.111, -0.826, -0.177]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.44, 0.07, -0.337]}
        rotation={[-2.893, -1.203, -2.922]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.506, 0.084, -0.272]}
        rotation={[-3.04, -0.547, -3.081]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.513, 0.088, -0.114]}
        rotation={[-3.127, -0.245, -3.068]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.427, 0.084, -0.316]}
        rotation={[0.053, 0.593, -0.082]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.552, 0.078, -0.118]}
        rotation={[3.106, 0.592, -3.009]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.345, 0.079, -0.324]}
        rotation={[-0.28, -1.282, -0.308]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.458, 0.068, -0.124]}
        rotation={[3.027, 0.887, -2.941]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.499, 0.08, -0.277]}
        rotation={[0.695, 1.385, -0.716]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.506, 0.084, -0.282]}
        rotation={[0.035, 0.305, -0.114]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.023, 0.064, -0.658]}
        rotation={[3.138, 0.081, 3.003]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.088, 0.061, -0.701]}
        rotation={[3.084, -0.571, 3.045]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.056, 0.064, -0.593]}
        rotation={[0.287, -1.066, 0.309]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.054, 0.051, -0.619]}
        rotation={[-0.357, 1.146, 0.388]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.158, 0.093, -0.584]}
        rotation={[-0.839, 1.415, 0.846]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.08, 0.079, -0.633]}
        rotation={[-0.178, 1.056, 0.176]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.002, 0.063, -0.511]}
        rotation={[0.475, -1.371, 0.515]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.15, 0.067, -0.541]}
        rotation={[-3.14, -0.284, 3.067]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.132, 0.049, -0.6]}
        rotation={[-0.224, 1.064, 0.278]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.08, 0.077, -0.499]}
        rotation={[-3.128, -0.272, 2.988]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.089, 0.091, -0.8]}
        rotation={[0.012, 0.18, 0.114]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.072, 0.075, -0.729]}
        rotation={[0.089, -0.337, 0.143]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.148, 0.068, -0.71]}
        rotation={[2.989, 1.148, -2.812]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.134, 0.057, -0.882]}
        rotation={[-0.131, -1.029, -0.291]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.111, 0.056, -0.856]}
        rotation={[-0.073, -0.851, -0.243]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.049, 0.063, -0.772]}
        rotation={[-2.694, -1.13, -2.792]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.059, 0.109, -0.955]}
        rotation={[-2.668, -1.231, -2.739]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.03, 0.046, -0.726]}
        rotation={[-3.093, 0.434, -2.987]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.096, 0.082, -0.829]}
        rotation={[-0.956, -1.443, -1.138]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.039, 0.096, -0.894]}
        rotation={[-0.472, -1.404, -0.659]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.11, 0.073, -0.97]}
        rotation={[-3.055, -0.045, -2.967]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.076, 0.077, -0.905]}
        rotation={[-3.013, -0.102, -3.029]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.129, 0.119, -0.981]}
        rotation={[0.376, 0.974, -0.281]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.15, 0.105, -0.906]}
        rotation={[-0.827, -1.399, -0.911]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.006, 0.035, 0.208]}
        rotation={[0.012, -0.043, 0.07]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.176, 0.057, 0.272]}
        rotation={[-0.025, 0.741, 0.126]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.016, 0.045, 0.24]}
        rotation={[-3, 0.845, 3.037]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.152, 0.054, 0.199]}
        rotation={[-0.114, 0.917, 0.178]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.03, 0.031, 0.268]}
        rotation={[-0.213, 1.096, 0.24]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.042, 0.029, 0.308]}
        rotation={[0.164, -0.975, 0.22]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.167, 0.048, 0.341]}
        rotation={[-0.34, 1.296, 0.379]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.07, 0.046, 0.227]}
        rotation={[-1.249, 1.504, 1.275]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.205, 0.052, 0.355]}
        rotation={[-3.115, -0.121, 3.08]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.015, 0.035, 0.382]}
        rotation={[-3.135, 0.346, 3.109]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.182, 0.054, 0.201]}
        rotation={[0.49, -1.372, 0.515]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.15, 0.054, 0.347]}
        rotation={[-0.218, 1.11, 0.233]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.222, 0.068, -0.76]}
        rotation={[1.607, -1.396, 1.484]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.354, 0.08, -0.68]}
        rotation={[1.415, -1.403, 1.375]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.101, 0.023, -0.728]}
        rotation={[0.425, -1.003, 0.401]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.113, 0.045, -0.75]}
        rotation={[2.901, -1.15, 2.813]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.067, 0.034, -0.773]}
        rotation={[3.02, -0.762, 2.892]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.307, 0.096, -0.874]}
        rotation={[-0.226, 1.094, 0.41]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.281, 0.072, -0.754]}
        rotation={[-2.657, 1.135, 2.7]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.272, 0.092, -0.855]}
        rotation={[-1.601, 1.427, 1.745]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.235, 0.079, -0.839]}
        rotation={[-2.865, 0.707, 2.942]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.314, 0.073, -0.681]}
        rotation={[0.362, -1.144, 0.295]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.216, 0.08, -0.888]}
        rotation={[-0.188, 0.975, 0.308]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.296, 0.073, -0.869]}
        rotation={[0.833, -1.354, 0.786]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.162, 0.048, -0.656]}
        rotation={[0.021, -0.964, -0.097]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.258, 0.08, -0.983]}
        rotation={[0.195, 1.132, -0.124]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.294, 0.09, -1.037]}
        rotation={[0.137, -1.33, -0.031]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.203, 0.097, -0.963]}
        rotation={[0.084, -0.368, -0.062]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.069, 0.064, -0.838]}
        rotation={[0.166, 0.402, 0.012]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.404, 0.09, -0.987]}
        rotation={[-3.026, 0.58, -3.129]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.255, 0.071, -0.721]}
        rotation={[0.11, 0.869, 0.005]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.308, 0.089, -0.992]}
        rotation={[0.074, -1.428, -0.046]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.085, 0.097, -0.997]}
        rotation={[0.142, 0.575, -0.047]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.386, 0.076, -0.978]}
        rotation={[-2.979, -0.548, 3.138]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.35, 0.083, -1.056]}
        rotation={[0.145, -0.252, -0.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.281, 0.118, -1.13]}
        rotation={[0.114, -1.166, -0.085]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.619, 0.071, -0.699]}
        rotation={[-0.193, 0.326, 0.179]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.77, 0.07, -0.686]}
        rotation={[-0.742, 1.366, 0.603]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.758, 0.097, -0.484]}
        rotation={[2.029, -1.373, 2.118]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.467, 0.088, -0.466]}
        rotation={[-0.971, 1.423, 0.787]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.596, 0.113, -0.432]}
        rotation={[2.461, -1.322, 2.625]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.778, 0.102, -0.527]}
        rotation={[-0.134, -0.145, 0.1]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.409, 0.029, -0.67]}
        rotation={[-0.546, 1.145, 0.442]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.412, 0.059, -0.557]}
        rotation={[-0.024, -0.685, 0.196]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.54, 0.073, -0.61]}
        rotation={[2.883, -0.794, 2.963]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.753, 0.108, -0.608]}
        rotation={[-2.913, 1.111, 2.795]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.539, 0.072, -0.652]}
        rotation={[-0.044, -0.657, 0.17]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.538, 0.081, -0.464]}
        rotation={[-3.138, 0.729, 2.89]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.822, 0.086, 0.035]}
        rotation={[-1.417, 1.484, 1.391]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.77, 0.083, -0.045]}
        rotation={[-3.124, 0.288, 3.121]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.637, 0.076, 0.015]}
        rotation={[0.041, -0.317, 0.09]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.702, 0.076, -0.099]}
        rotation={[-0.011, 1.001, 0.036]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.561, 0.082, 0.1]}
        rotation={[3.127, -0.952, 3.109]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.76, 0.097, 0.288]}
        rotation={[-0.008, -0.513, 0.027]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.662, 0.088, -0.05]}
        rotation={[3.102, -1.352, 3.097]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.72, 0.084, 0.226]}
        rotation={[0.8, -1.481, 0.795]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.585, 0.083, 0.109]}
        rotation={[0.165, -1.228, 0.217]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.877, 0.113, 0.088]}
        rotation={[-0.109, 0.98, 0.091]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.49, 0.065, -0.012]}
        rotation={[-0.161, 1.037, 0.1]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.48, 0.081, 0.184]}
        rotation={[-0.028, 0.074, -0.003]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.565, 0.077, -0.242]}
        rotation={[0.081, -0.829, 0.177]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.531, 0.091, -0.127]}
        rotation={[-0.083, 0.182, 0.096]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.565, 0.115, -0.076]}
        rotation={[-2.148, 1.483, 2.052]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.574, 0.081, -0.362]}
        rotation={[-0.017, -0.328, 0.087]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.609, 0.094, -0.087]}
        rotation={[0.005, -0.483, 0.173]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.7, 0.104, -0.222]}
        rotation={[3.113, 0.5, 3.017]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.457, 0.055, -0.36]}
        rotation={[-0.517, 1.263, 0.433]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.603, 0.088, -0.34]}
        rotation={[-0.559, 1.311, 0.457]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.634, 0.111, -0.083]}
        rotation={[2.998, -0.692, 3.014]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.715, 0.115, -0.167]}
        rotation={[-2.476, 1.358, 2.347]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.519, 0.081, -0.257]}
        rotation={[-0.32, 0.981, 0.311]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.574, 0.102, -0.051]}
        rotation={[3.102, 0.471, 3.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.642, 0.06, -1.586]}
        rotation={[0.109, -1.234, 0.072]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.594, 0.063, -1.561]}
        rotation={[3.139, 1.321, -3.092]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.689, 0.057, -1.459]}
        rotation={[0.15, -1.255, 0.079]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.889, 0.066, -1.504]}
        rotation={[0.011, 0.465, 0.048]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.692, 0.074, -1.691]}
        rotation={[0.073, -1.258, 0.058]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.74, 0.062, -1.618]}
        rotation={[-3.102, -0.938, 3.114]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.808, 0.082, -1.44]}
        rotation={[3.136, 0.224, 3.095]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.639, 0.055, -1.43]}
        rotation={[-0.16, -1.527, -0.221]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.531, 0.071, -1.592]}
        rotation={[-0.036, 1.278, 0.049]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.589, 0.063, -1.506]}
        rotation={[-3.032, 1.154, 3.083]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.572, 0.067, -1.386]}
        rotation={[0.031, -1.076, 0.051]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.591, 0.067, -1.755]}
        rotation={[-0.031, 1.382, 0.012]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.315, 0.062, 0.357]}
        rotation={[2.934, 1.207, -2.968]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.443, 0.048, 0.271]}
        rotation={[0.307, 1.347, -0.296]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.38, 0.057, 0.301]}
        rotation={[-0.019, -0.304, -0.106]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.165, 0.087, 0.327]}
        rotation={[-3.131, -0.592, -3.04]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.388, 0.046, 0.177]}
        rotation={[-3.107, -0.518, -3.063]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.408, 0.056, 0.256]}
        rotation={[-2.973, -1.009, -2.975]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.197, 0.072, 0.199]}
        rotation={[3.127, 0.437, -3.052]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.377, 0.045, 0.356]}
        rotation={[3.127, 0.141, -3.067]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.184, 0.078, 0.389]}
        rotation={[3.031, 0.721, -3.024]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.407, 0.053, 0.329]}
        rotation={[-2.968, -1.222, -2.903]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.27, 0.059, 0.211]}
        rotation={[2.959, 1.216, -2.938]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.47, 0.045, 0.283]}
        rotation={[1.476, 1.514, -1.501]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.956, 0.042, 0.025]}
        rotation={[0.26, 1.06, -0.119]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.807, 0.059, 0.002]}
        rotation={[-0.253, -1.431, -0.37]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.892, 0.051, -0.007]}
        rotation={[-2.997, -0.73, -3.082]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.827, 0.073, -0.074]}
        rotation={[-2.969, -1.175, -3.07]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.838, 0.08, -0.183]}
        rotation={[1.38, 1.54, -1.235]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.871, 0.049, -0.021]}
        rotation={[-2.901, -1.092, -2.955]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.906, 0.037, 0.049]}
        rotation={[-3.053, 0.604, -3.069]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.82, 0.06, -0.054]}
        rotation={[-3.043, 0.463, -3.108]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.988, 0.067, -0.192]}
        rotation={[0.086, 0.072, -0.033]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.882, 0.073, -0.141]}
        rotation={[0.185, 0.821, -0.081]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.795, 0.072, -0.081]}
        rotation={[-0.124, -1.401, -0.228]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.822, 0.064, 0.04]}
        rotation={[0.133, 0.82, -0.068]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.736, 0.157, -1.223]}
        rotation={[-0.073, -0.742, 0.01]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.788, 0.146, -1.387]}
        rotation={[3.041, -0.749, 3.101]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.666, 0.148, -1.377]}
        rotation={[0.264, -1.548, 0.369]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.59, 0.139, -1.32]}
        rotation={[-0.054, -0.54, 0.104]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.888, 0.165, -1.214]}
        rotation={[2.98, -0.791, 3.094]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.725, 0.14, -1.361]}
        rotation={[-0.099, 0.189, 0.037]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.634, 0.128, -1.417]}
        rotation={[2.737, -1.451, 2.869]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.713, 0.127, -1.446]}
        rotation={[-0.075, -0.579, 0.05]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.759, 0.141, -1.305]}
        rotation={[-0.018, -1.08, 0.058]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.657, 0.147, -1.271]}
        rotation={[3.072, 0.246, 3.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.84, 0.174, -1.224]}
        rotation={[3.048, 0.212, 3.113]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.809, 0.146, -1.334]}
        rotation={[3.053, 0.856, 3.059]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.891, 0.105, -1.666]}
        rotation={[-0.079, 1.001, -0.081]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.704, 0.098, -1.871]}
        rotation={[-0.002, 0.695, -0.136]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.953, 0.086, -1.776]}
        rotation={[0.024, 1.114, -0.138]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.914, 0.091, -1.662]}
        rotation={[3.064, -0.933, -3.12]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.849, 0.089, -1.828]}
        rotation={[3.034, -0.311, -3.031]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.676, 0.092, -1.876]}
        rotation={[-0.06, 0.756, -0.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.963, 0.085, -1.809]}
        rotation={[3.043, -0.782, -3.086]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.778, 0.08, -1.965]}
        rotation={[3.003, 0.237, -3.038]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.774, 0.088, -1.896]}
        rotation={[-3.066, -1.168, -2.994]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.765, 0.058, -1.945]}
        rotation={[-0.671, -1.42, -0.518]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.794, 0.109, -1.722]}
        rotation={[3.045, -0.733, -3.056]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.807, 0.102, -1.847]}
        rotation={[-0.215, -0.862, -0.085]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.304, 0.095, 0.325]}
        rotation={[-0.046, 1.244, 0.001]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.119, 0.105, 0.351]}
        rotation={[3.08, 0.308, -3.129]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.196, 0.095, 0.228]}
        rotation={[3.119, -1.304, 3.115]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.407, 0.115, 0.444]}
        rotation={[3.12, 1.246, 3.084]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.408, 0.09, 0.452]}
        rotation={[3.141, -0.193, -3.118]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.409, 0.078, 0.324]}
        rotation={[-3.044, -1.283, -2.952]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.21, 0.089, 0.517]}
        rotation={[3.121, -0.57, -3.138]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.285, 0.092, 0.404]}
        rotation={[3.077, -0.116, -3.072]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.243, 0.104, 0.531]}
        rotation={[-0.085, 1.454, 0.071]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.019, 0.114, 0.394]}
        rotation={[3.115, -0.711, -3.092]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.029, 0.109, 0.445]}
        rotation={[-0.041, -0.428, 0.01]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.213, 0.099, 0.211]}
        rotation={[0.228, 1.458, -0.243]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.231, 0.096, 0.392]}
        rotation={[2.967, -0.741, 3.075]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.397, 0.105, 0.371]}
        rotation={[-3.087, 1.142, 2.994]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.09, 0.092, 0.325]}
        rotation={[3.051, 0.139, 3.124]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.222, 0.11, 0.439]}
        rotation={[-0.118, 0.298, 0.088]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.325, 0.096, 0.374]}
        rotation={[3.098, 1.459, 3.065]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.137, 0.096, 0.37]}
        rotation={[-3.001, 1.264, 2.925]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.19, 0.092, 0.179]}
        rotation={[3.049, 0.476, -3.121]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.207, 0.075, 0.263]}
        rotation={[3.024, -0.837, 3.053]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.318, 0.101, 0.344]}
        rotation={[-0.152, 0.54, 0.068]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.282, 0.083, 0.235]}
        rotation={[0.167, -1.418, 0.269]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.286, 0.085, 0.169]}
        rotation={[0.211, -1.459, 0.254]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.131, 0.1, 0.449]}
        rotation={[-0.063, -0.459, -0.001]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.982, 0.151, 0.268]}
        rotation={[0.097, 0.097, -0.134]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.965, 0.15, 0.284]}
        rotation={[-3.061, -0.199, -3.086]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.021, 0.155, 0.3]}
        rotation={[0.163, 0.531, -0.165]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.107, 0.13, 0.272]}
        rotation={[-3.036, -0.765, -3.098]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.126, 0.157, 0.069]}
        rotation={[-3.104, 0.395, -3.037]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.024, 0.162, 0.091]}
        rotation={[0.207, 1.172, -0.209]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.178, 0.132, 0.131]}
        rotation={[0.404, 1.215, -0.352]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.122, 0.148, 0.169]}
        rotation={[2.784, 1.315, -2.678]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.985, 0.152, 0.233]}
        rotation={[0.023, -0.894, -0.055]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.121, 0.157, 0.238]}
        rotation={[-3.077, -0.178, -3.102]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.083, 0.158, 0.032]}
        rotation={[-2.846, -1.104, -2.924]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.079, 0.155, 0.129]}
        rotation={[-2.426, -1.395, -2.537]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.924, 0.195, -0.666]}
        rotation={[3.123, 1.208, -3.119]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.071, 0.206, -0.617]}
        rotation={[2.455, -1.53, 2.468]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.99, 0.204, -0.62]}
        rotation={[-0.024, 0.604, 0.068]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.972, 0.2, -0.498]}
        rotation={[0.033, 0.741, 0.006]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.942, 0.19, -0.568]}
        rotation={[0.008, -0.94, -0.053]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.016, 0.197, -0.464]}
        rotation={[-0.005, -0.492, -0.031]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.862, 0.188, -0.615]}
        rotation={[3.064, -1.281, 3.108]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.057, 0.203, -0.594]}
        rotation={[-0.026, 0.894, 0.001]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.822, 0.188, -0.645]}
        rotation={[-0.016, -0.63, 0.033]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.063, 0.196, -0.519]}
        rotation={[3.135, -0.394, 3.121]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.95, 0.201, -0.763]}
        rotation={[0.041, -0.07, -0.039]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.787, 0.192, -0.493]}
        rotation={[-2.513, -1.509, -2.545]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.57, 0.202, -1.009]}
        rotation={[-2.99, -0.59, -2.918]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.353, 0.226, -1.097]}
        rotation={[-0.106, -0.709, -0.227]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.488, 0.206, -0.988]}
        rotation={[0.056, 0.219, -0.145]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.73, 0.177, -1.131]}
        rotation={[-0.109, -0.725, -0.151]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.33, 0.23, -1.173]}
        rotation={[-1.659, -1.406, -1.616]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.486, 0.203, -1.253]}
        rotation={[-2.504, -1.24, -2.534]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.52, 0.213, -1.034]}
        rotation={[-3.108, -0.297, -2.964]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.521, 0.189, -1.326]}
        rotation={[2.97, 0.829, -2.911]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.584, 0.185, -1.219]}
        rotation={[0.365, 1.124, -0.429]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.712, 0.179, -1.186]}
        rotation={[-0.387, -1.21, -0.477]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.453, 0.219, -1.143]}
        rotation={[-3.086, -0.109, -2.93]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.446, 0.221, -1.092]}
        rotation={[0.023, 0.055, -0.172]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[4.541, 0.201, -1.286]}
        rotation={[-3.078, 0.702, 3.128]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.574, 0.204, -1.331]}
        rotation={[-3.082, 0.106, -3.127]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.715, 0.209, -1.345]}
        rotation={[0.051, 0.142, 0.045]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.749, 0.203, -1.187]}
        rotation={[-2.602, 1.506, 2.673]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.582, 0.213, -1.308]}
        rotation={[-3.093, 0.412, -3.115]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.525, 0.199, -1.395]}
        rotation={[-0.026, -1.45, -0.017]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.582, 0.196, -1.197]}
        rotation={[-3.097, -0.388, 3.128]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.622, 0.195, -1.259]}
        rotation={[-3.124, -0.36, -3.127]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.565, 0.198, -1.264]}
        rotation={[0.1, 1.412, -0.078]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[4.728, 0.201, -1.272]}
        rotation={[3.081, 1.428, -3.041]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.723, 0.211, -1.256]}
        rotation={[3.088, -1.232, 3.002]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.741, 0.19, -1.211]}
        rotation={[-3.088, -0.066, -3.131]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[3.784, 0.201, -1.483]}
        rotation={[2.98, 0.971, -3.008]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.769, 0.19, -1.421]}
        rotation={[-2.109, -1.434, -2.086]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.692, 0.194, -1.474]}
        rotation={[-3.046, -1.119, -3.012]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.795, 0.21, -1.439]}
        rotation={[0.048, 0.954, -0.102]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.889, 0.184, -1.443]}
        rotation={[3.111, -0.552, -3.03]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.768, 0.198, -1.487]}
        rotation={[3.126, -0.61, -3.064]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.672, 0.213, -1.382]}
        rotation={[3.109, -0.46, -3.051]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.798, 0.211, -1.399]}
        rotation={[0.146, 1.251, -0.286]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.833, 0.191, -1.396]}
        rotation={[-0.047, 0.477, -0.094]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.891, 0.199, -1.396]}
        rotation={[2.384, 1.457, -2.424]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.712, 0.216, -1.374]}
        rotation={[-0.151, -0.724, -0.098]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.84, 0.206, -1.358]}
        rotation={[0.202, 1.104, -0.336]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.435, 0.093, 1.619]}
        rotation={[0.412, -1.302, 0.481]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.682, 0.119, 1.79]}
        rotation={[3.055, -0.305, 3.034]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.583, 0.111, 1.9]}
        rotation={[-2.023, 1.456, 1.992]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.506, 0.105, 1.824]}
        rotation={[3.108, -0.012, 3.008]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.823, 0.137, 1.691]}
        rotation={[-3.107, 0.679, 2.977]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.684, 0.113, 1.584]}
        rotation={[2.989, -0.439, 2.982]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.546, 0.1, 1.746]}
        rotation={[-0.176, 0.742, 0.167]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.641, 0.121, 1.551]}
        rotation={[-0.062, -0.02, 0.176]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.779, 0.127, 1.611]}
        rotation={[0.09, -0.721, 0.206]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.627, 0.108, 1.66]}
        rotation={[-0.132, 0.583, 0.134]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.543, 0.1, 1.593]}
        rotation={[-0.144, 0.662, 0.172]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.645, 0.111, 1.677]}
        rotation={[2.688, -1.238, 2.746]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.392, 0.143, 1.575]}
        rotation={[-2.983, 0.522, -3.089]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.301, 0.174, 1.302]}
        rotation={[-2.99, -1.504, -3.078]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.348, 0.195, 1.278]}
        rotation={[-3.074, 0.522, -3.112]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.427, 0.178, 1.284]}
        rotation={[0.132, 0.534, -0.062]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.392, 0.155, 1.588]}
        rotation={[-2.995, -0.472, -3.099]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.47, 0.152, 1.58]}
        rotation={[-2.844, -1.22, -2.958]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.392, 0.185, 1.275]}
        rotation={[0.064, -0.717, -0.073]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.383, 0.166, 1.532]}
        rotation={[2.886, 1.47, -2.763]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.362, 0.184, 1.341]}
        rotation={[-2.982, -0.752, -3.061]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.25, 0.165, 1.503]}
        rotation={[0.115, -0.304, -0.089]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.453, 0.163, 1.443]}
        rotation={[-3.054, 0.173, -3.088]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.509, 0.158, 1.437]}
        rotation={[0.09, -0.954, -0.094]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.839, 0.173, 0.459]}
        rotation={[-0.154, 0.406, 0.017]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.788, 0.188, 0.493]}
        rotation={[3.057, -0.542, -3.098]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.873, 0.204, 0.654]}
        rotation={[-0.239, -1.281, -0.077]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.942, 0.194, 0.609]}
        rotation={[2.97, -0.304, -3.11]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.783, 0.193, 0.607]}
        rotation={[3.016, 0.358, -3.065]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.702, 0.202, 0.653]}
        rotation={[-2.191, -1.501, -2.088]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.851, 0.174, 0.467]}
        rotation={[3.056, 1.354, 3.111]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.853, 0.173, 0.43]}
        rotation={[-0.121, -0.367, 0.023]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.632, 0.187, 0.548]}
        rotation={[2.981, -1.195, 3.075]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.853, 0.181, 0.45]}
        rotation={[-0.187, 1.343, -0.004]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.77, 0.173, 0.41]}
        rotation={[3.075, -1.229, -3.115]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.81, 0.221, 0.674]}
        rotation={[-0.163, -0.339, -0.016]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.626, 0.205, 0.176]}
        rotation={[0.018, -1.183, -0.177]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.557, 0.178, 0.345]}
        rotation={[0.264, 1.189, -0.155]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.713, 0.197, 0.265]}
        rotation={[-2.931, -0.543, -3.095]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.667, 0.184, 0.307]}
        rotation={[-3.074, 0.581, -3.076]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.66, 0.176, 0.38]}
        rotation={[0.075, -1.285, -0.104]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.631, 0.187, 0.288]}
        rotation={[-2.993, 0.48, -3.106]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.66, 0.176, 0.395]}
        rotation={[-0.001, -1.192, -0.11]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.482, 0.198, 0.2]}
        rotation={[0.056, -0.968, -0.084]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.622, 0.17, 0.453]}
        rotation={[0.18, 0.522, -0.064]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.632, 0.211, 0.191]}
        rotation={[-3.009, 0.036, -3.089]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.657, 0.165, 0.379]}
        rotation={[-3.055, 0.903, -3.022]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.459, 0.209, 0.212]}
        rotation={[-2.989, -0.329, -3.046]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.095, 0.231, -0.755]}
        rotation={[-3.064, 0.269, 3.12]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.097, 0.231, -0.848]}
        rotation={[0.094, -0.802, 0.033]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.939, 0.225, -0.724]}
        rotation={[0.077, 0.334, -0.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.887, 0.21, -0.625]}
        rotation={[0.069, -0.471, -0.029]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.945, 0.233, -0.771]}
        rotation={[0.052, 1.294, 0.048]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.908, 0.23, -0.836]}
        rotation={[-0.04, -1.321, -0.086]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[5.264, 0.23, -0.718]}
        rotation={[-3.045, 0.528, 3.139]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.025, 0.23, -0.836]}
        rotation={[-3.002, 1.248, 3.093]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.974, 0.216, -0.514]}
        rotation={[0.121, 0.202, -0.086]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.123, 0.196, -0.589]}
        rotation={[0.134, -0.149, 0.032]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.073, 0.233, -0.742]}
        rotation={[0.068, -0.045, -0.043]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.006, 0.202, -0.522]}
        rotation={[-3.042, -1.171, -3.123]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.665, 0.248, -0.794]}
        rotation={[-2.961, 0.282, 3.135]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.688, 0.3, -0.927]}
        rotation={[-2.999, 0.54, 3.071]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[5.697, 0.306, -0.987]}
        rotation={[0.15, -1.367, 0]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.426, 0.246, -0.784]}
        rotation={[0.19, -0.732, 0.096]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.542, 0.276, -1.072]}
        rotation={[2.031, -1.493, 1.952]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.68, 0.282, -0.964]}
        rotation={[0.107, -0.134, 0.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.568, 0.264, -0.886]}
        rotation={[-3.071, -1.161, 3.046]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.729, 0.288, -0.815]}
        rotation={[-2.77, 1.276, 2.945]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.723, 0.265, -0.76]}
        rotation={[-2.992, -0.151, 3.071]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.629, 0.293, -1.006]}
        rotation={[0.126, 0.522, 0.004]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.715, 0.308, -0.967]}
        rotation={[0.166, -0.51, 0.04]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.381, 0.282, -0.916]}
        rotation={[0.136, 0.83, 0.077]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.417, 0.261, -1.178]}
        rotation={[-3.028, 0.977, 2.975]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.327, 0.272, -0.923]}
        rotation={[0.595, -1.425, 0.668]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.422, 0.274, -0.95]}
        rotation={[1.198, -1.516, 1.253]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.398, 0.261, -1.025]}
        rotation={[-3.121, 0.256, 3.038]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.295, 0.271, -1.046]}
        rotation={[3.13, 0.586, 3.087]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.514, 0.283, -0.878]}
        rotation={[0.622, -1.487, 0.635]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.325, 0.265, -1.156]}
        rotation={[-3.092, 1.161, 3.053]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.262, 0.28, -1.03]}
        rotation={[0.14, -1.289, 0.141]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.342, 0.257, -0.904]}
        rotation={[3.126, 0.663, 3.053]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.269, 0.274, -0.872]}
        rotation={[2.105, -1.467, 2.161]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.29, 0.265, -1.147]}
        rotation={[-0.026, 0.402, 0.087]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.098, 0.261, -1.028]}
        rotation={[0.126, -0.998, 0.16]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.719, 0.303, -1.111]}
        rotation={[0.063, -0.618, 0.062]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.746, 0.315, -1.272]}
        rotation={[-3.122, 0.517, 3.115]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.481, 0.321, -1.285]}
        rotation={[0.022, -0.833, -0.005]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.514, 0.305, -1.053]}
        rotation={[-3.101, 0.096, -3.138]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.504, 0.312, -1.254]}
        rotation={[-3.022, -1.148, -3.068]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.795, 0.325, -1.253]}
        rotation={[0.069, -0.302, -0.026]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[5.603, 0.308, -1.216]}
        rotation={[0.025, -1.295, 0.042]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.803, 0.302, -1.167]}
        rotation={[0.032, 0.589, -0.043]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.619, 0.312, -1.118]}
        rotation={[0.043, 0.62, -0.004]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.532, 0.303, -1.111]}
        rotation={[3.114, 1.181, -3.059]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.459, 0.314, -0.969]}
        rotation={[3.121, 1.272, -3.135]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.638, 0.325, -1.241]}
        rotation={[0.077, 0.353, 0.01]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.92, 0.296, -1.705]}
        rotation={[0.036, 0.454, 0.019]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.843, 0.286, -1.63]}
        rotation={[-3.085, -0.407, 3.061]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.723, 0.279, -1.615]}
        rotation={[-3.097, 0.135, -3.135]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.743, 0.292, -1.787]}
        rotation={[0.113, -0.342, 0.073]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.846, 0.299, -1.84]}
        rotation={[0.122, -1.03, 0.045]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.073, 0.285, -1.709]}
        rotation={[-3.068, 0.578, 3.079]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.862, 0.27, -1.606]}
        rotation={[0.245, 1.533, -0.166]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.98, 0.297, -1.557]}
        rotation={[-0.401, 1.452, 0.429]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.793, 0.266, -1.478]}
        rotation={[0.052, 1.165, -0.012]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.712, 0.259, -1.525]}
        rotation={[0.133, -0.613, 0.001]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.808, 0.278, -1.76]}
        rotation={[3.055, -1.459, 2.949]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.683, 0.274, -1.648]}
        rotation={[-3.07, 0.302, 3.091]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.846, 0.098, 2.592]}
        rotation={[3.131, 0.201, 3.111]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.814, 0.105, 2.476]}
        rotation={[3.128, -0.012, -3.139]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.019, 0.1, 2.467]}
        rotation={[-2.925, -1.392, -2.938]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.919, 0.108, 2.612]}
        rotation={[0.05, 0.391, -0.062]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.766, 0.119, 2.516]}
        rotation={[0.006, -0.964, 0.001]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.031, 0.11, 2.47]}
        rotation={[0.081, 1.422, -0.057]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.929, 0.108, 2.705]}
        rotation={[0.039, -0.264, 0.055]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.91, 0.119, 2.425]}
        rotation={[-0.159, -1.323, -0.208]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.025, 0.106, 2.56]}
        rotation={[-0.018, 0.611, 0.035]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.79, 0.113, 2.619]}
        rotation={[0.023, 0.101, -0.032]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.9, 0.122, 2.443]}
        rotation={[3.141, -0.6, 3.085]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.927, 0.099, 2.565]}
        rotation={[-3.141, 0.857, -3.07]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.591, 0.171, 2.173]}
        rotation={[0.069, 0.819, -0.038]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.421, 0.168, 2.19]}
        rotation={[0.038, 1.053, 0.004]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.536, 0.173, 2.095]}
        rotation={[-3.133, -0.651, 3.052]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.478, 0.177, 2.2]}
        rotation={[-3.091, -0.01, 3.076]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.589, 0.187, 2.159]}
        rotation={[3.125, -0.959, 3.013]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.498, 0.178, 2.18]}
        rotation={[-3.012, 0.886, 3.12]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.557, 0.184, 2.069]}
        rotation={[-2.915, 1.25, 2.927]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.608, 0.17, 2.231]}
        rotation={[-3.102, 0.55, -3.126]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.439, 0.154, 2.404]}
        rotation={[0.179, -1.14, 0.097]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.295, 0.169, 2.243]}
        rotation={[0.047, -0.723, -0.002]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.462, 0.148, 2.443]}
        rotation={[0.154, -1.071, 0.112]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.434, 0.157, 2.308]}
        rotation={[0.029, 1.232, 0.084]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.144, 0.331, -1.012]}
        rotation={[0.002, -0.364, 0.141]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.135, 0.308, -0.974]}
        rotation={[-3.11, 0.663, 2.895]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.342, 0.351, -0.746]}
        rotation={[0.94, -1.373, 0.988]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.186, 0.322, -0.969]}
        rotation={[3.061, -0.154, 3.015]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.327, 0.339, -1.011]}
        rotation={[3.064, -0.013, 3.007]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.379, 0.355, -0.904]}
        rotation={[-2.982, 0.945, 2.812]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.272, 0.358, -0.724]}
        rotation={[-3.12, 0.514, 2.98]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.348, 0.356, -0.801]}
        rotation={[-0.027, -0.041, 0.112]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.317, 0.342, -0.797]}
        rotation={[-3.019, 0.739, 2.94]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.213, 0.328, -0.788]}
        rotation={[-0.398, 1.003, 0.328]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.337, 0.346, -0.875]}
        rotation={[0.815, -1.392, 0.946]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.444, 0.363, -0.919]}
        rotation={[2.818, -0.979, 2.837]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.519, 0.231, 0.901]}
        rotation={[3.023, -0.479, -3.12]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[5.607, 0.247, 0.957]}
        rotation={[-0.162, -0.519, -0.01]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.679, 0.241, 0.955]}
        rotation={[2.821, 1.277, -2.956]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.708, 0.236, 1]}
        rotation={[-0.112, 0.214, -0.056]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.549, 0.233, 0.853]}
        rotation={[3.011, 0.269, 3.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.545, 0.251, 0.988]}
        rotation={[2.925, 0.988, -3.07]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.709, 0.23, 0.829]}
        rotation={[-0.242, 1.365, 0.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.573, 0.252, 0.95]}
        rotation={[-2.571, 1.546, 2.399]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.559, 0.251, 0.928]}
        rotation={[-3.071, -1.5, -2.915]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.599, 0.216, 0.744]}
        rotation={[2.919, 0.752, -3.079]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.644, 0.261, 1.012]}
        rotation={[-0.159, -0.099, 0.025]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.646, 0.239, 0.922]}
        rotation={[-0.174, -0.456, -0.01]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.505, 0.322, -2.301]}
        rotation={[-0.005, -0.645, 0.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.391, 0.311, -2.414]}
        rotation={[0.613, -1.508, 0.678]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.591, 0.319, -2.48]}
        rotation={[2.889, -1.162, 2.896]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.636, 0.317, -2.588]}
        rotation={[-0.024, -0.64, 0.018]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.468, 0.307, -2.435]}
        rotation={[2.991, -1.1, 3.062]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.483, 0.323, -2.345]}
        rotation={[-0.056, 0.885, 0.033]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.525, 0.308, -2.625]}
        rotation={[-1.745, 1.496, 1.705]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.547, 0.308, -2.431]}
        rotation={[3.065, -0.7, 3.122]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.315, 0.298, -2.679]}
        rotation={[-0.05, -0.038, 0.043]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.432, 0.304, -2.588]}
        rotation={[0.02, -1.086, 0.115]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.522, 0.313, -2.652]}
        rotation={[-2.646, 1.4, 2.571]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.413, 0.286, -2.732]}
        rotation={[-0.032, -0.825, 0.087]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.951, 0.468, -1.317]}
        rotation={[-3.072, 0.681, -3.139]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.184, 0.47, -1.266]}
        rotation={[-2.521, -1.479, -2.539]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.113, 0.47, -1.54]}
        rotation={[0.061, 1.153, 0.033]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.126, 0.453, -1.258]}
        rotation={[0.063, -0.172, -0.031]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.088, 0.462, -1.423]}
        rotation={[-2.243, 1.548, 2.312]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.015, 0.456, -1.342]}
        rotation={[-2.957, -1.12, -2.967]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.111, 0.478, -1.371]}
        rotation={[-3.093, 0.094, 3.138]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.023, 0.46, -1.299]}
        rotation={[0.074, 0.209, -0.01]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.184, 0.475, -1.256]}
        rotation={[-0.031, 1.344, 0.022]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.991, 0.458, -1.354]}
        rotation={[-3.064, -0.013, -3.119]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.293, 0.467, -1.423]}
        rotation={[-0.002, -0.691, -0.056]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.101, 0.478, -1.543]}
        rotation={[0.021, -0.919, -0.066]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.615, 0.333, -3.095]}
        rotation={[2.714, 1.248, -2.784]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.821, 0.314, -3.23]}
        rotation={[-0.102, -0.6, -0.117]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.817, 0.307, -3.203]}
        rotation={[3.018, 0.466, -3.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.606, 0.338, -3.12]}
        rotation={[3.042, 0.476, -3.054]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.607, 0.332, -3.135]}
        rotation={[0.112, 0.972, -0.192]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.743, 0.313, -3.189]}
        rotation={[-0.198, -0.883, -0.19]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.663, 0.328, -3.237]}
        rotation={[0.683, 1.423, -0.757]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.736, 0.31, -3.245]}
        rotation={[3.071, 0.612, -3.046]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.609, 0.325, -3.013]}
        rotation={[0.03, 0.428, -0.135]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.691, 0.313, -3.252]}
        rotation={[-0.095, -0.456, -0.063]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.683, 0.314, -3.107]}
        rotation={[3.026, 0.406, -2.996]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.511, 0.33, -3.241]}
        rotation={[3.011, 0.712, -3.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.81, 0.37, -3.292]}
        rotation={[3.083, -0.339, 2.988]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.801, 0.369, -3.144]}
        rotation={[3.089, -0.633, 3.028]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.91, 0.379, -3.285]}
        rotation={[-3.098, 0.463, 3.032]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.74, 0.368, -3.168]}
        rotation={[2.956, -1.01, 2.922]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.62, 0.342, -3.35]}
        rotation={[3.123, 0.017, 3.051]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.869, 0.383, -3.2]}
        rotation={[3.082, -0.111, 3.007]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.882, 0.39, -3.383]}
        rotation={[0.107, -0.959, 0.103]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.824, 0.371, -3.274]}
        rotation={[-0.015, 0.039, 0.066]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.73, 0.359, -3.371]}
        rotation={[3.074, -0.468, 3.063]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.659, 0.344, -3.251]}
        rotation={[0.077, -0.731, 0.172]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.78, 0.369, -3.095]}
        rotation={[0.03, -0.2, 0.162]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.853, 0.392, -3.061]}
        rotation={[3.138, 0.334, 3.002]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[8.039, 0.351, -0.993]}
        rotation={[-0.083, -0.143, -0.057]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[8.063, 0.356, -0.959]}
        rotation={[0.083, 1.228, -0.176]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.877, 0.362, -1.002]}
        rotation={[-0.118, 0.404, -0.035]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[7.97, 0.345, -1.066]}
        rotation={[-0.338, -1.403, -0.219]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[7.962, 0.349, -1.058]}
        rotation={[3.098, -0.562, -3.063]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[8.125, 0.322, -1.181]}
        rotation={[-2.756, -1.372, -2.599]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[8.058, 0.34, -1.097]}
        rotation={[-3.057, -1.154, -2.945]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[7.919, 0.351, -1.011]}
        rotation={[2.954, 1.024, -2.981]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[7.836, 0.353, -1.166]}
        rotation={[-0.064, 0.606, -0.132]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.942, 0.356, -1.053]}
        rotation={[-1.513, -1.477, -1.364]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[7.926, 0.349, -1.104]}
        rotation={[-0.277, -1.099, -0.205]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.98, 0.363, -0.943]}
        rotation={[2.902, 1.016, -2.94]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.317, 0.212, 3.199]}
        rotation={[-3.13, 0.515, -3.072]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.085, 0.257, 2.965]}
        rotation={[-2.969, -1.116, -3.072]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.125, 0.246, 2.911]}
        rotation={[-2.999, -0.892, -3.075]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.245, 0.232, 2.957]}
        rotation={[-3.116, 1.075, -3.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.103, 0.231, 3.271]}
        rotation={[3.104, 1.035, -3.065]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.301, 0.219, 3.119]}
        rotation={[2.983, 1.328, -2.943]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.195, 0.222, 3.113]}
        rotation={[0.174, 1.144, -0.11]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.268, 0.211, 3.32]}
        rotation={[-3.007, -0.927, -3.107]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.089, 0.229, 3.085]}
        rotation={[-0.006, -0.343, -0.024]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.173, 0.229, 3.13]}
        rotation={[3.054, 1.209, -2.996]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.107, 0.245, 2.995]}
        rotation={[-3.099, -0.135, -3.132]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.033, 0.234, 3.076]}
        rotation={[0.073, 0.788, -0.063]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.677, 0.26, 0.154]}
        rotation={[-0.149, -0.454, -0.164]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.436, 0.287, 0.056]}
        rotation={[0.51, 1.295, -0.578]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.519, 0.289, 0.073]}
        rotation={[0.097, 0.582, -0.235]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.721, 0.26, 0.402]}
        rotation={[2.017, 1.409, -2.087]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.422, 0.328, 0.248]}
        rotation={[-0.197, -0.59, -0.257]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.694, 0.256, 0.096]}
        rotation={[2.965, 0.682, -2.909]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.58, 0.28, 0.144]}
        rotation={[2.983, 0.715, -2.972]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.782, 0.241, 0.051]}
        rotation={[-1.331, -1.372, -1.339]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.441, 0.294, 0.304]}
        rotation={[0.065, 0.851, -0.23]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.451, 0.293, 0.238]}
        rotation={[-0.05, -0.251, -0.121]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.562, 0.288, 0.005]}
        rotation={[2.972, 0.529, -2.905]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.395, 0.338, 0.342]}
        rotation={[-0.115, -0.184, -0.201]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.861, 0.308, -0.049]}
        rotation={[0.032, -1.132, 0.004]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.09, 0.307, 0.095]}
        rotation={[3.111, -0.007, -3.139]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.9, 0.317, 0.249]}
        rotation={[-2.339, 1.524, 2.289]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.83, 0.31, 0.055]}
        rotation={[3.12, -0.983, -3.133]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.827, 0.303, 0.038]}
        rotation={[0.148, 1.376, -0.197]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.781, 0.296, 0.178]}
        rotation={[-0.004, -0.179, 0.047]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.979, 0.309, -0.1]}
        rotation={[-3.102, 0.884, -3.137]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.072, 0.303, 0.117]}
        rotation={[-0.03, -0.534, -0.05]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.11, 0.297, -0.014]}
        rotation={[0.002, -0.777, -0.018]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.999, 0.307, 0.072]}
        rotation={[3.122, -0.07, 3.101]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.861, 0.305, 0.11]}
        rotation={[-3.091, 1.238, 3.05]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.925, 0.298, 0.205]}
        rotation={[0.006, 0.473, 0.034]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.111, 0.294, 0.91]}
        rotation={[0.039, 1.383, 0.075]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.079, 0.245, 1.185]}
        rotation={[0.143, -0.592, 0.11]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.951, 0.274, 1.032]}
        rotation={[-3.048, 0.398, 3.124]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.172, 0.286, 1.007]}
        rotation={[3.006, -1.299, 2.937]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.978, 0.259, 1.108]}
        rotation={[-0.112, 1.373, 0.15]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.086, 0.27, 1.144]}
        rotation={[0.019, 0.679, 0.093]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.096, 0.263, 1.194]}
        rotation={[0.122, -0.707, 0.122]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.082, 0.283, 1.088]}
        rotation={[-3.057, -0.585, -3.121]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.147, 0.264, 1.107]}
        rotation={[-3.093, -0.19, 3.111]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.206, 0.274, 1.069]}
        rotation={[-2.97, 0.929, 2.978]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.056, 0.262, 1.086]}
        rotation={[0.063, 0.914, 0.008]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.139, 0.265, 1.041]}
        rotation={[0.052, 1.175, -0.011]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.256, 0.26, 1.036]}
        rotation={[0.044, 0.752, -0.068]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.247, 0.251, 1.085]}
        rotation={[0.044, 0.194, 0.013]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.337, 0.267, 0.945]}
        rotation={[-3.102, 0.593, -3.059]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.423, 0.264, 0.939]}
        rotation={[-2.965, -0.994, -3.015]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.081, 0.276, 1.054]}
        rotation={[0.012, -0.26, -0.063]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.127, 0.256, 0.972]}
        rotation={[0.078, 0.262, -0.003]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.349, 0.266, 0.952]}
        rotation={[3.112, 1.427, -3.056]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.309, 0.27, 1.037]}
        rotation={[-3.105, 0.546, 3.132]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.306, 0.27, 0.815]}
        rotation={[-2.834, -1.294, -2.916]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.262, 0.264, 0.916]}
        rotation={[0.07, -0.774, -0.023]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.156, 0.262, 0.966]}
        rotation={[-3.041, -0.49, -3.118]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.296, 0.258, 0.833]}
        rotation={[0.027, 0.706, -0.044]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.699, 0.422, -2.31]}
        rotation={[2.944, -0.369, 3.059]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.759, 0.427, -2.286]}
        rotation={[-1.713, 1.447, 1.522]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.617, 0.425, -2.273]}
        rotation={[0.731, -1.407, 0.887]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.756, 0.424, -2.394]}
        rotation={[-0.124, -0.061, 0.069]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.512, 0.388, -2.373]}
        rotation={[-0.191, 0.197, 0.159]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[7.682, 0.382, -2.485]}
        rotation={[-0.223, 0.312, 0.113]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.796, 0.449, -2.216]}
        rotation={[1.738, -1.429, 1.876]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.566, 0.382, -2.561]}
        rotation={[2.769, -1.03, 2.847]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.628, 0.407, -2.385]}
        rotation={[-2.819, 1.243, 2.69]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[7.617, 0.387, -2.44]}
        rotation={[0.834, -1.396, 0.953]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.629, 0.425, -2.304]}
        rotation={[2.753, -1.206, 2.908]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.723, 0.441, -2.115]}
        rotation={[-0.062, -0.364, 0.142]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.362, 0.463, -3.809]}
        rotation={[-2.968, 0.049, -3.094]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.491, 0.421, -3.613]}
        rotation={[-3.024, 0.239, -3.125]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.556, 0.445, -3.75]}
        rotation={[0.112, 1.046, 0.012]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.482, 0.443, -3.736]}
        rotation={[0.122, 0.855, -0.016]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.294, 0.44, -3.74]}
        rotation={[0.143, 0.459, 0.013]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.349, 0.454, -3.819]}
        rotation={[-2.961, -0.306, -3.136]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.519, 0.458, -3.785]}
        rotation={[-2.993, 0.811, 3.127]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.358, 0.437, -3.762]}
        rotation={[0.119, -0.355, -0.006]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.373, 0.433, -3.733]}
        rotation={[-2.957, -0.647, 3.127]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.417, 0.451, -3.78]}
        rotation={[-3.028, 1.03, -3.08]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.563, 0.446, -3.734]}
        rotation={[-0.089, 1.51, 0.219]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.555, 0.422, -3.67]}
        rotation={[-2.949, 1.239, -3.14]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[8.018, 0.367, -2.029]}
        rotation={[-0.088, 0.133, 0.066]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.934, 0.352, -2.134]}
        rotation={[0.025, -1.014, 0.138]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.959, 0.361, -2.021]}
        rotation={[2.9, -1.047, 2.972]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.94, 0.335, -2.122]}
        rotation={[-2.343, 1.403, 2.275]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[8.161, 0.361, -2.152]}
        rotation={[3.001, -0.085, 3.073]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[8.025, 0.345, -2.189]}
        rotation={[0.344, -1.35, 0.442]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.956, 0.359, -2.096]}
        rotation={[3.094, 0.618, 3.009]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[8.063, 0.368, -2.064]}
        rotation={[-0.095, -0.025, 0.108]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.965, 0.322, -2.366]}
        rotation={[-0.009, -0.46, 0.162]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[8.07, 0.362, -2.09]}
        rotation={[3.013, 0.183, 3.046]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.854, 0.334, -2.164]}
        rotation={[-0.178, 0.813, 0.159]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.877, 0.355, -2.075]}
        rotation={[3.012, 0.089, 3.009]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.764, 0.036, -5.23]}
        rotation={[-2.892, -1.35, -2.911]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.733, 0.054, -5.167]}
        rotation={[-3.018, -0.947, -2.994]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.872, 0.064, -5.449]}
        rotation={[-3.107, 0.607, 3.141]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.814, 0.052, -5.338]}
        rotation={[3.138, -1.255, -3.124]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.896, 0.045, -5.422]}
        rotation={[0.035, 0.95, -0.066]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.83, 0.057, -5.41]}
        rotation={[-0.013, 0.577, -0.025]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.709, 0.048, -5.447]}
        rotation={[0.455, 1.497, -0.405]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.79, 0.038, -5.255]}
        rotation={[-3.089, -0.717, -3.118]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.793, 0.044, -5.391]}
        rotation={[-3.003, -1.265, -3.018]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.853, 0.042, -5.254]}
        rotation={[-3.037, -0.984, -3.068]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.82, 0.056, -5.489]}
        rotation={[-3.107, 0.145, -3.111]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.825, 0.059, -5.158]}
        rotation={[-1.212, -1.514, -1.198]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.847, 0.101, -6.118]}
        rotation={[-3.013, 0.888, 3.078]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.806, 0.099, -6.041]}
        rotation={[0.126, 0.31, -0.026]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.998, 0.102, -6.075]}
        rotation={[0.151, -0.243, 0.006]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.853, 0.115, -6.221]}
        rotation={[0.073, 0.405, 0.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.919, 0.086, -6.023]}
        rotation={[0.084, -0.502, 0.033]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.907, 0.073, -5.938]}
        rotation={[-3.002, 0.175, 3.084]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.815, 0.102, -6.152]}
        rotation={[-2.965, 1.082, 3.068]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.943, 0.113, -6.216]}
        rotation={[-3.015, 0.247, -3.098]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.729, 0.09, -5.973]}
        rotation={[-0.227, -1.464, -0.375]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.776, 0.086, -6.045]}
        rotation={[0.42, -1.503, 0.321]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.741, 0.098, -6.207]}
        rotation={[-2.974, 1.07, 3.072]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.761, 0.098, -6.065]}
        rotation={[0.09, 0.248, -0.017]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.904, 0.681, -4.49]}
        rotation={[-2.471, -1.492, -2.399]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.73, 0.676, -4.571]}
        rotation={[-3.121, 1.035, 3.129]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.107, 0.682, -4.661]}
        rotation={[-0.004, -0.032, -0.069]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.927, 0.674, -4.619]}
        rotation={[-0.097, -0.91, -0.099]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.83, 0.687, -4.597]}
        rotation={[-0.185, -1.333, -0.169]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.046, 0.694, -4.616]}
        rotation={[-3.084, -0.874, -3.101]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.873, 0.675, -4.448]}
        rotation={[3.115, 0.706, -3.083]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.908, 0.676, -4.471]}
        rotation={[-3.092, -0.653, -3.134]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.04, 0.68, -4.695]}
        rotation={[-3.102, -0.467, -3.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.079, 0.67, -4.427]}
        rotation={[-3.121, 0.191, 3.11]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.794, 0.691, -4.585]}
        rotation={[0.018, 1.096, -0.067]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.829, 0.671, -4.631]}
        rotation={[0.01, 0.808, 0.011]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.647, 0.679, -4.73]}
        rotation={[-3.109, 0.086, 3.045]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.928, 0.721, -4.861]}
        rotation={[3.033, -0.799, 2.969]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.763, 0.704, -4.763]}
        rotation={[-2.884, 0.982, 2.907]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.738, 0.704, -4.825]}
        rotation={[1.352, -1.464, 1.336]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.924, 0.714, -4.753]}
        rotation={[-0.111, 0.626, 0.198]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.807, 0.697, -4.777]}
        rotation={[-1.278, 1.383, 1.251]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.7, 0.696, -4.811]}
        rotation={[2.811, -1.225, 2.797]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.897, 0.708, -4.751]}
        rotation={[-3.033, 0.45, 2.998]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.78, 0.709, -4.866]}
        rotation={[2.829, -1.027, 2.796]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.793, 0.687, -4.696]}
        rotation={[0.177, -0.953, 0.172]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.736, 0.684, -4.68]}
        rotation={[-2.927, 0.943, 2.914]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.924, 0.713, -4.752]}
        rotation={[3.042, -0.77, 2.979]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.196, 0.071, -7.091]}
        rotation={[-3.098, -0.056, 3.078]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.329, 0.07, -6.923]}
        rotation={[0.098, -0.203, 0.077]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.124, 0.042, -6.908]}
        rotation={[-3.078, 0.446, 3.071]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.361, 0.084, -7.111]}
        rotation={[0.06, 0.601, 0.018]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.241, 0.052, -6.818]}
        rotation={[-3.094, 0.72, -3.133]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.384, 0.073, -6.97]}
        rotation={[-3.03, -0.031, 3.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.293, 0.052, -6.866]}
        rotation={[-0.583, 1.558, 0.663]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.242, 0.037, -6.738]}
        rotation={[-3.087, 1.022, -3.123]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.09, 0.047, -6.869]}
        rotation={[0.118, -0.462, -0.012]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.118, 0.065, -6.944]}
        rotation={[0.086, 0.073, 0.012]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.134, 0.059, -6.999]}
        rotation={[-3.052, 0.816, 3.098]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.254, 0.076, -7.046]}
        rotation={[-3.068, -0.497, 3.112]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.636, 0.117, -7.309]}
        rotation={[-0.032, 0.156, -0.014]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.805, 0.116, -7.156]}
        rotation={[-0.134, -0.903, -0.125]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.725, 0.121, -7.181]}
        rotation={[0.064, 1.294, -0.06]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.723, 0.106, -7.409]}
        rotation={[3.112, -0.74, -3.086]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.782, 0.106, -7.39]}
        rotation={[3.091, 0.84, -3.129]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.724, 0.124, -7.125]}
        rotation={[3.113, 0.204, -3.125]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.638, 0.127, -7.228]}
        rotation={[3.123, -0.403, -3.073]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.78, 0.121, -7.195]}
        rotation={[3.088, -0.003, 3.138]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.664, 0.128, -7.239]}
        rotation={[0.015, 0.808, -0.066]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.65, 0.122, -7.297]}
        rotation={[3.107, -1.041, -3.082]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.621, 0.12, -7.217]}
        rotation={[2.956, 1.24, -3.036]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.583, 0.131, -7.254]}
        rotation={[-0.01, -0.069, -0.035]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.585, 0.685, -6.292]}
        rotation={[3.066, 0.343, -3.088]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.357, 0.694, -6.25]}
        rotation={[-0.002, 0.822, -0.122]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.333, 0.69, -6.43]}
        rotation={[2.545, 1.333, -2.645]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.395, 0.706, -6.243]}
        rotation={[0.131, 1.147, -0.274]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.543, 0.673, -6.342]}
        rotation={[2.893, 0.83, -2.916]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.482, 0.685, -6.259]}
        rotation={[0.112, 1.158, -0.267]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.549, 0.666, -6.455]}
        rotation={[2.231, 1.394, -2.35]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.41, 0.683, -6.518]}
        rotation={[-3.05, -1.168, -2.984]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.381, 0.695, -6.398]}
        rotation={[2.847, 0.95, -2.935]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.475, 0.7, -6.294]}
        rotation={[-3.131, -0.656, -2.966]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.576, 0.687, -6.316]}
        rotation={[0.005, 0.34, -0.092]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.426, 0.691, -6.315]}
        rotation={[-0.249, -0.91, -0.216]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.548, 0.07, -7.791]}
        rotation={[3.1, -0.194, -3.056]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.719, 0.074, -7.69]}
        rotation={[-2.899, -1.349, -2.847]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.668, 0.076, -7.586]}
        rotation={[0.09, 1.413, -0.144]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.641, 0.062, -7.802]}
        rotation={[0.031, 0.719, -0.116]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.471, 0.081, -7.748]}
        rotation={[-0.067, 0.026, -0.009]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.707, 0.086, -7.535]}
        rotation={[0.326, 1.42, -0.423]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.616, 0.07, -7.752]}
        rotation={[-2.928, -1.34, -2.912]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.462, 0.084, -7.698]}
        rotation={[2.981, 1.208, -2.998]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.599, 0.095, -7.586]}
        rotation={[0, 1.205, -0.099]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.551, 0.072, -7.76]}
        rotation={[3.108, -0.516, 3.141]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.587, 0.08, -7.693]}
        rotation={[3.047, 0.993, -3.051]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.608, 0.083, -7.842]}
        rotation={[-3.139, -0.36, 3.134]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.143, 0.055, -8.414]}
        rotation={[-3.128, 0.239, 3.117]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.206, 0.051, -8.357]}
        rotation={[0.162, -1.213, 0.194]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.289, 0.045, -8.53]}
        rotation={[3.13, 0.838, -3.141]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.166, 0.047, -8.371]}
        rotation={[0.001, -0.185, 0.101]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.241, 0.061, -8.441]}
        rotation={[0.115, -1.026, 0.081]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.157, 0.056, -8.492]}
        rotation={[-3.1, 0.831, 3.105]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.169, 0.048, -8.52]}
        rotation={[0.002, -0.626, 0.052]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.141, 0.047, -8.408]}
        rotation={[0.037, -0.613, 0.073]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.173, 0.054, -8.372]}
        rotation={[-3.107, 0.524, 3.021]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.059, 0.056, -8.414]}
        rotation={[-3.111, 0.586, 3.086]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.198, 0.051, -8.529]}
        rotation={[-0.051, 0.287, 0.023]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.272, 0.064, -8.389]}
        rotation={[3.041, -0.789, 3.02]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.76, 0.229, -8.251]}
        rotation={[-0.528, -1.251, -0.372]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.742, 0.214, -8.452]}
        rotation={[-0.143, -0.298, -0.142]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.742, 0.211, -8.414]}
        rotation={[-2.86, -1.32, -2.703]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.684, 0.214, -8.369]}
        rotation={[-3.092, -1.266, -2.908]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.661, 0.186, -8.448]}
        rotation={[-1.674, -1.488, -1.493]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.723, 0.183, -8.526]}
        rotation={[0.303, 1.26, -0.47]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.633, 0.189, -8.607]}
        rotation={[-2.836, -1.318, -2.642]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.717, 0.207, -8.396]}
        rotation={[2.947, 0.18, -3.066]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.818, 0.208, -8.334]}
        rotation={[2.75, 1.024, -2.915]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.82, 0.232, -8.228]}
        rotation={[2.903, 0.899, -3.065]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.632, 0.214, -8.405]}
        rotation={[2.952, 0.219, -3.02]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.805, 0.216, -8.282]}
        rotation={[-0.176, -0.473, -0.093]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.956, 0.072, -9.08]}
        rotation={[-3.075, 0.432, -3.065]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.661, 0.12, -9.1]}
        rotation={[-2.995, -0.863, -3.04]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.946, 0.067, -8.89]}
        rotation={[-3.137, 0.783, -2.984]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.89, 0.098, -9.131]}
        rotation={[3.072, 0.913, -2.921]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.668, 0.11, -8.985]}
        rotation={[0.053, -0.394, -0.151]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.999, 0.049, -9.142]}
        rotation={[0.446, 1.175, -0.426]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.921, 0.096, -9.206]}
        rotation={[-2.846, -1.188, -2.922]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.985, 0.073, -9.046]}
        rotation={[0.183, 0.599, -0.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.919, 0.071, -8.958]}
        rotation={[2.592, 1.409, -2.472]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.726, 0.1, -9]}
        rotation={[0.105, -0.06, -0.149]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.605, 0.103, -9.138]}
        rotation={[-3.019, -0.202, -3.073]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.818, 0.09, -9.12]}
        rotation={[-2.666, -1.331, -2.72]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.567, 0.759, -7.664]}
        rotation={[-3.05, 0.921, 2.909]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.401, 0.73, -7.775]}
        rotation={[-0.302, 0.971, 0.221]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.42, 0.745, -7.762]}
        rotation={[3.046, -0.289, 3.07]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.482, 0.733, -7.858]}
        rotation={[-0.409, 1.228, 0.378]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.582, 0.765, -7.735]}
        rotation={[3.026, -0.297, 2.998]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.528, 0.733, -7.823]}
        rotation={[1.768, -1.472, 1.866]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.358, 0.738, -7.765]}
        rotation={[-0.221, 0.865, 0.132]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.561, 0.76, -7.776]}
        rotation={[-0.088, 0.303, 0.125]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.386, 0.733, -7.687]}
        rotation={[2.768, -1.166, 2.869]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.369, 0.735, -7.709]}
        rotation={[-0.268, 0.91, 0.258]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.53, 0.746, -7.74]}
        rotation={[-0.085, -0.024, 0.08]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.349, 0.723, -7.809]}
        rotation={[2.994, -0.519, 3.038]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.397, 0.792, -7.641]}
        rotation={[0.007, 0.47, -0.212]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.547, 0.718, -7.826]}
        rotation={[0.203, 0.969, -0.377]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.559, 0.758, -7.629]}
        rotation={[-0.111, -0.032, -0.158]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.624, 0.735, -7.647]}
        rotation={[-3.112, -0.72, -2.949]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.556, 0.747, -7.676]}
        rotation={[-0.493, -1.193, -0.42]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.591, 0.729, -7.82]}
        rotation={[-3.087, -0.491, -2.893]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.554, 0.728, -7.841]}
        rotation={[3.041, 0.148, -2.924]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.706, 0.705, -7.848]}
        rotation={[-0.054, 0.055, -0.163]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.589, 0.717, -7.836]}
        rotation={[-0.01, 0.344, -0.208]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.518, 0.755, -7.63]}
        rotation={[0.152, 0.826, -0.282]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.423, 0.748, -7.869]}
        rotation={[-1.422, -1.368, -1.324]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.652, 0.735, -7.629]}
        rotation={[-0.165, -0.454, -0.211]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.555, 0.805, -7.103]}
        rotation={[-0.075, -0.178, -0.029]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.332, 0.803, -7.016]}
        rotation={[-0.346, 1.347, 0.321]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.538, 0.825, -7.061]}
        rotation={[-0.076, 0.836, 0.026]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.528, 0.825, -7.084]}
        rotation={[-0.005, -0.601, 0.091]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.596, 0.828, -7.184]}
        rotation={[-0.07, 0.056, 0.087]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.361, 0.828, -6.855]}
        rotation={[0.644, -1.463, 0.712]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.316, 0.809, -7.002]}
        rotation={[2.706, -1.442, 2.788]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.364, 0.793, -7.204]}
        rotation={[3.081, 0.887, 3.133]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.507, 0.821, -6.942]}
        rotation={[-0.035, 1.42, -0.042]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.234, 0.806, -7.163]}
        rotation={[-0.024, -0.049, 0.072]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.501, 0.798, -7.187]}
        rotation={[-0.083, 1.035, -0.007]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.353, 0.825, -6.93]}
        rotation={[-0.034, 0.498, -0.036]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.949, 0.403, -9.464]}
        rotation={[0.215, -0.942, 0.252]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.887, 0.387, -9.281]}
        rotation={[0.089, 0.093, 0.079]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.908, 0.382, -9.22]}
        rotation={[-3.039, 0.014, 2.981]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.12, 0.415, -9.401]}
        rotation={[-0.071, 0.991, 0.231]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.997, 0.406, -9.304]}
        rotation={[-0.079, 0.65, 0.134]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.884, 0.406, -9.492]}
        rotation={[0.042, 0.084, 0.162]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.965, 0.407, -9.453]}
        rotation={[-3.102, 0.047, 2.974]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.851, 0.389, -9.273]}
        rotation={[-3.058, 0.436, 3.027]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.945, 0.396, -9.465]}
        rotation={[-2.053, 1.372, 2.085]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.711, 0.371, -9.44]}
        rotation={[-0.021, 0.339, 0.131]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.953, 0.412, -9.251]}
        rotation={[-0.807, 1.367, 0.835]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.951, 0.411, -9.384]}
        rotation={[0.499, -1.339, 0.463]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.553, 0.863, -8.262]}
        rotation={[-0.069, 0.35, 0.054]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.402, 0.847, -8.368]}
        rotation={[3.026, -0.258, 3.084]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.44, 0.863, -8.181]}
        rotation={[-0.156, 0.572, 0.088]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.521, 0.855, -8.268]}
        rotation={[2.985, -0.347, 3.141]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.507, 0.852, -8.344]}
        rotation={[3.037, -1.176, -3.114]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.459, 0.874, -8.147]}
        rotation={[-0.067, 0.212, 0.029]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.298, 0.857, -8.292]}
        rotation={[3.034, 0.885, 3.119]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.352, 0.865, -8.18]}
        rotation={[-0.081, 0.304, 0.067]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.329, 0.842, -8.349]}
        rotation={[0.321, -1.471, 0.378]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.453, 0.854, -8.355]}
        rotation={[-0.095, 1.182, -0.038]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.52, 0.863, -8.214]}
        rotation={[-0.844, 1.492, 0.742]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.545, 0.872, -8.248]}
        rotation={[3.061, 0.516, 3.061]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.904, 0.715, -9.797]}
        rotation={[-2.944, 1.401, 2.889]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.161, 0.749, -9.581]}
        rotation={[-3.026, 1.17, 2.938]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.996, 0.737, -9.751]}
        rotation={[2.924, -1.323, 2.907]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.136, 0.729, -9.701]}
        rotation={[3.092, -0.214, 3.128]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.007, 0.731, -9.639]}
        rotation={[-0.085, 0.938, 0.09]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.076, 0.724, -9.817]}
        rotation={[3.111, 0.393, 3.049]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.03, 0.745, -9.746]}
        rotation={[-2.324, 1.491, 2.335]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.053, 0.721, -9.659]}
        rotation={[-0.157, 0.895, 0.136]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.044, 0.74, -9.41]}
        rotation={[-3.111, 0.851, 3.095]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.005, 0.723, -9.749]}
        rotation={[3.096, 0.115, 3.08]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.95, 0.73, -9.761]}
        rotation={[2.997, -1.243, 2.985]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.936, 0.74, -9.578]}
        rotation={[-2.178, 1.478, 2.1]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.55, 0.772, -9.656]}
        rotation={[0.085, 1.283, 0.03]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.535, 0.767, -9.62]}
        rotation={[-3.023, 0.883, 3.079]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.753, 0.771, -9.676]}
        rotation={[0.173, -1.199, 0.066]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.73, 0.768, -9.725]}
        rotation={[-2.913, 1.227, 3.013]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.642, 0.768, -9.677]}
        rotation={[0.492, -1.528, 0.462]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.625, 0.758, -9.531]}
        rotation={[-2.948, 1.154, 3.051]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.689, 0.749, -9.484]}
        rotation={[-2.447, 1.492, 2.538]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.683, 0.763, -9.603]}
        rotation={[-3.076, 0.349, -3.134]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.631, 0.754, -9.575]}
        rotation={[3.062, -1.342, 3.013]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.684, 0.766, -9.559]}
        rotation={[-3.134, -0.972, 3.038]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.609, 0.768, -9.775]}
        rotation={[-3.085, -0.465, 3.087]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.596, 0.76, -9.534]}
        rotation={[-0.46, 1.454, 0.555]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.236, 0.915, -8.639]}
        rotation={[-2.473, 1.316, 2.477]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.106, 0.859, -8.677]}
        rotation={[-3.055, 0.638, 2.964]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.254, 0.922, -8.821]}
        rotation={[0.604, -1.234, 0.687]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.003, 0.867, -8.61]}
        rotation={[-0.285, 0.885, 0.318]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.208, 0.913, -8.786]}
        rotation={[-2.981, 0.894, 2.912]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.148, 0.895, -8.594]}
        rotation={[-3.025, 0.508, 2.937]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.163, 0.89, -8.784]}
        rotation={[1.498, -1.422, 1.547]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.115, 0.884, -8.553]}
        rotation={[2.961, -0.849, 2.876]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.094, 0.891, -8.692]}
        rotation={[0.182, -0.757, 0.247]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.229, 0.914, -8.793]}
        rotation={[-0.001, -0.048, 0.146]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.218, 0.901, -8.64]}
        rotation={[3.024, -0.666, 2.931]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.113, 0.907, -8.723]}
        rotation={[0.072, -0.272, 0.192]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.245, 0.427, -10.399]}
        rotation={[2.981, -0.061, 3.102]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.153, 0.433, -10.339]}
        rotation={[-0.131, -0.478, 0.078]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.278, 0.44, -10.181]}
        rotation={[3.112, 0.808, 3.047]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.482, 0.457, -10.331]}
        rotation={[-0.071, -1.087, 0.149]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.355, 0.433, -10.272]}
        rotation={[-0.058, -1.059, 0.063]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.403, 0.432, -10.463]}
        rotation={[-0.275, 1.174, 0.097]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.348, 0.446, -10.366]}
        rotation={[2.941, -0.663, 3.043]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.418, 0.434, -10.376]}
        rotation={[-0.058, -0.602, 0.065]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.207, 0.427, -10.22]}
        rotation={[3.059, 0.467, 3.028]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.326, 0.446, -10.352]}
        rotation={[2.767, -1.207, 2.844]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.365, 0.456, -10.2]}
        rotation={[3.017, 0.382, 3.095]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.323, 0.441, -10.349]}
        rotation={[-2.543, 1.475, 2.374]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.125, 0.21, -10.949]}
        rotation={[-3.083, -0.1, 3.019]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.29, 0.223, -11.077]}
        rotation={[0.083, -0.862, 0.121]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.118, 0.219, -11.107]}
        rotation={[0.119, -0.572, 0.129]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.081, 0.209, -10.962]}
        rotation={[-0.463, 1.354, 0.528]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.199, 0.218, -11.088]}
        rotation={[3.053, -1.106, 3.052]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.199, 0.211, -10.953]}
        rotation={[3.108, -0.557, 3.058]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.291, 0.23, -10.978]}
        rotation={[0.671, -1.378, 0.622]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.042, 0.213, -11.02]}
        rotation={[3.134, -0.077, 3.068]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.103, 0.218, -10.905]}
        rotation={[3.042, -0.759, 2.985]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.105, 0.212, -11.017]}
        rotation={[2.747, -1.427, 2.672]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.189, 0.218, -11.14]}
        rotation={[0.076, -0.406, 0.107]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.222, 0.222, -11.064]}
        rotation={[3.005, -1.192, 2.999]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.55, 0.31, -10.881]}
        rotation={[-2.874, 1.552, 2.761]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.612, 0.332, -10.686]}
        rotation={[-0.175, -0.661, -0.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.53, 0.308, -10.895]}
        rotation={[-0.062, 0.893, -0.037]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.424, 0.321, -10.791]}
        rotation={[2.96, 1.383, -3.062]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.659, 0.289, -10.896]}
        rotation={[-0.885, -1.475, -0.776]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.579, 0.313, -10.685]}
        rotation={[3.072, -0.889, -3.111]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.568, 0.303, -10.87]}
        rotation={[3.006, -1.127, 3.096]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.623, 0.309, -10.769]}
        rotation={[-0.139, -0.214, -0.058]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.646, 0.313, -10.815]}
        rotation={[-0.133, 0.066, -0.049]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.51, 0.302, -10.868]}
        rotation={[-0.214, -0.922, -0.126]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.577, 0.33, -10.682]}
        rotation={[-0.104, -1.542, 0.061]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.55, 0.319, -10.829]}
        rotation={[2.577, 1.502, -2.634]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.141, 0.385, -10.485]}
        rotation={[0.026, -0.009, -0.12]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.996, 0.386, -10.61]}
        rotation={[0.403, 1.325, -0.315]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.919, 0.414, -10.647]}
        rotation={[2.934, 1.085, -2.811]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[1.28, 0.379, -10.577]}
        rotation={[-0.052, -0.866, -0.103]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.972, 0.411, -10.711]}
        rotation={[-0.056, -0.899, -0.117]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.055, 0.408, -10.661]}
        rotation={[2.965, 1.154, -2.856]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[1.091, 0.386, -10.666]}
        rotation={[1.698, 1.451, -1.619]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.971, 0.39, -10.626]}
        rotation={[0.007, -0.281, -0.077]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.253, 0.37, -10.495]}
        rotation={[-3.102, -0.179, -3.047]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.928, 0.394, -10.511]}
        rotation={[0.006, -0.113, -0.14]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.126, 0.388, -10.769]}
        rotation={[0.046, -0.326, -0.065]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.974, 0.412, -10.724]}
        rotation={[1.796, 1.44, -1.794]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.58, 0.432, -10.445]}
        rotation={[3.132, -0.966, 3.033]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.456, 0.421, -10.535]}
        rotation={[2.998, -1.287, 2.88]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.527, 0.417, -10.438]}
        rotation={[-3.112, -0.851, 3.053]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.429, 0.428, -10.462]}
        rotation={[0.112, -0.027, 0.034]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.504, 0.412, -10.44]}
        rotation={[-2.933, 1.183, 3.042]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.476, 0.422, -10.521]}
        rotation={[0.016, 0.971, 0.129]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.646, 0.459, -10.681]}
        rotation={[-3.004, -0.185, 3.106]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.557, 0.441, -10.603]}
        rotation={[-0.058, 1.372, 0.147]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.561, 0.413, -10.466]}
        rotation={[-3.005, 0.63, -3.138]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.591, 0.419, -10.44]}
        rotation={[-3.127, -1.026, 3.063]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.613, 0.421, -10.482]}
        rotation={[-3.062, -0.044, 3.078]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.69, 0.436, -10.499]}
        rotation={[0.077, -0.276, 0.034]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.538, 0.431, -10.462]}
        rotation={[2.952, 0.972, -2.928]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.422, 0.457, -10.428]}
        rotation={[-0.356, -1.249, -0.386]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.41, 0.449, -10.45]}
        rotation={[-1.597, -1.397, -1.574]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.584, 0.426, -10.267]}
        rotation={[3.136, -0.123, -2.952]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.39, 0.443, -10.276]}
        rotation={[-0.521, -1.339, -0.557]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.386, 0.454, -10.385]}
        rotation={[-0.22, -1.074, -0.197]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.359, 0.45, -10.41]}
        rotation={[-0.43, -1.279, -0.459]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.659, 0.417, -10.392]}
        rotation={[2.924, 0.8, -2.935]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.389, 0.444, -10.351]}
        rotation={[-0.636, -1.318, -0.651]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.495, 0.442, -10.408]}
        rotation={[-0.663, -1.386, -0.688]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.424, 0.448, -10.457]}
        rotation={[0.138, 0.863, -0.269]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.455, 0.437, -10.485]}
        rotation={[3.103, -0.212, -2.966]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.154, 0.654, -9.909]}
        rotation={[-0.133, 0.236, -0.006]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.113, 0.675, -9.868]}
        rotation={[-0.101, -1.055, -0.033]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.027, 0.655, -9.982]}
        rotation={[3.016, -0.379, -3.093]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.043, 0.677, -9.814]}
        rotation={[0.421, 1.53, -0.528]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.005, 0.681, -9.768]}
        rotation={[-0.09, 0.76, -0.045]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.113, 0.675, -9.72]}
        rotation={[-0.119, -1.188, -0.036]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.095, 0.66, -9.911]}
        rotation={[-0.076, -0.125, -0.031]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.014, 0.661, -9.873]}
        rotation={[3.019, 0.667, 3.132]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.023, 0.679, -9.74]}
        rotation={[3.058, 1.078, -3.106]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.196, 0.654, -9.883]}
        rotation={[-2.975, -1.512, -2.913]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.26, 0.668, -9.77]}
        rotation={[-0.092, -1.206, -0.011]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.207, 0.642, -9.983]}
        rotation={[3.081, -0.362, 3.136]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.015, 0.448, -11.029]}
        rotation={[-0.086, 1.217, -0.076]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.077, 0.435, -11.008]}
        rotation={[-0.095, -1.21, 0.056]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.062, 0.445, -10.963]}
        rotation={[2.996, 0.88, 3.116]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.039, 0.44, -11.056]}
        rotation={[3, -0.736, -3.104]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.121, 0.415, -11.227]}
        rotation={[3.105, -1.412, -3.052]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.09, 0.426, -11.079]}
        rotation={[2.992, -0.432, 3.128]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.132, 0.447, -11.036]}
        rotation={[2.995, -0.374, 3.136]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.075, 0.42, -11.214]}
        rotation={[-0.109, -0.962, -0.022]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.085, 0.429, -11.119]}
        rotation={[3.003, 0.277, 3.131]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.039, 0.441, -11.017]}
        rotation={[-0.092, -0.449, 0.029]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.073, 0.411, -11.156]}
        rotation={[-0.227, -1.203, -0.044]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.021, 0.418, -11.16]}
        rotation={[-0.167, 0.418, 0.013]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.368, 0.223, -11.315]}
        rotation={[2.491, -1.306, 2.612]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.238, 0.224, -11.248]}
        rotation={[-0.202, 0.778, 0.089]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.412, 0.248, -11.191]}
        rotation={[-0.283, 0.864, 0.16]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.201, 0.198, -11.367]}
        rotation={[3.025, -0.053, 3.064]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.359, 0.217, -11.38]}
        rotation={[2.984, -0.369, 3.038]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.435, 0.23, -11.238]}
        rotation={[3.125, 0.743, 2.997]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.233, 0.237, -11.189]}
        rotation={[-3.073, 1.223, 2.916]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.376, 0.25, -11.138]}
        rotation={[-2.375, 1.456, 2.225]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.364, 0.211, -11.439]}
        rotation={[3.123, 0.969, 3.025]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.199, 0.214, -11.279]}
        rotation={[-0.179, 0.494, 0.101]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.288, 0.212, -11.37]}
        rotation={[-3.024, 1.158, 2.888]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.388, 0.231, -11.32]}
        rotation={[0.45, -1.363, 0.646]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.081, 0.481, -10.97]}
        rotation={[-3.126, 0.505, -3.136]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.281, 0.476, -10.788]}
        rotation={[0.018, -0.185, 0.033]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.127, 0.474, -10.873]}
        rotation={[-0.012, -1.274, -0.028]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.235, 0.471, -10.754]}
        rotation={[0.08, -0.27, 0.044]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.136, 0.495, -11.024]}
        rotation={[-3.105, 1.491, -3.104]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.28, 0.486, -10.995]}
        rotation={[0.041, 1.022, 0.04]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.244, 0.486, -11.031]}
        rotation={[-3.126, 0.567, -3.092]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.18, 0.471, -10.906]}
        rotation={[0.178, 1.472, -0.093]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.152, 0.478, -10.885]}
        rotation={[3.135, 1.249, -3.017]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.077, 0.474, -10.866]}
        rotation={[0.08, 0.58, -0.069]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.21, 0.488, -10.967]}
        rotation={[-3.096, 1.177, 3.141]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.261, 0.476, -10.903]}
        rotation={[-3.053, 0.79, 3.133]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.375, 0.235, -11.156]}
        rotation={[-2.902, -0.976, -2.901]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.379, 0.232, -11.112]}
        rotation={[-2.726, -1.169, -2.782]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.315, 0.252, -11.245]}
        rotation={[0.24, 1.086, -0.162]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.209, 0.263, -11.4]}
        rotation={[-2.827, -1.075, -2.863]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.258, 0.263, -11.322]}
        rotation={[-0.112, -0.944, -0.174]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.163, 0.269, -11.297]}
        rotation={[2.873, 1.266, -2.777]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.175, 0.272, -11.384]}
        rotation={[0.707, 1.281, -0.605]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.296, 0.243, -11.185]}
        rotation={[0.036, -0.067, -0.18]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.057, 0.28, -11.18]}
        rotation={[-2.827, -1.094, -2.83]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.253, 0.272, -11.274]}
        rotation={[-0.066, -0.861, -0.237]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.271, 0.249, -11.261]}
        rotation={[-3.127, 0.248, -2.987]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.268, 0.276, -11.418]}
        rotation={[2.907, 1.171, -2.795]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.058, 0.418, -11.266]}
        rotation={[1.53, -1.367, 1.482]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.02, 0.449, -11.37]}
        rotation={[2.857, -1.076, 2.76]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.102, 0.425, -11.264]}
        rotation={[0.09, -0.153, 0.151]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.009, 0.434, -11.342]}
        rotation={[0.171, -0.468, 0.194]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.024, 0.436, -11.248]}
        rotation={[-2.935, 0.493, 2.892]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.013, 0.439, -11.391]}
        rotation={[-2.734, 1.124, 2.746]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.135, 0.408, -11.113]}
        rotation={[0.041, 0.141, 0.18]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.022, 0.419, -11.185]}
        rotation={[-3.015, 0.169, 2.939]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.204, 0.377, -11.198]}
        rotation={[2.317, -1.309, 2.192]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.027, 0.445, -11.398]}
        rotation={[0.012, 0.125, 0.194]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.001, 0.453, -11.344]}
        rotation={[-3.012, 0.35, 2.882]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.118, 0.408, -11.262]}
        rotation={[-0.009, 0.129, 0.156]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.867, 0.64, -10.393]}
        rotation={[-1.061, 1.473, 0.881]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.123, 0.66, -10.226]}
        rotation={[-0.169, 0.891, 0.008]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.104, 0.637, -10.365]}
        rotation={[-0.158, 0.835, 0.075]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.807, 0.673, -10.24]}
        rotation={[-0.191, 0.444, 0.028]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.941, 0.659, -10.254]}
        rotation={[2.943, -0.578, 3.007]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.909, 0.653, -10.311]}
        rotation={[3.038, 0.917, 3.091]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.073, 0.643, -10.387]}
        rotation={[-0.275, 1.302, 0.14]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.028, 0.658, -10.216]}
        rotation={[-0.149, 0.198, 0.013]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.921, 0.628, -10.409]}
        rotation={[3.01, 0.481, 3.04]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.087, 0.65, -10.352]}
        rotation={[2.995, 0.428, 3.095]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.021, 0.643, -10.353]}
        rotation={[0.552, -1.514, 0.737]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.931, 0.639, -10.418]}
        rotation={[3.059, 0.427, 3.005]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.607, 0.054, -9.779]}
        rotation={[0.075, 0.42, -0.128]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.635, 0.051, -9.869]}
        rotation={[3.102, 0.531, -2.99]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.608, 0.051, -9.783]}
        rotation={[-3.036, -0.548, -2.954]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.501, 0.074, -9.706]}
        rotation={[3.11, 0.496, -2.99]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.641, 0.051, -9.608]}
        rotation={[0.143, 0.489, -0.191]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.672, 0.044, -9.74]}
        rotation={[0.093, 0.513, -0.111]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.725, 0.036, -9.708]}
        rotation={[-3.002, -0.824, -2.996]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.572, 0.069, -9.799]}
        rotation={[-2.855, -1.232, -2.891]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.705, 0.024, -9.743]}
        rotation={[0.154, 0.851, -0.2]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[3.656, 0.041, -9.778]}
        rotation={[3.063, 0.487, -2.936]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.747, 0.03, -9.694]}
        rotation={[-3.098, -0.353, -3.017]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.535, 0.05, -9.788]}
        rotation={[3.138, 0.217, -3.067]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.246, 0.034, -10.218]}
        rotation={[0.152, -0.993, 0.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.384, 0.07, -10.397]}
        rotation={[0.056, 0.87, 0.035]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.54, 0.049, -10.228]}
        rotation={[0.036, 0.364, 0.088]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.419, 0.043, -10.169]}
        rotation={[0.063, 0.622, 0.047]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.21, 0.019, -10.173]}
        rotation={[0.24, -0.904, 0.168]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.274, 0.022, -10.033]}
        rotation={[-0.061, 1.261, 0.15]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.37, 0.046, -10.14]}
        rotation={[-2.867, 1.417, 2.913]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.291, 0.052, -10.314]}
        rotation={[-3.017, 0.251, 3.131]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.673, 0.052, -10.093]}
        rotation={[-2.906, 1.099, 2.952]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.289, 0.033, -10.278]}
        rotation={[0.143, -0.909, 0.074]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.438, 0.03, -10.111]}
        rotation={[0.132, -0.507, 0.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.362, 0.05, -10.364]}
        rotation={[-2.927, 0.771, 2.971]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.785, 0.238, -10.753]}
        rotation={[0.176, -0.741, 0.06]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.68, 0.23, -10.822]}
        rotation={[1.81, -1.508, 1.689]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.855, 0.224, -10.659]}
        rotation={[-2.99, 0.832, 3.048]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.559, 0.211, -10.772]}
        rotation={[0.134, -0.539, 0.06]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.595, 0.241, -10.778]}
        rotation={[0.141, 0.352, 0.056]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.52, 0.201, -10.544]}
        rotation={[0.036, 0.752, 0.052]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.468, 0.252, -10.857]}
        rotation={[0.988, -1.542, 0.878]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.494, 0.193, -10.518]}
        rotation={[-2.995, -0.235, 3.087]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.824, 0.22, -10.643]}
        rotation={[0.202, -0.855, 0.06]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.815, 0.228, -10.58]}
        rotation={[0.24, -1.308, 0.17]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.692, 0.211, -10.636]}
        rotation={[0.152, -0.206, -0.002]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.599, 0.203, -10.576]}
        rotation={[-2.827, 1.263, 2.935]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.8, 0.325, -10.239]}
        rotation={[-3.12, 0.808, 3.139]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.694, 0.325, -10.152]}
        rotation={[-3.03, 1.257, 3.028]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.71, 0.318, -10.234]}
        rotation={[0.059, 0.685, -0.032]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.719, 0.311, -9.97]}
        rotation={[0.095, -0.684, 0.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.716, 0.315, -10.119]}
        rotation={[-3.048, -0.803, -3.124]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.856, 0.331, -10.114]}
        rotation={[0.014, 0.435, 0.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.565, 0.323, -10.105]}
        rotation={[0.081, -0.506, -0.032]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.773, 0.32, -10.135]}
        rotation={[-3.085, -0.7, 3.088]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.585, 0.313, -10.183]}
        rotation={[-0.129, -1.429, -0.126]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.748, 0.319, -10.235]}
        rotation={[0.183, -1.301, 0.167]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.574, 0.311, -10.09]}
        rotation={[-3.067, 1.337, 3.084]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.724, 0.31, -10.197]}
        rotation={[-3.133, 1.383, -3.082]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.759, 0.118, -10.631]}
        rotation={[0.111, 0.852, -0.044]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.811, 0.12, -10.641]}
        rotation={[3.066, 1.101, -3.039]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.811, 0.133, -10.736]}
        rotation={[-3.092, -0.108, -3.08]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.986, 0.135, -10.798]}
        rotation={[0.011, -0.487, -0.042]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.921, 0.126, -10.793]}
        rotation={[-3.111, -0.024, -3.091]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.909, 0.139, -10.89]}
        rotation={[0.064, 0.562, -0.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.956, 0.13, -10.674]}
        rotation={[-0.12, -1.304, -0.153]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.915, 0.118, -10.604]}
        rotation={[0.113, 1.221, -0.113]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.889, 0.126, -10.743]}
        rotation={[-3, -0.811, -3.021]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.78, 0.126, -10.631]}
        rotation={[-3.06, -0.877, -3.067]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.675, 0.126, -10.746]}
        rotation={[3.08, 0.938, -3.057]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.821, 0.133, -10.861]}
        rotation={[-0.023, -1.12, -0.102]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[7.365, 0.33, -3.509]}
        rotation={[3.049, 0.844, -2.847]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.343, 0.334, -3.494]}
        rotation={[0.363, 0.927, -0.342]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[7.148, 0.364, -3.505]}
        rotation={[0.344, 0.807, -0.274]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[7.351, 0.343, -3.515]}
        rotation={[0.158, 0.35, -0.136]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.358, 0.348, -3.507]}
        rotation={[0.234, 0.544, -0.174]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.309, 0.335, -3.418]}
        rotation={[0.637, 1.25, -0.548]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.417, 0.332, -3.53]}
        rotation={[-0.207, -1.033, -0.358]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.363, 0.342, -3.484]}
        rotation={[-3.071, 0.068, -2.963]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.33, 0.351, -3.5]}
        rotation={[-2.995, -0.318, -2.939]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.373, 0.317, -3.4]}
        rotation={[3.115, 0.575, -2.931]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.423, 0.329, -3.519]}
        rotation={[2.087, 1.38, -1.974]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.274, 0.344, -3.525]}
        rotation={[0.192, 0.314, -0.152]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.656, 0.304, -3.542]}
        rotation={[3.026, -0.876, -3.079]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[7.539, 0.27, -3.618]}
        rotation={[-0.113, 0.334, -0.055]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.606, 0.297, -3.44]}
        rotation={[3.055, -0.547, -3.103]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.475, 0.292, -3.612]}
        rotation={[-0.132, -0.867, -0.056]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.71, 0.319, -3.469]}
        rotation={[2.941, 1.136, -3.121]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.544, 0.291, -3.574]}
        rotation={[-0.063, 1.398, -0.1]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.516, 0.289, -3.652]}
        rotation={[3.016, -0.64, -3.082]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.655, 0.294, -3.56]}
        rotation={[-0.116, 1.193, 0.022]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.765, 0.291, -3.54]}
        rotation={[-0.096, 0.659, 0.032]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.64, 0.267, -3.701]}
        rotation={[3.03, -1.084, 3.118]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.651, 0.288, -3.564]}
        rotation={[-0.073, -1.074, 0.081]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.587, 0.271, -3.782]}
        rotation={[3.012, 0.785, -3.104]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.39, 0.438, -2.677]}
        rotation={[-0.014, -0.442, 0.066]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.314, 0.428, -2.834]}
        rotation={[3.047, 0.576, 3.046]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.289, 0.434, -2.752]}
        rotation={[3.092, 0.728, 3.079]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.287, 0.442, -2.612]}
        rotation={[-0.09, 0.582, 0.1]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.155, 0.445, -2.619]}
        rotation={[3.103, 1.203, 3.095]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.399, 0.456, -2.705]}
        rotation={[-3.107, 0.979, 3.062]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.161, 0.432, -2.833]}
        rotation={[-0.08, 0.266, 0.08]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.335, 0.435, -2.841]}
        rotation={[-0.322, 1.217, 0.252]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.385, 0.425, -2.887]}
        rotation={[3.053, 0.059, 3.082]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.053, 0.407, -2.786]}
        rotation={[-3.129, 0.977, 2.981]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.238, 0.442, -2.608]}
        rotation={[-0.143, 0.85, 0.058]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.434, 0.454, -2.593]}
        rotation={[0.316, -1.423, 0.391]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.058, 0.298, -3.696]}
        rotation={[3.002, 0.131, 3.136]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.223, 0.241, -3.947]}
        rotation={[2.934, -0.134, 3.104]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.285, 0.295, -3.778]}
        rotation={[2.976, 0.391, 3.068]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.228, 0.283, -3.787]}
        rotation={[-0.304, 1.028, 0.162]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.191, 0.311, -3.624]}
        rotation={[2.87, -0.991, 3.069]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.315, 0.298, -3.652]}
        rotation={[-0.091, -1.388, 0.052]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.349, 0.287, -3.761]}
        rotation={[2.951, -0.325, 3.099]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.116, 0.284, -3.701]}
        rotation={[2.92, -0.22, 3.04]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.328, 0.282, -3.873]}
        rotation={[2.878, -0.942, 2.991]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.232, 0.249, -3.923]}
        rotation={[2.902, -0.423, 3.128]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.234, 0.272, -3.803]}
        rotation={[2.975, -0.138, 3.119]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[7.078, 0.294, -3.714]}
        rotation={[2.929, -0.367, 3.139]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.055, 0.228, -4.092]}
        rotation={[0.172, -0.631, -0.047]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.377, 0.209, -4.047]}
        rotation={[-2.916, -0.57, -3.058]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.285, 0.176, -3.839]}
        rotation={[0.173, -0.007, -0.027]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.088, 0.225, -4.192]}
        rotation={[0.371, -1.516, 0.243]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.231, 0.228, -4.03]}
        rotation={[0.204, -0.522, 0.005]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.076, 0.196, -3.941]}
        rotation={[0.192, 0.526, -0.002]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.101, 0.234, -4.114]}
        rotation={[-2.985, -0.293, 3.103]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.056, 0.226, -4.062]}
        rotation={[0.264, 1.196, -0.12]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.216, 0.221, -4.051]}
        rotation={[0.182, -0.079, -0.066]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.98, 0.179, -3.936]}
        rotation={[0.06, 1.377, 0.169]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.266, 0.231, -4.148]}
        rotation={[0.185, -0.163, 0.038]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.017, 0.21, -3.979]}
        rotation={[0.104, -1.305, -0.107]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.293, 0.853, -9.248]}
        rotation={[-0.501, 1.484, 0.475]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.511, 0.842, -9.181]}
        rotation={[3.119, -1.223, 3.121]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.299, 0.847, -9.25]}
        rotation={[3.047, -1.401, 3.057]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.288, 0.854, -9.203]}
        rotation={[-0.007, -1.16, 0.013]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.206, 0.849, -9.27]}
        rotation={[3.097, 0.76, -3.118]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.356, 0.851, -9.361]}
        rotation={[3.11, -0.828, -3.131]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.44, 0.851, -9.34]}
        rotation={[3.13, 0.629, 3.047]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.434, 0.869, -9.105]}
        rotation={[-0.11, 1.069, 0.028]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.437, 0.84, -9.324]}
        rotation={[3.094, -0.059, 3.112]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.48, 0.847, -9.123]}
        rotation={[-0.046, 0.005, 0.066]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.469, 0.861, -9.136]}
        rotation={[3.051, 0.445, 3.085]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.227, 0.853, -9.185]}
        rotation={[3.09, -1.451, -3.11]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.054, 0.872, -9.097]}
        rotation={[0.224, -1.046, 0.286]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.116, 0.837, -9.353]}
        rotation={[-3.098, 0.53, 2.969]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.068, 0.868, -9.129]}
        rotation={[-0.304, 1.133, 0.274]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.033, 0.859, -9.315]}
        rotation={[-0.143, 0.507, 0.135]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.206, 0.836, -9.308]}
        rotation={[2.803, -1.174, 2.777]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.08, 0.887, -9.185]}
        rotation={[0.399, -1.173, 0.476]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.063, 0.867, -8.997]}
        rotation={[2.989, -0.715, 2.998]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.121, 0.845, -9.179]}
        rotation={[2.476, -1.362, 2.522]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.286, 0.821, -9.256]}
        rotation={[3.056, -0.381, 2.96]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.06, 0.862, -9.142]}
        rotation={[-0.465, 1.161, 0.47]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.118, 0.843, -9.324]}
        rotation={[-2.931, 0.976, 2.893]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.068, 0.846, -9.397]}
        rotation={[2.965, -0.712, 2.989]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.322, 0.428, -7.892]}
        rotation={[3.07, 1.073, -3.018]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.341, 0.427, -7.837]}
        rotation={[3.096, 0.625, -3.024]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.34, 0.426, -7.952]}
        rotation={[0.044, 1.013, -0.103]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.322, 0.423, -7.827]}
        rotation={[-0.006, -0.483, -0.101]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.272, 0.431, -7.791]}
        rotation={[2.972, 1.114, -2.981]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.294, 0.418, -7.871]}
        rotation={[-0.029, -0.428, -0.015]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.334, 0.432, -8.044]}
        rotation={[0.048, -0.274, -0.059]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.231, 0.428, -8.014]}
        rotation={[-0.905, -1.457, -0.948]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.426, 0.422, -7.968]}
        rotation={[-3.134, -0.204, -3.055]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.395, 0.418, -7.842]}
        rotation={[0.009, 0.343, -0.071]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.357, 0.431, -8.033]}
        rotation={[3.122, 0.289, -3.081]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.288, 0.437, -8.061]}
        rotation={[3.078, 1.106, -3.075]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.851, 0.569, -8.296]}
        rotation={[2.604, 1.254, -2.563]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.8, 0.564, -8.33]}
        rotation={[0.027, 0.213, -0.18]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.063, 0.534, -8.129]}
        rotation={[2.986, 0.678, -2.983]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.731, 0.58, -8.155]}
        rotation={[-2.99, -0.982, -2.859]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.023, 0.547, -8.387]}
        rotation={[-0.07, -0.538, -0.197]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.121, 0.492, -8.291]}
        rotation={[-0.909, -1.326, -0.849]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.056, 0.512, -8.288]}
        rotation={[-0.032, 0.219, -0.105]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.217, 0.505, -8.155]}
        rotation={[2.724, 1.096, -2.75]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[3.057, 0.533, -7.996]}
        rotation={[0.211, 0.943, -0.271]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.908, 0.545, -8.345]}
        rotation={[2.974, 0.606, -2.921]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.8, 0.575, -8.207]}
        rotation={[3.115, 0.248, -2.94]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.906, 0.557, -8.075]}
        rotation={[-0.116, -0.465, -0.186]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.811, 0.459, -6.036]}
        rotation={[-3.024, 1.378, 2.956]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.873, 0.459, -6.084]}
        rotation={[-0.117, 0.791, 0.015]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.895, 0.469, -5.97]}
        rotation={[-3.119, 1.393, 3.057]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.807, 0.441, -6.123]}
        rotation={[2.969, -0.861, 3.074]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.795, 0.455, -6.049]}
        rotation={[-0.105, 0.147, -0.01]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.722, 0.483, -5.857]}
        rotation={[3.092, 0.82, 3.07]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.704, 0.464, -6.006]}
        rotation={[3.07, 0.135, 3.076]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.754, 0.468, -5.953]}
        rotation={[3.097, 0.574, 3.062]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.753, 0.469, -5.976]}
        rotation={[-0.154, 0.694, 0.047]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.756, 0.472, -5.978]}
        rotation={[3.052, -0.431, -3.141]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.697, 0.478, -5.899]}
        rotation={[3.017, -0.408, 3.065]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.817, 0.484, -5.808]}
        rotation={[-0.057, -0.629, 0.074]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.733, 0.498, -6.554]}
        rotation={[-0.267, 1.307, 0.163]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.919, 0.5, -6.696]}
        rotation={[2.998, -0.365, 3.072]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.824, 0.498, -6.604]}
        rotation={[3.003, -0.466, 3.04]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.869, 0.481, -6.684]}
        rotation={[-0.161, 0.596, 0.072]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[3.97, 0.517, -6.52]}
        rotation={[2.998, -0.379, 3.09]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.953, 0.516, -6.536]}
        rotation={[0.566, -1.422, 0.678]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.805, 0.503, -6.609]}
        rotation={[-0.187, 1.018, 0.077]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[3.828, 0.501, -6.535]}
        rotation={[2.988, -0.98, 3.084]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.797, 0.507, -6.475]}
        rotation={[2.998, -0.358, 3.017]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.734, 0.487, -6.593]}
        rotation={[-0.103, 0.602, 0.125]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[3.756, 0.487, -6.55]}
        rotation={[-3.083, 0.962, 2.963]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[3.853, 0.509, -6.545]}
        rotation={[0.073, -1.149, 0.227]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.968, 0.309, -5.204]}
        rotation={[-3.088, -0.894, -3.094]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.119, 0.288, -5.244]}
        rotation={[-3.018, -0.984, -2.994]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.97, 0.303, -5.348]}
        rotation={[0.176, 1.423, -0.1]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.996, 0.281, -5.16]}
        rotation={[3.11, 0.767, -3.077]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.784, 0.293, -5.237]}
        rotation={[0.046, -0.574, -0.023]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.903, 0.295, -5.245]}
        rotation={[-3.056, -0.427, -3.131]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.9, 0.301, -5.436]}
        rotation={[-0.01, -0.123, -0.065]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.098, 0.291, -5.205]}
        rotation={[0.072, 0.215, -0.096]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.982, 0.313, -5.437]}
        rotation={[0.103, 0.727, -0.021]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.749, 0.295, -5.16]}
        rotation={[-3.11, 0.199, -3.089]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.863, 0.322, -5.404]}
        rotation={[0.386, 1.399, -0.314]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.892, 0.311, -5.437]}
        rotation={[0.033, -0.115, -0.037]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.901, 0.395, -4.228]}
        rotation={[0.188, 0.763, -0.163]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.881, 0.396, -4.284]}
        rotation={[-3.077, 0.842, -3.065]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.899, 0.396, -4.175]}
        rotation={[2.886, 1.302, -2.756]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.01, 0.403, -4.419]}
        rotation={[3.081, 1.064, -2.921]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.973, 0.404, -4.369]}
        rotation={[-3.069, 0.748, -3.129]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.003, 0.397, -4.456]}
        rotation={[0.16, 0.68, -0.079]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.059, 0.392, -4.232]}
        rotation={[2.76, 1.352, -2.72]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.864, 0.393, -4.318]}
        rotation={[0.081, -0.649, -0.09]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[5.906, 0.392, -4.2]}
        rotation={[0.133, 0.724, -0.139]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.952, 0.41, -4.443]}
        rotation={[0.016, -0.952, -0.149]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.928, 0.384, -4.284]}
        rotation={[-2.929, -0.715, -3.031]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.061, 0.378, -4.286]}
        rotation={[0.031, -0.693, -0.06]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.61, 0.551, -3.346]}
        rotation={[0.146, -0.879, 0.029]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.51, 0.555, -3.418]}
        rotation={[0.241, -0.925, 0.148]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.678, 0.59, -3.582]}
        rotation={[2.818, -1.466, 2.697]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.831, 0.575, -3.395]}
        rotation={[0.146, -0.848, 0.068]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.49, 0.554, -3.416]}
        rotation={[-3.055, -0.201, 3.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.749, 0.583, -3.464]}
        rotation={[0.159, -0.377, 0.096]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.576, 0.554, -3.349]}
        rotation={[-3.021, -0.055, 3.129]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.52, 0.565, -3.443]}
        rotation={[3.097, -0.983, 3.026]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.645, 0.582, -3.588]}
        rotation={[-2.665, 1.288, 2.744]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.737, 0.575, -3.406]}
        rotation={[0.152, -0.042, 0.09]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.484, 0.563, -3.497]}
        rotation={[-3.01, 0.645, 3.033]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.546, 0.556, -3.358]}
        rotation={[0.166, -0.295, 0.071]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.787, 0.475, -3.798]}
        rotation={[0.059, -1.267, 0.005]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.863, 0.459, -3.87]}
        rotation={[3.106, -0.723, 3.13]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.827, 0.483, -3.856]}
        rotation={[0.026, 1.402, 0.025]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.9, 0.476, -3.744]}
        rotation={[0.01, 0.441, -0.021]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.783, 0.473, -3.698]}
        rotation={[0.006, -0.888, 0.003]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.722, 0.483, -3.862]}
        rotation={[3.114, -1.256, 3.063]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.936, 0.484, -3.826]}
        rotation={[-0.029, -0.275, 0.053]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.002, 0.465, -3.677]}
        rotation={[0.009, 0.115, -0.026]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.004, 0.462, -3.747]}
        rotation={[0.159, 1.45, -0.196]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.737, 0.456, -3.766]}
        rotation={[-0.042, 0.784, 0.071]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.937, 0.47, -3.784]}
        rotation={[-0.03, -0.472, -0.053]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.866, 0.472, -3.691]}
        rotation={[0.036, -0.348, 0.024]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.113, 0.835, -9.323]}
        rotation={[3.082, -0.536, 3.005]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.054, 0.826, -9.451]}
        rotation={[-3.018, 1.17, 3.025]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.029, 0.825, -9.357]}
        rotation={[0.245, -1.154, 0.196]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.192, 0.834, -9.411]}
        rotation={[-3.14, 0.159, 3.095]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.076, 0.825, -9.342]}
        rotation={[-3.061, 0.27, 3.009]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.054, 0.826, -9.341]}
        rotation={[0.117, -0.996, 0.137]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.05, 0.824, -9.449]}
        rotation={[-2.997, 0.944, 3.046]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.057, 0.812, -9.339]}
        rotation={[-0.099, 0.947, 0.198]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.05, 0.819, -9.362]}
        rotation={[-3.036, 0.92, 3.078]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[0.08, 0.827, -9.501]}
        rotation={[3.003, -0.866, 2.969]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.088, 0.83, -9.307]}
        rotation={[0.295, -1.166, 0.288]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.016, 0.817, -9.346]}
        rotation={[-3.134, -0.332, 3.082]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[3.653, 0.257, -8.158]}
        rotation={[3.055, -0.201, -3.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.478, 0.248, -8.372]}
        rotation={[2.861, 1.229, -2.966]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.592, 0.266, -8.115]}
        rotation={[0.12, 1.189, -0.211]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.724, 0.247, -8.214]}
        rotation={[3.017, 0.1, -2.981]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.649, 0.227, -8.428]}
        rotation={[3.082, -0.475, -2.985]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.862, 0.24, -8.354]}
        rotation={[3.024, 0.061, -3.071]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.628, 0.237, -8.433]}
        rotation={[-0.146, -0.278, -0.112]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.658, 0.236, -8.325]}
        rotation={[3.14, -0.633, -2.987]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.821, 0.216, -8.337]}
        rotation={[-3.091, -0.812, -2.935]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.808, 0.245, -8.139]}
        rotation={[-0.15, -0.374, -0.139]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.617, 0.247, -8.221]}
        rotation={[2.95, 0.994, -3.039]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.513, 0.259, -8.228]}
        rotation={[0.087, 0.954, -0.147]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.312, 0.471, -8.338]}
        rotation={[3.001, 0.068, 3.09]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.948, 0.433, -8.284]}
        rotation={[3.047, 0.774, 2.978]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.035, 0.444, -8.271]}
        rotation={[-1.401, 1.454, 1.313]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.195, 0.431, -8.575]}
        rotation={[-0.458, 1.284, 0.368]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.163, 0.465, -8.217]}
        rotation={[3.043, 0.588, 3.038]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.239, 0.437, -8.537]}
        rotation={[-0.025, -0.589, 0.103]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.051, 0.404, -8.572]}
        rotation={[-1.27, 1.418, 1.158]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.123, 0.424, -8.597]}
        rotation={[-0.262, 0.982, 0.181]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.029, 0.434, -8.346]}
        rotation={[-0.129, -0.121, 0.123]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.166, 0.483, -8.17]}
        rotation={[-0.101, -0.566, 0.066]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.133, 0.459, -8.3]}
        rotation={[2.946, -0.181, 3.087]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.198, 0.419, -8.577]}
        rotation={[2.87, -0.766, 2.974]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.648, 0.226, -6.674]}
        rotation={[0.006, 0.896, 0.037]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.727, 0.224, -6.733]}
        rotation={[0.033, 0.37, 0.07]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.809, 0.223, -6.566]}
        rotation={[0.084, -0.412, 0.077]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.634, 0.225, -6.773]}
        rotation={[-3.111, 0.457, 3.078]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.866, 0.234, -6.538]}
        rotation={[0.786, -1.482, 0.782]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.862, 0.241, -6.77]}
        rotation={[0.053, 0.146, 0.052]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.717, 0.231, -6.668]}
        rotation={[1.285, -1.506, 1.256]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.752, 0.234, -6.727]}
        rotation={[-0.231, 1.402, 0.318]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.713, 0.219, -6.768]}
        rotation={[0.063, -0.339, 0.04]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.824, 0.234, -6.545]}
        rotation={[0.028, -0.057, 0.03]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.868, 0.238, -6.7]}
        rotation={[-0.146, 1.248, 0.196]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.908, 0.249, -6.831]}
        rotation={[-0.575, 1.462, 0.671]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.909, 0.332, -7.026]}
        rotation={[3.007, -0.748, 3.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.967, 0.33, -7.205]}
        rotation={[-0.172, 0.805, 0.148]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.896, 0.327, -7.177]}
        rotation={[0.378, -1.34, 0.43]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.97, 0.335, -7.026]}
        rotation={[-3.113, 0.5, 2.953]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.992, 0.34, -7.127]}
        rotation={[-0.021, -0.051, 0.183]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.011, 0.341, -6.895]}
        rotation={[2.827, -1.134, 2.786]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.097, 0.345, -6.861]}
        rotation={[-3.116, 0.228, 3.056]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.882, 0.328, -7.16]}
        rotation={[0.278, -1.231, 0.386]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.904, 0.322, -7.004]}
        rotation={[-3.136, 0.178, 3.063]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.974, 0.339, -7.063]}
        rotation={[-0.425, 1.212, 0.36]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.975, 0.354, -6.921]}
        rotation={[3.02, -0.337, 3.04]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.956, 0.337, -7.136]}
        rotation={[3.055, -0.317, 2.999]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.262, 0.203, -5.124]}
        rotation={[-3.039, -0.403, -3.136]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[5.951, 0.217, -5.276]}
        rotation={[0.02, 0.974, 0.037]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.039, 0.187, -5.128]}
        rotation={[0.139, 0.102, -0.031]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.267, 0.221, -5.261]}
        rotation={[0.162, -0.969, -0.002]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.246, 0.232, -5.329]}
        rotation={[-3.06, -0.637, 3.085]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.437, 0.233, -5.267]}
        rotation={[-3.06, -0.557, 3.073]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.331, 0.214, -5.27]}
        rotation={[0.028, -1.234, -0.089]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.347, 0.224, -5.371]}
        rotation={[0.091, 0.995, -0.032]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.274, 0.23, -5.293]}
        rotation={[0.094, -0.747, -0.001]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.047, 0.228, -5.285]}
        rotation={[0.103, 1.236, -0.005]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.364, 0.216, -5.161]}
        rotation={[-3.045, 0.034, 3.134]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.172, 0.224, -5.354]}
        rotation={[0.126, 0.841, 0.04]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.325, 0.467, -2.047]}
        rotation={[-2.9, 1.151, 2.836]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[7.594, 0.507, -2.051]}
        rotation={[2.629, -1.234, 2.726]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.583, 0.516, -1.816]}
        rotation={[-2.623, 1.381, 2.51]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.249, 0.484, -1.936]}
        rotation={[-0.152, 0.555, 0.105]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.37, 0.492, -1.855]}
        rotation={[-0.258, 0.879, 0.173]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.29, 0.485, -1.823]}
        rotation={[2.961, -0.444, 3.038]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.4, 0.485, -2.096]}
        rotation={[-0.174, 0.813, 0.106]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.514, 0.511, -1.845]}
        rotation={[3.071, 0.214, 2.989]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.388, 0.506, -1.799]}
        rotation={[-3.037, 1.121, 2.881]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.318, 0.484, -1.953]}
        rotation={[3.047, 0.274, 3.02]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.359, 0.475, -1.973]}
        rotation={[1.116, -1.483, 1.252]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[7.393, 0.479, -2.085]}
        rotation={[0.204, -1.162, 0.304]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.269, 0.534, -2.463]}
        rotation={[0.159, -1.416, 0.293]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.364, 0.55, -2.431]}
        rotation={[-0.339, 1.259, 0.204]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.407, 0.538, -2.478]}
        rotation={[-2.982, 1.362, 2.876]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[6.177, 0.513, -2.542]}
        rotation={[-0.099, -0.784, 0.071]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.236, 0.523, -2.491]}
        rotation={[-0.081, -0.567, 0.022]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[6.234, 0.535, -2.613]}
        rotation={[1.204, -1.53, 1.249]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.227, 0.532, -2.501]}
        rotation={[3.036, -0.232, 3.13]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.403, 0.542, -2.488]}
        rotation={[0.078, -1.42, 0.21]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.249, 0.518, -2.58]}
        rotation={[3.088, 0.626, 3.053]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[6.327, 0.531, -2.569]}
        rotation={[0.152, -1.379, 0.234]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.28, 0.539, -2.462]}
        rotation={[3.1, 0.711, 3.031]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.443, 0.53, -2.485]}
        rotation={[-0.061, -1.141, -0.007]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.434, 0.542, -2.9]}
        rotation={[0.312, 1.092, -0.373]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.174, 0.585, -2.835]}
        rotation={[-0.055, -0.26, -0.142]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.312, 0.558, -2.86]}
        rotation={[-0.073, -0.409, -0.125]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[6.191, 0.571, -2.904]}
        rotation={[-2.394, -1.334, -2.404]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.349, 0.547, -3.07]}
        rotation={[-0.232, -0.851, -0.286]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.472, 0.531, -2.834]}
        rotation={[-0.524, -1.267, -0.574]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[6.251, 0.578, -2.839]}
        rotation={[-0.314, -1.059, -0.338]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.233, 0.565, -2.983]}
        rotation={[-0.258, -0.982, -0.267]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.324, 0.556, -2.867]}
        rotation={[-0.024, -0.335, -0.14]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.318, 0.561, -3.017]}
        rotation={[2.122, 1.419, -2.116]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.239, 0.571, -2.764]}
        rotation={[-3.088, -0.395, -2.999]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.435, 0.545, -2.88]}
        rotation={[-3.109, -0.049, -2.99]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.274, 0.476, -1.673]}
        rotation={[-2.221, 1.345, 2.205]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.428, 0.527, -1.408]}
        rotation={[-2.674, 1.234, 2.586]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.505, 0.524, -1.477]}
        rotation={[3.076, -0.363, 3.022]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.332, 0.507, -1.653]}
        rotation={[-3.125, 0.038, 3.021]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.373, 0.509, -1.436]}
        rotation={[-0.292, 1.075, 0.299]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.295, 0.51, -1.534]}
        rotation={[0.019, -0.031, 0.129]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.473, 0.519, -1.457]}
        rotation={[-0.109, 0.676, 0.238]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.642, 0.559, -1.587]}
        rotation={[2.688, -1.168, 2.709]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.563, 0.535, -1.501]}
        rotation={[0.123, -0.904, 0.198]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.357, 0.515, -1.486]}
        rotation={[-0.081, 0.291, 0.141]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.291, 0.504, -1.724]}
        rotation={[-0.887, 1.333, 0.908]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.415, 0.516, -1.434]}
        rotation={[2.816, -1.17, 2.758]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.555, 0.414, -1.855]}
        rotation={[2.982, -0.31, 3.121]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.483, 0.421, -1.793]}
        rotation={[-0.109, -0.152, 0.089]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.609, 0.419, -1.854]}
        rotation={[-0.15, 0.762, 0.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.407, 0.4, -2.038]}
        rotation={[3.039, 0.063, 3.085]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.603, 0.401, -1.972]}
        rotation={[3.047, 0.034, 3.076]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.42, 0.429, -1.741]}
        rotation={[-2.894, 1.378, 2.764]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.605, 0.416, -1.92]}
        rotation={[-0.125, -0.542, 0.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.422, 0.404, -1.929]}
        rotation={[3.018, 0.262, 3.098]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.573, 0.402, -2.071]}
        rotation={[-0.184, 0.543, 0.111]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.451, 0.385, -1.992]}
        rotation={[2.993, -0.158, 3.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.601, 0.404, -1.971]}
        rotation={[-0.134, 0.03, 0.06]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.491, 0.387, -2.053]}
        rotation={[3.091, 0.614, 3.04]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.153, 0.367, -2.832]}
        rotation={[-3.04, 0.052, -3.134]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.029, 0.374, -2.856]}
        rotation={[0.158, 0.5, 0.021]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[5.069, 0.368, -2.732]}
        rotation={[-2.995, -0.67, -3.08]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.935, 0.392, -2.98]}
        rotation={[-3.046, -1.431, 3.105]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.98, 0.379, -2.861]}
        rotation={[0.184, 0.8, 0.001]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[5.024, 0.358, -2.716]}
        rotation={[0.171, -1.131, -0.012]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.949, 0.379, -2.82]}
        rotation={[0.143, -0.155, -0.029]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.181, 0.375, -2.954]}
        rotation={[-2.925, -1.345, -3.038]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.995, 0.391, -2.951]}
        rotation={[-3.04, -1.045, 3.077]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.051, 0.378, -2.863]}
        rotation={[1.335, 1.538, -1.254]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.192, 0.373, -2.824]}
        rotation={[0.138, 0.697, -0.035]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.894, 0.38, -2.861]}
        rotation={[-2.985, -0.527, -3.105]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[5.62, 0.468, -4.713]}
        rotation={[2.205, 1.486, -2.15]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.663, 0.487, -5.029]}
        rotation={[-3.075, -0.226, -3.068]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.593, 0.495, -4.942]}
        rotation={[-3.058, 0.479, -3.07]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.709, 0.498, -5.057]}
        rotation={[0.076, -0.748, -0.032]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.641, 0.487, -4.898]}
        rotation={[-3.028, -0.049, -3.046]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.673, 0.501, -4.999]}
        rotation={[-3.037, 0.296, -3.064]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.643, 0.47, -4.738]}
        rotation={[-3.05, 0.852, 3.118]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.808, 0.459, -4.776]}
        rotation={[-3.051, 0.477, -3.11]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.867, 0.472, -4.917]}
        rotation={[-2.379, -1.482, -2.471]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.756, 0.472, -4.765]}
        rotation={[-3.053, -1.043, -3.089]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.788, 0.463, -4.782]}
        rotation={[-2.984, -0.709, -3.011]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.786, 0.483, -4.89]}
        rotation={[-0.095, -1.168, -0.199]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.595, 0.751, -5.197]}
        rotation={[-3.089, 1.228, 2.905]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.866, 0.734, -5.256]}
        rotation={[-0.205, 1.379, 0.048]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.727, 0.705, -5.541]}
        rotation={[-2.712, 1.424, 2.571]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.656, 0.696, -5.384]}
        rotation={[-0.077, -0.853, 0.118]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.809, 0.735, -5.317]}
        rotation={[-0.109, -0.407, 0.037]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.679, 0.704, -5.462]}
        rotation={[-0.112, -1.489, -0.012]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.603, 0.702, -5.462]}
        rotation={[-0.216, 0.88, 0.063]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.919, 0.731, -5.333]}
        rotation={[-0.167, 0.3, 0.032]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.722, 0.737, -5.166]}
        rotation={[2.936, -1.137, 3.066]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.635, 0.704, -5.429]}
        rotation={[2.974, -1.038, 3.037]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.524, 0.704, -5.488]}
        rotation={[-0.027, -1.239, 0.079]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.656, 0.74, -5.208]}
        rotation={[2.947, -0.833, 3.089]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.134, 0.523, -6.101]}
        rotation={[0.1, -0.645, -0.07]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.081, 0.524, -6.102]}
        rotation={[-3.085, 0.855, -3.006]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.208, 0.558, -6.231]}
        rotation={[0.118, 0.774, -0.027]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.061, 0.531, -6.13]}
        rotation={[-0.165, -1.276, -0.323]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[4.018, 0.564, -6.311]}
        rotation={[-2.825, -1.386, -2.939]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.175, 0.57, -6.363]}
        rotation={[-3.119, 0.736, -3.056]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.175, 0.569, -6.335]}
        rotation={[-2.976, -0.314, -3.072]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.062, 0.555, -6.231]}
        rotation={[-2.92, -1.173, -3.041]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.136, 0.551, -6.2]}
        rotation={[0.175, 0.277, -0.026]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.109, 0.551, -6.235]}
        rotation={[-3.028, 0.419, -3.12]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.017, 0.561, -6.278]}
        rotation={[-3.1, 0.533, -3.009]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.165, 0.515, -6.083]}
        rotation={[-2.846, -1.091, -3]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.686, 0.719, -6.066]}
        rotation={[-0.073, 0.038, 0.047]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.611, 0.683, -6.36]}
        rotation={[-0.241, 0.981, 0.182]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.517, 0.681, -6.326]}
        rotation={[-2.452, 1.459, 2.316]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.697, 0.699, -6.321]}
        rotation={[-0.071, -0.092, 0.119]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.707, 0.708, -6.157]}
        rotation={[0.009, -1.105, 0.066]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.492, 0.679, -6.275]}
        rotation={[3.126, 0.481, 3.014]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.545, 0.709, -6.049]}
        rotation={[-3.094, 1.214, 2.957]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.673, 0.699, -6.303]}
        rotation={[-0.068, 0.448, 0.089]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.637, 0.696, -6.143]}
        rotation={[-0.113, 0.561, 0.105]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.658, 0.691, -6.411]}
        rotation={[3.127, 0.615, 3.104]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.457, 0.689, -6.158]}
        rotation={[3.001, -0.859, 3.023]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.58, 0.696, -6.132]}
        rotation={[0.889, -1.503, 0.955]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.559, 0.588, -6.924]}
        rotation={[-0.114, 0.576, 0.119]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.228, 0.546, -7.02]}
        rotation={[3.056, -0.576, 3.015]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.328, 0.562, -6.99]}
        rotation={[-0.102, 0.284, 0.173]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.38, 0.554, -7.059]}
        rotation={[-0.084, 0.227, 0.094]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.353, 0.56, -7.033]}
        rotation={[0.45, -1.347, 0.462]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.292, 0.558, -7.001]}
        rotation={[2.912, -1.051, 2.893]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.375, 0.577, -6.81]}
        rotation={[-0.194, 0.943, 0.209]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.509, 0.604, -6.845]}
        rotation={[3.03, -0.199, 2.999]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.329, 0.567, -7.003]}
        rotation={[3.112, 0.035, 2.981]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.367, 0.582, -6.763]}
        rotation={[-2.908, 1.195, 2.829]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.395, 0.583, -6.793]}
        rotation={[-0.284, 0.954, 0.214]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.264, 0.546, -7.077]}
        rotation={[-1.831, 1.473, 1.74]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.124, 0.849, -9.16]}
        rotation={[-2.707, 1.34, 2.535]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.111, 0.85, -9.124]}
        rotation={[2.843, -1.017, 2.973]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.113, 0.869, -8.976]}
        rotation={[3.121, 0.765, 2.992]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.156, 0.884, -8.969]}
        rotation={[2.802, -1.1, 2.932]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.073, 0.868, -8.95]}
        rotation={[2.957, -0.456, 3.05]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.225, 0.862, -9.086]}
        rotation={[-0.26, 0.823, 0.168]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.103, 0.865, -9.008]}
        rotation={[-0.103, -0.534, 0.16]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.117, 0.876, -8.987]}
        rotation={[-2.835, 1.284, 2.664]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.025, 0.858, -9.021]}
        rotation={[2.996, -0.158, 3.043]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.98, 0.823, -9.161]}
        rotation={[2.969, 0.076, 2.969]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.974, 0.836, -9.051]}
        rotation={[3.067, 0.433, 2.951]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.152, 0.871, -8.968]}
        rotation={[-0.204, 0.551, 0.091]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.369, 0.885, -8.884]}
        rotation={[-3.107, 0.965, 3.083]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.396, 0.874, -8.842]}
        rotation={[-0.147, 1.113, 0.201]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.414, 0.874, -8.878]}
        rotation={[-3.134, 0.04, 3.097]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.477, 0.861, -8.833]}
        rotation={[-3.039, 1.259, 3.103]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.482, 0.869, -9.014]}
        rotation={[0.09, -0.796, 0.147]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.392, 0.891, -8.898]}
        rotation={[-0.091, 0.77, 0.13]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.416, 0.881, -8.891]}
        rotation={[3.107, -0.937, 3.054]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.462, 0.878, -8.865]}
        rotation={[-2.998, 1.069, 3.046]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.471, 0.889, -9.095]}
        rotation={[-3.05, 1.002, 3.058]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.597, 0.875, -9.072]}
        rotation={[-2.517, 1.398, 2.519]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.372, 0.89, -8.999]}
        rotation={[-3.094, 0.615, 3.083]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.622, 0.874, -8.91]}
        rotation={[-0.077, 0.898, 0.087]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.564, 0.937, -8.312]}
        rotation={[-0.083, -0.228, -0.085]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.781, 0.948, -8.473]}
        rotation={[3.075, 0.947, -3.095]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.556, 0.938, -8.408]}
        rotation={[3.069, 0.084, -3.075]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.734, 0.944, -8.302]}
        rotation={[3.103, -0.182, -3.112]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.713, 0.934, -8.438]}
        rotation={[-0.043, 0.036, -0.015]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.584, 0.932, -8.477]}
        rotation={[0.18, 1.255, -0.237]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.643, 0.954, -8.297]}
        rotation={[0.069, 0.746, -0.141]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.648, 0.942, -8.38]}
        rotation={[3.125, 0.247, -3.033]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.542, 0.943, -8.513]}
        rotation={[-2.963, -1.188, -2.937]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.605, 0.948, -8.337]}
        rotation={[-3.14, -0.547, -3.054]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.749, 0.941, -8.39]}
        rotation={[-2.877, -1.241, -2.859]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.717, 0.951, -8.354]}
        rotation={[-0.088, -0.433, -0.062]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.235, 1.03, -8.198]}
        rotation={[-0.198, -0.717, -0.145]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.389, 1.004, -8.611]}
        rotation={[0.31, 1.349, -0.383]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.148, 0.98, -8.503]}
        rotation={[3.046, 0.213, -3.04]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.098, 0.986, -8.512]}
        rotation={[3.049, -0.015, -3.099]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.125, 1.006, -8.405]}
        rotation={[2.996, 0.598, -3.084]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.096, 1.016, -8.317]}
        rotation={[2.994, 0.629, -3.123]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.142, 0.982, -8.52]}
        rotation={[3.072, -0.231, -3.085]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.241, 1.001, -8.387]}
        rotation={[-0.176, -0.855, -0.115]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.314, 0.973, -8.608]}
        rotation={[-0.052, 1.201, -0.092]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.095, 0.987, -8.479]}
        rotation={[2.944, 0.749, -3.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.203, 1.041, -8.182]}
        rotation={[3.041, 0.481, -3.102]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.212, 1.003, -8.388]}
        rotation={[-0.207, -1.043, -0.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.751, 0.939, -7.864]}
        rotation={[-0.007, 0.949, -0.116]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.915, 0.911, -8.012]}
        rotation={[-0.097, 0.248, -0.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.727, 0.94, -7.938]}
        rotation={[3.094, -0.167, -3.069]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.798, 0.945, -7.862]}
        rotation={[3.141, -1.206, -3.054]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.908, 0.934, -7.744]}
        rotation={[3.085, 0.064, -3.052]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.922, 0.924, -7.827]}
        rotation={[-3.032, -1.067, -2.983]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.725, 0.939, -7.873]}
        rotation={[2.991, 0.64, -3.08]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.022, 0.904, -7.896]}
        rotation={[-0.079, 0.082, -0.111]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.754, 0.931, -7.878]}
        rotation={[2.948, 1.021, -3.053]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.917, 0.929, -7.889]}
        rotation={[-0.052, 0.37, -0.04]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.995, 0.915, -7.934]}
        rotation={[3.06, -0.195, -3.062]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.901, 0.94, -7.721]}
        rotation={[-0.738, -1.502, -0.652]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.636, 0.971, -7.768]}
        rotation={[-3.135, 1.052, 3.027]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.503, 0.954, -7.822]}
        rotation={[-2.234, 1.501, 2.158]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.527, 0.968, -7.732]}
        rotation={[-0.151, -0.659, -0.001]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.551, 0.977, -7.768]}
        rotation={[-0.319, 1.301, 0.247]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.532, 0.95, -7.902]}
        rotation={[2.983, -0.116, 3.139]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.381, 0.957, -7.864]}
        rotation={[2.918, -1.102, 3.049]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.498, 0.955, -7.769]}
        rotation={[-0.149, 0.885, 0.052]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.568, 0.98, -7.724]}
        rotation={[-0.097, -0.954, 0.04]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.4, 0.943, -7.916]}
        rotation={[3.006, -0.321, 3.137]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.493, 0.964, -7.807]}
        rotation={[2.948, -1.396, 3.108]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.514, 0.971, -7.795]}
        rotation={[3.05, 1.193, 3.083]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.517, 0.945, -7.917]}
        rotation={[3.004, -0.464, -3.121]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.241, 0.835, -6.231]}
        rotation={[0.082, 0.485, -0.18]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.354, 0.799, -6.412]}
        rotation={[3.126, -0.168, -2.988]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.358, 0.809, -5.946]}
        rotation={[-0.154, -0.617, -0.241]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.129, 0.838, -6.244]}
        rotation={[-0.001, -0.156, -0.068]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.147, 0.851, -6.162]}
        rotation={[3.095, 0.445, -3.001]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.4, 0.789, -6.396]}
        rotation={[-0.051, 0.009, -0.136]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.515, 0.799, -6.118]}
        rotation={[-0.343, -1.119, -0.344]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.34, 0.808, -6.251]}
        rotation={[3.091, 0.199, -2.994]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.236, 0.831, -6.075]}
        rotation={[0.224, 1.223, -0.253]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.513, 0.798, -6.246]}
        rotation={[0.184, 1.063, -0.222]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.455, 0.805, -6.311]}
        rotation={[2.876, 1.241, -2.851]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.451, 0.811, -6.286]}
        rotation={[2.792, 1.226, -2.795]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.735, 0.887, -7.14]}
        rotation={[-3.04, 1.471, 2.827]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.684, 0.891, -7.088]}
        rotation={[2.883, -1.108, 3.04]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.653, 0.831, -7.384]}
        rotation={[2.95, -0.561, -3.141]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.644, 0.833, -7.426]}
        rotation={[-0.135, 0.277, 0.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.568, 0.827, -7.461]}
        rotation={[3.006, 0.086, 3.133]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.672, 0.875, -7.169]}
        rotation={[-0.22, -1.279, -0.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.894, 0.851, -7.349]}
        rotation={[-0.254, 0.964, 0.066]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.618, 0.878, -7.212]}
        rotation={[-0.213, 0.205, -0.018]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.689, 0.84, -7.411]}
        rotation={[2.954, -1.106, 3.08]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.814, 0.821, -7.432]}
        rotation={[2.956, 0.609, -3.097]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.67, 0.829, -7.435]}
        rotation={[0.007, -1.404, 0.183]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.551, 0.834, -7.415]}
        rotation={[2.965, -0.054, -3.123]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.105, 0.832, -5.664]}
        rotation={[-0.164, -1.186, -0.004]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.233, 0.812, -5.719]}
        rotation={[1.201, -1.529, 1.255]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.323, 0.823, -5.768]}
        rotation={[-0.088, 0.617, -0.051]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.195, 0.794, -5.897]}
        rotation={[3.06, 0.648, 3.098]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.292, 0.813, -5.894]}
        rotation={[-0.076, 0.454, 0.012]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.296, 0.804, -5.857]}
        rotation={[3.038, 0.757, -3.1]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.118, 0.791, -5.917]}
        rotation={[-0.105, -0.518, 0.045]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.313, 0.804, -5.872]}
        rotation={[3.062, 0.002, -3.121]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.369, 0.811, -5.81]}
        rotation={[-0.151, -0.968, -0.059]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.07, 0.803, -5.751]}
        rotation={[-0.082, -0.131, 0.028]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.126, 0.806, -5.871]}
        rotation={[3.046, 1.164, -3.115]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[3.141, 0.799, -5.869]}
        rotation={[-0.125, -0.416, 0.023]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.778, 0.77, -5.662]}
        rotation={[-2.642, 1.364, 2.762]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.788, 0.778, -5.703]}
        rotation={[-0.018, 0.892, 0.157]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.751, 0.798, -5.769]}
        rotation={[-2.837, 1.143, 3]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.745, 0.791, -5.835]}
        rotation={[-3.008, 0.255, 3.009]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.824, 0.786, -5.77]}
        rotation={[0.273, -0.817, 0.173]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.784, 0.785, -5.731]}
        rotation={[-3.081, -0.463, 3.061]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.737, 0.772, -5.643]}
        rotation={[-3.066, -0.409, 3.034]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.858, 0.785, -5.723]}
        rotation={[0.038, 0.759, 0.166]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.762, 0.788, -5.705]}
        rotation={[0.664, -1.439, 0.492]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.862, 0.786, -5.658]}
        rotation={[0.399, -1.103, 0.246]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.877, 0.792, -5.718]}
        rotation={[-2.95, 0.499, 3.015]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.791, 0.792, -5.763]}
        rotation={[-2.261, 1.451, 2.43]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.647, 0.699, -4.715]}
        rotation={[-0.034, -0.954, -0.111]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.687, 0.671, -4.441]}
        rotation={[0.125, 0.872, -0.082]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.83, 0.682, -4.573]}
        rotation={[-0.015, -0.945, -0.046]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.744, 0.692, -4.721]}
        rotation={[-3.137, 0.718, -3.13]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.791, 0.684, -4.662]}
        rotation={[0.002, -0.173, -0.058]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.767, 0.67, -4.505]}
        rotation={[0.042, -0.727, -0.012]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.861, 0.693, -4.603]}
        rotation={[3.138, -0.301, -3.086]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.625, 0.687, -4.603]}
        rotation={[2.976, 1.365, -2.943]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.783, 0.676, -4.543]}
        rotation={[3.12, 0.851, -3.07]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.692, 0.695, -4.502]}
        rotation={[2.206, 1.477, -2.201]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.611, 0.683, -4.69]}
        rotation={[-0.011, 0.054, -0.002]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.846, 0.675, -4.717]}
        rotation={[3.099, 1.087, -3.081]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.674, 0.41, -3.783]}
        rotation={[-0.092, 0.094, -0.18]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.734, 0.414, -3.841]}
        rotation={[3.115, -0.131, -3.02]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.735, 0.413, -3.643]}
        rotation={[2.704, 1.042, -2.777]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.705, 0.416, -3.686]}
        rotation={[3.109, -0.281, -2.928]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.706, 0.407, -3.728]}
        rotation={[-3.13, -0.576, -2.969]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.724, 0.41, -3.637]}
        rotation={[-0.254, -0.759, -0.251]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.692, 0.432, -3.527]}
        rotation={[2.894, 0.632, -2.949]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.663, 0.409, -3.838]}
        rotation={[2.202, 1.399, -2.219]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.641, 0.422, -3.642]}
        rotation={[-0.621, -1.212, -0.547]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.602, 0.432, -3.614]}
        rotation={[3.104, -0.329, -2.983]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.674, 0.424, -3.571]}
        rotation={[-2.733, -1.164, -2.606]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.659, 0.41, -3.83]}
        rotation={[2.581, 1.228, -2.617]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[4.572, 0.516, -4.055]}
        rotation={[0.175, -0.422, 0.215]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.593, 0.53, -4.131]}
        rotation={[0.007, 0.591, 0.172]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.431, 0.49, -3.997]}
        rotation={[-0.213, 1.214, 0.379]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.295, 0.47, -4.048]}
        rotation={[0.472, -1.123, 0.448]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.32, 0.505, -4.307]}
        rotation={[2.601, -1.329, 2.485]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.594, 0.527, -4.103]}
        rotation={[0.102, 0.132, 0.18]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.375, 0.487, -4.055]}
        rotation={[-2.67, 1.227, 2.724]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.392, 0.472, -3.95]}
        rotation={[-2.924, 0.851, 2.932]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.366, 0.5, -4.08]}
        rotation={[3.083, -0.712, 2.94]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.38, 0.478, -3.986]}
        rotation={[-2.922, 0.692, 2.908]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.5, 0.504, -3.948]}
        rotation={[0.109, -0.416, 0.077]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.642, 0.523, -3.996]}
        rotation={[-3.087, -0.137, 3.002]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.292, 0.255, -2.853]}
        rotation={[3.11, -0.317, 3.004]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.591, 0.302, -3.135]}
        rotation={[-0.559, 1.369, 0.547]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.483, 0.305, -3.039]}
        rotation={[3.101, -0.474, 3.052]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.462, 0.285, -3.046]}
        rotation={[3.008, -1.154, 3.007]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.501, 0.299, -2.858]}
        rotation={[3.055, -0.705, 3.001]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.471, 0.282, -3.156]}
        rotation={[3.1, -0.527, 3.01]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.27, 0.28, -3.059]}
        rotation={[-3.049, 0.692, 3.006]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.401, 0.292, -3.153]}
        rotation={[-0.923, 1.493, 0.956]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.336, 0.284, -2.944]}
        rotation={[3.128, 0.117, 3.038]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.423, 0.281, -2.94]}
        rotation={[3.11, -0.372, 2.999]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.518, 0.286, -2.936]}
        rotation={[0.108, -0.626, 0.127]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.3, 0.278, -3.209]}
        rotation={[0.076, -0.501, 0.155]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.339, 0.404, -1.051]}
        rotation={[-3.109, -1.237, 3.128]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.215, 0.403, -0.908]}
        rotation={[-3.082, 0.331, 3.091]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.036, 0.428, -1.227]}
        rotation={[0.063, 0.496, -0.011]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.285, 0.419, -1.152]}
        rotation={[0.056, -0.912, -0.028]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.182, 0.424, -1.289]}
        rotation={[-0.02, 0.23, 0.06]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.33, 0.422, -0.973]}
        rotation={[-2.424, -1.55, -2.43]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.084, 0.401, -1.265]}
        rotation={[-0.004, 0.139, 0.041]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.301, 0.41, -0.998]}
        rotation={[3.12, 0.618, -3.11]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.121, 0.431, -1.245]}
        rotation={[-3.138, -0.299, 3.136]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.024, 0.427, -1.258]}
        rotation={[-3.111, -0.166, -3.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.14, 0.435, -1.19]}
        rotation={[-3.106, -0.117, 3.125]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.284, 0.422, -1.134]}
        rotation={[3.129, 0.551, -3.116]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.151, 0.216, 1.212]}
        rotation={[3.083, 0.652, 3.102]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.078, 0.219, 1.111]}
        rotation={[2.954, -1.247, 2.994]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.011, 0.22, 1.175]}
        rotation={[-3.115, -1.314, -2.988]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.047, 0.215, 1.177]}
        rotation={[-0.071, 1.02, -0.052]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.969, 0.209, 1.16]}
        rotation={[-0.066, 0.033, -0.04]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.99, 0.203, 1.137]}
        rotation={[3.044, 0.241, 3.106]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.001, 0.205, 1.138]}
        rotation={[3.138, 1.189, 3.06]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.018, 0.216, 1.124]}
        rotation={[-3.065, -1.348, -3.017]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.235, 0.203, 1.114]}
        rotation={[3.115, -1.333, -3.082]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.944, 0.215, 1.114]}
        rotation={[-0.048, -0.056, 0.033]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.026, 0.216, 1.201]}
        rotation={[-0.046, 0.707, -0.064]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.016, 0.234, 1.326]}
        rotation={[0.033, 1.16, -0.102]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.69, 0.081, 2.295]}
        rotation={[0.056, 1.066, 0.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.629, 0.087, 2.236]}
        rotation={[-3.111, 0.71, -3.063]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.537, 0.076, 2.321]}
        rotation={[0.134, -0.921, 0.055]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.482, 0.085, 2.188]}
        rotation={[0.064, -0.471, 0.006]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.596, 0.082, 2.303]}
        rotation={[-3.041, -0.48, -3.116]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.485, 0.094, 2.084]}
        rotation={[-3.095, -1.212, -3.131]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.487, 0.081, 2.264]}
        rotation={[3.056, 1.519, -2.925]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.565, 0.091, 2.204]}
        rotation={[0.054, -0.84, -0.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.564, 0.098, 2.235]}
        rotation={[-0.228, 1.461, 0.315]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.515, 0.083, 2.376]}
        rotation={[0.05, 0.827, 0]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.518, 0.072, 2.437]}
        rotation={[0.098, -0.252, 0.033]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.623, 0.085, 2.367]}
        rotation={[-3.076, 0.792, -3.12]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.955, 0.119, 2.139]}
        rotation={[-3.015, -0.675, 2.998]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.975, 0.141, 2.025]}
        rotation={[-3.041, -0.233, 3.027]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.129, 0.156, 2.119]}
        rotation={[1.081, -1.434, 0.926]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.946, 0.139, 1.98]}
        rotation={[-3.075, -0.71, 3.068]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.027, 0.123, 2.169]}
        rotation={[0.21, -0.329, 0.11]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.881, 0.118, 2.119]}
        rotation={[0.181, 0.044, 0.082]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.066, 0.124, 2.25]}
        rotation={[0.264, -0.618, 0.165]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.843, 0.099, 2.19]}
        rotation={[-0.183, 1.409, 0.388]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.844, 0.107, 2.185]}
        rotation={[0.251, -0.813, 0.102]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.154, 0.182, 1.95]}
        rotation={[2.293, -1.444, 2.121]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.029, 0.128, 2.121]}
        rotation={[0.092, 0.275, 0.063]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.039, 0.145, 2.064]}
        rotation={[-2.924, 0.637, 3.029]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.191, 0.165, 2.696]}
        rotation={[0.092, -0.881, 0.006]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.035, 0.155, 2.933]}
        rotation={[-3.023, -1.447, 3.139]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.194, 0.152, 2.725]}
        rotation={[0.032, -0.176, 0.025]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.211, 0.155, 2.881]}
        rotation={[0.079, -0.5, -0.045]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.027, 0.155, 2.777]}
        rotation={[0.066, -1.161, 0.017]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.249, 0.156, 2.749]}
        rotation={[0.057, -0.407, 0.025]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.193, 0.129, 3.069]}
        rotation={[0.033, 0.847, 0.079]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.093, 0.143, 2.897]}
        rotation={[-3.042, 0.318, 3.093]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.208, 0.154, 2.985]}
        rotation={[-3.043, 0.11, 3.118]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.195, 0.173, 2.77]}
        rotation={[0.123, 0.966, -0.04]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.096, 0.161, 2.81]}
        rotation={[-0.018, 1.268, 0.128]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.172, 0.14, 3.025]}
        rotation={[0.05, 0.49, 0.036]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[6.849, 0.434, -0.754]}
        rotation={[-0.038, -1.285, 0.027]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.753, 0.423, -0.696]}
        rotation={[3.082, -0.469, 3.087]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.813, 0.423, -0.699]}
        rotation={[2.975, -0.981, 3.092]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.652, 0.406, -0.837]}
        rotation={[-3.128, 0.832, 3.027]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.563, 0.403, -0.862]}
        rotation={[-0.019, -0.619, 0.107]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[6.687, 0.414, -0.872]}
        rotation={[-0.36, 1.338, 0.29]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.662, 0.406, -0.821]}
        rotation={[-3.114, 1.159, 3.011]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[6.589, 0.404, -0.95]}
        rotation={[-0.098, 0.114, 0.074]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.894, 0.431, -0.917]}
        rotation={[2.946, -1.016, 3.017]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.907, 0.445, -0.639]}
        rotation={[-0.17, 1.229, 0.147]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.939, 0.415, -0.85]}
        rotation={[3.042, -0.171, 3.111]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.875, 0.411, -0.943]}
        rotation={[3.08, -0.311, -3.131]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.437, 0.544, -1.389]}
        rotation={[0.002, -0.416, 0.105]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.408, 0.531, -1.444]}
        rotation={[-0.033, 0.358, 0.081]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.397, 0.513, -1.415]}
        rotation={[3.125, 0.399, 3.057]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.488, 0.539, -1.22]}
        rotation={[3.003, -1.051, 2.939]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.41, 0.53, -1.367]}
        rotation={[0.027, -0.217, 0.02]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.25, 0.527, -1.174]}
        rotation={[2.938, -1.423, 2.941]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.167, 0.515, -1.243]}
        rotation={[0.011, -0.087, 0.068]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.391, 0.553, -1.362]}
        rotation={[-0.034, 0.736, 0.104]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.218, 0.525, -1.188]}
        rotation={[0.034, 0.07, 0.077]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.331, 0.532, -1.192]}
        rotation={[0.035, -0.416, 0.076]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.189, 0.521, -1.332]}
        rotation={[2.953, -1.097, 2.933]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[7.433, 0.538, -1.186]}
        rotation={[0.021, -0.754, 0.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.652, 0.279, 1.862]}
        rotation={[-0.06, 0.358, -0.063]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.691, 0.275, 1.769]}
        rotation={[-0.125, -0.687, -0.05]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.708, 0.275, 1.727]}
        rotation={[-0.094, -0.37, -0.011]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.873, 0.269, 1.828]}
        rotation={[-0.038, -0.93, -0.014]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[5.598, 0.278, 1.765]}
        rotation={[-0.606, -1.492, -0.576]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.734, 0.262, 1.768]}
        rotation={[-0.112, -0.546, -0.026]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.573, 0.259, 1.685]}
        rotation={[3.095, -0.947, -3.107]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.586, 0.275, 1.818]}
        rotation={[-0.084, -0.809, 0.044]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.68, 0.265, 1.733]}
        rotation={[2.788, -1.519, 2.824]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.658, 0.259, 1.739]}
        rotation={[-0.302, 1.433, 0.179]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[5.674, 0.279, 1.931]}
        rotation={[3.073, 0.598, -3.101]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.773, 0.273, 1.743]}
        rotation={[3.082, -0.24, -3.119]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.129, 0.234, 2.338]}
        rotation={[-0.013, -0.298, -0.159]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.86, 0.271, 2.345]}
        rotation={[2.12, 1.43, -2.11]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[4.86, 0.261, 2.48]}
        rotation={[0.488, 1.234, -0.407]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.811, 0.271, 2.422]}
        rotation={[-0.025, -0.755, -0.151]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.981, 0.251, 2.303]}
        rotation={[-2.456, -1.426, -2.459]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.839, 0.262, 2.382]}
        rotation={[2.824, 1.254, -2.729]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[4.954, 0.269, 2.357]}
        rotation={[-0.025, -0.555, -0.123]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.919, 0.256, 2.565]}
        rotation={[-3.027, -0.682, -2.967]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.84, 0.274, 2.379]}
        rotation={[3.114, 0.724, -2.977]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.947, 0.264, 2.336]}
        rotation={[-0.134, -0.875, -0.255]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.811, 0.269, 2.327]}
        rotation={[-0.783, -1.436, -0.859]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[4.929, 0.262, 2.455]}
        rotation={[-2.78, -1.199, -2.845]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.279, 0.101, 1.881]}
        rotation={[0.188, 0.196, -0.027]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.156, 0.07, 2.051]}
        rotation={[0.32, -1.401, 0.142]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.949, 0.062, 2.008]}
        rotation={[-2.947, -0.891, 3.139]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.264, 0.064, 1.972]}
        rotation={[-2.921, 0.481, 3.077]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.184, 0.036, 2.166]}
        rotation={[-2.977, -1.172, 3.081]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.059, 0.066, 1.992]}
        rotation={[0.165, -0.29, -0.018]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.198, 0.089, 1.922]}
        rotation={[0.142, 1.259, -0.002]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.312, 0.046, 2.148]}
        rotation={[0.124, 0.95, 0.059]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.233, 0.082, 2.008]}
        rotation={[0.25, -1.451, 0.065]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.371, 0.06, 2.075]}
        rotation={[-3.019, -0.79, 3.058]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.146, 0.062, 1.994]}
        rotation={[-2.991, 0.273, -3.121]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.38, 0.09, 2.03]}
        rotation={[0.176, 0.558, 0.046]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.769, 0.254, 3.59]}
        rotation={[-0.091, 0.851, 0.207]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.639, 0.22, 3.688]}
        rotation={[2.763, -1.268, 2.688]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.795, 0.242, 3.591]}
        rotation={[-1.951, 1.416, 2.025]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.513, 0.221, 3.605]}
        rotation={[-3.102, 0.036, 3.047]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.617, 0.239, 3.58]}
        rotation={[-3.028, 0.404, 3.055]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.741, 0.218, 3.83]}
        rotation={[3.125, -0.624, 3.035]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.598, 0.207, 3.826]}
        rotation={[-0.509, 1.33, 0.548]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.68, 0.209, 3.751]}
        rotation={[0.039, 0.362, 0.074]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.638, 0.223, 3.714]}
        rotation={[-0.17, 1.06, 0.263]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.496, 0.208, 3.731]}
        rotation={[3.105, -0.758, 3.05]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.695, 0.22, 3.763]}
        rotation={[0.165, -1.101, 0.138]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.488, 0.204, 3.752]}
        rotation={[0.165, -0.632, 0.209]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.534, 0.196, 4.939]}
        rotation={[-2.985, -0.094, -3.107]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.808, 0.148, 5.095]}
        rotation={[-2.965, -0.449, -3.022]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.747, 0.161, 5.011]}
        rotation={[-0.023, -0.95, -0.193]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.551, 0.186, 5.009]}
        rotation={[-2.894, -1.073, -3.025]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.543, 0.191, 5.022]}
        rotation={[3.032, 1.151, -2.926]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.587, 0.18, 5.032]}
        rotation={[3.128, 1.244, -3.025]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.612, 0.202, 4.916]}
        rotation={[-2.936, -0.529, -3.019]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.762, 0.194, 4.914]}
        rotation={[0.441, 1.23, -0.315]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.606, 0.159, 5.114]}
        rotation={[-3.136, 1.003, -3.001]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.811, 0.186, 4.903]}
        rotation={[1.886, 1.499, -1.74]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.672, 0.185, 5.034]}
        rotation={[-2.98, -0.601, -3.099]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.563, 0.16, 5.123]}
        rotation={[-3.099, 0.804, -3.019]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.62, 0.21, 5.587]}
        rotation={[0.223, 1.004, -0.097]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.612, 0.204, 5.618]}
        rotation={[-3.082, 0.934, -3.019]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.651, 0.24, 5.471]}
        rotation={[-2.953, 0.571, 3.134]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.661, 0.195, 5.701]}
        rotation={[0.159, -0.612, -0.019]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.6, 0.206, 5.593]}
        rotation={[0.249, 0.596, -0.074]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[2.627, 0.232, 5.487]}
        rotation={[-2.979, -0.795, -3.097]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.578, 0.219, 5.617]}
        rotation={[0.182, 0.314, -0.086]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.607, 0.223, 5.505]}
        rotation={[0.224, 0.704, -0.072]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.502, 0.225, 5.536]}
        rotation={[-2.995, -0.399, 3.125]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.583, 0.24, 5.45]}
        rotation={[-3.001, 0.35, 3.141]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.757, 0.227, 5.496]}
        rotation={[0.176, 0.949, -0.007]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.705, 0.198, 5.596]}
        rotation={[0.227, 0.315, -0.114]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.645, 0.213, 5.548]}
        rotation={[2.964, 0.168, 3.105]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.748, 0.231, 5.614]}
        rotation={[-0.213, 0.47, -0.015]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.527, 0.232, 5.535]}
        rotation={[2.949, -0.909, 3.097]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.432, 0.239, 5.642]}
        rotation={[2.823, 1.544, -2.994]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.633, 0.226, 5.564]}
        rotation={[-0.182, 0.409, 0.061]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.531, 0.238, 5.625]}
        rotation={[2.942, 0.151, -3.139]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.703, 0.24, 5.62]}
        rotation={[-0.227, 1.016, 0.028]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.622, 0.248, 5.66]}
        rotation={[-0.155, 0.217, -0.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.509, 0.198, 5.444]}
        rotation={[2.954, 0.301, 3.125]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.459, 0.229, 5.653]}
        rotation={[2.958, 1.001, -3.078]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.41, 0.236, 5.617]}
        rotation={[2.905, 1.124, -3.123]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[2.582, 0.249, 5.673]}
        rotation={[2.929, 0.083, -3.093]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.275, 0.242, 5.859]}
        rotation={[0.089, -0.004, -0.094]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.244, 0.232, 5.989]}
        rotation={[0.189, 1.054, -0.049]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.408, 0.241, 5.914]}
        rotation={[0.144, -0.131, -0.064]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.268, 0.22, 6.11]}
        rotation={[-3.023, 0.175, -3.123]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.299, 0.224, 6.056]}
        rotation={[-3.029, -0.249, -3.046]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.334, 0.227, 6.028]}
        rotation={[-3.003, 0.112, -3.136]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.25, 0.236, 5.908]}
        rotation={[3.031, 1.549, -2.927]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.413, 0.227, 5.938]}
        rotation={[-2.978, -0.408, -3.056]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.357, 0.217, 6.064]}
        rotation={[-2.582, -1.424, -2.709]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[2.228, 0.218, 6.102]}
        rotation={[0.115, 0.239, 0.003]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[2.246, 0.229, 6.108]}
        rotation={[-0.059, -1.199, -0.14]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[2.153, 0.231, 6.025]}
        rotation={[-3.068, 0.508, -3.124]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.225, 0.154, 5.298]}
        rotation={[-2.967, 1.222, 2.891]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.208, 0.154, 5.07]}
        rotation={[3.141, 0.718, 3.11]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.339, 0.174, 5.356]}
        rotation={[3.128, 0.388, 3.097]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.436, 0.171, 5.252]}
        rotation={[-0.029, -0.462, 0.099]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.179, 0.162, 5.548]}
        rotation={[-3.097, 0.961, 3.089]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.351, 0.17, 5.341]}
        rotation={[0.002, -0.505, 0.021]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.194, 0.146, 5.257]}
        rotation={[-0.093, 0.253, 0.065]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.183, 0.131, 5.162]}
        rotation={[0.095, -1.424, 0.153]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.149, 0.155, 5.418]}
        rotation={[3.102, 0.66, 3.071]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.278, 0.146, 5.271]}
        rotation={[-0.658, 1.428, 0.554]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.143, 0.141, 5.206]}
        rotation={[-0.067, 0.066, -0.012]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.07, 0.148, 5.335]}
        rotation={[-0.104, 0.241, 0.005]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.672, 0.19, 6.123]}
        rotation={[3.079, 0.587, 3.084]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.613, 0.196, 6.347]}
        rotation={[-0.267, 1.261, 0.23]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.654, 0.2, 6.334]}
        rotation={[-0.914, 1.493, 0.817]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.514, 0.195, 6.29]}
        rotation={[-1.067, 1.51, 1.001]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.61, 0.213, 6.356]}
        rotation={[2.958, -0.671, 3.087]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.636, 0.211, 6.277]}
        rotation={[-3.124, 0.82, 3.068]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.693, 0.215, 6.3]}
        rotation={[3.088, 0.23, 3.083]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.631, 0.184, 6.171]}
        rotation={[3.066, -0.066, 3.105]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.673, 0.198, 6.142]}
        rotation={[3.026, -0.196, 3.1]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.473, 0.182, 6.178]}
        rotation={[0.498, -1.429, 0.587]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.643, 0.194, 6.289]}
        rotation={[3.078, 0.789, 3.063]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.695, 0.217, 6.283]}
        rotation={[3.02, -0.309, 3.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.374, 0.195, 6.419]}
        rotation={[-0.076, 0.17, 0.155]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.571, 0.227, 6.598]}
        rotation={[-2.863, 1.201, 2.789]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.603, 0.23, 6.499]}
        rotation={[-0.12, 0.478, 0.151]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.641, 0.243, 6.506]}
        rotation={[-3.092, 0.438, 3.003]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.339, 0.205, 6.538]}
        rotation={[-0.163, 0.729, 0.15]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.409, 0.21, 6.389]}
        rotation={[-0.22, 1.113, 0.265]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.511, 0.225, 6.668]}
        rotation={[-0.106, 0.448, 0.161]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.401, 0.2, 6.509]}
        rotation={[-0.288, 1.103, 0.233]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.477, 0.216, 6.626]}
        rotation={[0.034, -0.499, 0.104]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.647, 0.242, 6.506]}
        rotation={[-0.176, 0.86, 0.22]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.441, 0.201, 6.474]}
        rotation={[3.126, -0.039, 3.007]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.513, 0.234, 6.673]}
        rotation={[0.572, -1.33, 0.652]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.164, 0.16, 6.213]}
        rotation={[2.962, 1.235, -3.055]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.196, 0.167, 6.338]}
        rotation={[0.028, 1.108, -0.103]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.173, 0.172, 6.413]}
        rotation={[-0.031, -1.478, -0.015]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.245, 0.176, 6.315]}
        rotation={[3.074, -0.065, 3.14]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.225, 0.166, 6.204]}
        rotation={[3.13, -0.134, 3.101]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.164, 0.166, 6.273]}
        rotation={[-0.06, 0.85, 0.064]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.097, 0.18, 6.414]}
        rotation={[3.051, 1.117, -3.129]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.042, 0.173, 6.322]}
        rotation={[-0.008, -0.2, 0.022]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.236, 0.157, 6.217]}
        rotation={[3.103, -0.315, 3.126]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.056, 0.164, 6.406]}
        rotation={[-0.001, -0.046, 0.014]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.082, 0.159, 6.355]}
        rotation={[0.001, 1.091, 0.003]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.261, 0.169, 6.406]}
        rotation={[-0.032, 1.141, 0.033]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.685, 0.195, 6.676]}
        rotation={[-0.104, -0.87, 0.069]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.547, 0.165, 6.604]}
        rotation={[-0.124, -0.9, 0.149]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.697, 0.185, 6.56]}
        rotation={[3.075, 0.994, 2.988]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.671, 0.169, 6.519]}
        rotation={[2.931, -0.259, 3.054]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.532, 0.197, 6.773]}
        rotation={[0.079, -1.193, 0.305]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.474, 0.168, 6.627]}
        rotation={[-0.288, 0.573, 0.128]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.519, 0.175, 6.685]}
        rotation={[-0.39, 1.187, 0.254]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.637, 0.219, 6.735]}
        rotation={[2.813, -1.07, 3.025]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.781, 0.198, 6.674]}
        rotation={[2.438, -1.461, 2.648]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.497, 0.168, 6.637]}
        rotation={[-0.13, -0.886, 0.103]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.801, 0.196, 6.64]}
        rotation={[-0.348, 1.126, 0.183]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.743, 0.208, 6.663]}
        rotation={[2.939, -0.59, 3.057]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.881, 0.227, 6.997]}
        rotation={[-0.059, 0.784, 0.133]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.645, 0.222, 6.863]}
        rotation={[3.053, -0.933, 2.939]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.764, 0.221, 7.136]}
        rotation={[2.974, -0.984, 2.9]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.738, 0.215, 7.002]}
        rotation={[-3.07, 0.854, 3.033]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.597, 0.203, 7.042]}
        rotation={[-2.963, 0.787, 3.014]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.891, 0.245, 6.885]}
        rotation={[-0.044, 0.856, 0.139]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.935, 0.231, 6.86]}
        rotation={[-0.132, 1.156, 0.148]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.82, 0.22, 6.821]}
        rotation={[1.588, -1.468, 1.59]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.718, 0.22, 6.831]}
        rotation={[-2.954, 1.155, 2.966]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.828, 0.237, 6.912]}
        rotation={[-0.017, 0.358, 0.144]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.862, 0.229, 7.066]}
        rotation={[2.681, -1.42, 2.647]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.848, 0.226, 6.791]}
        rotation={[-2.364, 1.466, 2.361]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.573, 0.147, 6.256]}
        rotation={[3.08, -1.14, 3.075]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.505, 0.158, 6.05]}
        rotation={[-0.017, 0.205, 0.056]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.419, 0.152, 6.24]}
        rotation={[-3.083, 1.23, 3.032]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.641, 0.139, 6.102]}
        rotation={[0.298, -1.457, 0.299]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.504, 0.147, 6.281]}
        rotation={[3.114, 0.848, 3.1]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.501, 0.147, 6.152]}
        rotation={[-0.069, 0.8, 0.072]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.584, 0.133, 6.127]}
        rotation={[-3.119, 0.534, 3.091]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.508, 0.147, 6.15]}
        rotation={[-3.007, 1.397, 2.948]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.471, 0.136, 6.173]}
        rotation={[0.178, -1.428, 0.165]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.428, 0.14, 6.067]}
        rotation={[3.117, 0.331, -3.141]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.456, 0.159, 6.143]}
        rotation={[2.871, -1.359, 2.892]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.658, 0.139, 6.13]}
        rotation={[3.125, -0.832, 3.081]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.268, 0.208, 6.883]}
        rotation={[2.846, 1.171, -2.756]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.278, 0.191, 7.044]}
        rotation={[-0.005, -0.251, -0.059]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.088, 0.176, 7.057]}
        rotation={[2.992, 1.157, -2.981]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.178, 0.178, 6.968]}
        rotation={[0.161, 0.86, -0.122]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.289, 0.207, 6.97]}
        rotation={[0.472, 1.26, -0.457]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.199, 0.186, 7.045]}
        rotation={[-0.185, -1.214, -0.194]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.127, 0.186, 6.979]}
        rotation={[-2.495, -1.321, -2.484]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.989, 0.181, 6.978]}
        rotation={[-0.041, -0.481, -0.101]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.106, 0.193, 6.986]}
        rotation={[-0.088, -0.664, -0.156]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.134, 0.187, 7.099]}
        rotation={[3.004, 1.176, -2.955]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.023, 0.189, 6.839]}
        rotation={[-2.807, -1.33, -2.812]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.046, 0.182, 7.075]}
        rotation={[3.108, 0.525, -2.983]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.558, 0.125, 5.458]}
        rotation={[0.185, 1.037, -0.287]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.391, 0.106, 5.756]}
        rotation={[3.117, 0.094, -2.989]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.41, 0.107, 5.651]}
        rotation={[-0.156, -0.766, -0.222]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.587, 0.137, 5.629]}
        rotation={[3.076, 0.468, -2.976]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.415, 0.116, 5.692]}
        rotation={[-0.016, 0.373, -0.142]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.539, 0.127, 5.692]}
        rotation={[-3.039, -0.828, -2.981]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.633, 0.141, 5.736]}
        rotation={[3.089, 0.399, -3.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.451, 0.113, 5.684]}
        rotation={[-3.026, -0.926, -2.981]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.615, 0.132, 5.811]}
        rotation={[0.021, 0.164, -0.126]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.509, 0.121, 5.794]}
        rotation={[-0.154, -0.918, -0.196]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.599, 0.133, 5.579]}
        rotation={[-0.072, -0.055, -0.076]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.536, 0.128, 5.519]}
        rotation={[-0.039, -0.027, -0.11]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.366, 0.227, 6.786]}
        rotation={[-0.128, -1.166, -0.105]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.075, 0.184, 6.494]}
        rotation={[0.062, 1.027, -0.138]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.232, 0.209, 6.452]}
        rotation={[3.071, 0.948, -3.032]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.079, 0.198, 6.536]}
        rotation={[-3.107, 0.006, -3.088]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.484, 0.201, 6.548]}
        rotation={[0.038, 0.556, -0.01]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.428, 0.214, 6.748]}
        rotation={[-3.141, -0.289, -3.092]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.301, 0.186, 6.787]}
        rotation={[2.706, 1.528, -2.665]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.263, 0.208, 6.715]}
        rotation={[-0.014, 0.121, 0.002]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.198, 0.19, 6.719]}
        rotation={[-3.083, -0.531, -3.079]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.318, 0.201, 6.519]}
        rotation={[0.03, -0.033, -0.014]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.084, 0.186, 6.544]}
        rotation={[-3.1, -0.227, -3.053]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.261, 0.201, 6.33]}
        rotation={[-0.091, -0.825, -0.132]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.743, 0.491, 4.493]}
        rotation={[0.182, -0.945, 0.218]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.771, 0.478, 4.605]}
        rotation={[3.023, -0.968, 2.968]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.861, 0.458, 4.565]}
        rotation={[3.118, -0.415, 2.956]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.665, 0.468, 4.673]}
        rotation={[-3.076, -0.166, 2.988]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.771, 0.456, 4.693]}
        rotation={[0.052, 0.084, 0.141]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.749, 0.488, 4.668]}
        rotation={[-2.917, 0.919, 2.948]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.711, 0.47, 4.72]}
        rotation={[3.116, -0.756, 2.979]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.751, 0.464, 4.64]}
        rotation={[-3.063, -0.21, 3.06]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.744, 0.503, 4.369]}
        rotation={[0.088, -0.28, 0.149]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.661, 0.493, 4.535]}
        rotation={[0.094, -0.404, 0.1]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.928, 0.451, 4.519]}
        rotation={[0.198, -0.729, 0.235]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.828, 0.483, 4.416]}
        rotation={[-2.996, 0.788, 3.043]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.494, 0.483, 5.63]}
        rotation={[0.076, 0.744, -0.067]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.624, 0.522, 5.529]}
        rotation={[0.169, 1.033, -0.051]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.774, 0.494, 5.725]}
        rotation={[0.045, 0.132, 0.007]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.603, 0.495, 5.616]}
        rotation={[-3.116, 0.582, -3.139]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.454, 0.485, 5.681]}
        rotation={[-3.032, -0.762, -3.079]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.709, 0.477, 5.85]}
        rotation={[0.099, -0.007, -0.032]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.656, 0.471, 5.947]}
        rotation={[0.113, 0.05, -0.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.478, 0.486, 5.599]}
        rotation={[0.055, -0.061, -0.063]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.61, 0.484, 5.641]}
        rotation={[-3.06, 0.506, -3.132]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.559, 0.485, 5.689]}
        rotation={[0.083, 0.69, -0.023]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.452, 0.468, 5.889]}
        rotation={[-3.061, -0.816, 3.138]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.736, 0.505, 5.67]}
        rotation={[0.027, -0.139, -0.043]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-5.08, 0.481, 4.076]}
        rotation={[-2.713, 1.276, 2.718]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.084, 0.488, 3.974]}
        rotation={[-0.177, 1.124, 0.215]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.957, 0.497, 4.098]}
        rotation={[3.131, 0.129, 3.01]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.977, 0.498, 4.06]}
        rotation={[3.114, 0.217, 3.005]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.043, 0.495, 3.952]}
        rotation={[3.006, -0.975, 2.942]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.096, 0.48, 4.212]}
        rotation={[-0.065, 0.376, 0.125]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.084, 0.475, 4.112]}
        rotation={[-3.1, 0.347, 2.972]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.013, 0.477, 3.996]}
        rotation={[-3.099, 0.521, 3.07]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.131, 0.479, 3.904]}
        rotation={[1.972, -1.466, 2.025]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.053, 0.498, 4.195]}
        rotation={[-3.022, 1.057, 2.953]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.053, 0.488, 4.19]}
        rotation={[-0.019, 0.35, 0.096]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.948, 0.504, 4.029]}
        rotation={[3.076, -0.672, 3.034]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.129, 0.482, 5.123]}
        rotation={[0.268, 0.943, -0.264]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.292, 0.512, 5.028]}
        rotation={[-3.096, -0.102, -3.018]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.213, 0.523, 4.922]}
        rotation={[-3.086, -0.308, -2.968]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-5.131, 0.488, 4.785]}
        rotation={[0.255, 1.149, -0.278]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.228, 0.494, 4.988]}
        rotation={[3.1, 0.864, -3.011]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.32, 0.512, 4.965]}
        rotation={[-3.017, -0.579, -3.027]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.175, 0.517, 4.812]}
        rotation={[-0.25, -1.049, -0.382]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.128, 0.493, 4.798]}
        rotation={[0.117, 0.681, -0.159]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.188, 0.508, 4.941]}
        rotation={[-2.566, -1.394, -2.665]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.081, 0.504, 4.912]}
        rotation={[-0.141, -1.15, -0.224]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-5.101, 0.494, 5.071]}
        rotation={[-1.897, -1.417, -1.937]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.045, 0.475, 5.059]}
        rotation={[-3.027, -0.199, -2.996]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.308, 0.211, 3.21]}
        rotation={[-0.15, -0.071, 0.099]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.218, 0.21, 3.227]}
        rotation={[-0.084, -0.26, 0.131]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.262, 0.214, 3.194]}
        rotation={[2.919, -0.711, 3.057]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.13, 0.261, 3.377]}
        rotation={[3.005, 0.218, 3.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.307, 0.241, 3.389]}
        rotation={[2.861, -1.006, 2.977]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.107, 0.224, 3.13]}
        rotation={[-0.2, 0.716, 0.136]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.127, 0.224, 3.168]}
        rotation={[3.01, 0.706, 3.031]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.149, 0.207, 3.099]}
        rotation={[-3.139, 1.026, 2.949]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.028, 0.221, 3.167]}
        rotation={[-0.107, -0.274, 0.051]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.177, 0.237, 3.327]}
        rotation={[-0.085, -0.637, 0.061]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.246, 0.219, 3.235]}
        rotation={[-0.089, -0.842, 0.138]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.11, 0.222, 3.212]}
        rotation={[-0.161, -0.012, 0.052]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.058, 0.215, 3.798]}
        rotation={[-2.831, 1.231, 2.82]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.889, 0.211, 3.671]}
        rotation={[-0.104, 0.649, 0.116]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.094, 0.213, 3.719]}
        rotation={[-0.034, 0.248, 0.103]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-3.845, 0.239, 3.765]}
        rotation={[-0.142, 0.648, 0.191]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.039, 0.207, 3.87]}
        rotation={[-0.053, 0.066, 0.113]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.824, 0.226, 3.706]}
        rotation={[-0.051, 0.387, 0.151]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.714, 0.246, 3.91]}
        rotation={[-2.883, 1.195, 2.874]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.071, 0.2, 3.758]}
        rotation={[3.135, 0.432, 3.017]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.03, 0.205, 3.745]}
        rotation={[3.116, -0.123, 3.04]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.845, 0.226, 3.706]}
        rotation={[-0.121, 1.06, 0.11]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.916, 0.243, 3.924]}
        rotation={[2.682, -1.318, 2.74]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-3.794, 0.214, 3.507]}
        rotation={[-3.022, 1.149, 2.98]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.057, 0.464, 3.867]}
        rotation={[-2.325, 1.39, 2.274]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.938, 0.496, 3.98]}
        rotation={[-0.612, 1.395, 0.597]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.21, 0.46, 3.909]}
        rotation={[-0.338, 1.086, 0.279]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.951, 0.487, 3.959]}
        rotation={[-0.593, 1.339, 0.598]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.152, 0.473, 3.969]}
        rotation={[-1.579, 1.475, 1.543]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.031, 0.488, 3.991]}
        rotation={[3.01, -0.537, 3.014]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.943, 0.487, 3.909]}
        rotation={[2.959, -0.696, 2.956]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.052, 0.476, 3.974]}
        rotation={[3.117, 0.102, 3.003]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.159, 0.462, 4.016]}
        rotation={[3.108, 0.148, 2.982]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.018, 0.489, 4.151]}
        rotation={[-0.032, -0.469, 0.088]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.042, 0.469, 3.748]}
        rotation={[3.045, -0.397, 2.975]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.059, 0.469, 4]}
        rotation={[2.919, -0.88, 2.959]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.268, 0.153, 4.822]}
        rotation={[-0.363, 1.161, 0.319]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.322, 0.133, 4.626]}
        rotation={[-0.108, -0.185, 0.081]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.263, 0.172, 4.87]}
        rotation={[-0.067, -0.439, 0.157]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.146, 0.159, 4.64]}
        rotation={[-0.078, -0.277, 0.137]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.316, 0.171, 4.864]}
        rotation={[2.165, -1.477, 2.236]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.306, 0.16, 4.833]}
        rotation={[3.004, -0.461, 3.075]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.29, 0.164, 4.787]}
        rotation={[-3.137, 0.703, 3.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.338, 0.147, 4.808]}
        rotation={[2.981, -0.183, 3.017]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.341, 0.123, 4.653]}
        rotation={[0.272, -1.202, 0.452]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.241, 0.139, 4.601]}
        rotation={[2.933, -0.513, 3.022]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.179, 0.164, 4.709]}
        rotation={[-0.705, 1.343, 0.572]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.125, 0.19, 4.797]}
        rotation={[3.026, -0.042, 2.991]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.068, 0.373, 4.607]}
        rotation={[-0.112, -0.307, -0.155]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.936, 0.364, 4.69]}
        rotation={[0.545, 1.273, -0.598]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.905, 0.368, 4.762]}
        rotation={[2.9, 0.797, -2.886]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.913, 0.373, 4.749]}
        rotation={[2.962, 0.673, -2.981]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.056, 0.363, 4.487]}
        rotation={[3.123, -0.284, -2.986]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.103, 0.391, 4.623]}
        rotation={[-2.825, -1.06, -2.712]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.033, 0.366, 4.569]}
        rotation={[-3.085, -0.356, -2.956]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.903, 0.361, 4.601]}
        rotation={[0.366, 1.066, -0.405]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.794, 0.317, 4.618]}
        rotation={[-0.025, -0.115, -0.207]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.046, 0.362, 4.512]}
        rotation={[-3.081, -0.539, -2.954]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.884, 0.368, 4.694]}
        rotation={[-1.584, -1.413, -1.505]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.908, 0.35, 4.672]}
        rotation={[-2.41, -1.283, -2.31]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.597, 0.239, 6.094]}
        rotation={[-3.052, 0.258, 3.114]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.874, 0.252, 6.169]}
        rotation={[-3.051, -0.768, -3.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.732, 0.227, 6.303]}
        rotation={[0.035, -0.759, -0.01]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.819, 0.236, 6.236]}
        rotation={[0.049, -0.756, 0.046]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.652, 0.238, 6.216]}
        rotation={[-3.07, -0.774, -3.124]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.717, 0.234, 6.063]}
        rotation={[-3.048, -0.321, -3.079]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.75, 0.244, 5.999]}
        rotation={[0.034, -0.058, 0.031]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.705, 0.244, 6.023]}
        rotation={[0.053, 0.539, -0.042]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.747, 0.244, 6.101]}
        rotation={[0.039, -0.309, 0.007]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.716, 0.229, 6.09]}
        rotation={[-3.079, -1.044, -3.106]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.877, 0.236, 6.141]}
        rotation={[-0.003, -1.107, -0.051]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.759, 0.236, 6.258]}
        rotation={[0.028, -0.034, -0.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.556, 0.388, 6.051]}
        rotation={[2.587, -1.341, 2.591]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.482, 0.391, 5.983]}
        rotation={[-0.05, 0.345, 0.094]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.538, 0.369, 5.811]}
        rotation={[0.181, -1.177, 0.255]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.652, 0.369, 5.985]}
        rotation={[-0.158, 0.787, 0.16]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.494, 0.384, 6.054]}
        rotation={[0.08, -0.921, 0.128]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.52, 0.376, 6.057]}
        rotation={[0.071, -0.88, 0.109]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.475, 0.389, 6.007]}
        rotation={[1.494, -1.447, 1.54]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.421, 0.395, 5.941]}
        rotation={[-0.002, -0.156, 0.076]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.603, 0.365, 5.778]}
        rotation={[2.735, -1.316, 2.743]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.566, 0.384, 5.915]}
        rotation={[1.156, -1.504, 1.268]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.411, 0.385, 5.795]}
        rotation={[3.104, -0.102, 3.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.415, 0.392, 5.979]}
        rotation={[-0.039, 0.097, 0.136]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.805, 0.191, 5.356]}
        rotation={[3.12, 0.952, 3.016]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.926, 0.203, 5.508]}
        rotation={[-0.22, 1.062, 0.128]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.966, 0.167, 5.26]}
        rotation={[0.18, -1.318, 0.333]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.073, 0.185, 5.438]}
        rotation={[-0.081, -0.423, 0.063]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.879, 0.202, 5.473]}
        rotation={[2.952, -1.064, 3.065]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.936, 0.192, 5.266]}
        rotation={[-0.071, 0.237, 0.095]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.757, 0.195, 5.302]}
        rotation={[-0.091, -0.354, 0.098]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.962, 0.193, 5.429]}
        rotation={[-0.346, 1.192, 0.202]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.086, 0.181, 5.464]}
        rotation={[-0.05, -0.457, 0.097]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.834, 0.191, 5.359]}
        rotation={[2.971, -0.494, 3.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.048, 0.192, 5.415]}
        rotation={[2.37, -1.447, 2.461]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.937, 0.198, 5.524]}
        rotation={[3.03, 0.305, 3.054]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.569, 0.387, 5.322]}
        rotation={[3.086, 0.223, -3.103]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.521, 0.396, 5.304]}
        rotation={[-0.066, 0.233, 0.056]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.567, 0.384, 5.327]}
        rotation={[0.094, 1.428, -0.153]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.786, 0.368, 5.376]}
        rotation={[-2.091, 1.532, 2.102]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.59, 0.365, 5]}
        rotation={[-3.012, 1.356, 2.965]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.6, 0.373, 5.357]}
        rotation={[0.018, -0.404, 0.059]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.717, 0.389, 5.008]}
        rotation={[0.009, -0.281, 0.009]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.501, 0.374, 5.101]}
        rotation={[-0.015, 0.288, -0.035]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.754, 0.389, 5.352]}
        rotation={[-0.117, 1.027, 0.108]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.661, 0.394, 5.366]}
        rotation={[3.102, -0.929, -3.107]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.792, 0.391, 5.195]}
        rotation={[-0.069, -0.828, -0.062]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.523, 0.38, 5.058]}
        rotation={[-0.06, 0.083, 0.047]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.184, 0.234, -1.451]}
        rotation={[0.56, 1.427, -0.632]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.044, 0.233, -1.39]}
        rotation={[-2.896, -1.477, -2.819]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.012, 0.22, -1.468]}
        rotation={[0.054, 0.793, -0.162]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.061, 0.242, -1.491]}
        rotation={[3.04, 0.584, -3.058]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.936, 0.232, -1.24]}
        rotation={[3.13, -0.02, -3.123]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.165, 0.247, -1.255]}
        rotation={[-0.123, -0.902, -0.059]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.937, 0.227, -1.251]}
        rotation={[-0.007, 0.146, -0.086]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.188, 0.244, -1.362]}
        rotation={[-0.066, 0.481, -0.091]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.215, 0.26, -1.193]}
        rotation={[-0.069, 0.253, -0.022]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.116, 0.233, -1.493]}
        rotation={[-3.07, -0.875, -2.957]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.098, 0.228, -1.504]}
        rotation={[3.066, -0.206, -3.064]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.092, 0.24, -1.326]}
        rotation={[3.086, -0.45, -3.13]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.154, 0.155, -0.752]}
        rotation={[0.127, -0.293, 0.123]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.396, 0.122, -0.651]}
        rotation={[0.105, -0.192, 0.135]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.275, 0.136, -0.562]}
        rotation={[2.758, -1.375, 2.679]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.259, 0.159, -0.799]}
        rotation={[-0.081, 0.849, 0.225]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.12, 0.176, -0.825]}
        rotation={[0.262, -0.97, 0.201]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.137, 0.136, -0.578]}
        rotation={[0.08, -0.487, 0.044]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.291, 0.146, -0.762]}
        rotation={[-3.001, 0.261, 2.995]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.343, 0.156, -0.822]}
        rotation={[-2.934, 0.885, 3.009]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.21, 0.149, -0.787]}
        rotation={[0.581, -1.389, 0.525]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.122, 0.16, -0.829]}
        rotation={[2.008, -1.454, 1.902]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.092, 0.152, -0.653]}
        rotation={[-0.037, 0.787, 0.129]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.347, 0.162, -0.768]}
        rotation={[0.367, -1.194, 0.281]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.879, 0.108, -0.11]}
        rotation={[0.182, 1.017, -0.154]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.891, 0.116, -0.137]}
        rotation={[1.879, 1.461, -1.798]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.786, 0.104, -0.269]}
        rotation={[0.1, -0.383, -0.018]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.986, 0.152, -0.438]}
        rotation={[0.099, -0.104, -0.125]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.756, 0.134, -0.391]}
        rotation={[0.281, 1.032, -0.178]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.934, 0.125, -0.404]}
        rotation={[-2.783, -1.424, -2.858]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.767, 0.125, -0.406]}
        rotation={[0.104, 0.405, -0.11]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.838, 0.103, -0.053]}
        rotation={[-0.013, -0.97, -0.096]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.923, 0.103, -0.199]}
        rotation={[0.162, 0.551, -0.101]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.74, 0.105, -0.227]}
        rotation={[0.113, 0.642, -0.108]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.71, 0.1, -0.226]}
        rotation={[0.085, 0.39, -0.119]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.985, 0.134, -0.376]}
        rotation={[-2.939, -0.746, -3.05]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.321, 0.104, -0.586]}
        rotation={[-3.106, 1.34, 2.962]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.207, 0.11, -0.581]}
        rotation={[-0.723, 1.484, 0.588]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.327, 0.135, -0.431]}
        rotation={[-0.453, 1.338, 0.247]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.391, 0.114, -0.469]}
        rotation={[0.436, -1.472, 0.567]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.341, 0.107, -0.57]}
        rotation={[3.019, 0.567, 3.054]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.312, 0.115, -0.496]}
        rotation={[-0.178, 0.466, 0.04]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.486, 0.106, -0.511]}
        rotation={[-0.233, 0.492, 0.035]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.289, 0.107, -0.542]}
        rotation={[2.957, -0.609, 3.048]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.186, 0.109, -0.539]}
        rotation={[-0.267, 0.78, 0.059]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.317, 0.123, -0.409]}
        rotation={[-0.179, 0.449, 0.031]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.398, 0.105, -0.48]}
        rotation={[2.449, -1.505, 2.582]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.453, 0.11, -0.496]}
        rotation={[-0.189, 0.221, 0.036]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.632, 0.123, 0.847]}
        rotation={[-3.065, -0.57, -3.009]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.668, 0.136, 0.87]}
        rotation={[-1.48, -1.474, -1.435]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.708, 0.128, 0.857]}
        rotation={[-0.029, 0.024, -0.135]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.575, 0.118, 0.745]}
        rotation={[0.534, 1.379, -0.515]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.665, 0.119, 0.736]}
        rotation={[0.264, 1.148, -0.32]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.621, 0.129, 0.909]}
        rotation={[2.846, 1.27, -2.876]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.69, 0.118, 0.808]}
        rotation={[-3.111, 0.042, -3.031]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.479, 0.097, 0.799]}
        rotation={[-0.125, -0.73, -0.127]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.612, 0.104, 0.919]}
        rotation={[0.177, 0.867, -0.206]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.595, 0.115, 0.757]}
        rotation={[0.006, -0.296, -0.146]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.636, 0.127, 0.887]}
        rotation={[-0.011, -0.031, -0.069]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.673, 0.121, 0.764]}
        rotation={[-3.06, -0.484, -3.042]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.955, 0.043, 0.126]}
        rotation={[3.034, -0.641, 2.977]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.719, 0.074, 0.084]}
        rotation={[-0.11, 0.975, 0.192]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.863, 0.079, 0.241]}
        rotation={[3.001, -0.856, 3.009]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.889, 0.042, 0.278]}
        rotation={[-1.416, 1.438, 1.481]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.773, 0.076, -0.058]}
        rotation={[0.188, -0.861, 0.176]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.669, 0.072, 0.221]}
        rotation={[-3.13, -0.237, 3.083]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.866, 0.062, 0.056]}
        rotation={[-0.074, 0.634, 0.163]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.667, 0.077, 0.166]}
        rotation={[0.296, -1.116, 0.292]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.776, 0.075, 0.112]}
        rotation={[0.048, -0.539, 0.092]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.708, 0.078, 0.1]}
        rotation={[-0.064, 0.815, 0.111]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.843, 0.064, 0.164]}
        rotation={[0.024, -0.22, 0.051]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.731, 0.08, -0.013]}
        rotation={[-3.027, 1.01, 3.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.581, 0.129, 1.609]}
        rotation={[0.084, 0.959, -0.026]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.898, 0.123, 1.722]}
        rotation={[-3.104, -1.145, 3.103]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.894, 0.143, 1.541]}
        rotation={[-3.104, -0.456, 3.128]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.833, 0.134, 1.813]}
        rotation={[0.034, -0.917, -0.026]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.857, 0.153, 1.458]}
        rotation={[0.063, -1.151, -0.035]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.799, 0.141, 1.616]}
        rotation={[-1.043, -1.544, -1.116]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.632, 0.141, 1.602]}
        rotation={[0.168, 1.195, -0.081]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.726, 0.144, 1.586]}
        rotation={[-0.011, -0.778, -0.029]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.669, 0.131, 1.644]}
        rotation={[0.634, 1.488, -0.605]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.783, 0.158, 1.502]}
        rotation={[-3.11, -0.503, 3.126]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.774, 0.126, 1.782]}
        rotation={[-3.124, 1.226, -3.098]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.988, 0.134, 1.63]}
        rotation={[0.098, 0.942, -0.053]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.522, 0.07, 1.174]}
        rotation={[-0.172, 1.444, 0.126]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.564, 0.083, 1.09]}
        rotation={[0.065, -1.386, 0.027]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.579, 0.082, 1.12]}
        rotation={[2.925, 1.447, -2.895]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.461, 0.086, 1.054]}
        rotation={[3.104, 0.839, -3.116]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.599, 0.087, 1.183]}
        rotation={[3.026, 1.281, -2.986]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.672, 0.086, 1.204]}
        rotation={[3.051, 0.929, -3.09]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.556, 0.083, 1.097]}
        rotation={[-3.111, 0.167, 3.108]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.56, 0.088, 1.312]}
        rotation={[2.984, 1.394, -3.001]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.494, 0.084, 1.103]}
        rotation={[-0.032, -0.048, -0.029]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.454, 0.082, 1.152]}
        rotation={[3.133, 0.415, 3.125]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.609, 0.085, 1.266]}
        rotation={[0.156, 1.337, -0.163]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.364, 0.08, 1.26]}
        rotation={[3.106, 0.658, -3.06]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.853, 0.087, -1.95]}
        rotation={[3.04, -0.111, -3.06]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.058, 0.254, -2.43]}
        rotation={[-0.18, -0.493, -0.143]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.932, 0.177, 0.315]}
        rotation={[2.967, -0.1, 3.05]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.422, 0.115, -0.892]}
        rotation={[2.956, 0.751, -3.114]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.266, 0.148, -1.203]}
        rotation={[0.173, -1.04, 0.041]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.378, 0.088, -0.156]}
        rotation={[-0.177, 0.811, 0.038]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.705, 0.141, -0.987]}
        rotation={[-0.022, 1.201, 0.101]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.661, 0.178, -1.517]}
        rotation={[0.321, 1.032, -0.29]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.665, 0.055, 0.778]}
        rotation={[2.079, 1.391, -2.118]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.954, 0.065, -0.047]}
        rotation={[0.086, 0.188, -0.069]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.777, 0.08, -0.224]}
        rotation={[-3.011, 0.864, 3.135]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.861, 0.087, -0.323]}
        rotation={[3.014, -0.194, -3.131]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.349, 0.084, 0.324]}
        rotation={[0.013, 0.903, -0.108]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.454, 0.084, -0.23]}
        rotation={[0.453, 1.392, -0.434]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.028, 0.082, -0.624]}
        rotation={[-1.202, 1.433, 1.218]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.018, 0.086, -0.845]}
        rotation={[0.393, 1.117, -0.301]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.108, 0.051, 0.318]}
        rotation={[-0.575, 1.407, 0.592]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.216, 0.07, -0.771]}
        rotation={[-2.918, 0.662, 2.931]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.204, 0.087, -0.918]}
        rotation={[-2.984, -0.646, -3.104]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.597, 0.086, -0.613]}
        rotation={[-0.644, 1.288, 0.516]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[1.656, 0.094, 0.074]}
        rotation={[2.937, -1.338, 2.94]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.572, 0.098, -0.207]}
        rotation={[2.857, -1.019, 2.912]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.665, 0.077, -1.581]}
        rotation={[-0.013, 1.446, 0.049]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.318, 0.068, 0.323]}
        rotation={[0.097, 0.957, -0.133]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.882, 0.069, -0.08]}
        rotation={[-2.797, -1.376, -2.902]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.748, 0.161, -1.287]}
        rotation={[2.509, -1.492, 2.618]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.845, 0.093, -1.838]}
        rotation={[-0.613, -1.441, -0.508]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.246, 0.105, 0.389]}
        rotation={[-1.543, -1.55, -1.502]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.221, 0.099, 0.312]}
        rotation={[3.044, -0.404, 3.095]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.083, 0.161, 0.141]}
        rotation={[-3.014, -0.598, -3.034]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.946, 0.204, -0.63]}
        rotation={[0.003, -0.739, -0.008]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.51, 0.221, -1.174]}
        rotation={[-2.898, -0.942, -2.862]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[4.623, 0.21, -1.281]}
        rotation={[-3.092, 0.319, 3.141]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.758, 0.211, -1.431]}
        rotation={[-3.106, -0.83, -3.006]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.643, 0.124, 1.715]}
        rotation={[2.893, -0.969, 2.915]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.387, 0.175, 1.445]}
        rotation={[-2.959, -0.913, -3.081]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.786, 0.193, 0.532]}
        rotation={[2.984, 0.607, -3.109]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.6, 0.19, 0.31]}
        rotation={[0.158, 0.43, -0.051]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.082, 0.227, -0.681]}
        rotation={[-0.016, -1.328, -0.116]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.546, 0.292, -0.915]}
        rotation={[0.147, -0.294, 0.046]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.328, 0.276, -0.993]}
        rotation={[-0.106, 0.739, 0.105]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.57, 0.324, -1.145]}
        rotation={[-3.086, -1.213, -3.119]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[4.834, 0.289, -1.646]}
        rotation={[-2.149, 1.531, 2.226]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[3.875, 0.113, 2.567]}
        rotation={[-3.114, -0.771, -3.133]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.498, 0.182, 2.253]}
        rotation={[0.043, 0.507, 0.034]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.241, 0.344, -0.863]}
        rotation={[-0.247, 0.82, 0.234]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[5.571, 0.247, 0.913]}
        rotation={[-0.145, 0.296, -0.021]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.441, 0.321, -2.515]}
        rotation={[-2.47, 1.494, 2.416]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.116, 0.474, -1.381]}
        rotation={[-3.049, -1.087, -3.096]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.644, 0.331, -3.185]}
        rotation={[2.236, 1.457, -2.288]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.776, 0.377, -3.249]}
        rotation={[3.089, -0.378, 3.034]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.973, 0.354, -1.096]}
        rotation={[-0.092, 0.207, -0.081]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.171, 0.239, 3.147]}
        rotation={[-3.137, 0.966, -3.088]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.594, 0.29, 0.236]}
        rotation={[-0.152, -0.57, -0.182]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[6.956, 0.313, 0.079]}
        rotation={[2.729, 1.559, -2.73]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.107, 0.278, 1.057]}
        rotation={[-3.085, -0.299, 3.095]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.252, 0.272, 0.948]}
        rotation={[0.049, -0.011, -0.037]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[7.626, 0.421, -2.318]}
        rotation={[2.965, -0.257, 3.023]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.438, 0.449, -3.737]}
        rotation={[-2.982, -0.347, -3.119]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[7.994, 0.357, -2.172]}
        rotation={[-0.505, 1.287, 0.41]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.773, 0.056, -5.327]}
        rotation={[0.002, -0.386, -0.03]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.842, 0.105, -6.079]}
        rotation={[-3.014, 1.117, 3.132]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.933, 0.689, -4.555]}
        rotation={[-0.016, -0.03, -0.023]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.789, 0.706, -4.809]}
        rotation={[-2.953, 0.887, 2.909]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.283, 0.069, -6.939]}
        rotation={[0.038, 0.926, 0.047]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.706, 0.123, -7.287]}
        rotation={[-0.005, 0.52, -0.044]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.435, 0.698, -6.346]}
        rotation={[-2.858, -1.27, -2.766]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.584, 0.083, -7.692]}
        rotation={[3.119, -0.565, -3.1]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[4.226, 0.064, -8.423]}
        rotation={[0.018, -0.755, 0.058]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.761, 0.216, -8.385]}
        rotation={[2.876, 0.875, -2.989]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[3.825, 0.1, -9.032]}
        rotation={[-3.014, -0.427, -3.022]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[2.479, 0.751, -7.738]}
        rotation={[-0.312, 1.117, 0.245]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.584, 0.751, -7.679]}
        rotation={[-1.93, -1.391, -1.853]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[2.413, 0.824, -7.046]}
        rotation={[3.046, -0.952, 3.091]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[2.891, 0.4, -9.353]}
        rotation={[0.227, -0.898, 0.21]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.434, 0.867, -8.247]}
        rotation={[2.992, -1.118, 3.092]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.034, 0.742, -9.647]}
        rotation={[-3.073, 1.069, 3.017]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.643, 0.771, -9.609]}
        rotation={[2.638, -1.508, 2.569]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.099, 0.899, -8.729]}
        rotation={[0.589, -1.273, 0.616]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.278, 0.438, -10.36]}
        rotation={[-0.156, 0.196, 0.079]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.139, 0.222, -11.035]}
        rotation={[0.027, -0.016, 0.081]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.554, 0.324, -10.773]}
        rotation={[-0.093, 0.522, -0.032]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.096, 0.397, -10.657]}
        rotation={[-2.678, -1.282, -2.718]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[0.584, 0.437, -10.544]}
        rotation={[0.048, 0.912, 0.069]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.505, 0.445, -10.393]}
        rotation={[-0.515, -1.269, -0.499]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.104, 0.672, -9.876]}
        rotation={[-0.098, 1.005, -0.005]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.013, 0.436, -11.108]}
        rotation={[3.017, -0.559, -3.127]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.323, 0.232, -11.267]}
        rotation={[-0.237, 0.76, 0.148]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.215, 0.486, -10.889]}
        rotation={[0.064, 0.29, -0.007]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.244, 0.265, -11.233]}
        rotation={[2.323, 1.4, -2.243]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.052, 0.432, -11.254]}
        rotation={[-2.907, 0.735, 2.881]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.001, 0.658, -10.306]}
        rotation={[-0.157, 0.277, 0.064]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.625, 0.054, -9.711]}
        rotation={[2.777, 1.266, -2.727]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[3.428, 0.052, -10.169]}
        rotation={[0.212, -1.061, 0.127]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.651, 0.23, -10.679]}
        rotation={[0.107, 0.294, 0.048]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[2.709, 0.326, -10.164]}
        rotation={[0.022, 1.357, 0.033]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.829, 0.135, -10.757]}
        rotation={[-3.055, -0.477, -3.067]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.292, 0.358, -3.541]}
        rotation={[-2.942, -0.477, -2.962]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[7.639, 0.293, -3.574]}
        rotation={[3.008, 0.781, -3.13]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.281, 0.446, -2.751]}
        rotation={[0.556, -1.483, 0.643]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[7.209, 0.291, -3.796]}
        rotation={[-0.162, -0.329, 0.05]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[7.176, 0.222, -4.006]}
        rotation={[0.182, 0.114, -0.018]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.383, 0.856, -9.254]}
        rotation={[-3.131, 1.361, 3.063]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.083, 0.862, -9.198]}
        rotation={[2.64, -1.252, 2.678]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[3.337, 0.435, -7.966]}
        rotation={[0.029, 0.211, -0.051]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.972, 0.553, -8.206]}
        rotation={[0.637, 1.331, -0.675]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[4.824, 0.478, -5.934]}
        rotation={[3.03, -0.846, 3.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.836, 0.505, -6.608]}
        rotation={[-0.185, 0.833, 0.131]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[5.943, 0.308, -5.288]}
        rotation={[-0.308, -1.469, -0.342]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[5.944, 0.401, -4.303]}
        rotation={[-2.963, -0.843, -3.023]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.623, 0.575, -3.43]}
        rotation={[-2.906, 1.053, 3.005]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.848, 0.484, -3.767]}
        rotation={[2.973, -1.488, 2.974]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.097, 0.832, -9.354]}
        rotation={[3.045, -0.929, 2.996]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[3.665, 0.262, -8.266]}
        rotation={[0.734, 1.412, -0.817]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.131, 0.455, -8.386]}
        rotation={[2.921, -0.629, 3.013]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[4.758, 0.238, -6.685]}
        rotation={[-2.994, 1.282, 3.029]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.979, 0.348, -7.032]}
        rotation={[2.897, -1.005, 2.899]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[6.182, 0.23, -5.304]}
        rotation={[-3.014, 1.21, 3.116]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[7.416, 0.502, -1.944]}
        rotation={[1.315, -1.459, 1.42]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.3, 0.539, -2.513]}
        rotation={[2.982, -0.999, 3.067]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[6.328, 0.563, -2.898]}
        rotation={[2.943, 0.866, -2.896]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[6.449, 0.53, -1.581]}
        rotation={[0.98, -1.379, 1.009]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[5.484, 0.415, -1.914]}
        rotation={[-0.171, 0.724, 0.084]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[5.035, 0.385, -2.85]}
        rotation={[-3.012, 0.873, 3.141]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[5.727, 0.484, -4.868]}
        rotation={[-2.976, -1.093, -3.053]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.715, 0.726, -5.373]}
        rotation={[-0.113, -0.257, 0.041]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[4.108, 0.56, -6.253]}
        rotation={[0.148, 0.492, -0.064]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[3.634, 0.708, -6.221]}
        rotation={[-0.224, 1.161, 0.153]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.352, 0.574, -6.939]}
        rotation={[2.963, -0.793, 2.968]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.086, 0.868, -9.034]}
        rotation={[2.953, -0.296, 3]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.485, 0.884, -8.952]}
        rotation={[0.081, -0.808, 0.084]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.655, 0.948, -8.428]}
        rotation={[-2.746, -1.416, -2.698]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.264, 1.022, -8.39]}
        rotation={[2.827, 1.26, -2.928]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.872, 0.938, -7.874]}
        rotation={[-0.162, -0.849, -0.105]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.507, 0.965, -7.83]}
        rotation={[-0.116, -0.405, 0.032]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[2.312, 0.831, -6.216]}
        rotation={[-3.022, -0.807, -2.956]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[1.734, 0.868, -7.271]}
        rotation={[2.973, 0.599, 3.134]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[3.178, 0.815, -5.84]}
        rotation={[3.03, -0.609, 3.132]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[2.816, 0.787, -5.693]}
        rotation={[0.17, -0.31, 0.105]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.719, 0.694, -4.626]}
        rotation={[0.028, 0.119, -0.039]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[4.662, 0.424, -3.707]}
        rotation={[2.673, 1.168, -2.726]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[4.451, 0.515, -4.119]}
        rotation={[-2.793, 1.093, 2.845]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[4.409, 0.294, -3.023]}
        rotation={[0.016, -0.123, 0.095]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[6.224, 0.432, -1.113]}
        rotation={[-3.121, -0.393, -3.139]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.055, 0.221, 1.184]}
        rotation={[-0.004, 1.489, -0.072]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.556, 0.093, 2.277]}
        rotation={[3.131, 1.513, -3.044]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[3.956, 0.137, 2.115]}
        rotation={[0.207, -0.543, 0.108]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[4.148, 0.161, 2.883]}
        rotation={[-3.082, 1.266, -3.127]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[6.772, 0.433, -0.819]}
        rotation={[0.102, -1.373, 0.191]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[7.333, 0.54, -1.257]}
        rotation={[0.011, -0.223, 0.064]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[5.686, 0.28, 1.781]}
        rotation={[-0.031, 1.38, -0.054]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[4.962, 0.262, 2.414]}
        rotation={[-1.028, -1.433, -1.087]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[3.191, 0.081, 1.995]}
        rotation={[0.181, -0.179, 0.034]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[3.68, 0.231, 3.725]}
        rotation={[3.132, -0.473, 3.029]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[2.682, 0.185, 5.027]}
        rotation={[0.205, 0.865, -0.118]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.625, 0.222, 5.557]}
        rotation={[-2.984, 0.29, -3.092]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[2.565, 0.236, 5.579]}
        rotation={[2.971, 0.258, 3.14]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[2.287, 0.239, 5.98]}
        rotation={[-2.952, -1.02, -3.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.197, 0.165, 5.312]}
        rotation={[-2.739, 1.478, 2.68]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[1.598, 0.206, 6.246]}
        rotation={[-2.971, 1.358, 2.87]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.468, 0.221, 6.545]}
        rotation={[2.949, -0.877, 2.932]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.168, 0.175, 6.314]}
        rotation={[3.107, -0.106, -3.133]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.636, 0.199, 6.667]}
        rotation={[2.958, 0.221, 3.069]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.723, 0.227, 6.94]}
        rotation={[0.256, -1.199, 0.237]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.565, 0.153, 6.182]}
        rotation={[0.008, -1.006, 0.039]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.151, 0.199, 6.946]}
        rotation={[3.062, 0.809, -2.989]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.51, 0.127, 5.654]}
        rotation={[3.049, 0.466, -3.014]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.274, 0.215, 6.593]}
        rotation={[-0.026, -0.405, -0.058]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.735, 0.493, 4.548]}
        rotation={[2.873, -1.218, 2.792]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.569, 0.492, 5.786]}
        rotation={[0.073, 0.001, -0.03]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.101, 0.49, 4.055]}
        rotation={[0.478, -1.337, 0.507]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.141, 0.507, 4.903]}
        rotation={[-3.05, -0.282, -3.01]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.144, 0.248, 3.295]}
        rotation={[2.975, -0.223, 3.058]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.88, 0.235, 3.751]}
        rotation={[2.961, -0.992, 2.946]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.092, 0.477, 3.943]}
        rotation={[2.965, -0.882, 2.981]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.232, 0.169, 4.749]}
        rotation={[-0.308, 1.075, 0.22]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.918, 0.363, 4.584]}
        rotation={[2.231, 1.346, -2.264]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.75, 0.247, 6.135]}
        rotation={[0.049, -0.132, -0.003]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.51, 0.391, 5.957]}
        rotation={[2.951, -0.922, 2.976]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.941, 0.198, 5.405]}
        rotation={[-0.127, 0.455, 0.073]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.654, 0.385, 5.205]}
        rotation={[3.137, 1.009, 3.12]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.089, 0.251, -1.384]}
        rotation={[-0.089, -0.592, -0.062]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.212, 0.161, -0.699]}
        rotation={[-3.033, 0.359, 3.026]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.849, 0.12, -0.259]}
        rotation={[-3, -0.562, -3.05]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.334, 0.119, -0.503]}
        rotation={[-0.181, 0.392, 0.06]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.641, 0.125, 0.787]}
        rotation={[1.972, 1.461, -1.971]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.808, 0.075, 0.132]}
        rotation={[-3.133, -0.025, 3.045]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.808, 0.149, 1.632]}
        rotation={[1.672, 1.541, -1.62]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-2.493, 0.089, 1.217]}
        rotation={[-0.021, -0.937, -0.025]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.385, 1.266, -4.889]}
        rotation={[-0.028, -0.247, 0.048]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.172, 1.27, -4.925]}
        rotation={[0.041, -0.921, 0.026]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.279, 1.261, -5.09]}
        rotation={[-0.001, 0.309, 0.025]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.173, 1.273, -4.949]}
        rotation={[-3.138, -1.269, 3.112]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.404, 1.261, -4.894]}
        rotation={[0.006, -0.206, 0.081]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.24, 1.265, -5.106]}
        rotation={[-0.025, 0.447, 0.054]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.318, 1.276, -5.116]}
        rotation={[3.088, -1.222, 3.09]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.2, 1.27, -4.977]}
        rotation={[-3.101, -1.426, -3.024]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.334, 1.268, -5.016]}
        rotation={[0.543, -1.494, 0.549]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.304, 1.272, -4.837]}
        rotation={[0.071, -0.993, 0.075]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.315, 1.271, -5.147]}
        rotation={[-0.012, 1.038, 0.01]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.316, 1.272, -4.984]}
        rotation={[3.068, 1.477, -3.067]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.473, 1.245, -5.169]}
        rotation={[-3.084, -0.791, 3.108]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.42, 1.24, -5.151]}
        rotation={[0.068, 0.936, 0.056]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.452, 1.24, -5.057]}
        rotation={[0.167, -0.748, 0.096]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.5, 1.227, -5.059]}
        rotation={[0.202, -0.731, 0.122]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.319, 1.249, -5.128]}
        rotation={[-2.937, 0.812, 3.097]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.471, 1.221, -4.952]}
        rotation={[0.279, -1.201, 0.155]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.552, 1.221, -4.98]}
        rotation={[-3.036, 0.086, 3.061]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.586, 1.229, -5.102]}
        rotation={[0.331, -1.132, 0.153]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.31, 1.256, -5.139]}
        rotation={[-3.063, -0.945, 3.033]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.507, 1.237, -5.067]}
        rotation={[0.081, 1.027, 0.022]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.386, 1.221, -4.947]}
        rotation={[0.124, -0.54, -0.013]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.537, 1.245, -5.158]}
        rotation={[0.186, -0.754, 0.052]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.634, 1.628, -3.607]}
        rotation={[0.21, -0.758, 0.197]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.675, 1.629, -3.51]}
        rotation={[-0.154, 0.845, 0.322]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.76, 1.663, -3.631]}
        rotation={[-3.073, 0.04, 2.97]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.727, 1.637, -3.472]}
        rotation={[0.462, -1.059, 0.489]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.929, 1.691, -3.533]}
        rotation={[-2.938, 0.726, 2.889]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.977, 1.711, -3.671]}
        rotation={[2.764, -1.108, 2.733]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.817, 1.674, -3.71]}
        rotation={[-0.105, 0.843, 0.183]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.802, 1.682, -3.689]}
        rotation={[-2.835, 0.837, 2.835]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.813, 1.664, -3.552]}
        rotation={[-0.085, 0.6, 0.2]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.934, 1.69, -3.568]}
        rotation={[0.884, -1.368, 0.859]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.658, 1.637, -3.569]}
        rotation={[0.193, -0.533, 0.173]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.864, 1.692, -3.528]}
        rotation={[0.088, -0.312, 0.231]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.747, 1.304, -3.872]}
        rotation={[-3.032, 0.812, 3.021]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.869, 1.288, -3.745]}
        rotation={[0.216, -0.961, 0.235]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.767, 1.302, -3.786]}
        rotation={[-3.035, 0.881, 3.073]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.849, 1.288, -3.881]}
        rotation={[-0.085, 1.11, 0.113]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.782, 1.3, -3.929]}
        rotation={[-3.139, -0.44, 3.104]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.903, 1.285, -3.726]}
        rotation={[2.92, -1.228, 2.878]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.704, 1.298, -3.86]}
        rotation={[-0.189, 1.274, 0.242]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.933, 1.298, -3.792]}
        rotation={[-3.121, -0.548, 3.106]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.942, 1.286, -3.779]}
        rotation={[3.088, -0.777, 3.025]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.775, 1.29, -3.704]}
        rotation={[0.031, -0.085, 0.042]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.869, 1.288, -3.846]}
        rotation={[3.085, -0.758, 2.986]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.715, 1.302, -3.79]}
        rotation={[-0.169, 1.366, 0.233]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.791, 1.31, -3.659]}
        rotation={[3.028, -0.765, 3.084]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.587, 1.325, -3.293]}
        rotation={[-0.183, 1.342, 0.167]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.873, 1.323, -3.457]}
        rotation={[-3.124, 0.328, 3.111]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.896, 1.322, -3.394]}
        rotation={[-3.094, 0.612, 3.1]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.59, 1.337, -3.515]}
        rotation={[3.02, -0.583, 3.07]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.693, 1.325, -3.636]}
        rotation={[3.098, -0.256, 3.034]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.788, 1.332, -3.383]}
        rotation={[0.03, -0.668, 0.132]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.645, 1.313, -3.626]}
        rotation={[3.089, -0.487, 3.116]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.735, 1.313, -3.686]}
        rotation={[1.045, -1.508, 1.12]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.725, 1.342, -3.506]}
        rotation={[-3.127, 0.196, 3.115]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.642, 1.318, -3.613]}
        rotation={[-0.039, -0.765, 0.025]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.679, 1.338, -3.254]}
        rotation={[3.019, -1.029, 3.037]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.104, 0.212, -6.292]}
        rotation={[0.143, -0.191, -0.125]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.164, 0.201, -6.274]}
        rotation={[0.081, -0.53, -0.139]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.324, 0.203, -6.191]}
        rotation={[0.032, -0.778, -0.19]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.053, 0.183, -6.308]}
        rotation={[-3.029, 0.471, -2.991]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.154, 0.183, -6.142]}
        rotation={[-2.643, -1.3, -2.763]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.289, 0.206, -6.208]}
        rotation={[0.757, 1.293, -0.644]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.295, 0.216, -6.285]}
        rotation={[-2.47, -1.315, -2.638]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.196, 0.211, -6.311]}
        rotation={[0.162, 0.407, -0.166]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.256, 0.196, -6.179]}
        rotation={[0.666, 1.235, -0.588]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.298, 0.225, -6.364]}
        rotation={[-3.087, 0.61, -3.034]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.248, 0.227, -6.437]}
        rotation={[-2.632, -1.29, -2.729]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.338, 0.236, -6.341]}
        rotation={[-2.936, -0.37, -3.016]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.988, 1.037, -6.78]}
        rotation={[-0.132, -0.936, -0.274]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.924, 1.039, -6.751]}
        rotation={[-3.111, 0.222, -3.004]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.955, 1.028, -6.554]}
        rotation={[-2.713, -1.168, -2.799]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.006, 1.034, -6.754]}
        rotation={[3.037, 0.86, -2.87]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.008, 1.038, -6.711]}
        rotation={[0.085, -0.386, -0.145]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.058, 1.005, -6.588]}
        rotation={[1.915, 1.445, -1.852]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.986, 1.047, -6.817]}
        rotation={[-2.744, -1.139, -2.762]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.714, 1.053, -6.592]}
        rotation={[-2.817, -1.014, -2.934]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.902, 1.043, -6.588]}
        rotation={[-2.805, -0.911, -2.817]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.966, 1.041, -6.685]}
        rotation={[-2.537, -1.263, -2.612]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.785, 1.059, -6.647]}
        rotation={[-3.082, 0.285, -2.967]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.946, 1.019, -6.468]}
        rotation={[0.003, -0.754, -0.164]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.832, 0.91, -6.941]}
        rotation={[-1.672, -1.391, -1.607]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.889, 0.939, -6.678]}
        rotation={[-0.731, -1.284, -0.702]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.669, 0.968, -6.949]}
        rotation={[2.838, 1.022, -2.835]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.639, 0.964, -6.916]}
        rotation={[0.203, 0.825, -0.247]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.843, 0.932, -6.818]}
        rotation={[3.099, -0.172, -3.012]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.792, 0.921, -6.859]}
        rotation={[-0.352, -0.988, -0.398]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.695, 0.946, -6.862]}
        rotation={[0.023, 0.328, -0.237]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.585, 0.961, -6.924]}
        rotation={[-2.838, -1.113, -2.757]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.84, 0.914, -6.958]}
        rotation={[1.174, 1.371, -1.184]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.834, 0.94, -6.929]}
        rotation={[3.097, 0.006, -3.002]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.587, 0.963, -6.637]}
        rotation={[0.786, 1.292, -0.796]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.711, 0.951, -6.829]}
        rotation={[3.134, 0.085, -3.008]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.228, 1.184, -4.286]}
        rotation={[3.053, -0.629, -3.075]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.263, 1.178, -4.332]}
        rotation={[3, -0.728, -3.075]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.262, 1.177, -4.337]}
        rotation={[3.05, -0.956, -3.043]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.361, 1.182, -4.355]}
        rotation={[3.005, -0.237, -3.106]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.413, 1.205, -4.203]}
        rotation={[-2.916, -1.554, -2.821]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.21, 1.173, -4.347]}
        rotation={[-0.06, 1.208, -0.122]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.407, 1.196, -4.155]}
        rotation={[2.983, -1.029, 3.121]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.217, 1.187, -4.382]}
        rotation={[-0.1, 0.08, 0.017]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.211, 1.199, -4.175]}
        rotation={[-0.154, -0.761, -0.071]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.465, 1.198, -4.231]}
        rotation={[3.037, 0.791, -3.131]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.318, 1.192, -4.272]}
        rotation={[-0.127, -0.319, -0.052]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.359, 1.199, -4.217]}
        rotation={[3.002, -0.227, 3.117]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.127, 1.202, 2.89]}
        rotation={[-0.424, -1.368, -0.265]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.153, 1.154, 2.609]}
        rotation={[-0.12, 0.377, 0.016]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.983, 1.157, 2.644]}
        rotation={[-0.048, 1.077, -0.065]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.117, 1.184, 2.748]}
        rotation={[-0.071, 0.797, -0.036]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.207, 1.161, 2.63]}
        rotation={[2.954, 1.248, -3.044]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.979, 1.179, 2.835]}
        rotation={[-0.073, -0.123, -0.008]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.196, 1.208, 2.939]}
        rotation={[0.542, 1.443, -0.668]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.141, 1.168, 2.728]}
        rotation={[-0.199, -1.191, -0.043]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.028, 1.173, 2.872]}
        rotation={[-0.012, 0.965, -0.104]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.976, 1.165, 2.745]}
        rotation={[-0.152, -0.639, -0.036]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.115, 1.195, 2.825]}
        rotation={[-0.126, 0.095, -0.025]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.238, 1.176, 2.743]}
        rotation={[3.028, -0.393, 3.129]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.82, 1.27, 2.058]}
        rotation={[0.111, -1.052, 0.285]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.79, 1.312, 2.307]}
        rotation={[-3.124, 0.502, 2.937]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.851, 1.259, 2.061]}
        rotation={[3.047, 0.083, 3.029]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.98, 1.269, 2.253]}
        rotation={[-2.594, 1.361, 2.449]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.975, 1.24, 1.965]}
        rotation={[-3.073, 0.771, 2.931]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.905, 1.251, 2.032]}
        rotation={[-0.142, 0.09, 0.204]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.96, 1.232, 2.004]}
        rotation={[-0.836, 1.346, 0.709]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.959, 1.255, 2.008]}
        rotation={[-0.267, 0.964, 0.189]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.729, 1.284, 1.973]}
        rotation={[-2.593, 1.28, 2.448]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.898, 1.254, 2.057]}
        rotation={[-1.642, 1.413, 1.52]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.874, 1.24, 1.892]}
        rotation={[-2.866, 1.068, 2.699]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.707, 1.288, 2.089]}
        rotation={[3.112, 0.369, 3.039]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.507, 1.401, 0.987]}
        rotation={[-3.024, 0.872, 2.948]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.352, 1.415, 0.664]}
        rotation={[1.21, -1.447, 1.257]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.541, 1.408, 0.688]}
        rotation={[0.067, -0.477, 0.1]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.568, 1.389, 0.997]}
        rotation={[-0.217, 1.049, 0.281]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.51, 1.41, 0.821]}
        rotation={[0.022, -0.552, 0.077]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.637, 1.387, 0.719]}
        rotation={[3.056, -0.311, 2.987]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.477, 1.405, 0.766]}
        rotation={[0.007, -0.44, 0.095]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.388, 1.432, 1.057]}
        rotation={[3.081, -0.082, 3.032]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.323, 1.432, 1.021]}
        rotation={[-0.067, 0.599, 0.138]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.275, 1.433, 0.922]}
        rotation={[1.964, -1.452, 2.017]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.599, 1.394, 0.749]}
        rotation={[-0.087, 0.278, 0.125]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.281, 1.428, 0.78]}
        rotation={[-0.035, -0.209, 0.109]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.529, 1.437, 0.647]}
        rotation={[0.198, 1.105, -0.121]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.623, 1.454, 0.608]}
        rotation={[-2.993, 0.039, -3.083]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.717, 1.447, 0.682]}
        rotation={[0.204, 1.012, -0.047]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.645, 1.417, 0.892]}
        rotation={[0.118, 0.607, -0.003]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.511, 1.429, 0.659]}
        rotation={[0.181, 0.048, -0.063]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.606, 1.42, 0.813]}
        rotation={[0.282, 1.267, -0.16]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.636, 1.438, 0.682]}
        rotation={[0.126, -0.623, -0.019]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.72, 1.424, 0.789]}
        rotation={[-0.63, -1.482, -0.743]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.568, 1.438, 0.653]}
        rotation={[0.204, -1.437, 0.018]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.551, 1.415, 0.814]}
        rotation={[-2.98, 0.964, 3.101]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-4.631, 1.418, 0.796]}
        rotation={[0.144, 0.893, -0.023]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.608, 1.433, 0.772]}
        rotation={[2.946, 1.42, -2.807]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.859, 1.404, 0.367]}
        rotation={[-0.212, -1.178, -0.175]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.992, 1.413, 0.362]}
        rotation={[0.112, 1.231, -0.227]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.718, 1.395, 0.38]}
        rotation={[-3.027, -0.907, -2.967]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.783, 1.393, 0.37]}
        rotation={[3.068, 0.176, -3.064]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-4.848, 1.404, 0.321]}
        rotation={[3.01, 0.836, -3.074]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.984, 1.425, 0.339]}
        rotation={[2.806, 1.128, -2.855]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.797, 1.408, 0.382]}
        rotation={[-0.189, -0.788, -0.157]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.988, 1.412, 0.306]}
        rotation={[0.164, 1.146, -0.213]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.777, 1.412, 0.452]}
        rotation={[3.136, -0.454, -3.024]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.969, 1.413, 0.387]}
        rotation={[0.086, 0.848, -0.132]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.843, 1.401, 0.327]}
        rotation={[-0.023, 0.033, -0.14]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.839, 1.403, 0.32]}
        rotation={[-0.269, -1.072, -0.262]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.024, 1.334, -2.173]}
        rotation={[0.181, 0.766, -0.083]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.965, 1.338, -2.189]}
        rotation={[0.255, 1.419, -0.097]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.044, 1.345, -2.225]}
        rotation={[-3.056, 0.24, -3.097]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.03, 1.332, -2.212]}
        rotation={[-0.027, -1.116, -0.141]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.161, 1.336, -2.104]}
        rotation={[0.092, -0.827, -0.05]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.092, 1.333, -2.125]}
        rotation={[0.075, -1.23, -0.098]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.121, 1.342, -2.234]}
        rotation={[-3.006, 0.547, -3.088]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-3.181, 1.321, -2.135]}
        rotation={[0.122, 1.129, 0.029]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-3.001, 1.344, -2.267]}
        rotation={[0.02, -1.214, -0.088]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.17, 1.343, -2.194]}
        rotation={[0.1, 1.116, -0.034]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.999, 1.326, -2.033]}
        rotation={[-3.018, -1.024, -3.127]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.958, 1.343, -2.163]}
        rotation={[-3.044, -0.502, -3.123]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.532, 1.384, -1.744]}
        rotation={[2.681, 1.394, -2.554]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.212, 1.366, -1.839]}
        rotation={[-0.318, -1.279, -0.429]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.242, 1.367, -1.82]}
        rotation={[-0.179, -1.105, -0.298]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.324, 1.378, -1.754]}
        rotation={[-2.895, -0.889, -2.957]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.383, 1.412, -1.962]}
        rotation={[-2.91, -0.99, -2.94]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.354, 1.363, -1.713]}
        rotation={[3.134, 0.69, -2.995]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.451, 1.392, -1.848]}
        rotation={[-2.65, -1.358, -2.786]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.378, 1.403, -1.897]}
        rotation={[-2.545, -1.436, -2.682]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.214, 1.377, -1.932]}
        rotation={[-3.114, 0.21, -2.982]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.263, 1.384, -1.877]}
        rotation={[-3.072, 0.153, -3.056]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.444, 1.421, -2.007]}
        rotation={[0.228, 0.729, -0.164]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.483, 1.41, -1.938]}
        rotation={[-2.432, -1.379, -2.473]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.472, 1.206, -2.812]}
        rotation={[-0.151, -0.924, -0.015]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.39, 1.253, -2.579]}
        rotation={[-0.118, -0.141, 0.045]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.496, 1.226, -2.775]}
        rotation={[-0.3, 1.406, 0.199]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.334, 1.238, -2.667]}
        rotation={[-0.158, 0.041, 0.03]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.515, 1.211, -2.734]}
        rotation={[-0.176, 0.227, 0.01]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.547, 1.215, -2.687]}
        rotation={[2.934, -1.277, 3.132]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.472, 1.251, -2.527]}
        rotation={[-0.163, 0.431, 0.026]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.436, 1.228, -2.729]}
        rotation={[-0.124, 0.669, 0]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.453, 1.26, -2.476]}
        rotation={[3.029, 0.762, 3.135]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.648, 1.232, -2.652]}
        rotation={[2.901, 1.225, -3.01]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.31, 1.24, -2.633]}
        rotation={[2.978, -0.866, -3.125]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.492, 1.258, -2.542]}
        rotation={[-0.175, 0.241, -0.002]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.352, 1.254, -2.948]}
        rotation={[0.184, -0.904, 0.045]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.206, 1.258, -2.965]}
        rotation={[0.162, -0.873, 0.107]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.425, 1.219, -2.85]}
        rotation={[0.171, -0.379, 0.089]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.429, 1.238, -2.875]}
        rotation={[0.195, -1.311, 0.124]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.477, 1.23, -2.865]}
        rotation={[2.728, -1.419, 2.627]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.354, 1.273, -3.083]}
        rotation={[-2.857, 1.363, 3.024]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.304, 1.254, -2.977]}
        rotation={[-2.989, 0.513, 3.073]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.37, 1.272, -3.049]}
        rotation={[-3.009, 0.898, -3.124]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.389, 1.262, -3.015]}
        rotation={[-2.99, 0.069, -3.137]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.237, 1.254, -2.942]}
        rotation={[0.093, -0.506, 0.004]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.431, 1.263, -3.04]}
        rotation={[-2.446, 1.468, 2.547]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.36, 1.252, -3.073]}
        rotation={[0.132, -0.756, 0.068]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.691, 1.372, -3.293]}
        rotation={[-0.088, -0.105, 0.1]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.884, 1.328, -3.588]}
        rotation={[-3, 1.133, 2.866]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.904, 1.326, -3.653]}
        rotation={[0.021, -0.459, 0.09]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.909, 1.348, -3.533]}
        rotation={[-0.148, 0.49, 0.106]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.895, 1.339, -3.341]}
        rotation={[-0.285, 1.26, 0.296]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.792, 1.343, -3.708]}
        rotation={[3.058, -0.284, 3.025]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.683, 1.384, -3.412]}
        rotation={[-2.533, 1.362, 2.477]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.86, 1.337, -3.635]}
        rotation={[0.024, -0.557, 0.138]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-2.014, 1.333, -3.462]}
        rotation={[-0.714, 1.406, 0.644]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.794, 1.331, -3.686]}
        rotation={[2.607, -1.394, 2.613]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.879, 1.317, -3.709]}
        rotation={[-0.1, 0.613, 0.105]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.99, 1.331, -3.707]}
        rotation={[-0.009, -0.297, 0.046]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.52, 1.248, -4.039]}
        rotation={[-0.031, -1.008, 0.057]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.506, 1.238, -3.947]}
        rotation={[-0.03, 0.065, 0.004]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.63, 1.237, -3.926]}
        rotation={[3.063, -0.121, 3.075]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.68, 1.245, -4.097]}
        rotation={[-0.024, 0.134, -0.038]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.684, 1.251, -4.014]}
        rotation={[3.099, -0.02, -3.12]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.602, 1.243, -3.919]}
        rotation={[0, -1.483, 0.014]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.563, 1.231, -4.163]}
        rotation={[-0.083, -0.157, 0.029]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.632, 1.239, -4.144]}
        rotation={[3.051, -1.11, 3.113]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.584, 1.245, -4.074]}
        rotation={[3.122, 0.536, 3.113]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.558, 1.255, -3.945]}
        rotation={[-0.108, 0.658, 0.094]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.559, 1.249, -4.08]}
        rotation={[3.073, -1.141, 3.118]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.671, 1.237, -4.055]}
        rotation={[-0.112, 1.062, 0.01]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[1.422, 1.462, -4.783]}
        rotation={[-0.089, -1.24, -0.099]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.494, 1.462, -4.728]}
        rotation={[-0.011, 0.054, 0.043]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.595, 1.463, -4.825]}
        rotation={[3.11, -0.024, -3.122]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.573, 1.46, -4.702]}
        rotation={[2.932, -1.339, 2.942]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.635, 1.471, -4.925]}
        rotation={[-0.162, 1.291, 0.158]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.396, 1.473, -5.029]}
        rotation={[-3.116, 0.169, 3.113]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[1.592, 1.473, -4.758]}
        rotation={[-2.764, 1.437, 2.763]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.453, 1.463, -4.987]}
        rotation={[3.121, 1.165, -3.14]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.61, 1.471, -4.926]}
        rotation={[3.133, 0.89, -3.103]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.354, 1.484, -4.813]}
        rotation={[-3.111, -1.327, -3.135]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[1.735, 1.46, -4.848]}
        rotation={[-2.996, -1.385, -3.057]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.68, 1.474, -5.026]}
        rotation={[-3.128, -0.418, 3.086]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.218, 1.465, -3.683]}
        rotation={[-3.09, -0.012, 3.126]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.292, 1.484, -3.798]}
        rotation={[-3.096, -1.034, 3.101]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.365, 1.502, -3.806]}
        rotation={[0.12, -0.675, 0.013]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.123, 1.471, -3.584]}
        rotation={[-3.09, -0.52, 3.091]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.386, 1.47, -3.762]}
        rotation={[-3.089, -0.363, -3.114]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.34, 1.468, -3.581]}
        rotation={[0.087, 0.351, -0.007]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.033, 1.465, -3.687]}
        rotation={[0.036, -0.995, -0.053]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.164, 1.473, -3.575]}
        rotation={[0.058, -0.948, -0.05]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.41, 1.485, -3.741]}
        rotation={[-0.648, 1.539, 0.724]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.4, 1.476, -3.609]}
        rotation={[0.037, -0.561, -0.066]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.171, 1.478, -3.711]}
        rotation={[-0.065, -1.286, -0.086]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.391, 1.485, -3.818]}
        rotation={[0.093, 0.381, -0.004]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.463, 1.37, -4.11]}
        rotation={[-3.12, -1.365, 3.105]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.503, 1.374, -4.113]}
        rotation={[0.15, 1.278, -0.072]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.482, 1.365, -4.013]}
        rotation={[3.116, -1.343, 3.026]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.338, 1.365, -3.965]}
        rotation={[0.042, -0.076, 0.02]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.392, 1.379, -4.157]}
        rotation={[-3.06, -1.342, -3.099]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.389, 1.368, -4.093]}
        rotation={[-3.067, -0.397, 3.129]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.413, 1.379, -3.955]}
        rotation={[3.136, 0.763, -3.137]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.524, 1.365, -4.013]}
        rotation={[-3.03, -1.072, -3.119]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-0.531, 1.382, -4.156]}
        rotation={[0.052, 0.738, -0.022]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.527, 1.373, -4.079]}
        rotation={[-0.05, 1.444, 0.121]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.583, 1.376, -4.01]}
        rotation={[-2.713, -1.521, -2.723]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.432, 1.378, -4.236]}
        rotation={[0.064, 0.841, -0.063]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.281, 1.311, -4.702]}
        rotation={[3.066, -1.235, 3.052]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.397, 1.306, -4.713]}
        rotation={[3.106, -0.666, -3.131]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.346, 1.31, -4.701]}
        rotation={[3.116, 0.996, 3.099]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.208, 1.325, -4.611]}
        rotation={[0, -0.1, 0.047]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.411, 1.303, -4.632]}
        rotation={[-0.025, -0.172, 0.009]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-0.384, 1.311, -4.688]}
        rotation={[-0.066, 0.325, 0.004]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.288, 1.317, -4.552]}
        rotation={[-0.054, -1.128, 0.003]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.318, 1.3, -4.731]}
        rotation={[-0.017, -0.833, 0.019]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.188, 1.318, -4.657]}
        rotation={[0.252, -1.412, 0.272]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.348, 1.307, -4.73]}
        rotation={[-0.028, 0.536, 0.056]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.326, 1.309, -4.594]}
        rotation={[3.098, -1.228, 3.136]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.407, 1.304, -4.733]}
        rotation={[3.123, -0.874, 3.122]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-1.823, 1.261, -4.108]}
        rotation={[-2.973, 0.884, -3.109]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.943, 1.232, -3.912]}
        rotation={[0.19, -0.248, 0.022]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.905, 1.248, -4.036]}
        rotation={[0.274, -1.218, 0.092]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.039, 1.253, -3.981]}
        rotation={[0.239, -0.772, 0.051]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.188, 1.256, -4.058]}
        rotation={[-2.925, 0.387, -3.142]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.936, 1.237, -4.017]}
        rotation={[0.189, -0.853, 0.068]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.815, 1.239, -4.026]}
        rotation={[-2.962, -0.588, 3.138]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.013, 1.232, -3.964]}
        rotation={[-2.963, -0.729, 3.104]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.115, 1.288, -4.275]}
        rotation={[0.018, 1.259, 0.181]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.104, 1.265, -4.096]}
        rotation={[-2.939, 1.126, 3.122]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.067, 1.239, -3.942]}
        rotation={[0.2, -0.213, 0.039]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.881, 1.248, -3.909]}
        rotation={[-2.856, 1.128, 3.022]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.803, 1.224, -4.417]}
        rotation={[-3.004, -0.445, 3.07]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.658, 1.215, -4.296]}
        rotation={[-2.834, 1.2, 2.968]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.618, 1.241, -4.422]}
        rotation={[-2.949, 0.361, 3.098]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.643, 1.242, -4.524]}
        rotation={[-3.045, -0.645, 3.131]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.877, 1.201, -4.267]}
        rotation={[-2.957, 1.161, 3.117]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.657, 1.219, -4.371]}
        rotation={[3.076, -1.372, 2.925]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.561, 1.229, -4.44]}
        rotation={[-2.973, 0.497, 3.137]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.564, 1.214, -4.348]}
        rotation={[-3.018, -0.608, 3.104]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.727, 1.209, -4.36]}
        rotation={[-3.003, -0.106, 3.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.721, 1.233, -4.477]}
        rotation={[0.067, 0.938, 0.026]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.848, 1.221, -4.31]}
        rotation={[0.1, 0.975, 0.069]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.72, 1.206, -4.298]}
        rotation={[0.158, 0.333, -0.02]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.709, 1.329, -3.802]}
        rotation={[3.054, -0.798, 3.026]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.575, 1.354, -3.576]}
        rotation={[2.999, -0.491, 2.996]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.789, 1.323, -3.709]}
        rotation={[2.974, -0.91, 2.998]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.73, 1.314, -3.807]}
        rotation={[-0.085, 0.73, 0.054]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.702, 1.336, -3.641]}
        rotation={[-0.038, 0.109, 0.14]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.55, 1.35, -3.565]}
        rotation={[3.047, -0.552, 3.061]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.804, 1.325, -3.68]}
        rotation={[-0.061, 0.579, 0.089]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.662, 1.347, -3.501]}
        rotation={[0.013, -0.437, 0.144]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.645, 1.346, -3.564]}
        rotation={[-0.203, 0.964, 0.136]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.646, 1.324, -3.514]}
        rotation={[-1.011, 1.438, 1.015]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.63, 1.342, -3.731]}
        rotation={[-0.061, 0.531, 0.117]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.667, 1.352, -3.618]}
        rotation={[-2.98, 1.058, 2.952]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.764, 1.347, -4.099]}
        rotation={[-0.09, -0.241, 0.022]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.803, 1.338, -4.27]}
        rotation={[-0.117, 1.349, 0.033]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.683, 1.343, -4.208]}
        rotation={[3.057, 0.18, 3.07]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.868, 1.368, -3.995]}
        rotation={[-0.112, 0.411, -0.009]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.874, 1.345, -3.991]}
        rotation={[-3.009, 1.284, 2.933]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.753, 1.341, -4]}
        rotation={[3.092, 0.198, -3.119]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.95, 1.322, -4.169]}
        rotation={[3.108, 0.913, 3.071]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.839, 1.338, -4.11]}
        rotation={[3.055, 1.369, -3.082]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.961, 1.339, -4.139]}
        rotation={[-0.099, -0.03, 0.053]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.852, 1.335, -4.359]}
        rotation={[3.087, 0.772, 3.135]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.899, 1.328, -4.345]}
        rotation={[2.975, -1.228, 3.075]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.665, 1.349, -4.194]}
        rotation={[-0.064, -0.022, 0.05]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.734, 0.959, -4.97]}
        rotation={[0.12, -0.767, 0.051]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.758, 0.973, -5.101]}
        rotation={[-3.04, -0.483, -3.127]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.781, 0.957, -4.854]}
        rotation={[-3.112, -1.491, 3.12]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.695, 0.968, -4.965]}
        rotation={[-3.031, 1.212, -3.134]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.752, 0.964, -5.044]}
        rotation={[-3.103, -0.171, 3.112]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.747, 0.959, -4.894]}
        rotation={[-3.034, -0.358, -3.113]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.902, 0.97, -4.927]}
        rotation={[-3.114, -1.155, -3.127]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.837, 0.952, -4.945]}
        rotation={[0.057, -0.674, -0.054]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-2.775, 0.969, -5.037]}
        rotation={[-3.014, 0.969, 3.101]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.862, 0.962, -5.003]}
        rotation={[0.073, 0.208, 0.007]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.915, 0.968, -5.004]}
        rotation={[0.067, 0.166, -0.051]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.683, 0.956, -4.893]}
        rotation={[0.096, 1.171, -0.071]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.281, 0.961, -5.241]}
        rotation={[-0.054, -1.137, -0.001]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.299, 0.959, -5.25]}
        rotation={[3.031, 1.037, 3.117]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.297, 0.974, -5.2]}
        rotation={[-0.052, -0.699, -0.011]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.249, 0.964, -5.133]}
        rotation={[3.003, 0.471, 3.113]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-2.073, 0.972, -5.179]}
        rotation={[-0.182, 1.508, 0.093]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.121, 0.962, -5.257]}
        rotation={[-0.127, -0.061, -0.049]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.111, 0.965, -5.114]}
        rotation={[-0.068, -0.001, -0.007]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.158, 0.973, -5.153]}
        rotation={[-0.077, 0.566, 0.017]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.251, 0.96, -5.249]}
        rotation={[2.966, -1.01, 3.114]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.216, 0.986, -5.136]}
        rotation={[3.003, 1.059, 3.129]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.055, 0.963, -5.225]}
        rotation={[3.064, 0.12, 3.114]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.137, 0.969, -5.201]}
        rotation={[3.06, -0.194, 3.098]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.17, 0.255, -6.622]}
        rotation={[-3.111, 1.416, 3.093]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.029, 0.271, -6.54]}
        rotation={[2.95, -1.328, 2.986]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.112, 0.266, -6.56]}
        rotation={[-0.05, 0.395, 0.079]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.157, 0.264, -6.437]}
        rotation={[-0.003, 0.533, 0.031]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.173, 0.251, -6.516]}
        rotation={[0.022, -1.147, -0.013]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.119, 0.262, -6.392]}
        rotation={[-0.016, -0.7, -0.013]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.246, 0.247, -6.582]}
        rotation={[3.045, -1.073, 3.11]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.048, 0.267, -6.519]}
        rotation={[-0.056, 0.686, 0.013]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.281, 0.246, -6.622]}
        rotation={[-0.025, -0.838, 0.051]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.058, 0.261, -6.438]}
        rotation={[3.11, -0.186, 3.107]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.123, 0.26, -6.717]}
        rotation={[0.025, -0.277, -0.014]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.351, 0.252, -6.472]}
        rotation={[-3.079, -1.312, -3.093]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.158, 0.345, -6.765]}
        rotation={[-0.518, -1.339, -0.458]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.286, 0.353, -6.636]}
        rotation={[0.003, 0.454, -0.125]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.168, 0.343, -6.7]}
        rotation={[0.407, 1.377, -0.446]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.196, 0.34, -6.917]}
        rotation={[0.003, 0.437, -0.046]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.348, 0.357, -6.643]}
        rotation={[-0.092, -0.411, -0.035]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.357, 0.348, -6.779]}
        rotation={[-0.161, -0.657, -0.164]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.191, 0.351, -6.736]}
        rotation={[-2.71, -1.457, -2.633]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.398, 0.342, -6.827]}
        rotation={[3.112, -0.329, -3.071]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.303, 0.34, -6.84]}
        rotation={[3, 0.811, -3.065]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.24, 0.342, -6.921]}
        rotation={[-0.044, -0.067, -0.127]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.289, 0.355, -6.721]}
        rotation={[-2.844, -1.27, -2.736]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.254, 0.355, -6.701]}
        rotation={[0.174, 1.221, -0.252]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[1.098, 1.589, -3.921]}
        rotation={[3.082, 1.091, 3.135]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.157, 1.587, -3.957]}
        rotation={[3.082, 0.496, -3.122]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.325, 1.594, -3.908]}
        rotation={[-0.067, -0.247, 0.037]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.29, 1.61, -3.71]}
        rotation={[-0.137, 1.238, 0.085]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.155, 1.601, -3.928]}
        rotation={[3.066, 0.801, -3.103]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.13, 1.57, -4.052]}
        rotation={[3.139, -1.301, -3.02]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.103, 1.597, -3.799]}
        rotation={[3.07, 0.001, 3.138]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.177, 1.588, -3.851]}
        rotation={[3.045, 0.029, -3.107]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.114, 1.589, -3.884]}
        rotation={[-0.038, 1.023, -0.057]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.306, 1.595, -3.816]}
        rotation={[0.03, 1.323, -0.105]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.293, 1.61, -3.802]}
        rotation={[3.033, -0.844, 3.073]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.292, 1.59, -3.74]}
        rotation={[3.076, 0.323, -3.124]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.303, 1.497, -4.446]}
        rotation={[-0.139, -0.116, -0.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.267, 1.478, -4.492]}
        rotation={[3.037, 0.776, 3.117]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.353, 1.473, -4.514]}
        rotation={[2.918, 1.156, -3.081]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.265, 1.503, -4.467]}
        rotation={[-0.288, -1.322, -0.134]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.209, 1.497, -4.394]}
        rotation={[0.206, 1.401, -0.305]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.315, 1.492, -4.453]}
        rotation={[0.316, 1.459, -0.456]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[1.299, 1.476, -4.588]}
        rotation={[0.066, 1.314, -0.188]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[1.234, 1.501, -4.489]}
        rotation={[-0.211, -1.024, -0.158]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.209, 1.488, -4.462]}
        rotation={[-3.008, -1.326, -2.898]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[1.174, 1.506, -4.424]}
        rotation={[-0.162, -0.625, -0.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[1.269, 1.486, -4.566]}
        rotation={[3.036, -0.129, -3.079]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.178, 1.499, -4.484]}
        rotation={[-0.102, -1.163, -0.059]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.515, 1.376, -4.912]}
        rotation={[1.494, -1.512, 1.64]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.712, 1.406, -4.69]}
        rotation={[2.999, -0.063, 3.102]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.591, 1.408, -4.608]}
        rotation={[-0.348, 1.368, 0.238]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.534, 1.4, -4.7]}
        rotation={[3.033, 0.232, 3.065]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.872, 1.413, -4.752]}
        rotation={[3.061, 0.926, 3.041]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.764, 1.386, -4.887]}
        rotation={[2.947, -0.202, 3.067]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.591, 1.388, -4.764]}
        rotation={[-0.184, 0.505, 0.065]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.73, 1.392, -4.93]}
        rotation={[-0.139, -0.262, 0.112]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.848, 1.399, -4.838]}
        rotation={[-0.012, -0.97, 0.162]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.69, 1.387, -4.828]}
        rotation={[-0.163, 0.344, 0.05]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.625, 1.377, -4.912]}
        rotation={[-0.166, 0.423, 0.082]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.703, 1.391, -4.807]}
        rotation={[2.882, -1.017, 3.034]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.105, 1.261, -5.308]}
        rotation={[-0.157, 0.917, 0.309]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.497, 1.308, -5.387]}
        rotation={[-3.066, 0.181, 3.055]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.522, 1.333, -5.316]}
        rotation={[-0.027, 0.931, 0.137]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.501, 1.302, -5.21]}
        rotation={[0.331, -1.134, 0.245]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.087, 1.279, -5.31]}
        rotation={[-2.728, 1.188, 2.795]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.085, 1.267, -5.201]}
        rotation={[-2.965, 0.449, 3]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.519, 1.314, -5.256]}
        rotation={[-3.138, -0.737, 2.986]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.166, 1.294, -5.311]}
        rotation={[0.092, -0.017, 0.122]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.433, 1.317, -5.308]}
        rotation={[-2.887, 0.918, 2.964]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.227, 1.303, -5.49]}
        rotation={[2.95, -1.138, 2.784]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.278, 1.281, -5.201]}
        rotation={[-0.22, 1.271, 0.342]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.277, 1.27, -5.124]}
        rotation={[-3.133, -0.5, 2.949]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.701, 1.316, -5.182]}
        rotation={[-2.979, -0.829, -3.037]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[0.73, 1.328, -5.229]}
        rotation={[0.078, 0.969, -0.011]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.602, 1.338, -5.328]}
        rotation={[-3.076, 0.857, -3.074]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.563, 1.331, -5.266]}
        rotation={[0.173, 0.726, -0.058]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.692, 1.328, -5.322]}
        rotation={[0.074, 0.069, 0.029]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.74, 1.334, -5.389]}
        rotation={[-3.025, 1.178, 3.096]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.689, 1.318, -5.184]}
        rotation={[-0.007, -0.926, -0.083]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.701, 1.317, -5.155]}
        rotation={[-3.072, -0.059, -3.072]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.835, 1.323, -5.33]}
        rotation={[2.34, 1.492, -2.302]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.694, 1.324, -5.17]}
        rotation={[-0.226, -1.362, -0.365]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.775, 1.318, -5.168]}
        rotation={[2.895, 1.481, -2.85]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.646, 1.35, -5.367]}
        rotation={[-3.03, -0.085, -3.094]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.623, 0.495, -7.422]}
        rotation={[-2.397, -1.482, -2.623]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.749, 0.475, -7.312]}
        rotation={[0.225, 0.731, -0.086]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.588, 0.482, -7.315]}
        rotation={[-2.92, -0.085, -3.123]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.643, 0.473, -7.299]}
        rotation={[-3.107, 1.038, -3.006]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.679, 0.466, -7.241]}
        rotation={[-2.86, -1.395, -3.063]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.665, 0.479, -7.329]}
        rotation={[-2.972, 0.94, -3.107]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.685, 0.466, -7.23]}
        rotation={[-2.399, -1.47, -2.541]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.752, 0.498, -7.46]}
        rotation={[-0.182, -1.42, -0.355]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.74, 0.463, -7.197]}
        rotation={[0.195, 0.063, -0.049]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.624, 0.501, -7.407]}
        rotation={[-2.991, 0.496, -3.082]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.682, 0.456, -7.244]}
        rotation={[3.129, 1.36, -2.894]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.774, 0.51, -7.459]}
        rotation={[-2.97, 0.131, -3.049]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.533, 1.612, -3.389]}
        rotation={[-3.139, 1.072, -3.013]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.601, 1.61, -3.452]}
        rotation={[-2.022, -1.499, -2.133]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.405, 1.631, -3.477]}
        rotation={[0.098, -0.473, -0.135]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.298, 1.627, -3.447]}
        rotation={[-0.126, -1.269, -0.295]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.443, 1.636, -3.505]}
        rotation={[0.165, 0.485, -0.054]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.463, 1.635, -3.576]}
        rotation={[-2.839, -1.002, -2.934]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.623, 1.589, -3.244]}
        rotation={[3.052, 1.331, -2.899]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[0.543, 1.619, -3.494]}
        rotation={[0.228, 1.082, -0.106]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.279, 1.624, -3.308]}
        rotation={[0.136, -0.607, -0.135]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.431, 1.58, -3.257]}
        rotation={[0.129, -0.959, -0.022]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.51, 1.619, -3.396]}
        rotation={[0.038, -0.849, -0.162]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.305, 1.606, -3.293]}
        rotation={[-2.971, -0.361, -3.063]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.571, 1.531, -3.553]}
        rotation={[-2.99, 0.79, -3.096]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.631, 1.561, -3.624]}
        rotation={[-3.082, 1.045, -3.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.656, 1.563, -3.656]}
        rotation={[-2.817, -1.263, -2.971]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.428, 1.55, -3.623]}
        rotation={[0.103, -1.24, -0.003]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.589, 1.554, -3.756]}
        rotation={[-3.039, -1.04, -3.096]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[0.636, 1.549, -3.649]}
        rotation={[0.071, -0.638, -0.007]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.545, 1.548, -3.638]}
        rotation={[-2.98, -0.655, -3.123]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[0.619, 1.552, -3.545]}
        rotation={[0.1, 1.351, 0.065]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.595, 1.538, -3.515]}
        rotation={[-2.999, 0.356, 3.126]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.621, 1.559, -3.689]}
        rotation={[0.142, 0.016, -0.059]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[0.66, 1.563, -3.639]}
        rotation={[0.104, -1.016, -0.043]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.446, 1.574, -3.714]}
        rotation={[0.169, 0.323, 0.015]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.681, 1.407, -1.737]}
        rotation={[-0.083, -0.273, -0.065]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.783, 1.411, -1.998]}
        rotation={[3.03, 0.742, -3.021]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.84, 1.413, -1.913]}
        rotation={[3.069, 0.843, -3.065]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.77, 1.402, -1.87]}
        rotation={[-0.057, 0.45, -0.063]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.675, 1.414, -1.923]}
        rotation={[-0.017, 0.121, -0.038]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.96, 1.42, -1.908]}
        rotation={[3.073, 0.795, -3.112]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.624, 1.411, -1.816]}
        rotation={[-0.034, -0.455, -0.026]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.66, 1.422, -1.958]}
        rotation={[3.088, 0.585, -3.138]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.807, 1.394, -2.003]}
        rotation={[-0.012, 0.045, -0.075]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.771, 1.41, -2.078]}
        rotation={[3.004, 0.914, -3.011]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.603, 1.411, -1.847]}
        rotation={[3.123, -1.11, -3.071]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.532, 1.403, -2.07]}
        rotation={[3.054, 0.295, -3.092]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.528, 1.407, -1.098]}
        rotation={[-0.47, -1.408, -0.405]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.438, 1.401, -1.158]}
        rotation={[2.714, 1.301, -2.766]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.553, 1.412, -1.291]}
        rotation={[-2.188, -1.449, -2.154]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.649, 1.419, -1.169]}
        rotation={[3.006, 0.897, -2.995]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.558, 1.408, -1.266]}
        rotation={[-3.1, -0.339, -3.033]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.424, 1.408, -1.126]}
        rotation={[-0.142, -1.104, -0.18]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.531, 1.405, -1.201]}
        rotation={[-3.007, -1.033, -2.902]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.463, 1.399, -1.083]}
        rotation={[-0.051, -0.215, -0.141]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.57, 1.415, -1.149]}
        rotation={[-0.039, -0.186, -0.092]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.613, 1.412, -1.187]}
        rotation={[0.234, 1.139, -0.253]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-3.713, 1.433, -1.158]}
        rotation={[0.17, 1.052, -0.264]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.502, 1.413, -1.196]}
        rotation={[-0.029, -0.454, -0.059]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.559, 1.453, 0.606]}
        rotation={[-2.965, -0.684, -2.955]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.504, 1.445, 0.515]}
        rotation={[0.144, 0.642, -0.236]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.394, 1.427, 0.471]}
        rotation={[0.076, 0.103, -0.121]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.372, 1.419, 0.64]}
        rotation={[3.126, 0.095, -2.958]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.457, 1.43, 0.717]}
        rotation={[3.021, 0.776, -2.944]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.704, 1.458, 0.645]}
        rotation={[-0.009, -0.333, -0.189]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.53, 1.434, 0.495]}
        rotation={[-0.465, -1.336, -0.507]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.648, 1.479, 0.48]}
        rotation={[-0.872, -1.349, -0.953]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.493, 1.44, 0.357]}
        rotation={[-2.445, -1.363, -2.501]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.406, 1.418, 0.382]}
        rotation={[3.077, 0.362, -3.028]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.441, 1.416, 0.63]}
        rotation={[2.372, 1.38, -2.366]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.349, 1.414, 0.492]}
        rotation={[0.028, -0.06, -0.171]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.472, 0.976, 0.006]}
        rotation={[0.157, 1.002, -0.263]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.34, 0.969, 0.017]}
        rotation={[0.3, 1.206, -0.358]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.409, 0.981, 0.233]}
        rotation={[3.076, 0.531, -3.042]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.52, 0.996, 0.072]}
        rotation={[-1.12, -1.494, -1.123]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.362, 0.984, -0.048]}
        rotation={[3.124, -0.251, -3.03]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.416, 0.993, 0.243]}
        rotation={[-0.092, -0.501, -0.101]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-7.619, 1.006, 0.047]}
        rotation={[-3.09, -0.949, -2.954]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.322, 0.988, 0.136]}
        rotation={[3.125, 0.114, -3.086]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.507, 0.998, 0.203]}
        rotation={[-0.499, -1.285, -0.444]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.477, 0.991, -0.063]}
        rotation={[-2.851, -1.302, -2.82]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-7.337, 0.992, 0.118]}
        rotation={[2.67, 1.301, -2.755]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-7.475, 0.982, 0.1]}
        rotation={[-0.001, 0.356, -0.049]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.502, 1.405, -0.414]}
        rotation={[-3.015, 0.326, 2.961]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.433, 1.403, -0.293]}
        rotation={[-3.033, 0.092, 2.982]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.541, 1.391, -0.348]}
        rotation={[0.207, -0.484, 0.125]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.446, 1.413, -0.338]}
        rotation={[0.403, -1.112, 0.283]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.514, 1.415, -0.406]}
        rotation={[0.155, -0.179, 0.087]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.467, 1.41, -0.346]}
        rotation={[3.041, -1.098, 2.946]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.568, 1.396, -0.354]}
        rotation={[-3.117, -0.74, 2.939]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.465, 1.414, -0.445]}
        rotation={[2.329, -1.367, 2.242]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.281, 1.431, -0.376]}
        rotation={[-0.004, 0.849, 0.149]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.353, 1.411, -0.216]}
        rotation={[-0.376, 1.236, 0.486]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.26, 1.433, -0.406]}
        rotation={[-0.029, 0.917, 0.206]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.35, 1.416, -0.341]}
        rotation={[-3.059, -0.085, 3.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.033, 1.419, 0.999]}
        rotation={[-0.044, -0.034, 0.064]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.029, 1.396, 1.042]}
        rotation={[3.099, 0.334, 2.986]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.734, 1.427, 1.203]}
        rotation={[0.167, -1.119, 0.214]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.975, 1.406, 1.029]}
        rotation={[3.049, -0.488, 3.071]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.843, 1.411, 0.936]}
        rotation={[3.043, -0.347, 3.06]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.751, 1.425, 1.027]}
        rotation={[-3.124, 0.625, 2.968]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.797, 1.441, 1.25]}
        rotation={[3.103, 0.185, 3.064]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.747, 1.431, 1.145]}
        rotation={[-0.048, 0.29, 0.042]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.779, 1.419, 1.16]}
        rotation={[-3.119, 0.418, 3.065]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.883, 1.413, 1.205]}
        rotation={[-0.647, 1.33, 0.563]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.784, 1.42, 1.071]}
        rotation={[0.098, -1.117, 0.231]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.689, 1.427, 0.988]}
        rotation={[2.675, -1.313, 2.716]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.808, 1.24, 1.597]}
        rotation={[3.048, 0.282, -3.066]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.783, 1.257, 1.7]}
        rotation={[-0.374, -1.268, -0.286]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.729, 1.252, 1.75]}
        rotation={[0.145, 1.085, -0.231]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.739, 1.246, 1.803]}
        rotation={[-0.102, -0.548, -0.111]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.752, 1.244, 1.583]}
        rotation={[2.955, 1.028, -3.059]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.851, 1.259, 1.679]}
        rotation={[0.446, 1.362, -0.535]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.618, 1.244, 1.677]}
        rotation={[-0.074, 0.605, -0.138]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.804, 1.261, 1.671]}
        rotation={[-0.046, 0.828, -0.112]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.799, 1.261, 1.645]}
        rotation={[3.128, -0.737, -3.022]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.638, 1.23, 1.537]}
        rotation={[1.896, 1.433, -1.984]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.795, 1.27, 1.766]}
        rotation={[-0.2, -0.856, -0.096]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.729, 1.25, 1.702]}
        rotation={[-0.354, -1.204, -0.261]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.043, 0.801, 1.952]}
        rotation={[-2.622, -1.525, -2.778]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.018, 0.826, 1.821]}
        rotation={[-2.92, -0.651, -3.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.877, 0.804, 1.927]}
        rotation={[-2.981, -0.203, 3.116]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.78, 0.807, 1.906]}
        rotation={[-2.289, -1.522, -2.518]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.967, 0.811, 1.862]}
        rotation={[-2.948, -0.134, -3.088]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.022, 0.811, 1.917]}
        rotation={[0.225, -0.085, -0.021]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.807, 0.824, 1.812]}
        rotation={[0.177, 0.612, 0.001]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.932, 0.797, 1.917]}
        rotation={[-2.944, 0.268, -3.087]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.869, 0.861, 1.644]}
        rotation={[0.155, -1.006, -0.049]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.877, 0.833, 1.766]}
        rotation={[-2.885, -1.084, -3.044]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.79, 0.832, 1.8]}
        rotation={[0.158, 0.748, -0.016]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.786, 0.839, 1.683]}
        rotation={[-2.748, -1.343, -2.9]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.969, 0.827, 1.124]}
        rotation={[-0.15, 0.719, -0.031]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-8.077, 0.882, 1.383]}
        rotation={[3.013, 0.25, -3.075]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-7.74, 0.846, 1.36]}
        rotation={[-0.193, -0.588, -0.008]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-8.077, 0.851, 1.317]}
        rotation={[3.06, -1.226, -3.077]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.873, 0.84, 1.307]}
        rotation={[-0.193, -0.155, -0.028]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.955, 0.825, 1.206]}
        rotation={[3.013, 0.62, -3.075]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.937, 0.868, 1.319]}
        rotation={[-0.001, 1.303, -0.177]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-8.006, 0.834, 1.204]}
        rotation={[-0.664, -1.527, -0.502]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-8.087, 0.889, 1.38]}
        rotation={[-0.207, -0.395, -0.113]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.935, 0.821, 1.18]}
        rotation={[-0.064, 1.412, -0.088]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.914, 0.889, 1.545]}
        rotation={[3.064, -0.705, -3.072]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-7.732, 0.853, 1.345]}
        rotation={[3.016, -0.479, -3.125]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-8.133, 0.771, 1.334]}
        rotation={[-3.058, 0.822, 2.928]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-8.013, 0.789, 1.131]}
        rotation={[0.001, -0.156, 0.138]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-8.004, 0.783, 1.156]}
        rotation={[3.091, 0.03, 2.987]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-8.152, 0.774, 1.316]}
        rotation={[3.114, 0.035, 2.979]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-8.156, 0.767, 1.302]}
        rotation={[-0.756, 1.374, 0.73]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.061, 0.774, 1.199]}
        rotation={[0.014, -0.446, 0.134]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-8.151, 0.771, 1.192]}
        rotation={[-2.795, 1.211, 2.719]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-8.09, 0.768, 1.153]}
        rotation={[-3.112, 0.161, 2.996]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.103, 0.766, 1.407]}
        rotation={[-0.153, 0.871, 0.169]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.131, 0.762, 1.167]}
        rotation={[-0.029, -0.014, 0.185]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.078, 0.766, 1.294]}
        rotation={[3.082, -0.029, 3.029]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.28, 0.742, 1.251]}
        rotation={[-3.133, 0.27, 2.982]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.748, 1.333, 2.239]}
        rotation={[-0.154, -0.231, -0.173]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.674, 1.309, 2.14]}
        rotation={[-0.153, 0.063, -0.136]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.816, 1.335, 2.188]}
        rotation={[-0.359, -1.023, -0.253]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.642, 1.315, 2.185]}
        rotation={[-0.066, 0.442, -0.165]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.64, 1.33, 2.371]}
        rotation={[-0.211, -0.585, -0.14]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.747, 1.326, 2.146]}
        rotation={[-0.158, -0.458, -0.155]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.84, 1.361, 2.266]}
        rotation={[1.725, 1.451, -1.909]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.75, 1.331, 2.22]}
        rotation={[2.93, 0.529, -3.026]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.727, 1.341, 2.333]}
        rotation={[-0.144, -0.101, -0.093]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-5.623, 1.313, 2.284]}
        rotation={[2.564, 1.279, -2.644]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.637, 1.301, 2.115]}
        rotation={[2.853, 0.764, -2.887]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.672, 1.312, 2.054]}
        rotation={[-0.258, -0.901, -0.219]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.387, 1.318, 2.56]}
        rotation={[0.107, 1.007, -0.177]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.334, 1.318, 2.551]}
        rotation={[3.011, 0.749, -3.021]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.476, 1.338, 2.74]}
        rotation={[1.143, 1.536, -1.187]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.504, 1.326, 2.601]}
        rotation={[-0.054, -0.253, -0.044]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.498, 1.33, 2.614]}
        rotation={[-0.586, -1.397, -0.536]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.558, 1.314, 2.367]}
        rotation={[-0.144, -0.585, -0.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.495, 1.322, 2.486]}
        rotation={[-0.163, -0.819, -0.124]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.467, 1.325, 2.688]}
        rotation={[3.101, -0.129, -3.012]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.682, 1.357, 2.704]}
        rotation={[2.75, 1.367, -2.861]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.501, 1.338, 2.64]}
        rotation={[-0.122, -0.396, -0.044]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.568, 1.338, 2.633]}
        rotation={[-0.079, 0.051, -0.091]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.358, 1.325, 2.652]}
        rotation={[3.073, -0.136, -3.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.196, 1.239, 2.949]}
        rotation={[2.936, 1.076, -2.874]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.254, 1.273, 2.662]}
        rotation={[-3.034, -0.54, -3.065]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.199, 1.257, 2.642]}
        rotation={[-3.055, -0.317, -3.051]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.133, 1.242, 2.734]}
        rotation={[0.836, 1.458, -0.825]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.388, 1.273, 2.899]}
        rotation={[1.264, 1.448, -1.262]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.169, 1.24, 2.881]}
        rotation={[0.347, 1.215, -0.353]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.245, 1.248, 2.826]}
        rotation={[0.109, 0.568, -0.116]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.289, 1.25, 3.016]}
        rotation={[-3.059, -0.352, -3.079]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.31, 1.258, 2.754]}
        rotation={[-0.177, -0.903, -0.19]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.269, 1.257, 2.828]}
        rotation={[0.516, 1.326, -0.5]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.253, 1.264, 2.696]}
        rotation={[3.101, 0.435, -3.047]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.346, 1.264, 2.721]}
        rotation={[0.034, 0.215, -0.124]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.009, 1.039, 3.001]}
        rotation={[3.122, -0.575, 3.09]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.837, 1.047, 2.867]}
        rotation={[0.062, -0.764, 0.092]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.885, 1.055, 2.92]}
        rotation={[1.025, -1.446, 0.999]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.205, 1.021, 2.929]}
        rotation={[0.023, -0.456, 0.045]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.97, 1.061, 2.772]}
        rotation={[-3.134, -0.434, 3.034]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.975, 1.043, 3.037]}
        rotation={[-0.024, 0.345, 0.108]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.961, 1.047, 2.934]}
        rotation={[-0.042, 0.314, 0.062]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.98, 1.043, 3.121]}
        rotation={[-3.063, 0.472, 2.99]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.017, 1.031, 2.767]}
        rotation={[0.082, -1.247, 0.056]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.974, 1.037, 2.801]}
        rotation={[3.019, -0.783, 3.033]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.855, 1.065, 2.978]}
        rotation={[-0.009, 0.498, 0.109]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.026, 1.059, 2.713]}
        rotation={[3.116, -0.847, 3.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.064, 1.112, 2.449]}
        rotation={[-3.059, 0.873, 2.971]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.335, 1.081, 2.363]}
        rotation={[-0.017, 0.263, 0.102]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.184, 1.103, 2.154]}
        rotation={[0.208, -1.276, 0.199]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.06, 1.112, 2.334]}
        rotation={[-0.279, 1.226, 0.304]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-7.052, 1.105, 2.351]}
        rotation={[1.113, -1.425, 1.085]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.041, 1.096, 2.195]}
        rotation={[3.116, -0.075, 3.085]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-7.171, 1.103, 2.533]}
        rotation={[0.024, -0.629, 0.146]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.323, 1.077, 2.336]}
        rotation={[-3.106, 0.275, 2.991]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.326, 1.073, 2.481]}
        rotation={[-3.105, 0.52, 3.003]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.237, 1.091, 2.362]}
        rotation={[-0.036, 0.325, 0.064]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.106, 1.101, 2.286]}
        rotation={[0.105, -0.979, 0.119]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.195, 1.083, 2.206]}
        rotation={[3.021, -0.721, 3.034]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.619, 0.879, 2.343]}
        rotation={[-0.088, -0.158, 0.003]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.94, 0.856, 2.317]}
        rotation={[3.015, -1.008, -3.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.766, 0.859, 2.164]}
        rotation={[-0.034, 1.202, -0.061]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.729, 0.888, 2.415]}
        rotation={[3, 0.234, -3.095]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.854, 0.854, 2.198]}
        rotation={[-0.118, -0.163, -0.075]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.891, 0.879, 2.323]}
        rotation={[-0.182, -0.857, -0.045]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.948, 0.879, 2.335]}
        rotation={[3.052, -0.893, -3.039]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.825, 0.887, 2.315]}
        rotation={[3.03, 0.956, -3.077]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.847, 0.873, 2.392]}
        rotation={[2.801, 1.343, -2.901]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.8, 0.885, 2.457]}
        rotation={[-0.122, 0.67, -0.084]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.826, 0.861, 2.287]}
        rotation={[-0.11, -0.626, -0.05]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.772, 0.865, 2.381]}
        rotation={[-0.098, -0.365, -0.073]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.516, 1.308, 1.41]}
        rotation={[-2.806, 1.084, 2.764]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.467, 1.305, 1.434]}
        rotation={[-0.943, 1.402, 1.022]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.586, 1.307, 1.297]}
        rotation={[3.079, -0.684, 3.034]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.565, 1.312, 1.206]}
        rotation={[0.115, -0.858, 0.15]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.554, 1.309, 1.597]}
        rotation={[-0.226, 1, 0.262]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.62, 1.278, 1.522]}
        rotation={[-1.308, 1.458, 1.375]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.575, 1.309, 1.287]}
        rotation={[-3.072, 0.141, 3.011]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.502, 1.324, 1.356]}
        rotation={[3.064, -0.729, 2.931]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.729, 1.284, 1.288]}
        rotation={[0.065, -0.557, 0.095]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.638, 1.291, 1.366]}
        rotation={[0.001, 0.509, 0.113]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-6.618, 1.287, 1.491]}
        rotation={[0.476, -1.346, 0.433]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.711, 1.273, 1.304]}
        rotation={[-2.744, 1.123, 2.721]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.977, 1.209, 1.339]}
        rotation={[3.06, 1.408, -2.991]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.012, 1.203, 1.391]}
        rotation={[0.014, -0.211, -0.059]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.995, 1.219, 1.255]}
        rotation={[-3.129, 0.106, -3.124]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.911, 1.215, 1.411]}
        rotation={[-3.132, -1.297, 3.083]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.875, 1.209, 1.175]}
        rotation={[-1.823, -1.537, -1.811]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.805, 1.196, 1.358]}
        rotation={[-0.399, -1.452, -0.443]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.088, 1.211, 1.412]}
        rotation={[-3.14, 0.254, -3.131]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.711, 1.22, 1.266]}
        rotation={[3.134, 0.736, 3.13]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.891, 1.213, 1.288]}
        rotation={[-0.01, 0.081, 0.021]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.835, 1.203, 1.288]}
        rotation={[3.134, 0.113, 3.125]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.969, 1.221, 1.273]}
        rotation={[-3.097, 0.564, -3.109]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.166, 1.2, 1.321]}
        rotation={[3.116, -0.989, 3.111]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.023, 1.146, 1.299]}
        rotation={[-0.326, 1.329, 0.285]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.25, 1.135, 1.393]}
        rotation={[-0.087, 1.146, 0.018]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.121, 1.151, 1.484]}
        rotation={[-0.088, -0.711, 0.006]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.121, 1.143, 1.407]}
        rotation={[-0.079, -0.902, -0.008]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.082, 1.124, 1.218]}
        rotation={[0.004, -1.298, 0.111]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.011, 1.135, 1.289]}
        rotation={[-2.753, 1.436, 2.658]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.078, 1.157, 1.454]}
        rotation={[-0.111, 0.573, 0.022]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.072, 1.125, 1.287]}
        rotation={[3.053, -1.03, 3.131]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.105, 1.125, 1.297]}
        rotation={[-3.104, 1.106, 2.976]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.064, 1.142, 1.349]}
        rotation={[-0.083, 0.354, 0.058]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-7.139, 1.154, 1.489]}
        rotation={[-0.097, -0.246, 0.011]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.205, 1.135, 1.469]}
        rotation={[-0.11, 0.145, 0.077]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.942, 1.174, 1.548]}
        rotation={[-3.036, 0.888, 3.121]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.978, 1.165, 1.645]}
        rotation={[0.062, 1.103, 0.047]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.914, 1.17, 1.583]}
        rotation={[0.113, 0.033, 0.017]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.973, 1.152, 1.636]}
        rotation={[-2.981, -0.656, -3.098]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-7.08, 1.172, 1.504]}
        rotation={[0.201, -0.928, 0.099]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.05, 1.16, 1.607]}
        rotation={[0.113, 0.751, 0.009]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.961, 1.169, 1.615]}
        rotation={[2.88, -1.497, 2.729]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.983, 1.176, 1.533]}
        rotation={[-2.994, 1.044, 3.127]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.142, 1.145, 1.717]}
        rotation={[3, 1.483, -2.84]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-7.003, 1.172, 1.538]}
        rotation={[0.288, -1.194, 0.149]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.966, 1.151, 1.708]}
        rotation={[-3.029, 0.203, -3.117]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.917, 1.166, 1.658]}
        rotation={[0.24, -1.102, 0.069]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.916, 1.335, -0.129]}
        rotation={[-0.048, 0.216, -0.038]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.861, 1.347, -0.127]}
        rotation={[-0.08, -0.189, -0.003]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.106, 1.363, -0.135]}
        rotation={[-2.795, -1.381, -2.776]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.009, 1.351, -0.129]}
        rotation={[0.005, 0.112, -0.015]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.095, 1.348, -0.16]}
        rotation={[3.114, 0.192, -3.138]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.065, 1.356, -0.117]}
        rotation={[3.132, 0.565, -3.138]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.052, 1.349, -0.019]}
        rotation={[3.12, -0.362, -3.067]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.942, 1.337, -0.139]}
        rotation={[-0.06, -0.422, -0.069]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.04, 1.345, -0.097]}
        rotation={[-0.037, 0.127, -0.039]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.962, 1.341, -0.184]}
        rotation={[-0.064, -0.153, -0.059]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.118, 1.357, -0.084]}
        rotation={[-0.239, -1.279, -0.204]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.885, 1.351, -0.195]}
        rotation={[-0.042, 0.449, -0.001]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.341, 1.303, -0.068]}
        rotation={[-3.014, -0.677, 3.086]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.277, 1.305, -0.033]}
        rotation={[-3.03, 1.266, 3.128]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.305, 1.323, -0.192]}
        rotation={[0.237, 1.321, -0.111]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.428, 1.305, -0.073]}
        rotation={[-2.903, 1.168, 3.036]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.261, 1.308, -0.128]}
        rotation={[0.053, 1.062, 0.113]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.188, 1.304, -0.117]}
        rotation={[-2.922, -1.39, -3.101]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.369, 1.297, -0.041]}
        rotation={[-2.99, -0.483, 3.13]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.423, 1.313, -0.148]}
        rotation={[-3.002, -1.318, -3.081]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.22, 1.296, 0.031]}
        rotation={[0.086, 0.095, -0.023]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.279, 1.291, -0.009]}
        rotation={[0.143, 0.06, 0.022]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.415, 1.28, 0.018]}
        rotation={[-2.994, -0.495, 3.123]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.297, 1.297, 0.004]}
        rotation={[-2.887, 1.326, 2.989]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-7.368, 1.016, 0.051]}
        rotation={[-2.773, 1.295, 2.79]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.21, 1.023, 0.07]}
        rotation={[-0.011, -0.721, 0.083]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.485, 1.019, 0.238]}
        rotation={[3.072, -0.281, 3.005]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.353, 1.017, 0.159]}
        rotation={[-3.081, 0.592, 3]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.283, 1.03, 0.116]}
        rotation={[-3.008, 1.014, 2.958]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.449, 1.028, 0.186]}
        rotation={[-0.311, 1.175, 0.258]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.354, 1.009, 0.01]}
        rotation={[-0.006, -0.39, 0.12]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-7.376, 1.01, 0.037]}
        rotation={[-0.217, 0.958, 0.148]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-7.423, 1.022, 0.247]}
        rotation={[-0.169, 0.774, 0.193]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.522, 0.996, 0.047]}
        rotation={[-0.084, 0.121, 0.041]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-7.257, 1.033, 0.097]}
        rotation={[2.663, -1.393, 2.662]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.273, 1.019, 0.143]}
        rotation={[2.936, -1.116, 2.996]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.374, 1.378, 0.27]}
        rotation={[3.036, 1.109, -2.956]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.146, 1.36, 0.424]}
        rotation={[-3.123, 0.219, -3.063]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.295, 1.378, 0.344]}
        rotation={[0.119, 1.112, -0.075]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.259, 1.379, 0.297]}
        rotation={[-3.037, -0.566, -3.042]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.229, 1.361, 0.47]}
        rotation={[-0.029, -0.386, -0.07]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.265, 1.364, 0.37]}
        rotation={[0.009, 0.496, -0.099]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.287, 1.379, 0.274]}
        rotation={[-3.09, -0.219, -3.042]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.243, 1.36, 0.45]}
        rotation={[2.692, 1.473, -2.646]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-6.21, 1.374, 0.31]}
        rotation={[3.117, -0.036, -3.069]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.334, 1.363, 0.395]}
        rotation={[-2.922, -1.145, -2.972]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.371, 1.37, 0.36]}
        rotation={[0.166, 1.154, -0.147]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.23, 1.36, 0.47]}
        rotation={[-3.124, 0.249, -3.058]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.616, 1.078, 0.383]}
        rotation={[-3.009, -0.889, -3.044]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.367, 1.061, 0.398]}
        rotation={[0.147, 0.625, -0.098]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.516, 1.042, 0.588]}
        rotation={[-3.074, -0.39, -3.087]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.505, 1.082, 0.224]}
        rotation={[0.728, 1.398, -0.699]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.346, 1.042, 0.556]}
        rotation={[-3.119, -0.119, -3.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.366, 1.062, 0.313]}
        rotation={[-2.913, -0.851, -2.994]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.348, 1.04, 0.474]}
        rotation={[3.066, 0.738, -2.975]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.278, 1.021, 0.618]}
        rotation={[3.136, 0.182, -3.011]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.507, 1.049, 0.647]}
        rotation={[0.118, 0.367, -0.18]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.55, 1.071, 0.564]}
        rotation={[0.204, 0.899, -0.202]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.586, 1.065, 0.508]}
        rotation={[-3.101, -0.02, -3.05]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.532, 1.078, 0.367]}
        rotation={[-2.641, -1.305, -2.683]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.983, 1.304, -1.504]}
        rotation={[-0.125, -0.507, 0.038]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.937, 1.339, -1.238]}
        rotation={[-1.646, -1.553, -1.542]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.994, 1.332, -1.32]}
        rotation={[-0.151, 0.631, 0.069]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.828, 1.298, -1.533]}
        rotation={[2.99, -0.076, -3.134]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.787, 1.308, -1.473]}
        rotation={[-2.834, 1.496, 2.681]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.036, 1.338, -1.269]}
        rotation={[3.05, 0.867, 3.085]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.041, 1.322, -1.427]}
        rotation={[3.016, 0.26, -3.128]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.933, 1.339, -1.295]}
        rotation={[2.999, 0.661, 3.098]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.009, 1.326, -1.419]}
        rotation={[-0.124, 0.145, 0.009]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.98, 1.314, -1.483]}
        rotation={[2.972, -0.376, -3.129]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.065, 1.312, -1.428]}
        rotation={[-0.129, 1.235, -0.044]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-5.074, 1.316, -1.493]}
        rotation={[-0.08, -0.73, 0.043]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.365, 1.269, -1.285]}
        rotation={[-0.052, 0.97, 0.091]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.35, 1.27, -1.482]}
        rotation={[0.105, -1, 0.05]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.197, 1.282, -1.464]}
        rotation={[0.098, -0.047, 0.016]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.365, 1.28, -1.453]}
        rotation={[0.104, -0.668, 0.009]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.314, 1.263, -1.308]}
        rotation={[0.099, 0.475, 0.062]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-5.37, 1.265, -1.377]}
        rotation={[0.09, -0.66, -0.009]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.222, 1.267, -1.279]}
        rotation={[0.114, -0.134, 0.005]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.141, 1.284, -1.381]}
        rotation={[-3.064, 0.651, 3.069]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.234, 1.284, -1.431]}
        rotation={[0.106, 0.352, 0.003]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.341, 1.28, -1.376]}
        rotation={[-2.941, 1.16, 3.052]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.344, 1.273, -1.287]}
        rotation={[0.845, -1.442, 0.8]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.312, 1.274, -1.411]}
        rotation={[-3.057, -0.396, 3.084]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.362, 1.297, -1.22]}
        rotation={[-1.028, -1.411, -0.924]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.238, 1.276, -1.388]}
        rotation={[-0.133, -0.309, -0.145]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.136, 1.261, -1.322]}
        rotation={[3.06, 0.259, -3.011]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.365, 1.287, -1.319]}
        rotation={[2.839, 0.931, -2.906]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.325, 1.303, -1.135]}
        rotation={[0.9, 1.435, -0.94]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.077, 1.261, -1.356]}
        rotation={[3.029, 0.239, -3.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.314, 1.288, -1.286]}
        rotation={[-0.13, -0.32, -0.18]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.273, 1.298, -1.119]}
        rotation={[3.109, -0.255, -2.981]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.14, 1.283, -1.25]}
        rotation={[3.033, 0.466, -3.043]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.33, 1.293, -1.219]}
        rotation={[-0.342, -1.141, -0.349]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.255, 1.288, -1.25]}
        rotation={[-3.13, -0.468, -2.959]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.406, 1.317, -1.289]}
        rotation={[-0.624, -1.264, -0.636]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.985, 1.237, -0.97]}
        rotation={[2.967, 1.478, -2.897]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.02, 1.228, -0.891]}
        rotation={[-3.095, -0.683, -3.098]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.826, 1.213, -0.87]}
        rotation={[0.171, 1.059, -0.097]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-6.019, 1.228, -0.935]}
        rotation={[-0.154, -1.423, -0.145]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.927, 1.234, -0.885]}
        rotation={[-3.101, -0.871, 3.111]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.906, 1.236, -0.983]}
        rotation={[0.099, 1.068, -0.032]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.874, 1.228, -0.981]}
        rotation={[-2.937, -1.272, -2.97]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.991, 1.229, -0.971]}
        rotation={[-3.034, -1.286, -3.062]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.015, 1.234, -0.928]}
        rotation={[0.123, 1.375, -0.144]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.013, 1.247, -1.051]}
        rotation={[0.129, 1.313, -0.087]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.856, 1.227, -0.957]}
        rotation={[-0.046, -0.949, -0.123]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-5.967, 1.234, -0.838]}
        rotation={[3.134, 0.447, -3.116]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.602, 1.403, -1.235]}
        rotation={[-3.026, 0.761, 3.079]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.513, 1.411, -1.106]}
        rotation={[3.141, -0.213, 3.04]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.527, 1.405, -1.131]}
        rotation={[-2.924, 1.283, 2.959]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.505, 1.4, -1.183]}
        rotation={[-3.064, 1.359, 3.115]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.459, 1.387, -1.137]}
        rotation={[-3.053, 1.056, 3.114]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.471, 1.394, -1.061]}
        rotation={[0.384, -1.325, 0.332]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.38, 1.405, -1.041]}
        rotation={[-2.903, 1.281, 2.977]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.518, 1.399, -1.152]}
        rotation={[0.057, 0.328, 0.007]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.609, 1.397, -1.155]}
        rotation={[0.115, -0.528, 0.042]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.651, 1.405, -1.228]}
        rotation={[0.038, -0.392, -0.017]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.457, 1.402, -1.179]}
        rotation={[0.049, 0.29, 0.057]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-4.62, 1.397, -1.196]}
        rotation={[-3.121, -0.036, 3.105]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-5.236, 1.419, 0.593]}
        rotation={[-0.204, 0.537, 0.084]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.053, 1.42, 0.362]}
        rotation={[-3.12, 1.302, 2.966]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-5.384, 1.403, 0.48]}
        rotation={[-0.157, 0.185, 0.113]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-5.157, 1.436, 0.565]}
        rotation={[-0.117, 0.052, 0.115]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.15, 1.406, 0.305]}
        rotation={[2.952, -0.575, 2.996]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-5.21, 1.407, 0.665]}
        rotation={[0.06, -0.956, 0.145]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-5.113, 1.443, 0.632]}
        rotation={[3.102, 0.969, 3.012]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.279, 1.423, 0.597]}
        rotation={[1.371, -1.468, 1.529]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.314, 1.405, 0.496]}
        rotation={[-0.092, -0.467, 0.114]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.171, 1.406, 0.361]}
        rotation={[2.871, -0.907, 2.931]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.992, 1.397, 0.341]}
        rotation={[-0.357, 1.166, 0.204]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.126, 1.417, 0.503]}
        rotation={[3.087, 0.817, 3.053]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.418, 1.351, 0.831]}
        rotation={[-0.299, 1.238, 0.345]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.424, 1.362, 0.606]}
        rotation={[0.024, 0.034, 0.083]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.425, 1.374, 0.634]}
        rotation={[-2.979, 0.654, 3.035]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.298, 1.376, 0.627]}
        rotation={[0.024, 0.296, 0.143]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.345, 1.372, 0.801]}
        rotation={[-3.003, 0.646, 2.983]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.299, 1.363, 0.69]}
        rotation={[-3.133, -0.593, 3.045]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.463, 1.374, 0.575]}
        rotation={[0.062, -0.076, 0.058]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.322, 1.378, 0.755]}
        rotation={[0.171, -0.639, 0.168]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.513, 1.348, 0.648]}
        rotation={[-3.118, -0.232, 3.071]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.505, 1.357, 0.62]}
        rotation={[0.037, -0.029, 0.147]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.373, 1.358, 0.747]}
        rotation={[0.201, -0.966, 0.145]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.427, 1.368, 0.537]}
        rotation={[-3.037, 0.425, 3.054]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.335, 0.697, 2.267]}
        rotation={[-0.157, 0.626, 0.201]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.247, 0.686, 2.122]}
        rotation={[-0.375, 1.127, 0.342]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-8.224, 0.712, 2.255]}
        rotation={[-0.073, 0.117, 0.196]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-8.18, 0.712, 2.233]}
        rotation={[2.856, -0.858, 2.821]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.229, 0.705, 2.222]}
        rotation={[0.307, -1.033, 0.4]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-8.221, 0.703, 2.121]}
        rotation={[3.022, -0.662, 2.978]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-8.247, 0.694, 2.112]}
        rotation={[3.119, -0.011, 3.009]}
        scale={0.008}
      />
      <instances.GNInstance
        position={[-8.147, 0.714, 2.089]}
        rotation={[-0.049, 0.218, 0.188]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.222, 0.696, 2.111]}
        rotation={[-0.116, 0.503, 0.176]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-8.249, 0.7, 2.258]}
        rotation={[-0.252, 0.994, 0.289]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-8.337, 0.678, 2.109]}
        rotation={[0.599, -1.316, 0.666]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[-8.16, 0.718, 2.243]}
        rotation={[0.029, -0.297, 0.166]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.195, 1.272, -0.424]}
        rotation={[-0.016, 1.136, -0.07]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.175, 1.275, -0.249]}
        rotation={[-3.138, 0.473, -3.097]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.167, 1.286, -0.405]}
        rotation={[3.062, 0.991, -3.086]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.185, 1.287, -0.401]}
        rotation={[0.037, 0.709, -0.021]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.243, 1.292, -0.469]}
        rotation={[0.053, 1.369, -0.021]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.054, 1.283, -0.24]}
        rotation={[0.015, -0.176, -0.009]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.168, 1.28, -0.236]}
        rotation={[-0.012, -0.377, 0.003]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.302, 1.278, -0.307]}
        rotation={[3.105, -0.427, -3.117]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.089, 1.277, -0.36]}
        rotation={[3.074, 0.407, -3.123]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.297, 1.29, -0.208]}
        rotation={[0.166, 1.257, -0.145]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.265, 1.274, -0.402]}
        rotation={[3.076, 0.792, -3.135]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.109, 1.286, -0.249]}
        rotation={[2.871, 1.324, -2.944]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.605, 1.221, -0.153]}
        rotation={[2.983, -0.926, 3.052]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.786, 1.207, -0.154]}
        rotation={[0.266, -1.15, 0.285]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.835, 1.2, -0.119]}
        rotation={[-2.762, 1.25, 2.669]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.611, 1.224, 0.019]}
        rotation={[0.009, -0.26, 0.16]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.734, 1.22, -0.062]}
        rotation={[-0.027, -0.6, 0.042]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.599, 1.227, -0.218]}
        rotation={[0.154, -1.166, 0.261]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-6.61, 1.224, -0.134]}
        rotation={[-2.948, 1.297, 2.838]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.804, 1.21, -0.184]}
        rotation={[-0.513, 1.43, 0.479]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.605, 1.215, -0.157]}
        rotation={[-0.141, 0.405, 0.099]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-6.696, 1.202, -0.359]}
        rotation={[0.017, -0.913, 0.098]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-6.794, 1.227, -0.086]}
        rotation={[-0.099, 0.174, 0.063]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.676, 1.227, -0.127]}
        rotation={[3.065, -0.519, 3.054]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.23, 1.233, -1.04]}
        rotation={[2.912, -0.941, 2.864]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.941, 1.276, -1.039]}
        rotation={[-0.118, 0.866, 0.2]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-6.159, 1.246, -1.247]}
        rotation={[2.903, -1.176, 2.852]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.181, 1.231, -1.061]}
        rotation={[-0.092, 0.962, 0.249]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.095, 1.248, -0.975]}
        rotation={[-2.436, 1.286, 2.514]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-6.216, 1.251, -1.275]}
        rotation={[2.974, -0.809, 2.888]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.879, 1.304, -1.232]}
        rotation={[0.118, -0.257, 0.154]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.048, 1.275, -1.328]}
        rotation={[2.952, -0.901, 2.906]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-5.862, 1.285, -1.129]}
        rotation={[-2.936, 0.85, 2.881]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.019, 1.269, -1.009]}
        rotation={[0.704, -1.279, 0.623]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-6.231, 1.232, -1.133]}
        rotation={[0.241, -0.998, 0.24]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.235, 1.247, -1.066]}
        rotation={[0.032, 0.102, 0.107]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.067, 1.156, -5.724]}
        rotation={[-0.097, -0.747, -0.01]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.212, 1.167, -5.737]}
        rotation={[-0.124, -0.517, -0.057]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.017, 1.171, -5.709]}
        rotation={[3.035, 1.157, 3.098]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.133, 1.162, -5.67]}
        rotation={[-0.097, 0.872, 0.028]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.081, 1.155, -5.776]}
        rotation={[0.141, -1.543, 0.269]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.036, 1.168, -5.625]}
        rotation={[-0.091, 0.265, -0.053]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.042, 1.177, -5.696]}
        rotation={[-0.127, -0.86, 0.029]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.1, 1.15, -5.739]}
        rotation={[-1.963, -1.528, -1.846]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.221, 1.141, -5.907]}
        rotation={[-0.114, -0.195, 0.03]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.024, 1.159, -5.704]}
        rotation={[-0.086, 0.543, -0.028]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.018, 1.166, -5.725]}
        rotation={[3.06, 1.238, 3.081]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.066, 1.156, -5.852]}
        rotation={[-0.156, -0.861, -0.082]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.536, 0.704, -6.752]}
        rotation={[-0.028, -1.502, 0.026]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.57, 0.701, -6.787]}
        rotation={[-0.048, -0.526, -0.05]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.291, 0.699, -6.817]}
        rotation={[3.07, 0.843, -3.122]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.296, 0.691, -6.75]}
        rotation={[-0.098, -0.872, -0.051]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.42, 0.696, -6.767]}
        rotation={[3.074, 1.174, -3.046]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.503, 0.696, -6.931]}
        rotation={[-0.086, -0.799, -0.037]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.449, 0.687, -7.015]}
        rotation={[-0.133, -1.147, -0.097]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.404, 0.696, -6.873]}
        rotation={[-0.005, 0.007, 0]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.478, 0.687, -6.883]}
        rotation={[2.839, 1.435, -2.834]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.422, 0.702, -6.924]}
        rotation={[0.159, 1.326, -0.217]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.416, 0.689, -6.639]}
        rotation={[0.015, 0.821, -0.07]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.536, 0.697, -6.914]}
        rotation={[-0.259, -1.307, -0.217]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.569, 0.552, -6.52]}
        rotation={[-2.648, 1.293, 2.705]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.945, 0.506, -6.545]}
        rotation={[-3.039, 0.589, 3.015]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.56, 0.568, -6.718]}
        rotation={[0.487, -1.208, 0.515]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.83, 0.507, -6.477]}
        rotation={[-0.209, 0.945, 0.279]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.608, 0.558, -6.677]}
        rotation={[-2.988, 0.848, 2.982]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.663, 0.531, -6.467]}
        rotation={[-3.002, 0.461, 2.986]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.658, 0.535, -6.674]}
        rotation={[1.103, -1.445, 1.103]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.697, 0.518, -6.422]}
        rotation={[3.042, -0.906, 2.923]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.727, 0.534, -6.571]}
        rotation={[0.186, -0.713, 0.185]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.586, 0.559, -6.687]}
        rotation={[0.044, 0.004, 0.107]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.59, 0.537, -6.521]}
        rotation={[3.098, -0.722, 2.974]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.708, 0.552, -6.604]}
        rotation={[0.107, -0.223, 0.149]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.574, 0.498, -6.786]}
        rotation={[3.071, 1.418, -3.057]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.633, 0.499, -6.86]}
        rotation={[-3.112, -1.183, -3.09]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.757, 0.48, -6.741]}
        rotation={[-0.063, 0.847, 0.073]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.616, 0.504, -6.578]}
        rotation={[-3.127, -0.573, -3.076]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.673, 0.483, -6.683]}
        rotation={[-3.138, -0.601, 3.103]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.508, 0.503, -6.655]}
        rotation={[-0.001, -0.302, -0.042]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.596, 0.505, -6.695]}
        rotation={[3.126, 0.815, 3.13]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.581, 0.493, -6.637]}
        rotation={[3.055, -1.054, 3.037]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-1.728, 0.477, -6.805]}
        rotation={[-0.09, 1.191, 0.046]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-1.61, 0.505, -6.712]}
        rotation={[3.109, 0.263, 3.085]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.736, 0.492, -6.668]}
        rotation={[0, 1.279, 0.011]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.612, 0.5, -6.715]}
        rotation={[-0.013, 0.162, -0.018]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.811, 0.897, -5.468]}
        rotation={[-3.108, -0.691, -3.105]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.728, 0.877, -5.72]}
        rotation={[-0.086, -0.264, -0.021]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.93, 0.9, -5.63]}
        rotation={[-0.015, 0.018, -0.028]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.866, 0.902, -5.451]}
        rotation={[3.059, 1.164, -3.065]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.832, 0.885, -5.667]}
        rotation={[-0.456, -1.423, -0.358]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.736, 0.885, -5.525]}
        rotation={[-3.126, -1.156, -3.049]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.656, 0.892, -5.619]}
        rotation={[-0.039, -0.82, -0.043]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.947, 0.912, -5.485]}
        rotation={[3.087, -0.677, -3.105]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.801, 0.914, -5.408]}
        rotation={[3.098, -1.364, -3.138]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-1.88, 0.899, -5.526]}
        rotation={[-0.173, -1.101, -0.168]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.879, 0.885, -5.715]}
        rotation={[-0.029, 0.188, -0.028]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-1.79, 0.889, -5.658]}
        rotation={[-0.28, -1.341, -0.193]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.764, 0.569, -5.937]}
        rotation={[2.872, -1.173, 3.017]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.732, 0.523, -6.241]}
        rotation={[-3.098, 1.064, 2.875]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.746, 0.574, -5.905]}
        rotation={[2.919, -0.478, 3.067]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-2.536, 0.574, -5.986]}
        rotation={[2.697, -1.335, 2.863]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.923, 0.525, -5.972]}
        rotation={[-0.494, 1.206, 0.327]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.684, 0.5, -6.216]}
        rotation={[-0.216, 0.474, 0.073]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.782, 0.551, -5.959]}
        rotation={[-0.192, 0.714, 0.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.796, 0.516, -6.127]}
        rotation={[3.054, 0.624, 3.004]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.856, 0.535, -6.082]}
        rotation={[3.025, 0.345, 3.026]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.701, 0.559, -5.928]}
        rotation={[-2.841, 1.311, 2.639]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.68, 0.524, -6.226]}
        rotation={[-0.291, 1.183, 0.196]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.732, 0.563, -6.009]}
        rotation={[2.751, -1.21, 2.962]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.558, 0.87, -5.205]}
        rotation={[-0.13, -0.43, 0.009]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.626, 0.833, -5.346]}
        rotation={[-0.19, 0.92, 0.127]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.673, 0.84, -5.403]}
        rotation={[3.13, 1.52, 3.086]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.421, 0.875, -5.229]}
        rotation={[0.037, -1.284, 0.201]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.611, 0.838, -5.434]}
        rotation={[0.068, -1.316, 0.22]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.565, 0.854, -5.369]}
        rotation={[-1.366, 1.532, 1.283]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.534, 0.841, -5.357]}
        rotation={[-0.155, 1.162, 0.074]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.639, 0.831, -5.367]}
        rotation={[-0.109, -0.702, 0.066]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.469, 0.873, -5.173]}
        rotation={[3, 0.241, 3.11]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.712, 0.842, -5.295]}
        rotation={[-0.138, -0.535, -0.013]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.472, 0.836, -5.424]}
        rotation={[-0.05, -0.74, 0.106]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.605, 0.837, -5.443]}
        rotation={[-0.133, 1.176, -0.024]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.314, 0.694, -5.599]}
        rotation={[-2.201, 1.544, 2.121]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.107, 0.684, -5.597]}
        rotation={[3.12, 1.23, 3.05]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.26, 0.676, -5.648]}
        rotation={[-0.421, 1.462, 0.332]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.134, 0.695, -5.699]}
        rotation={[3.01, -0.586, 3.065]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-3.234, 0.671, -5.665]}
        rotation={[-0.054, -0.57, 0.076]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-3.14, 0.685, -5.597]}
        rotation={[1.05, -1.529, 1.17]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.202, 0.727, -5.288]}
        rotation={[-0.2, 0.793, 0.117]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-3.165, 0.706, -5.443]}
        rotation={[0.054, -1.148, 0.131]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.275, 0.668, -5.591]}
        rotation={[-0.088, -0.016, 0.11]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.329, 0.676, -5.596]}
        rotation={[-2.693, 1.487, 2.622]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.321, 0.677, -5.533]}
        rotation={[-0.101, 0.66, 0.03]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.391, 0.694, -5.453]}
        rotation={[3.074, -0.341, 3.099]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-2.805, 0.59, -5.784]}
        rotation={[-0.063, -0.303, -0.014]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.721, 0.596, -5.904]}
        rotation={[3.065, 0.588, 3.14]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.694, 0.586, -5.893]}
        rotation={[-3.131, 0.893, 3.108]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.994, 0.582, -5.929]}
        rotation={[-0.033, 0.801, 0.042]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.807, 0.564, -6.066]}
        rotation={[3.065, 0.69, 3.128]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.72, 0.583, -5.971]}
        rotation={[3.069, 0.406, -3.081]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.677, 0.575, -5.967]}
        rotation={[3.075, 0.626, 3.132]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-2.97, 0.595, -5.758]}
        rotation={[-0.005, -0.14, -0.03]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.749, 0.57, -5.998]}
        rotation={[3.11, 0.687, 3.117]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-2.804, 0.592, -5.867]}
        rotation={[3.061, 0.744, 3.139]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.702, 0.588, -5.876]}
        rotation={[-2.805, -1.55, -2.823]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.711, 0.582, -5.825]}
        rotation={[0.038, 0.884, -0.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.164, 0.414, -6.148]}
        rotation={[-3.127, 0.255, 2.994]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.112, 0.436, -6.166]}
        rotation={[-1.768, 1.447, 1.684]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.047, 0.443, -6.006]}
        rotation={[-0.012, -0.114, 0.183]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-2.958, 0.453, -6.142]}
        rotation={[2.85, -1.02, 2.864]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-2.968, 0.449, -6.198]}
        rotation={[3.051, -0.26, 2.975]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.044, 0.424, -6.29]}
        rotation={[-0.892, 1.398, 0.831]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.116, 0.427, -6.121]}
        rotation={[-3.133, 0.621, 2.975]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.008, 0.439, -6.103]}
        rotation={[0.267, -1.142, 0.315]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.979, 0.441, -6.234]}
        rotation={[1.561, -1.457, 1.661]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.187, 0.407, -6.189]}
        rotation={[-0.272, 1.001, 0.215]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.188, 0.403, -6.313]}
        rotation={[-0.776, 1.392, 0.716]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.241, 0.402, -6.109]}
        rotation={[-0.07, -0.139, 0.099]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-0.691, 0.8, -6.35]}
        rotation={[2.971, 0.792, -3.051]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.621, 0.768, -6.444]}
        rotation={[-0.064, -0.083, -0.054]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.643, 0.788, -6.258]}
        rotation={[3.081, -0.248, -3.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.738, 0.799, -6.337]}
        rotation={[-0.292, -1.27, -0.19]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.983, 0.815, -6.338]}
        rotation={[-0.141, -0.598, -0.106]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.696, 0.77, -6.499]}
        rotation={[-1.819, -1.51, -1.753]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.619, 0.782, -6.523]}
        rotation={[-2.479, -1.478, -2.405]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.859, 0.794, -6.558]}
        rotation={[-0.044, 0.164, -0.12]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.743, 0.783, -6.516]}
        rotation={[-3.136, -0.849, -3.047]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.692, 0.791, -6.315]}
        rotation={[0.036, 0.672, -0.114]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.876, 0.787, -6.353]}
        rotation={[-0.11, -0.074, -0.034]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.852, 0.791, -6.416]}
        rotation={[0.984, 1.52, -1.057]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.942, 0.63, -6.705]}
        rotation={[2.947, 1.143, -3.03]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.863, 0.622, -6.87]}
        rotation={[3.042, -1.434, 3.09]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-1.083, 0.63, -6.797]}
        rotation={[-2.482, -1.513, -2.425]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.734, 0.62, -6.778]}
        rotation={[-0.089, 0.705, 0.016]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.884, 0.638, -6.647]}
        rotation={[-0.072, 1.024, -0.015]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.067, 0.618, -6.73]}
        rotation={[-0.095, -0.095, -0.012]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-0.905, 0.625, -6.934]}
        rotation={[-0.056, -0.576, -0.008]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.086, 0.622, -6.876]}
        rotation={[-0.081, -0.845, -0.029]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.844, 0.643, -6.585]}
        rotation={[-0.063, -0.319, 0.02]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.799, 0.619, -6.868]}
        rotation={[3.09, -1.15, -3.121]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.819, 0.632, -6.711]}
        rotation={[-0.095, -0.517, -0.009]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.959, 0.64, -6.686]}
        rotation={[3.029, 0.743, -3.047]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.733, 1.008, -6.735]}
        rotation={[3.074, -0.589, -3.067]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[0.805, 1.03, -6.47]}
        rotation={[-0.029, 0.908, -0.063]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.8, 1.008, -6.647]}
        rotation={[-0.125, -0.179, -0.061]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.857, 1.021, -6.494]}
        rotation={[0.046, 0.816, -0.123]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.66, 1.029, -6.712]}
        rotation={[3.013, 0.395, -3.022]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.618, 1.038, -6.569]}
        rotation={[2.916, 1.02, -2.948]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.603, 1.032, -6.618]}
        rotation={[3.069, -0.528, -3.026]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.745, 1.011, -6.615]}
        rotation={[2.98, 0.57, -2.995]}
        scale={0.009}
      />
      <instances.GNInstance
        position={[0.777, 1.015, -6.631]}
        rotation={[3.019, 0.153, -2.98]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.829, 1.002, -6.69]}
        rotation={[2.222, 1.418, -2.362]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[0.677, 1.031, -6.618]}
        rotation={[3.042, 0.082, -3.058]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[0.71, 1.027, -6.542]}
        rotation={[3.107, -0.3, -3.023]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.639, 0.788, -5.225]}
        rotation={[-0.108, 0.984, 0.038]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.643, 0.784, -5.266]}
        rotation={[-0.182, 1.19, 0.069]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.582, 0.801, -5.141]}
        rotation={[3.082, -1.091, -3.06]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.484, 0.805, -4.995]}
        rotation={[-0.139, 1.089, 0.039]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.529, 0.807, -5.068]}
        rotation={[3.061, 0.958, -3.122]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.439, 0.803, -5.091]}
        rotation={[-0.136, -1.286, -0.02]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.451, 0.81, -5.01]}
        rotation={[2.777, -1.329, 2.929]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.565, 0.789, -5.197]}
        rotation={[3.062, 0.073, 3.075]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.338, 0.798, -5.2]}
        rotation={[-0.129, 1.107, 0.064]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.523, 0.814, -5.114]}
        rotation={[3.039, 0.871, 3.078]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.541, 0.794, -5.126]}
        rotation={[-0.079, -0.255, 0.038]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.538, 0.824, -4.979]}
        rotation={[-0.072, -1.192, 0.054]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.757, 0.664, -5.347]}
        rotation={[0.009, -0.151, -0.06]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.841, 0.68, -5.44]}
        rotation={[-0.056, -0.632, -0.085]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.76, 0.679, -5.308]}
        rotation={[0.218, 1.236, -0.264]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.817, 0.667, -5.423]}
        rotation={[0.121, 0.915, -0.158]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.734, 0.674, -5.379]}
        rotation={[-2.989, -0.88, -2.997]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.862, 0.672, -5.435]}
        rotation={[3.14, -0.248, -3.076]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.625, 0.668, -5.252]}
        rotation={[1.229, 1.486, -1.233]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.675, 0.657, -5.369]}
        rotation={[-2.85, -1.206, -2.854]}
        scale={0.01}
      />
      <instances.GNInstance
        position={[-3.716, 0.652, -5.196]}
        rotation={[-0.002, -0.337, -0.121]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-3.866, 0.675, -5.45]}
        rotation={[0.888, 1.508, -0.884]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-3.82, 0.688, -5.418]}
        rotation={[-3.013, -1.039, -3.058]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-3.762, 0.666, -5.289]}
        rotation={[0.743, 1.528, -0.779]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.126, 0.607, -5.352]}
        rotation={[-0.036, 0.544, 0.061]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.4, 0.6, -5.462]}
        rotation={[0.067, -0.071, 0.027]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.279, 0.607, -5.525]}
        rotation={[0.076, -0.126, 0.104]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.218, 0.602, -5.217]}
        rotation={[0.054, -0.518, 0.03]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.279, 0.598, -5.332]}
        rotation={[-3.095, 0.384, 3.012]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.215, 0.603, -5.339]}
        rotation={[-0.125, 1.256, 0.189]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.245, 0.617, -5.511]}
        rotation={[0.029, 0.341, 0.069]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.356, 0.593, -5.382]}
        rotation={[0.112, -0.763, 0.063]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.142, 0.601, -5.404]}
        rotation={[-2.681, 1.432, 2.664]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.281, 0.616, -5.502]}
        rotation={[-2.856, 1.385, 2.885]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.243, 0.607, -5.452]}
        rotation={[-3.138, -0.65, 3.104]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.142, 0.614, -5.415]}
        rotation={[-2.578, 1.365, 2.548]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.192, 0.458, -5.752]}
        rotation={[-3.132, 0.967, 2.98]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.298, 0.444, -5.765]}
        rotation={[2.797, -1.201, 2.922]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.196, 0.454, -5.753]}
        rotation={[-0.036, -0.84, 0.171]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.089, 0.491, -5.648]}
        rotation={[2.779, -1.236, 2.909]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.006, 0.471, -5.827]}
        rotation={[3.051, 0.898, 3.028]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.16, 0.449, -5.834]}
        rotation={[3.122, 0.875, 3.029]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.134, 0.442, -5.901]}
        rotation={[-0.058, -0.564, 0.092]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.208, 0.474, -5.709]}
        rotation={[-0.086, -0.15, 0.059]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.168, 0.424, -5.871]}
        rotation={[3.075, 0.535, 3.01]}
        scale={0.011}
      />
      <instances.GNInstance
        position={[-4.199, 0.442, -5.808]}
        rotation={[2.654, -1.225, 2.823]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.122, 0.436, -5.929]}
        rotation={[0.072, -1.033, 0.222]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-4.187, 0.454, -5.669]}
        rotation={[1.904, -1.469, 1.981]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-0.283, 1.275, -4.99]}
        rotation={[3.094, -0.643, 3.11]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.439, 1.249, -5.111]}
        rotation={[0.157, -0.531, 0.06]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[1.766, 1.666, -3.582]}
        rotation={[-2.016, 1.373, 2.062]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.803, 1.302, -3.787]}
        rotation={[3.105, -0.787, 3.034]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-2.74, 1.338, -3.497]}
        rotation={[-0.079, 0.611, 0.071]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.218, 0.22, -6.29]}
        rotation={[0.16, 0.147, -0.136]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[0.929, 1.048, -6.647]}
        rotation={[-2.964, -0.529, -2.985]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.714, 0.961, -6.791]}
        rotation={[-2.818, -1.096, -2.744]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.324, 1.201, -4.258]}
        rotation={[-0.137, 0.106, -0.015]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.115, 1.184, 2.773]}
        rotation={[2.944, 1.167, -3.046]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.884, 1.278, 2.097]}
        rotation={[-0.19, 0.603, 0.18]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-4.465, 1.427, 0.878]}
        rotation={[-2.969, 0.997, 2.906]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-4.61, 1.435, 0.737]}
        rotation={[-3.023, 0.624, -3.101]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.876, 1.415, 0.372]}
        rotation={[-0.065, 0.02, -0.094]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.07, 1.344, -2.159]}
        rotation={[0.078, -0.772, -0.048]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.37, 1.396, -1.843]}
        rotation={[0.213, 0.873, -0.159]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.499, 1.249, -2.611]}
        rotation={[-0.158, 0.553, 0.007]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-2.363, 1.255, -2.953]}
        rotation={[-3.022, 0.018, 3.102]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-1.872, 1.348, -3.503]}
        rotation={[2.096, -1.463, 2.15]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-2.575, 1.25, -4.039]}
        rotation={[-0.051, -0.014, 0.014]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[1.558, 1.478, -4.871]}
        rotation={[-3.046, 1.456, 3.047]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-0.256, 1.486, -3.702]}
        rotation={[-3.103, 1.256, -3.101]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.45, 1.381, -4.098]}
        rotation={[0.075, 0.904, -0.017]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-0.299, 1.316, -4.683]}
        rotation={[3.11, -0.268, 3.12]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.017, 1.265, -4.062]}
        rotation={[0.205, -0.568, 0.032]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.744, 1.231, -4.376]}
        rotation={[-2.98, 0.45, 3.114]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-1.7, 1.341, -3.632]}
        rotation={[-0.842, 1.443, 0.801]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.829, 1.347, -4.148]}
        rotation={[3.065, -0.088, 3.118]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.797, 0.967, -4.958]}
        rotation={[0.05, -1.107, -0.029]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-2.146, 0.975, -5.195]}
        rotation={[3.041, 0.636, -3.139]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.155, 0.265, -6.58]}
        rotation={[0.002, -0.947, 0.019]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-2.293, 0.361, -6.771]}
        rotation={[-0.186, -1.001, -0.156]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.19, 1.603, -3.877]}
        rotation={[3.068, 0.709, -3.131]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[1.281, 1.496, -4.498]}
        rotation={[2.75, 1.446, -2.861]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.693, 1.406, -4.772]}
        rotation={[2.933, -0.736, 3.058]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.285, 1.304, -5.292]}
        rotation={[-2.925, 0.758, 2.955]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[0.718, 1.331, -5.261]}
        rotation={[0.089, -0.182, -0.029]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-0.699, 0.483, -7.323]}
        rotation={[0.177, -0.03, -0.046]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[0.472, 1.613, -3.348]}
        rotation={[-2.854, -0.997, -3]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[0.543, 1.567, -3.662]}
        rotation={[0.104, -0.8, -0.031]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-3.737, 1.417, -1.943]}
        rotation={[-2.742, -1.438, -2.692]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.578, 1.422, -1.185]}
        rotation={[-3.122, -0.405, -3.033]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-4.491, 1.444, 0.528]}
        rotation={[-0.476, -1.264, -0.518]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-7.456, 0.992, 0.044]}
        rotation={[2.894, 1.146, -2.919]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-4.415, 1.427, -0.369]}
        rotation={[-2.933, 0.63, 2.979]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.88, 1.426, 1.118]}
        rotation={[-0.288, 1.157, 0.247]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-4.778, 1.257, 1.642]}
        rotation={[-0.133, -0.463, -0.099]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-7.924, 0.837, 1.81]}
        rotation={[0.207, 0.66, -0.029]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-7.927, 0.864, 1.328]}
        rotation={[2.964, 0.654, -3.094]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-8.146, 0.771, 1.245]}
        rotation={[-2.912, 1.032, 2.839]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.704, 1.334, 2.223]}
        rotation={[-0.159, -0.191, -0.131]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.534, 1.342, 2.583]}
        rotation={[0.256, 1.353, -0.341]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-5.277, 1.267, 2.84]}
        rotation={[1.899, 1.467, -1.881]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.033, 1.048, 2.904]}
        rotation={[3.111, -0.459, 3.067]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-7.195, 1.102, 2.343]}
        rotation={[0.36, -1.285, 0.393]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-7.789, 0.879, 2.343]}
        rotation={[2.911, 1.238, -3.025]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-6.609, 1.304, 1.386]}
        rotation={[-0.365, 1.245, 0.41]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-6.954, 1.22, 1.273]}
        rotation={[2.93, 1.521, -2.904]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-7.112, 1.146, 1.362]}
        rotation={[-2.979, 1.405, 2.906]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.026, 1.169, 1.62]}
        rotation={[-3.001, -0.291, 3.126]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-5.988, 1.353, -0.104]}
        rotation={[2.409, 1.514, -2.439]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.309, 1.31, -0.063]}
        rotation={[-3.016, -0.448, 3.139]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-7.375, 1.025, 0.109]}
        rotation={[3.085, -0.284, 3.056]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.248, 1.373, 0.343]}
        rotation={[0.199, 1.211, -0.201]}
        scale={0.012}
      />
      <instances.GNInstance
        position={[-7.417, 1.063, 0.426]}
        rotation={[2.69, 1.353, -2.63]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-4.934, 1.323, -1.433]}
        rotation={[-0.119, -0.142, 0.019]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-5.289, 1.283, -1.398]}
        rotation={[-3.028, 0.534, 3.086]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.253, 1.291, -1.246]}
        rotation={[-0.324, -1.091, -0.296]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-5.949, 1.239, -0.893]}
        rotation={[-3.003, -1.144, -3.036]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-4.551, 1.406, -1.143]}
        rotation={[0.059, -0.369, 0.045]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-5.2, 1.423, 0.458]}
        rotation={[-0.542, 1.385, 0.432]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-6.41, 1.369, 0.704]}
        rotation={[0.04, 0.179, 0.096]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-8.213, 0.713, 2.217]}
        rotation={[0.979, -1.363, 1.007]}
        scale={0.013}
      />
      <instances.GNInstance
        position={[-6.18, 1.289, -0.313]}
        rotation={[-0.056, -0.876, -0.046]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-6.721, 1.219, -0.172]}
        rotation={[2.944, -0.964, 2.968]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-6.093, 1.27, -1.167]}
        rotation={[-2.349, 1.343, 2.394]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-0.095, 1.166, -5.758]}
        rotation={[-0.115, -0.414, -0.016]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-0.448, 0.706, -6.847]}
        rotation={[3.001, 1.265, -3.015]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-1.724, 0.544, -6.611]}
        rotation={[0.453, -1.246, 0.425]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-1.606, 0.501, -6.754]}
        rotation={[0.001, -1.283, 0.026]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-1.856, 0.905, -5.57]}
        rotation={[-0.026, 0.581, -0.045]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-2.704, 0.551, -6.089]}
        rotation={[2.96, -0.109, 3.063]}
        scale={0.019}
      />
      <instances.GNInstance
        position={[-2.535, 0.852, -5.351]}
        rotation={[3.005, -0.889, 3.106]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-3.241, 0.7, -5.488]}
        rotation={[2.172, -1.503, 2.257]}
        scale={0.02}
      />
      <instances.GNInstance
        position={[-2.825, 0.597, -5.874]}
        rotation={[3.108, 0.628, -3.129]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-3.108, 0.435, -6.155]}
        rotation={[3.023, -0.503, 2.998]}
        scale={0.016}
      />
      <instances.GNInstance
        position={[-0.783, 0.802, -6.397]}
        rotation={[-0.687, -1.429, -0.61]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[-0.934, 0.632, -6.788]}
        rotation={[-3.058, -1.418, -2.977]}
        scale={0.017}
      />
      <instances.GNInstance
        position={[0.745, 1.031, -6.577]}
        rotation={[0.401, 1.359, -0.502]}
        scale={0.014}
      />
      <instances.GNInstance
        position={[-3.515, 0.805, -5.152]}
        rotation={[0.082, -1.464, 0.192]}
        scale={0.018}
      />
      <instances.GNInstance
        position={[-3.744, 0.676, -5.353]}
        rotation={[-3.08, -0.646, -3.055]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.271, 0.61, -5.409]}
        rotation={[0.096, -0.684, 0.102]}
        scale={0.015}
      />
      <instances.GNInstance
        position={[-4.119, 0.464, -5.788]}
        rotation={[2.972, -0.453, 3.05]}
        scale={0.016}
      />
      <instances.GNInstance1
        position={[3.553, 0.188, -2.839]}
        rotation={[2.298, 0.849, 2.432]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.131, 0.103, -1.833]}
        rotation={[2.156, 0.929, 2.361]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.861, 0.133, -1.892]}
        rotation={[1.389, 0.878, -2.95]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.198, 0.021, -2.109]}
        rotation={[2.05, -1.144, 0.591]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.213, 0.059, -2.231]}
        rotation={[0.441, -0.477, -1.313]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.969, 0.045, -2.09]}
        rotation={[2.456, -0.223, 1.388]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.057, 0.184, -2.479]}
        rotation={[2.396, -0.4, 1.202]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.802, 0.12, -2.435]}
        rotation={[2.605, -0.299, 1.584]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.356, 0.213, -2.659]}
        rotation={[2.44, 0.607, 1.833]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.344, 0.066, -2.318]}
        rotation={[2.484, 0.812, 2.061]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.367, 0.079, -2.203]}
        rotation={[0.561, 0.417, -1.946]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.494, -0.005, 2.294]}
        rotation={[0.915, -0.973, -0.718]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.864, 0.024, 2.274]}
        rotation={[2.53, 0.617, 1.983]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.004, 0.062, 2.05]}
        rotation={[1.147, -0.963, -0.765]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.836, 0.053, 2.043]}
        rotation={[0.68, -0.913, -0.988]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.212, 0.096, 1.888]}
        rotation={[0.68, 0.432, -1.836]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.156, 0.109, 1.801]}
        rotation={[1.13, -0.809, -0.6]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.523, 0.225, 1.418]}
        rotation={[1.413, -1.102, -0.095]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.139, 0.188, 1.218]}
        rotation={[2.702, -0.082, 1.585]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.29, 0.23, 1.193]}
        rotation={[1.813, 1.077, 2.957]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.824, 0.103, 0.7]}
        rotation={[2.669, -0.006, 1.708]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.178, 0.211, 0.697]}
        rotation={[0.556, -0.045, -1.762]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.199, 0.226, 1.015]}
        rotation={[0.636, -0.079, -1.56]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.693, 0.074, 0.27]}
        rotation={[0.826, 0.848, -2.41]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.906, 0.137, 0.426]}
        rotation={[2.469, 0.581, 1.914]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.799, 0.113, 0.222]}
        rotation={[2.488, -0.631, 1.164]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.843, 0.105, 0.175]}
        rotation={[0.47, 0.217, -1.601]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.025, 0.097, -0.749]}
        rotation={[1.121, 1.073, -2.7]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.098, 0.089, -0.682]}
        rotation={[1.883, 0.867, 2.575]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.319, 0.072, -0.639]}
        rotation={[2.319, 0.756, 2.22]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.218, 0.083, -0.702]}
        rotation={[1.133, -0.941, -0.731]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.955, 0.131, -1.151]}
        rotation={[2.012, -0.762, 0.508]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.983, 0.119, -1.01]}
        rotation={[2.081, 0.859, 2.487]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.367, 0.087, -0.967]}
        rotation={[0.666, -0.455, -1.154]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.935, 0.145, -1.368]}
        rotation={[0.533, 0.307, -1.931]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.049, 0.124, -1.534]}
        rotation={[2.647, -0.579, 1.32]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.286, -0.001, 1.914]}
        rotation={[1.8, 1.061, 2.762]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.316, 0.005, 1.724]}
        rotation={[2.711, -0.012, 1.656]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.474, 0.015, 1.93]}
        rotation={[2.678, -0.122, 1.498]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.594, 0.038, 1.713]}
        rotation={[0.796, 0.69, -2.259]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.849, 0.068, 1.774]}
        rotation={[2.272, -0.638, 0.9]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.643, 0.047, 1.616]}
        rotation={[2.373, 0.895, 2.285]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.658, 0.055, 1.473]}
        rotation={[0.613, 0.64, -2.005]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.307, 0.015, 1.341]}
        rotation={[2.544, 0.343, 1.649]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.729, 0.121, 1.239]}
        rotation={[2.536, 0.777, 2.017]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.498, 0.043, 1.298]}
        rotation={[2.666, -0.093, 1.696]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.906, 0.115, 1.489]}
        rotation={[0.422, 0.514, -1.721]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.49, 0.055, 1.231]}
        rotation={[2.601, 0.697, 2.037]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.023, 0.023, 0.379]}
        rotation={[2.503, -0.501, 1.06]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.17, 0.044, 0.588]}
        rotation={[2.334, -0.891, 0.773]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.784, 0.15, 1.089]}
        rotation={[0.474, 0.128, -1.644]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.36, 0.079, 0.689]}
        rotation={[2.321, -0.607, 0.848]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.591, 0.121, 0.833]}
        rotation={[2.372, -0.588, 0.922]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.705, 0.108, 0.876]}
        rotation={[0.771, -0.971, -0.785]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.125, 0.026, 0.317]}
        rotation={[0.599, -0.66, -1.191]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.403, 0.036, 0.42]}
        rotation={[1.572, -1.017, 0]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.667, 0.036, 0.002]}
        rotation={[0.636, -0.384, -1.233]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.8, 0.08, -0.783]}
        rotation={[0.584, 0.536, -1.728]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.239, 0.041, 0.212]}
        rotation={[2.378, 0.584, 1.879]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.448, 0.058, -0.26]}
        rotation={[2.324, 0.615, 1.983]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.662, 0.086, -0.916]}
        rotation={[2.225, 0.81, 2.351]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.786, 0.05, -0.275]}
        rotation={[2.049, -0.878, 0.55]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.141, 0.046, 0.068]}
        rotation={[0.587, -0.27, -1.407]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.749, 0.047, -0.401]}
        rotation={[1.014, -0.7, -0.833]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.962, 0.042, -0.247]}
        rotation={[0.516, 0.615, -1.807]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.132, 0.035, -0.192]}
        rotation={[0.744, 0.773, -2.264]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.646, 0.089, -1.05]}
        rotation={[0.64, 0.643, -1.907]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.379, 0.059, -0.621]}
        rotation={[0.899, 1.033, -2.328]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.042, 0.072, -0.775]}
        rotation={[0.435, -0.079, -1.396]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.061, 0.076, -0.937]}
        rotation={[2.531, 0.789, 2.148]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.679, 0.053, -0.586]}
        rotation={[0.653, 0.065, -1.694]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.689, 0.098, -0.869]}
        rotation={[0.635, -0.514, -1.476]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.322, 0.101, -1.012]}
        rotation={[2.516, 0.054, 1.472]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.439, 0.068, -0.764]}
        rotation={[2.543, 0.206, 1.803]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.014, 0.066, -0.553]}
        rotation={[2.664, -0.01, 1.494]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.764, 0.097, -0.833]}
        rotation={[2.228, 0.591, 2.095]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.879, 0.104, -1.254]}
        rotation={[0.66, 0.202, -1.81]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.808, 0.103, -1.269]}
        rotation={[0.455, -0.229, -1.321]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.455, 0.123, -1.21]}
        rotation={[2.58, -0.555, 1.383]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.058, 0.118, -1.345]}
        rotation={[0.558, -0.284, -1.414]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.745, 0.108, -0.941]}
        rotation={[2.519, 0.769, 2.009]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.911, 0.117, -1.402]}
        rotation={[0.76, -0.603, -1.289]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.342, 0.128, -1.305]}
        rotation={[0.709, -0.771, -0.837]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.999, 0.133, -1.593]}
        rotation={[2.572, -0.394, 1.384]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.924, 0.129, -1.56]}
        rotation={[0.893, -0.725, -0.981]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.287, 0.141, -1.578]}
        rotation={[0.5, -0.415, -1.259]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.592, 0.148, -1.575]}
        rotation={[0.487, 0.141, -1.642]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.257, 0.137, -1.725]}
        rotation={[2.553, -0.359, 1.307]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.784, 0.127, -1.823]}
        rotation={[2.283, -0.589, 0.922]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.439, 0.141, -1.714]}
        rotation={[0.699, 0.629, -1.877]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.884, -0.005, 0.742]}
        rotation={[1.097, 1.072, -2.512]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.69, 0.01, 0.303]}
        rotation={[1.379, 0.881, -2.978]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.513, 0.002, 0.378]}
        rotation={[0.772, 0.722, -2.371]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.552, 0.022, 0.163]}
        rotation={[1.594, -1.061, -0.105]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.855, 0.033, -0.04]}
        rotation={[0.879, -0.542, -1.146]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.796, 0.035, -0.286]}
        rotation={[1.369, 0.84, -3.013]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.412, 0.026, -0.043]}
        rotation={[2.605, 0.305, 1.961]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.558, 0.038, -0.417]}
        rotation={[0.6, 0.645, -1.901]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.31, 0.027, 0.047]}
        rotation={[0.618, -0.245, -1.526]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.323, 0.039, -0.179]}
        rotation={[2.222, -0.739, 0.779]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.12, 0.041, -0.283]}
        rotation={[1.449, 1.007, 3.052]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.336, 0.043, -0.891]}
        rotation={[2.697, 0.203, 1.776]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.254, 0.041, -0.953]}
        rotation={[1.592, 1.009, -3.029]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.727, 0.063, -0.723]}
        rotation={[0.701, -0.188, -1.564]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.336, 0.065, -1.132]}
        rotation={[2.606, -0.571, 1.253]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.538, 0.094, -1.218]}
        rotation={[2.223, -0.997, 0.857]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.372, 0.08, -1.348]}
        rotation={[0.9, -1.016, -0.754]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.524, 0.1, -1.377]}
        rotation={[1.829, 0.877, 2.711]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.185, 0.077, -1.756]}
        rotation={[0.658, -0.814, -0.947]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.286, 0.094, -1.902]}
        rotation={[0.589, 0.221, -1.686]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.668, 0.024, 0.062]}
        rotation={[1.242, -0.876, -0.601]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.337, 0.038, -0.142]}
        rotation={[1.861, -0.899, 0.178]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.79, 0.004, 0.479]}
        rotation={[2.493, -0.592, 1.107]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.013, 0.009, 0.307]}
        rotation={[1.066, -0.861, -0.786]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.451, 0.038, -0.156]}
        rotation={[2.06, -1, 0.702]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.143, 0.036, -0.658]}
        rotation={[2.605, 0.417, 1.811]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.081, 0.043, -1.232]}
        rotation={[0.47, -0.223, -1.436]}
        scale={[0.049, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.05, 0.038, -1.38]}
        rotation={[2.456, -0.292, 1.186]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.043, 0.058, -1.717]}
        rotation={[0.645, 0.231, -1.809]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.009, 0.064, -2.133]}
        rotation={[2.554, 0.577, 2.007]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.069, -0.018, 0.796]}
        rotation={[2.503, -0.198, 1.27]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.035, -0.008, 0.658]}
        rotation={[2.462, 0.345, 1.759]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.034, 0.011, 0.218]}
        rotation={[0.61, -0.436, -1.398]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.434, -0.003, 0.541]}
        rotation={[0.67, -0.302, -1.295]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.31, 0.003, 0.407]}
        rotation={[0.953, 0.879, -2.4]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.138, 0.008, 0.293]}
        rotation={[2.331, 0.666, 2.212]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.443, -0.008, 0.654]}
        rotation={[0.624, 0.438, -1.755]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.257, 0.014, 0.064]}
        rotation={[1.878, 0.981, 2.825]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.271, 0.026, -0.271]}
        rotation={[2.399, 0.708, 2.201]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.288, 0.019, 0.016]}
        rotation={[0.888, 0.801, -2.193]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.264, 0.034, -0.142]}
        rotation={[1.106, -1.006, -0.48]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.508, 0.012, 0.232]}
        rotation={[1.261, -1.038, -0.267]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.352, 0.029, -0.537]}
        rotation={[2.385, 0.685, 1.937]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.262, 0.031, -0.708]}
        rotation={[2.532, 0.281, 1.521]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.43, 0.028, -0.836]}
        rotation={[0.595, 0.547, -1.976]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.2, 0.032, -1.01]}
        rotation={[2.006, 0.836, 2.443]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.18, 0.032, -1.076]}
        rotation={[2.644, 0.026, 1.698]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.165, 0.033, -1.395]}
        rotation={[2.744, -0.204, 1.498]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.337, 0.029, -1.688]}
        rotation={[0.542, -0.083, -1.364]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.314, 0.031, -1.948]}
        rotation={[2.056, 0.985, 2.492]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.099, 0.055, -2.206]}
        rotation={[0.542, 0.174, -1.542]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.805, 0.049, -0.009]}
        rotation={[0.763, -0.902, -0.801]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.711, 0.042, -0.033]}
        rotation={[2.057, 1.006, 2.748]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.816, 0.039, -0.224]}
        rotation={[0.526, -0.1, -1.458]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.331, 0.029, -0.124]}
        rotation={[0.983, 0.886, -2.299]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.704, 0.034, -0.313]}
        rotation={[2.393, 0.384, 1.759]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.688, 0.029, -0.503]}
        rotation={[1.344, 1.031, -2.857]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.673, 0.027, -0.674]}
        rotation={[1.263, 0.934, -2.842]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.65, 0.027, -0.816]}
        rotation={[1.391, 1.147, -2.974]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[0.532, 0.028, -1.001]}
        rotation={[0.669, -0.301, -1.456]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.786, 0.027, -1.081]}
        rotation={[0.547, 0.252, -1.877]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.513, 0.028, -1.315]}
        rotation={[0.625, -0.439, -1.13]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.398, 0.028, -1.511]}
        rotation={[2.476, -0.593, 1.326]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.538, 0.028, -1.783]}
        rotation={[0.594, 0.311, -1.965]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.451, 0.028, -1.792]}
        rotation={[2.077, -0.764, 0.573]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.445, 0.029, -2.255]}
        rotation={[2.533, 0.662, 1.976]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.136, 0.07, 0.186]}
        rotation={[2.562, 0.543, 2.075]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.027, 0.067, 0.13]}
        rotation={[1.39, -0.954, -0.186]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.104, 0.062, -0.033]}
        rotation={[0.626, -0.475, -1.414]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.118, 0.051, -0.247]}
        rotation={[2.211, -0.862, 0.943]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.434, 0.054, -0.548]}
        rotation={[0.614, -0.471, -1.284]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.373, 0.044, -0.724]}
        rotation={[1.837, -1.152, 0.363]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.167, 0.028, -0.954]}
        rotation={[1.846, 1.047, 2.815]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.033, 0.027, -1.126]}
        rotation={[2.457, -0.636, 1.265]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.034, 0.026, -1.354]}
        rotation={[1.504, -1.212, -0.009]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.862, 0.027, -1.442]}
        rotation={[0.503, -0.165, -1.584]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.754, 0.027, -1.705]}
        rotation={[1.318, 1.099, -2.758]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.622, 0.028, -1.923]}
        rotation={[2.65, -0.415, 1.463]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.691, 0.027, -2.055]}
        rotation={[2.278, -0.829, 0.751]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.398, 0.052, 0.177]}
        rotation={[0.959, -0.827, -0.646]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.607, 0.04, 0.08]}
        rotation={[0.695, -0.009, -1.637]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.466, 0.052, 0.005]}
        rotation={[0.707, 0.726, -2.075]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.87, 0.03, -0.212]}
        rotation={[2.114, 0.922, 2.542]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.981, 0.024, -0.32]}
        rotation={[0.711, -0.002, -1.642]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.076, 0.019, -0.343]}
        rotation={[2.572, -0.487, 1.427]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.999, 0.035, -0.552]}
        rotation={[2.522, -0.75, 1.2]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.131, 0.031, -0.699]}
        rotation={[2.542, 0.629, 2.03]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.604, 0.046, -0.661]}
        rotation={[2.47, -0.74, 1.094]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.965, 0.035, -0.853]}
        rotation={[2.535, 0.361, 1.96]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.565, 0.045, -0.872]}
        rotation={[0.578, -0.625, -1.16]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.737, 0.047, -1]}
        rotation={[2.327, 0.678, 1.933]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.72, 0.041, -1.187]}
        rotation={[0.625, -0.148, -1.465]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.426, 0.031, -1.124]}
        rotation={[0.685, 0.435, -1.82]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.706, 0.033, -1.427]}
        rotation={[2.173, 0.807, 2.222]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.167, 0.026, -1.47]}
        rotation={[0.572, -0.394, -1.434]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.618, 0.024, -1.632]}
        rotation={[1.385, 1.027, -2.787]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.225, 0.025, -1.709]}
        rotation={[2.56, 0.802, 2.055]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.26, 0.025, -1.822]}
        rotation={[1.656, -0.891, 0.039]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.965, 0.026, -1.974]}
        rotation={[1.758, 1.032, 2.985]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.665, 0.009, 0.437]}
        rotation={[2.695, -0.334, 1.541]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.783, 0.045, 0.105]}
        rotation={[1.086, 0.945, -2.733]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.086, 0.026, 0.105]}
        rotation={[1.552, -0.895, -0.107]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.493, 0.018, 0.293]}
        rotation={[1.433, 1.129, -2.995]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.132, 0.033, 0.048]}
        rotation={[0.977, -1.007, -0.65]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.165, 0.036, -0.004]}
        rotation={[0.39, 0.303, -1.607]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.169, 0.036, 0]}
        rotation={[0.703, -0.505, -1.325]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.155, 0.071, -0.244]}
        rotation={[0.88, 0.927, -2.15]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.539, 0.052, -0.131]}
        rotation={[1.549, 1.089, -3.082]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.434, 0.083, -0.39]}
        rotation={[2.352, 0.849, 2.2]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.536, 0.052, -0.134]}
        rotation={[1.083, 0.85, -2.646]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.702, 0.056, -0.306]}
        rotation={[0.971, -0.789, -0.907]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.9, 0.061, -0.353]}
        rotation={[1.221, 0.823, -2.797]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.588, 0.09, -0.532]}
        rotation={[2.141, -0.857, 0.764]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.854, 0.055, -0.395]}
        rotation={[2.543, -0.161, 1.527]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.504, 0.086, -0.437]}
        rotation={[0.519, 0.314, -1.586]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.741, 0.05, -0.5]}
        rotation={[0.777, 0.966, -2.143]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.473, 0.084, -0.658]}
        rotation={[0.514, 0.475, -1.707]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.703, 0.097, -0.702]}
        rotation={[2.286, 0.803, 2.145]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.025, 0.065, -0.721]}
        rotation={[2.576, 0.322, 1.907]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.303, 0.077, -0.689]}
        rotation={[2.636, 0.27, 1.91]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[2.413, 0.035, -0.752]}
        rotation={[2.329, -0.685, 0.94]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.972, 0.068, -0.877]}
        rotation={[1.032, -0.975, -0.647]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.945, 0.075, -1.022]}
        rotation={[2.378, 0.743, 2.3]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.533, 0.1, -0.937]}
        rotation={[0.456, -0.224, -1.329]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.619, 0.103, -0.928]}
        rotation={[2.445, 0.339, 1.861]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.214, 0.057, -1.045]}
        rotation={[1.786, 1.006, 2.94]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.505, 0.064, -1.036]}
        rotation={[0.853, -0.725, -0.987]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.946, 0.106, -1.214]}
        rotation={[2.534, 0.566, 1.786]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.013, 0.124, -1.292]}
        rotation={[2.349, -0.946, 0.827]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.338, 0.167, -1.456]}
        rotation={[2.402, 0.546, 1.975]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.094, 0.097, -1.157]}
        rotation={[1.038, -1.071, -0.609]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.359, 0.091, -1.232]}
        rotation={[2.496, 0.319, 1.802]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.008, 0.152, -1.482]}
        rotation={[0.683, -0.309, -1.376]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.112, 0.07, -1.377]}
        rotation={[1.064, -0.91, -0.813]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.995, 0.062, -1.397]}
        rotation={[0.899, 0.817, -2.214]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.45, 0.109, -1.514]}
        rotation={[0.728, -0.703, -1.012]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.933, 0.15, -1.536]}
        rotation={[0.578, 0.334, -1.667]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.726, 0.032, -1.534]}
        rotation={[1.064, -0.918, -0.571]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.765, 0.037, -1.553]}
        rotation={[2.746, -0.218, 1.495]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.085, 0.066, -1.748]}
        rotation={[1.166, -0.924, -0.584]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.187, 0.067, -1.945]}
        rotation={[0.656, -0.524, -1.281]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.643, 0.025, -1.73]}
        rotation={[2.091, -0.735, 0.568]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.113, 0.05, 1.021]}
        rotation={[0.424, 0.016, -1.617]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.745, 0.097, 0.448]}
        rotation={[1.248, 0.918, -2.867]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.115, 0.049, 0.84]}
        rotation={[2.646, -0.212, 1.452]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[3.288, 0.06, 0.523]}
        rotation={[0.942, -0.798, -0.755]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.164, 0.054, 0.905]}
        rotation={[0.701, -0.842, -0.934]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.917, 0.11, 0.405]}
        rotation={[2.491, -0.607, 1.257]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.976, 0.034, 0.574]}
        rotation={[2.09, 0.874, 2.46]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.386, 0.067, 0.464]}
        rotation={[2.604, 0.508, 1.917]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.76, 0.093, 0.12]}
        rotation={[2.322, 0.64, 1.977]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[3.201, 0.048, 0.21]}
        rotation={[0.538, -0.363, -1.246]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.476, 0.072, 0.275]}
        rotation={[0.497, 0.146, -1.721]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.07, 0.11, 0.062]}
        rotation={[0.785, -0.77, -1.006]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.795, 0.137, -0.2]}
        rotation={[2.476, -0.525, 1.043]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.493, 0.131, -0.015]}
        rotation={[2.716, 0.161, 1.737]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.184, 0.118, 0.066]}
        rotation={[0.526, -0.145, -1.362]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.683, 0.085, -0.141]}
        rotation={[2.518, -0.331, 1.247]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.83, 0.097, -0.362]}
        rotation={[2.403, 0.718, 2.15]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.622, 0.083, -0.164]}
        rotation={[0.616, 0.1, -1.793]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.468, 0.117, -0.21]}
        rotation={[0.759, 0.642, -1.998]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.115, 0.108, -0.368]}
        rotation={[2.546, -0.15, 1.547]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.518, 0.136, -0.543]}
        rotation={[0.624, -0.078, -1.698]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.642, 0.128, -0.364]}
        rotation={[1.264, -1, -0.546]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.454, 0.139, -0.622]}
        rotation={[0.773, 0.768, -2.29]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.774, 0.134, -0.366]}
        rotation={[1.28, 0.986, -2.746]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.724, 0.098, -0.513]}
        rotation={[0.688, 0.431, -1.921]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.941, 0.11, -0.573]}
        rotation={[0.987, -0.865, -0.632]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.401, 0.147, -0.823]}
        rotation={[0.676, 0.571, -1.913]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.848, 0.179, -0.916]}
        rotation={[0.704, -0.881, -0.892]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.862, 0.185, -0.978]}
        rotation={[2.678, -0.449, 1.487]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.084, 0.128, -0.855]}
        rotation={[0.61, -0.259, -1.568]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.85, 0.186, -1.135]}
        rotation={[2.592, 0.423, 1.808]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.692, 0.175, -1.167]}
        rotation={[2.292, 0.879, 2.142]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.155, 0.138, -1.048]}
        rotation={[0.512, -0.203, -1.577]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.804, 0.124, -1.126]}
        rotation={[2.074, -0.82, 0.638]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.406, 0.158, -1.213]}
        rotation={[2.518, -0.631, 1.065]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.588, 0.12, -1.21]}
        rotation={[0.735, 0.641, -2.226]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.019, 0.154, -1.311]}
        rotation={[1.626, -1.017, -0.014]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.763, 0.16, -1.393]}
        rotation={[1.971, 1.047, 2.564]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.387, 0.174, -1.346]}
        rotation={[2.456, 0.697, 2.101]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.46, 0.162, -1.425]}
        rotation={[2.633, 0.194, 1.616]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.471, 0.223, -1.675]}
        rotation={[0.478, 0.08, -1.611]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.671, 0.216, -1.655]}
        rotation={[0.726, -0.873, -0.849]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.359, 0.277, -1.914]}
        rotation={[2.605, -0.252, 1.264]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.193, 0.194, -1.647]}
        rotation={[0.563, 0.187, -1.642]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.041, 0.172, -1.626]}
        rotation={[0.727, 0.614, -2.111]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.234, 0.271, -1.962]}
        rotation={[1.205, 0.915, -2.624]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.053, 0.262, -2.036]}
        rotation={[2.437, -0.091, 1.438]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.305, 0.088, -1.823]}
        rotation={[1.583, -1.027, -0.216]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.95, 0.254, -2.1]}
        rotation={[2.519, 0.538, 1.869]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.005, 0.246, -2.212]}
        rotation={[0.637, -0.298, -1.479]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.368, 0.275, -2.499]}
        rotation={[2.592, 0.754, 2.016]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.691, 0.147, -2.166]}
        rotation={[1.913, 1.011, 2.585]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.384, 0.097, -2.121]}
        rotation={[2.243, 0.864, 2.228]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.405, 0.134, 1.701]}
        rotation={[0.817, 0.829, -2.127]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.074, 0.108, 1.661]}
        rotation={[0.615, 0.614, -1.93]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.152, 0.12, 1.528]}
        rotation={[0.895, 0.744, -2.332]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.446, 0.138, 1.683]}
        rotation={[0.592, -0.259, -1.623]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.5, 0.061, 1.64]}
        rotation={[2.529, -0.453, 1.389]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.596, 0.065, 1.751]}
        rotation={[1.672, -0.968, 0.16]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.031, 0.114, 1.418]}
        rotation={[1.969, -0.864, 0.396]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.739, 0.152, 0.886]}
        rotation={[0.764, 0.557, -2.004]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.195, 0.122, 1.158]}
        rotation={[2.536, 0.172, 1.691]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.35, 0.129, 1.005]}
        rotation={[2.46, -0.365, 1.304]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.239, 0.123, 1.007]}
        rotation={[1.801, -1.157, 0.309]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.876, 0.155, 0.401]}
        rotation={[2.568, 0.132, 1.564]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.669, 0.144, 0.558]}
        rotation={[2.609, -0.671, 1.251]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.356, 0.127, 0.768]}
        rotation={[2.385, 0.694, 1.966]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.903, 0.105, 1.287]}
        rotation={[1.844, -1.017, 0.326]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.404, 0.072, 1.048]}
        rotation={[0.647, -0.348, -1.294]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.401, 0.138, 1.502]}
        rotation={[0.894, 0.939, -2.228]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.347, 0.129, 1.012]}
        rotation={[2.523, -0.37, 1.147]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.558, 0.141, 0.915]}
        rotation={[1.553, -1.025, -0.268]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.132, 0.121, 1.415]}
        rotation={[2.318, -0.588, 0.865]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.419, 0.13, 0.688]}
        rotation={[0.513, -0.025, -1.698]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.848, 0.153, 0.381]}
        rotation={[0.868, -0.897, -0.729]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.604, 0.141, 0.431]}
        rotation={[1.886, 1.049, 2.728]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.243, 0.13, 0.336]}
        rotation={[1.814, 0.908, 2.794]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.653, 0.147, 0.333]}
        rotation={[1.881, 0.994, 2.615]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.963, 0.107, 0.625]}
        rotation={[1.373, -0.963, -0.269]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.745, 0.144, 0.097]}
        rotation={[1.463, 0.892, -3.087]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.646, 0.141, 0.103]}
        rotation={[0.734, -0.221, -1.503]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.831, 0.151, 0.214]}
        rotation={[2.503, 0.823, 2.156]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.179, 0.148, -0.294]}
        rotation={[2.335, -0.902, 0.914]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.203, 0.15, -0.303]}
        rotation={[2.503, 0.018, 1.551]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.111, 0.156, -0.466]}
        rotation={[0.451, -0.411, -1.273]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.468, 0.226, -0.894]}
        rotation={[2.378, 0.925, 2.36]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.218, 0.204, -0.903]}
        rotation={[0.548, 0.534, -1.782]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.58, 0.264, -1.116]}
        rotation={[0.532, 0.553, -1.752]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.222, 0.246, -1.327]}
        rotation={[0.745, -0.63, -1.128]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.072, 0.205, -1.142]}
        rotation={[1.121, -0.806, -0.643]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.881, 0.243, -1.463]}
        rotation={[0.967, 0.795, -2.386]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.417, 0.201, -1.49]}
        rotation={[0.471, 0.598, -1.842]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.8, 0.258, -1.908]}
        rotation={[0.571, -0.296, -1.408]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.611, 0.283, -1.921]}
        rotation={[0.488, 0.23, -1.71]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.772, 0.312, -2.334]}
        rotation={[2.562, 0.317, 1.75]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.805, 0.305, -2.293]}
        rotation={[1.907, -0.982, 0.203]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.55, 0.317, -2.325]}
        rotation={[0.711, 0.335, -1.974]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.503, 0.315, -2.346]}
        rotation={[2.65, -0.363, 1.493]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.162, 0.441, -1.444]}
        rotation={[1.589, -1.043, 0.13]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.169, 0.437, -1.474]}
        rotation={[0.407, -0.266, -1.401]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.981, 0.249, -1.662]}
        rotation={[2.08, -1.089, 0.685]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.966, 0.244, -0.531]}
        rotation={[0.805, 0.605, -2.146]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.187, 0.265, -0.56]}
        rotation={[0.632, -0.835, -0.986]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.33, 0.302, -0.771]}
        rotation={[0.57, 0.207, -1.789]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.255, -0.021, 2.796]}
        rotation={[0.492, -0.224, -1.457]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.514, 0.01, 2.688]}
        rotation={[0.457, -0.284, -1.301]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.19, -0.032, 2.943]}
        rotation={[2.632, 0.052, 1.556]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.68, 0.027, 2.695]}
        rotation={[2.569, 0.543, 1.928]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.662, 0.02, 2.809]}
        rotation={[2.145, 0.653, 2.217]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.221, 0.101, 2.156]}
        rotation={[1.189, 0.987, -2.612]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.228, 0.089, 2.417]}
        rotation={[2.568, -0.356, 1.113]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.038, 0.242, -1.82]}
        rotation={[2.513, 0.312, 1.842]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.934, 0.246, -2.036]}
        rotation={[2.489, -0.284, 1.371]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.196, 0.339, -1.013]}
        rotation={[1.7, 0.919, 2.821]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.64, 0.394, -0.992]}
        rotation={[1.363, -1.206, -0.157]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.349, 0.193, 1.107]}
        rotation={[0.972, 0.948, -2.357]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.524, 0.207, 1.185]}
        rotation={[1.386, 0.895, -3.007]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.452, 0.201, 1.114]}
        rotation={[2.616, -0.393, 1.212]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.63, 0.212, 1.044]}
        rotation={[2.492, -0.478, 1.053]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.549, 0.211, 1.355]}
        rotation={[2.192, 0.827, 2.393]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.836, 0.224, 0.317]}
        rotation={[2.557, -0.608, 1.108]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.769, 0.221, 0.923]}
        rotation={[2.576, 0.46, 1.667]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.551, 0.198, 0.416]}
        rotation={[1.897, 0.938, 2.726]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.714, 0.214, 0.577]}
        rotation={[2.568, -0.477, 1.15]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.714, 0.239, -2.218]}
        rotation={[0.488, 0.018, -1.63]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.929, 0.291, -2.461]}
        rotation={[1.322, 1.07, -2.995]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.449, 0.27, -2.486]}
        rotation={[2.589, 0.648, 1.937]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.565, 0.419, -1.137]}
        rotation={[2.572, -0.479, 1.398]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.307, 0.442, -1.37]}
        rotation={[1.042, -0.831, -0.708]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.512, 0.261, -2.967]}
        rotation={[0.511, 0.124, -1.68]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.792, 0.334, -3.291]}
        rotation={[1.173, 0.963, -2.711]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.688, 0.211, 0.159]}
        rotation={[0.468, 0.075, -1.721]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.904, 0.235, -0.132]}
        rotation={[1.187, 1.01, -2.801]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.13, 0.255, -0.075]}
        rotation={[0.696, 0.767, -2.196]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.989, 0.244, -0.195]}
        rotation={[2.452, -0.065, 1.465]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.385, 0.258, -2.583]}
        rotation={[0.463, 0.261, -1.774]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.604, 0.271, -2.871]}
        rotation={[2.769, 0.027, 1.639]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.2, 0.398, -0.826]}
        rotation={[2.471, 0.734, 2.082]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.033, 0.335, -0.488]}
        rotation={[1.083, -1.067, -0.421]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.101, 0.335, -0.429]}
        rotation={[2.362, -0.875, 0.994]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.273, 0.4, -0.782]}
        rotation={[2.609, -0.44, 1.362]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[7.714, 0.347, -0.933]}
        rotation={[0.513, -0.393, -1.3]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[8.022, 0.42, -1.466]}
        rotation={[2.252, -0.792, 0.793]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.685, 0.382, -1.009]}
        rotation={[2.574, -0.324, 1.351]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.284, 0.321, -0.418]}
        rotation={[2.008, 1.092, 2.756]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.229, 0.345, -0.437]}
        rotation={[2.258, -0.747, 0.853]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.783, 0.409, -1.191]}
        rotation={[0.626, 0.408, -1.775]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.68, 0.449, -1.209]}
        rotation={[1.887, -1.076, 0.302]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[8, 0.297, -1.067]}
        rotation={[2.724, 0.055, 1.614]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.244, 0.215, 0.816]}
        rotation={[0.7, 0.689, -2.203]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.53, 0.238, 0.297]}
        rotation={[1.8, -1.011, 0.421]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.404, 0.224, 1.085]}
        rotation={[1.985, 0.847, 2.579]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.944, 0.171, 3.38]}
        rotation={[2.253, -0.838, 0.767]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.058, 0.11, 2.998]}
        rotation={[2.085, 1.049, 2.623]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.393, 0.136, 2.701]}
        rotation={[0.692, -0.009, -1.634]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.949, 0.248, 3.692]}
        rotation={[0.648, 0.647, -1.807]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.188, 0.104, 2.816]}
        rotation={[0.493, -0.255, -1.519]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.486, 0.047, 3.42]}
        rotation={[0.696, 0.779, -1.921]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.974, 0.102, 3.065]}
        rotation={[2.629, -0.248, 1.591]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.469, 0.201, 2.872]}
        rotation={[0.718, 0.623, -2.035]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.641, 0.168, 2.531]}
        rotation={[2.412, -0.56, 0.917]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.652, 0.263, -0.052]}
        rotation={[2.308, 0.461, 1.922]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.795, 0.296, -0.359]}
        rotation={[0.517, -0.496, -1.146]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.83, 0.227, 0.384]}
        rotation={[2.422, -0.574, 0.902]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.811, 0.236, 0.289]}
        rotation={[0.739, -0.335, -1.334]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.982, 0.301, 1.648]}
        rotation={[2.353, 0.495, 1.946]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.014, 0.24, 1.325]}
        rotation={[2.217, 0.901, 2.246]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.184, 0.283, 1.355]}
        rotation={[0.664, -0.49, -1.453]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.177, 0.283, 1.342]}
        rotation={[1.744, 1.078, 3.002]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.457, 0.335, -3.958]}
        rotation={[0.806, -0.858, -0.987]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.566, 0.53, -3.171]}
        rotation={[1.78, -0.96, 0.312]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.807, 0.515, -3.07]}
        rotation={[2.503, 0.539, 1.796]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.495, 0.524, -3.287]}
        rotation={[0.495, 0.218, -1.598]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.72, 0.498, -3.32]}
        rotation={[0.798, 0.703, -2.248]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.131, 0.411, -2.388]}
        rotation={[0.635, 0.137, -1.685]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.356, 0.4, -2.335]}
        rotation={[0.619, -0.337, -1.583]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.468, 0.399, -2.301]}
        rotation={[1.88, -0.829, 0.286]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.973, 0.413, -2.453]}
        rotation={[2.057, 1.025, 2.515]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.942, 0.452, -2.597]}
        rotation={[2.314, -0.894, 1.003]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[7.235, 0.404, -2.57]}
        rotation={[2.304, 0.645, 2.084]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.408, 0.495, -3.482]}
        rotation={[1.246, -1.048, -0.321]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.491, 0.427, -3.682]}
        rotation={[0.738, 0.678, -2.284]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.766, 0.496, -2.697]}
        rotation={[0.392, -0.317, -1.369]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.767, 0.514, -2.987]}
        rotation={[1.922, 1.027, 2.868]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[8.139, 0.283, -2.075]}
        rotation={[0.676, -0.429, -1.383]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.722, 0.402, -2.144]}
        rotation={[2.673, -0.299, 1.431]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.071, 0.257, -2.29]}
        rotation={[0.909, 0.759, -2.307]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.885, 0.323, -2.263]}
        rotation={[0.628, 0.5, -2.099]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.437, 0.286, -4.134]}
        rotation={[0.471, -0.645, -1.198]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.557, 0.191, -4.528]}
        rotation={[0.489, 0.668, -1.821]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.722, 0.123, -4.682]}
        rotation={[2.54, 0.51, 1.861]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.456, 0.211, -4.599]}
        rotation={[2.5, 0.152, 1.66]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.437, 0.249, -4.37]}
        rotation={[0.613, -0.567, -0.996]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.926, 0.376, -3.436]}
        rotation={[0.705, 0.286, -1.966]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.828, 0.352, -3.533]}
        rotation={[2.489, 0.539, 1.963]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.939, 0.38, -3.434]}
        rotation={[2.412, -0.481, 1.234]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.127, 0.45, -4.051]}
        rotation={[1.048, 1.016, -2.635]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.037, 0.453, -4.069]}
        rotation={[0.971, 0.988, -2.554]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.704, 0.377, -3.644]}
        rotation={[0.615, 0.13, -1.791]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.18, 0.505, -4.307]}
        rotation={[0.748, -0.66, -1.23]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.84, 0.36, -3.678]}
        rotation={[1.959, -0.922, 0.269]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.917, 0.604, -4.434]}
        rotation={[1.707, 1.111, 3.112]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.884, 0.031, -5.045]}
        rotation={[0.626, 0.665, -1.861]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.819, 0.005, -5.27]}
        rotation={[2.304, 0.988, 2.286]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.3, 0.003, -4.593]}
        rotation={[0.524, -0.451, -1.444]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.989, 0.115, -4.344]}
        rotation={[2.441, -0.328, 1.228]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.89, 0.065, -4.824]}
        rotation={[1.391, -0.964, -0.152]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.872, 0.076, -4.775]}
        rotation={[2.574, -0.674, 1.166]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.9, 0.146, -4.284]}
        rotation={[2.304, 0.659, 2.192]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.723, 0.488, -3.368]}
        rotation={[2.429, -0.009, 1.456]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.307, 0.339, -3.456]}
        rotation={[1.15, 0.977, -2.572]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.973, 0.442, -3.348]}
        rotation={[2.32, -0.923, 0.841]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[7.044, 0.407, -3.412]}
        rotation={[0.509, -0.028, -1.525]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.014, 0.366, -3.563]}
        rotation={[2.371, 0.815, 2.341]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.749, 0.162, -3.712]}
        rotation={[2.432, -0.665, 0.929]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[7.154, 0.322, -3.607]}
        rotation={[0.64, 0.596, -1.963]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.371, 0.181, -2.717]}
        rotation={[2.08, 0.975, 2.66]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.419, 0.372, -2.554]}
        rotation={[0.993, -1.018, -0.717]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[7.712, 0.314, -2.583]}
        rotation={[1.655, 1.136, 3.073]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.812, 0.293, -2.647]}
        rotation={[1.174, -0.837, -0.509]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.63, 0.13, -2.679]}
        rotation={[0.57, -0.302, -1.605]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.976, 0.26, -2.703]}
        rotation={[0.991, 0.787, -2.596]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.004, 0.235, -3.068]}
        rotation={[2.539, -0.112, 1.304]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[8.937, 0.066, -2.886]}
        rotation={[0.522, -0.244, -1.313]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.99, 0.454, -2.738]}
        rotation={[0.476, -0.034, -1.654]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[7.882, 0.26, -3.051]}
        rotation={[2.445, 0.067, 1.542]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.973, 0.254, -2.867]}
        rotation={[1.028, -1.04, -0.687]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[8.767, 0.097, -2.902]}
        rotation={[2.506, 0.357, 1.714]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.649, 0.275, -4.028]}
        rotation={[2.6, -0.029, 1.336]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.954, 0.188, -4.088]}
        rotation={[0.547, 0.364, -1.755]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.242, 0.055, -4.352]}
        rotation={[1.323, 1.105, -2.953]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.851, 0.303, -3.836]}
        rotation={[0.883, 0.593, -2.274]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.131, 0.254, -3.812]}
        rotation={[0.736, 0.969, -2.204]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.554, 0.471, -3.534]}
        rotation={[0.861, 0.991, -2.232]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.089, 0.222, -3.924]}
        rotation={[0.501, 0.454, -1.788]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.721, 0.293, -3.938]}
        rotation={[0.547, 0.182, -1.753]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.243, 0.155, -4.017]}
        rotation={[0.716, -0.699, -1.26]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.971, 0.505, -3.104]}
        rotation={[2.551, -0.434, 1.251]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.936, 0.483, -2.875]}
        rotation={[1.714, 0.971, 2.979]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.235, 0.411, -2.969]}
        rotation={[2.656, -0.255, 1.455]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.466, 0.368, -3.156]}
        rotation={[2.429, 0.54, 2.018]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.746, 0.256, -3.382]}
        rotation={[1.588, -1.194, 0.108]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.637, 0.292, -3.345]}
        rotation={[0.673, 0.058, -1.625]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.145, 0.25, -4.969]}
        rotation={[0.768, 0.591, -2.17]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.878, 0.365, -4.406]}
        rotation={[0.613, -0.678, -1.142]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.55, 0.509, -3.692]}
        rotation={[2.2, -0.747, 0.726]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.061, 0.287, -4.884]}
        rotation={[0.695, 0.502, -2.043]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.617, 0.482, -4.071]}
        rotation={[2.491, -0.137, 1.349]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.179, 0.234, -5.078]}
        rotation={[0.884, 0.868, -2.387]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[7.136, 0.5, -1.647]}
        rotation={[0.61, -0.317, -1.359]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.313, 0.506, -1.538]}
        rotation={[0.834, 0.715, -2.204]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.467, 0.485, -1.752]}
        rotation={[2.196, -0.876, 0.64]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.694, 0.475, -2.4]}
        rotation={[0.834, 0.753, -2.125]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.837, 0.491, -2.323]}
        rotation={[1.078, -0.834, -0.7]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.285, 0.425, -3.001]}
        rotation={[2.516, -0.461, 1.005]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.522, 0.479, -2.975]}
        rotation={[2.283, -0.688, 0.973]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.53, 0.51, -3.202]}
        rotation={[2.504, -0.001, 1.511]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.563, 0.514, -3.106]}
        rotation={[2.477, 0.561, 1.748]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.776, 0.484, -1.896]}
        rotation={[0.411, -0.114, -1.505]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.557, 0.482, -1.836]}
        rotation={[0.525, -0.358, -1.494]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.037, 0.462, -2.079]}
        rotation={[1.796, -1.12, 0.229]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.124, 0.442, -2]}
        rotation={[2.551, 0.38, 1.753]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.912, 0.493, -2.014]}
        rotation={[1.917, -1.016, 0.368]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.963, 0.494, -2.667]}
        rotation={[1.828, -0.884, 0.224]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.512, 0.445, -2.861]}
        rotation={[0.614, -0.059, -1.596]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.72, 0.475, -3.688]}
        rotation={[2.467, 0.673, 1.877]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.467, 0.193, -4.69]}
        rotation={[2.551, 0.292, 1.914]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.371, 0.252, -4.43]}
        rotation={[1.252, 1.158, -2.69]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.151, 0.365, -3.946]}
        rotation={[1.911, 1.009, 2.927]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.191, 0.235, -4.987]}
        rotation={[2.218, -0.923, 0.914]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.475, 0.127, -5.09]}
        rotation={[1.074, 1.123, -2.521]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.242, 0.225, -4.87]}
        rotation={[1.22, 0.979, -2.746]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.155, 0.271, -4.637]}
        rotation={[0.627, 0.544, -1.752]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.911, 0.395, -1.847]}
        rotation={[0.621, -0.385, -1.359]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[7.812, 0.397, -1.954]}
        rotation={[2.36, -0.473, 1.113]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.7, 0.413, -1.928]}
        rotation={[2.604, -0.608, 1.369]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.13, 0.508, -2.476]}
        rotation={[0.479, 0.426, -1.791]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.412, 0.503, -2.55]}
        rotation={[0.682, 0.621, -1.973]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.7, 0.532, -3.144]}
        rotation={[1.968, 0.876, 2.613]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.032, 0.48, -3.645]}
        rotation={[2.373, -0.423, 1.152]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.772, 0.484, -2.111]}
        rotation={[0.633, 0.659, -1.986]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.812, 0.472, -2.165]}
        rotation={[0.897, 0.724, -2.293]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.566, 0.478, -2.267]}
        rotation={[1.839, -0.819, 0.26]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.248, 0.493, -2.279]}
        rotation={[2.567, -0.257, 1.44]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.182, 0.493, -2.224]}
        rotation={[0.625, 0.578, -2.012]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.179, 0.52, -2.786]}
        rotation={[0.489, 0.47, -1.742]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.132, 0.519, -2.756]}
        rotation={[2.493, -0.383, 1.152]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.713, 0.529, -3.026]}
        rotation={[2.286, 0.697, 2.115]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.046, 0.53, -3.022]}
        rotation={[0.836, 0.761, -2.32]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.102, 0.421, -3.248]}
        rotation={[2.229, 0.851, 2.135]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.109, 0.426, -3.324]}
        rotation={[0.659, -0.446, -1.432]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.606, 0.458, -2.437]}
        rotation={[2.481, -0.481, 1.197]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.417, 0.402, -2.421]}
        rotation={[1.608, -1.068, 0.204]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.218, 0.364, -2.693]}
        rotation={[2.427, -0.606, 0.905]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.052, 0.404, -1.689]}
        rotation={[2.649, 0.66, 1.944]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.161, 0.432, -1.525]}
        rotation={[2.301, -0.65, 0.814]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.255, 0.271, -1.752]}
        rotation={[0.822, -0.858, -0.81]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.418, 0.316, -1.81]}
        rotation={[0.555, -0.16, -1.505]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.259, 0.3, -1.84]}
        rotation={[1.441, -1.035, -0.236]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.399, 0.325, -1.842]}
        rotation={[0.541, -0.709, -1.215]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.897, 0.317, -2.825]}
        rotation={[0.698, -0.651, -1.148]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.226, 0.434, -3.099]}
        rotation={[2.383, 0.829, 2.055]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.254, 0.399, -2.921]}
        rotation={[0.801, -0.714, -1.069]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.254, 0.302, -1.846]}
        rotation={[1.389, 0.929, -2.863]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.345, 0.348, -2.196]}
        rotation={[2.411, -0.274, 1.259]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.884, 0.488, -1.31]}
        rotation={[1.603, 1.158, -3.113]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.732, 0.505, -1.639]}
        rotation={[2.551, 0.145, 1.508]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.85, 0.504, -1.435]}
        rotation={[1.068, 0.994, -2.574]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.48, 0.427, -4.07]}
        rotation={[2.711, -0.218, 1.567]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.232, 0.457, -3.472]}
        rotation={[0.648, -0.512, -1.214]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.531, 0.496, -3.866]}
        rotation={[2.341, -0.808, 1.124]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.69, 0.451, -4.361]}
        rotation={[1.265, -1.036, -0.312]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.674, 0.454, -4.724]}
        rotation={[2.566, 0.782, 2.058]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.594, 0.46, -4.58]}
        rotation={[2.185, 0.93, 2.362]}
        scale={[0.049, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.256, 0.445, -3.839]}
        rotation={[2.226, -0.713, 0.687]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.288, 0.428, -3.851]}
        rotation={[1.285, 1.064, -2.912]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.332, 0.214, -3.359]}
        rotation={[0.85, -0.838, -0.87]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.612, 0.351, -3.603]}
        rotation={[0.627, -0.021, -1.62]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.827, 0.547, -4.223]}
        rotation={[2.491, 0.59, 2.155]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.309, 0.211, -3.38]}
        rotation={[2.474, 0.704, 2.122]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.272, 0.42, -4.028]}
        rotation={[1.329, -0.92, -0.387]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.625, 0.543, -4.315]}
        rotation={[2.53, 0.393, 1.631]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.574, 0.525, -4.272]}
        rotation={[0.566, 0.433, -1.852]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.297, 0.292, -3.676]}
        rotation={[1.132, -1.023, -0.33]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.569, 0.465, -4.109]}
        rotation={[2.334, -0.624, 0.89]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.81, 0.273, -2.588]}
        rotation={[2.763, 0.006, 1.6]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.168, 0.235, -2.697]}
        rotation={[1.976, -0.886, 0.298]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.232, 0.172, 0.239]}
        rotation={[2.54, -0.555, 1.368]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[5.186, 0.169, 0.244]}
        rotation={[2.51, 0.509, 1.967]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.613, 0.2, -0.092]}
        rotation={[1.856, -1.022, 0.432]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.52, 0.19, 0.084]}
        rotation={[2.118, 0.906, 2.583]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.223, 0.178, -3.014]}
        rotation={[1.593, -1.168, 0.036]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.415, 0.223, -3.228]}
        rotation={[2.685, -0.273, 1.46]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.433, 0.231, -3.216]}
        rotation={[2.537, -0.229, 1.237]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.118, 0.355, -1.112]}
        rotation={[2.307, 0.574, 2.006]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.77, 0.379, -1.37]}
        rotation={[0.529, 0.222, -1.891]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.187, 0.369, -1.119]}
        rotation={[1.806, 1.074, 2.971]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.086, 0.288, -2.326]}
        rotation={[2.576, 0.423, 1.788]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.957, 0.3, -2.358]}
        rotation={[2.476, 0.067, 1.546]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.286, 0.267, -2.391]}
        rotation={[0.683, -0.591, -1.005]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.835, 0.16, 1.084]}
        rotation={[0.623, 0.698, -2.056]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.715, 0.159, 1.618]}
        rotation={[2.618, -0.148, 1.481]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.836, 0.157, 0.852]}
        rotation={[0.869, -0.855, -0.71]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.13, 0.179, 1.089]}
        rotation={[1.143, 0.962, -2.816]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.938, 0.168, 1.146]}
        rotation={[2.095, 1.058, 2.536]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.096, 0.173, 0.755]}
        rotation={[1.605, 1.152, -3.058]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.109, 0.174, 0.805]}
        rotation={[0.602, -0.127, -1.511]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.161, 0.179, 0.926]}
        rotation={[0.585, -0.41, -1.187]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.203, 0.182, 0.96]}
        rotation={[1.176, 0.828, -2.708]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.725, 0.274, -1.058]}
        rotation={[0.548, 0.07, -1.473]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.002, 0.273, -0.912]}
        rotation={[0.737, -0.799, -1.1]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.067, 0.222, -1.716]}
        rotation={[2.505, -0.38, 1.081]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.184, 0.243, -2.05]}
        rotation={[0.81, -0.639, -1.113]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.554, 0.233, -2.137]}
        rotation={[0.78, 0.891, -2.21]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.265, 0.242, -2.085]}
        rotation={[2.245, 0.976, 2.279]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.207, -0.009, 2.479]}
        rotation={[1.376, 1.011, -3.136]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.054, -0.013, 2.413]}
        rotation={[0.603, 0.854, -2.009]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.353, 0.023, 2.197]}
        rotation={[2.464, 0.817, 2.043]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.244, -0.016, 2.619]}
        rotation={[2.261, 0.84, 2.416]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.225, -0.017, 2.613]}
        rotation={[2.536, -0.36, 1.086]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.691, 0.046, 2.263]}
        rotation={[0.54, 0.135, -1.824]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.886, 0.073, 2.11]}
        rotation={[0.656, -0.635, -1.038]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[5.453, 0.173, -0.278]}
        rotation={[2.719, -0.557, 1.402]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.442, 0.175, -0.372]}
        rotation={[1.546, 0.927, -3.116]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.94, 0.243, -0.743]}
        rotation={[2.604, -0.01, 1.354]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.732, 0.222, -0.584]}
        rotation={[0.771, 0.428, -2.083]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.332, 0.341, -1.463]}
        rotation={[2.113, 0.885, 2.313]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.883, 0.25, -1.474]}
        rotation={[2.64, -0.251, 1.56]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.588, 0.372, -1.441]}
        rotation={[0.864, -1.025, -0.739]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.35, 0.246, -1.64]}
        rotation={[0.863, -0.966, -0.861]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.918, 0.246, 1.265]}
        rotation={[2.578, -0.287, 1.56]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.027, 0.238, 0.824]}
        rotation={[0.633, 0.21, -1.802]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.043, 0.237, 0.577]}
        rotation={[1.251, 0.867, -2.868]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.458, 0.27, -0.183]}
        rotation={[2.449, 0.394, 1.791]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.577, 0.31, -0.441]}
        rotation={[2.676, -0.188, 1.434]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.613, 0.333, -0.648]}
        rotation={[0.518, -0.458, -1.158]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.619, 0.034, 3.138]}
        rotation={[2.498, -0.273, 1.442]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.354, -0.002, 3.226]}
        rotation={[1.107, 0.887, -2.754]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.68, 0.036, 3.023]}
        rotation={[1.456, 1.057, 3.112]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.48, 0.01, 3.107]}
        rotation={[1.354, -0.859, -0.33]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.096, 0.088, 2.823]}
        rotation={[0.689, -0.146, -1.498]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.333, 0.263, -0.058]}
        rotation={[2.191, 0.848, 2.412]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.112, 0.233, 0.371]}
        rotation={[0.818, 0.639, -2.214]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.379, 0.233, 0.339]}
        rotation={[1.356, 1.022, -3.112]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.264, 0.217, 0.629]}
        rotation={[2.461, -0.689, 1.258]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.664, 0.374, -0.879]}
        rotation={[2.561, 0.636, 1.947]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.078, 0.437, -1.062]}
        rotation={[2.056, -0.898, 0.468]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.213, 0.423, -0.969]}
        rotation={[2.383, -0.659, 1.027]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.059, 0.399, -0.871]}
        rotation={[2.541, -0.185, 1.392]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.166, 0.452, -1.121]}
        rotation={[2.526, 0.384, 1.791]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.36, 0.197, 1.781]}
        rotation={[0.769, -0.615, -1.174]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.446, 0.215, 1.936]}
        rotation={[0.793, 0.68, -2.04]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.562, 0.222, 1.8]}
        rotation={[0.823, -0.787, -1.167]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.623, 0.225, 1.723]}
        rotation={[1.077, -0.989, -0.627]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.209, 0.105, 2.03]}
        rotation={[0.673, 0.17, -1.731]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.144, 0.099, 2.048]}
        rotation={[2.151, 0.903, 2.236]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.617, 0.146, 1.738]}
        rotation={[0.78, -0.824, -0.959]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.943, 0.185, 2.307]}
        rotation={[2.709, 0.078, 1.733]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.697, 0.223, 2.685]}
        rotation={[0.45, -0.069, -1.455]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.714, 0.16, 2.433]}
        rotation={[2.109, 0.941, 2.459]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.71, 0.333, 2.087]}
        rotation={[1.789, 1.09, 2.996]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.824, 0.321, 1.942]}
        rotation={[1.346, -0.988, -0.118]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.697, 0.237, 2.738]}
        rotation={[0.672, 0.153, -1.805]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.526, 0.285, 2.109]}
        rotation={[1.974, 1.036, 2.593]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.813, 0.154, 1.797]}
        rotation={[2.144, -1.019, 0.719]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.48, 0.125, 2.015]}
        rotation={[2.625, -0.078, 1.581]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.985, 0.168, 1.795]}
        rotation={[0.61, 0.253, -1.899]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.163, 0.181, 1.71]}
        rotation={[0.856, 0.721, -2.363]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.386, 0.201, 1.484]}
        rotation={[0.577, 0.454, -2.032]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.559, 0.209, 1.527]}
        rotation={[1.208, -0.808, -0.625]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.02, 0.016, 1.817]}
        rotation={[1.603, -0.927, -0.096]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.326, 0.032, 2.022]}
        rotation={[1.235, 0.838, -2.739]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.244, 0.048, 1.471]}
        rotation={[0.69, -0.009, -1.682]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.326, 0.05, 1.587]}
        rotation={[1.503, 1.031, -3.133]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.688, 0.064, 1.942]}
        rotation={[0.673, -0.586, -1.252]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.873, -0.008, 2.099]}
        rotation={[0.559, -0.797, -1.074]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.698, 0.018, 0.653]}
        rotation={[0.911, -0.901, -0.687]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.532, 0.035, 0.25]}
        rotation={[2.39, 0.694, 2.14]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.078, 0.066, 0.232]}
        rotation={[0.582, -0.706, -1.223]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.148, -0.04, 3.352]}
        rotation={[1.396, 0.992, -2.942]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.262, 0.036, 3.637]}
        rotation={[0.86, 0.821, -2.203]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.335, 0.076, 3.711]}
        rotation={[2.522, -0.612, 1.142]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.328, 0.065, 3.677]}
        rotation={[0.793, -0.714, -0.957]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.432, 0.045, 3.476]}
        rotation={[0.673, -0.53, -1.281]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.621, 0.222, 3.986]}
        rotation={[0.773, 0.638, -2.079]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.698, 0.272, 4.118]}
        rotation={[2.616, 0.502, 1.965]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.257, 0.132, 4.051]}
        rotation={[1.057, 0.9, -2.736]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.441, 0.2, 4.123]}
        rotation={[0.824, -0.676, -1.028]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.359, 0.177, 4.125]}
        rotation={[1.467, -0.923, -0.272]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.082, -0.049, 3.419]}
        rotation={[1.454, 1.008, -3.066]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.097, -0.062, 3.426]}
        rotation={[1.65, -0.953, -0.039]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.849, -0.026, 3.885]}
        rotation={[0.567, -0.261, -1.301]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.686, 0.04, 4.339]}
        rotation={[1.817, -0.998, 0.17]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.786, 0.029, 4.177]}
        rotation={[2.616, -0.256, 1.432]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.328, 0.241, 4.459]}
        rotation={[2.397, -0.604, 0.921]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.191, 0.187, 4.381]}
        rotation={[2.595, 0.436, 1.802]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.122, 0.19, 4.477]}
        rotation={[2.509, 0.664, 2.105]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.23, 0.295, 4.968]}
        rotation={[1.039, -0.79, -0.76]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.939, 0.193, 4.839]}
        rotation={[0.523, 0.667, -1.862]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.09, 0.234, 4.821]}
        rotation={[1.696, -1.015, -0.07]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.263, 0.279, 4.796]}
        rotation={[1.507, -1.041, -0.047]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.655, -0.048, 4.027]}
        rotation={[2.562, 0.07, 1.52]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.594, 0.104, 4.967]}
        rotation={[0.585, 0.409, -1.856]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.863, 0.187, 4.956]}
        rotation={[2.57, -0.457, 1.318]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.603, 0.089, 4.831]}
        rotation={[1.118, -0.962, -0.574]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.737, 0.223, 5.557]}
        rotation={[0.602, -0.357, -1.327]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.784, 0.196, 5.215]}
        rotation={[0.519, 0.001, -1.655]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.826, 0.211, 5.226]}
        rotation={[2.497, 0.552, 2.041]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.08, 0.045, 4.809]}
        rotation={[0.846, -0.886, -0.693]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.763, 0.059, 4.948]}
        rotation={[2.555, -0.005, 1.335]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.74, 0.061, 4.971]}
        rotation={[0.677, 0.665, -2.094]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.292, 0.091, 5.168]}
        rotation={[0.506, -0.005, -1.56]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.47, 0.125, 5.342]}
        rotation={[0.6, -0.649, -1.028]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.427, 0.132, 5.375]}
        rotation={[2.087, 0.73, 2.322]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[2.047, 0.064, 5.011]}
        rotation={[2.541, -0.072, 1.373]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.207, 0.112, 5.242]}
        rotation={[0.629, 0.603, -2.149]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.788, 0.135, 5.372]}
        rotation={[1.013, 0.744, -2.442]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.224, 0.156, 5.447]}
        rotation={[2.702, -0.311, 1.498]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.234, 0.121, 5.279]}
        rotation={[2.452, -0.621, 0.946]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.756, 0.143, 5.411]}
        rotation={[0.437, -0.287, -1.438]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.458, 0.152, 5.414]}
        rotation={[2.718, -0.263, 1.481]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.967, 0.176, 5.799]}
        rotation={[0.585, 0.389, -1.76]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.374, 0.2, 5.804]}
        rotation={[2.606, 0.663, 1.989]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.902, 0.18, 6.111]}
        rotation={[1.414, -1.052, -0.281]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.633, 0.149, 5.468]}
        rotation={[2.26, 0.894, 2.315]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.919, 0.171, 5.663]}
        rotation={[1.252, -0.992, -0.325]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.815, 0.17, 5.885]}
        rotation={[0.477, 0.251, -1.728]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.142, -0.012, 4.452]}
        rotation={[2.355, -0.478, 0.974]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.999, 0.002, 4.527]}
        rotation={[0.556, -0.257, -1.29]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[1.916, 0.009, 4.566]}
        rotation={[1.605, -1, -0.154]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.246, 0.008, 4.556]}
        rotation={[2.593, 0.128, 1.77]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.464, 0.015, 4.586]}
        rotation={[2.474, -0.108, 1.338]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.131, 0.067, 5.026]}
        rotation={[0.447, -0.117, -1.581]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.036, 0.041, 4.774]}
        rotation={[1.012, -1.12, -0.553]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.71, 0.022, 4.668]}
        rotation={[0.631, 0.462, -1.974]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.057, 0.03, 4.697]}
        rotation={[2.41, 0.843, 2.115]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.073, 0.063, 5.002]}
        rotation={[2.32, -0.465, 1.035]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.294, 0.118, 5.353]}
        rotation={[0.601, 0.526, -1.887]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.124, 0.092, 5.238]}
        rotation={[2.675, -0.39, 1.328]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.768, 0.066, 5.522]}
        rotation={[0.859, -0.531, -1.174]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.835, 0.084, 5.644]}
        rotation={[1.22, -1.001, -0.451]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.129, 0.114, 5.556]}
        rotation={[2.551, 0.058, 1.684]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.464, 0.141, 5.553]}
        rotation={[0.673, -0.678, -0.995]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.481, 0.142, 5.553]}
        rotation={[2.605, 0.321, 1.756]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.192, 0.134, 6.131]}
        rotation={[1.003, 0.897, -2.524]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.544, 0.152, 5.865]}
        rotation={[0.982, -1.018, -0.713]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.054, 0.123, 6.028]}
        rotation={[0.502, -0.446, -1.381]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.48, 0.146, 5.777]}
        rotation={[2.537, 0.368, 1.87]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.713, 0.17, 6.205]}
        rotation={[0.88, 0.529, -2.223]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.866, 0.141, 6.475]}
        rotation={[1.1, -0.828, -0.763]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.204, 0.139, 6.213]}
        rotation={[0.534, -0.202, -1.574]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.411, 0.178, 6.559]}
        rotation={[2.044, 0.941, 2.636]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.007, 0.131, 6.254]}
        rotation={[1.534, -1.112, -0.045]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.1, 0.141, 6.312]}
        rotation={[1.757, 1.091, 2.835]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.037, 0.176, 6.809]}
        rotation={[0.556, -0.272, -1.358]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.829, 0.13, 6.361]}
        rotation={[0.561, -0.323, -1.461]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.925, -0.005, 4.814]}
        rotation={[0.834, -0.755, -1.15]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.864, 0.03, 5.089]}
        rotation={[2.102, -0.909, 0.51]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.537, 0.037, 5.565]}
        rotation={[2.145, 0.871, 2.211]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.014, 0.071, 5.842]}
        rotation={[1.337, 1.071, -2.977]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.186, 0.054, 5.784]}
        rotation={[2.294, 0.827, 2.395]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.463, 0.142, 6.355]}
        rotation={[2.18, -0.765, 0.638]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.374, 0.089, 6.03]}
        rotation={[2.363, -0.86, 1.081]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.178, 0.138, 6.401]}
        rotation={[2.174, -0.867, 0.679]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.401, 0.139, 6.341]}
        rotation={[0.478, 0.156, -1.745]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.108, 0.105, 6.064]}
        rotation={[1.31, -0.875, -0.367]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.028, 0.112, 6.169]}
        rotation={[2.117, -0.987, 0.663]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.531, 0.153, 6.599]}
        rotation={[2.57, 0.586, 1.898]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.156, 0.169, 6.674]}
        rotation={[0.78, -0.804, -0.859]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.249, 0.154, 6.587]}
        rotation={[1.264, 0.988, -2.946]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.651, 0.179, 6.828]}
        rotation={[0.69, 0.694, -2.027]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.723, 0.145, 6.555]}
        rotation={[0.667, -0.162, -1.452]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.495, 0.172, 6.758]}
        rotation={[2.644, 0.171, 1.864]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.779, 0.146, 6.567]}
        rotation={[0.813, 0.88, -2.105]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.664, 0.161, 6.679]}
        rotation={[2.168, -1.002, 0.79]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.445, 0.107, 6.203]}
        rotation={[0.588, 0.153, -1.669]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.287, 0.174, 6.778]}
        rotation={[2.473, -0.11, 1.428]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.009, 0.163, 7.047]}
        rotation={[0.655, 0.173, -1.867]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.132, 0.171, 6.861]}
        rotation={[1.501, -1.041, -0.224]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.291, 0.166, 6.907]}
        rotation={[1.348, 1.03, -3.015]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.479, 0.177, 6.914]}
        rotation={[0.681, 0.85, -1.989]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.072, 0.158, 7.151]}
        rotation={[2.31, -0.646, 0.99]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.11, 0.006, 5.589]}
        rotation={[0.816, 0.823, -2.385]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.103, 0.023, 5.681]}
        rotation={[0.687, 0.335, -1.908]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.348, 0.028, 5.713]}
        rotation={[0.661, 0.016, -1.573]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.352, 0.063, 5.811]}
        rotation={[0.816, -0.717, -1.067]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.442, 0.088, 5.98]}
        rotation={[0.499, -0.021, -1.65]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.885, 0.126, 6.249]}
        rotation={[1.945, 1.16, 2.782]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.336, 0.107, 6.164]}
        rotation={[0.564, -0.653, -1.187]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.107, 0.121, 6.25]}
        rotation={[2.28, -0.66, 0.758]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.622, 0.141, 6.344]}
        rotation={[1.132, 0.832, -2.701]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.639, 0.149, 6.442]}
        rotation={[1.834, -1.032, 0.209]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.262, 0.115, 6.229]}
        rotation={[1.423, -1.179, -0.113]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.723, 0.16, 6.579]}
        rotation={[1.052, -1.025, -0.704]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.001, 0.156, 6.515]}
        rotation={[1.425, 1.042, -2.873]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.561, 0.144, 6.358]}
        rotation={[0.532, 0.392, -1.633]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.806, 0.082, 5.974]}
        rotation={[0.666, -0.284, -1.484]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.633, 0.167, 6.828]}
        rotation={[1.084, -0.85, -0.669]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.505, 0.163, 6.929]}
        rotation={[1.693, -0.922, 0.074]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.365, 0.161, 6.996]}
        rotation={[2.153, -0.929, 0.529]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.618, 0.175, 6.527]}
        rotation={[1.681, 1.065, 3.012]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.244, 0.124, 7.204]}
        rotation={[2.749, 0.093, 1.684]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.321, 0.148, 7.238]}
        rotation={[0.577, -0.598, -1.299]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.803, 0.151, 7.048]}
        rotation={[0.61, -0.622, -1.015]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.278, 0.14, 7.333]}
        rotation={[0.629, -0.023, -1.611]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.497, 0.156, 6.787]}
        rotation={[2.057, 0.9, 2.665]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.627, 0.132, 7.316]}
        rotation={[0.7, 0.342, -2.036]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.031, 0.143, 7.074]}
        rotation={[1.941, 0.927, 2.485]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.148, 0.007, 5.669]}
        rotation={[2.571, -0.348, 1.366]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.031, 0.038, 5.752]}
        rotation={[0.728, -0.85, -0.979]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.751, 0.099, 5.92]}
        rotation={[1.401, 0.929, -2.991]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.921, 0.074, 5.851]}
        rotation={[2.143, 0.82, 2.431]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.654, 0.093, 5.539]}
        rotation={[1.266, -1, -0.512]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.459, 0.115, 5.953]}
        rotation={[0.814, 0.576, -2.117]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.113, 0.157, 6.802]}
        rotation={[0.654, -0.712, -1.038]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.344, 0.165, 6.537]}
        rotation={[1.217, 0.981, -2.964]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.549, 0.032, 5.273]}
        rotation={[2.622, 0.532, 1.85]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.511, 0.035, 5.332]}
        rotation={[0.739, 0.711, -2.228]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.597, 0.08, 5.545]}
        rotation={[2.406, 0.774, 2.14]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.394, 0.483, 5.195]}
        rotation={[2.615, 0.7, 1.954]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.481, 0.468, 4.969]}
        rotation={[0.922, 0.697, -2.446]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.67, 0.449, 4.72]}
        rotation={[1.06, -0.834, -0.747]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.747, 0.451, 4.754]}
        rotation={[0.774, 0.493, -2.172]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.822, 0.469, 5.014]}
        rotation={[2.216, -0.739, 0.709]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.366, 0.455, 5.606]}
        rotation={[1.969, -0.945, 0.468]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.571, 0.473, 5.317]}
        rotation={[0.959, 0.87, -2.639]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.407, 0.432, 5.87]}
        rotation={[2.517, -0.023, 1.547]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.618, 0.453, 5.393]}
        rotation={[0.735, -0.87, -0.99]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.664, 0.214, 4.376]}
        rotation={[2.264, -0.644, 0.775]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.403, 0.386, 4.515]}
        rotation={[2.541, 0.815, 2.11]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.387, 0.383, 4.512]}
        rotation={[2.574, -0.419, 1.42]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.853, 0.236, 4.327]}
        rotation={[2.119, 0.991, 2.438]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.003, 0.451, 4.484]}
        rotation={[0.55, -0.451, -1.367]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.174, 0.452, 4.195]}
        rotation={[1.237, -1.031, -0.235]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.428, 0.452, 3.974]}
        rotation={[2.534, -0.771, 1.13]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.467, 0.459, 4.362]}
        rotation={[0.626, -0.689, -1.13]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.347, 0.454, 4.132]}
        rotation={[1.019, 0.803, -2.554]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.412, 0.45, 3.904]}
        rotation={[2.676, -0.06, 1.459]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.185, 0.456, 4.264]}
        rotation={[2.611, 0.127, 1.502]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.775, 0.445, 5.49]}
        rotation={[0.464, -0.306, -1.402]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.405, 0.464, 4.843]}
        rotation={[2.57, -0.507, 1.228]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.224, 0.458, 5.032]}
        rotation={[2.322, -0.55, 0.95]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.32, 0.443, 5.112]}
        rotation={[1.965, 0.928, 2.559]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.655, 0.14, 3.889]}
        rotation={[0.862, 0.744, -2.232]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.825, 0.203, 4.225]}
        rotation={[0.441, -0.245, -1.502]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.216, 0.261, 3.888]}
        rotation={[0.868, -0.859, -0.894]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.362, 0.331, 4.374]}
        rotation={[1.168, -0.962, -0.386]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.078, 0.222, 3.766]}
        rotation={[2.461, -0.516, 0.968]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.735, 0.181, 4.195]}
        rotation={[0.812, -0.766, -1.037]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.167, 0.22, 3.494]}
        rotation={[2.244, -0.782, 0.921]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.467, 0.342, 4.23]}
        rotation={[0.553, 0.345, -1.94]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.213, 0.232, 3.523]}
        rotation={[0.469, 0.501, -1.691]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.518, 0.32, 3.8]}
        rotation={[2.608, -0.147, 1.277]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.073, 0.189, 3.357]}
        rotation={[2.375, -0.872, 0.877]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.315, 0.282, 3.883]}
        rotation={[2.381, -0.586, 1.077]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.08, 0.22, 3.739]}
        rotation={[1.089, 0.816, -2.55]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.125, 0.272, 4.275]}
        rotation={[2.581, -0.291, 1.256]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.781, 0.353, 3.701]}
        rotation={[1.908, -0.973, 0.549]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.763, 0.357, 3.764]}
        rotation={[0.804, 0.765, -2.203]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.773, 0.369, 3.874]}
        rotation={[2.325, -0.854, 1.008]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.316, 0.22, 3.084]}
        rotation={[2.722, -0.533, 1.42]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.655, 0.313, 3.488]}
        rotation={[2.472, -0.156, 1.418]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.97, 0.376, 3.635]}
        rotation={[0.796, -0.772, -0.8]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.115, 0.402, 3.663]}
        rotation={[1.834, 0.85, 2.658]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.441, 0.276, 3.458]}
        rotation={[2.095, -0.855, 0.482]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.921, 0.364, 3.585]}
        rotation={[2.181, 0.78, 2.378]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.016, 0.036, 5.635]}
        rotation={[2.415, 0.299, 1.738]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.142, 0.014, 5.453]}
        rotation={[0.658, -0.337, -1.281]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.258, 0.068, 5.697]}
        rotation={[1.532, 0.933, 3.093]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.417, 0.049, 5.497]}
        rotation={[0.656, -0.821, -1]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.923, 0.136, 6.426]}
        rotation={[2.069, -1.01, 0.582]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.956, 0.126, 6.429]}
        rotation={[0.799, -0.702, -0.933]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.857, 0.145, 7.013]}
        rotation={[0.52, 0.219, -1.748]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.684, 0.135, 7.09]}
        rotation={[0.551, 0.286, -1.817]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.57, 0.127, 7.117]}
        rotation={[1.084, -1.088, -0.495]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.922, 0.125, 6.677]}
        rotation={[0.521, 0.223, -1.737]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.794, 0.144, 6.308]}
        rotation={[2.435, -0.696, 1.058]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.369, 0.087, 5.762]}
        rotation={[2.112, 1.118, 2.594]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.372, 0.097, 5.817]}
        rotation={[2.496, 0.544, 1.915]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.964, 0.05, 4.941]}
        rotation={[2.327, 0.652, 2.114]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.084, 0.124, 5.033]}
        rotation={[0.437, 0.212, -1.618]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.203, 0.086, 4.551]}
        rotation={[0.504, -0.022, -1.394]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.457, 0.212, 4.753]}
        rotation={[2.481, -0.44, 1.265]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.5, 0.168, 4.457]}
        rotation={[2.653, -0.251, 1.349]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.843, 0.33, 4.776]}
        rotation={[0.669, -0.218, -1.419]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.571, 0.241, 4.733]}
        rotation={[2.317, 0.965, 2.404]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.849, 0.131, 5.502]}
        rotation={[1.858, 1.027, 3]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.777, 0.113, 5.565]}
        rotation={[1.571, -0.967, 0.07]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.226, 0.249, 5.402]}
        rotation={[0.578, 0.028, -1.77]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.687, 0.199, 6.184]}
        rotation={[0.582, 0.536, -1.886]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.752, 0.221, 6.343]}
        rotation={[2.591, 0.35, 1.839]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.685, 0.209, 6.336]}
        rotation={[0.625, 0.408, -1.722]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.047, 0.259, 6.078]}
        rotation={[2.557, -0.257, 1.383]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.629, 0.194, 6.272]}
        rotation={[0.646, 0.068, -1.666]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.358, 0.321, 6.068]}
        rotation={[2.293, 0.802, 2.354]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.099, 0.439, 5.425]}
        rotation={[2.312, 0.562, 1.944]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.377, 0.318, 5.959]}
        rotation={[0.617, 0.076, -1.705]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.396, 0.292, 5.493]}
        rotation={[0.428, 0.161, -1.62]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.592, 0.367, 6.003]}
        rotation={[0.742, 0.998, -2.137]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.321, 0.269, 5.396]}
        rotation={[1.054, 0.945, -2.576]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.433, 0.324, 5.869]}
        rotation={[0.62, 0.61, -2.026]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.084, 0.449, 5.636]}
        rotation={[1.326, 1.002, -3.114]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.377, 0.276, 5.315]}
        rotation={[2.478, 0.483, 1.728]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.855, 0.382, 5.365]}
        rotation={[2.215, -0.845, 0.907]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.02, 0.438, 5.789]}
        rotation={[1.139, 0.888, -2.558]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.083, 0.448, 5.724]}
        rotation={[2.371, -0.376, 1.11]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.788, 0.401, 6.018]}
        rotation={[0.794, 0.848, -2.125]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.831, 0.105, 5.431]}
        rotation={[2.501, -0.57, 1.381]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.214, 0.226, 5.216]}
        rotation={[2.63, 0.45, 1.846]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.798, 0.333, 4.858]}
        rotation={[1.85, 0.918, 2.592]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.529, 0.281, 4.996]}
        rotation={[0.372, 0.054, -1.519]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.214, 0.442, 4.941]}
        rotation={[0.696, 0.528, -1.956]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.803, 0.358, 5.097]}
        rotation={[2.44, 0.685, 2.201]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.65, 0.332, 5.265]}
        rotation={[1.986, 0.911, 2.668]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.07, 0.414, 5.04]}
        rotation={[0.483, 0.397, -1.748]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.627, 0.323, 5.176]}
        rotation={[0.716, -0.797, -0.87]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.34, 0.437, 5.138]}
        rotation={[2.524, 0.335, 1.66]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.833, 0.331, 6.638]}
        rotation={[0.608, 0.737, -1.958]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.394, 0.434, 5.127]}
        rotation={[2.536, -0.06, 1.394]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.815, 0.323, 6.736]}
        rotation={[1.233, 1.077, -2.593]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.824, 0.311, 6.853]}
        rotation={[0.456, 0.56, -1.76]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.775, 0.419, 5.781]}
        rotation={[1.316, -0.919, -0.29]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.712, 0.361, 6.431]}
        rotation={[1.838, 1.019, 2.952]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.042, 0.394, 5.821]}
        rotation={[0.54, -0.361, -1.304]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.798, 0.392, 6.037]}
        rotation={[2.403, 0.614, 2.179]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.884, 0.301, 6.913]}
        rotation={[2.614, -0.057, 1.379]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.448, 0.398, 6.104]}
        rotation={[0.844, -0.803, -0.869]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.29, 0.3, 6.964]}
        rotation={[2.108, -0.897, 0.507]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.595, 0.338, 6.635]}
        rotation={[1.368, -0.842, -0.386]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.041, 0.248, 7.418]}
        rotation={[0.651, -0.365, -1.376]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.955, 0.248, 7.415]}
        rotation={[0.485, -0.014, -1.693]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.322, 0.27, 7.231]}
        rotation={[2.395, -0.647, 0.996]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.523, 0.377, 6.291]}
        rotation={[2.383, -0.501, 0.958]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.497, 0.411, 5.989]}
        rotation={[1.76, -1.121, 0.358]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.384, 0.332, 6.688]}
        rotation={[0.529, 0.16, -1.488]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.444, 0.375, 6.307]}
        rotation={[1.364, -1.023, -0.369]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.486, 0.346, 6.56]}
        rotation={[2.342, -0.763, 0.803]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.702, 0.19, 6.867]}
        rotation={[0.67, -0.152, -1.62]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.84, 0.179, 7.463]}
        rotation={[2.683, -0.097, 1.62]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.689, 0.129, 7.796]}
        rotation={[0.604, 0.167, -1.817]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.844, 0.226, 6.732]}
        rotation={[2.599, 0.452, 1.785]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.825, 0.238, 6.491]}
        rotation={[2.589, -0.237, 1.299]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.804, 0.158, 7.673]}
        rotation={[2.279, 0.902, 2.225]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.817, 0.198, 7.085]}
        rotation={[2.617, -0.206, 1.575]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.623, 0.181, 6.777]}
        rotation={[2.558, 0.407, 1.868]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.543, 0.175, 6.631]}
        rotation={[2.556, -0.667, 1.29]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.34, 0.11, 8.212]}
        rotation={[2.689, 0.392, 1.737]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.454, 0.121, 7.912]}
        rotation={[2.2, 0.655, 2.122]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.593, 0.109, 8.241]}
        rotation={[2.624, -0.426, 1.247]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.592, 0.134, 7.525]}
        rotation={[2.546, 0.592, 1.838]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.645, 0.127, 7.712]}
        rotation={[0.672, -0.054, -1.609]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.519, 0.125, 7.785]}
        rotation={[2.712, 0.447, 1.823]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.408, 0.465, 1.27]}
        rotation={[2.481, 0.572, 2.134]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.844, 0.325, -0.567]}
        rotation={[0.81, -0.596, -1.025]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.227, 0.322, 0.207]}
        rotation={[1.702, 0.876, 2.89]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[8.267, 0.331, -1.056]}
        rotation={[2.109, -0.865, 0.452]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.11, 0.329, -0.867]}
        rotation={[0.82, -0.913, -0.781]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[8.038, 0.309, -0.956]}
        rotation={[0.527, 0.172, -1.881]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[7.963, 0.396, -0.074]}
        rotation={[1.171, -0.82, -0.664]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.494, 0.308, -0.267]}
        rotation={[1.298, 0.914, -3.007]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.609, 0.374, 0.184]}
        rotation={[2.155, 0.8, 2.417]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[8.182, 0.37, -0.586]}
        rotation={[2.383, -0.63, 0.86]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.829, 0.361, -0.219]}
        rotation={[1.506, -1.1, -0.044]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.608, 0.297, -0.514]}
        rotation={[2.293, -0.571, 0.876]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.345, 0.308, -0.079]}
        rotation={[2.311, -0.663, 0.859]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.786, 0.392, 0.119]}
        rotation={[2.466, -0.219, 1.355]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[7.047, 0.274, -0.001]}
        rotation={[2.443, 0.547, 1.912]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.147, 0.31, -1.086]}
        rotation={[1.543, -0.99, -0.095]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[8.053, 0.347, -0.63]}
        rotation={[2.568, 0.173, 1.677]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.186, 0.367, -0.622]}
        rotation={[2.664, -0.304, 1.32]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.57, 0.323, -0.233]}
        rotation={[2.662, 0.61, 1.917]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[8.331, 0.336, -1.092]}
        rotation={[0.914, 0.898, -2.184]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.853, 0.353, -0.325]}
        rotation={[0.681, 0.746, -1.898]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[7.109, 0.297, 0.125]}
        rotation={[2.317, 0.477, 1.937]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.689, 0.406, 0.018]}
        rotation={[2.313, -0.783, 0.823]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[8.239, 0.371, -0.579]}
        rotation={[0.561, 0.325, -1.739]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[8.502, 0.322, -1.306]}
        rotation={[2.262, -0.813, 0.836]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[8.521, 0.367, -0.604]}
        rotation={[1.56, 0.968, -3.118]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.546, 0.36, -0.71]}
        rotation={[0.93, 0.72, -2.28]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.629, 0.501, 1.342]}
        rotation={[2.702, 0.29, 1.761]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.34, 0.462, 0.828]}
        rotation={[1.762, -1.015, 0.021]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.174, 0.454, 0.691]}
        rotation={[2.294, -1.053, 0.839]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[8.652, 0.392, -0.207]}
        rotation={[2.694, -0.403, 1.414]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[7.846, 0.469, 0.884]}
        rotation={[0.565, -0.453, -1.229]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[8.291, 0.422, 0.21]}
        rotation={[0.631, -0.675, -1.122]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[8.36, 0.377, -0.483]}
        rotation={[2.335, 0.575, 2.094]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[8.547, 0.346, -0.934]}
        rotation={[2.508, 0.425, 1.979]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[8.647, 0.398, -0.108]}
        rotation={[2.401, 0.816, 2.171]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[8.531, 0.355, -0.794]}
        rotation={[0.484, -0.15, -1.484]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.333, 0.427, 0.298]}
        rotation={[0.993, 0.767, -2.377]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[8.158, 0.458, 0.749]}
        rotation={[0.508, 0.18, -1.721]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[8.464, 0.445, 0.586]}
        rotation={[0.834, -0.701, -0.959]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[8.4, 0.431, 0.365]}
        rotation={[2.416, 0.563, 2.123]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[8.54, 0.356, -0.786]}
        rotation={[0.605, -0.578, -1.328]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[8.307, 0.365, -0.671]}
        rotation={[2.461, -0.363, 1.11]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[8.116, 0.48, 1.089]}
        rotation={[2.58, 0.881, 2.089]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[8.27, 0.41, 0.019]}
        rotation={[2.181, 0.993, 2.497]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.714, 0.147, 7.774]}
        rotation={[2.065, 0.888, 2.501]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.46, 0.129, 7.5]}
        rotation={[2.531, -0.521, 1.197]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.595, 0.134, 7.221]}
        rotation={[0.496, 0.309, -1.704]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.552, 0.138, 7.827]}
        rotation={[0.647, 0.59, -1.858]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.659, 0.139, 7.374]}
        rotation={[2.701, 0.634, 1.905]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.376, 0.128, 7.851]}
        rotation={[0.584, 0.624, -1.791]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.568, 0.136, 7.562]}
        rotation={[2.357, 0.471, 1.939]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.238, 0.115, 7.432]}
        rotation={[0.5, -0.297, -1.302]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.406, 0.135, 8.317]}
        rotation={[2.685, -0.627, 1.344]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.213, 0.133, 7.999]}
        rotation={[2.518, 0.644, 1.836]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.131, 0.151, 8.362]}
        rotation={[0.557, 0.206, -1.894]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.175, 0.13, 7.837]}
        rotation={[0.54, 0.502, -1.69]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.243, 0.146, 8.45]}
        rotation={[2.416, -0.675, 1.126]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.3, 0.143, 8.496]}
        rotation={[0.913, -0.806, -0.794]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.88, 0.193, 9.017]}
        rotation={[2.701, 0.231, 1.808]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.203, 0.161, 8.783]}
        rotation={[0.559, 0.22, -1.606]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.282, 0.15, 7.606]}
        rotation={[2.549, 0.035, 1.537]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.084, 0.149, 7.44]}
        rotation={[0.52, -0.156, -1.524]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.695, 0.165, 8.23]}
        rotation={[2.496, -0.313, 1.357]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.368, 0.153, 7.737]}
        rotation={[0.607, 0.606, -1.828]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.341, 0.162, 7.925]}
        rotation={[0.532, -0.296, -1.202]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.914, 0.131, 7.594]}
        rotation={[0.648, -0.013, -1.642]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.186, 0.143, 7.385]}
        rotation={[0.945, 0.849, -2.238]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.453, 0.17, 8.181]}
        rotation={[0.765, 0.575, -2.207]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.644, 0.147, 7.771]}
        rotation={[1.02, 0.7, -2.449]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.696, 0.129, 7.414]}
        rotation={[1.591, 1.122, 3.054]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.6, 0.141, 7.62]}
        rotation={[2.343, 0.963, 2.389]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.932, 0.171, 8.511]}
        rotation={[0.607, -0.216, -1.373]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.816, 0.173, 8.477]}
        rotation={[2.514, 0.329, 1.793]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.592, 0.171, 8.286]}
        rotation={[1.106, -0.803, -0.727]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.456, 0.225, 8.829]}
        rotation={[2.277, -0.795, 0.816]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.389, 0.174, 8.186]}
        rotation={[0.749, 0.395, -1.985]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.04, 0.25, 8.448]}
        rotation={[2.084, -0.738, 0.597]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.08, 0.307, 9.117]}
        rotation={[2.314, -0.797, 1.044]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.037, 0.283, 8.683]}
        rotation={[2.617, 0.081, 1.655]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.343, 0.19, 8.284]}
        rotation={[2.342, -0.432, 1.046]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.1, 0.151, 7.494]}
        rotation={[2.582, -0.109, 1.395]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.001, 0.281, 8.716]}
        rotation={[2.147, -0.892, 0.678]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.274, 0.262, 8.947]}
        rotation={[1.865, -0.977, 0.355]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.081, 0.193, 7.909]}
        rotation={[1.359, -0.972, -0.392]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.67, 0.207, 8.97]}
        rotation={[1.081, -0.887, -0.838]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.354, 0.222, 8.645]}
        rotation={[0.731, -0.816, -0.961]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.075, 0.269, 8.707]}
        rotation={[2.588, -0.36, 1.541]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.207, 0.262, 8.841]}
        rotation={[2.246, -0.652, 0.835]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.437, 0.314, 8.569]}
        rotation={[0.697, -0.528, -1.411]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.51, 0.238, 7.801]}
        rotation={[0.776, 0.413, -2.017]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.271, 0.203, 7.65]}
        rotation={[2.529, 0.046, 1.48]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.436, 0.299, 8.425]}
        rotation={[1.497, -1.174, 0.007]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.121, 0.193, 7.665]}
        rotation={[2.198, 0.862, 2.442]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.728, 0.259, 7.837]}
        rotation={[2.628, 0.643, 1.888]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.372, 0.353, 8.98]}
        rotation={[1.909, 0.961, 2.804]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.399, 0.302, 8.483]}
        rotation={[2.598, -0.045, 1.674]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.394, 0.283, 8.306]}
        rotation={[2.644, -0.292, 1.377]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.498, 0.32, 8.58]}
        rotation={[0.538, -0.031, -1.553]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.35, 0.322, 8.707]}
        rotation={[2.316, -0.642, 0.891]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.536, 0.239, 7.792]}
        rotation={[2.522, -0.141, 1.427]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.188, 0.286, 8.488]}
        rotation={[0.648, 0.477, -1.793]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.249, 0.22, 7.821]}
        rotation={[0.464, 0.656, -1.826]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.777, 0.217, 7.406]}
        rotation={[1.662, -0.854, 0.025]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.848, 0.254, 7.644]}
        rotation={[2.532, 0.201, 1.583]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.036, 0.423, 8.415]}
        rotation={[0.73, 0.761, -2.01]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.403, 0.364, 9.005]}
        rotation={[1.986, -0.827, 0.501]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.515, 0.338, 8.676]}
        rotation={[0.428, 0.037, -1.577]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.596, 0.338, 8.551]}
        rotation={[2.376, 0.86, 2.125]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.6, 0.385, 8.842]}
        rotation={[1.306, 1.014, -2.788]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.002, 0.269, 7.501]}
        rotation={[0.834, 0.698, -2.273]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.832, 0.281, 7.837]}
        rotation={[0.635, 0.201, -1.743]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.626, 0.327, 8.436]}
        rotation={[1.052, -0.929, -0.558]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.7, 0.386, 8.692]}
        rotation={[1.737, 0.954, 2.909]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.685, 0.293, 8.13]}
        rotation={[0.733, -0.416, -1.386]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.25, 0.27, 7.263]}
        rotation={[1.028, -0.993, -0.56]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.126, 0.338, 7.764]}
        rotation={[0.627, -0.462, -1.437]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.1, 0.228, 7.127]}
        rotation={[1.413, 1.082, -2.916]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.144, 0.336, 7.738]}
        rotation={[1.568, -0.969, 0.009]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.465, 0.287, 7.199]}
        rotation={[0.678, -0.393, -1.388]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.216, 0.452, 8.373]}
        rotation={[1.063, -0.942, -0.808]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.058, 0.193, 6.949]}
        rotation={[2.519, 0.068, 1.437]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.195, 0.2, 6.887]}
        rotation={[1.385, -1.097, -0.211]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.187, 0.224, 7.037]}
        rotation={[2.113, 0.857, 2.413]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.248, 0.363, 7.816]}
        rotation={[2.324, 0.743, 2.055]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.484, 0.367, 7.666]}
        rotation={[0.981, 0.779, -2.371]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.861, 0.249, 6.69]}
        rotation={[1.86, 1.033, 2.735]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.827, 0.302, 7.041]}
        rotation={[1.186, 0.869, -2.796]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.933, 0.438, 7.821]}
        rotation={[0.446, -0.28, -1.36]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.576, 0.316, 7.292]}
        rotation={[1.485, 0.969, -3.003]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.997, 0.295, 6.893]}
        rotation={[0.975, -0.892, -0.648]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.316, 0.522, 8.096]}
        rotation={[0.465, -0.487, -1.334]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.956, 0.284, 6.848]}
        rotation={[0.451, 0.228, -1.691]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.775, 0.508, 8.357]}
        rotation={[0.462, -0.25, -1.475]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[1.889, 0.375, 7.458]}
        rotation={[2.479, 0.637, 1.868]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.525, 0.481, 8.35]}
        rotation={[2.49, 0.587, 1.839]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.296, 0.507, 8.013]}
        rotation={[1.284, -0.898, -0.328]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.843, 0.264, 6.799]}
        rotation={[2.299, -0.758, 0.705]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.095, 0.509, 8.152]}
        rotation={[0.708, -0.969, -0.896]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.24, 0.459, 7.752]}
        rotation={[2.143, -0.94, 0.519]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.309, 0.435, 7.557]}
        rotation={[2.44, 0.214, 1.69]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[1.458, 0.477, 8.368]}
        rotation={[0.568, 0.033, -1.61]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.454, 0.547, 8.158]}
        rotation={[1.585, 1.048, -3.049]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.179, 0.407, 7.47]}
        rotation={[0.577, -0.575, -1.317]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.517, 0.523, 7.956]}
        rotation={[2.22, 0.9, 2.482]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.167, 0.25, 6.432]}
        rotation={[0.718, 0.632, -1.932]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.323, 0.202, 5.95]}
        rotation={[2.09, 1.013, 2.539]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.349, 0.26, 6.319]}
        rotation={[2.597, 0.01, 1.554]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.193, 0.215, 6.164]}
        rotation={[2.077, 1.017, 2.464]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.51, 0.434, 7.349]}
        rotation={[2.566, -0.273, 1.317]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[2.282, 0.362, 7.088]}
        rotation={[2.483, 0.699, 1.98]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.112, 0.254, 6.515]}
        rotation={[0.584, 0.008, -1.617]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.135, 0.279, 6.665]}
        rotation={[0.707, -0.668, -1.172]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.351, 0.408, 7.334]}
        rotation={[0.873, -0.858, -0.975]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.293, 0.218, 6.086]}
        rotation={[2.276, -0.972, 0.839]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.988, 0.213, 6.356]}
        rotation={[1.979, 1.01, 2.499]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.331, 0.425, 7.468]}
        rotation={[0.753, -0.487, -1.309]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.682, 0.248, 5.948]}
        rotation={[1.063, 1.051, -2.601]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.81, 0.472, 7.625]}
        rotation={[2.632, -0.077, 1.357]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.733, 0.356, 6.754]}
        rotation={[0.839, 0.689, -2.329]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.62, 0.481, 7.652]}
        rotation={[2.581, -0.123, 1.437]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.72, 0.25, 5.969]}
        rotation={[2.567, -0.449, 1.326]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.957, 0.385, 7.012]}
        rotation={[0.649, -0.67, -0.965]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.724, 0.424, 7.252]}
        rotation={[2.047, 0.963, 2.512]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.078, 0.353, 6.798]}
        rotation={[0.681, 0.562, -1.826]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.026, 0.325, 6.582]}
        rotation={[0.567, -0.278, -1.286]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[2.902, 0.52, 7.994]}
        rotation={[0.854, 0.995, -2.38]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.844, 0.491, 7.767]}
        rotation={[2.513, 0.064, 1.455]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.155, 0.497, 7.876]}
        rotation={[0.462, -0.568, -1.23]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.971, 0.448, 7.475]}
        rotation={[2.586, -0.384, 1.316]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[2.987, 0.448, 7.479]}
        rotation={[2.37, -0.443, 1.136]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.93, 0.39, 7.042]}
        rotation={[1.005, -1.087, -0.537]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.59, 0.378, 6.889]}
        rotation={[2.065, -0.981, 0.66]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[2.83, 0.335, 6.619]}
        rotation={[1.309, 1.043, -2.702]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.789, 0.396, 7.058]}
        rotation={[2.196, -0.826, 0.809]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.617, 0.594, 5.638]}
        rotation={[1.861, 1.041, 2.699]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.464, 0.5, 5.041]}
        rotation={[1.254, 0.971, -2.934]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.376, 0.37, 4.093]}
        rotation={[1.338, -1.029, -0.228]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.534, 0.593, 5.703]}
        rotation={[2.497, -0.354, 1.085]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.196, 0.283, 3.576]}
        rotation={[0.951, 0.874, -2.61]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.454, 0.33, 3.704]}
        rotation={[1.405, 1.039, -3.009]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.442, 0.535, 5.335]}
        rotation={[2.476, 0.307, 1.83]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.109, 0.283, 3.664]}
        rotation={[0.765, 0.649, -2.158]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.462, 0.506, 5.085]}
        rotation={[0.872, 0.869, -2.218]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.461, 0.298, 3.447]}
        rotation={[0.766, 0.563, -2.216]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.541, 0.391, 4.106]}
        rotation={[1.131, -0.951, -0.469]}
        scale={[0.049, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.41, 0.512, 5.184]}
        rotation={[2.321, -0.668, 1.025]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.585, 0.642, 6.041]}
        rotation={[2.608, -0.402, 1.21]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.232, 0.444, 4.816]}
        rotation={[2.561, -0.631, 1.348]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.432, 0.504, 5.098]}
        rotation={[0.594, -0.313, -1.464]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.193, 0.379, 4.34]}
        rotation={[0.454, 0.026, -1.426]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.369, 0.408, 4.398]}
        rotation={[0.783, -0.78, -0.857]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.677, 0.358, 3.489]}
        rotation={[0.811, 0.564, -2.234]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.678, 0.423, 3.97]}
        rotation={[0.84, -0.985, -0.764]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.714, 0.677, 5.603]}
        rotation={[1.99, -1.14, 0.468]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.858, 0.761, 5.003]}
        rotation={[0.454, Math.PI / 7, -1.772]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[4.734, 0.539, 4.372]}
        rotation={[0.446, 0.511, -1.699]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.782, 0.719, 5.335]}
        rotation={[1.539, 1.123, 3.099]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.662, 0.638, 5.752]}
        rotation={[0.746, 0.418, -2.056]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.744, 0.712, 5.613]}
        rotation={[2.391, 0.73, 2.101]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.679, 0.554, 4.965]}
        rotation={[1.675, -1.042, 0.155]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.69, 0.459, 4.152]}
        rotation={[0.979, 0.769, -2.36]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.669, 0.281, 2.966]}
        rotation={[0.61, -0.181, -1.549]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[2.822, 0.251, 5.752]}
        rotation={[0.856, 1.015, -2.255]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.425, 0.418, 7.101]}
        rotation={[0.707, -0.681, -1.251]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.129, 0.322, 5.94]}
        rotation={[2.436, 0.767, 2.194]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.993, 0.29, 5.838]}
        rotation={[1.063, -0.906, -0.867]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.738, 0.231, 5.688]}
        rotation={[2.742, -0.204, 1.519]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.42, 0.418, 7.152]}
        rotation={[0.933, -0.877, -0.626]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.12, 0.314, 5.715]}
        rotation={[0.664, -0.452, -1.395]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.273, 0.365, 6.363]}
        rotation={[0.555, 0.154, -1.581]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.417, 0.378, 6.29]}
        rotation={[0.928, 0.842, -2.355]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.694, 0.459, 7.327]}
        rotation={[2.415, -0.668, 1.057]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.519, 0.447, 7.428]}
        rotation={[0.933, 0.947, -2.409]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.47, 0.391, 6.448]}
        rotation={[0.852, 0.754, -2.472]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.583, 0.411, 6.605]}
        rotation={[1.799, 0.955, 2.863]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.579, 0.454, 7.444]}
        rotation={[0.672, 0.43, -1.982]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.531, 0.431, 7.094]}
        rotation={[2.483, 0.584, 1.82]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.614, 0.462, 7.524]}
        rotation={[2.628, -0.521, 1.233]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.372, 0.36, 6.04]}
        rotation={[0.536, 0.288, -1.905]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.399, 0.314, 4.768]}
        rotation={[2.397, -0.978, 0.948]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.488, 0.357, 5.585]}
        rotation={[2.35, 0.741, 2.248]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.936, 0.467, 6.92]}
        rotation={[0.607, -0.346, -1.263]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.472, 0.328, 4.895]}
        rotation={[2.655, -0.202, 1.639]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.508, 0.378, 6.062]}
        rotation={[1.593, 1.142, 3.116]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.348, 0.326, 5.253]}
        rotation={[2.434, -0.508, 1.116]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.883, 0.448, 6.625]}
        rotation={[1.972, 0.998, 2.673]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.692, 0.422, 6.578]}
        rotation={[0.503, -0.396, -1.326]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[3.401, 0.326, 5.076]}
        rotation={[2.749, -0.294, 1.514]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.742, 0.401, 5.862]}
        rotation={[1.73, 1.14, 3.08]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.448, 0.367, 5.999]}
        rotation={[1.811, -0.965, 0.145]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.795, 0.412, 5.621]}
        rotation={[0.964, 0.984, -2.443]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.799, 0.419, 6.139]}
        rotation={[2.602, -0.568, 1.35]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.168, 0.532, 7.104]}
        rotation={[0.659, 0.215, -1.707]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.845, 0.434, 6.358]}
        rotation={[0.484, 0.491, -1.842]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.668, 0.374, 5.346]}
        rotation={[2.606, -0.426, 1.201]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[3.591, 0.347, 4.924]}
        rotation={[0.648, -0.506, -1.121]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[4.15, 0.526, 7.04]}
        rotation={[2.493, -0.311, 1.141]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.032, 0.397, 5.152]}
        rotation={[2.351, 0.663, 2.202]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.161, 0.472, 5.993]}
        rotation={[2.559, -0.178, 1.33]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.975, 0.378, 4.958]}
        rotation={[1.866, 1.128, 2.851]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.231, 0.52, 6.54]}
        rotation={[1.674, 1.048, 2.844]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.625, 0.341, 4.748]}
        rotation={[0.533, 0.584, -1.734]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.161, 0.461, 5.848]}
        rotation={[0.581, 0.662, -1.942]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.044, 0.437, 5.638]}
        rotation={[2.072, 1.063, 2.652]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.841, 0.307, 4.163]}
        rotation={[2.431, 0.631, 2.023]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[3.867, 0.327, 4.393]}
        rotation={[2.52, 0.077, 1.559]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.207, 0.533, 6.718]}
        rotation={[0.906, 0.831, -2.238]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[3.622, 0.33, 4.61]}
        rotation={[0.412, 0.099, -1.529]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.123, 0.422, 5.38]}
        rotation={[1.373, 1.009, -2.868]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.232, 0.494, 5.955]}
        rotation={[0.782, 0.411, -2.022]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[4.313, 0.508, 5.377]}
        rotation={[0.673, 0.019, -1.684]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.494, 0.637, 6.559]}
        rotation={[2.258, -0.816, 0.885]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.067, 0.354, 4.306]}
        rotation={[2.398, -0.567, 1.139]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.449, 0.613, 6.477]}
        rotation={[2.23, 0.742, 2.167]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.324, 0.548, 6.259]}
        rotation={[0.604, 0.567, -2.092]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.484, 0.625, 6.382]}
        rotation={[0.745, -0.901, -0.951]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[4.082, 0.361, 4.305]}
        rotation={[0.592, 0.713, -1.97]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[4.414, 0.596, 6.431]}
        rotation={[0.736, -0.831, -0.797]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.181, 0.133, 7.584]}
        rotation={[0.75, -0.676, -1.231]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.122, 0.127, 7.748]}
        rotation={[0.629, -0.12, -1.418]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.215, 0.121, 7.909]}
        rotation={[0.752, -0.649, -1.226]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.413, 0.168, 6.603]}
        rotation={[0.522, 0.105, -1.748]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.201, 0.129, 7.697]}
        rotation={[1.732, -0.853, 0.082]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.223, 0.112, 8.166]}
        rotation={[2.655, 0.676, 1.948]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.78, 0.132, 8.454]}
        rotation={[0.531, -0.32, -1.377]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.717, 0.133, 8.593]}
        rotation={[2.492, 0.093, 1.466]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.903, 0.137, 7.848]}
        rotation={[1.873, 1.157, 2.86]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.954, 0.128, 8.099]}
        rotation={[0.498, 0.077, -1.534]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.59, 0.141, 8.616]}
        rotation={[0.46, -0.243, -1.428]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.75, 0.143, 8.06]}
        rotation={[2.459, -0.493, 1.202]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.924, 0.141, 7.603]}
        rotation={[1.088, 1.054, -2.604]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.997, 0.122, 8.242]}
        rotation={[2.586, 0.515, 1.986]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.937, 0.711, 4.296]}
        rotation={[1.508, 1.033, -2.988]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[5.054, 0.435, 3.123]}
        rotation={[2.448, -0.571, 1.211]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.381, 0.439, 2.808]}
        rotation={[0.758, 0.513, -2.073]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.185, 0.601, 3.622]}
        rotation={[2.406, -0.591, 1.002]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.078, 0.609, 3.763]}
        rotation={[1.577, 1.162, 3.115]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.157, 0.307, 2.532]}
        rotation={[0.509, -0.471, -1.171]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.208, 0.619, 3.669]}
        rotation={[1.262, 0.919, -2.744]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.273, 0.484, 3.088]}
        rotation={[1.336, 0.945, -2.959]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[4.868, 0.535, 3.696]}
        rotation={[2.65, -0.076, 1.631]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[4.881, 0.591, 3.896]}
        rotation={[0.538, 0.524, -1.711]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.094, 0.51, 3.371]}
        rotation={[2.679, -0.21, 1.504]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.556, 0.5, 2.861]}
        rotation={[0.566, -0.466, -1.421]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[4.812, 0.504, 3.635]}
        rotation={[0.516, -0.221, -1.297]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.383, 0.403, 2.67]}
        rotation={[0.924, 0.763, -2.282]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[4.824, 0.294, 2.823]}
        rotation={[1.359, -1.076, -0.383]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[5.114, 0.567, 3.564]}
        rotation={[0.65, -0.596, -1.109]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.189, 0.315, 2.53]}
        rotation={[0.524, 0.076, -1.719]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.522, 0.56, 3.122]}
        rotation={[0.574, 0.722, -1.901]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.137, 0.474, 3.189]}
        rotation={[2.602, 0.249, 1.793]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.749, 0.822, 3.716]}
        rotation={[1.713, 0.938, 2.995]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.565, 0.738, 3.662]}
        rotation={[0.552, 0.117, -1.903]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.998, 0.608, 2.708]}
        rotation={[0.735, 0.682, -2.315]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.481, 0.858, 4.161]}
        rotation={[0.601, -0.767, -1.123]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.206, 0.806, 4.324]}
        rotation={[0.741, -0.956, -0.839]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.996, 0.904, 3.683]}
        rotation={[1.742, 0.934, 2.734]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[5.778, 0.795, 3.589]}
        rotation={[1.776, -1.118, 0.314]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.465, 0.871, 4.223]}
        rotation={[2.06, -0.741, 0.567]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[5.902, 0.571, 2.704]}
        rotation={[0.556, 0.659, -1.954]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.435, 0.88, 4.288]}
        rotation={[2.068, 0.852, 2.59]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.685, 0.593, 3.042]}
        rotation={[2.74, -0.257, 1.508]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.019, 0.958, 3.833]}
        rotation={[1.754, -0.899, 0.099]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.655, 0.598, 3.094]}
        rotation={[2.46, 0.494, 1.705]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[5.785, 0.919, 3.99]}
        rotation={[2.534, 0.67, 1.891]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[5.754, 0.715, 3.356]}
        rotation={[0.863, -0.76, -1.095]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[5.323, 0.685, 3.782]}
        rotation={[2.53, 0.539, 1.738]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[5.994, 0.625, 2.768]}
        rotation={[0.957, 0.7, -2.445]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[5.289, 0.787, 4.161]}
        rotation={[2.165, 0.977, 2.47]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.14, 0.719, 2.908]}
        rotation={[2.512, 0.146, 1.718]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.237, 0.508, 2.16]}
        rotation={[2.62, 0.032, 1.667]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.226, 0.288, 1.478]}
        rotation={[2.622, -0.318, 1.508]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.18, 0.592, 2.475]}
        rotation={[2.229, 0.834, 2.083]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.182, 0.506, 2.202]}
        rotation={[2.576, -0.139, 1.346]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.086, 0.527, 2.353]}
        rotation={[0.769, 0.779, -2.223]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.239, 0.383, 1.764]}
        rotation={[1.601, 1.013, 3.101]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[6.48, 0.626, 2.284]}
        rotation={[2.243, 0.651, 2.138]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[6.428, 0.749, 2.724]}
        rotation={[1.968, -0.979, 0.637]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.425, 0.897, 3.187]}
        rotation={[2.521, 0.534, 2.032]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.347, 0.57, 2.249]}
        rotation={[0.891, -0.949, -0.859]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.341, 0.394, 1.708]}
        rotation={[2.587, 0.162, 1.643]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.46, 0.529, 2.004]}
        rotation={[2.429, 0.571, 1.859]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.081, 0.38, 6.391]}
        rotation={[2.479, -0.355, 1.228]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.317, 0.383, 6.266]}
        rotation={[0.694, 0.099, -1.692]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.074, 0.355, 6.572]}
        rotation={[2.284, -0.634, 0.961]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.19, 0.343, 6.603]}
        rotation={[0.553, 0.225, -1.878]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.867, 0.267, 7.285]}
        rotation={[2.397, -0.558, 1.005]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.698, 0.263, 7.27]}
        rotation={[0.802, 0.525, -2.151]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.455, 0.225, 7.464]}
        rotation={[0.42, 0.321, -1.649]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.865, 0.364, 6.54]}
        rotation={[0.528, -0.207, -1.563]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.717, 0.224, 7.595]}
        rotation={[2.463, -0.179, 1.393]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.537, 0.202, 7.686]}
        rotation={[0.483, 0.1, -1.626]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.496, 0.396, 1.542]}
        rotation={[2.198, -1.011, 0.71]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.694, 0.247, 0.843]}
        rotation={[0.445, -0.131, -1.498]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.65, 0.276, 0.985]}
        rotation={[2.425, -0.727, 1.082]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.433, 0.439, 1.751]}
        rotation={[0.966, -0.936, -0.626]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.686, 0.234, 0.809]}
        rotation={[2.181, -1.115, 0.697]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.522, 0.553, 2.009]}
        rotation={[0.644, -0.751, -1.013]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.655, 0.783, 2.641]}
        rotation={[1.725, -1.072, 0.143]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.942, 0.644, 2.103]}
        rotation={[1.057, 0.856, -2.676]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[6.801, 0.379, 1.25]}
        rotation={[0.735, -0.522, -1.176]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.789, 0.521, 1.727]}
        rotation={[0.753, -0.903, -0.919]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.851, 0.427, 1.397]}
        rotation={[0.598, 0.522, -2.06]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.896, 0.65, 2.133]}
        rotation={[1.963, 0.957, 2.799]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.855, 0.508, 1.669]}
        rotation={[2.548, 0.569, 1.952]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.263, 0.271, 6.879]}
        rotation={[1.649, 1.025, 2.814]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.396, 0.254, 7.157]}
        rotation={[2.34, 0.631, 2.152]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.545, 0.327, 6.618]}
        rotation={[0.655, 0.672, -1.843]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.469, 0.264, 7.126]}
        rotation={[2.393, -0.308, 1.189]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.197, 0.294, 6.605]}
        rotation={[0.469, 0.205, -1.751]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.569, 0.318, 6.716]}
        rotation={[2.476, 0.626, 1.831]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.933, 0.408, 6.22]}
        rotation={[1.935, -0.856, 0.292]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.242, 0.187, 7.633]}
        rotation={[0.671, -0.481, -1.449]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.196, 0.251, 7.012]}
        rotation={[1.939, 0.929, 2.594]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.116, 0.242, 7.076]}
        rotation={[1.463, -1.17, -0.127]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.021, 0.224, 7.225]}
        rotation={[2.222, -0.663, 0.765]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.174, 0.179, 7.674]}
        rotation={[1.308, -1.003, -0.17]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.118, 0.26, 6.909]}
        rotation={[0.871, 0.61, -2.252]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[6.909, 0.293, 0.528]}
        rotation={[2.689, 0.21, 1.727]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[6.853, 0.238, 0.41]}
        rotation={[2.376, -0.996, 0.917]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[6.831, 0.306, 0.867]}
        rotation={[0.575, 0.709, -1.84]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[6.991, 0.525, 1.546]}
        rotation={[1.1, -0.976, -0.486]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.001, 0.6, 1.936]}
        rotation={[0.812, 0.892, -2.339]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[6.819, 0.302, 0.889]}
        rotation={[2.755, 0.076, 1.687]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[7.068, 0.398, 0.703]}
        rotation={[2.445, 0.322, 1.747]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.063, 0.579, 1.669]}
        rotation={[2.178, -0.807, 0.759]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[7.407, 0.51, 1.526]}
        rotation={[2.274, 0.639, 2.141]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[7.362, 0.514, 1.516]}
        rotation={[0.406, 0.334, -1.677]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[7.098, 0.459, 1.048]}
        rotation={[1.435, -0.905, -0.308]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.289, 0.566, 1.748]}
        rotation={[2.521, -0.234, 1.428]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[7.111, 0.51, 1.33]}
        rotation={[0.671, 0.311, -1.839]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.69, 0.406, 5.79]}
        rotation={[1.721, 1.005, 2.94]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.557, 0.471, 5.437]}
        rotation={[2.628, 0.444, 1.937]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.383, 0.47, 5.302]}
        rotation={[0.687, 0.594, -2.072]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.697, 0.552, 5.063]}
        rotation={[2.689, 0.256, 1.706]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.028, 0.414, 5.945]}
        rotation={[0.503, 0.149, -1.646]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.609, 0.462, 5.649]}
        rotation={[1.768, -1.022, 0.302]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.217, 0.413, 6.14]}
        rotation={[2.565, -0.326, 1.262]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.307, 0.453, 5.53]}
        rotation={[2.541, 0.49, 1.824]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.518, 0.447, 5.816]}
        rotation={[1.28, -0.978, -0.439]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.985, 0.41, 5.991]}
        rotation={[1.939, 1.162, 2.807]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.243, 0.35, 6.361]}
        rotation={[0.665, -0.705, -1.176]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.372, 0.462, 5.426]}
        rotation={[1.15, -1.032, -0.571]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.51, 0.561, 4.734]}
        rotation={[0.621, 0.341, -1.791]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.631, 0.562, 4.831]}
        rotation={[2.089, 0.803, 2.418]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.717, 0.474, 5.536]}
        rotation={[1.043, -0.86, -0.861]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.893, 0.572, 4.901]}
        rotation={[0.489, 0.568, -1.796]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.267, 0.469, 5.211]}
        rotation={[2.547, -0.269, 1.401]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.615, 0.554, 4.95]}
        rotation={[2.111, -0.986, 0.595]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.313, 0.366, 6.143]}
        rotation={[1.228, -1.123, -0.41]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.336, 0.484, 5.016]}
        rotation={[1.593, -0.944, 0.01]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.807, 0.393, 6.111]}
        rotation={[2.433, 0.362, 1.847]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.675, 0.566, 4.808]}
        rotation={[2.337, -0.746, 0.837]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.408, 0.617, 4.579]}
        rotation={[2.752, 0.004, 1.644]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.921, 0.443, 5.364]}
        rotation={[2.371, 0.777, 2.248]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.576, 0.489, 5.144]}
        rotation={[2.444, -0.706, 1.278]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.725, 0.575, 4.691]}
        rotation={[2.11, 0.789, 2.258]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.484, 0.556, 4.809]}
        rotation={[0.805, -0.684, -1.004]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.518, 0.441, 5.917]}
        rotation={[2.648, -0.072, 1.635]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.84, 0.453, 5.109]}
        rotation={[0.876, 0.945, -2.283]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.636, 0.448, 5.026]}
        rotation={[0.806, -0.783, -1.129]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.656, 0.634, 4.509]}
        rotation={[2.515, 0.33, 1.802]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.687, 0.468, 5.602]}
        rotation={[2.102, 0.913, 2.374]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.801, 0.509, 4.999]}
        rotation={[0.815, -0.522, -1.123]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.677, 0.407, 5.763]}
        rotation={[2.577, -0.006, 1.565]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.871, 0.386, 6.291]}
        rotation={[0.539, -0.011, -1.782]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.587, 0.442, 5.071]}
        rotation={[2.645, 0.031, 1.558]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.598, 0.562, 4.8]}
        rotation={[1.17, 0.872, -2.594]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.489, 0.452, 5.713]}
        rotation={[2.521, -0.682, 1.031]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.637, 0.417, 5.551]}
        rotation={[2.255, -0.793, 0.748]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.383, 0.41, 5.451]}
        rotation={[2.454, -0.497, 0.998]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.741, 0.491, 5.257]}
        rotation={[2.545, -0.631, 1.138]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.163, 0.351, 6.271]}
        rotation={[2.277, -0.768, 0.776]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.265, 0.373, 5.984]}
        rotation={[0.71, 0.308, -1.917]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.987, 0.396, 6.233]}
        rotation={[0.864, -0.885, -0.951]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.771, 0.363, 6.377]}
        rotation={[1.415, 0.993, -2.853]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.641, 0.479, 5.615]}
        rotation={[2.301, 0.719, 2.286]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.952, 0.348, 6.607]}
        rotation={[0.85, -0.639, -1.133]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.893, 0.309, 6.872]}
        rotation={[0.523, -0.679, -1.144]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.561, 0.44, 5.883]}
        rotation={[0.907, 0.804, -2.527]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.48, 0.569, 4.961]}
        rotation={[2.555, -0.483, 1.175]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.782, 0.443, 5.842]}
        rotation={[0.575, -0.229, -1.303]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.943, 0.349, 6.529]}
        rotation={[0.522, 0.613, -1.851]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.462, 0.475, 5.659]}
        rotation={[0.626, -0.252, -1.43]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.413, 0.448, 5.842]}
        rotation={[0.53, 0.253, -1.864]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.234, 0.342, 6.553]}
        rotation={[2.614, -0.125, 1.449]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.852, 0.413, 6.037]}
        rotation={[0.571, 0.179, -1.914]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.167, 0.379, 6.388]}
        rotation={[0.775, 0.736, -1.986]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.897, 0.327, 6.679]}
        rotation={[2.344, 0.836, 2.261]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.852, 0.336, 6.699]}
        rotation={[1.008, -1.142, -0.57]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.579, 0.377, 6.294]}
        rotation={[1.152, -0.853, -0.585]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.179, 0.4, 6.173]}
        rotation={[0.571, -0.018, -1.806]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.216, 0.36, 6.51]}
        rotation={[0.695, 0.965, -2.109]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.423, 0.458, 5.699]}
        rotation={[0.823, -0.714, -0.95]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.222, 0.586, 4.87]}
        rotation={[2.55, -0.127, 1.349]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.224, 0.486, 5.53]}
        rotation={[0.555, 0.585, -1.87]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.764, 0.516, 5.364]}
        rotation={[2.665, 0.201, 1.676]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.94, 0.46, 5.797]}
        rotation={[2.408, -0.908, 1.089]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.086, 0.333, 6.695]}
        rotation={[2.635, 0.146, 1.667]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.282, 0.488, 5.587]}
        rotation={[0.738, -0.308, -1.372]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.251, 0.381, 6.219]}
        rotation={[0.8, 0.886, -2.063]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.607, 0.407, 6.098]}
        rotation={[0.779, 0.57, -2.225]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.4, 0.445, 5.785]}
        rotation={[2.073, -0.938, 0.434]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.898, 0.552, 5.113]}
        rotation={[1.065, -0.933, -0.447]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.21, 0.513, 5.348]}
        rotation={[0.825, -0.577, -1.206]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.522, 0.535, 5.182]}
        rotation={[2.566, -0.412, 1.474]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.351, 0.475, 5.589]}
        rotation={[1.372, 1.068, -2.721]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.074, 0.339, 6.584]}
        rotation={[2.314, 0.692, 2.067]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.703, 0.321, 6.808]}
        rotation={[2.404, -0.362, 1.187]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.352, 0.337, 6.652]}
        rotation={[2.089, 0.941, 2.48]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.344, 0.505, 5.466]}
        rotation={[2.053, 0.869, 2.487]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.536, 0.526, 5.316]}
        rotation={[2.583, 0.311, 1.564]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.534, 0.345, 6.662]}
        rotation={[0.99, 1.004, -2.379]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.798, 0.346, 6.486]}
        rotation={[2.338, -0.765, 0.92]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.178, 0.4, 6.176]}
        rotation={[2.188, -0.996, 0.759]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.126, 0.316, 6.805]}
        rotation={[0.623, 0.502, -2.036]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.647, 0.427, 5.961]}
        rotation={[1.327, 1.038, -2.665]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.432, 0.543, 5.136]}
        rotation={[0.936, -0.774, -0.808]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.981, 0.307, 6.875]}
        rotation={[2.214, -0.772, 0.863]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.583, 0.463, 3.685]}
        rotation={[1.591, 1.025, 3.14]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.645, 0.621, 3.544]}
        rotation={[2.422, 0.469, 1.852]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.904, 0.488, 3.794]}
        rotation={[2.515, 0.771, 1.982]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.449, 0.529, 3.592]}
        rotation={[1.556, 0.877, 3.096]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.788, 0.478, 4.528]}
        rotation={[0.57, 0.51, -1.988]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.739, 0.475, 3.706]}
        rotation={[0.471, -0.537, -1.238]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.489, 0.685, 3.256]}
        rotation={[1.411, -1.181, -0.168]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.727, 0.551, 3.71]}
        rotation={[1.678, 1.053, 3.097]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.123, 0.581, 3.784]}
        rotation={[0.535, 0.503, -1.858]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.763, 0.63, 3.437]}
        rotation={[2.505, -0.053, 1.569]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.113, 0.503, 4.174]}
        rotation={[2.276, 1.098, 2.427]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.821, 0.634, 3.392]}
        rotation={[0.834, 0.572, -2.166]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.127, 0.581, 3.478]}
        rotation={[2.37, -0.531, 0.978]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.051, 0.652, 3.354]}
        rotation={[0.804, 0.43, -2.117]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.449, 0.529, 3.974]}
        rotation={[1.574, -1.025, -0.01]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.732, 0.551, 3.512]}
        rotation={[1.041, -0.88, -0.649]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.496, 0.61, 3.425]}
        rotation={[1.194, -1.018, -0.527]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.927, 0.489, 4.309]}
        rotation={[0.587, 0.082, -1.639]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.628, 0.619, 3.581]}
        rotation={[2.107, -0.947, 0.525]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.656, 0.468, 4.259]}
        rotation={[1.194, 0.875, -2.759]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.953, 0.568, 3.682]}
        rotation={[0.62, -0.481, -1.156]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.541, 0.613, 3.371]}
        rotation={[0.989, 0.879, -2.421]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.276, 0.516, 4.124]}
        rotation={[0.883, 0.776, -2.383]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.967, 0.569, 4.034]}
        rotation={[1.536, -1.055, -0.183]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.309, 0.588, 4.04]}
        rotation={[2.033, 0.98, 2.516]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.567, 0.688, 3.366]}
        rotation={[0.72, 0.296, -1.863]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.138, 0.642, 3.882]}
        rotation={[2.283, 0.686, 2.089]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.156, 0.579, 4.059]}
        rotation={[0.966, 0.79, -2.387]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.764, 0.625, 3.779]}
        rotation={[0.632, 0.427, -2.051]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.075, 0.576, 4.006]}
        rotation={[2.723, 0.258, 1.779]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.629, 0.684, 3.532]}
        rotation={[2.524, -0.336, 1.121]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.04, 0.646, 3.658]}
        rotation={[0.812, -0.707, -0.996]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.597, 0.692, 3.298]}
        rotation={[2.75, -0.443, 1.467]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.38, 0.522, 4.368]}
        rotation={[2.485, -0.139, 1.283]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.654, 0.668, 3.953]}
        rotation={[0.623, -0.492, -1.101]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.4, 0.595, 3.992]}
        rotation={[2.09, -0.869, 0.485]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.784, 0.697, 3.434]}
        rotation={[2.364, 0.827, 2.281]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.797, 0.679, 3.892]}
        rotation={[0.616, 0.27, -1.71]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.615, 0.668, 3.92]}
        rotation={[2.686, 0.02, 1.599]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.412, 0.653, 3.999]}
        rotation={[2.585, -0.14, 1.637]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.049, 0.635, 3.923]}
        rotation={[0.992, 0.974, -2.632]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.236, 0.649, 3.844]}
        rotation={[0.518, -0.198, -1.524]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.934, 0.487, 4.611]}
        rotation={[1.04, -1.071, -0.553]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.126, 0.49, 4.744]}
        rotation={[1.566, -1.014, -0.059]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.92, 0.618, 4.159]}
        rotation={[1.552, -1.171, -0.007]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.85, 0.546, 4.417]}
        rotation={[2.623, 0.192, 1.685]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.327, 0.579, 4.298]}
        rotation={[0.644, -0.299, -1.479]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.42, 0.584, 4.287]}
        rotation={[0.797, 0.962, -2.27]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.342, 0.573, 4.41]}
        rotation={[1.967, 0.837, 2.543]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.594, 0.594, 4.28]}
        rotation={[0.437, -0.269, -1.419]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.461, 0.584, 4.327]}
        rotation={[2.283, -0.889, 1.031]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.806, 0.66, 4.218]}
        rotation={[2.667, 0.093, 1.519]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.672, 0.664, 4.059]}
        rotation={[0.616, -0.358, -1.314]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.554, 0.644, 4.276]}
        rotation={[0.896, -0.727, -0.887]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.086, 0.605, 4.507]}
        rotation={[0.574, 0.247, -1.586]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.76, 0.457, 4.968]}
        rotation={[1.234, 1.008, -2.779]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.126, 0.542, 4.731]}
        rotation={[0.559, -0.679, -1.144]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.571, 0.515, 4.715]}
        rotation={[0.587, -0.521, -1.059]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.056, 0.6, 4.563]}
        rotation={[2.775, 0.283, 1.724]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.515, 0.584, 4.381]}
        rotation={[0.669, -0.605, -1.365]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.891, 0.672, 4.095]}
        rotation={[2.012, 0.924, 2.405]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.743, 0.653, 4.274]}
        rotation={[1.538, 0.954, -3.048]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.55, 0.63, 4.478]}
        rotation={[0.551, -0.771, -1.066]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.292, 1.239, -4.974]}
        rotation={[0.696, -0.191, -1.453]}
        scale={[0.044, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.123, 1.217, -5.27]}
        rotation={[1.665, 0.951, 2.951]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.27, 1.195, -5.329]}
        rotation={[0.704, 0.567, -2.194]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.715, 1.177, -5.141]}
        rotation={[0.742, -0.756, -0.836]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.747, 1.174, -5.138]}
        rotation={[0.545, -0.305, -1.586]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.584, 1.571, -3.247]}
        rotation={[2.536, 0.642, 1.864]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.875, 1.171, -4.316]}
        rotation={[1.753, 0.99, 2.696]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.927, 1.14, -4.382]}
        rotation={[1.88, -0.848, 0.294]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.762, 1.198, -4.176]}
        rotation={[1.317, 0.868, -2.963]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.712, 1.172, -4.315]}
        rotation={[0.672, 0.809, -1.968]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.772, 1.285, -3.492]}
        rotation={[0.456, 0.038, -1.511]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.086, 1.332, -3.134]}
        rotation={[0.731, -0.745, -0.991]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.155, 1.341, -2.915]}
        rotation={[2.07, -0.894, 0.681]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.751, 1.283, -3.085]}
        rotation={[1.17, 0.963, -2.875]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.691, 1.365, -2.871]}
        rotation={[0.887, 0.732, -2.27]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.742, 1.358, -2.64]}
        rotation={[2.666, -0.203, 1.436]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.146, 1.38, -1.01]}
        rotation={[0.556, -0.538, -1.132]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.087, 1.387, -0.609]}
        rotation={[1.676, 0.88, 2.924]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.951, 1.369, -0.001]}
        rotation={[1.821, 0.988, 2.709]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.951, 1.374, 0.419]}
        rotation={[2.564, 0.063, 1.658]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.668, 1.153, 2.504]}
        rotation={[1.749, 1.012, 2.719]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.415, 1.158, -0.854]}
        rotation={[0.701, -0.658, -1.305]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.985, 0.763, 2.014]}
        rotation={[2.643, -0.345, 1.567]}
        scale={[0.029, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.216, 0.992, -0.193]}
        rotation={[2.57, -0.401, 1.236]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.408, 0.951, -0.012]}
        rotation={[2.41, -0.711, 0.937]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.175, 0.736, 0.696]}
        rotation={[0.557, -0.571, -1.318]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.902, 0.1, -6.555]}
        rotation={[0.513, 0.008, -1.62]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.961, 0.187, -6.336]}
        rotation={[2.532, -0.701, 1.289]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.522, 0.356, -5.814]}
        rotation={[0.874, -0.606, -0.995]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.072, 0.143, -6.413]}
        rotation={[0.978, 0.83, -2.593]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.183, 0.22, -6.212]}
        rotation={[0.552, -0.168, -1.482]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.916, 0.44, -7.208]}
        rotation={[2.361, -0.763, 0.837]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.808, 0.475, -7.168]}
        rotation={[2.465, 0.47, 1.739]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.27, 0.374, -7.187]}
        rotation={[2.224, -0.844, 0.923]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.301, 1.176, -5.408]}
        rotation={[2.519, 0.304, 1.798]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.545, 1.141, -5.444]}
        rotation={[2.266, 0.673, 2.025]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.627, 1.132, -5.427]}
        rotation={[0.614, 0.735, -1.948]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.591, 1.076, -5.624]}
        rotation={[1.027, -0.809, -0.794]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.496, 1.387, -5.071]}
        rotation={[0.594, -0.523, -1.104]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.295, 1.361, -5.133]}
        rotation={[0.606, 0.557, -2.048]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.182, 0.965, -4.755]}
        rotation={[0.875, 0.95, -2.295]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.604, 1.123, -4.319]}
        rotation={[2.3, -0.611, 0.939]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.574, 1.048, -4.493]}
        rotation={[0.522, 0.335, -1.895]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.238, 1.135, -4.316]}
        rotation={[2.426, -0.056, 1.406]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.231, 0.897, 2.948]}
        rotation={[0.83, -0.845, -0.902]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.147, 1.164, 2.745]}
        rotation={[2.502, -0.552, 1.265]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.832, 1.27, 2.222]}
        rotation={[0.894, 0.865, -2.242]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.915, 1.236, 2.129]}
        rotation={[1.566, 0.995, -3.082]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.871, 1.219, 2.147]}
        rotation={[2.203, -0.957, 0.754]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.013, 1.309, 1.773]}
        rotation={[2.479, 0.639, 2.088]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.978, 1.261, 2.094]}
        rotation={[2.358, -0.683, 1.022]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.657, 1.39, 0.577]}
        rotation={[2.298, -0.846, 0.989]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.748, 1.392, 0.927]}
        rotation={[0.426, 0.081, -1.6]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.907, 1.375, 0.43]}
        rotation={[2.625, 0.34, 1.918]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.705, 1.388, 0.565]}
        rotation={[2.647, -0.143, 1.439]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.919, 1.392, -0.178]}
        rotation={[0.405, 0.39, -1.694]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.001, 1.387, -0.788]}
        rotation={[0.887, -0.783, -0.935]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.038, 1.316, -2.235]}
        rotation={[2.559, 0.676, 2.099]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.114, 1.293, -2.064]}
        rotation={[1.005, 0.899, -2.618]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.319, 1.35, -2.36]}
        rotation={[0.623, 0.195, -1.857]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.277, 1.346, -2.165]}
        rotation={[0.605, 0.593, -1.794]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.409, 1.354, -2.556]}
        rotation={[0.6, -0.227, -1.539]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.577, 1.359, -2.216]}
        rotation={[2.636, -0.14, 1.439]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.552, 1.207, -2.413]}
        rotation={[2.63, 0.048, 1.716]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.743, 1.259, -2.66]}
        rotation={[0.838, 0.857, -2.255]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.905, 1.293, -2.36]}
        rotation={[1.151, 0.813, -2.711]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.943, 1.303, -2.337]}
        rotation={[2.015, 0.799, 2.492]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.144, 1.339, -2.864]}
        rotation={[2.519, 0.274, 1.539]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.022, 1.317, -2.604]}
        rotation={[2.456, 0.542, 1.797]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.951, 1.304, -2.618]}
        rotation={[2.376, -0.574, 1.101]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.991, 1.17, -2.799]}
        rotation={[2.532, 0.281, 1.651]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.289, 1.24, -3.136]}
        rotation={[0.751, 0.582, -1.976]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.992, 1.182, -2.878]}
        rotation={[1.859, -0.99, 0.334]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.601, 1.272, -3.582]}
        rotation={[1.008, -0.891, -0.647]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.567, 1.268, -3.36]}
        rotation={[2.333, 0.883, 2.281]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.428, 1.251, -3.146]}
        rotation={[2.362, 0.722, 2.073]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.752, 1.231, -3.154]}
        rotation={[0.434, 0.392, -1.681]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.555, 1.202, -2.973]}
        rotation={[0.653, -0.166, -1.618]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.927, 1.291, -3.448]}
        rotation={[1.804, -0.984, 0.213]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.9, 1.287, -3.509]}
        rotation={[0.73, -0.118, -1.56]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.947, 1.212, -3.065]}
        rotation={[2.498, -0.14, 1.503]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.062, 1.242, -3.202]}
        rotation={[0.717, 0.101, -1.751]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.459, 1.208, -4.046]}
        rotation={[0.542, -0.462, -1.202]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.718, 1.27, -3.748]}
        rotation={[0.603, -0.315, -1.414]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.488, 1.263, -3.601]}
        rotation={[2.565, -0.597, 1.16]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.644, 1.265, -3.737]}
        rotation={[1.545, -1.107, 0.078]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.663, 1.513, -4.517]}
        rotation={[2.232, 0.635, 2.074]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.536, 1.431, -4.837]}
        rotation={[1.82, 0.904, 2.659]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.655, 1.595, -4.139]}
        rotation={[2.445, -0.532, 1.146]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.598, 1.506, -4.471]}
        rotation={[1.802, 0.969, 2.756]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.563, 1.595, -3.947]}
        rotation={[0.668, 0.694, -2.099]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.654, 1.603, -3.861]}
        rotation={[1.34, -1.107, -0.243]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.696, 1.616, -3.994]}
        rotation={[2.146, 0.978, 2.563]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.006, 1.447, -3.767]}
        rotation={[0.538, 0.351, -1.648]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.017, 1.37, -4.216]}
        rotation={[2.592, -0.163, 1.508]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.022, 1.438, -3.847]}
        rotation={[2.509, 0.752, 2.018]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.053, 1.355, -4.259]}
        rotation={[2.017, -0.899, 0.47]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.039, 1.348, -4.311]}
        rotation={[1.002, -1.083, -0.638]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.24, 1.313, -4.441]}
        rotation={[2.543, -0.663, 1.23]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.279, 1.266, -4.769]}
        rotation={[0.717, -0.492, -1.292]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.315, 1.302, -4.474]}
        rotation={[1.246, -1.043, -0.37]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.006, 1.18, -4.256]}
        rotation={[0.572, 0.109, -1.839]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.883, 1.211, -4.12]}
        rotation={[0.615, -0.613, -1.232]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.103, 1.16, -4.36]}
        rotation={[2.447, 0.531, 1.935]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.064, 1.145, -4.468]}
        rotation={[2.623, -0.381, 1.499]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.282, 1.208, -4.516]}
        rotation={[0.7, 0.255, -1.93]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.284, 1.242, -4.267]}
        rotation={[2.324, -0.471, 0.998]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.713, 1.206, -4.239]}
        rotation={[2.328, -0.402, 1.062]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.422, 1.19, -4.55]}
        rotation={[2.375, -0.584, 1.009]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.939, 1.284, -4.191]}
        rotation={[2.198, 0.681, 2.147]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.633, 1.304, -4.246]}
        rotation={[2.683, 0.343, 1.76]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.913, 1.261, -4.38]}
        rotation={[2.61, 0.163, 1.762]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.094, 1.264, -4.237]}
        rotation={[2.464, -0.092, 1.461]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.531, 1.279, -3.822]}
        rotation={[2.365, -0.749, 0.777]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.798, 1.268, -3.753]}
        rotation={[1.556, 1.116, 3.117]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.071, 1.226, -3.932]}
        rotation={[0.938, -0.89, -0.752]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.077, 1.343, -3.642]}
        rotation={[2.134, 0.783, 2.416]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.284, 1.272, -4.047]}
        rotation={[1.178, 1.111, -2.705]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.65, 1.376, -3.736]}
        rotation={[0.802, 0.731, -2.317]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.575, 1.321, -4.157]}
        rotation={[0.7, -0.29, -1.509]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.129, 1.365, -3.396]}
        rotation={[0.675, 0.147, -1.777]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.915, 1.388, -3.394]}
        rotation={[2.483, 0.52, 1.877]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.514, 1.414, -3.548]}
        rotation={[2.122, 1.051, 2.527]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.562, 1.402, -3.611]}
        rotation={[2.542, -0.318, 1.479]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.842, 0.935, -4.933]}
        rotation={[2.517, -0.606, 1.166]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.413, 0.954, -5.013]}
        rotation={[1.638, -1.054, 0.034]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.887, 0.907, -4.985]}
        rotation={[1.37, -1.073, -0.183]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.062, 0.946, -4.841]}
        rotation={[1.361, 0.857, -2.936]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.744, 0.959, -5.339]}
        rotation={[0.898, -0.922, -0.836]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.351, 0.967, -5.002]}
        rotation={[1.995, 0.944, 2.458]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.937, 1.06, -5.477]}
        rotation={[0.798, -0.834, -0.937]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.433, 1.015, -5.35]}
        rotation={[1.433, 0.932, 3.108]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.614, 1.008, -5.275]}
        rotation={[2.515, 0.336, 1.686]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.506, 0.164, -6.54]}
        rotation={[0.577, -0.462, -1.395]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.248, 0.169, -6.661]}
        rotation={[0.656, -0.326, -1.426]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.545, 0.104, -6.68]}
        rotation={[0.735, 0.888, -2.24]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.295, 0.316, -6.765]}
        rotation={[1.595, -1.197, 0.054]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.359, 0.308, -6.754]}
        rotation={[1.881, 1.045, 2.775]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.793, 0.171, -6.893]}
        rotation={[1.429, 0.935, -3.123]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.539, 0.213, -6.915]}
        rotation={[0.74, -0.423, -1.243]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.611, 0.404, -6.897]}
        rotation={[0.608, 0.03, -1.582]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.943, 0.309, -6.982]}
        rotation={[0.967, -0.811, -0.765]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.475, 1.075, -4.68]}
        rotation={[0.645, 0.075, -1.735]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.306, 1.048, -4.785]}
        rotation={[2.647, 0.147, 1.606]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.533, 1.017, -4.822]}
        rotation={[0.659, 0.882, -2.087]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.508, 1.066, -4.695]}
        rotation={[2.491, -0.402, 1.229]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.56, 1.105, -5.031]}
        rotation={[0.804, -0.647, -1.125]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.715, 1.154, -4.6]}
        rotation={[0.556, -0.542, -1.149]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.024, 1.063, -4.869]}
        rotation={[1.111, -0.961, -0.447]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.974, 1.121, -4.617]}
        rotation={[2.45, 0.224, 1.625]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.867, 1.16, -5.161]}
        rotation={[2.122, -0.987, 0.603]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.91, 1.199, -4.838]}
        rotation={[2.351, 0.558, 1.958]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.347, 1.124, -5.054]}
        rotation={[2.069, 1.062, 2.679]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.29, 1.164, -4.819]}
        rotation={[1.188, 0.94, -2.787]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.235, 1.453, -3.912]}
        rotation={[0.769, -1.009, -0.854]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.318, 1.446, -4.003]}
        rotation={[2.532, -0.781, 1.083]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.632, 1.484, -3.938]}
        rotation={[2.337, -0.676, 0.79]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.784, 1.487, -4.047]}
        rotation={[0.792, 0.577, -2.13]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.06, 1.549, -3.761]}
        rotation={[0.559, 0.588, -1.932]}
        scale={[0.041, 0.017, 0.003]}
      />
      <instances.GNInstance1
        position={[1.193, 1.552, -4.08]}
        rotation={[2.654, -0.349, 1.347]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[1.369, 1.576, -4.104]}
        rotation={[0.691, -0.145, -1.562]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.097, 1.357, -4.351]}
        rotation={[2.395, -1.017, 0.975]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.382, 1.373, -4.468]}
        rotation={[1.265, 1.052, -2.716]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.542, 1.368, -4.641]}
        rotation={[0.658, -0.531, -1.453]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.795, 1.423, -4.497]}
        rotation={[2.466, 0.522, 1.84]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.978, 1.49, -4.299]}
        rotation={[0.515, -0.187, -1.584]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.202, 1.441, -4.522]}
        rotation={[2.41, -0.677, 0.912]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.163, 1.279, -4.98]}
        rotation={[2.396, 0.698, 2.203]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.327, 1.309, -4.856]}
        rotation={[0.574, 0.786, -1.899]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.176, 1.262, -5.124]}
        rotation={[1.43, 1.112, -3.033]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.608, 1.341, -4.801]}
        rotation={[2.613, 0.196, 1.639]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.797, 1.359, -4.798]}
        rotation={[0.555, -0.2, -1.507]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.508, 1.285, -5.181]}
        rotation={[0.648, 0.528, -2.121]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.965, 1.374, -4.796]}
        rotation={[1.96, 0.932, 2.757]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.135, 1.383, -4.849]}
        rotation={[2.567, 0.013, 1.43]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.072, 1.357, -5.007]}
        rotation={[1.29, 0.994, -2.816]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.199, 1.23, -5.396]}
        rotation={[0.569, -0.379, -1.431]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.638, 1.266, -5.427]}
        rotation={[0.728, 0.583, -2.089]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.518, 1.25, -5.47]}
        rotation={[2.42, -0.698, 0.824]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.815, 1.289, -5.371]}
        rotation={[1.693, -0.942, 0.018]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.616, 0.545, -7.078]}
        rotation={[1.773, -1.021, 0.267]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.146, 0.633, -7.1]}
        rotation={[0.992, -0.972, -0.767]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.249, 0.783, -6.895]}
        rotation={[0.534, 0.117, -1.557]}
        scale={[0.034, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.555, 1.561, -3.37]}
        rotation={[2.407, 0.447, 1.933]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.72, 1.583, -3.256]}
        rotation={[1.37, -1.008, -0.427]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.912, 1.575, -3.471]}
        rotation={[2.48, -0.667, 1.328]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[1.455, 1.535, -3.152]}
        rotation={[1.994, -1.105, 0.467]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[1.275, 1.571, -3.34]}
        rotation={[0.57, 0.335, -1.701]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.729, 1.359, -2.019]}
        rotation={[0.404, -0.486, -1.332]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.859, 1.389, -0.925]}
        rotation={[0.671, -0.085, -1.636]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.582, 1.391, -1.486]}
        rotation={[2.548, -0.54, 1.339]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.659, 1.393, -1.006]}
        rotation={[0.605, 0.484, -2.067]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.796, 1.392, -0.844]}
        rotation={[0.514, -0.006, -1.375]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.715, 1.392, -0.579]}
        rotation={[0.805, 0.876, -2.135]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.731, 1.384, -0.472]}
        rotation={[2.456, -0.415, 1.165]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.803, 1.092, -0.498]}
        rotation={[2.027, 0.962, 2.624]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.184, 0.986, -0.302]}
        rotation={[0.769, 0.902, -2.177]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.908, 1.345, -1.972]}
        rotation={[0.491, 0.224, -1.531]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.022, 1.383, -1.046]}
        rotation={[1.04, -0.972, -0.451]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.11, 1.388, -0.413]}
        rotation={[0.672, -0.391, -1.267]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.09, 1.391, -0.146]}
        rotation={[1.923, 1.077, 2.908]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.331, 1.386, -0.025]}
        rotation={[1.994, -0.862, 0.347]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.346, 1.388, 0.157]}
        rotation={[0.551, 0.537, -1.788]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.094, 1.382, 0.152]}
        rotation={[1.731, -0.976, 0.114]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.259, 1.391, 0.26]}
        rotation={[2.495, 0.574, 1.772]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.402, 1.396, 0.663]}
        rotation={[0.728, -0.793, -0.829]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.872, 1.349, 0.147]}
        rotation={[1.308, 0.922, -3.026]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.102, 1.381, 0.545]}
        rotation={[0.556, 0.315, -1.757]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.891, 0.845, 0.527]}
        rotation={[0.591, 0.188, -1.595]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.163, 1.386, -0.513]}
        rotation={[1.646, -0.862, 0.012]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.394, 1.38, -0.446]}
        rotation={[2.464, -0.503, 0.993]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.537, 1.377, -0.336]}
        rotation={[2.057, 0.957, 2.559]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.677, 1.378, 0.146]}
        rotation={[2.467, 0.019, 1.454]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.023, 1.389, 1.163]}
        rotation={[2.423, -0.703, 1.199]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.878, 1.298, 1.377]}
        rotation={[1.982, -0.924, 0.403]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.899, 1.251, 1.938]}
        rotation={[1.667, 0.888, 2.901]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.782, 1.25, 1.472]}
        rotation={[1.873, -1.142, 0.349]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.028, 0.757, 1.734]}
        rotation={[0.687, 0.447, -1.931]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.909, 0.793, 1.974]}
        rotation={[0.519, -0.008, -1.682]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.159, 0.722, 1.323]}
        rotation={[2.69, 0.01, 1.63]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-8.031, 0.771, 1.273]}
        rotation={[2.686, 0.547, 1.846]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.069, 1.402, 0.915]}
        rotation={[2.521, 0.035, 1.605]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.116, 1.4, 1.082]}
        rotation={[0.652, 0.563, -1.779]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.072, 1.307, 1.966]}
        rotation={[1.446, -1.007, -0.027]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.269, 1.366, 2.02]}
        rotation={[2.547, 0.171, 1.555]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.509, 1.327, 2.207]}
        rotation={[2.46, -0.406, 1.34]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.541, 1.312, 2.401]}
        rotation={[2.477, -0.687, 0.956]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.865, 1.175, 2.581]}
        rotation={[1.477, 1.125, -2.952]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.104, 1.236, 2.667]}
        rotation={[0.576, 0.208, -1.8]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.352, 1.352, 1.804]}
        rotation={[1.224, 0.966, -2.739]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.644, 1.322, 1.791]}
        rotation={[2.484, 0.731, 2.062]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.766, 1.304, 1.827]}
        rotation={[0.903, 0.779, -2.416]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.727, 1.288, 2.106]}
        rotation={[2.586, 0.016, 1.448]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.306, 1.188, 2.6]}
        rotation={[0.528, -0.273, -1.371]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.954, 1.223, 2.632]}
        rotation={[2.638, -0.209, 1.49]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.342, 1.192, 2.481]}
        rotation={[0.597, -0.653, -1.011]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.419, 1.192, 2.371]}
        rotation={[0.844, 1.023, -2.253]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[3.25, 0.633, -3.489]}
        rotation={[2.536, -0.519, 1.249]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[2.699, 0.804, -3.32]}
        rotation={[2.716, -0.208, 1.499]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.751, 0.805, -4.812]}
        rotation={[1.874, -1.059, 0.256]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.062, 0.687, -4.551]}
        rotation={[2.717, 0.58, 1.878]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[3.048, 0.689, -4.762]}
        rotation={[0.607, 0.63, -2.033]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[2.967, 0.708, -3.888]}
        rotation={[2.451, 0.467, 1.725]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[2.828, 0.761, -3.549]}
        rotation={[2.318, 0.764, 2.052]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[3.043, 0.673, -3.369]}
        rotation={[0.721, -0.417, -1.414]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.537, 0.895, -4.185]}
        rotation={[1.141, -1.07, -0.362]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[2.604, 0.849, -4.749]}
        rotation={[2.596, -0.23, 1.579]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.654, 0.84, -3.358]}
        rotation={[2.757, 0.025, 1.64]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[2.536, 0.87, -4.467]}
        rotation={[0.518, 0.063, -1.699]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.101, 0.679, -4.376]}
        rotation={[2.459, 0.036, 1.492]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[2.934, 0.717, -4.131]}
        rotation={[2.441, 0.193, 1.632]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[3.319, 0.634, -4.188]}
        rotation={[2.248, -0.653, 0.83]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.522, 1.201, 2.119]}
        rotation={[2.555, -0.669, 1.152]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.86, 1.15, 2.171]}
        rotation={[1.25, 1.032, -2.634]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.11, 1.077, 2.268]}
        rotation={[2.29, -0.716, 0.912]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.869, 0.795, 2.352]}
        rotation={[1.078, -0.994, -0.526]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.248, 0.652, 2.453]}
        rotation={[2.577, -0.2, 1.236]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.138, 1.061, 2.465]}
        rotation={[0.78, 0.708, -2.185]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.189, 1.046, 2.349]}
        rotation={[0.46, 0.416, -1.669]}
        scale={[0.039, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.927, 1.12, 2.515]}
        rotation={[2.58, 0.384, 1.868]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.664, 1.318, 1.742]}
        rotation={[2.453, 0.618, 2.1]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.616, 1.21, 1.884]}
        rotation={[1.299, -1.096, -0.142]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.05, 1.111, 1.921]}
        rotation={[1.669, -1.066, -0.062]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.115, 1.086, 1.954]}
        rotation={[1.247, -0.976, -0.261]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.785, 0.836, 2.042]}
        rotation={[2.335, -0.561, 0.972]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.016, 1.283, 1.821]}
        rotation={[2.189, -0.833, 0.737]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.521, 0.932, 2.097]}
        rotation={[1.783, -0.851, 0.138]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.358, 1.379, 0.712]}
        rotation={[1.511, 0.911, -3.077]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.432, 1.376, 0.719]}
        rotation={[2.384, -0.8, 0.912]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.602, 1.366, 0.666]}
        rotation={[2.064, -0.957, 0.649]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.133, 1.346, 0.784]}
        rotation={[0.728, 0.631, -2.286]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.365, 1.321, 0.85]}
        rotation={[2.643, -0.318, 1.57]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.473, 1.301, 0.972]}
        rotation={[2.417, -0.5, 1.031]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.65, 1.277, 0.902]}
        rotation={[1.815, 0.839, 2.679]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.778, 1.233, 0.933]}
        rotation={[1.429, -0.948, -0.31]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.997, 1.16, 0.999]}
        rotation={[0.862, 0.527, -2.206]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.18, 1.089, 1.127]}
        rotation={[2.292, -0.835, 1.027]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.375, 1.025, 0.873]}
        rotation={[2.508, 0.805, 2.182]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.368, 1.022, 1.039]}
        rotation={[2.628, -0.186, 1.357]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.592, 0.944, 0.92]}
        rotation={[2.49, 0.272, 1.752]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.688, 0.898, 1.251]}
        rotation={[1.362, 0.916, -3.062]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.414, 1.374, 1.294]}
        rotation={[0.711, 0.598, -1.964]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.709, 1.365, 1.025]}
        rotation={[2.132, -0.894, 0.622]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.89, 1.33, 1.309]}
        rotation={[2.597, 0.323, 1.797]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.217, 1.309, 1.211]}
        rotation={[0.769, -0.643, -1.015]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.294, 1.304, 1.171]}
        rotation={[2.321, 0.602, 1.927]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.414, 0.991, 1.477]}
        rotation={[2.709, -0.004, 1.645]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.691, 0.893, 1.35]}
        rotation={[2.647, 0.262, 1.818]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.856, 0.831, 1.379]}
        rotation={[1.617, 1.026, -3.14]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.245, 1.382, 1.501]}
        rotation={[0.572, 0.201, -1.81]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.337, 1.367, 1.553]}
        rotation={[2.4, -0.651, 0.913]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.767, 1.331, 1.444]}
        rotation={[0.486, -0.57, -1.203]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.918, 1.312, 1.534]}
        rotation={[0.506, 0.543, -1.747]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.214, 1.282, 1.563]}
        rotation={[2.223, 0.658, 2.198]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.483, 1.242, 1.682]}
        rotation={[0.553, 0.46, -1.862]}
        scale={[0.049, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.649, 1.22, 1.67]}
        rotation={[1.738, -1.184, 0.243]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.133, 1.091, 1.577]}
        rotation={[1.395, 1.207, -2.888]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.31, 1.023, 1.667]}
        rotation={[1.107, -0.829, -0.612]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.295, 1.023, 1.838]}
        rotation={[2.481, -0.344, 1.097]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.754, 0.859, 1.69]}
        rotation={[0.645, -0.54, -1.423]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.081, 1.364, -0.169]}
        rotation={[1.962, -0.866, 0.451]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.085, 1.361, -0.365]}
        rotation={[1.999, 1.148, 2.702]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.358, 1.355, -0.212]}
        rotation={[0.548, -0.679, -1.227]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.295, 1.356, -0.354]}
        rotation={[0.813, 0.774, -2.233]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.764, 1.346, -0.04]}
        rotation={[2.601, 0.425, 1.862]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.837, 1.341, -0.088]}
        rotation={[0.594, -0.123, -1.649]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.956, 1.312, -0.153]}
        rotation={[0.675, -0.357, -1.413]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.263, 1.301, 0.054]}
        rotation={[2.575, 0.139, 1.645]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.431, 1.275, 0.068]}
        rotation={[2.368, -0.591, 1.002]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.946, 1.15, 0.192]}
        rotation={[2.623, -0.311, 1.349]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.021, 1.086, -0.042]}
        rotation={[2.518, 0.058, 1.567]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.435, 0.976, 0.207]}
        rotation={[1.637, 1.062, -3.017]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.501, 1.355, 0.153]}
        rotation={[1.163, 0.975, -2.863]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.213, 1.336, 0.298]}
        rotation={[0.928, 0.831, -2.208]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.459, 1.318, 0.351]}
        rotation={[1.474, -0.991, -0.274]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.789, 1.23, 0.339]}
        rotation={[2.692, -0.446, 1.433]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.943, 1.162, 0.263]}
        rotation={[1.754, 0.925, 2.837]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.207, 1.079, 0.343]}
        rotation={[1.038, 0.838, -2.403]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.205, 1.328, -1.947]}
        rotation={[0.469, -0.375, -1.407]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.16, 1.333, -1.774]}
        rotation={[0.717, -0.624, -1.101]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.419, 1.31, -1.702]}
        rotation={[1.122, 1.078, -2.716]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.437, 1.308, -1.648]}
        rotation={[2.634, -0.024, 1.388]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.82, 1.275, -1.547]}
        rotation={[0.566, 0.551, -1.97]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.984, 1.266, -1.643]}
        rotation={[0.892, 0.61, -2.248]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.525, 1.14, -0.751]}
        rotation={[1.933, -1.099, 0.336]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.216, 1.334, -1.602]}
        rotation={[1.47, -1.12, 0.017]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.41, 1.354, -1.315]}
        rotation={[0.866, -0.849, -1.073]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.718, 1.29, -1.439]}
        rotation={[0.69, -0.308, -1.42]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.917, 1.292, -1.26]}
        rotation={[0.374, -0.061, -1.488]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.309, 1.239, -1.25]}
        rotation={[0.541, -0.302, -1.341]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.54, 1.242, -0.977]}
        rotation={[2.551, 0.366, 1.872]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.862, 1.203, -0.961]}
        rotation={[0.813, 0.92, -2.336]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.29, 1.165, -0.797]}
        rotation={[2.595, 0.314, 1.759]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.376, 1.373, -1.079]}
        rotation={[1.744, -1.165, 0.282]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.517, 1.372, -0.799]}
        rotation={[1.477, 0.955, 3.073]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.574, 1.368, -0.871]}
        rotation={[2.549, -0.29, 1.213]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.875, 1.36, -0.74]}
        rotation={[2.341, 0.455, 1.936]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.916, 1.353, -0.799]}
        rotation={[2.332, 0.863, 2.387]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.232, 1.291, -0.94]}
        rotation={[2.515, 0.251, 1.522]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.557, 1.3, -0.592]}
        rotation={[1.086, -0.777, -0.784]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.535, 1.261, -0.823]}
        rotation={[0.643, 0.154, -1.638]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.213, 1.182, -0.641]}
        rotation={[0.826, 0.786, -2.247]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.574, 1.15, -0.515]}
        rotation={[2.48, 0.675, 1.959]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.22, 1.365, 0.302]}
        rotation={[2.116, 0.922, 2.506]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.294, 1.367, 0.559]}
        rotation={[2.542, -0.316, 1.122]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.754, 1.35, 0.292]}
        rotation={[2.172, -1.125, 0.712]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.599, 1.362, 0.596]}
        rotation={[0.686, 0.715, -1.944]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.96, 1.357, 0.616]}
        rotation={[2.352, -0.57, 0.977]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.368, 1.331, 0.695]}
        rotation={[1.935, -0.975, 0.418]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.783, 1.249, 0.575]}
        rotation={[2.252, 0.804, 2.358]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.208, 1.09, 0.765]}
        rotation={[2.546, 0.679, 2.021]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.232, 1.085, 0.658]}
        rotation={[2.556, -0.352, 1.214]}
        scale={[0.049, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.588, 0.953, 0.689]}
        rotation={[0.674, 0.592, -2.188]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.834, 0.858, 0.829]}
        rotation={[2.132, 1.086, 2.639]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.257, 1.245, 1.954]}
        rotation={[1.857, 0.913, 2.679]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.872, 1.159, 2.093]}
        rotation={[0.674, -0.589, -1.279]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.243, 1.03, 2.216]}
        rotation={[0.798, -0.698, -0.999]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.619, 0.892, 2.214]}
        rotation={[0.745, -0.433, -1.304]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-7.697, 0.862, 2.237]}
        rotation={[0.705, -0.654, -1.001]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-8.128, 0.7, 2.334]}
        rotation={[2.517, 0.77, 2.1]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.654, 1.37, -0.682]}
        rotation={[2.274, -0.674, 0.842]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.305, 1.341, -0.582]}
        rotation={[0.615, 0.476, -1.724]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.629, 1.311, -0.47]}
        rotation={[0.856, -0.836, -0.835]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.782, 1.274, -0.531]}
        rotation={[2.583, -0.366, 1.396]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-6.626, 1.193, -0.199]}
        rotation={[2.419, -0.728, 1.077]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-6.872, 1.111, -0.221]}
        rotation={[0.559, -0.497, -1.431]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-7.112, 1.044, -0.097]}
        rotation={[2.619, -0.263, 1.428]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.004, 1.347, -2.512]}
        rotation={[2.654, 0.481, 1.785]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.237, 1.329, -2.414]}
        rotation={[2.549, 0.748, 2.018]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.506, 1.309, -2.257]}
        rotation={[0.734, 0.219, -1.853]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.886, 1.278, -1.955]}
        rotation={[2.663, 0.327, 1.728]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.263, 1.247, -1.584]}
        rotation={[0.525, 0.358, -1.567]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.482, 1.229, -1.438]}
        rotation={[2.643, -0.277, 1.4]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.909, 1.257, -5.694]}
        rotation={[1.198, -1.074, -0.451]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.662, 1.22, -5.806]}
        rotation={[0.871, -0.603, -1.086]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[0.707, 1.033, -6.429]}
        rotation={[0.443, -0.453, -1.349]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.439, 0.972, -6.451]}
        rotation={[2.139, -0.834, 0.574]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[0.397, 0.914, -6.594]}
        rotation={[1.099, 0.934, -2.596]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.496, 1.199, -5.836]}
        rotation={[0.822, 0.868, -2.134]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.275, 1.03, -6.199]}
        rotation={[0.862, 0.982, -2.23]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.155, 0.99, -6.244]}
        rotation={[0.609, 0.552, -1.828]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[0.233, 0.904, -6.527]}
        rotation={[0.617, 0.309, -1.82]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[0.017, 0.878, -6.475]}
        rotation={[2.43, -0.737, 1.166]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.155, 1.128, -5.707]}
        rotation={[2.297, -0.832, 0.973]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.025, 1.109, -5.831]}
        rotation={[1.63, 0.986, 2.96]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.2, 0.882, -6.346]}
        rotation={[0.728, 0.264, -1.879]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.342, 0.722, -6.716]}
        rotation={[2.272, 0.552, 2.055]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.417, 0.643, -6.905]}
        rotation={[2.406, -0.635, 1.039]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.12, 0.966, -5.645]}
        rotation={[0.805, 0.786, -2.106]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.586, 0.926, -5.508]}
        rotation={[1.93, 0.817, 2.575]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.447, 0.903, -5.641]}
        rotation={[2.23, 0.711, 2.269]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.421, 0.835, -5.837]}
        rotation={[0.621, -0.335, -1.42]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.583, 0.75, -5.978]}
        rotation={[0.818, 0.968, -2.296]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.739, 0.786, -5.802]}
        rotation={[0.915, -0.789, -0.779]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.304, 0.68, -6.311]}
        rotation={[0.723, 0.314, -1.864]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.687, 0.702, -6.051]}
        rotation={[2.465, -0.533, 1.088]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.954, 0.617, -6.139]}
        rotation={[2.526, -0.236, 1.465]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.64, 0.665, -6.174]}
        rotation={[0.647, 0.271, -1.91]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.687, 0.611, -6.296]}
        rotation={[2.546, 0.723, 1.979]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.869, 0.539, -6.392]}
        rotation={[0.671, -0.35, -1.436]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.652, 0.509, -6.586]}
        rotation={[1.829, 0.858, 2.734]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.593, 0.51, -6.614]}
        rotation={[0.685, -0.43, -1.346]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.848, 0.406, -6.763]}
        rotation={[0.824, -0.92, -0.739]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.274, 0.844, -5.369]}
        rotation={[2.331, 0.936, 2.229]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.043, 0.812, -5.574]}
        rotation={[0.618, -0.322, -1.517]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.119, 0.758, -5.679]}
        rotation={[0.505, -0.144, -1.584]}
        scale={[0.036, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.271, 0.659, -5.863]}
        rotation={[2.683, 0.284, 1.692]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.181, 0.64, -5.959]}
        rotation={[0.627, 0.196, -1.796]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.726, 0.512, -6.019]}
        rotation={[2.407, -0.895, 0.943]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.479, 0.483, -6.224]}
        rotation={[0.61, -0.2, -1.563]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.058, 0.512, -6.367]}
        rotation={[2.487, 0.106, 1.55]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.604, 0.403, -6.372]}
        rotation={[1.866, -0.956, 0.384]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.578, 0.368, -6.48]}
        rotation={[0.631, -0.079, -1.674]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.185, 0.359, -6.708]}
        rotation={[0.745, 0.905, -2.235]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.85, 0.332, -6.435]}
        rotation={[0.734, -0.623, -1.124]}
        scale={[0.046, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.843, 0.784, -5.289]}
        rotation={[2.444, 0.416, 1.898]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.53, 0.805, -5.341]}
        rotation={[2.197, -0.913, 0.879]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.22, 0.754, -5.227]}
        rotation={[1.288, -0.945, -0.562]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.375, 0.759, -5.158]}
        rotation={[2.472, 0.362, 1.812]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.743, 0.616, -5.743]}
        rotation={[2.114, 0.81, 2.276]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.166, 0.66, -5.467]}
        rotation={[1.994, -0.936, 0.495]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.393, 0.584, -5.547]}
        rotation={[2.756, 0.34, 1.759]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.164, 0.623, -5.554]}
        rotation={[0.736, 0.835, -2.252]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.911, 0.527, -5.897]}
        rotation={[0.443, 0.128, -1.523]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.914, 0.568, -5.79]}
        rotation={[2.553, 0.801, 2.031]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.026, 0.482, -5.953]}
        rotation={[1, -0.837, -0.807]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.511, 0.412, -5.883]}
        rotation={[2.205, -0.795, 0.627]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.047, 0.447, -6.024]}
        rotation={[0.838, -0.744, -0.978]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-2.976, 0.411, -6.158]}
        rotation={[0.533, -0.578, -1.193]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.418, 0.379, -6.012]}
        rotation={[0.486, -0.056, -1.414]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.386, 0.322, -6.18]}
        rotation={[0.505, -0.199, -1.476]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.331, 0.278, -6.326]}
        rotation={[0.696, -0.369, -1.256]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.441, 0.256, -6.329]}
        rotation={[2.592, -0.045, 1.283]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.463, 1.081, -5.68]}
        rotation={[0.865, -0.734, -1.08]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.808, 0.964, -5.81]}
        rotation={[2.57, 0.28, 1.628]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.445, 0.956, -6.021]}
        rotation={[0.554, 0.735, -1.912]}
        scale={[0.049, 0.02, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.539, 0.943, -6.006]}
        rotation={[1.983, -1.017, 0.433]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.512, 0.882, -6.184]}
        rotation={[1.409, 0.991, 3.095]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.816, 0.832, -6.16]}
        rotation={[0.79, 0.799, -2.079]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.662, 0.754, -6.446]}
        rotation={[2.466, -0.39, 1.184]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.015, 0.785, -6.181]}
        rotation={[1.955, -1.086, 0.389]}
        scale={[0.044, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.619, 0.666, -6.721]}
        rotation={[0.61, 0.681, -2.005]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.983, 0.616, -6.657]}
        rotation={[2.489, 0.41, 1.651]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.732, 0.554, -6.981]}
        rotation={[1.099, 0.767, -2.572]}
        scale={[0.041, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.267, 0.531, -6.733]}
        rotation={[2.585, -0.365, 1.24]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.897, 0.536, -6.938]}
        rotation={[2.455, -0.389, 1.179]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.362, 1.34, -5.357]}
        rotation={[0.882, -0.916, -0.892]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.275, 1.278, -5.789]}
        rotation={[2.511, 0.358, 1.921]}
        scale={[0.04, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[1.13, 1.233, -6.049]}
        rotation={[1.338, -1.097, -0.345]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[0.823, 1.161, -6.133]}
        rotation={[0.579, 0.567, -1.955]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[1.091, 1.19, -6.198]}
        rotation={[2.602, 0.075, 1.518]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.861, 1.095, -6.341]}
        rotation={[0.639, 0.369, -1.893]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.422, 0.809, -5.044]}
        rotation={[2.6, 0.193, 1.527]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.739, 0.861, -4.877]}
        rotation={[0.692, -0.765, -0.883]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.783, 1.008, -4.558]}
        rotation={[1.894, -1.105, 0.401]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.664, 0.69, -5.247]}
        rotation={[1.215, -1.101, -0.388]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.912, 0.805, -4.963]}
        rotation={[1.5, 1.097, -3.141]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.757, 0.604, -5.419]}
        rotation={[0.581, 0.401, -1.945]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.898, 0.577, -5.453]}
        rotation={[2.525, 0.711, 1.983]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.153, 0.761, -5.013]}
        rotation={[0.772, -0.821, -1.096]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.785, 0.498, -5.645]}
        rotation={[0.563, -0.146, -1.502]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.725, 0.355, -5.987]}
        rotation={[0.62, -0.094, -1.554]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.932, 0.421, -5.798]}
        rotation={[1.778, 1.105, 2.939]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.854, 0.415, -5.83]}
        rotation={[2.504, -0.208, 1.421]}
        scale={[0.036, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.293, 0.573, -5.387]}
        rotation={[1.644, 1.003, 2.909]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.957, 0.34, -5.982]}
        rotation={[0.425, 0.445, -1.697]}
        scale={[0.039, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.803, 0.229, -6.268]}
        rotation={[2.257, -0.665, 0.935]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.091, 0.308, -6.025]}
        rotation={[2.589, 0.085, 1.559]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.435, 0.504, -5.508]}
        rotation={[1.676, 1.136, 3.14]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-5.288, 1.253, 2.73]}
        rotation={[1.676, 0.956, 2.956]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-5.447, 1.255, 2.802]}
        rotation={[1.505, -0.857, -0.225]}
        scale={[0.033, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.796, 1.223, 1.647]}
        rotation={[0.49, 0.498, -1.855]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.657, 1.255, 1.241]}
        rotation={[2.444, 0.626, 2.053]}
        scale={[0.041, 0.016, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.749, 1.226, 1.518]}
        rotation={[2.471, -0.278, 1.285]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[-4.053, 1.333, 0.602]}
        rotation={[2.439, -0.699, 1.158]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.675, 1.351, -0.508]}
        rotation={[1.867, -0.855, 0.325]}
        scale={[0.043, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.236, 1.576, -3.563]}
        rotation={[2.658, -0.585, 1.362]}
        scale={[0.042, 0.017, 0.004]}
      />
      <instances.GNInstance1
        position={[1.48, 1.603, -3.491]}
        rotation={[2.158, -0.882, 0.561]}
        scale={[0.031, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[0.636, 1.538, -3.629]}
        rotation={[0.56, -0.234, -1.421]}
        scale={[0.031, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[0.877, 1.556, -3.612]}
        rotation={[1.991, 0.928, 2.575]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[0.428, 1.517, -3.52]}
        rotation={[2.273, 0.753, 2.127]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.643, 1.422, -3.351]}
        rotation={[0.55, -0.274, -1.311]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.618, 1.433, -3.277]}
        rotation={[1.851, -1.054, 0.162]}
        scale={[0.045, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.847, 1.391, -3.293]}
        rotation={[2.55, 0.034, 1.396]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-0.937, 1.356, -3.204]}
        rotation={[2.537, 0.58, 1.918]}
        scale={[0.032, 0.013, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.064, 1.371, -3.303]}
        rotation={[0.477, 0.501, -1.702]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[-0.067, 1.511, -3.302]}
        rotation={[2.369, -0.525, 1.022]}
        scale={[0.046, 0.018, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.381, 1.225, -3.069]}
        rotation={[2.776, 0.29, 1.744]}
        scale={[0.034, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.588, 1.134, -2.718]}
        rotation={[1.412, -1.069, -0.284]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-1.666, 1.128, -2.677]}
        rotation={[1.914, 1.152, 2.795]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-1.666, 1.075, -2.54]}
        rotation={[1.195, 1.051, -2.735]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-2.514, 1.166, -2.331]}
        rotation={[0.882, -1.009, -0.647]}
        scale={[0.035, 0.014, 0.003]}
      />
      <instances.GNInstance1
        position={[-3.269, 1.338, -1.85]}
        rotation={[1.133, -0.932, -0.577]}
        scale={[0.047, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.327, 1.352, -1.664]}
        rotation={[1.972, -0.929, 0.339]}
        scale={[0.048, 0.019, 0.004]}
      />
      <instances.GNInstance1
        position={[-3.727, 1.326, -0.208]}
        rotation={[1.503, 1.086, -2.876]}
        scale={[0.037, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[-4.572, 1.333, 1.053]}
        rotation={[1.008, 0.877, -2.635]}
        scale={[0.03, 0.012, 0.003]}
      />
      <instances.GNInstance1
        position={[1.578, 1.602, -3.564]}
        rotation={[1.489, 1.105, -3.012]}
        scale={[0.038, 0.015, 0.003]}
      />
      <instances.GNInstance1
        position={[1.946, 1.618, -3.498]}
        rotation={[0.383, 0.153, -1.621]}
        scale={[0.044, 0.018, 0.004]}
      />
    </group>
  )
}

useGLTF.preload('/bunker.glb')
