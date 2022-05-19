/**
 * Response from the tempo API
 */
export interface BpmAPI {
  tempo: Tempo[];
}

export interface Tempo {
  song_id: string;
  song_title: string;
  song_uri: string;
  tempo: string;
  artist: Artist;
  album: Album;
}

export interface Album {
  title: string;
  uri: string;
  img: string;
  year: string;
}

export interface Artist {
  id: string;
  name: string;
  uri: string;
  img: string;
  genres: string[];
  from: string;
  mbid: string;
}
