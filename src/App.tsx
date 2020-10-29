import React from 'react'
import Routes from './Routes'

function displayCount(userCount : number) : number {
  return userCount
}
function add(x : number)  {
  console.log(x)

}
function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App