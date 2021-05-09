import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home/home'
import About from './About/about'
import Navbar from './Navbar/navbar'
import Projects from './Projects/projects'
import Contact from './Contact/contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
