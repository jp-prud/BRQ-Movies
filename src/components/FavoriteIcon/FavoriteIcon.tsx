import { FavoriteMovieProps } from '@types';

import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Icon } from '../Icon/Icon';
import { RenderIfElse } from '../RenderIfElse/RenderIfElse';

import { Box } from '../Box/Box';
import { useFavoriteIcon } from './useFavoriteIcon';

interface FavoriteIconProps {
  movie: FavoriteMovieProps;
}

export function FavoriteIcon({ movie }: FavoriteIconProps) {
  const { favorited, isPending, handleFavorite } = useFavoriteIcon(movie);

  return (
    <RenderIfElse
      condition={isPending}
      renderIf={<ActivityIndicator />}
      renderElse={
        <Box testID={`favorite-icon-${favorited ? 'favorited' : 'not-favorited'}`}>
          <Icon name={favorited ? 'heartFill' : 'heart'} onPress={handleFavorite} />
        </Box>
      }
    />
  );
}
