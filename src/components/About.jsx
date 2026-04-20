import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-[80vh] flex items-center relative">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: About Text & Buttons */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400 font-medium tracking-wide uppercase mb-3">
            Tentang Saya
          </p>
          <h2 className="text-4xl font-bold mb-6">
            SANU AHADI <span className="text-gradient-neon">WARUWU</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Saya adalah seorang pengembang antarmuka pengguna yang sangat berfokus pada detail estetika, performa, dan animasi mikro. Saya memiliki ketertarikan kuat dalam membangun *progressive web apps* yang responsif dan terasa seperti sebuah aplikasi modern sesungguhnya.
          </p>
          
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-purple-600/20 text-purple-400 border border-purple-500 hover:bg-purple-600 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              Download CV
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-md bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              View Project
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, rotateY: -30 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] overflow-hidden rounded-2xl border-2 border-slate-800/50 bg-slate-900 group-hover:border-cyan-500/50 transition-colors duration-500">
              <img 
                src="/profil.jpeg" 
                alt="Sanu Ahadi Waruwu Profile" 
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
