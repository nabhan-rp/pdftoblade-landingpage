
import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-8 animate-bounce">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Powered by Gemini AI Studio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
          Convert <span className="gradient-text">PDF to Blade</span> <br />
          Templates in Seconds
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed font-inter">
          Stop manually coding layouts from PDF designs. Our intelligent engine handles the complexity, generating clean, compatible, and modern Laravel Blade code.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://bladegenerator.kopi.pw/pdftoblade/"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
          >
            Start Converting Free <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 glass text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-all"
          >
            View Workflow
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto opacity-70">
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium">90% Faster Dev</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium">PHP 8.2+ Optimized</span>
          </div>
          <div className="hidden md:flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium">Tailwind & Bootstrap Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
