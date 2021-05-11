import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  container: {
    height: '100vh',
    paddingTop: '64px',
  },
  navBar: {
    backgroundColor: 'transparent',
    height: '100px',
    boxShadow: 'none'
  },
  navBarLinkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
    padding: '0rem 0.8rem',
    cursor: 'pointer',
    fontSize: '1.1rem',
    letterSpacing: '.2rem',
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    opacity: '.7',
    transition: 'opacity .3s ease-in-out',
    '&.active': {
      opacity: '1'
    },
    '&.active::after': {
      content: '""',
      position: 'absolute',
      left: '0.7rem',
      right: '0.8rem',
      bottom: '0.4rem',
      display: 'block',
      height: '0.15rem',
      background: 'white',
      animation: '$navLinkActive .3s ease-in-out'
    }
  },
  'section0': {
    background: '#1c1c1c'
  },
  'section1': {
    background: '#001f29'
  },
  'section2': {
    background: '#00290a'
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexVertCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  '@keyframes navLinkActive': {
    'from': {
      left: '3rem',
      right: '3.2rem',
      opacity: '.7'
    },
    'to': {
      left: '0.7rem',
      right: '0.8rem',
      opacity: '1'
    }
  }
}))

export default useStyle