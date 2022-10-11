import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from 'components/pages/Home';
import LoginPage from 'components/pages/Login';
import { ThemeProps } from 'components/themes';
import LightTheme from 'components/themes/Light';
import DarkTheme from 'components/themes/Dark';

interface AppThemeProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }: AppThemeProps) => theme.whiteColor};
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }: AppThemeProps) => theme.blackColor};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
      font-family: 'Kaushan Script', cursive;
    }
  }
`;


const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
    }}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
