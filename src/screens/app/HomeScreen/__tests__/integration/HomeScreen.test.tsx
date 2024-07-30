import { AppStack } from "@routes";
import { MoviesService } from "@services";
import { fireEvent, renderScreen, screen, server, waitFor } from "@tests";

const navigate = jest.fn();

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.close();
  jest.resetAllMocks()
})

describe('integration: Home Screen', () => {
  test('Details Movie Flow', async () => {
    const { listMovies } = MoviesService();

    renderScreen(<AppStack initialRouteName="HomeScreen" />)

    await waitFor(() => {
      expect(screen.getByText('Todos os filmes')).toBeTruthy();
    });

    const movies = await listMovies();

    await waitFor(() => {
      expect(movies.data.length).toBeGreaterThan(0);
    });

    const movieItemTitle = movies.data[0].title;
    
    await waitFor(() => {
      expect(screen.getByTestId(movieItemTitle)).toBeTruthy();
    })

    fireEvent.press(screen.getByTestId(movieItemTitle));

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('DetailsMovieScreen', {
        movieId: movieItemTitle,
      });
    });
  })
})