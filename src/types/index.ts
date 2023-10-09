import { ReactNode } from 'react';

type Reason = 'market' | 'product' | 'explicit';

export interface Column {
  id: number;
  header: ReactNode;
  item: (item: unknown, index: number) => ReactNode;
}

export interface ImageObject {
  url: string;
  height: number | null;
  width: number | null;
}

export interface CopyrightObject {
  text: string;
  type: string;
}

export interface TrackObject {
  album: {
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
      reason: Reason;
    };
    type: string;
    uri: string;
    artists: Array<SimplifiedArtistObject>;
  };
  artist: Array<ArtistObject>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: unknown;
  restrictions: {
    reason: Reason;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface EpisodeObject {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Array<ImageObject>;
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string; // Deprecated;
  languages: Array<string>;
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  restrictions: {
    reason: Reason;
  };
  show: {
    available_markets: Array<string>;
    copyrights: Array<CopyrightObject>;
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<ImageObject>;
    is_externally_hosted: boolean;
    languages: Array<string>;
    media_type: string;
    name: string;
    publisher: string;
    type: string;
    uri: string;
    total_episodes: number;
  };
}

export interface ArtistObject {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<ImageObject>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
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
    reason: Reason;
  };
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface PlaylistTrackObject {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: TrackObject | EpisodeObject;
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
    reason: Reason;
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

export interface PlayList {
  collaborative: boolean;
  description: string | null;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: Array<ImageObject>;
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string | null;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: Array<PlaylistTrackObject>;
  };
  type: string;
  uri: string;
}
