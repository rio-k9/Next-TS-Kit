import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'

const Releases: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Container className={`${classes.container} ${classes.flexCenter}`}>
      <WhiteTypography variant="h1" color="primary">
        RELEASES <button onClick={(e) => { console.log(rootStore.uiStore.activeSlide) }}>click</button>
      </WhiteTypography>
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
