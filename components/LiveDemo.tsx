
import React, { useState } from 'react';
import { FileText, ChevronRight, Copy, Terminal, Check } from 'lucide-react';

export const LiveDemo: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const codeExample = `@extends('layouts.app')

@section('content')
<div class="container mx-auto py-12">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="p-8 border-b">
            <h1 class="text-3xl font-bold">{{ $title }}</h1>
            <p class="text-gray-600">Converted from PDF Design</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {{-- Dynamic Content Area --}}
            @foreach($items as $item)
                <x-card :data="$item" />
            @endforeach
        </div>
    </div>
</div>
@endsection`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Simulated Input */}
        <div className="flex flex-col gap-6">
          <div className="flex-1 glass rounded-3xl p-8 border border-indigo-500/20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 animate-pulse">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Upload your PDF</h3>
            <p className="text-slate-400 mb-8 font-inter">Drop your PDF file here to see the magic happen.</p>
            <button className="px-8 py-3 bg-indigo-600 rounded-xl font-bold hover:bg-indigo-500 transition-colors">
              Browse Files
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 text-indigo-500/50">
            <ChevronRight className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        {/* Right: Simulated Code Output */}
        <div className="glass rounded-3xl p-1 overflow-hidden flex flex-col border border-purple-500/20">
          <div className="bg-slate-950 p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-slate-300">generated-template.blade.php</span>
            </div>
            <button 
              onClick={handleCopy}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
          <div className="flex-1 bg-slate-900/50 p-6 font-mono text-sm overflow-x-auto text-indigo-200">
            <pre className="whitespace-pre-wrap">
              {codeExample}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
