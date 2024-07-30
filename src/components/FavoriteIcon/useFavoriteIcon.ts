import { useToastService } from "@context";
import { FavoriteMovieProps } from "@types";
import { useFavoriteMovie, useGetFavoritedMovieById } from "@useCases";

export function useFavoriteIcon(movie: FavoriteMovieProps) {
  const { showToast } = useToastService()
  
  const { favorited, isPending, refetch } = useGetFavoritedMovieById(movie.id)

  const { favoriteMovie } = useFavoriteMovie({
    errorMessage: 'Erro ao favoritar filme',
    onError: error => showToast({ message: error.message, type: 'info' }),
    onSuccess: () => showToast({ message: 'Favorito alterado', type: 'success' }),
  })

  async function handleFavorite() {
    await favoriteMovie(movie)

    refetch()
  }

  return {
    handleFavorite,
    favorited,
    isPending
  }
}