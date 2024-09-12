import React from 'react';
import Navbar from './Nav';
import Hero from './Hero';
import MockupSection from './MockupSection';
import Footer from './Footer';
import Conten from './Conten';
import Halaman from './Halaman';
import Card from './Card';
const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MockupSection/>
      <Conten/>
      <Halaman/>
      <Card/>
      <Footer/>
    </div>
  );
};

export default Home;
