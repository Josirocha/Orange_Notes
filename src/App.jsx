import './styles/global.css'
import Routes from './Routes/Routes'
import { createTheme, ThemeProvider } from '@mui/material';
import Header from './Components/Common/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eff0f3'
    },
    secondary: {
      main: '#ff8e3c'
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </ThemeProvider>

  )
}

export default App
