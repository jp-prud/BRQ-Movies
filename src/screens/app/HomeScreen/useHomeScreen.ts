import { useListFavoriteMovies, useListMovies, useSignOut } from "@useCases"

export function useHomeScreen() {
  const { 
    moviesData, refetch
  } = useListMovies()
  
  const { favoriteMoviesData } = useListFavoriteMovies()

  const { signOut } = useSignOut()

  return {
    moviesData,
    favoriteMoviesData,
    signOut,
    refetch
  }
}