import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Layout } from './containers/Layout/Layout';
import { Router } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
