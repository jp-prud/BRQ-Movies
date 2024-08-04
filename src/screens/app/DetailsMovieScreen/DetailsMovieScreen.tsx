import { FlatList, Image, ListRenderItemInfo } from 'react-native';

import { MovieProps } from '@types';
import { regeneratePosterPath } from '@utils';

import {
  ActivityIndicator,
  Box,
  FavoriteIcon,
  MovieItem,
  RenderIfElse,
  Screen,
  Text,
  TitleBar,
} from '@components';
import { AppScreenProps } from '@routes';

import { useDetailsMovieScreen } from './useDetailsMovieScreen';

export function DetailsMovieScreen({
  route,
}: AppScreenProps<'DetailsMovieScreen'>) {
  const { movieId } = route.params;

  const { movie, similars, isLoading, isLoadingSimilars } =
    useDetailsMovieScreen(movieId);

  function renderItem({ item }: ListRenderItemInfo<MovieProps>) {
    return <MovieItem movie={item} width={150} height={150} />;
  }

  return (
    <Screen canGoBack isLoading={isLoading} title="Movie Details" scrollable testID='details-screen'>
      <Box
        overflow="hidden"
        borderRadius="s8"
        height={420}
        flex={1}
        backgroundColor="gray">
        <Image
          source={{ uri: regeneratePosterPath(movie?.posterPath, 'original') }}
          style={{ flex: 1 }}
        />
      </Box>

      <Box
        mt="s32"
        mb="s16"
        flexDirection="row"
        alignItems="stretch"
        justifyContent="space-between"
        g="s16">
        <Text preset="headingMedium" style={{ flex: 1 }}>
          {movie?.title}
        </Text>

        <FavoriteIcon movie={movie!} />
      </Box>

      <Box g="s24">
        <Box g="s12">
          <TitleBar title="Sinopse" />
          <Text>{movie?.overview}</Text>
        </Box>

        <Box g="s12">
          <TitleBar title="Similares" />
          <RenderIfElse
            condition={isLoadingSimilars}
            renderIf={<ActivityIndicator size="large" />}
            renderElse={
              <FlatList
                testID='similar-movies-list'
                data={similars?.data}
                renderItem={renderItem}
                horizontal
                contentContainerStyle={{ gap: 16 }}
                showsHorizontalScrollIndicator={false}
              />
            }
          />
        </Box>
      </Box>
    </Screen>
  );
}
