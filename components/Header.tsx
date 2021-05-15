


import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment, useEffect } from 'react'
import { AppBar, Avatar, Container, IconButton, List, Toolbar, Typography } from '@material-ui/core'
import useStyle from '../style'
import { Home } from "@material-ui/icons"
import Image from 'next/image'

const Header: FC = observer((props) => {

  const classes = useStyle(props)
  const rootStore: IRootStore = useStore()
  const socialLinks = [
    {
      href: 'https://open.spotify.com/artist/3APXbsWFdDyU657hwWW4jT?si=bea8227cd3f845a1',
      imgPath: '/social/012-spotify.svg',
      alt: 'Spotify'
    },
    {
      href: 'https://soundcloud.com/raenenmusic',
      imgPath: '/social/013-soundcloud.svg',
      alt: 'Soundcloud'
    },
    {
      href: 'https://youtube.com/channel/UC8dLRCJszGAzvI5rL6FRSeQ',
      imgPath: '/social/001-youtube.svg',
      alt: 'YouTube'
    },
    {
      href: 'https://instagram.com/raenenmusic',
      imgPath: '/social/029-instagram.svg',
      alt: 'Instagram'
    },
    {
      href: 'https://twitter.com/raenenmusic',
      imgPath: '/social/008-twitter.svg',
      alt: 'Twitter'
    },
  ]

  return (
    <Fragment>
      <AppBar position="fixed" className={`${classes.navBar}`}>
        <Toolbar>
          <Container className={classes.flexBetween}>
            <div className={classes.navBarSocials}>
              <IconButton edge="start" color="inherit" aria-label="home" onClick={() => { rootStore?.uiStore?.fc?.moveTo((1)) }} >
                <Image src="/logo_sm.png" alt="Raenen Logo" width={50} className={classes.navBarLogo}
                  height={50} />
              </IconButton>
              <List component="nav" className={`${classes.socialBar}`} aria-labelledby="main navigation">

                {socialLinks.map(({ href, imgPath, alt }) => {
                  const size = alt === 'Soundcloud' ? 23 : 20
                  return (
                    <a href={href} key={alt} target="_blank" className={classes.socialBarIcons}>
                      <Image src={imgPath} alt={alt} width={size}
                        height={size} />
                    </a>
                  )
                })}

              </List>
            </div>
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
