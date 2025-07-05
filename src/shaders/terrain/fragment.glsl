varying vec3 vPosition;
uniform vec3 uSandColor;
uniform vec3 uGrassColor;

uniform float uTime;
uniform float uWaterLevel;
uniform float uWaveSpeed;
uniform float uWaveAmplitude;
uniform float uFoamDepth;

void main() {

    float gardient = step(0.03, vPosition.y);

    vec3 baseColor = mix(uSandColor, uGrassColor, gardient);

    // Get the y position based on sine function, oscillating up and down over time
    float sineOffset = sin(uTime * uWaveSpeed) * uWaveAmplitude;

    // The current dynamic water height
    float currentWaterHeight = uWaterLevel + sineOffset;

    float stripe = smoothstep(currentWaterHeight + 0.01, currentWaterHeight - 0.01, vPosition.y)
                 - smoothstep(currentWaterHeight + uFoamDepth + 0.01, currentWaterHeight + uFoamDepth - 0.01, vPosition.y);

    vec3 stripeColor = vec3(1.0, 0, 1.0); // White stripe

    // Apply the foam strip to baseColor    
    vec3 finalColor = mix(baseColor - stripe, stripeColor, stripe);

    csm_DiffuseColor = vec4(finalColor, 1.0);
}