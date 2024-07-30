import { Image } from 'react-native';

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen
} from '@components';
import { AuthScreenProps } from '@routes';

import { images } from '../../../assets';
import { useSignInScreen } from './useSignInScreen';

export function SignInScreen({ navigation }: AuthScreenProps<'SignInScreen'>) {
  const { control, onSubmit, isSubmitting } = useSignInScreen();

  return (
    <Screen>
      <Box justifyContent="center" flex={1}>
        <Box>
          <Box alignSelf='center' mb="s64">
            <Image
              width={224}
              height={224}
              source={images.logo}
            />
          </Box>

          <Box gap="s48">
            <FormTextInput
              control={control}
              name="username"
              label="Username"
              placeholder="Insira seu usuário"
            />
            <FormPasswordInput
              control={control}
              name="password"
              label="Password"
              placeholder="Insira sua senha"
            />
          </Box>

          <Box mt="s48" gap="s16">
            <Button 
              text="Entrar" 
              onPress={onSubmit} 
              disabled={isSubmitting} 
              loading={isSubmitting} 
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
