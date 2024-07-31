import { MoviesService } from '@services';
import { useQuery } from '@tanstack/react-query';
import { MovieProps, QueryKeys } from '@types';

export function useGetMovieById(movieId: MovieProps['id']) {
  const { getMovieById } = MoviesService();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.getMovie, movieId],
    queryFn: () => getMovieById(movieId),
  });

  return {
    movie: data,
    isLoading,
    isError,
  };
}
