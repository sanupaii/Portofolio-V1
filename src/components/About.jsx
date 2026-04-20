import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-8 md:py-12 min-h-[40vh] flex flex-col items-center justify-center relative">
      {/* Centered Heading */}
      <ScrollReveal
        className="text-center mb-16 w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewportAmount={0.2}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold flex flex-col md:block mb-4">
          About <span className="text-gradient-neon">Me</span>
        </h2>
        <p className="text-cyan-400 font-semibold tracking-widest uppercase">
          Get to know the developer behind the code.
        </p>
      </ScrollReveal>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Left Side: About Text & Buttons */}
        <ScrollReveal
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewportAmount={0.3}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Halo, saya <span className="text-cyan-400">Sanu Ahadi Waruwu</span>
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
            Saya adalah seorang mahasiswa Sistem Informasi yang berfokus pada pengembangan web modern. Saya menggabungkan keahlian Frontend Development dengan integrasi Kecerdasan Buatan (AI) untuk menciptakan aplikasi web yang tidak hanya estetis dan responsif, tetapi juga cerdas dalam memberikan solusi bagi pengguna.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-5 p-6 mb-8 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 backdrop-blur-sm"
          >
            <FaQuoteLeft className="text-indigo-500 opacity-80 shrink-0 text-3xl shadow-indigo-500/50" />
            <p className="text-slate-200 italic font-medium leading-relaxed text-sm md:text-base">
              "Building the future, one line of code and one intelligent model at a time."
            </p>
          </motion.div>

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
              onClick={() => window.location.href = "#portofolio"}
            >
              View Project
            </motion.button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { label: "Total Projects", value: "10+" },
              { label: "Certificates", value: "5+" },
              { label: "Experience", value: "1+ Year" }
            ].map((stat, index) => (
              <motion.div
                onClick={() => window.location.href = "#portofolio"}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors text-center group"
              >
                <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right Side: Profile Photo */}
        <ScrollReveal
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, rotateY: -30 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.6 }}
          viewportAmount={0.3}
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-2 border-slate-800/50 bg-slate-900 group-hover:border-cyan-500/50 transition-colors duration-500">
              <img
                src="/profil.jpeg"
                alt="Sanu Ahadi Waruwu Profile"
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
              />
              {/* Shine Effect */}
              <div className="absolute top-0 -left-[100%] h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
