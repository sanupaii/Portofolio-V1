import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaProjectDiagram,
  FaCertificate, FaCode, FaExternalLinkAlt, FaLaughWink
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiVite,
  SiFirebase, SiMui, SiVercel, SiBootstrap
} from 'react-icons/si';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [visibleCerts, setVisibleCerts] = useState(9);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'Projects') setVisibleProjects(6);
    if (tabId === 'Sertifikat') setVisibleCerts(9);
  };

  const tabs = [
    { id: 'Projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'Sertifikat', label: 'Certificates', icon: <FaCertificate /> },
    { id: 'Tech Stack', label: 'Tech Stack', icon: <FaCode /> }
  ];

  // Dummy Data
  const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: i === 0 ? 'PIK-R SMAN 1 Mengwi' : i === 1 ? 'GameSmiths Studio' : i === 2 ? 'WhatsApp Clone' : `Portfolio Project ${i + 1}`,
    description: i === 0
      ? 'PIK-R (Pusat Informasi dan Konseling Remaja) adalah wadah pembinaan dan pelayanan bagi remaja yang...'
      : i === 1
        ? 'GameSmiths adalah studio game developer yang fokus di platform Roblox. Kami merupakan tim rintisan yang...'
        : 'Proyek ini adalah eksplorasi visual dari antarmuka aplikasi. Dibangun menggunakan ReactJS, TailwindCSS, dan Framer Motion.',
    img: `https://placehold.co/600x400/1e1e2f/06b6d4?text=Project+${i + 1}`,
    liveUrl: '#',
    detailsUrl: '#'
  }));

  const certificates = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Sertifikat Kompetensi ${i + 1}`,
    img: `https://placehold.co/800x600/e2e8f0/0f172a?text=Dicoding+Certificate+${i + 1}`
  }));

  const techStack = [
    { icon: <FaHtml5 color="#E34F26" />, name: 'HTML' },
    { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS' },
    { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <SiTailwindcss color="#06B6D4" />, name: 'Tailwind CSS' },
    { icon: <FaReact color="#61DAFB" />, name: 'ReactJS' },
    { icon: <SiVite color="#646CFF" />, name: 'Vite' },
    { icon: <FaNodeJs color="#339933" />, name: 'Node JS' },
    { icon: <SiBootstrap color="#7952B3" />, name: 'Bootstrap' },
    { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
    { icon: <SiMui color="#007FFF" />, name: 'Material UI' },
    { icon: <SiVercel color="#FFFFFF" />, name: 'Vercel' },
    { icon: <FaLaughWink color="#FFC107" />, name: 'SweetAlert2' },
  ];

  const renderContent = () => {
    if (activeTab === 'Projects') {
      return (
        <motion.div
          key="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.slice(0, visibleProjects).map((item) => (
              <ScrollReveal
                key={item.id}
                className="bg-[#1a1b26] rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] flex flex-col transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewportAmount={0.2}
                transition={{ duration: 0.5 }}
              >
                <div className="p-4 pb-0 h-56 w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg border border-slate-800/50"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <a href={item.liveUrl} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2 transition-colors">
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                    <a href={item.detailsUrl} className="text-slate-300 text-sm bg-slate-800 hover:bg-slate-700 px-5 py-2 rounded-lg transition-colors font-medium">
                      Details &rarr;
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {projects.length > visibleProjects && (
            <div className="flex justify-center mt-12 w-full">
              <button
                onClick={() => setVisibleProjects(prev => prev + 6)}
                className="px-8 py-3 rounded-full bg-[#1a1b26] border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-semibold"
              >
                See More
              </button>
            </div>
          )}
        </motion.div>
      );
    }

    if (activeTab === 'Sertifikat') {
      return (
        <motion.div
          key="sertifikat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex flex-col pb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {certificates.slice(0, visibleCerts).map((item) => (
              <ScrollReveal
                key={item.id}
                className="bg-[#1a1b26] p-4 rounded-xl border border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] transition-all duration-300 shadow-lg group"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewportAmount={0.2}
                transition={{ duration: 0.5 }}
              >
                <div className="overflow-hidden rounded-md border border-slate-800 bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          {certificates.length > visibleCerts && (
            <div className="flex justify-center mt-12 w-full">
              <button
                onClick={() => setVisibleCerts(prev => prev + 9)}
                className="px-8 py-3 rounded-full bg-[#1a1b26] border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all font-semibold"
              >
                See More
              </button>
            </div>
          )}
        </motion.div>
      );
    }

    // Tech Stack View
    return (
      <motion.div
        key="tech-stack"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10 pb-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
          }
        }}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
      >
        {techStack.map((tech, idx) => (
          <ScrollReveal
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: idx * 0.05 }}
            viewportAmount={0.2}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#161622] border border-slate-800 hover:border-slate-600 transition-colors shadow-lg min-h-[140px]"
          >
            <div className="text-[55px] mb-4">
              {tech.icon}
            </div>
            <p className="text-white font-bold text-sm tracking-wide">{tech.name}</p>
          </ScrollReveal>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="portofolio" className="py-8 md:py-12 min-h-[40vh] flex flex-col justify-center">
      <ScrollReveal
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewportAmount={0.2}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Portfolio <span className="text-gradient-neon">Showcase</span></h2>
        <p className="text-cyan-400 font-semibold tracking-widest uppercase">Explore my latest work and technical expertise.</p>
      </ScrollReveal>

      {/* Tabs Layout */}
      <div className="flex justify-center max-w-4xl mx-auto w-full mb-8">
        <div className="flex flex-wrap md:flex-nowrap justify-between w-full bg-[#161622] p-2 rounded-[2rem] border border-slate-800 shadow-xl overflow-hidden gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-3xl font-semibold transition-all duration-300 text-sm md:text-base tracking-wider min-w-[30%] ${activeTab === tab.id
                  ? 'bg-[#1e1e2f] text-white border-b-2 border-purple-500 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform scale-[1.02]'
                  : 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                }`}
            >
              <span className="text-xl md:text-2xl">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px] w-full">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
