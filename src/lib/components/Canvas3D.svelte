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

<Canvas renderMode="on-demand">
	<Modal3DModel {filepath} {lightPosition} />
</Canvas>

<div class="controls">
	<div>
		<span>Move luz verticalmente</span>
		<input type="range" bind:value={lightPosition.y} min="-50" max="50" step="0.5" />
	</div>
	<div>
		<span>Mover luz horizontalmente</span>
		<input type="range" bind:value={lightPosition.x} min="-50" max="50" step="0.5" />
	</div>
</div>

<style>
	.controls {
		position: absolute;
	}
</style>
