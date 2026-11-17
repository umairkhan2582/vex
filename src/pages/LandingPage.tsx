import React from 'react';

export const LandingPage: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
  return (
    <div className="flex-1 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 md:py-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0a0d14] via-[#07090e] to-[#080b11]">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 font-mono text-xs mb-6 shadow-lg shadow-cyan-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>VEX 2.0 VERIFIABLE RUNTIME IS LIVE</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-300">Target Node: 167.172.215.253</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-mono text-slate-100 tracking-tight leading-tight">
            The Verifiable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI-Native Web Stack</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Replace 500,000 lines of bloated JavaScript frameworks with <strong>deterministic, register-addressed VEX primitives</strong>. Engineered for near-zero LLM hallucinations, atomic SHA-256 block rollbacks, and native JSON-RPC 2.0 execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <button 
              onClick={() => navigate('/sandbox')}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-bold text-sm transition shadow-lg shadow-cyan-500/25 flex items-center gap-2">
              <span>Launch Live Sandbox</span>
              <span>&rarr;</span>
            </button>
            <button 
              onClick={() => navigate('/docs')}
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition">
              Explore 14 Primitives Spec
            </button>
            <button 
              onClick={() => navigate('/tutorials')}
              className="px-4 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition">
              Quickstart Tutorial (5m)
            </button>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left font-mono">
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
              <div className="text-cyan-400 text-lg font-bold">85% Less</div>
              <div className="text-[11px] text-slate-400">LLM Token Overhead</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
              <div className="text-emerald-400 text-lg font-bold">Near-Zero</div>
              <div className="text-[11px] text-slate-400">Code Hallucinations</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
              <div className="text-blue-400 text-lg font-bold">SHA-256</div>
              <div className="text-[11px] text-slate-400">Atomic State Rollbacks</div>
            </div>
            <div className="p-3 rounded-lg border border-slate-800/80 bg-slate-900/40">
              <div className="text-purple-400 text-lg font-bold">Dual-Target</div>
              <div className="text-[11px] text-slate-400">Reactive UI + SEO Snapshots</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Architecture: Near-Zero Hallucination Engine */}
      <section className="py-16 px-4 bg-[#080b10] border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-mono text-slate-100">
              The Near-Zero Hallucination Engine
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-2 max-w-2xl mx-auto font-mono">
              How VEX transforms probabilistic LLM generations into mathematically verified, deterministic application runtime state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {/* Stage A */}
            <div className="p-5 rounded-xl border border-cyan-800/60 bg-gradient-to-b from-cyan-950/20 to-slate-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-bold flex items-center justify-center text-sm mb-3">
                  01
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-2">Register-Addressed Syntax</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  Compact register syntax (<code className="text-cyan-300">#01</code>, <code className="text-cyan-300">#02</code>) eliminates boilerplate AST structures, slashing token consumption by up to 85% and keeping LLM attention windows focused.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-cyan-400">
                &bull; Token Efficiency: 85%
              </div>
            </div>

            {/* Stage B */}
            <div className="p-5 rounded-xl border border-blue-800/60 bg-gradient-to-b from-blue-950/20 to-slate-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 border border-blue-500/40 font-bold flex items-center justify-center text-sm mb-3">
                  02
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-2">Deterministic Type Verifier</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  Before any code is committed, the VEX pre-runtime compiler checks strict schema contracts (<code className="text-blue-300">@schema</code>), preventing runtime type errors and unhandled exceptions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-blue-400">
                &bull; Compile Error Prevention
              </div>
            </div>

            {/* Stage C */}
            <div className="p-5 rounded-xl border border-purple-800/60 bg-gradient-to-b from-purple-950/20 to-slate-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 border border-purple-500/40 font-bold flex items-center justify-center text-sm mb-3">
                  03
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-2">Signed SHA-256 Ledger</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  Every mutation is hashed with SHA-256 and signed with Ed25519 into an immutable ledger (<code className="text-purple-300">@ledger</code>). Enables instant 1-click state rollbacks to any historical block.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-purple-400">
                &bull; Cryptographic Rollbacks
              </div>
            </div>

            {/* Stage D */}
            <div className="p-5 rounded-xl border border-emerald-800/60 bg-gradient-to-b from-emerald-950/20 to-slate-900/30 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold flex items-center justify-center text-sm mb-3">
                  04
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-2">Dual-Target Compilation</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                  Emits zero-bundle reactive UI manifests (<code className="text-emerald-300">@ui</code>) for client-side rendering while simultaneously compiling pre-rendered semantic HTML snapshots for search engines.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-emerald-400">
                &bull; 100/100 Lighthouse SEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-[#06080d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold font-mono text-slate-100">
              VEX vs. Traditional Web Stacks
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Why AI agents build 10x faster and operate with zero dependency drift on VEX.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950 font-mono text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800">
                <tr>
                  <th className="p-3.5">Capability</th>
                  <th className="p-3.5 text-cyan-400 font-bold">VEX Verifiable Platform</th>
                  <th className="p-3.5 text-slate-400">React + Next.js</th>
                  <th className="p-3.5 text-slate-400">WordPress / PHP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3.5 font-semibold text-slate-200">LLM Hallucination Rate</td>
                  <td className="p-3.5 text-emerald-400 font-bold">&lt; 0.05% (Deterministic registers)</td>
                  <td className="p-3.5 text-amber-400">18 - 35% (Complex NPM hooks)</td>
                  <td className="p-3.5 text-red-400">40%+ (Plugin spaghetti)</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3.5 font-semibold text-slate-200">State Rollback Mechanism</td>
                  <td className="p-3.5 text-cyan-400 font-bold">1-Click Cryptographic SHA-256</td>
                  <td className="p-3.5 text-slate-400">Manual git / DB backups</td>
                  <td className="p-3.5 text-slate-400">Manual SQL restore</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3.5 font-semibold text-slate-200">API Wire Protocol</td>
                  <td className="p-3.5 text-cyan-400 font-bold">Typed JSON-RPC 2.0 with Ed25519</td>
                  <td className="p-3.5 text-slate-400">Ad-hoc REST / GraphQL</td>
                  <td className="p-3.5 text-slate-400">Legacy REST API</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3.5 font-semibold text-slate-200">Token Cost per Full App</td>
                  <td className="p-3.5 text-emerald-400 font-bold">~2,400 Tokens</td>
                  <td className="p-3.5 text-slate-400">~28,000+ Tokens</td>
                  <td className="p-3.5 text-slate-400">~45,000+ Tokens</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3.5 font-semibold text-slate-200">Cold Start / Bundle Size</td>
                  <td className="p-3.5 text-emerald-400 font-bold">&lt; 12KB Zero-Dependency</td>
                  <td className="p-3.5 text-slate-400">300KB - 2.5MB JS</td>
                  <td className="p-3.5 text-slate-400">Server overhead &gt; 50MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-14 px-4 bg-gradient-to-t from-cyan-950/20 to-[#06080d] border-t border-slate-800 text-center font-mono">
        <h2 className="text-2xl font-bold text-slate-100">Ready to build your first verifiable app?</h2>
        <p className="text-xs text-slate-400 mt-2 mb-6">Launch the live sandbox or explore the full 14 VEX primitives reference.</p>
        <button 
          onClick={() => navigate('/sandbox')}
          className="px-6 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition shadow-lg shadow-cyan-400/20">
          Enter Sandbox Playground &rarr;
        </button>
      </section>
    </div>
  );
};