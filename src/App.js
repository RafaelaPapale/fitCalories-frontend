import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routes';

const mdTheme = createTheme();

function App() {
  return (
    <>
     <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </ThemeProvider>
    </>
  )
}

export default App;
