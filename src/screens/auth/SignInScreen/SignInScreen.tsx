import { Image } from 'react-native';

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { AuthScreenProps } from '@routes';

import { images } from '../../../assets';

import { useSignInScreen } from './useSignInScreen';

export function SignInScreen({}: AuthScreenProps<'SignInScreen'>) {
  const { control, onSubmit, isSubmitting, isDirty, errors } = useSignInScreen();

  return (
    <Screen testID='sign-in'>
      <Box justifyContent="center" flex={1}>
        <Box>
          <Box alignSelf="center" mb="s64">
            <Image width={224} height={224} source={images.logo} testID="BRQ-Icon" />
          </Box>

          <Box gap="s48">
            <FormTextInput
              control={control}
              name="username"
              label="Username"
              placeholder="Insira seu usuário"
              testID='username-input'
            />
            <FormPasswordInput
              control={control}
              name="password"
              keyboardType="number-pad"
              label="Password"
              placeholder="Insira sua senha"
              testID='password-input'
            />

            {errors.root && (
              <Box alignSelf='center'>
                <Text color="error" textAlign="center" testID="erro-message" semiBold>{errors.root.message}</Text>
              </Box>
            )}
          </Box>

          <Box mt="s48" gap="s16">
            <Button
              text="Entrar"
              onPress={onSubmit}
              disabled={isSubmitting || !isDirty}
              loading={isSubmitting}
              testID='submit-button'
            />

            <Button
              text="Esquecia a senha"
              preset="ghost"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
