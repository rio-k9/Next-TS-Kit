import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import About from '../components/About'
import Releases from '../components/Releases'
import Hero from '../components/Hero'
import { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import { IRootStore } from '../types';
import { useStore } from '../store';

const Home: NextPage = observer((): JSX.Element => {
  const rootStore: IRootStore = useStore()

  return (
    <ReactFullpage
      onLeave={(origin, destination, direction) => {
        rootStore.uiStore.setActiveSlide(destination.index)
      }}
      render={({ fullpageApi }) => {
        rootStore.uiStore.setFc(fullpageApi)
        return (
          <Fragment>
            <ReactFullpage.Wrapper>
              {[<Hero />, <About />, <Releases />].map((c, i) => (
                <div key={`section-${i}`} className={`section section--${i}`}>
                  {c}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          </Fragment >
        )
      }


      }
    />
  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Home
