import './App.css';
import React from 'react';
import Header from './Pages/Header/Header';
import About from './Pages/AboutMe/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Navbar from './Layout/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects id="projects" />
    </>
  );
}

export default App;
