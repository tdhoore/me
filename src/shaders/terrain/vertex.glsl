varying vec2 vUv;
varying vec3 vPosition;
varying vec3 csm_vPositionW;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vUv = uv;
    vPosition = modelPosition.xyz;
}
