import React from 'react';

import { ActivityIndicator, Box, Button, Text } from '@components';

export interface EmptyListProps {
  loading: boolean;
  error: unknown;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
}
export function EmptyList({
  loading,
  error,
  refetch,
  emptyMessage = 'Não há filmes para exibir',
  errorMessage = 'Não foi possível carregar o feed 😢',
}: EmptyListProps) {
  let component = (
    <Text bold preset="paragraphMedium">
      {emptyMessage}
    </Text>
  );

  if (loading) {
    component = <ActivityIndicator />;
  }

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
