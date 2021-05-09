import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import Link from 'next/link';
import { FC } from 'react';
import { IRootStore } from '../interfaces';

const About: FC<Object> = observer(function Page(props) {
  // use store from the store context
  const rootStore: IRootStore = useStore()

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
