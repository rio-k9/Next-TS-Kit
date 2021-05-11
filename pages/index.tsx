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
import useStyle from '../style';

const Home: NextPage = observer((props): JSX.Element => {
  const rootStore: IRootStore = useStore()
  const classes = useStyle(props)

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
              <div className={`section ${classes.section0}`}>
                <Hero />
              </div>
              <div className={`section ${classes.section1}`}>
                <About />
              </div>
              <div className={`section ${classes.section2}`}>
                <Releases />
              </div>
            </ReactFullpage.Wrapper>
          </Fragment >
        )
      }}
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
