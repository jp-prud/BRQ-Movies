import { authCredentials, renderHook, server, waitFor } from '@tests';
import { SignInProps } from '@types';
import { useSignIn } from '@useCases';

import { AuthService } from '../AuthService';

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

const mockedSaveCredentials = jest.fn();

jest.mock('@context', () => {
  const originalModule = jest.requireActual('@context');

  return {
    ...originalModule,
    useAuthContext: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('AuthService', () => {
  it('should return username when user signIn', async () => {
    const { signIn } = AuthService();

    const crendentials: SignInProps = {
      username: 'user',
      password: '123',
    };

    const response = await signIn(crendentials);

    expect(response).toEqual({ username: crendentials.username });
  });

  it('should return error when user signIn with invalid credentials', async () => {
    const { signIn } = AuthService();

    const crendentials: SignInProps = {
      username: 'invalid_user',
      password: '123',
    };

    try {
      await signIn(crendentials);
    } catch (error) {
      expect(error.message).toBe('Invalid credentials');
    }
  });

  it.skip('should load auth credentials', async () => {
    const { load } = AuthService();

    jest.spyOn(AuthService(), 'signIn').mockResolvedValueOnce(authCredentials);

    const { result } = renderHook(() => useSignIn());

    const crendentials: SignInProps = {
      username: 'user',
      password: '123',
    };

    result.current.signIn(crendentials);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const loadedCrendentials = await load();

    expect(loadedCrendentials).toBe({ username: crendentials.username });
  });
});
