import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes/default';
import { useState } from 'react';
import { Home } from './pages';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  function changeTheme(themeColor: string){
    if(themeColor === 'dark'){
      setTheme(lightTheme)
    }else{
      setTheme(darkTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Home changeTheme={changeTheme}/>
    </ThemeProvider>
  )
}

export default App
