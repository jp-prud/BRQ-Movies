import React from 'react';

import { ActivityIndicator, Box, Button, Text } from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  errorMessage?: string;
}
export function EmptyList({
  error,
  refetch,
  errorMessage = 'Não foi possível carregar o feed 😢',
}: EmptyListProps) {
  let component = <ActivityIndicator />;

  if (error) {
    component = (
      <>
        <Text bold preset="paragraphMedium" mb="s16">
          {errorMessage}
        </Text>
        <Button text="Recarregar" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
