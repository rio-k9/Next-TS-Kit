import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import Link from 'next/link'
import { IRootStore } from '../interfaces'
import { FC, Fragment, useEffect, useRef } from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NextPage } from 'next'


const useStyles = makeStyles({
  container: {
    height: '100vh',
    border: 'solid red 1px'
  }
})

const Home: NextPage = observer(

  function Page() {

    const classes = useStyles()

    const rootStore: IRootStore = useStore()
    // use store from the store context

    return (
      // <div>
      //   <h1>ui store: {rootStore.uiStore.input}</h1>
      //   <h1>track store: {rootStore.trackStore.input}</h1>
      //   <input onChange={(e) => rootStore.uiStore.userInput(e.target.value)} />
      //   <input onChange={(e) => rootStore.trackStore.userInput(e.target.value)} />

      //   <Link href="/about" >
      //     About
      //   </Link>
      // </div>

      <Fragment>
        <Container className={classes.container} max-width="xl">
          <Typography variant="h1" color="primary">
            Hello there! 1
        </Typography>
        </Container>
        <Container className={classes.container} >
          <Typography variant="h1" color="primary">
            Hello there! 2
        </Typography>
        </Container>
        <Container className={classes.container} >
          <Typography variant="h1" color="primary">
            Hello there! 3
        </Typography>
        </Container>
      </Fragment>
    )
  })

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Home
