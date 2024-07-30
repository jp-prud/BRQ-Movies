import { useEffect } from 'react';

import { useAuthContext } from '@context';
import { useSettings } from '@useCases';

import { Stacks } from './navigationTypes';

export function useRouter(): Stacks {
  const { authCredentials, isLoading } = useAuthContext();

  const { hideSplashScreen } = useSettings();

  useEffect(() => {
    if (!isLoading) {
      hideSplashScreen();
    }
  }, [isLoading]);

  if (isLoading) {
    return 'Loading';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}
