import { FavoriteMovieProps, MovieProps, MoviePropsAPI, Page, PageAPI, StorageKeys } from "@types"
import { storage } from "../StorageService/storage"
import { HttpClient } from "../utils/HttpClient"
import { APIMapper } from "../utils/mappers/APIMapper"
import { MovieMapper } from "../utils/mappers/MovieMapper"

export function MoviesService() {
  async function listMovies(page: number = 1): Promise<Page<MovieProps>> {
    const { toPageModel }  = APIMapper()
    const { data } = await HttpClient.get<PageAPI<MoviePropsAPI>>(`/movie/popular?language=en-US&page=${page}`)
    return toPageModel(data, MovieMapper().toPresentation)
  }

  function listFavoriteMovies(): Promise<FavoriteMovieProps[] | null> { 
    return storage.getItem<FavoriteMovieProps[]>(StorageKeys.FavoriteMovies)
  }

  async function getMovieById(movieId: MovieProps['id']): Promise<MovieProps> { 
    const { toPresentation } = MovieMapper()
    const { data } = await HttpClient.get<MoviePropsAPI>(`/movie/${movieId}?language=en-US`)
    return toPresentation(data)
  }

  async function favoritedMovieById(movieId: MovieProps['id']): Promise<FavoriteMovieProps | null> { 
    const favoriteMovies = await storage.getItem<FavoriteMovieProps[]>(StorageKeys.FavoriteMovies) || [];
    return favoriteMovies.find(movie => movie.id === movieId) || null
  }

  async function favoriteMovie(favoriteMovie: Pick<MovieProps, 'id' | 'posterPath'>): Promise<void> { 
    const favoriteMovies = await storage.getItem<FavoriteMovieProps[]>(StorageKeys.FavoriteMovies) || [];

    const isFavorited = favoriteMovies.some(movie => movie.id === favoriteMovie.id)

    if (isFavorited) { 
      const newFavoriteMovies = favoriteMovies.filter(movie => movie.id !== favoriteMovie.id)
      storage.setItem(StorageKeys.FavoriteMovies, newFavoriteMovies)

      return
    }

    const newFavoriteMovies = [...favoriteMovies, favoriteMovie]
    storage.setItem(StorageKeys.FavoriteMovies, newFavoriteMovies)
  }

  async function getSimilars(movieId: MovieProps['id'], page: number = 1): Promise<Page<MovieProps>> {
    console.log('movieId', movieId)

    const { toPageModel }  = APIMapper()
    const { data } = await HttpClient.get<PageAPI<MoviePropsAPI>>(`/movie/${movieId}/similar?language=en-US&page=${page}`)
    return toPageModel({
      ...data,
      results: data.results.slice(0, 20)
    }, MovieMapper().toPresentation)
  }

  return {
    listMovies,
    listFavoriteMovies,
    favoriteMovie,
    favoritedMovieById,
    getMovieById,
    getSimilars
  }
}