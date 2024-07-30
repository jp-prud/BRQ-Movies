import { MovieProps, MoviePropsAPI, env } from "@types";

export function MovieMapper() {
  function toPresentation(movie: MoviePropsAPI): MovieProps {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      adult: movie.adult,
      genres: movie.genres,
      posterPath: `${env.API_IMAGE_URL}${movie.poster_path}`,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
      backdropPath: `${env.API_IMAGE_URL}${movie.backdrop_path}`,
      genreIds: movie.genre_ids,
      originalLanguage: movie.original_language,
      originalTitle: movie.original_title,
      popularity: movie.popularity,
      video: movie.video,
      voteCount: movie.vote_count,
    }
  }

  return {
    toPresentation
  }
}