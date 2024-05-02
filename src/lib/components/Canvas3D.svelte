<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Modal3DModel from './Modal3DModel.svelte';

	export let filepath: string;
</script>

<Canvas>
	<Modal3DModel {filepath} />
</Canvas>
