import { MovieProps } from '@types';
import { useGetMovieById, useGetSimilars } from '@useCases';

export function useDetailsMovieScreen(movieId: MovieProps['id']) {
  const { movie, isError, isLoading } = useGetMovieById(movieId);

  const { similars, isLoading: isLoadingSimilars } = useGetSimilars(movieId);

  return {
    movie,
    similars,
    isLoading,
    isError,
    isLoadingSimilars,
  };
}
