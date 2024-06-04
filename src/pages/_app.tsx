import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import '@/styles/base/font.css';
import '@/styles/base/reset.css';
import '@/styles/globals.css';

import GlobalStyles from '../styles/GlobalStyles';

interface AppProps {
  Component: any;
  pageProps: any;
}

const cache = createCache({ key: 'css', prepend: true });

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            // suspense: true,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
          },
          mutations: {
            retry: 0,
            onError: (error) => console.log(error),
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <CacheProvider value={cache}>
          <GlobalStyles />
          <Component {...pageProps} />
        </CacheProvider>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
