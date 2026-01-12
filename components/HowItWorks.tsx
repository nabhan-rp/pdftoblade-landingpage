
import React from 'react';
import { PenTool, ArrowRight, Printer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.how.title}</h2>
          <p className="text-slate-400">{t.how.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Path 1 */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative">
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">1</div>
                <div className="mb-6 w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
                    <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.how.step1Title}</h3>
                <p className="text-slate-400 mb-6">
                    {t.how.step1Desc}
                </p>
                <div className="text-sm font-mono text-indigo-400 bg-indigo-950/30 p-3 rounded-lg border border-indigo-500/20 inline-block">
                    Output: file.blade.php
                </div>
            </div>

            {/* Connector (Desktop Only) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-800 rounded-full items-center justify-center border border-white/10">
                <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Path 2 */}
            <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative">
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 select-none">2</div>
                 <div className="mb-6 w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                    <Printer className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.how.step2Title}</h3>
                <p className="text-slate-400 mb-6">
                    {t.how.step2Desc}
                </p>
                <div className="text-sm font-mono text-emerald-400 bg-emerald-950/30 p-3 rounded-lg border border-emerald-500/20 inline-block">
                    Output: Document.pdf
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
