import { MovieProps, MoviePropsAPI, PageAPI } from '@types';

const MovieAPI: MoviePropsAPI = {
  id: 1,
  title: 'Movie Title',
  overview: 'Movie Overview',
  poster_path: 'Movie Poster Path',
  backdrop_path: 'Movie Backdrop Path',
  vote_average: 10,
  release_date: '2021-01-01',
  genres: [
    { id: 1, name: 'Genre 1' },
    { id: 2, name: 'Genre 2' },
  ],
  video: false,
  adult: false,
  genre_ids: [1, 2],
  original_language: 'en',
  original_title: 'Movie Original Title',
  popularity: 10,
  vote_count: 100,
};

const Movie: MovieProps = {
  id: 1,
  title: 'Movie Title',
  overview: 'Movie Overview',
  posterPath: 'Movie Poster Path',
  backdropPath: 'Movie Backdrop Path',
  voteAverage: 10,
  releaseDate: '2021-01-01',
  genres: [
    { id: 1, name: 'Genre 1' },
    { id: 2, name: 'Genre 2' },
  ],
  video: false,
  adult: false,
  genreIds: [1, 2],
  originalLanguage: 'en',
  originalTitle: 'Movie Original Title',
  popularity: 10,
  voteCount: 100,
};

const MoviesListAPI: MoviePropsAPI[] = [MovieAPI, MovieAPI, MovieAPI].map((movie, index) => ({ ...movie, id: index }));

const MoviesList: MovieProps[] = [Movie, Movie, Movie].map((movie, index) => ({ ...movie, id: index }));

const MoviesAPIListResponse: PageAPI<MoviePropsAPI> = {
  page: 1,
  results: MoviesListAPI,
  total_pages: 1,
  total_results: 3,
};

export const mockedMoviesData = {
  MovieAPI,
  MoviesListAPI,
  Movie,
  MoviesList,
  MoviesAPIListResponse,
};
