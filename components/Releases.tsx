import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment } from 'react'
import { Button, Container, Typography, Box, Grid } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'
import ParticleEffectButton from 'react-particle-effect-button'
import Image from 'next/image'

const Releases: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Fragment>
      <Box className={`${classes.background} ${classes.background2}`}>
      </Box>
      <Container className={`${classes.container} ${classes.flexCenter}`}>
        <Box className={classes.releasesHeader} >
          <WhiteTypography variant="h2">
            #LetsDance
            </WhiteTypography>
        </Box>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={4}>
            <Grid item xs={3}>
              <a href="https://raenen.bandcamp.com/track/u-make-me" target="_blank">
                <Box className={classes.trackTile}
                  onMouseEnter={(e) => { rootStore.uiStore.trackHover(0) }}
                  onMouseLeave={(e) => { rootStore.uiStore.trackHover(99) }}
                >
                  <Image src="/tracks/art_umakeme.jpg" className={`${classes.trackImage} ${rootStore.uiStore.activeTrack === 0 ? 'active' : ''}`} layout="responsive" width={200} height={200} />
                  <Box py={2} className={`${classes.trackDescription} ${rootStore.uiStore.activeTrack === 0 ? 'active' : ''}`}>
                    <WhiteTypography variant="h5">
                      U MAKE ME
                  </WhiteTypography>
                    <WhiteTypography variant="subtitle2">
                      (May 2021)
                  </WhiteTypography>
                  </Box>
                </Box>
              </a>
            </Grid>
            <Grid item xs={3}>
              <a href="https://raenen.bandcamp.com/track/echoes" target="_blank">
                <Box className={classes.trackTile}
                  onMouseEnter={(e) => { rootStore.uiStore.trackHover(1) }}
                  onMouseLeave={(e) => { rootStore.uiStore.trackHover(99) }}
                >
                  <Image src="/tracks/art_echoes.jpeg" className={`${classes.trackImage} ${rootStore.uiStore.activeTrack === 1 ? 'active' : ''}`} layout="responsive" width={200} height={200} />
                  <Box py={2} className={`${classes.trackDescription} ${rootStore.uiStore.activeTrack === 1 ? 'active' : ''}`}>
                    <WhiteTypography variant="h5">
                      ECHOES
                  </WhiteTypography>
                    <WhiteTypography variant="subtitle2">
                      (November 2020)
                  </WhiteTypography>
                  </Box>
                </Box>

              </a>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.trackTile}></Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.trackTile}></Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
              <Box className={classes.trackTile}></Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.trackTile}></Box>
            </Grid>
            <Grid item xs={3}>
              <Box className={classes.trackTile}></Box>
            </Grid>
          </Grid>
        </Grid>
      </Container >
    </Fragment >

  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Releases
