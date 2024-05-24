<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { useLoader } from '@threlte/core';
	import { ContactShadows, Float, Grid, OrbitControls, useGltf } from '@threlte/extras';
	import { GridHelper } from 'three';

	interface RingSettings {
		position: {
			x: number;
			y: number;
			z: number;
		};
		scale: number;
	}

	const lightPosition = {
		x: 1,
		y: 1,
		z: 1
	};

	const scaleRing1 = 1.8;
	const scaleRing2 = 0.3;

	const loader = useLoader(STLLoader).load(`/api/models/?modelName=saraafter.stl`);
	const loader2 = useLoader(STLLoader).load(`/api/models/?modelName=luisaafter.stl`);

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

<T.AmbientLight color="white" intensity={0.9} />

<T.PerspectiveCamera makeDefault position={[-10, 10, 40]} fov={15} on:create={({ ref }) => {}}>
	<OrbitControls autoRotate enableZoom={true} autoRotateSpeed={1.2} />
</T.PerspectiveCamera>

<T.GridHelper />

{#await loader}
	<T.Mesh rotation.y={rotation}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial color="blue" />
	</T.Mesh>
{:then geometry}
	<T.Mesh
		geometry={geometry.center()}
		scale={[scaleRing1, scaleRing1, scaleRing1]}
		position={point}
	>
		<T.MeshPhysicalMaterial metalness={0.5} clearcoat={1.0} color="#00613F" />
	</T.Mesh>
{:catch e}
	<T.Mesh rotation.y={rotation}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial color="blue" />
	</T.Mesh>
{/await}

{#await loader2}
	<T.Mesh rotation.y={rotation}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial color="blue" />
	</T.Mesh>
{:then geometry}
	<T.Mesh
		geometry={geometry.center()}
		scale={[scaleRing2, scaleRing2, scaleRing2]}
		position={point}
	>
		<T.MeshPhysicalMaterial metalness={0.5} clearcoat={1.0} color="#00613F" />
	</T.Mesh>
{:catch e}
	<T.Mesh rotation.y={rotation}>
		<T.BoxGeometry />
		<T.MeshBasicMaterial color="blue" />
	</T.Mesh>
{/await}
