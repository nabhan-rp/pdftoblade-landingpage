
import React from 'react';
import { MousePointer2, Wand2, Download, FilePlus } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FilePlus className="w-8 h-8" />,
      title: "Input Desain",
      desc: "Upload PDF surat yang sudah ada atau pilih template kosong dari Editor GUI kami."
    },
    {
      icon: <MousePointer2 className="w-8 h-8" />,
      title: "Visual Editing",
      desc: "Sesuaikan tata letak, kop surat, dan posisi tanda tangan tanpa menyentuh kode."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Ekspor Blade",
      desc: "Salin kode .blade.php yang sudah dioptimalkan untuk Laravel dan siap pakai."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Workflow Tanpa Ribet</h2>
          <p className="text-slate-400">Selesaikan template surat dalam menit, bukan jam.</p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white mb-8 shadow-2xl shadow-indigo-600/30 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 font-inter leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 glass rounded-[3rem] border border-white/5 bg-gradient-to-br from-indigo-500/5 to-transparent flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
               <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest">Fitur Unggulan</div>
               <h4 className="text-3xl font-bold">Editor Visual Khusus Surat</h4>
               <p className="text-slate-400 leading-relaxed font-inter">
                  Kami memahami bahwa surat resmi membutuhkan presisi tinggi. Editor GUI kami dilengkapi dengan panduan garis bantu, alat pengatur font otomatis, dan manajemen placeholder variabel Laravel yang cerdas.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 font-inter">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Header & Footer Builder</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Auto Variable Mapping</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> PDF Preview Instan</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"/> Template Library</li>
               </ul>
            </div>
            <div className="flex-1 relative group">
               <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <img 
                 src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800" 
                 alt="Surat Template"
                 className="rounded-2xl border border-white/10 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
        </div>
      </div>
    </section>
  );
};
