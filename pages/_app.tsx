import { StoreProvider } from '../store'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
