
import React from 'react';
import { Cpu, Layout, Zap, CheckCircle2, Shield, MousePointer2 } from 'lucide-react';

const FEATURES = [
  {
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    title: "Analisis Struktur AI",
    desc: "Memahami hierarki DOM dari file PDF untuk menghasilkan grid yang presisi.",
    span: "col-span-1 md:col-span-2"
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Ultra Cepat",
    desc: "Konversi selesai dalam waktu kurang dari 5 detik.",
    span: "col-span-1"
  },
  {
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    title: "Komponen Blade",
    desc: "Bukan sekadar HTML, tapi Blade template lengkap dengan directive.",
    span: "col-span-1"
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Clean & Secure",
    desc: "Kode yang dihasilkan bebas dari inline-style kotor dan aman.",
    span: "col-span-1 md:col-span-2"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Dibuat khusus untuk efisiensi developer.</h2>
            <p className="text-slate-400 text-lg font-inter">Semua yang Anda butuhkan untuk memangkas waktu slicing desain.</p>
          </div>
          <a href="/pdftoblade/" className="text-indigo-400 font-bold flex items-center gap-2 hover:underline">
            Coba semua fitur <MousePointer2 className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className={`${f.span} bento-card p-8 rounded-[2rem] flex flex-col justify-between`}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-10">
                {f.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 font-inter leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
