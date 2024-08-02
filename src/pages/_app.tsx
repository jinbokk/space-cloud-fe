import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { GlobalStyles } from 'twin.macro';

import { useAuthStore } from '@/store/authStore';

import '@/styles/base/font.css';
import '@/styles/base/reset.css';
import '@/styles/globals.css';

import PrivateRoute from './PrivateRoute';
import Provider from './Provider';

interface AppProps {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  const [cookies] = useCookies(['accessToken']);
  const { setAccessToken, clear } = useAuthStore();

  const authenticationRequired = Component.authenticationRequired ?? false;

  useEffect(() => {
    if (cookies.accessToken) {
      setAccessToken(cookies.accessToken);
    } else {
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider pageProps={pageProps}>
      <GlobalStyles />
      {authenticationRequired && (
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      )}
      {!authenticationRequired && <Component {...pageProps} />}
    </Provider>
  );
};
export default App;
