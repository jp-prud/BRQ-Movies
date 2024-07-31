import { MoviesService } from '@services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  FavoriteMovieProps,
  MutationKeys,
  MutationOptions,
  QueryKeys,
} from '@types';

export function useFavoriteMovie(options?: MutationOptions<void>) {
  const { favoriteMovie: favoriteMovieService } = MoviesService();

  const queryClient = useQueryClient();

  const {
    mutateAsync: favoriteMovie,
    isError,
    isPending,
    isSuccess,
  } = useMutation<unknown, undefined, FavoriteMovieProps>({
    mutationKey: [MutationKeys.favoriteMovie],
    mutationFn: props => favoriteMovieService(props),
    onError: error => {
      console.error(error);

      if (options?.onError) {
        options.onError(error);
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.favoritedMovieById, variables.id],
      });

      queryClient.invalidateQueries({
        queryKey: [QueryKeys.listFavoriteMovies],
      });

      queryClient.invalidateQueries({
        queryKey: [MutationKeys.favoriteMovie],
      });

      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
  });

  return {
    favoriteMovie,
    isError,
    isPending,
    isSuccess,
  };
}
