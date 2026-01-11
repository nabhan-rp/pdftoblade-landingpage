
import React from 'react';
import { FileCode2, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <FileCode2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">PDFtoBlade</span>
            </div>
            <p className="text-slate-400 font-inter leading-relaxed">
              Membantu developer Laravel mempercepat proses pembuatan template surat resmi dengan teknologi AI dan No-Code Editor yang intuitif.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold mb-6 text-indigo-400">Navigasi</h4>
              <ul className="space-y-4 text-slate-400 font-inter text-sm">
                <li><a href="/pdftoblade/" className="hover:text-white">Buka Aplikasi</a></li>
                <li><a href="#features" className="hover:text-white">Fitur</a></li>
                <li><a href="#how-it-works" className="hover:text-white">Panduan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-indigo-400">Source</h4>
              <ul className="space-y-4 text-slate-400 font-inter text-sm">
                <li><a href="https://github.com/nabhan-rp" className="flex items-center gap-2 hover:text-white"><Github className="w-4 h-4"/> GitHub</a></li>
                <li><a href="https://bladegenerator.kopi.pw" className="hover:text-white">Root Domain</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-inter">
          <p>© 2024 PDFtoBlade. Dikembangkan oleh Nabhan RP.</p>
          <p className="flex items-center gap-2">
            Build with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Laravel Community
          </p>
        </div>
      </div>
    </footer>
  );
};
