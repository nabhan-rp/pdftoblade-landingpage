
import React from 'react';
import { Terminal, Copy, Check, FileCode } from 'lucide-react';

export const LiveDemo: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const code = `{{-- Template Surat Resmi --}}
<div class="letter-container" style="font-family: Arial, sans-serif;">
    <div class="header text-center border-b-2 pb-4 mb-8">
        <h1 class="text-2xl font-bold uppercase">{{ $instansi }}</h1>
        <p class="text-sm">{{ $alamat_instansi }}</p>
    </div>

    <div class="content">
        <div class="meta mb-6">
            <p>Nomor : {{ $nomor_surat }}</p>
            <p>Hal    : {{ $perihal }}</p>
            <p>Tanggal: {{ $tanggal_surat }}</p>
        </div>

        <div class="body leading-relaxed mb-8 text-justify">
            {!! $isi_surat !!}
        </div>
    </div>

    <div class="footer float-right text-center min-w-[200px]">
        <p>Hormat kami,</p>
        <div class="h-20"></div> {{-- Area Tanda Tangan --}}
        <p class="font-bold underline">{{ $penandatangan }}</p>
        <p>NIP. {{ $nip }}</p>
    </div>
</div>`;

  return (
    <div id="demo" className="py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Hasil Kode Blade Bersih</h3>
        <p className="text-slate-400">Kode yang dihasilkan siap digunakan langsung di aplikasi Laravel Anda.</p>
      </div>
      
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-4 border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
        <div className="bg-slate-950 rounded-[2rem] overflow-hidden border border-white/5">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
              <FileCode className="w-3 h-3" /> surat-keputusan.blade.php
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-slate-300 leading-relaxed">
              <code className="text-indigo-400">@php</code>{"\n"}
              <span className="text-slate-400">  // Dihasilkan otomatis oleh PDFtoBlade GUI</span>{"\n"}
              <code className="text-indigo-400">@endphp</code>{"\n\n"}
              {code}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
