import { renderHook, waitFor } from "@tests";
import { useListFavoriteMovies } from "../useListFavoriteMovies/useListFavoriteMovies";

describe('useListFavoriteMovies', () => { 
  it('should list favorite movies', async () => { 
    const { result } = renderHook(() => useListFavoriteMovies());
    
    await waitFor(() => expect(result.current.favoriteMoviesData.isLoading).toBe(false));

    expect(result.current.favoriteMoviesData.isLoading).toBe(false);
    expect(result.current.favoriteMoviesData).toMatchSnapshot()
  });
});