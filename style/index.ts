import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({
  container: {
    height: '100vh',
    paddingTop: '100px',
    position: 'relative'
  },
  heroGrid: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
  },
  heroImageBox: {
    width: '400px',
    paddingBottom: '6rem',
  },
  navBar: {
    backgroundColor: 'transparent',
    height: '100px',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  navBarSocials: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialBar: {
    marginLeft: '2rem',
    width: '175px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialBarIcons: {
    filter: 'brightness(0) invert(1)',
    opacity: '.4',
    transition: 'opacity .4s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: '1',
      filter: 'unset'
    }
  },
  navBarLogo: {
    borderRadius: '50%',
    transition: 'transform .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)'
    }
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
    '&.active, &:hover': {
      opacity: '1'
    },
    '&.active::after': {
      content: '""',
      position: 'absolute',
      left: '0.7rem',
      right: '0.7rem',
      bottom: '0.7rem',
      display: 'block',
      height: '0.15rem',
      background: 'white',
      animation: '$navLinkActive .3s ease-in-out'
    }
  },
  'section0': {
    background: 'url("/crowdwallpaper.jpg")'
  },
  'section1': {
    background: '#001f29'
  },
  'section2': {
    background: 'url("/colorwallpaper.jpg")'
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
  button: {
    fontSize: '1.1rem',
    letterSpacing: '.2rem',
    padding: '1rem 1.5rem'
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