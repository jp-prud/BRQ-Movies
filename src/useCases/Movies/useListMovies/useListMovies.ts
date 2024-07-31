import { MoviesService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@types';

export function useListMovies() {
  const { listMovies } = MoviesService();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.listMovies],
    queryFn: () => listMovies(),
  });

  return {
    refetch,
    moviesData: {
      list: data,
      isLoading,
      isError,
    },
  };
}
