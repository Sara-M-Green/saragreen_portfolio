import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home/home'
import About from './About/about'
import NavPage from './NavPage/navpage'

function App() {
  return (
    <div className="App">
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
        path='/nav'
        component={NavPage}
      />
    </div>
  );
}

export default App;
