import React from 'react';

export const Footer: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-8 px-4 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-cyan-500 text-black font-bold flex items-center justify-center text-[10px]">VX</div>
          <span className="text-slate-200 font-semibold">VEX Application Ecosystem</span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-slate-500">Verifiable Typed JSON-RPC 2.0</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <button onClick={() => navigate('/terms')} className="hover:text-cyan-400">Terms of Service</button>
          <button onClick={() => navigate('/privacy')} className="hover:text-cyan-400">Privacy Policy</button>
          <button onClick={() => navigate('/acceptable-use')} className="hover:text-cyan-400">Acceptable Use</button>
          <button onClick={() => navigate('/docs')} className="hover:text-cyan-400">Protocol Spec</button>
          <a href="https://github.com/umairkhan2582/vex" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub (Private)</a>
        </div>

        <div className="text-slate-600">
          &copy; 2026 The Seven Chain Networks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};