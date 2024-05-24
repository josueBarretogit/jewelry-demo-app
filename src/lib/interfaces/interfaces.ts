export interface CatalogItems {
	alt: string;
	src: string;
	name: string;
}

export interface CatalogData {
  tabTitle : string;
	catalog: CatalogItems[];
}


export interface ContentData {
  content : CatalogData[]
}
