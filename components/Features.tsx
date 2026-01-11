
import React from 'react';
import { Cpu, Layout, Globe, Code, Zap, CheckCircle2 } from 'lucide-react';

const FEATURE_LIST = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Analysis",
    description: "Deep structural analysis of PDF documents to identify layouts, headers, footers, and dynamic sections accurately."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Modern Blade Syntax",
    description: "Generates clean Laravel Blade components and templates following modern standards and best practices."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Preview",
    description: "See your generated code instantly and copy it directly to your project without downloading unnecessary files."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "PHP Compatibility",
    description: "Ensures the generated logic and structure are compatible with legacy and modern PHP environments."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "No Node.js Required",
    description: "Engineered to run seamlessly on standard PHP hosting environments without complex server-side dependencies."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Fully Customizable",
    description: "The generated output is human-readable and easy to extend or modify based on your unique project needs."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why developers choose PDFtoBlade?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Built by developers, for developers. We solve the manual grunt work of slicing designs into templates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_LIST.map((feature, idx) => (
            <div key={idx} className="gradient-border p-8 hover:bg-white/[0.05] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
