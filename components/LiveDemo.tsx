
import React from 'react';
import { Terminal, Copy, Check, FileText } from 'lucide-react';

export const LiveDemo: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const code = `@extends('layouts.app')

@section('content')
<section class="hero-section bg-indigo-900 text-white">
    <div class="container mx-auto px-4 py-20">
        <h1 class="text-5xl font-extrabold leading-tight">
            {{ $pdf_title ?? 'Default Title' }}
        </h1>
        <p class="mt-6 text-lg opacity-90">
            Auto-generated from PDF structure.
        </p>
    </div>
</section>
@endsection`;

  return (
    <div id="demo" className="py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Lihat Hasilnya</h3>
        <p className="text-slate-400">Contoh kode Blade yang dihasilkan dari analisis PDF.</p>
      </div>
      
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-4 border-indigo-500/20 shadow-2xl shadow-indigo-500/10">
        <div className="bg-slate-950 rounded-[2rem] overflow-hidden border border-white/5">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
              <FileText className="w-3 h-3" /> template.blade.php
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="p-8 font-mono text-sm overflow-x-auto">
            <pre className="text-indigo-300 leading-relaxed">
              {code}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
