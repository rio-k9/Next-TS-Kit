import { StoreProvider } from '../store';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Fragment, useEffect } from 'react'
import Head from 'next/head';
import Header from '../components/Header';
export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StoreProvider {...pageProps}>

        <Header />
        <Component {...pageProps} />
      </StoreProvider>
    </Fragment>
  )
}
