import { MoviesService } from "@services"
import { useQuery } from "@tanstack/react-query"
import { FavoriteMovieProps, QueryKeys } from "@types"

export function useGetFavoritedMovieById(favoriteMovieId: FavoriteMovieProps['id']) {
  const { favoritedMovieById } = MoviesService()

  const { data, isPending, isError, refetch } = useQuery({
    queryKey: [QueryKeys.favoritedMovieById, favoriteMovieId],
    queryFn: () => favoritedMovieById(favoriteMovieId)
  })

  return {
    favorited: data,
    isPending,
    isError,
    refetch
  }
}