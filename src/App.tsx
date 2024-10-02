import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Router } from './routes';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './cache';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
