import React from 'react';
import Navbar from './Navbar';
import HeroSection from "./HeroSection";
import Features from './Features';
import ExtensionsSection from './ExtensionsSection';
import Faq from './Faq';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <ExtensionsSection />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
