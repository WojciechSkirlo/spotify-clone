export interface ImageObject {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SimplifiedArtistObject {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<ImageObject>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: 'market' | 'product' | 'explicit';
  };
  type: string;
  uri: string;
  artists: Array<SimplifiedArtistObject>;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  genres: Array<string>;
  label: string;
  popularity: number;
}
