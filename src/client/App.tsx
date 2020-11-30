import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Nav, Footer } from './components';
import history from './history';
import { WindoW } from './components/layout-components';
import Routes from './Routes';
import { BrowserContext } from './context';

const GlobalStyle = createGlobalStyle`
html {
  font-size: calc(1em + 1vw);
}

li, ul {
  margin-block-end: 0;
  margin-block-start: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-inline-start: 0;
  background-origin: none;
}
 
`;

interface Props {
  defaultState: any;
}

const App: React.FC<Props> = ({ defaultState }) => {
  const [providersValues, setProviderValues] = useState({
    browser: { browserWidth: 0 },
  });


  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <BrowserContext.Provider value={providersValues?.browser}>
        <WindoW fullWidth init column>
          <Nav></Nav>
          <Routes defaultState={defaultState}></Routes>
          <Footer></Footer>
        </WindoW>
      </BrowserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
