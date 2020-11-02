import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Nav, Footer } from './components';
import { WindoW } from './layout-components';
import Routes from './Routes';

function displayCount(userCount: number): number {
  return userCount;
}
function add(x: number) {
  console.log(x);
}
function App() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <div className="App">
        <WindoW init column>
          <Nav></Nav>
          <Routes></Routes>
          <Footer></Footer>
        </WindoW>
      </div>
    </ThemeProvider>
  );
}

export default App;
