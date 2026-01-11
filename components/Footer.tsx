
import React from 'react';
import { FileCode2, Twitter, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
                <FileCode2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold">PDFtoBlade</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-inter">
              Making design-to-code workflow effortless for Laravel developers worldwide. Powered by advanced AI and built for stability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/nabhan-rp" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-inter">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Pricing (Free)</a></li>
              <li><a href="https://bladegenerator.kopi.pw/pdftoblade/" className="hover:text-white transition-colors">Live App</a></li>
              <li><a href="https://github.com/nabhan-rp/pdftoblade-phpcompatibility" className="hover:text-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Developer</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-inter">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Keys</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-inter">
          <p>© 2024 PDFtoBlade. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by <span className="text-white font-medium">Nabhan RP</span>
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
