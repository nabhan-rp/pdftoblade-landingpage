
import React from 'react';
import { ArrowRight, MousePointer2, FileText, Sparkles, PencilLine, Layout } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Smart Letter Builder for Laravel</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1] max-w-5xl mx-auto">
          Buat Template <span className="gradient-text">Surat .blade.php</span> <br />
          Secara Visual & Tanpa Coding.
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-inter">
          Lupakan kerumitan menulis tag HTML & CSS manual untuk surat resmi. Gunakan <strong>GUI Editor</strong> kami untuk desain drag-and-drop, atau <strong>Upload PDF</strong> untuk konversi otomatis berbasis AI.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="/pdftoblade/"
            className="w-full md:w-auto px-10 py-5 btn-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 group shadow-2xl shadow-indigo-500/40"
          >
            Buka Editor Surat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="px-6 py-5 glass text-slate-300 rounded-2xl border border-white/5 flex items-center gap-3 text-sm">
              <PencilLine className="w-5 h-5 text-purple-400" /> GUI No-Code Editor
            </div>
            <div className="px-6 py-5 glass text-slate-300 rounded-2xl border border-white/5 flex items-center gap-3 text-sm">
              <FileText className="w-5 h-5 text-indigo-400" /> AI PDF Converter
            </div>
          </div>
        </div>

        {/* Editor Preview Mockup */}
        <div className="mt-20 relative max-w-5xl mx-auto hidden lg:block">
           <div className="absolute -top-6 -left-6 glass p-5 rounded-2xl border-indigo-500/20 shadow-2xl z-20 animate-bounce duration-[4000ms]">
              <div className="flex items-center gap-3 text-xs font-bold text-indigo-400 mb-3">
                <Layout className="w-4 h-4" /> Visual Layout Engine
              </div>
              <div className="bg-white/5 rounded-lg px-3 py-2 text-[11px] font-mono text-slate-400 border border-white/5">
                {"<div class='kop-surat'>"} <br />
                &nbsp;&nbsp;{"{{ $nama_instansi }}"} <br />
                {"</div>"}
              </div>
           </div>

           <div className="w-full aspect-[21/9] rounded-[2.5rem] border border-white/10 bg-slate-900 overflow-hidden flex shadow-2xl">
              {/* Left Sidebar Mockup */}
              <div className="w-64 h-full border-r border-white/5 p-6 space-y-4 text-left">
                 <div className="h-4 w-3/4 bg-white/10 rounded" />
                 <div className="space-y-2 pt-4">
                    <div className="h-8 w-full bg-indigo-500/20 rounded-lg border border-indigo-500/30" />
                    <div className="h-8 w-full bg-white/5 rounded-lg" />
                    <div className="h-8 w-full bg-white/5 rounded-lg" />
                 </div>
              </div>
              {/* Canvas Mockup */}
              <div className="flex-1 h-full bg-slate-950 p-10">
                 <div className="max-w-md mx-auto h-full bg-white/5 rounded-t-xl border-x border-t border-white/10 p-8 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 mb-8" />
                    <div className="w-full space-y-4">
                       <div className="h-3 w-full bg-white/10 rounded" />
                       <div className="h-3 w-full bg-white/10 rounded" />
                       <div className="h-3 w-2/3 bg-white/10 rounded" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
