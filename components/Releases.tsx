import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyle from '../style'

const Releases: FC = observer((): JSX.Element => {

  const classes = useStyle()

  const rootStore: IRootStore = useStore()

  return (
    <Container id="releases" className={classes.container} max-width="xl">
      <Typography variant="h1" color="primary">
        Hello there! 3
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

export default Releases
