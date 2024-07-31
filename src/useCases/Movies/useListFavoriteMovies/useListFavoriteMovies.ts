import { MoviesService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useListFavoriteMovies() {
  const { listFavoriteMovies } = MoviesService();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.listFavoriteMovies],
    queryFn: listFavoriteMovies,
  });

  return {
    favoriteMoviesData: {
      list: data,
      isLoading,
      isError,
    },
  };
}
