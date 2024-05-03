<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { useLoader } from '@threlte/core';

	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import { Spinner } from 'flowbite-svelte';

	export let filepath: string;

	export let lightPosition: {
		x: number;
		y: number;
		z: number;
	};

	const stl = useLoader(STLLoader).load(filepath);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});

	const point = [0, 0, 0];
</script>

<T.DirectionalLight intensity={5} position={[lightPosition.x, lightPosition.y, lightPosition.z]} />
<T.AmbientLight intensity={0.5} />
<T.PerspectiveCamera
	makeDefault
	position={[-10, 10, 40]}
	fov={15}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<OrbitControls autoRotate enableZoom={true} autoRotateSpeed={0.5} />
</T.PerspectiveCamera>
{#await stl}
	<T.Mesh rotation.y={rotation}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial color="blue" />
	</T.Mesh>
{:then geometry}
	<T.Mesh geometry={geometry.center()} scale={[0.5, 0.5, 0.5]} position={point}>
		<T.MeshPhongMaterial color="#00613F" />
	</T.Mesh>
{/await}
