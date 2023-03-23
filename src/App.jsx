import './App.css';
import React from 'react';
import Header from './Pages/Header/Header';
import About from './Pages/AboutMe/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
