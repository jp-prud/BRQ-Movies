import { server } from '@tests';
import { MoviesService } from '../MoviesService';

// Iniciar o servidor de mock antes de todos os testes
beforeAll(() => {
  server.listen();
});

// Resetar os handlers do servidor após cada teste para evitar poluição entre testes
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

// Parar o servidor após todos os testes
afterAll(() => {
  server.close();
});

describe('MoviesService', () => {
  it('should return a list of movies', async () => {
    const { listMovies } = MoviesService();

    const movies = await listMovies();

    expect(movies.data.length).toBeGreaterThan(0);
    expect(movies.data.length).toBe(3); // Ajuste de acordo com os dados mockados esperados
    // Verificar a estrutura dos filmes
    movies.data.forEach(movie => {
      expect(movie).toHaveProperty('id');
      expect(movie).toHaveProperty('title');
    });
  });

  it("should render movie's details", async () => {
    const { listMovies, getMovieById } = MoviesService();

    const movies = await listMovies();
    const movie = await getMovieById(movies.data[0].id);

    expect(movie).toHaveProperty('title', movies.data[0].title);
    expect(movie).toHaveProperty('id', movies.data[0].id);
    // Adicione mais verificações conforme necessário
  });

  it('should render favorite movies', async () => {
    const { listMovies, favoriteMovie, listFavoriteMovies } = MoviesService();

    const movies = await listMovies();
    const movie = movies.data[0];

    await favoriteMovie(movie);

    const favoriteMovies = await listFavoriteMovies();

    expect(favoriteMovies).toEqual([movie]);
    expect(favoriteMovies.length).toBe(1); // Removido o operador "!"
  });

  it('should favorite a movie', async () => {
    const { listMovies, favoriteMovie, listFavoriteMovies } = MoviesService();

    const movies = await listMovies();
    const movie = movies.data[0];

    await favoriteMovie(movie);

    const favoriteMovies = await listFavoriteMovies();

    expect(favoriteMovies).toMatchSnapshot();
  });

  test('is favorited movie', async () => { 
    const { listMovies, favoriteMovie, favoritedMovieById } = MoviesService();

    const movies = await listMovies();
    const movie = movies.data[0];

    await favoriteMovie(movie);
    
    const favoritedMovie = await favoritedMovieById(movie.id);

    expect(movie).toEqual(favoritedMovie);
  });
});
