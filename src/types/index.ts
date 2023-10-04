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

export interface SimplifiedTrackObject {
  artists: Array<SimplifiedArtistObject>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  restrictions: {
    reason: 'market' | 'product' | 'explicit';
  };
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
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
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<SimplifiedTrackObject>;
  };
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  genres: Array<string>;
  label: string;
  popularity: number;
}
