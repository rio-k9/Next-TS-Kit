import Home from './index'

export default function SSG() {
  return <Home />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  return { props: { initialState: { lastUpdate: Date.now() } } }
}
