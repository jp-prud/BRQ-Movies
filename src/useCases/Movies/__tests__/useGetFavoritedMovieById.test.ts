import { renderHook, waitFor } from "@tests";
import { useFavoriteMovie } from "../useFavoriteMovie/useFavoriteMovie";
import { useGetFavoritedMovieById } from "../useGetFavoritedMovieById/useGetFavoritedMovieById";
import { useListMovies } from "../useListMovies/useListMovies";

describe('useGetFavoritedMovieById', () => { 
  it('should get favorited movie by id', async () => { 
    const { result }= renderHook(() => useListMovies())
    const { result: favoriteMovieResult } = renderHook(() => useFavoriteMovie());

    await waitFor(() => {
      expect(result.current.moviesData.isLoading).toBe(false);
      expect(result.current.moviesData.list?.data.length).toBeGreaterThan(0);
    });

    const searchMovie = result.current.moviesData.list!.data[0];
    favoriteMovieResult.current.favoriteMovie(searchMovie);

    await waitFor(() => expect(favoriteMovieResult.current.isPending).toBe(false));

    const { result: favoritedMovieResult } = renderHook(() => useGetFavoritedMovieById(searchMovie.id));

    await waitFor(() => expect(favoritedMovieResult.current.isPending).toBe(false));

    expect(favoritedMovieResult.current.favorited).toBe(searchMovie);
  });
});