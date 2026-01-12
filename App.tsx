
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { LiveDemo } from './components/LiveDemo';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-purple-500/30 relative">
        {/* Background Decorative Elements with Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-blob mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-blob animation-delay-2000 mix-blend-screen" />
          <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-emerald-600/20 blur-[80px] rounded-full animate-blob animation-delay-4000 mix-blend-screen" />
        </div>

        <Header />
        
        <main>
          <Hero />
          <section id="demo" className="py-20 relative">
            <div className="container mx-auto px-6">
              <LiveDemo />
            </div>
          </section>
          <Features />
          <HowItWorks />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
