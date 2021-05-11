


import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment } from 'react'
import { AppBar, Container, List, Toolbar, Typography } from '@material-ui/core'
import Link from 'next/link'
import useStyle from '../style'
import { fullpageApi } from '@fullpage/react-fullpage'



const Header: FC = observer(() => {

  const classes = useStyle()
  const rootStore: IRootStore = useStore()

  const navLinks = [
    {
      title: 'Home',
      path: '/#home'
    },
    {
      title: 'About',
      path: '/#about'
    },
    {
      title: 'Releases',
      path: '/#releases'
    }
  ]

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <List component="nav" aria-labelledby="main navigation">
            {navLinks.map(({ title, path }, i) => (
              <span onClick={() => { rootStore.uiStore.fc.moveTo((i + 1)) }} key={path}>
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
