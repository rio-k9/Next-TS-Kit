import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC } from 'react'
import { Button, Container, Typography } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'
import ParticleEffectButton from 'react-particle-effect-button'

const About: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Container className={`${classes.container} ${classes.flexCenter}`}>
      <ParticleEffectButton
        color='#ffffff'
        direction="left"
        type="rectangle"
        hidden={!rootStore.uiStore.buttonsActive.about}
        duration={900}

      >
        <Button
          onClick={() => { rootStore?.uiStore?.moveTo((3)) }} variant="contained">
          SEE HIS MUSIC
       </Button>
      </ParticleEffectButton>
    </Container>

  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default About
