import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC, Fragment } from 'react'
import { Button, Container, Typography, Box } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'
import ParticleEffectButton from 'react-particle-effect-button'

const Releases: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Fragment>
      <Box className={`${classes.background} ${classes.background2}`}>
      </Box>
      <Container className={`${classes.container}`}>
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

export default Releases
