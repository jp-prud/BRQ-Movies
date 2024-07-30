import { AuthProvider, ToastProvider } from '@context';
import { MMKVStorage, initializeStorage } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from '@components';
import { Router } from '@routes';
import { theme } from '@theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: true,
      retry: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

initializeStorage(MMKVStorage);

function AppWithProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
              <ToastProvider>
                {children}
              </ToastProvider>
            </ThemeProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <AppWithProviders>
      <Router />
      <Toast />
    </AppWithProviders>
  );
}

export default App;
