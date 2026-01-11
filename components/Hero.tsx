
import React from 'react';
import { ArrowRight, MousePointer2, FileText, Sparkles, PencilLine } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">No-Code Laravel Letter Builder</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1] max-w-5xl mx-auto">
          Bikin Template <span className="gradient-text">Surat .blade.php</span> <br />
          Tanpa Coding Sama Sekali.
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-inter">
          Solusi cerdas bagi developer Laravel. Konversi PDF surat Anda atau buat desain baru dengan <strong>Editor GUI</strong> kami. Drag-and-drop elemen, atur variabel, dan dapatkan file Blade yang bersih seketika.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="/pdftoblade/"
            className="w-full md:w-auto px-10 py-5 btn-primary text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 group"
          >
            Mulai Desain Surat <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="px-6 py-5 glass text-slate-300 rounded-2xl border border-white/5 flex items-center gap-3 text-sm">
              <FileText className="w-5 h-5 text-indigo-400" /> Konversi PDF
            </div>
            <div className="px-6 py-5 glass text-slate-300 rounded-2xl border border-white/5 flex items-center gap-3 text-sm">
              <PencilLine className="w-5 h-5 text-purple-400" /> GUI No-Code Editor
            </div>
          </div>
        </div>

        {/* Floating GUI Element Preview */}
        <div className="mt-20 relative max-w-4xl mx-auto hidden md:block">
           <div className="absolute -top-10 -left-10 glass p-4 rounded-2xl border-indigo-500/20 shadow-xl animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 mb-2">
                <MousePointer2 className="w-3 h-3" /> Tool: Text Variable
              </div>
              <div className="bg-white/5 rounded px-2 py-1 text-[10px] font-mono">{"{{ $nomor_surat }}"}</div>
           </div>
           <div className="w-full aspect-[16/7] rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex gap-4 overflow-hidden opacity-80">
              <div className="w-1/4 h-full border-r border-white/5 pr-4 flex flex-col gap-2">
                 <div className="h-4 w-full bg-white/5 rounded" />
                 <div className="h-4 w-2/3 bg-white/5 rounded" />
                 <div className="mt-auto h-10 w-full bg-indigo-600/20 rounded-xl border border-indigo-500/30" />
              </div>
              <div className="flex-1 h-full bg-white/5 rounded-xl p-8 flex flex-col items-center">
                 <div className="w-24 h-4 bg-white/10 mb-8" />
                 <div className="w-full space-y-3">
                    <div className="h-2 w-full bg-white/5" />
                    <div className="h-2 w-full bg-white/5" />
                    <div className="h-2 w-3/4 bg-white/5" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
