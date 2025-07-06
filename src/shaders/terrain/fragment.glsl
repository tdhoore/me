varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 uSandColor;
uniform vec3 uGrassColor;

uniform float uTime;
uniform float uWaterLevel;
uniform float uWaveSpeed;
uniform float uWaveAmplitude;
uniform float uFoamDepth;
uniform sampler2D uGrassTexture;

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

void main() {

    float gardientSand = smoothstep(0.0, 0.03, vPosition.y - 0.02);
    float gardient = smoothstep(0.0, 0.08, vPosition.y - 0.02);
    float noice = smoothstep(0.0, 1.0, cnoise(vUv * 40.0));

    vec3 baseColor = uGrassColor * (texture(uGrassTexture, vUv).r * 1.9);

    baseColor = mix((uSandColor * (texture(uGrassTexture, vUv).g * 1.4)), baseColor, clamp(noice * gardientSand + gardient * 1.9, 0.0,1.0));

    // Get the y position based on sine function, oscillating up and down over time
    float sineOffset = sin(uTime * uWaveSpeed) * uWaveAmplitude;

    // The current dynamic water height
    float currentWaterHeight = uWaterLevel + sineOffset;

    float stripe = smoothstep(currentWaterHeight + 0.01, currentWaterHeight - 0.01, vPosition.y)
                 - smoothstep(currentWaterHeight + uFoamDepth + 0.01, currentWaterHeight + uFoamDepth - 0.01, vPosition.y);

    vec3 stripeColor = vec3(1.0, 0, 1.0); // White stripe

    // Apply the foam strip to baseColor    
    vec3 finalColor = mix(baseColor - stripe, stripeColor, stripe);

   
//vec3(texture(uGrassTexture, vUv).r*1.2)
    csm_DiffuseColor = vec4(finalColor, 1.0);
}