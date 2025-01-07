
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Features />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
  
