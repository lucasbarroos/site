import React from 'react';
import Header from '../../components/Header/index';
import About from '../../components/About/index';
import Navigation from '../../components/Navigation/index';
import Technologies from '../../components/Technologies/index';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Technologies />
    </div>
  );
}
