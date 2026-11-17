import React from 'react';

export const LegalPages: React.FC<{ type: 'terms' | 'privacy' | 'acceptable-use' }> = ({ type }) => {
  return (
    <div className="flex-1 overflow-auto p-6 max-w-4xl mx-auto w-full font-mono text-xs text-slate-300">
      {type === 'terms' && (
        <div className="space-y-4 font-sans">
          <h1 className="text-2xl font-bold font-mono text-slate-100">Terms of Service</h1>
          <p className="text-slate-400 text-xs">Last Updated: November 2026</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            By accessing or using the VEX Verifiable AI-Native Application Platform, you agree to be bound by these Terms. VEX provides deterministic, register-addressed execution runtimes, JSON-RPC 2.0 endpoints, and sandboxed AI compilation tools.
          </p>
          <h2 className="text-base font-bold font-mono text-slate-200">1. Cryptographic Attestation</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            You acknowledge that state commits to VEX nodes are cryptographically signed and recorded in deterministic state ledgers. You are solely responsible for safeguarding your private keys and Ed25519 signature credentials.
          </p>
        </div>
      )}

      {type === 'privacy' && (
        <div className="space-y-4 font-sans">
          <h1 className="text-2xl font-bold font-mono text-slate-100">Privacy Policy</h1>
          <p className="text-slate-400 text-xs">Last Updated: November 2026</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Your privacy and sandbox isolation are fundamental to VEX's design.
          </p>
          <h2 className="text-base font-bold font-mono text-slate-200">1. BYOK (Bring Your Own Key) Security</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            All AI API keys (OpenAI, Google Gemini, Groq, OpenRouter) configured in the VEX console are stored <strong>strictly on your local device in browser LocalStorage</strong>. They are never transmitted, logged, or proxied through any VEX intermediary server.
          </p>
          <h2 className="text-base font-bold font-mono text-slate-200">2. Sandbox Isolation</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Code executed inside the VEX Sandbox runs within isolated memory compartments and cannot access other users' registered state cells without cryptographic authorization.
          </p>
        </div>
      )}

      {type === 'acceptable-use' && (
        <div className="space-y-4 font-sans">
          <h1 className="text-2xl font-bold font-mono text-slate-100">Acceptable Use Policy</h1>
          <p className="text-slate-400 text-xs">Last Updated: November 2026</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            This policy outlines prohibited activities across all connected VEX nodes, public devnets, and RPC endpoints.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
            <li>Attempting denial-of-service or flooding attacks against VEX JSON-RPC 2.0 nodes.</li>
            <li>Submitting malicious shellcode or exploiting compiler boundaries.</li>
            <li>Using VEX RPC relays to distribute unsolicited or deceptive network traffic.</li>
          </ul>
        </div>
      )}
    </div>
  );
};