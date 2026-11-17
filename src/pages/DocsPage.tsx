import React from 'react';

export const DocsPage: React.FC = () => {
  const primitives = [
    { name: '@server', role: 'Runtime Hosting', desc: 'Defines host port, CORS rules, and edge process binding.' },
    { name: '@sandbox', role: 'Execution Isolation', desc: 'Isolates untrusted user scripts with memory and timeout boundaries.' },
    { name: '@ledger', role: 'Verifiable State Log', desc: 'Maintains SHA-256 hashed chain of state transitions for rollbacks.' },
    { name: '@pkg', role: 'Deterministic Dependencies', desc: 'Declares immutable packages with content-addressed hash locking.' },
    { name: '@schema', role: 'Type & Contract Guard', desc: 'Strict pre-runtime data verification preventing unhandled exceptions.' },
    { name: '@adapt', role: 'External Connector', desc: 'Bridges external APIs and database streams into VEX channels.' },
    { name: '@state', role: 'Reactive Core State', desc: 'Holds reactive variables, balances, and nonces on register #01.' },
    { name: '@stream', role: 'WebSocket Push Channel', desc: 'High-frequency binary & event pub/sub register stream.' },
    { name: '@fn', role: 'Pure Verifiable Function', desc: 'Deterministic stateless computation executed on register #02.' },
    { name: '@rpc', role: 'Typed JSON-RPC 2.0 Handler', desc: 'Entrypoint for client requests with Ed25519 signature checks.' },
    { name: '@auth', role: 'Cryptographic Identity', desc: 'Ed25519 public key verification and role-based permissions.' },
    { name: '@route', role: 'URL & Endpoint Mapping', desc: 'Maps HTTP paths and methods directly to register functions.' },
    { name: '@ui', role: 'Reactive View Register', desc: 'Zero-bundle reactive UI manifests compiled on register #03.' },
    { name: '@meta', role: 'SEO & Crawl Engine', desc: 'Emits static semantic HTML snapshots for search engines.' },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 max-w-5xl mx-auto w-full font-mono text-xs text-slate-300">
      <div className="border-b border-slate-800 pb-5 mb-8">
        <div className="text-cyan-400 text-[11px] mb-1">VEX SPECIFICATION 2.0</div>
        <h1 className="text-2xl font-bold text-slate-100">The 14 VEX Primitives Reference Guide</h1>
        <p className="text-slate-400 mt-2 text-xs font-sans leading-relaxed">
          The VEX framework replaces bloated JavaScript frameworks with 14 atomic, verifiable primitives that provide complete full-stack web and backend capabilities with deterministic guarantees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {primitives.map((prim, idx) => (
          <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-sm text-cyan-400">{prim.name}</span>
              <span className="text-[10px] text-slate-500 uppercase">{prim.role}</span>
            </div>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">{prim.desc}</p>
          </div>
        ))}
      </div>

      {/* JSON-RPC 2.0 Protocol & Security */}
      <div className="border-t border-slate-800 pt-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-100">JSON-RPC 2.0 Protocol & Security Specification</h2>
        <p className="text-xs text-slate-400 font-sans leading-relaxed">
          Traditional web stacks execute arbitrary string scripts received from APIs, opening critical attack surfaces. VEX strictly restricts all inbound client operations to typed JSON-RPC 2.0 envelopes verified via Ed25519 signatures and SHA-256 content digests.
        </p>
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs text-cyan-300 overflow-x-auto">
<pre>{`POST /rpc HTTP/1.1
Host: 167.172.215.253
Content-Type: application/json
X-Vex-Digest: 0x8f2a93c1b017e4da28994511082cde4418aef220b...
X-Vex-Signature: sig_ed25519_99af281c...

{
  "jsonrpc": "2.0",
  "id": "req-10492",
  "method": "state.commit",
  "params": {
    "register": "#01",
    "delta": 125.50
  }
}`}</pre>
        </div>
      </div>
    </div>
  );
};