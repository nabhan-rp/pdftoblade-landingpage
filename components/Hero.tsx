
import React from 'react';
import { ArrowRight, PencilLine, Printer, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-10 animate-fade-in">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1] max-w-6xl mx-auto">
          {t.hero.titleStart} <span className="gradient-text">{t.hero.titleCreate}</span> {t.hero.titleAnd} <br />
          <span className="gradient-text-green">{t.hero.titlePrint}</span> {t.hero.titleEnd}
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed font-inter">
            {t.hero.description}
        </p>

        {/* Dual CTA Cards */}
        <div id="tools" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           {/* Builder Card */}
           <div className="glass p-8 rounded-[2rem] border border-indigo-500/20 hover:border-indigo-500/40 transition-all group text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-indigo-600/10 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-6">
                    <PencilLine className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Blade Builder</h3>
                <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
                    {t.hero.cardBuilderDesc}
                </p>
                <a href="/pdftoblade/" className="inline-flex items-center gap-2 text-indigo-300 font-bold group-hover:text-indigo-200 transition-colors">
                    {t.hero.btnBuilder} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
           </div>

           {/* Viewer Card */}
           <div className="glass p-8 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-500/40 transition-all group text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-emerald-600/10 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center mb-6">
                    <Printer className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Blade Viewer</h3>
                <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
                    {t.hero.cardViewerDesc}
                </p>
                <a href="/bladeviewer/" className="inline-flex items-center gap-2 text-emerald-300 font-bold group-hover:text-emerald-200 transition-colors">
                    {t.hero.btnViewer} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
