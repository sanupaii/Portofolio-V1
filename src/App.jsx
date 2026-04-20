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
        <main className="w-full max-w-6xl px-6 flex flex-col gap-4 md:gap-8 pb-16">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-8 border-t border-slate-800/50 mt-auto">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Sanupaii&trade;. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
