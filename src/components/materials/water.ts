import * as THREE from "three/webgpu";
import simplexNoiseTexture from "./simplexNoiseTexture";
import { add, float, Fn, mix, smoothstep, texture, time, uniform, uv, vec3, vec4 } from "three/tsl";

export const foamLevel = uniform(-1.015).add(time.mul(2).sin().mul(0.0008));
export const foamSmoothing = uniform(0.001)

export const waterBaseColor = uniform(new THREE.Color("#86bafd"));

export const water = new THREE.MeshStandardNodeMaterial(
	{
		color: 0x0000ff,
		roughness: 1
	}
);

water.colorNode = Fn(() => {
	const waveTexture1 = texture(simplexNoiseTexture, uv().mul(2).add(time.mul(-0.005))).g;
	const waveTexture2 = texture(simplexNoiseTexture, uv().mul(2).add(time.mul(0.01))).b;
	const waveTexture = add(waveTexture1, waveTexture2).mul(0.5);

	const threshold = time.sin().mul(0.01).add(0.6)
	
	const waveEffect = float(1).sub(smoothstep(threshold.add(0.03), threshold.add(0.032), waveTexture).add(smoothstep(threshold, threshold.sub(0.01), waveTexture))).step(0.5).sub(0.8).clamp();

	return vec4(mix(waterBaseColor, vec3(1), waveEffect), 0);
})();