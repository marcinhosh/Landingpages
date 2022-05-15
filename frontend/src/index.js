import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Home from './Templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

