<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import { type Catalog } from '$lib/interfaces/interfaces';
	import { Gallery, Spinner, type ImgType } from 'flowbite-svelte';
	import { Modal, Button, Tabs, TabItem } from 'flowbite-svelte';

	async function getCatalogs(): Promise<Catalog> {
		const reponse = await fetch('/data/content.json');
		return reponse.json();
	}

	function openModal(item: ImgType) {
		showmodal = true;
		stlToOpen = `api/models/?modelName=${item.name}`;
		modaltitle = item.name.replace('.stl', '');
	}

	const catalogs: Promise<Catalog> = getCatalogs();

	let showmodal = false;
	let stlToOpen = '';
	let modaltitle = '';
</script>

{#await catalogs}
	<div class="flex justify-center">
		<Spinner />
	</div>
{:then catalog}
	<div class="">
		<Tabs
			tabStyle="full"
			contentClass="flex justify-center"
			defaultClass="flex justify-center text-lg"
		>
			<TabItem open title="Anillos de nombre">
				<Gallery
					items={catalog.RingNames.catalog}
					class="grid-cols-2 gap-3 p-2 md:grid-cols-3"
					let:item
				>
					<div>
						<button on:click={openModal(item)}>
							<img src={`/images/${item.src}`} alt={item.alt} />
						</button>
					</div>
				</Gallery>
			</TabItem>
			<TabItem title="Manoplas">
				<Gallery
					items={catalog.Manoplas.catalog}
					class="grid-cols-2 gap-3 p-2 md:grid-cols-3"
					let:item
				>
					<div>
						<button on:click={openModal(item)}>
							<img src={`/images/${item.src}`} alt={item.alt} />
						</button>
					</div>
				</Gallery>
			</TabItem>
		</Tabs>
	</div>
{:catch error}
	<div class="flex justify-center">
		<p>an error ocurred</p>
	</div>
{/await}

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
