import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useToastService } from '@context';
import { SignInProps } from '@types';

import { useSignIn } from '@useCases';
import {
  DEFAULT_SIGNIN_FORM_VALUES,
  SignInFormSchema,
  SignInFormSchemaTypes,
} from './signInScreenFormSchema';

export function useSignInScreen() {
  const { showToast } = useToastService()

  const { control, handleSubmit, formState: { isSubmitting } } = useForm<SignInFormSchemaTypes>({
    defaultValues: DEFAULT_SIGNIN_FORM_VALUES,
    resolver: zodResolver(SignInFormSchema),
    mode: 'onChange'
  });

  const { signIn } = useSignIn({
    errorMessage: 'An error occurred while login in',
    onError: (error) => {
      const { message } = error
      showToast({ type: 'info', message });
    }
  })

  const onSubmit = handleSubmit(async (data: SignInProps) => {
    await signIn(data)
  });

  return {
    control,
    onSubmit,
    isSubmitting
  };
}
