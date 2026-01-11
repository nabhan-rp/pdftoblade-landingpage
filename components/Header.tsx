
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
        isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <FileCode2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            PDFto<span className="gradient-text">Blade</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#demo" className="hover:text-white transition-colors">Live Preview</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Workflow</a>
          <a 
            href="https://github.com/nabhan-rp/pdftoblade-phpcompatibility" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors border border-white/5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href="https://bladegenerator.kopi.pw/pdftoblade/"
            target="_blank"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all active:scale-95"
          >
            Try Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 p-6 font-medium">
            <a href="#demo" className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>Live Preview</a>
            <a href="#features" className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-slate-300" onClick={() => setMobileMenuOpen(false)}>Workflow</a>
            <a 
              href="https://bladegenerator.kopi.pw/pdftoblade/"
              className="py-3 rounded-xl bg-indigo-600 text-white text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
