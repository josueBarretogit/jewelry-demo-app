<script lang="ts">
	import Modal3DModel from '$lib/components/Modal3DModel.svelte';
	import SceneMainPage from '$lib/components/SceneMainPage.svelte.svelte';
	import { Canvas } from '@threlte/core';
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;

	const filepath = `/api/models/?modelName=saraafter.stl`;
	const lightPosition = {
		x: 1,
		y: 1,
		z: 1
	};
</script>

<div class=" bg-grey flex w-full justify-center" style="height: 50vh;">
	<Canvas>
		<SceneMainPage />
	</Canvas>
</div>

<div class="main-content">
	<div class="tabs"></div>
</div>

<style>
	:global(body) {
		margin: 0;
	}
</style>
