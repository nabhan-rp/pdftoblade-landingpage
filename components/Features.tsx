
import React from 'react';
import { MousePointer2, FileType, Zap, LayoutTemplate, PenTool, Braces } from 'lucide-react';

const FEATURES = [
  {
    icon: <PenTool className="w-6 h-6 text-indigo-400" />,
    title: "GUI No-Code Editor",
    desc: "Desain layout surat Anda secara visual. Geser elemen, ubah margin, dan tambahkan tabel tanpa menulis satu baris CSS pun.",
    span: "col-span-1 md:col-span-2"
  },
  {
    icon: <Braces className="w-6 h-6 text-yellow-400" />,
    title: "Smart Variable Mapping",
    desc: "Masukkan placeholder Laravel secara otomatis untuk nama, nomor surat, dan tanggal.",
    span: "col-span-1"
  },
  {
    icon: <FileType className="w-6 h-6 text-purple-400" />,
    title: "PDF Analyzer",
    desc: "Sudah punya desain surat dalam PDF? Upload dan AI kami akan mendeteksi strukturnya menjadi file Blade.",
    span: "col-span-1"
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-emerald-400" />,
    title: "Letter-Ready Components",
    desc: "Dilengkapi komponen khusus surat seperti Kop Surat, Tanda Tangan, dan QR Code dinamis.",
    span: "col-span-1 md:col-span-2"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Lebih dari sekadar konverter PDF.</h2>
          <p className="text-slate-400 text-lg font-inter max-w-2xl mx-auto">Kami membangun alat yang benar-benar memahami kebutuhan pembuatan surat resmi di ekosistem Laravel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className={`${f.span} bento-card p-8 rounded-[2.5rem] flex flex-col justify-between group`}>
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-indigo-500/10 transition-colors">
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
