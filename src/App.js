// src/App.js
import React from 'react';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Contact />
      <Gallery />
    </Layout>
  );
}

export default App;
