import {
  AuthCredentials,
  SignInProps,
  StorageKeys
} from '@types';

import { isAdminSignIn } from '@utils';
import { storage } from '../StorageService/storage';

export const INVALID_CREDENTIALS_ERROR_MESSAGE = 'Invalid credentials'

export function AuthService() {
  const AUTH_KEY = StorageKeys.Auth;

  async function signIn(credentials: SignInProps): Promise<AuthCredentials> {
    if (isAdminSignIn(credentials)) {
      return {
        username: credentials.username
      };
    }

    return Promise.reject(INVALID_CREDENTIALS_ERROR_MESSAGE);
  }

  async function save(authCredentials: AuthCredentials): Promise<void> {
    await storage.setItem(AUTH_KEY, authCredentials);
  } 

  async function load(): Promise<AuthCredentials | null> {
    const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY);

    return authCredentials;
  }

  async function remove(): Promise<void> {
    await storage.removeItem(AUTH_KEY);
  }

  return {
    signIn,
    save,
    load,
    remove,
  };
}
