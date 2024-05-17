export interface CatalogItems {
	alt: string;
	src: string;
	name: string;
}

export interface CatalogData {
	catalog: CatalogItems[];
}

export interface Catalog {
	ringNames: CatalogData;
	manoplas: CatalogData;
	dijes: CatalogData;
}
