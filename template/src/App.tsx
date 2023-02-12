import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from './services/theme/CustomTheme';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <body>

      </body>
    </ThemeProvider>
  );
}

export default App;