
import React from 'react';
import { Layers, Github, Heart, Shield, FileText, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  // Base URL dinamis (mengambil origin saat ini)
  const getBaseUrl = () => {
      if (typeof window !== 'undefined') {
          return window.location.origin;
      }
      return '/';
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-800 p-2 rounded-xl border border-white/10">
                <Layers className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Blade<span className="text-indigo-400">Tools</span></span>
            </div>
            <p className="text-slate-400 font-inter leading-relaxed text-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <h4 className="font-bold mb-6 text-white">{t.footer.products}</h4>
              <ul className="space-y-3 text-slate-400 font-inter text-sm">
                <li><a href="/pdftoblade/" className="hover:text-indigo-400 transition-colors">PDF to Blade Builder</a></li>
                <li><a href="/bladeviewer/" className="hover:text-emerald-400 transition-colors">Blade Viewer & Exporter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">{t.footer.source}</h4>
              <ul className="space-y-3 text-slate-400 font-inter text-sm">
                <li>
                    <a href="https://github.com/nabhan-rp/pdftoblade-phpcompatibility" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                        <Github className="w-4 h-4"/> {t.footer.repoBuilder}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nabhan-rp/bladeviewer" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                        <Github className="w-4 h-4"/> {t.footer.repoViewer}
                    </a>
                </li>
                <li>
                    <a href={getBaseUrl()} className="hover:text-white font-semibold text-indigo-400">
                        {t.footer.baseTool}
                    </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white">{t.footer.legal}</h4>
              <ul className="space-y-3 text-slate-400 font-inter text-sm">
                <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <Shield className="w-3 h-3"/> {t.footer.privacy}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <FileText className="w-3 h-3"/> {t.footer.tos}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                        <Info className="w-3 h-3"/> {t.footer.disclaimer}
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-inter">
          <div className="space-y-2">
              <p>{t.footer.rights}</p>
              <p className="max-w-2xl opacity-70">
                {t.footer.disclaimerText}
              </p>
          </div>
          <p className="flex items-center gap-2 shrink-0">
            {t.footer.madeWith} <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
};
