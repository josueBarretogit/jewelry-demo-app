export interface CatalogItems {
  alt: string;
  src: string;
  name: string;
}

export interface CatalogData {
  tabTitle: string;
  catalog: CatalogItems[];
}


export interface ContentData {
  content: CatalogData[]
}


export interface RingSettings {
  position: {
    x: number;
    y: number;
    z: number;
  };
  scale: number;
}
