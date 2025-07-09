varying vec3 vPosition;

uniform vec3 uColor;

void main() {
  float colorFade = clamp(0.0, 1.0, (vPosition.y + 1.4) * 0.3);

  vec3 baseColor = mix(uColor * 0.8, uColor , colorFade);
 
  csm_DiffuseColor = vec4(baseColor, 1.0);
}