import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#1f1b16] relative selection:bg-[#15803d]/15 selection:text-[#1f1b16]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
