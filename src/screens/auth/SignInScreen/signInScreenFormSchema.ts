import { env } from '@types';
import { z } from 'zod';

export const SignInFormSchema = z.object({
  username: z
    .string({
      required_error: 'User is required',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(3, {
      message: 'Password must be at least 10 characters',
    }),
});

export type SignInFormSchemaTypes = z.infer<typeof SignInFormSchema>;

export const DEFAULT_SIGNIN_FORM_VALUES: SignInFormSchemaTypes =
  env.ENV === 'development'
    ? { username: 'user', password: '123', }
    : { username: '', password: '' };
