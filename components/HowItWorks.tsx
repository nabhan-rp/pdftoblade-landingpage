
import React from 'react';
import { Upload, Wand2, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload />,
      title: "Upload PDF",
      desc: "Drag and drop your PDF design file into our secure converter interface."
    },
    {
      icon: <Wand2 />,
      title: "AI Conversion",
      desc: "Our Gemini-powered engine scans the layout and structures the Blade code."
    },
    {
      icon: <Download />,
      title: "Get Blade Code",
      desc: "Copy the perfectly formatted Laravel Blade template into your project."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">The 3-Step Workflow</h2>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/40 to-indigo-500/20 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-indigo-500/20 border-4 border-[#030712]">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 font-inter px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 glass rounded-3xl max-w-5xl mx-auto border border-white/5 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-10 text-left">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-4">Optimized for PHP Hosting</h4>
              <p className="text-slate-400 mb-6 font-inter">
                We know most production environments for Laravel run on traditional PHP servers. PDFtoBlade is built as a lightweight PHP-compatible solution that doesn't force you to install modern JS runtimes on your server.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-indigo-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px]">✓</div>
                  Compatible with Shared Hosting
                </li>
                <li className="flex items-center gap-3 text-indigo-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px]">✓</div>
                  Zero Node.js dependency in runtime
                </li>
                <li className="flex items-center gap-3 text-indigo-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-[10px]">✓</div>
                  Pure Laravel ecosystem friendly
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full aspect-video rounded-2xl bg-slate-950 border border-white/10 p-4 flex items-center justify-center shadow-2xl">
               <div className="text-center opacity-40">
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <p className="text-xs font-mono">index.blade.php</p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-48 bg-white/10 rounded" />
                    <div className="h-2 w-32 bg-white/10 rounded" />
                    <div className="h-2 w-40 bg-white/10 rounded" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
