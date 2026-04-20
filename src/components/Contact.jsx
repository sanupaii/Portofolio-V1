import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative min-h-[70vh] flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-cyan-400 font-medium tracking-wide uppercase mb-2">Tertarik Berkolaborasi?</p>
        <h2 className="text-4xl md:text-5xl font-bold">Mari Berbincang</h2>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800 backdrop-blur-lg"
      >
        <div className="flex flex-col gap-8">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Nama Anda"
              className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors peer"
            />
            {/* Glowing effect line on focus */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></div>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email"
              className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors peer"
            />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#a855f7]"></div>
          </div>

          <div className="relative group">
            <textarea 
              rows="4"
              placeholder="Pesan"
              className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors peer resize-none"
            ></textarea>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 opacity-0 peer-focus:w-full peer-focus:opacity-100 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"></div>
          </div>

          <div className="mt-4 flex justify-end">
            <button 
              type="button" 
              className="px-8 py-3 rounded-full bg-white text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Kirim Pesan
            </button>
          </div>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
