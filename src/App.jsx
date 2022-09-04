import './styles/global.css'
import Routes from './Routes/Routes'
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Components/Common/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eff0f3'
    },
    secondary: {
      main: '#ff8e3c'
    }
  },

  typography: {
    fontFamily: [
      'Mulish,sans-serif',
    ]

  }

},
);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container sx={{ heigth: '100%', paddingTop: '80px' }}>
          <Routes />
        </Container>
      </div>
    </ThemeProvider>

  )
}

export default App
