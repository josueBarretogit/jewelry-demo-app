<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
	import { useLoader } from '@threlte/core';

	import { OBJLoader } from 'three/addons/loaders/OBJLoader';

	import { ContactShadows, Float, Grid, OrbitControls, useGltf } from '@threlte/extras';

	export let filepath: string;

	export let lightPosition: {
		x: number;
		y: number;
		z: number;
	};

	const isGltf = filepath.includes('gltf') || filepath.includes('glb');

	const loader = isGltf
		? useGltf(filepath, { useDraco: true })
		: useLoader(STLLoader).load(filepath);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});

	const point = [0, 0, 0];
</script>

<T.DirectionalLight
	intensity={10}
	position={[lightPosition.x, lightPosition.y, lightPosition.z]}
	castShadow
/>

<T.AmbientLight color="white" intensity={0.2} />

<T.PerspectiveCamera makeDefault position={[-10, 10, 40]} fov={15} on:create={({ ref }) => {}}>
	<OrbitControls autoRotate enableZoom={true} autoRotateSpeed={1.2} />
</T.PerspectiveCamera>

{#if $loader && isGltf}
	{#await $loader}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then value}
		<T.Mesh
			geometry={value.nodes.mesh_0.geometry.center()}
			scale={[1.5, 1.5, 1.5]}
			position={point}
		>
			<T.MeshPhysicalMaterial metalness={1} color="#00613F" />
		</T.Mesh>
	{/await}
{:else if !isGltf}
	{#await loader}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then geometry}
		<T.Mesh geometry={geometry.center()} scale={[1.5, 1.5, 1.5]} position={point}>
			<T.MeshPhysicalMaterial metalness={0.5} clearcoat={1.0} color="#00613F" />
		</T.Mesh>
	{:catch e}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{/await}
{/if}
