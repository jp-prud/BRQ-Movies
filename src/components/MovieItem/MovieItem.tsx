import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MovieProps } from '@types';

import { Box, BoxProps, TouchableOpacityBox } from '../Box/Box';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

type MovieItemProps = BoxProps & {
  movie: MovieProps;
};

export function MovieItem({ movie, ...props }: MovieItemProps) {
  const { navigate } = useNavigation();

  function handlePressDetails() {
    navigate('DetailsMovieScreen', { movieId: movie.id });
  }

  return (
    <TouchableOpacityBox
      onPress={handlePressDetails}
      flex={1}
      position="relative"
      {...props}>
      <Box
        borderRadius="s8"
        backgroundColor="grayLight"
        position="absolute"
        top={16}
        right={16}
        zIndex={1}
        elevation={2}>
        <FavoriteIcon movie={movie} />
      </Box>

      <Image
        testID={movie.title}
        source={{ uri: movie.posterPath }}
        style={{ flex: 1, borderRadius: 8 }}
        height={200}
        resizeMode="cover"
        resizeMethod="scale"
      />
    </TouchableOpacityBox>
  );
}
