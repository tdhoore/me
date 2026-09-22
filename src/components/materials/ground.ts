import * as THREE from "three/webgpu";

export const ground = new THREE.MeshStandardNodeMaterial(
	{
		color: 0xff00dd,
		roughness: 1
	}
);