
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Snowfall from '../components/Snowfall';
import HandcraftedBadge from '../components/HandcraftedBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Snowfall Effect - Creates winter ambiance */}
      <Snowfall />

      {/* Handcrafted Badge - Shows human craftsmanship */}
      <HandcraftedBadge />

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
