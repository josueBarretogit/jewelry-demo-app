<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
	import { useLoader } from '@threlte/core';

	import { ContactShadows, Float, Grid, OrbitControls, useGltf } from '@threlte/extras';
	import { Spinner } from 'flowbite-svelte';

	export let filepath: string;

	export let lightPosition: {
		x: number;
		y: number;
		z: number;
	};

	const isGltf = filepath.includes('gltf');

	const loader = isGltf ? useGltf().load(filepath) : useLoader(STLLoader).load(filepath);

	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});

	const point = [0, 0, 0];
</script>

<T.DirectionalLight intensity={5} position={[lightPosition.x, lightPosition.y, lightPosition.z]} />
<T.AmbientLight intensity={0.5} />
<T.PerspectiveCamera makeDefault position={[-10, 10, 40]} fov={15} on:create={({ ref }) => {}}>
	<OrbitControls autoRotate enableZoom={true} autoRotateSpeed={0.9} />
</T.PerspectiveCamera>

{#if $loader && isGltf}
	{console.log($loader.nodes.mesh_0.geometry)}
	<T.Mesh
		geometry={$loader.nodes.mesh_0.geometry.center()}
		scale={[0.5, 0.5, 0.5]}
		position={point}
	>
		<T.MeshPhongMaterial color="#00613F" />
	</T.Mesh>
{:else if !isGltf}
	{#await loader}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then geometry}
		<T.Mesh geometry={geometry.center()} scale={[0.5, 0.5, 0.5]} position={point}>
			<T.MeshPhongMaterial color="#00613F" />
		</T.Mesh>
	{:catch e}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{/await}
{/if}
