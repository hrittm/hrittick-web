import React from 'react';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

const App: React.FC = () => {
  return (
    // Changed overflow-hidden to overflow-x-hidden to allow vertical scrolling
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-sans antialiased">
      <StarBackground />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero 
          title="hrittick" 
          subtitle="student & tech-savvy" 
        />
        <About />
      </div>

      <Footer />
    </main>
  );
};

export default App;