import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFramer, SiVite } from 'react-icons/si';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const tabs = ['Projects', 'Sertifikat', 'Tech Stack'];

  // Dummy Data
  const projects = [
    { id: 1, title: 'SiDaun PWA', img: 'https://placehold.co/600x400/020617/06b6d4?text=SiDaun+PWA' },
    { id: 2, title: 'E-Commerce App', img: 'https://placehold.co/600x400/020617/a855f7?text=E-Commerce' },
  ];
  const certificates = [
    { id: 1, title: 'Dicoding Frontend Build', img: 'https://placehold.co/600x400/020617/10b981?text=Sertifikat+1' },
  ];
  const techStack = [
    { icon: <FaReact size={50} color="#61DAFB" />, name: 'React' },
    { icon: <SiTailwindcss size={50} color="#06B6D4" />, name: 'Tailwind CSS' },
    { icon: <SiJavascript size={50} color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <SiFramer size={50} color="#0055FF" />, name: 'Framer Motion' },
    { icon: <SiVite size={50} color="#646CFF" />, name: 'Vite' },
    { icon: <FaNodeJs size={50} color="#339933" />, name: 'Node.js' },
    { icon: <FaGitAlt size={50} color="#F05032" />, name: 'Git' },
  ];

  const renderContent = () => {
    if (activeTab === 'Projects' || activeTab === 'Sertifikat') {
      const data = activeTab === 'Projects' ? projects : certificates;
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        >
          {data.map((item) => (
            <motion.div 
              key={item.id}
              className="relative group overflow-hidden rounded-xl bg-slate-900 border border-slate-800"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="overflow-hidden">
                 <img 
                   src={item.img} 
                   alt={item.title} 
                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
              </div>
              <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <button className="px-5 py-2 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      );
    }
    
    // Tech Stack View
    return (
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-5 gap-8 mt-12"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
      >
        {techStack.map((tech, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors shadow-lg"
          >
            {tech.icon}
            <p className="mt-4 text-slate-400 font-medium text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="portofolio" className="py-24 min-h-[80vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-cyan-400 font-medium tracking-wide uppercase mb-2">Showcase</p>
        <h2 className="text-4xl font-bold">Portofolio <span className="text-gradient-neon">& Keahlian</span></h2>
      </motion.div>

      {/* Tabs Layout */}
      <div className="flex justify-center flex-wrap gap-4 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm uppercase tracking-wider ${
              activeTab === tab 
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
