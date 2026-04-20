import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Message from Portfolio',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/sanuahadi1@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success === "true") {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'New Message from Portfolio', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 relative min-h-[40vh] flex flex-col justify-center items-center">
      <ScrollReveal
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewportAmount={0.2}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Contact <span className="text-gradient-neon">Me</span></h2>
        <p className="text-cyan-400 font-semibold tracking-widest uppercase">Let's build something amazing together.</p>
      </ScrollReveal>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
        {/* Left Side: Connect to Me */}
        <ScrollReveal
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewportAmount={0.2}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800 backdrop-blur-lg flex flex-col"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Connect <span className="text-cyan-400">to me</span></h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Punya ide proyek, tawaran kolaborasi, atau sekadar ingin menyapa? Hubungi saya melalui media sosial di bawah ini.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-auto">
            <a href="https://github.com/sanupaii" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
              <FaGithub size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <span className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors hidden sm:block">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sanupaii" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
              <FaLinkedin size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <span className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors hidden sm:block">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/alex.24434987" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
              <FaInstagram size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <span className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors hidden sm:block">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@1a9ah2h00s4" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
              <FaTiktok size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <span className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors hidden sm:block">TikTok</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Right Side: Message Form */}
        <ScrollReveal
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          viewportAmount={0.2}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-lg"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Kirim <span className="text-purple-500">Pesan</span></h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors peer"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors peer"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#a855f7]"></div>
            </div>

            <div className="relative group">
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Pesan"
                required
                className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors peer resize-none"
              ></textarea>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-green-400 font-medium"
                  >
                    <FaCheckCircle /> Pesan berhasil dikirim!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-red-400 font-medium"
                  >
                    <FaExclamationCircle /> Gagal mengirim pesan.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full sm:w-auto px-8 py-3 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2 
                  ${status === 'sending' 
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                    : 'bg-white text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                  }`}
              >
                {status === 'sending' ? (
                  <>Mengirim...</>
                ) : (
                  <>
                    Kirim Pesan <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

