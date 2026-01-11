
import React from 'react';
import { ArrowRight, Code2, Sparkles, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">The Future of Laravel Templating</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto">
          Dari <span className="gradient-text">PDF Design</span> ke <br />
          Blade Code Secara Instan.
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-inter">
          Tinggalkan cara lama mengiris desain manual. Konversi layout PDF kompleks menjadi komponen Laravel Blade yang bersih, responsif, dan siap pakai dalam hitungan detik.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/pdftoblade/"
            className="w-full sm:w-auto px-10 py-5 btn-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 group"
          >
            Mulai Konversi Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#demo"
            className="w-full sm:w-auto px-10 py-5 glass text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" /> Lihat Demo
          </a>
        </div>

        {/* Integration Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl"><Layers className="w-6 h-6" /> Laravel 11</div>
          <div className="h-6 w-px bg-slate-700 hidden md:block" />
          <div className="flex items-center gap-2 font-bold text-xl">Tailwind CSS</div>
          <div className="h-6 w-px bg-slate-700 hidden md:block" />
          <div className="flex items-center gap-2 font-bold text-xl">PHP 8.3</div>
          <div className="h-6 w-px bg-slate-700 hidden md:block" />
          <div className="flex items-center gap-2 font-bold text-xl text-indigo-400">Gemini AI</div>
        </div>
      </div>
    </section>
  );
};
