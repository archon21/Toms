import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Nav, Footer } from './components';
import history from './history';
import { WindoW } from './layout-components';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
html {
  font-size: calc(1em + 1vw);
}
`;

interface Props {
  defaultState: any;
}

const App: React.FC<Props> = ({ defaultState }) => {
  console.log(defaultState, 'Succker');
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <WindoW init column>
        <Nav></Nav>
        <Routes defaultState={defaultState}></Routes>
        <Footer></Footer>
      </WindoW>
    </ThemeProvider>
  );
};

export default App;
