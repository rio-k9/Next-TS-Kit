import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment } from 'react'
import { Button, Container, Typography, Box, Grid } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'
import ParticleEffectButton from 'react-particle-effect-button'
import Image from 'next/image'

const About: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Fragment>
      <Box className={`${classes.background} ${classes.background1}`}>
      </Box>
      <Box className={`${classes.contentBox}`} py={20}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs>
              <Box mx="auto" className={classes.portrait}>
                <Image className={classes.portraitImg} src="/portrait.jpg" layout="responsive" width={400} height={400} />
              </Box>
            </Grid>
            <Grid item xs={7}>

              <ParticleEffectButton
                color='#ffffff'
                direction="right"
                type="rectangle"
                hidden={!rootStore.uiStore.buttonsActive.about}
                duration={900}
              >              <WhiteTypography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique dapibus nunc eget lobortis. Curabitur sit amet tellus risus.
                  Nam finibus vel justo quis consectetur. Vestibulum blandit ultricies posuere.
                  Etiam eget ultricies ante. Maecenas dui neque, aliquet ut lacus et, tempor pulvinar ipsum.
                <br />
                  <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique dapibus nunc eget lobortis. Curabitur sit amet tellus risus.
                Nam finibus vel justo quis consectetur. Vestibulum blandit ultricies posuere.
                Etiam eget ultricies ante. Maecenas dui neque, aliquet ut lacus et, tempor pulvinar ipsum.
              </WhiteTypography>
                <Box className={classes.buttonBox} pt={5}>
                  <Button
                    className={classes.buttonAbout}
                    onClick={() => { rootStore?.uiStore?.moveTo((3)) }} variant="contained">
                    LATEST MUSIC
                </Button>
                </Box>
              </ParticleEffectButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment >


  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default About
