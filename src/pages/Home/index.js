import React from 'react';
import Header from '../../components/Header/index';
import About from '../../components/About/index';
import Navigation from '../../components/Navigation/index';
import Contact from '../../components/Contact/index';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Contact />
    </div>
  );
}
