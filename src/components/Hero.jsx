import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Lottie from 'lottie-react';
import coderAnimation from '../assets/Coder.json';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side: Typography & CTAs */}
        <motion.div 
          className="flex-1 flex flex-col items-center flex-start md:items-start text-center md:text-left gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p className="text-cyan-400 font-medium tracking-wide uppercase">
            Selamat Datang!
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold">
            Frontend
            <span className="block mt-2 text-gradient-neon">Developer</span>
          </h1>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Membangun pengalaman web antarmuka pengguna yang modern, responsif, dan interaktif dengan teknologi terkini.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="#portofolio" className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold neon-glow-primary hover:bg-cyan-400 transition-all duration-300">
              Lihat Project
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium transition-all duration-300 neon-glow-text">
              Hubungi Saya
            </a>
          </div>

          <div className="flex items-center gap-5 mt-6 border-t border-slate-800 pt-6 pr-6">
            <a href="https://github.com/sanupaii" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:neon-glow-text">
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Lottie Animation */}
        <motion.div 
          className="flex-1 flex justify-center items-center h-80 w-80 md:h-[450px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full h-full flex items-center justify-center relative drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            {(() => {
              const LottieComp = Lottie.default || Lottie;
              return <LottieComp animationData={coderAnimation} className="w-[120%] h-[120%] z-10 scale-110" loop={true} />;
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
