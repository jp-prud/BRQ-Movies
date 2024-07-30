import { FavoriteMovieProps } from "@types";
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator";
import { Icon } from "../Icon/Icon";
import { RenderIfElse } from "../RenderIfElse/RenderIfElse";
import { useFavoriteIcon } from "./useFavoriteIcon";

interface FavoriteIconProps { 
  movie: FavoriteMovieProps
}

export function FavoriteIcon({ movie }: FavoriteIconProps) {
  const { favorited, isPending, handleFavorite } = useFavoriteIcon(movie)

  return (
    <RenderIfElse 
      condition={isPending}
      renderIf={<ActivityIndicator />}
      renderElse={
        <RenderIfElse
          condition={!!favorited}
          renderIf={<Icon name="heartFill" color="primary" onPress={handleFavorite}/>}
          renderElse={<Icon name="heart" color="primary" onPress={handleFavorite}/>}
        />
      }
    />
    
  )
}