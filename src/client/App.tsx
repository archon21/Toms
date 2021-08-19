import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { Nav, Footer } from "./components";

import { WindoW } from "./components/layout-components";
import Routes from "./Routes";
import { BrowserContext } from "./context";
import { siteConfig } from "../site-config";
import store from "./store";

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

nav {
  transition: all 300ms;
}
 
`;

interface Props {
  defaultState: any;
}

const App: React.FC<Props> = ({ defaultState }) => {
  const [providersValues, setProviderValues] = useState({
    browser: { browserWidth: 0 },
  });
  const [scrollY, setScrollY] = useState(0);

  global?.window?.addEventListener("scroll", () =>
    setScrollY(global?.window?.scrollY)
  );

  useEffect(() => {
    store.defaultScrollHandler({ scrollY, lastScrollY: store.window.scrollY });
  }, [scrollY]);

  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <GlobalStyle />
      <BrowserContext.Provider value={providersValues?.browser}>
        <Nav></Nav>

        <WindoW
          id="routes-wrapper"
          fullWidth
          init
          column
          // padding={
          //   siteConfig.client.nav.style.position === "fixed"
          //     ? siteConfig.client.nav.style.navHeight + " 0 0 0"
          //     : "0"
          // }
        
        >
          <Routes defaultState={defaultState}></Routes>
        </WindoW>
        <Footer></Footer>
      </BrowserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
