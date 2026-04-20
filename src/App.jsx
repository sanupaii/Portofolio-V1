import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30">
      {/* Background Grid with Spotlight Mask */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center">
        <div className="absolute inset-0 bg-grid-pattern spotlight-mask"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <main className="w-full max-w-6xl px-6 flex flex-col gap-32 pb-32">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
