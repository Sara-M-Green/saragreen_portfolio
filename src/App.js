import React from 'react'
import Home from './Home/home'
import About from './About/about'
import Projects from './Projects/projects'
import Contact from './Contact/contact'
import Footer from './Footer/footer'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
