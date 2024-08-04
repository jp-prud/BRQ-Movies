import { useToastService } from '@context';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInProps } from '@types';
import { useSignIn } from '@useCases';
import { useForm } from 'react-hook-form';

import {
  DEFAULT_SIGNIN_FORM_VALUES,
  SignInFormSchema,
  SignInFormSchemaTypes,
} from './signInScreenFormSchema';

export function useSignInScreen() {
  const { showToast } = useToastService();

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<SignInFormSchemaTypes>({
    defaultValues: DEFAULT_SIGNIN_FORM_VALUES,
    resolver: zodResolver(SignInFormSchema),
    mode: 'onChange',
  });

  const { signIn } = useSignIn({
    errorMessage: 'An error occurred while login in',
    onError: error => { 
      setError('root', { message: error });

      showToast({ type: 'info', message: String(error) });
    },
  });

  const onSubmit = handleSubmit((data: SignInProps) => {
    signIn(data);
  });

  return {
    control,
    onSubmit,
    isSubmitting,
    isDirty,
    errors,
  };
}
