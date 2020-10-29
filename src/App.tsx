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
        <Nav></Nav>
        <WindoW column>
          <Routes></Routes>
        </WindoW>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
