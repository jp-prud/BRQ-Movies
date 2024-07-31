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

  const { control, handleSubmit, formState: { isSubmitting, isDirty } } = useForm<SignInFormSchemaTypes>({
    defaultValues: DEFAULT_SIGNIN_FORM_VALUES,
    resolver: zodResolver(SignInFormSchema),
    mode: 'onChange'
  });

  const { signIn } = useSignIn({
    errorMessage: 'An error occurred while login in',
    onError: (error) => {
      showToast({ type: 'info', message: error});
    }
  })

  const onSubmit = handleSubmit((data: SignInProps) => {
    signIn(data)
  });

  return {
    control,
    onSubmit,
    isSubmitting,
    isDirty
  };
}
