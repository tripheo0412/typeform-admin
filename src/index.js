import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './components/Routes';
import { UserProvider } from './contexts/UserContext';
import { DataProvider } from './contexts/DataContext';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <UserProvider>
    <ThemeProvider>
      <DataProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  </UserProvider>,
  document.getElementById('root')
);
