import { renderHook, waitFor } from '@tests';

import { useListMovies } from '../useListMovies/useListMovies';

describe('useListMovies', () => {
  it('should list movies', async () => {
    const { result } = renderHook(() => useListMovies());

    await waitFor(() =>
      expect(result.current.moviesData.isLoading).toBe(false),
    );

    expect(result.current.moviesData.isLoading).toBe(false);
    expect(result.current.moviesData).toMatchSnapshot();
  });
});
