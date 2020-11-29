import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Nav, Footer } from './components';
import history from './history';
import { WindoW } from './layout-components';
import Routes from './Routes';

interface Props {
  defaultState: any;
}

const App: React.FC<Props> = ({ defaultState }) => {
  console.log(defaultState, 'Succker');
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <WindoW init column>
        <Nav></Nav>
        <Routes defaultState={defaultState}></Routes>
        <Footer></Footer>
      </WindoW>
    </ThemeProvider>
  );
};

export default App;
