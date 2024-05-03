<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { Gallery } from 'flowbite-svelte';
	import { Modal, Button } from 'flowbite-svelte';
	import { PUBLIC_URL_API } from '$env/static/public';

	const images = [
		{
			alt: 'erbology',
			src: '/images/gabriela.png',
			name: 'gabrielavitrina.gltf'
		},
		{
			alt: 'erbology',
			src: '/images/adri.png',
			name: 'adri6gr.stl'
		},
		{
			alt: 'shoes',
			src: '/images/ana.png',
			name: 'ana enviar.stl'
		},
		{
			alt: 'small bag',
			src: '/images/pantera.png',
			name: 'pantera.stl'
		},
		{
			alt: 'plants',
			src: '/images/sandra.png',
			name: 'sandra6gr.stl'
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

				stlToOpen = `${PUBLIC_URL_API}/public/${item.name}`;

				modaltitle = item.name.replace('.stl', '');
			}}
		>
			<img src={item.src} alt={item.alt} />
		</button>
	</div>
</Gallery>

<Modal title={modaltitle} size="lg" bind:open={showmodal} autoclose>
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
