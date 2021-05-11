import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import Link from 'next/link'
import { IRootStore } from '../types'
import { makeStyles } from '@material-ui/core'
import { NextPage } from 'next'

const useStyles = makeStyles({
  container: {
    height: '100vh',
    paddingTop: '64px',
    border: 'solid red 1px'
  }
})

const OutNow: NextPage = observer(

  function Page() {

    const classes = useStyles()

    const rootStore: IRootStore = useStore()

    return (
      <div>
        <h1>ui store: {rootStore.uiStore.input}</h1>
        <h1>track store: {rootStore.trackStore.input}</h1>
        <input onChange={(e) => rootStore.uiStore.userInput(e.target.value)} />
        <input onChange={(e) => rootStore.trackStore.userInput(e.target.value)} />

        <Link href="/about" >
          About
        </Link>
      </div>

    )
  })

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default OutNow
