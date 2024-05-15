<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { Gallery } from 'flowbite-svelte';
	import { Modal, Button, Tabs, TabItem } from 'flowbite-svelte';

	const images = [
		{
			alt: 'erbology',
			src: 'camila.png',
			name: 'camilaafter.stl'
		},
		{
			alt: 'erbology',
			src: 'jfpd.png',
			name: 'jfpdstl.stl'
		},
		{
			alt: 'shoes',
			src: 'luisa.png',
			name: 'luisaafter.stl'
		},
		{
			alt: 'a ring',
			src: 'sara.png',
			name: 'saraafter.stl'
		},
		{
			alt: 'plants',
			src: 'saracorazon.png',
			name: 'saracorazonafter.stl'
		},
		{
			alt: 'plants',
			src: 'david.png',
			name: 'pruebapequeno2.stl'
		}
	];

	let showmodal = false;
	let stlToOpen = '';
	let modaltitle = '';
</script>

<div class="">
	<Tabs tabStyle="full">
		<TabItem open title="Anillos de nombre">
			<div class="flex justify-center">
				<Gallery items={images} class="grid-cols-2 gap-3 p-2 md:grid-cols-3" let:item>
					<div>
						<button
							on:click={() => {
								showmodal = true;
								stlToOpen = `api/models/?modelName=${item.name}`;
								modaltitle = item.name.replace('.stl', '');
							}}
						>
							<img src={`/images/${item.src}`} alt={item.alt} />
						</button>
					</div>
				</Gallery>
			</div>
		</TabItem>
		<TabItem title="Coronas">
			<div class="flex justify-center">
				<Gallery items={images} class="grid-cols-2 gap-3 p-2 md:grid-cols-3" let:item>
					<div>
						<button
							on:click={() => {
								showmodal = true;
								stlToOpen = `api/models/?modelName=${item.name}`;
								modaltitle = item.name.replace('.stl', '');
							}}
						>
							<img src={`/images/${item.src}`} alt={item.alt} />
						</button>
					</div>
				</Gallery>
			</div>
		</TabItem>
	</Tabs>
</div>

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
