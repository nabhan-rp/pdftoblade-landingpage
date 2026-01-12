
import React from 'react';
import { MousePointer2, FileType, Printer, Code2, Bot, FileInput } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        
        {/* PDF TO BLADE SECTION */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">Aplikasi 1</span>
                <h2 className="text-3xl font-bold">PDF to Blade (Builder)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bento-card p-6 rounded-3xl">
                    <Bot className="w-10 h-10 text-indigo-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">AI PDF Conversion</h3>
                    <p className="text-slate-400 text-sm">Upload PDF surat lama, AI akan mendeteksi struktur dan mengubahnya menjadi kode Blade.</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <MousePointer2 className="w-10 h-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">GUI No-Code Editor</h3>
                    <p className="text-slate-400 text-sm">Drag-and-drop elemen surat, atur margin, dan styling tanpa menyentuh CSS.</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <Code2 className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Edit Existing Blade</h3>
                    <p className="text-slate-400 text-sm">Punya file .blade.php? Upload kembali ke editor untuk perbaikan cepat.</p>
                </div>
            </div>
        </div>

        {/* BLADE VIEWER SECTION */}
        <div>
            <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">Aplikasi 2</span>
                <h2 className="text-3xl font-bold">Blade Viewer & Exporter</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bento-card p-6 rounded-3xl">
                    <FileInput className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Instant Rendering</h3>
                    <p className="text-slate-400 text-sm">Lihat hasil akhir file .blade.php secara visual langsung di browser tanpa server Laravel.</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <Printer className="w-10 h-10 text-teal-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">PDF Export & Print</h3>
                    <p className="text-slate-400 text-sm">Cetak hasil render ke format PDF berkualitas tinggi siap distribusi.</p>
                </div>
                <div className="bento-card p-6 rounded-3xl">
                    <FileType className="w-10 h-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Standalone Tool</h3>
                    <p className="text-slate-400 text-sm">Berguna untuk non-developer atau admin yang hanya perlu mencetak template tanpa setup environment.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
