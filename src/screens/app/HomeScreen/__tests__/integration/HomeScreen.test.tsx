import { MoviesService } from '@services';
import { fireEvent, mockedNavigate, renderScreen, screen, server, waitFor } from '@tests';

import { AppStack } from '@routes';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration: <HomeScreen />', () => {
  it.skip('should sign out', async () => { 
    renderScreen(<AppStack initialRouteName="HomeScreen" />);

    await waitFor(() => {
      expect(screen.getByTestId('sign-out')).toBeTruthy();
    });
    
    fireEvent.press(screen.getByTestId('sign-out'));

    await waitFor(() => {
      expect(screen.getByTestId('sign-in')).toBeTruthy();
    });
  });

  test('Details Movie Flow', async () => {
    const { listMovies } = MoviesService();

    renderScreen(<AppStack initialRouteName="HomeScreen" />);

    await waitFor(() => {
      expect(screen.getByText('Todos os filmes')).toBeTruthy();
    });

    const movies = await listMovies();

    await waitFor(() => {
      expect(movies.data.length).toBeGreaterThan(0);
    });

    const movieItemId = movies.data[0].id;
    const testId = `movie-item-${movieItemId}`;

    await waitFor(() => {
      expect(screen.getByTestId(testId)).toBeTruthy();
    });

    fireEvent.press(screen.getByTestId(testId));

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('DetailsMovieScreen', {
        movieId: movieItemId,
      });
    });
  });
});
