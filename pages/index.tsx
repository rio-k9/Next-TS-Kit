import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import Link from 'next/link'

const Home = observer(function Page(props) {
  // use store from the store context
  const rootStore = useStore()

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

export default Home
