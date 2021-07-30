import './App.css';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import {makeStyles, CssBaseline, createTheme,ThemeProvider} from '@material-ui/core';
import Employees from '../Pages/Employees/Employees'

const theme = createTheme({
  palette:{
    primary: {
      main: '#333996',
      light: '#3c44b12b'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform: 'translateZ(0)'
      }
    }
  }
})

const userStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = userStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}> 
        <Header/>
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
