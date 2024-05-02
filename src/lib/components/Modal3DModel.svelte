<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { useLoader } from '@threlte/core';

	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import * as THREE from 'three';

	export let filepath: string;

	const stl = useLoader(STLLoader).load(filepath);

	const point = [0, 0, 0];
</script>

<T.DirectionalLight intensity={2} position.x={1} position.y={-2} />
<T.AmbientLight intensity={0.2} />

{#await stl then geometry}
	<T.PerspectiveCamera makeDefault position={[-10, 10, 40]} fov={15}>
		<OrbitControls autoRotate enableZoom={true} autoRotateSpeed={0.5} />
	</T.PerspectiveCamera>
	<T.Mesh geometry={geometry.center()} scale={[0.5, 0.5, 0.5]} position={point}>
		<T.MeshPhongMaterial color="#F85122" />
	</T.Mesh>
{/await}
