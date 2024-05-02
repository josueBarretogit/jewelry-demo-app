<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { Gallery } from 'flowbite-svelte';
	import { Modal, Button } from 'flowbite-svelte';
	const images = [
		{
			alt: 'erbology',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
			name: 'adri6gr.stl'
		},
		{
			alt: 'shoes',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
			name: 'ana enviar.stl'
		},
		{
			alt: 'small bag',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
			name: 'pantera.stl'
		},
		{
			alt: 'plants',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
			name: 'sandra6gr.stl'
		},
		{
			alt: 'watch',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
			name: 'anaisabel18.4gr.stl'
		},
		{
			alt: 'shoe',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.,jpg ',
			name: 'pantera.stl'
		}
	];

	let showmodal = false;
	let stlToOpen = '';
	let modaltitle = '';
</script>

<Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" let:item>
	<div>
		<button
			on:click={() => {
				showmodal = true;
				stlToOpen = `http://localhost:4000/public/${item.name}`;
				modaltitle = item.name.replace('.stl', '');
			}}
		>
			<img src={item.src} alt={item.alt} />
		</button>
	</div>
</Gallery>

<Modal title={modaltitle} bind:open={showmodal} autoclose>
	<div class=" modelContainer">
		<Canvas3D filepath={stlToOpen} />
	</div></Modal
>

<style>
	.modelContainer {
		display: flex;

		position: relative;
		background-color: lightblue;
		justify-content: center;
		width: 100%;
		height: 70vh;
	}
</style>
