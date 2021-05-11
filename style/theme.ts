import { createMuiTheme, Typography, withStyles } from "@material-ui/core";
import { green, grey, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
  },
  typography: {
    "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  }
});

export const WhiteTypography = withStyles({
  root: {
    color: '#fff'
  }
})(Typography)

export default theme