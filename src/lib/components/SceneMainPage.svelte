<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import { STLLoader } from 'three/addons/loaders/STLLoader';
	import { useLoader } from '@threlte/core';
	import {
		ContactShadows,
		Float,
		Grid,
		OrbitControls,
		interactivity,
		useGltf
	} from '@threlte/extras';
	import { GridHelper } from 'three';

	interface RingSettings {
		position: {
			x: number;
			y: number;
			z: number;
		};
		scale: number;
	}

	interactivity();
	const lightPosition = {
		x: 1,
		y: 29,
		z: 1
	};

	const ringSettings1: RingSettings = {
		scale: 2.4,
		position: {
			y: 5,
			x: 10,
			z: 0
		}
	};

	const ringSettings2: RingSettings = {
		scale: 0.3,
		position: {
			y: 5,
			x: 0,
			z: 0
		}
	};

	const loader = useLoader(STLLoader).load(`/api/models/?modelName=saraafter.stl`);
	const loader2 = useLoader(STLLoader).load(`/api/models/?modelName=luisaafter.stl`);

	let rotation = 0;
	useTask((delta) => {});
</script>

<T.AmbientLight color="white" intensity={0.9} />

<T.PerspectiveCamera makeDefault position={[-10, 10, 40]} fov={15} on:create={({ ref }) => {}}>
	<OrbitControls enableZoom={true} autoRotateSpeed={1.2} />
</T.PerspectiveCamera>

<T.DirectionalLight
	intensity={4}
	position={[lightPosition.x, lightPosition.y, lightPosition.z]}
	castShadow
/>

<T.DirectionalLight intensity={0.4} position={[lightPosition.x, 0, lightPosition.z]} castShadow />

<Float floatIntensity={10} rotationSpeed={10} speed={4}>
	{#await loader}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then geometry}
		<T.Mesh
			geometry={geometry.center()}
			scale={[ringSettings1.scale, ringSettings1.scale, ringSettings1.scale]}
			position={[ringSettings1.position.x, ringSettings1.position.y, ringSettings1.position.z]}
			castShadow
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
		<T.Mesh rotation.y={rotation} castShadow>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then geometry}
		<T.Mesh
			geometry={geometry.center()}
			scale={[ringSettings2.scale, ringSettings2.scale, ringSettings2.scale]}
			position={[ringSettings2.position.x, ringSettings2.position.y, ringSettings2.position.z]}
			castShadow
		>
			<T.MeshPhysicalMaterial metalness={0.5} clearcoat={1.0} color="#00613F" />
		</T.Mesh>
	{:catch e}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{/await}
</Float>

<T.Mesh rotation.x={-90 * (Math.PI / 180)} receiveShadow>
	<T.CircleGeometry args={[20, 72]} />
	<T.MeshStandardMaterial color={'white'} />
</T.Mesh>
