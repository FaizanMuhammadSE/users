import { Typography, ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1'>Coming Soon</Typography>
    </ThemeProvider>
  );
}

export default App;
