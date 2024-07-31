import { useAuthContext } from '@context';

export function useSignOut() {
  const { removeCredentials } = useAuthContext();

  function signOut() {
    removeCredentials();
  }

  return {
    signOut,
  };
}
