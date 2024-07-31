import { waitFor } from '@testing-library/react-native';
import { renderHook } from '@tests';

import { useGetMovieById } from '../useGetMovieById/useGetMovieById';
import { useListMovies } from '../useListMovies/useListMovies';

describe('useGetMovieById', () => {
  it('should get movie by id', async () => {
    const { result: listMoviesResult } = renderHook(() => useListMovies());

    await waitFor(() => {
      expect(listMoviesResult.current.moviesData.isLoading).toBe(false);
      expect(
        listMoviesResult.current.moviesData.list?.data.length,
      ).toBeGreaterThan(0);
    });

    const searchMovie = listMoviesResult.current.moviesData.list!.data[0];

    const { result } = renderHook(() => useGetMovieById(searchMovie.id));

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.movie).toBe(searchMovie);
    expect(result.current.movie).toMatchSnapshot(searchMovie);
  });

  it.skip('should return an error if the movie id does not exist', async () => {
    const { result } = renderHook(() => useGetMovieById(999999));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.isError).toBe(true);
  });
});
