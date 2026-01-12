
import React from 'react';
import { MousePointer2, FileType, Printer, Code2, Bot, FileInput } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        
        {/* PDF TO BLADE SECTION */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">{t.features.app1}</span>
                <h2 className="text-3xl font-bold">{t.features.app1Title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bento-card p-6 rounded-3xl">
                    <Bot className="w-10 h-10 text-indigo-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f1Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f1Desc}</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <MousePointer2 className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f2Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f2Desc}</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <Code2 className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f3Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f3Desc}</p>
                </div>
            </div>
        </div>

        {/* BLADE VIEWER SECTION */}
        <div>
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">{t.features.app2}</span>
                <h2 className="text-3xl font-bold">{t.features.app2Title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bento-card p-6 rounded-3xl">
                    <FileInput className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f4Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f4Desc}</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <Printer className="w-10 h-10 text-teal-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f5Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f5Desc}</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <FileType className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.features.f6Title}</h3>
                    <p className="text-slate-400 text-sm">{t.features.f6Desc}</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
