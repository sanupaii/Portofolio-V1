import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Lottie from 'lottie-react';
import coderAnimation from '../assets/Coder.json';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] pt-24 pb-8 flex items-center justify-center">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side: Typography & CTAs */}
        <ScrollReveal
          className="flex-1 flex flex-col items-center flex-start md:items-start text-center md:text-left gap-3 md:gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewportAmount={0.1}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* <motion.p className="text-cyan-400 font-medium tracking-wide uppercase">
            Selamat Datang!
          </motion.p> */}
          <h1 className="text-5xl md:text-7xl font-bold">
            Frontend
            <span className="block mt-1 text-gradient-neon">Developer</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold h-8 md:h-10">
            <Typewriter
              words={['Information systems student', 'AI & technology enthusiast']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="text-slate-400 max-w-md leading-relaxed text-sm md:text-base">
            Membangun aplikasi yang responsif, interaktif, dan cerdas untuk memberikan solusi teknologi yang nyata.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a href="#portofolio" className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold neon-glow-primary hover:bg-cyan-400 transition-all duration-300">
              Lihat Project
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium transition-all duration-300 neon-glow-text">
              Hubungi Saya
            </a>
          </div>

          <div className="flex items-center gap-5 mt-2 border-t border-slate-800 pt-4 pr-6 w-full md:w-auto justify-center md:justify-start">
            <a href="https://github.com/sanupaii" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sanupaii" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:neon-glow-text">
              <FaLinkedin size={28} />
            </a>
          </div>
        </ScrollReveal>

        {/* Right Side: Lottie Animation */}
        <ScrollReveal
          className="flex-1 flex justify-center items-center h-80 w-80 md:h-[450px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          viewportAmount={0.1}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full h-full flex items-center justify-center relative drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            {(() => {
              const LottieComp = Lottie.default || Lottie;
              return <LottieComp animationData={coderAnimation} className="w-[120%] h-[120%] z-10 scale-110" loop={true} />;
            })()}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
