<script lang="ts">
	import Canvas3D from '$lib/components/Canvas3D.svelte';
	import type { CatalogItems, ContentData } from '$lib/interfaces/interfaces';
	import { Gallery, Spinner,  } from 'flowbite-svelte';
	import { Modal, Button, Tabs, TabItem } from 'flowbite-svelte';

	async function getCatalogs(): Promise<ContentData> {
		const reponse = await fetch('/data/content.json');
		return reponse.json();
	}

	function openModal(item: CatalogItems) : undefined {
		showmodal = true;
		stlToOpen = `api/models/?modelName=${item.name}`;
		modaltitle = item.name.replace('.stl', '');
	}

	const catalogs: Promise<ContentData> = getCatalogs();

	let showmodal = false;
	let stlToOpen = '';
	let modaltitle = '';
</script>

{#await catalogs}
	<div class="flex justify-center">
		<Spinner />
	</div>
{:then catalogData}
	<div class="">
		<Tabs
			tabStyle="full"
			contentClass="flex justify-center"
			defaultClass="flex justify-center text-lg"
		>
			{#each catalogData.content as catalog}
				<TabItem open title={catalog.tabTitle}>
					<Gallery
						items={catalog.catalog}
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
			{/each}
		</Tabs>
	</div>
{:catch error}
	<div class="flex justify-center">
    {console.error(error)}
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

		background-color: white;
		position: relative;
		justify-content: center;
		width: 100%;
		height: 70vh;
	}
</style>
