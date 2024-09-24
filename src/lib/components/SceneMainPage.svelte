<script lang="ts">
	import { Canvas, T, useTask, type AsyncWritable } from '@threlte/core';
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
	import type { RingSettings } from '$lib/interfaces/interfaces';
	import { Texture, TextureLoader } from 'three';
  import * as THREE from 'three'

	const lightPosition = {
		x: 1,
		y: 30,
		z: 19
	};

	const ringSettings1: any = {
		scale: 1.4,
		position: {
			y: 7,
			x: 10,
			z: 0
		}
	};

	const ringSettings2: RingSettings = {
		scale: 1.5,
		position: {
			y: 7,
			x: 0,
			z: 0
		}
	};

	const ringColor = '#FFD700';

	const loader = useLoader(STLLoader).load(`/api/models/?modelName=corona1.stl`);
	const loader2 = useLoader(STLLoader).load(`/api/models/?modelName=corona2.stl`);

	const texture = useLoader(TextureLoader).load('/static/textures/metallic.jpg');

	function getTexture(texture: Texture): Texture {

    texture.colorSpace = THREE.SRGBColorSpace;

		return texture;
	}

	let rotation = 0;
</script>

<T.AmbientLight intensity={2} />

<T.PerspectiveCamera makeDefault position={[10, 40, 30]} fov={30}>
	<OrbitControls enableZoom={true} autoRotateSpeed={1.2} />
</T.PerspectiveCamera>

<T.DirectionalLight
	intensity={4}
	position={[lightPosition.x, lightPosition.y, lightPosition.z]}
	scale={30}
	castShadow={true}
>
	<T.OrthographicCamera
		attach="shadow.camera"
		left={-10}
		right={10}
		top={10}
		near={10}
		far={100}
		zoom={700}
	/>
	<T.Vector2 attach="shadow.mapSize" args={[2048, 2048]} />
</T.DirectionalLight>

<Float floatIntensity={9} rotationSpeed={10} speed={4}>
	{#await loader}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{:then geometry}
		{#await texture then tex}
			<T.Mesh
				rotation.x={-90 * (Math.PI / 180)}
				geometry={geometry.center()}
				scale={[ringSettings1.scale, ringSettings1.scale, ringSettings1.scale]}
				position={[ringSettings1.position.x, ringSettings1.position.y, ringSettings1.position.z]}
				castShadow
			>
				<T.MeshPhysicalMaterial map={getTexture(tex)}  metalness={0.5} clearcoat={1.0} />
			</T.Mesh>
		{/await}
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
			rotation.x={-90 * (Math.PI / 180)}
			geometry={geometry.center()}
			scale={[ringSettings2.scale, ringSettings2.scale, ringSettings2.scale]}
			position={[ringSettings2.position.x, ringSettings2.position.y, ringSettings2.position.z]}
			castShadow
		>
			<T.MeshPhysicalMaterial metalness={0.5} clearcoat={1.0} color={ringColor} />
		</T.Mesh>
	{:catch e}
		<T.Mesh rotation.y={rotation}>
			<T.BoxGeometry />
			<T.MeshBasicMaterial color="blue" />
		</T.Mesh>
	{/await}
</Float>

<Grid gridSize={[3, 4]} infiniteGrid />
