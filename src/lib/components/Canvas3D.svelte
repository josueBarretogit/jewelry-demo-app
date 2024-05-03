<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Modal3DModel from './Modal3DModel.svelte';

	export let filepath: string;

	const lightPosition = {
		x: 1,
		y: 1,
		z: 1
	};
</script>

<Canvas>
	<Modal3DModel {filepath} {lightPosition} />
</Canvas>

<div class="controls">
	<span>Subir luz</span>
	<input type="range" bind:value={lightPosition.y} />
	<span>Mover luz</span>
	<input type="range" bind:value={lightPosition.x} />
</div>

<style>
	.controls {
		position: absolute;
	}
</style>
