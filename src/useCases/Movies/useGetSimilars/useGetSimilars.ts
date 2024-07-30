import { MoviesService } from "@services"
import { useQuery } from "@tanstack/react-query"
import { MovieProps, QueryKeys } from "@types"

export function useGetSimilars(movieId: MovieProps['id']) {
  const { getSimilars } = MoviesService()

  const { data: similars, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.listSimilars, movieId],
    queryFn: () => getSimilars(movieId)
  })

  return {
    similars, isLoading, isError
  }
}