export {};

declare global {
  type Reason = 'market' | 'product' | 'explicit';
  interface TokenResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope?: string;
    token_type: string;
  }

  interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
      filter_enabled: boolean;
      filter_locked: boolean;
    };
    external_urls: { spotify: string };
    followers: { href: string; total: number };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
  }

  interface Image {
    url: string;
    height: number | null;
    width: number | null;
  }

  interface Column {
    id: number;
    header: ReactNode;
    item: (item: unknown, index: number) => ReactNode;
    width?: string;
  }

  interface Copyright {
    text: string;
    type: string;
  }

  interface Track {
    album: {
      album_type: string;
      total_tracks: number;
      available_markets: Array<string>;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<Image>;
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: Reason;
      };
      type: string;
      uri: string;
      artists: Array<SimplifiedArtist>;
    };
    artists: Array<Artist>;
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

  interface Episode {
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
    images: Array<Image>;
    is_externally_hosted: boolean;
    is_playable: boolean;
    language?: string; // Deprecated;
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
      copyrights: Array<Copyright>;
      description: string;
      html_description: string;
      explicit: boolean;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: Array<Image>;
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

  interface Artist {
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
    images: Array<Image>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }

  interface SimplifiedArtist {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  interface SimplifiedTrack {
    artists: Array<SimplifiedArtist>;
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

  interface PlaylistTrack {
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
    track: Track | Episode;
  }

  interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: Array<string>;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: Reason;
    };
    type: string;
    uri: string;
    artists: Array<SimplifiedArtist>;
    tracks: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<SimplifiedTrack>;
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

  interface PlayList {
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
    images: Array<Image>;
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
      items: Array<PlaylistTrack>;
    };
    type: string;
    uri: string;
  }

  interface Player {
    device: {
      id: string | null;
      is_active: boolean;
      is_private_session: boolean;
      is_restricted: boolean;
      name: string;
      type: string;
      volume_percent: number | null;
    };
    repeat_state: string;
    shuffle_state: boolean;
    context: {
      type: string;
      href: string;
      external_urls: {
        spotify: string;
      };
      uri: string;
    } | null;
    timestamp: number;
    progress_ms: number;
    is_playing: boolean;
    item: Track | Episode;
    currently_playing_type: string;
    actions: {
      disallows: {
        resuming: boolean;
        skipping_prev: boolean;
      };
    };
  }

  interface Search {
    artists: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<Artist>;
    };
    albums: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: Array<Album>;
    };
    playlists: {
      href: string;
      items: Array<PlayList>;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
    };
  }
}
