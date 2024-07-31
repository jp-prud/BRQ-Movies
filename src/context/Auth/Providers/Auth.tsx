import { createContext, useCallback, useEffect, useState } from 'react';

import { AuthServiceProps } from '@context';
import { registerInterceptor } from '@services';
import { AuthCredentials } from '@types';

import { authCredentialsStorage } from '../authCredentialsStorage';

export const AuthContext = createContext({} as AuthServiceProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCredentials = useCallback(async () => {
    try {
      const credentials = await authCredentialsStorage.load();

      if (credentials) {
        setAuthCredentials(credentials);
      }
    } catch (error) {
      // TODO: Handle error
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function saveCredentials(credentials: AuthCredentials) {
    authCredentialsStorage.save(credentials);
    setAuthCredentials(credentials);
    setIsLoading(false);
  }

  async function removeCredentials() {
    authCredentialsStorage.remove();
    setAuthCredentials(null);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCredentials();
  }, [loadCredentials]);

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    return interceptor;
  }, [authCredentials]);

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
