import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import { IRootStore } from '../types'
import { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import useStyle from '../style'
import { WhiteTypography } from '../style/theme'

const About: FC = observer((props): JSX.Element => {

  const classes = useStyle(props)

  const rootStore: IRootStore = useStore()

  return (
    <Container className={`${classes.container} ${classes.flexCenter}`}>
      <WhiteTypography variant="h1">
        ABOUT <button onClick={(e) => { console.log(rootStore.uiStore.activeSlide) }}>click</button>
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

export default About
