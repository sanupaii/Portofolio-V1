import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navLinks = ['Home', 'About', 'Portofolio', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Offset by ~100px so it highlights before we hit the exact top
      const scrollPosition = window.scrollY + 100;
      
      const sections = navLinks.map(link => link.toLowerCase());
      let currentSection = sections[0];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gradient-neon tracking-wider">
          Sanupaii
        </a>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkId = link.toLowerCase();
            const isActive = activeSection === linkId;
            return (
              <a 
                key={link} 
                href={`#${linkId}`}
                className={`relative py-2 text-sm tracking-widest uppercase font-medium transition-all duration-300 ${isActive ? 'text-cyan-400 neon-glow-text' : 'text-slate-300 hover:text-cyan-300'}`}
              >
                {link}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
        
        {/* Mobile menu could be added here */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
