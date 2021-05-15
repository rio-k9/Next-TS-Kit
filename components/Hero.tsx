import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, useEffect, Fragment } from 'react'
import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'
import ParticleEffectButton from 'react-particle-effect-button'
import Image from 'next/image'

const Hero: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()
  useEffect(() => {
    rootStore.uiStore.setLogoState(true)
  })
  return (
    <Fragment>
      <Box className={`${classes.background} ${classes.background0}`}>
      </Box>
      <Container className={`${classes.container}`}>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.heroGrid}
        >

          <Box className={classes.heroImageBox}>
            <Image src="/LogoBG.png" layout="responsive" width={400} height={252} />
          </Box>

          <Box>
            <ParticleEffectButton
              color='#ffffff'
              direction="left"
              type="rectangle"
              hidden={!rootStore.uiStore.buttonsActive.hero}
              duration={900}
            >
              <Button
                className={classes.buttonHero}
                onClick={() => { rootStore?.uiStore?.moveTo((2)) }} variant="contained">
                WHO IS RAENEN?
              </Button>
            </ParticleEffectButton>
          </Box>

        </Grid>
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

export default Hero
