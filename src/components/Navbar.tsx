import React, { useState, useEffect } from 'react';
import { getStoredUser, logoutUser, VexUser } from '../lib/auth';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  openByokModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, openByokModal }) => {
  const [user, setUser] = useState<VexUser | null>(getStoredUser());
  const [endpointLatency, setEndpointLatency] = useState<number>(24);

  useEffect(() => {
    setUser(getStoredUser());
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 bg-[#080b11]/90 backdrop-blur border-b border-slate-800/80 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-mono font-bold text-black text-sm shadow-lg shadow-cyan-500/20">
            VX
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm tracking-wider text-slate-100">VEX PLATFORM</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800">RPC 2.0</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono hidden sm:block">Verifiable AI-Native Architecture</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          <button 
            onClick={() => navigate('/')} 
            className={`px-3 py-1.5 rounded transition ${currentPath === '/' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60' : 'text-slate-300 hover:text-white'}`}>
            Overview
          </button>
          <button 
            onClick={() => navigate('/sandbox')} 
            className={`px-3 py-1.5 rounded transition ${currentPath === '/sandbox' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60' : 'text-slate-300 hover:text-white'}`}>
            ⚡ Sandbox
          </button>
          <button 
            onClick={() => navigate('/docs')} 
            className={`px-3 py-1.5 rounded transition ${currentPath === '/docs' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60' : 'text-slate-300 hover:text-white'}`}>
            Primitives Docs
          </button>
          <button 
            onClick={() => navigate('/tutorials')} 
            className={`px-3 py-1.5 rounded transition ${currentPath === '/tutorials' ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60' : 'text-slate-300 hover:text-white'}`}>
            Quickstart
          </button>
        </nav>

        {/* Live RPC Status Badge & Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Node:</span>
            <span className="text-cyan-300 font-medium">167.172.215.253</span>
            <span className="text-emerald-400">⚡ {endpointLatency}ms</span>
          </div>

          <button 
            onClick={openByokModal}
            className="px-2.5 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition flex items-center gap-1.5 text-xs">
            <span className="text-purple-400">🔑</span>
            <span className="hidden sm:inline">BYOK Keys</span>
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-slate-300 text-xs hidden sm:inline">@{user.name}</span>
              <button 
                onClick={() => { logoutUser(); setUser(null); navigate('/login'); }}
                className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => navigate('/login')}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition">
                Login
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition shadow-sm shadow-cyan-500/20">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};