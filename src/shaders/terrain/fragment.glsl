varying vec3 vPosition;
uniform vec3 uSandColor;
uniform vec3 uGrassColor;

void main() {
    float gardient = step(0.03, vPosition.y);

    csm_DiffuseColor = vec4(mix(uSandColor, uGrassColor, gardient), 1.0);
}