export interface CatalogItems {
	alt: string;
	src: string;
	name: string;
}

export interface CatalogData {
	catalog: CatalogItems[];
}

export interface Catalog {
	RingNames: CatalogData;
	Manoplas: CatalogData;
}
