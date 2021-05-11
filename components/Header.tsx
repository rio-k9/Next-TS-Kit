


import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment, useEffect } from 'react'
import { AppBar, Container, List, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'
import useStyle from '../style'
import { fullpageApi } from '@fullpage/react-fullpage'



const Header: FC = observer(() => {

  const classes = useStyle()
  const rootStore: IRootStore = useStore()

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <List component="nav" aria-labelledby="main navigation">
            {["Home", "About", "Releases"].map((title, i) => (
              <span className={`${(rootStore.uiStore.activeSlide) === i ? 'active' : ''}`} onClick={() => { rootStore?.uiStore?.fc?.moveTo((i + 1)) }} key={title}>
                {title}
              </span>
            ))}

          </List>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Header
