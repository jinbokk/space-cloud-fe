import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/base/font.css';
import '@/styles/base/reset.css';
import '@/styles/globals.css';

import GlobalStyles from '../styles/GlobalStyles';

interface AppProps {
  Component: any;
  pageProps: any;
}
const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};
export default App;
