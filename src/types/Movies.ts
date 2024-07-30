export interface MoviePropsAPI {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: {
    id: number;
    name: string;
  }[];
}

export interface MovieProps {
  id: number;
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  genres: {
    id: number;
    name: string;
  }[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export type FavoriteMovieProps = Pick<MovieProps, 'id' | 'posterPath'>;