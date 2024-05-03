<script lang="ts">
	import { PUBLIC_URL_API } from '$env/static/public';
	import Modal3DModel from '$lib/components/Modal3DModel.svelte';
	import { Canvas } from '@threlte/core';
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;

	const filepath = `${PUBLIC_URL_API}/public/sandra6gr.stl`;
	const lightPosition = {
		x: 1,
		y: 1,
		z: 1
	};
</script>

<div class=" flex w-full justify-center bg-black" style="height: 50vh;">
	<Canvas>
		<Modal3DModel {filepath} {lightPosition} />
	</Canvas>
</div>

<style>
	:global(body) {
		margin: 0;
	}
</style>
