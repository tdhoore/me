import React from "react";
import GrassStone1 from "./models/GrassStone1";
import GrassStone2 from "./models/GrassStone2";
import ModelProvider from "./ModelProvider";

export default function Terrain(props) {
  return (
    <ModelProvider>
      <group {...props}>
        <GrassStone1
          name="flat_stone006"
          castShadow
          receiveShadow
          position={[-4.025, 3.967, 0.569]}
          rotation={[0.064, -0.187, 0.238]}
          scale={0.425}
        />
        <GrassStone1
          name="flat_stone007"
          castShadow
          receiveShadow
          position={[-3.679, 3.967, 1.024]}
          rotation={[0.141, 0.635, 0.099]}
          scale={0.324}
        />
        <GrassStone1
          name="flat_stone008"
          castShadow
          receiveShadow
          position={[-3.206, 3.924, 0.564]}
          rotation={[0.359, 1.257, -0.232]}
          scale={[0.395, 0.327, 0.397]}
        />
        <GrassStone1
          name="stone1027"
          castShadow
          receiveShadow
          position={[-3.326, 3.599, 1.523]}
          rotation={[0.138, -0.117, -0.232]}
          scale={[0.645, 0.337, 0.65]}
        />
        <GrassStone2
          name="terain1001"
          position={[1.963, -0.012, 5.803]}
          rotation={[0, 0.552, 0]}
          scale={[1, 0.871, 1]}
        />

        <GrassStone2
          name="terain1002"
          position={[5.437, 0.041, -1.987]}
          rotation={[-Math.PI, 1.371, -Math.PI]}
          scale={[1.423, 1.175, 1]}
        />

        <GrassStone2
          name="terain1003"
          position={[2.519, -0.656, -5.117]}
          rotation={[-Math.PI, 0.159, -Math.PI]}
          scale={[0.991, 1.524, 1]}
        />
        <GrassStone2
          name="terain1004"
          position={[-3.89, -0.121, 4.749]}
          rotation={[0, -0.772, 0]}
          scale={[1, 1.296, 1]}
        />

        <GrassStone2
          name="terain1005"
          position={[-4.898, -0.121, 3.201]}
          rotation={[0, -1.228, 0]}
          scale={[1, 1.196, 0.557]}
        />

        <GrassStone2
          name="terain1006"
          position={[5.401, 0.032, -3.574]}
          rotation={[-Math.PI, 0.89, -Math.PI]}
          scale={[1.003, 0.436, 1]}
        />

        <GrassStone2
          name="terain1007"
          position={[5.976, -0.07, -5.057]}
          rotation={[0, 1.415, 0]}
          scale={[0.807, 0.44, 1]}
        />

        <GrassStone2
          name="terain1008"
          position={[4.297, -0.006, -5.8]}
          rotation={[-Math.PI, 0.019, -Math.PI]}
          scale={[0.807, 0.665, 1]}
        />

        <GrassStone1
          name="terain2001"
          position={[-2.197, 0.144, 5.598]}
          rotation={[0, -0.47, 0]}
          scale={[0.974, 0.51, 0.85]}
        />

        <GrassStone1
          name="terain2002"
          position={[0.387, 0.036, 5.285]}
          rotation={[0, 0.444, 0]}
          scale={[1.195, 0.57, 0.85]}
        />

        <GrassStone1
          name="terain2003"
          position={[4.316, 0.006, 1.393]}
          rotation={[0, 1.12, 0]}
          scale={[1.505, 0.586, 0.85]}
        />
        <GrassStone1
          name="terain2004"
          position={[2.724, -2.104, 3.952]}
          rotation={[0, 0.678, 0]}
          scale={[1.505, 1.107, 0.85]}
        />

        <GrassStone1
          name="terain2005"
          position={[4.584, -1.015, 2.669]}
          rotation={[0, 1.073, 0]}
          scale={[0.92, 0.621, 0.85]}
        />
        <GrassStone1
          name="terain2006"
          position={[4.191, -0.198, -3.564]}
          rotation={[-Math.PI, 0.876, -Math.PI]}
          scale={[0.948, 0.586, 0.85]}
        />

        <GrassStone1
          name="terain2007"
          position={[0.475, -0.685, -5.167]}
          rotation={[0, -0.511, 0]}
          scale={[0.979, 0.705, 0.85]}
        />
        <GrassStone1
          name="terain2008"
          position={[3.82, -0.26, 4.399]}
          rotation={[0, 0.673, 0]}
          scale={[1.505, 0.32, 1.461]}
        />

        <GrassStone1
          name="terain2009"
          position={[4.843, -0.333, -4.75]}
          rotation={[-Math.PI, 1.31, -Math.PI]}
          scale={[0.634, 0.384, 0.85]}
        />
        <GrassStone1
          name="terain2010"
          position={[-4.883, -0.149, -0.008]}
          rotation={[Math.PI, -1.31, Math.PI]}
          scale={[1.505, 0.749, 1.461]}
        />

        <GrassStone1
          name="terain2011"
          position={[-3.622, -0.109, -3.459]}
          rotation={[Math.PI, -0.681, Math.PI]}
          scale={[1.117, 0.676, 1.461]}
        />

        <GrassStone2
          name="terain1009"
          position={[-5.617, -0.064, -1.479]}
          rotation={[0, -1.194, 0]}
          scale={[1, 1.196, 1.417]}
        />

        <GrassStone2
          name="terain1010"
          position={[-2.221, -0.017, -5.454]}
          rotation={[Math.PI, -0.554, Math.PI]}
          scale={[1.686, 1.196, 1.886]}
        />

        <GrassStone1
          name="terain2012"
          position={[-0.815, -0.571, -6.159]}
          rotation={[0, -0.413, 0]}
          scale={[0.979, 0.428, 1.481]}
        />

        <GrassStone1
          name="stone1001"
          castShadow
          receiveShadow
          position={[2.66, -0.593, 10.231]}
          rotation={[-1.538, 1.266, 1.264]}
          scale={[1, 1.254, 1]}
        />
        <GrassStone1
          name="stone2001"
          castShadow
          receiveShadow
          position={[3.643, 0.184, 9.677]}
          rotation={[-3.009, 0.289, 2.285]}
          scale={[1.377, 0.988, 1.809]}
        />
        <GrassStone1
          name="stone1002"
          castShadow
          receiveShadow
          position={[2.848, 0.87, 8.171]}
          rotation={[2.923, 0.541, 0.098]}
          scale={[1, 1.254, 1]}
        />
        <GrassStone1
          name="terain2013"
          position={[-3.511, 1.908, 1.354]}
          rotation={[0, -1.261, 0]}
          scale={[1.511, 0.509, 1.511]}
        />

        <GrassStone1
          name="terain2014"
          position={[-15.184, -0.479, 2.871]}
          rotation={[0, -1.405, 0]}
          scale={[2.082, 1.408, 2.082]}
        />

        <GrassStone2
          name="terain1011"
          position={[-12.387, -0.121, 5.614]}
          rotation={[0, 0.991, 0]}
          scale={[1.176, 1.655, 1.544]}
        />
        <GrassStone2
          name="terain1012"
          position={[-11.644, -0.302, 3.37]}
          rotation={[0, -1.347, -Math.PI]}
          scale={[-1.176, -1.242, -1.544]}
        />

        <GrassStone1
          name="terain2015"
          position={[-13.288, -0.402, 1.107]}
          rotation={[-Math.PI, 0.602, 0]}
          scale={[-1.331, -0.7, -1.331]}
        />

        <GrassStone1
          name="water"
          castShadow
          receiveShadow
          position={[-16.406, 0.486, -37.511]}
          scale={1.947}
        />
        <GrassStone2
          name="terain1013"
          position={[-17.272, -0.228, 6.2]}
          rotation={[0, -0.41, 0]}
          scale={[1.58, 1.346, 2.074]}
        />

        <GrassStone1
          name="stone1003"
          castShadow
          receiveShadow
          position={[-7.381, -0.244, 9.806]}
          rotation={[-1.207, 1.244, 0.916]}
          scale={[0.593, 0.743, 0.593]}
        />
        <GrassStone1
          name="stone1004"
          castShadow
          receiveShadow
          position={[-7.569, -0.543, 10.092]}
          rotation={[0.531, 0.524, -0.264]}
          scale={[0.593, 0.977, 0.642]}
        />
        <GrassStone1
          name="stone1005"
          castShadow
          receiveShadow
          position={[-6.22, 0.122, 9.519]}
          rotation={[0.335, 0.715, -0.239]}
          scale={[0.322, 0.579, 0.351]}
        />
        <GrassStone1
          name="terain2016"
          position={[-0.206, -0.047, -17.154]}
          rotation={[0, 1.071, 0]}
          scale={[1.38, 0.692, 0.93]}
        />

        <GrassStone1
          name="terain2017"
          position={[-1.978, -0.387, -15.049]}
          rotation={[Math.PI, -0.752, Math.PI]}
          scale={[1.38, 0.862, 1.642]}
        />

        <GrassStone2
          name="terain1014"
          position={[1.058, -0.006, -19.503]}
          rotation={[-Math.PI, 1.5, -Math.PI]}
          scale={[1.038, 1.49, 1.327]}
        />

        <GrassStone1
          name="stone1006"
          castShadow
          receiveShadow
          position={[4.169, -0.593, -12.529]}
          rotation={[-2.722, 0.744, 2.575]}
          scale={[1, 1.254, 1]}
        />
        <GrassStone1
          name="stone2002"
          castShadow
          receiveShadow
          position={[4.329, 0.522, -15.153]}
          rotation={[0.521, -0.344, -0.41]}
          scale={[1.377, 0.988, 1.809]}
        />
        <GrassStone1
          name="stone1007"
          castShadow
          receiveShadow
          position={[2.836, 0.87, -14.11]}
          rotation={[2.949, -0.236, -0.062]}
          scale={[1, 1.254, 1]}
        />
        <GrassStone1
          name="stone1008"
          castShadow
          receiveShadow
          position={[4.877, -0.593, -13.439]}
          rotation={[2.763, 1.045, -2.651]}
          scale={[1.878, 1.278, 1.886]}
        />
        <GrassStone1
          name="stone2003"
          castShadow
          receiveShadow
          position={[6.018, -0.473, -11.941]}
          rotation={[2.744, -0.598, 1.566]}
          scale={[2.476, 1.046, 2.038]}
        />
        <GrassStone1
          name="stone2004"
          castShadow
          receiveShadow
          position={[7.061, 0.227, -14.222]}
          rotation={[1.312, -0.78, 0.927]}
          scale={[1.377, 1.708, 1.809]}
        />
        <GrassStone2
          name="terain1015"
          position={[-7.898, -0.004, -11.804]}
          rotation={[0, 0.304, 0]}
          scale={[1.369, 1.497, 1]}
        />

        <GrassStone2
          name="terain1016"
          position={[-10.361, -0.104, -11.761]}
          rotation={[-Math.PI, 0.142, 0]}
          scale={[-1.392, -1.642, -1.178]}
        />

        <GrassStone1
          name="terain2018"
          position={[-12.884, -0.255, -13.02]}
          rotation={[Math.PI, -0.27, Math.PI]}
          scale={[1.38, 0.954, 2.327]}
        />

        <GrassStone2
          name="terain1017"
          position={[-14.567, -0.101, -12.718]}
          rotation={[0, -0.549, -Math.PI]}
          scale={[-1.392, -2.321, -2.273]}
        />

        <GrassStone1
          name="terain2019"
          position={[-17.614, -0.466, -14.48]}
          rotation={[-Math.PI, 0.535, -Math.PI]}
          scale={[2.038, 1.137, 2.327]}
        />

        <GrassStone1
          name="terain2020"
          position={[-19.707, -0.047, -26.034]}
          rotation={[0, 0.875, 0]}
          scale={[2.038, 1.104, 2.327]}
        />

        <GrassStone1
          name="terain2021"
          position={[-21.89, -0.047, -21.333]}
          rotation={[Math.PI, -0.041, Math.PI]}
          scale={[1.38, 1.171, 2.327]}
        />

        <GrassStone2
          name="terain1018"
          position={[-20.328, -0.149, -15.847]}
          rotation={[0, -1.317, -Math.PI]}
          scale={[-1.392, -2.321, -2.273]}
        />

        <GrassStone2
          name="terain1019"
          position={[-20.372, -0.233, -23.678]}
          rotation={[0, -1.526, -Math.PI]}
          scale={[-1.392, -2.321, -2.273]}
        />

        <GrassStone1
          name="terain2022"
          position={[-18.526, -0.047, -30.176]}
          rotation={[0, -1.004, 0]}
          scale={[1.38, 1.248, 2.327]}
        />

        <GrassStone1
          name="terain2023"
          position={[-0.122, -0.047, -26.274]}
          rotation={[0, 1.566, 0]}
          scale={[1.616, 1.161, 1.345]}
        />

        <GrassStone2
          name="terain1020"
          position={[1.208, -0.006, -29.136]}
          rotation={[-Math.PI, 1.288, -Math.PI]}
          scale={[1.038, 2.157, 1.327]}
        />

        <GrassStone2
          name="terain1021"
          position={[0.461, -0.006, -29.684]}
          rotation={[Math.PI, -1.342, Math.PI]}
          scale={[1.038, 1.811, 1.327]}
        />

        <GrassStone1
          name="terain2024"
          position={[-1.51, -0.139, -30.335]}
          rotation={[0, -0.999, 0]}
          scale={[1.616, 1.332, 2.214]}
        />

        <GrassStone1
          name="terain2025"
          position={[-1.098, -0.139, -33.802]}
          rotation={[-Math.PI, 0.759, -Math.PI]}
          scale={[0.918, 1.192, 1.258]}
        />

        <GrassStone2
          name="terain1022"
          position={[-0.739, -0.006, -32.691]}
          rotation={[0, -1.425, 0]}
          scale={[1.038, 1.289, 1.327]}
        />

        <GrassStone1
          name="terain2026"
          position={[-11.609, -0.139, -35.066]}
          rotation={[-Math.PI, 1.117, -Math.PI]}
          scale={[1.616, 1.697, 2.214]}
        />

        <GrassStone2
          name="terain1023"
          position={[-11.267, 3.311, -33.911]}
          rotation={[Math.PI, -0.334, Math.PI]}
          scale={[1.038, 1.289, 1.327]}
        />

        <GrassStone2
          name="terain1024"
          position={[-9.757, 2.735, -33.997]}
          rotation={[0, 1.393, 0]}
          scale={[0.667, 1.289, 0.433]}
        />

        <GrassStone1
          name="terain2027"
          position={[-8.647, -0.047, -35.141]}
          rotation={[0, -0.274, 0]}
          scale={[1.16, 1.072, 1.345]}
        />

        <GrassStone1
          name="terain2028"
          position={[-3.086, -0.047, -34.299]}
          rotation={[-Math.PI, 0.479, -Math.PI]}
          scale={[1.16, 1.25, 1.345]}
        />

        <GrassStone1
          name="terain2029"
          position={[-14.719, -0.047, -34.458]}
          rotation={[-Math.PI, 0.177, -Math.PI]}
          scale={[1.38, 1.248, 2.327]}
        />

        <GrassStone2
          name="terain1025"
          position={[-13.642, 1.052, -14.225]}
          rotation={[0, -1.157, -Math.PI]}
          scale={[-1.766, -1.508, -2.273]}
        />

        <GrassStone2
          name="terain1026"
          position={[-0.74, -0.006, -23.486]}
          rotation={[0, -1.288, 0]}
          scale={[1.038, 1.814, 1.559]}
        />

        <GrassStone1
          name="terain2030"
          position={[-2.654, -0.383, -16.88]}
          rotation={[Math.PI, -1.535, Math.PI]}
          scale={[1.38, 1.054, 1.778]}
        />

        <GrassStone2
          name="terain1027"
          position={[-3.962, 1.28, -17.722]}
          rotation={[-Math.PI, 0.439, -Math.PI]}
          scale={[1.337, 1.49, 2.757]}
        />

        <GrassStone1
          name="terain2031"
          position={[-15.124, 2.607, -23.857]}
          rotation={[0, 0.668, 0]}
          scale={[2.038, 0.884, 2.327]}
        />

        <GrassStone1
          name="terain2032"
          position={[-12.852, 2.374, -24.812]}
          rotation={[Math.PI, -0.71, Math.PI]}
          scale={[1.532, 0.603, 1.748]}
        />

        <GrassStone1
          name="terain2033"
          position={[-15.223, 2.88, -26.999]}
          rotation={[Math.PI, -0.087, Math.PI]}
          scale={[1.532, 0.691, 1.748]}
        />

        <GrassStone2
          name="terain1028"
          position={[-15.805, 3.07, -25.579]}
          rotation={[0, -1.41, -Math.PI]}
          scale={[-1.392, -1.594, -2.273]}
        />

        <GrassStone2
          name="terain1029"
          position={[-29.597, -0.149, -13.381]}
          rotation={[Math.PI, -0.991, 0]}
          scale={[-1.745, -3.474, -2.848]}
        />

        <GrassStone1
          name="terain2034"
          position={[-33.844, 0.107, -10.703]}
          rotation={[0, 0.388, 0]}
          scale={[2.412, 1.419, 2.327]}
        />

        <GrassStone2
          name="terain1030"
          position={[-31.536, -0.149, -12.959]}
          rotation={[0, 1.395, -Math.PI]}
          scale={[-1.745, -2.316, -2.181]}
        />

        <GrassStone1
          name="terain2035"
          position={[-37.583, 0.107, -10.042]}
          rotation={[-Math.PI, 0.269, -Math.PI]}
          scale={[2.412, 1.585, 2.327]}
        />

        <GrassStone2
          name="terain1031"
          position={[-39.749, -0.149, -6.654]}
          rotation={[Math.PI, -0.198, 0]}
          scale={[-1.745, -3.294, -2.848]}
        />

        <GrassStone1
          name="terain2036"
          position={[-38.123, 0.107, -7.471]}
          rotation={[Math.PI, -1.072, Math.PI]}
          scale={[1.263, 1.03, 1.218]}
        />

        <GrassStone2
          name="terain1032"
          position={[-40.447, -0.149, -8.6]}
          rotation={[0, -0.523, -Math.PI]}
          scale={[-1.745, -2.654, -2.848]}
        />

        <GrassStone2
          name="terain1033"
          position={[-45.049, -0.149, -8.891]}
          rotation={[-Math.PI, 0.809, 0]}
          scale={[-2.532, -3.384, -4.133]}
        />

        <GrassStone1
          name="terain2037"
          position={[-36.484, 5.58, -11.54]}
          rotation={[-Math.PI, 1.064, -Math.PI]}
          scale={[1.711, 0.344, 2.261]}
        />

        <GrassStone1
          name="terain2038"
          position={[-35.981, 4.725, -13.808]}
          rotation={[0, -0.43, 0]}
          scale={[2.15, 0.344, 2.261]}
        />

        <GrassStone1
          name="terain2039"
          position={[-47.1, 4.483, -15.887]}
          rotation={[0, 1.104, 0]}
          scale={[2.122, 1.178, 2.991]}
        />

        <GrassStone1
          name="terain2040"
          position={[-45.623, 4.483, -13.622]}
          rotation={[Math.PI, -0.824, Math.PI]}
          scale={[1.361, 0.733, 1.919]}
        />

        <GrassStone2
          name="terain1034"
          position={[-33.042, -0.149, -24.889]}
          rotation={[0, -0.243, -Math.PI]}
          scale={[-1.745, -2.582, -2.848]}
        />

        <GrassStone1
          name="terain2041"
          position={[-33.212, -0.148, -21.053]}
          rotation={[0, -1.241, 0]}
          scale={[2.412, 1.479, 2.327]}
        />

        <GrassStone1
          name="terain2042"
          position={[-32.183, -0.148, -24.125]}
          rotation={[Math.PI, -0.894, Math.PI]}
          scale={[0.987, 0.955, 0.952]}
        />

        <GrassStone1
          name="terain2043"
          position={[-33.97, 1.762, -24.44]}
          rotation={[-Math.PI, 0.748, -Math.PI]}
          scale={[0.987, 1.177, 1.431]}
        />

        <GrassStone2
          name="terain1035"
          position={[-37.647, -0.149, -24.087]}
          rotation={[-Math.PI, 0.599, 0]}
          scale={[-2.415, -3.473, -2.848]}
        />

        <GrassStone1
          name="terain2044"
          position={[-38.657, -0.313, -27.404]}
          rotation={[-Math.PI, 0.157, -Math.PI]}
          scale={[0.987, 1.234, 1.431]}
        />

        <GrassStone1
          name="terain2045"
          position={[-46.74, -0.016, -21.125]}
          rotation={[Math.PI, -0.909, Math.PI]}
          scale={[2.122, 1.526, 1.893]}
        />

        <GrassStone2
          name="terain1036"
          position={[-43.293, 5.068, -24.75]}
          rotation={[Math.PI, -1.511, 0]}
          scale={[-2.415, -1.467, -2.848]}
        />

        <GrassStone1
          name="terain2046"
          position={[-42.476, 5.082, -25.073]}
          rotation={[0, 0.675, 0]}
          scale={[1.429, 0.551, 2.071]}
        />

        <GrassStone1
          name="terain2047"
          position={[-43.361, 5.241, -22.991]}
          rotation={[Math.PI, -1.103, Math.PI]}
          scale={[0.836, 0.218, 1.212]}
        />

        <GrassStone1
          name="terain2048"
          position={[-40.484, -0.313, -26.3]}
          rotation={[0, -0.303, 0]}
          scale={[1.57, 1.656, 1.431]}
        />

        <GrassStone1
          name="terain2049"
          position={[-40.345, -0.313, -27.774]}
          rotation={[Math.PI, -1.5, Math.PI]}
          scale={[1.383, 0.875, 1.431]}
        />

        <GrassStone1
          name="terain2050"
          position={[-39.59, -0.313, -29.304]}
          rotation={[0, 0.969, 0]}
          scale={[0.835, 0.713, 1.276]}
        />

        <GrassStone2
          name="terain1037"
          position={[17.031, -0.722, -30.125]}
          rotation={[Math.PI, -0.703, Math.PI]}
          scale={[1.593, 2.008, 1.559]}
        />

        <GrassStone2
          name="terain1038"
          position={[21.377, -0.624, -32.9]}
          rotation={[0, 1.226, 0]}
          scale={[1.611, 2.119, 2.08]}
        />

        <GrassStone1
          name="terain2051"
          position={[19.378, -0.647, -30.977]}
          rotation={[0, 0.609, 0]}
          scale={[0.986, 0.878, 1.345]}
        />

        <GrassStone1
          name="terain2052"
          position={[22.108, -0.488, -32.902]}
          rotation={[0, 1.448, 0]}
          scale={[0.986, 0.327, 1.345]}
        />

        <GrassStone1
          name="terain2053"
          position={[16.122, -0.488, -26.819]}
          rotation={[0, 0.931, 0]}
          scale={[1.456, 0.876, 1.544]}
        />

        <GrassStone2
          name="terain1039"
          position={[15.294, -0.395, -24.058]}
          rotation={[0, 0.451, 0]}
          scale={[1.038, 1.876, 1.327]}
        />

        <GrassStone1
          name="terain2054"
          position={[13.177, -0.488, -23.33]}
          rotation={[Math.PI, -0.66, Math.PI]}
          scale={[1.456, 0.798, 1.544]}
        />

        <GrassStone2
          name="terain1040"
          position={[10.647, -0.332, -22.546]}
          rotation={[0, -0.864, 0]}
          scale={[1.455, 1.719, 1.327]}
        />

        <GrassStone1
          name="terain2055"
          position={[9.727, -0.488, -25.527]}
          rotation={[0, -1.241, 0]}
          scale={[1.456, 0.886, 1.544]}
        />

        <GrassStone1
          name="terain2056"
          position={[7.568, -0.488, -31.387]}
          rotation={[-Math.PI, 0.915, -Math.PI]}
          scale={[1.456, 0.928, 1.544]}
        />

        <GrassStone1
          name="terain2057"
          position={[9.317, 1.728, -35.862]}
          rotation={[0, 1.189, 0]}
          scale={[1.456, 0.83, 1.544]}
        />

        <GrassStone2
          name="terain1041"
          position={[8.834, 1.933, -33.373]}
          rotation={[0, 0.291, 0]}
          scale={[1.705, 1.384, 2.18]}
        />

        <GrassStone1
          name="terain2058"
          position={[7.003, -0.488, -35.902]}
          rotation={[Math.PI, -1.052, Math.PI]}
          scale={[1.456, 1.415, 1.544]}
        />

        <GrassStone2
          name="terain1042"
          position={[8.2, -0.349, -38.877]}
          rotation={[Math.PI, -0.39, Math.PI]}
          scale={[1.611, 1.851, 2.08]}
        />

        <GrassStone2
          name="terain1043"
          position={[11.86, 0.089, -41.914]}
          rotation={[Math.PI, -1.081, Math.PI]}
          scale={[2.474, 1.451, 2.08]}
        />

        <GrassStone1
          name="terain2059"
          position={[10.919, 0.901, -39.025]}
          rotation={[-Math.PI, 0.181, -Math.PI]}
          scale={[1.456, 0.549, 1.544]}
        />

        <GrassStone2
          name="terain1044"
          position={[15.486, -0.192, -42.632]}
          rotation={[-Math.PI, 1.402, -Math.PI]}
          scale={[1.912, 2.081, 2.08]}
        />

        <GrassStone1
          name="terain2060"
          position={[13.695, 1.233, -42.423]}
          rotation={[Math.PI, -0.143, Math.PI]}
          scale={[1.097, 0.718, 1.544]}
        />

        <GrassStone1
          name="terain2061"
          position={[15.019, -0.241, -43.218]}
          rotation={[-Math.PI, 0.499, -Math.PI]}
          scale={[1.097, 1.017, 1.544]}
        />

        <GrassStone1
          name="terain2062"
          position={[19.509, -0.488, -36.989]}
          rotation={[-Math.PI, 1.074, -Math.PI]}
          scale={[1.456, 0.876, 1.544]}
        />

        <GrassStone1
          name="terain2063"
          position={[20.569, -0.627, -35.214]}
          rotation={[0, -1.39, 0]}
          scale={[0.922, 0.944, 1.147]}
        />

        <GrassStone2
          name="terain1045"
          position={[17.351, -0.223, -42.921]}
          rotation={[-Math.PI, 0.468, -Math.PI]}
          scale={[1.611, 1.723, 2.08]}
        />

        <GrassStone2
          name="terain1046"
          position={[19.407, -0.695, -39.754]}
          rotation={[0, 1.524, 0]}
          scale={[1.611, 1.723, 2.191]}
        />

        <GrassStone1
          name="terain2064"
          position={[18.968, -0.488, -41.57]}
          rotation={[-Math.PI, 1.251, -Math.PI]}
          scale={[1.088, 0.284, 1.153]}
        />

        <GrassStone1
          name="stone2007"
          castShadow
          receiveShadow
          position={[14.377, 0.788, -19.156]}
          rotation={[-0.31, 0.15, 0.241]}
          scale={[1.377, 1.708, 1.809]}
        />
        <GrassStone1
          name="stone2008"
          castShadow
          receiveShadow
          position={[13.048, 0.111, -17.279]}
          rotation={[1.793, -0.083, 0.826]}
          scale={[3.297, 1.491, 2.528]}
        />
        <GrassStone1
          name="stone1012"
          castShadow
          receiveShadow
          position={[14.482, -1.104, -20.55]}
          rotation={[-3.042, -0.036, 3.071]}
          scale={[1.019, 1.866, 1.062]}
        />
        <GrassStone1
          name="stone2009"
          castShadow
          receiveShadow
          position={[25.776, 0.111, -41.918]}
          rotation={[2.106, 0.317, 1.239]}
          scale={[3.96, 1.676, 7.053]}
        />
        <GrassStone1
          name="stone1015"
          castShadow
          receiveShadow
          position={[25.54, -0.593, -39.59]}
          rotation={[0.362, -1.443, 0.163]}
          scale={[1.332, 1.489, 1.335]}
        />
        <GrassStone1
          name="stone1016"
          castShadow
          receiveShadow
          position={[27.371, -0.593, -42.992]}
          rotation={[0.002, 0.609, 0.108]}
          scale={[1.332, 1.489, 1.335]}
        />
        <GrassStone1
          name="terain2065"
          position={[-5.419, -0.513, -14.032]}
          rotation={[Math.PI, -0.058, Math.PI]}
          scale={[1.9, 0.685, 1.642]}
        />

        <GrassStone1
          name="terain2066"
          position={[-2.233, -0.442, -7.586]}
          rotation={[0, -1.391, 0]}
          scale={[1.78, 0.652, 1.642]}
        />

        <GrassStone1
          name="terain2067"
          position={[-3.067, -0.345, -11.144]}
          rotation={[-Math.PI, 1.048, -Math.PI]}
          scale={[1.78, 0.652, 1.756]}
        />

        <GrassStone2
          name="terain1047"
          position={[-2.683, -0.39, -5.788]}
          rotation={[-Math.PI, 1.262, -Math.PI]}
          scale={[1.627, 1.39, 1.68]}
        />

        <GrassStone2
          name="terain1048"
          position={[-5.314, -0.432, -11.943]}
          rotation={[-Math.PI, 1.337, -Math.PI]}
          scale={[1.369, 1.447, 1.68]}
        />

        <GrassStone1
          name="terain2068"
          position={[-4.271, -0.397, -8.858]}
          rotation={[-Math.PI, 1.207, -Math.PI]}
          scale={[1.78, 0.668, 1.756]}
        />

        <GrassStone1
          name="terain2069"
          position={[-1.945, -0.554, -9.538]}
          rotation={[-Math.PI, 0.873, -Math.PI]}
          scale={[0.979, 0.599, 1.481]}
        />

        <GrassStone1
          name="terain2070"
          position={[2.371, -0.505, -21.401]}
          rotation={[Math.PI, -0.424, Math.PI]}
          scale={[1.616, 0.825, 1.345]}
        />

        <GrassStone1
          name="terain2071"
          position={[4.506, -0.505, -22.626]}
          rotation={[0, 0.563, 0]}
          scale={[1.074, 0.78, 1.866]}
        />

        <GrassStone1
          name="terain2072"
          position={[7.14, -0.505, -24.871]}
          rotation={[0, -0.144, 0]}
          scale={[1.273, 0.713, 2.016]}
        />

        <GrassStone2
          name="terain1049"
          position={[6.809, -0.361, -22.387]}
          rotation={[0, 0.415, 0]}
          scale={[1.038, 1.597, 1.688]}
        />

        <GrassStone2
          name="terain1050"
          position={[6.361, -1.248, -23.688]}
          rotation={[Math.PI, -0.823, Math.PI]}
          scale={[1.038, 1.597, 1.688]}
        />

        <GrassStone2
          name="terain1051"
          position={[2.365, -0.295, -22.988]}
          rotation={[0, 0.415, 0]}
          scale={[1.574, 1.808, 2.19]}
        />

        <GrassStone2
          name="terain1052"
          position={[7.982, -0.295, -28.49]}
          rotation={[0, 1.061, 0]}
          scale={[1.347, 1.614, 2.19]}
        />

        <GrassStone1
          name="terain2073"
          position={[5.965, -0.505, -26.485]}
          rotation={[0, 0.752, 0]}
          scale={[1.074, 0.78, 1.132]}
        />

        <GrassStone1
          name="terain2074"
          position={[4.413, -0.505, -24.708]}
          rotation={[-Math.PI, 0.96, -Math.PI]}
          scale={[1.074, 0.811, 1.866]}
        />

        <GrassStone1
          name="terain2075"
          position={[-29.884, -0.237, -19.336]}
          rotation={[0, -1.326, 0]}
          scale={[0.947, 1.45, 2.327]}
        />

        <GrassStone1
          name="terain2076"
          position={[-24.461, -0.458, -15.665]}
          rotation={[0, -1.571, 0]}
          scale={[0.947, 1.206, 2.327]}
        />

        <GrassStone2
          name="terain1053"
          position={[-26.349, -0.149, -20.332]}
          rotation={[0, -0.89, -Math.PI]}
          scale={[-1.392, -2.573, -2.273]}
        />

        <GrassStone2
          name="terain1054"
          position={[-25.429, -0.149, -18.522]}
          rotation={[Math.PI, -0.104, 0]}
          scale={[-2.146, -2.396, -2.42]}
        />

        <GrassStone1
          name="terain2077"
          position={[-27.636, -0.458, -15.261]}
          rotation={[-Math.PI, 1.295, -Math.PI]}
          scale={[1.08, 1.466, 2.46]}
        />

        <GrassStone1
          name="Plane005"
          castShadow
          receiveShadow
          position={[-9.988, 3.277, -23.708]}
        />
        <GrassStone1
          name="stone1009"
          castShadow
          receiveShadow
          position={[-27.497, -0.429, -10.247]}
          rotation={[Math.PI, -0.422, Math.PI]}
          scale={[1.625, 2.839, 1.625]}
        />
        <GrassStone1
          name="stone1010"
          castShadow
          receiveShadow
          position={[-24.919, -0.429, -10.913]}
          rotation={[0, 1.277, 0]}
          scale={[1.28, 1.689, 1.28]}
        />
        <GrassStone1
          name="stone2005"
          castShadow
          receiveShadow
          position={[-25.865, 0.801, -10.091]}
          rotation={[1.531, 0.668, -0.971]}
          scale={[3.199, 1.026, 4.764]}
        />
        <GrassStone1
          name="stone2006"
          castShadow
          receiveShadow
          position={[-26.067, 0.801, -12.438]}
          rotation={[1.891, 0.139, -2.332]}
          scale={[2.152, 0.794, 4.722]}
        />
        <GrassStone1
          name="stone1011"
          castShadow
          receiveShadow
          position={[12.593, -0.933, -19.826]}
          rotation={[0, -0.477, 0]}
          scale={[1.546, 2.589, 1.546]}
        />
        <GrassStone1
          name="stone1013"
          castShadow
          receiveShadow
          position={[21.425, 1.244, -24.097]}
          rotation={[-3.126, 0.664, 0.086]}
          scale={[1.546, 2.589, 1.546]}
        />
        <GrassStone1
          name="stone1014"
          castShadow
          receiveShadow
          position={[20.057, 0.623, -25.769]}
          rotation={[-0.247, 0.309, -2.862]}
          scale={[1.294, 2.099, 1.291]}
        />
        <GrassStone1
          name="stone1022"
          castShadow
          receiveShadow
          position={[7.835, -0.272, -18.446]}
          rotation={[2.763, 1.045, -2.651]}
          scale={[1.878, 1.278, 1.886]}
        />
        <GrassStone1
          name="stone1017"
          castShadow
          receiveShadow
          position={[-13.19, 3.544, -28.278]}
          rotation={[-0.201, 0.908, -0.025]}
          scale={[0.558, 0.312, 0.558]}
        />
        <GrassStone1
          name="stone1018"
          castShadow
          position={[-12.418, 3.654, -27.391]}
          rotation={[-2.333, -0.269, -0.897]}
          scale={[0.538, 0.728, 0.499]}
        />
        <GrassStone1
          name="stone1019"
          castShadow
          receiveShadow
          position={[-34.777, 5.586, -12.66]}
          rotation={[1.934, -0.089, 2.59]}
          scale={[0.702, 1.317, 0.628]}
        />
        <GrassStone1
          name="stone1020"
          castShadow
          receiveShadow
          position={[-42.488, 5.324, -14.694]}
          rotation={[0.07, -0.45, 0.204]}
          scale={[0.848, 0.995, 0.745]}
        />
        <GrassStone1
          name="stone1021"
          castShadow
          receiveShadow
          position={[-41.68, 5.433, -14.133]}
          rotation={[2.989, -1.152, -3.012]}
          scale={[0.473, 0.555, 0.416]}
        />
        <GrassStone1
          name="flat_stone001"
          castShadow
          receiveShadow
          position={[-41.579, 5.752, -14.987]}
          rotation={[0, 0.502, 0]}
        />
        <GrassStone1
          name="flat_stone002"
          castShadow
          receiveShadow
          position={[-42.596, 5.752, -13.417]}
          rotation={[0, -1.166, 0]}
        />
        <GrassStone1
          name="flat_stone003"
          castShadow
          receiveShadow
          position={[-42.402, 6.121, -14.029]}
          rotation={[Math.PI, -1.099, Math.PI]}
          scale={[1, 2.415, 1]}
        />
        <GrassStone1
          name="flat_stone004"
          castShadow
          receiveShadow
          position={[-42.883, 5.931, -15.273]}
          rotation={[-0.109, -0.152, 0.33]}
          scale={[1, 2.415, 1]}
        />
        <GrassStone1
          name="stone1023"
          castShadow
          receiveShadow
          position={[-44.345, 5.447, -21.556]}
          rotation={[-0.215, 0.026, 0.049]}
          scale={[0.848, 0.995, 0.745]}
        />
        <GrassStone1
          name="stone1024"
          castShadow
          receiveShadow
          position={[-45.994, 4.624, -19.68]}
          rotation={[-0.269, 0.642, 0.207]}
          scale={[1.124, 1.013, 0.978]}
        />
        <GrassStone1
          name="stone1025"
          castShadow
          receiveShadow
          position={[-45.211, 5.433, -20.736]}
          rotation={[3.024, -1.054, -2.879]}
          scale={[0.626, 0.558, 0.613]}
        />
        <GrassStone1
          name="flat_stone005"
          castShadow
          receiveShadow
          position={[-44.409, 5.893, -20.451]}
          rotation={[0.024, -0.38, -0.162]}
        />
        <GrassStone1
          name="stone1026"
          castShadow
          receiveShadow
          position={[-32.938, 5.316, -22.104]}
          rotation={[-0.063, -0.881, -0.032]}
          scale={[0.989, 0.444, 0.847]}
        />
        <GrassStone1
          name="stone1028"
          castShadow
          receiveShadow
          position={[-10.628, 3.33, -24.187]}
          rotation={[-2.333, -0.269, -0.897]}
          scale={[0.67, 1.03, 0.499]}
        />
        <GrassStone1
          name="stone1029"
          castShadow
          receiveShadow
          position={[-9.167, 2.839, -24.853]}
          rotation={[1.076, 0.019, 0.824]}
          scale={[0.67, 1.356, 0.499]}
        />
        <GrassStone1
          name="GrassAlpha007"
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <GrassStone1
          name="stone2010"
          castShadow
          receiveShadow
          position={[-5.74, 0.788, -41.001]}
          rotation={[-0.524, -0.923, -0.239]}
          scale={[1.377, 1.708, 1.809]}
        />
        <GrassStone1
          name="stone2011"
          castShadow
          receiveShadow
          position={[-7.997, 0.111, -41.445]}
          rotation={[1.739, 0.167, 1.952]}
          scale={[3.297, 1.491, 2.528]}
        />
        <GrassStone1
          name="stone1030"
          castShadow
          receiveShadow
          position={[-4.426, -1.104, -41.477]}
          rotation={[-2.92, 1.103, 2.869]}
          scale={[1.019, 1.866, 1.062]}
        />
        <GrassStone1
          name="stone1031"
          castShadow
          receiveShadow
          position={[-5.86, -1.891, -42.903]}
          rotation={[-Math.PI, 1.38, -Math.PI]}
          scale={[1.546, 2.589, 1.546]}
        />
      </group>
    </ModelProvider>
  );
}
