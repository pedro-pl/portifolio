import { ThemeProvider } from 'styled-components';
import { Home } from './pages';
import { Context, ContextProvider } from './contexts/Context';
import { useContext } from 'react';
import { GlobalStyle } from './styles/global';

function AppContent() {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

function App() {
  return (
    <ContextProvider>
      <GlobalStyle/>
      <AppContent/>
    </ContextProvider>
  )
}

export default App
