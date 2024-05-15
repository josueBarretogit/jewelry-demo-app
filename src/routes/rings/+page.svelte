<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { Gallery } from 'flowbite-svelte';
	import { Modal, Button } from 'flowbite-svelte';

	const images = [
		{
			alt: 'erbology',
			src: '/images/gabriela.png',
			name: 'gabrielavitrina.glb'
		},
		{
			alt: 'erbology',
			src: '/images/adri.png',
			name: 'adri6gr.glb'
		},
		{
			alt: 'shoes',
			src: '/images/ana.png',
			name: 'ana enviar.glb'
		},
		{
			alt: 'small bag',
			src: '/images/pantera.png',
			name: 'pantera.glb'
		},
		{
			alt: 'plants',
			src: '/images/sandra.png',
			name: 'sandra6gr.glb'
		},
		{
			alt: 'plants',
			src: '/images/sandra.png',
			name: 'pruebapequeno2.stl'
		}
	];

	let showmodal = false;
	let stlToOpen = '';
	let modaltitle = '';
</script>

<Gallery items={images} class="grid-cols-2 gap-4 p-2 md:grid-cols-3" let:item>
	<div>
		<button
			on:click={() => {
				showmodal = true;

				stlToOpen = `api/models/?modelName=${item.name}`;

				modaltitle = item.name.replace('.stl', '');
			}}
		>
			<img src={item.src} alt={item.alt} />
		</button>
	</div>
</Gallery>

<Modal title={modaltitle} size="lg" bind:open={showmodal}>
	<div class=" modelContainer">
		<Canvas3D filepath={stlToOpen} />
	</div></Modal
>

<style>
	.modelContainer {
		display: flex;

		background-color: lightcyan;
		position: relative;
		justify-content: center;
		width: 100%;
		height: 70vh;
	}
</style>
