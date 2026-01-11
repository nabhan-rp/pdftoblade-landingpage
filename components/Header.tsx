
import React, { useState, useEffect } from 'react';
import { FileCode2, Menu, X, Github } from 'lucide-react';

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
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <FileCode2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            PDFto<span className="gradient-text">Blade</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Fitur</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Cara Kerja</a>
          <div className="h-4 w-px bg-slate-800" />
          <a 
            href="https://github.com/nabhan-rp/pdftoblade-phpcompatibility" 
            target="_blank" 
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> Github
          </a>
          <a 
            href="/pdftoblade/"
            className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-indigo-50 transition-all active:scale-95"
          >
            Buka Aplikasi
          </a>
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
        <div className="lg:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl border border-white/10 p-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 font-semibold">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Fitur</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)}>Demo</a>
            <a href="/pdftoblade/" className="py-4 bg-indigo-600 rounded-xl text-center text-white">Buka Aplikasi</a>
          </div>
        </div>
      )}
    </header>
  );
};
