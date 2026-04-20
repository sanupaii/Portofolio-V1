import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Portofolio', 'Contact'];

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
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 hover:neon-glow-text transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            >
              {link}
            </a>
          ))}
        </div>
        
        {/* Mobile menu could be added here */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
