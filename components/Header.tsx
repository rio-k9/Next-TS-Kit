


import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment, useEffect } from 'react'
import { AppBar, Container, IconButton, List, Toolbar, Typography } from '@material-ui/core'
import useStyle from '../style'
import { Home } from "@material-ui/icons"


const Header: FC = observer((props) => {

  const classes = useStyle(props)
  const rootStore: IRootStore = useStore()

  return (
    <Fragment>
      <AppBar position="fixed" className={`${classes.navBar} ${classes.flexVertCenter}`}>
        <Toolbar>
          <Container className={classes.flexBetween}>
            <IconButton edge="start" color="inherit" aria-label="home" onClick={() => { rootStore?.uiStore?.fc?.moveTo((1)) }} >
              <Home fontSize="large" />
            </IconButton>
            <List component="nav" className={classes.flexBetween} aria-labelledby="main navigation">
              {["Home", "About", "Releases"].map((title, i) => (
                <div className={`${(rootStore.uiStore.activeSlide) === i ? 'active' : ''} ${classes.flexCenter} ${classes.navBarLinkText}`}
                  onClick={() => { rootStore?.uiStore?.fc?.moveTo((i + 1)) }} key={title}>
                  <span>{title}</span>
                </div>
              ))}

            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </Fragment >
  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Header
