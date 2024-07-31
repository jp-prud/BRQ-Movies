import { z } from 'zod';

export const SignInFormSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(1, {
      message: 'Username is required'
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(3, {
      message: 'Password must be at least 3 characters',
    }),
});

export type SignInFormSchemaTypes = z.infer<typeof SignInFormSchema>;

export const DEFAULT_SIGNIN_FORM_VALUES: SignInFormSchemaTypes = { username: '', password: '' };
