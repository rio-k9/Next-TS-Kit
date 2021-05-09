import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import Link from 'next/link'

const About = observer(function Page(props) {
  // use store from the store context
  const rootStore = useStore()

  return (
    <div>
      <h1>ui store: {rootStore.uiStore.input}</h1>
      <h1>track store: {rootStore.trackStore.input}</h1>

      <Link href="/" >
        Home
      </Link>

    </div>
  )
})

export default About
