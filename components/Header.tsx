
import React, { useState, useEffect } from 'react';
import { FileCode2, Menu, X, Github, Layers } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b border-white/5 mx-4 mt-4 rounded-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-indigo-600 to-emerald-600 p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg">
            <Layers className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Blade<span className="text-indigo-400">Tools</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <a href="#tools" className="hover:text-white transition-colors">Produk</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Cara Kerja</a>
          <div className="h-4 w-px bg-slate-800" />
          
          <div className="flex gap-4">
             <a 
               href="/pdftoblade/"
               className="px-5 py-2.5 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
             >
               PDF to Blade
             </a>
             <a 
               href="/bladeviewer/"
               className="px-5 py-2.5 rounded-xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-600 hover:text-white transition-all active:scale-95"
             >
               Blade Viewer
             </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl border border-white/10 p-6 animate-in fade-in slide-in-from-top-4 z-50">
          <div className="flex flex-col gap-6 font-semibold">
            <a href="#tools" onClick={() => setMobileMenuOpen(false)}>Produk</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Cara Kerja</a>
            <hr className="border-white/10" />
            <a href="/pdftoblade/" className="py-3 px-4 bg-indigo-600 rounded-xl text-center text-white">Buka PDF to Blade</a>
            <a href="/bladeviewer/" className="py-3 px-4 bg-emerald-600 rounded-xl text-center text-white">Buka Blade Viewer</a>
          </div>
        </div>
      )}
    </header>
  );
};
