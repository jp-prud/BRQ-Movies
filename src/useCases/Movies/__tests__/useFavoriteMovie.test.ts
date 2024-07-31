import { renderHook, waitFor } from '@tests';

import { useFavoriteMovie } from '../useFavoriteMovie/useFavoriteMovie';
import { useListMovies } from '../useListMovies/useListMovies';

describe('useFavoriteMovie', () => {
  it.skip('should favorite a movie', async () => {
    const { result } = renderHook(() => useFavoriteMovie());
    const { result: listMoviesResult } = renderHook(() => useListMovies());

    await waitFor(() => {
      expect(listMoviesResult.current.moviesData.isLoading).toBe(false);
      expect(
        listMoviesResult.current.moviesData.list?.data.length,
      ).toBeGreaterThan(0);
    });

    const searchMovie = listMoviesResult.current.moviesData.list!.data[0];
    result.current.favoriteMovie(searchMovie);

    await waitFor(() => expect(result.current.isPending).toBe(false));

    expect(result.current.favoriteMovie).toBe(searchMovie);
  });
});
