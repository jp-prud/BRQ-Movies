import { useAuthContext } from '@context';
import { AuthService } from '@services';
import { useMutation } from '@tanstack/react-query';
import { AuthCredentials, MutationKeys, MutationOptions, SignInProps } from '@types';

export function useSignIn(options?: MutationOptions<AuthCredentials, SignInProps>) {
  const { signIn } = AuthService();

  const { saveCredentials } = useAuthContext();

  const { isPending, isSuccess, isError, mutate } = useMutation<AuthCredentials, unknown, SignInProps>({
    mutationKey: [MutationKeys.sigIn],
    mutationFn: credentials => signIn(credentials),
    onSuccess: async data => {
      await saveCredentials(data);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: error => {
      console.log(error)

      if (options?.onError) {
        options.onError(options.errorMessage);
      }
    },
  });

  return {
    isPending,
    isSuccess,
    isError,
    signIn: mutate,
  };
}
