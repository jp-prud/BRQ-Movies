import { act, renderHook, waitFor } from '@tests';

import { MoviesService } from '@services';
import { useFavoriteMovie } from '../useFavoriteMovie/useFavoriteMovie';
import { useListMovies } from '../useListMovies/useListMovies';

const mockedOnError = jest.fn();

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

  it.skip('should call onError when favoriteMovie fails', async () => {
    jest.spyOn(MoviesService(), 'favoriteMovie').mockRejectedValue(new Error('Error'));

    const { result } = renderHook(() => useFavoriteMovie({
      errorMessage: 'Error',
      onError: mockedOnError,
    }));

    const { result: listMoviesResult } = renderHook(() => useListMovies());

    await waitFor(() => {
      expect(listMoviesResult.current.moviesData.isLoading).toBe(false);
      expect(
        listMoviesResult.current.moviesData.list?.data.length,
      ).toBeGreaterThan(0);
    });

    const searchMovie = listMoviesResult.current.moviesData.list!.data[0];

    act(() => {
      result.current.favoriteMovie(searchMovie);
    })

    await waitFor(() => expect(result.current.isPending).toBe(false));

    expect(mockedOnError).toHaveBeenCalledWith('Error');
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
