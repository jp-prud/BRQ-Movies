import { AuthService, INVALID_CREDENTIALS_ERROR_MESSAGE } from '@services';
import {
  authCredentials,
  renderHook,
  signInCredentials,
  waitFor,
} from '@tests';

import { useSignIn } from '../useSignIn/useSignIn';

const mockedSignIn = jest.fn();
const mockedSaveCredentials = jest.fn();
const mockedOnSuccess = jest.fn();
const mockedOnError = jest.fn();

jest.mock('@context', () => {
  const originalModule = jest.requireActual('@context');

  return {
    ...originalModule,
    useAuthContext: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');

  return {
    ...originalModule,
    AuthService: () => ({
      signIn: mockedSignIn,
    }),
  };
});

describe('useSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    jest.spyOn(AuthService(), 'signIn').mockResolvedValueOnce(authCredentials);

    const { result } = renderHook(() =>
      useSignIn({
        onSuccess: mockedOnSuccess,
      }),
    );

    result.current.signIn(signInCredentials);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(authCredentials);
    expect(mockedSaveCredentials).toHaveBeenCalledTimes(1);
    expect(mockedOnSuccess).toHaveBeenCalledWith(authCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
  });

  it.skip('should calls onError if the sign-in fails', async () => {
    jest
      .spyOn(AuthService(), 'signIn')
      .mockRejectedValue(new Error('Invalid Credentials'));

    try {
      const { result } = renderHook(() =>
        useSignIn({
          errorMessage: INVALID_CREDENTIALS_ERROR_MESSAGE,
          onError: mockedOnError,
        }),
      );

      result.current.signIn(signInCredentials);
    } catch (error) {
      expect(mockedOnError).toHaveBeenCalledWith(
        INVALID_CREDENTIALS_ERROR_MESSAGE,
      );
      expect(mockedOnError).toHaveBeenCalledTimes(1);
    }
  });
});
