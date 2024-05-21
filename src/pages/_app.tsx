import GlobalStyles from '../styles/GlobalStyles'

interface AppProps {
  Component: any;
  pageProps: any;
}
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App