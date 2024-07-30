import {
  ActivityIndicator,
  Box,
  Icon,
  InfinityScrollList,
  MovieItem,
  RenderIfElse,
  Screen,
  TabbedBox,
  Text
} from '@components';
import { AppScreenProps } from '@routes';
import { MoviesService } from '@services';
import { MovieProps, QueryKeys } from '@types';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useHomeScreen } from './useHomeScreen';

export function HomeScreen({ }: AppScreenProps<'HomeScreen'>) {
  const { moviesData, favoriteMoviesData, signOut } = useHomeScreen();

  function renderItem({ item }: ListRenderItemInfo<MovieProps>) {
    return <MovieItem movie={item} />
  }

  function renderHomeContent() {
    return (
      <TabbedBox
        tabs={[
          {
            label: 'Todos os filmes',
            content: (
              <InfinityScrollList
                getList={MoviesService().listMovies}
                renderItem={renderItem}
                queryKey={QueryKeys.getMovie}
                flatListProps={{
                  contentContainerStyle: { gap: 16 },
                  columnWrapperStyle: { justifyContent: 'space-between', gap: 16 },
                  numColumns: 2
                }}
              />
            )
          },
          {
            label: 'Filmes Favoritos',
            content: (
              <FlatList
                data={favoriteMoviesData!.list}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', gap: 16}}
                contentContainerStyle={{ gap: 16 }}
                ListEmptyComponent={<Text>Nenhum filme favorito</Text>}
              />
            )
          }
        ]}
      />
    )
  }

  return (
    <Screen>  
      <Box flexDirection='row' alignItems='center' justifyContent='space-between' mb="s16">
        <Text preset="headingMedium">
          BRQ Movies
        </Text>

        <Icon name="arrowReturn" onPress={signOut} />
      </Box>

      <RenderIfElse
        condition={moviesData.isLoading}
        renderIf={<ActivityIndicator size="large" />}
        renderElse={renderHomeContent()}
      />
    </Screen>
  );
}