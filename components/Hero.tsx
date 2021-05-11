import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyle from '../style'

const Hero: FC = observer((): JSX.Element => {

  const classes = useStyle()

  const rootStore: IRootStore = useStore()

  return (
    <Container id="about" className={classes.container}>
      <Typography variant="h1" color="primary">
        Hello there! 1
      </Typography>
    </Container>

  )
})

// export function getServerSideProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

// export function getStaticProps() {
//   return { props: { initialData: { uiStore: { input: 'server-side input' } } } }
// }

export default Hero
