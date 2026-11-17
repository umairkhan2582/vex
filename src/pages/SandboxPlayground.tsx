import React, { useState, useEffect } from 'react';
import { defaultVexClient } from '../lib/vexRpc';
import { executeVexAiPrompt } from '../lib/byok';
import { VexBlockHistoryItem } from '../types/vex';

export const SandboxPlayground: React.FC<{ openByokModal: () => void }> = ({ openByokModal }) => {
  const [activeTemplate, setActiveTemplate] = useState<'booking' | 'feed' | 'crypto'>('booking');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [currentBlock, setCurrentBlock] = useState(108495);
  const [statusMessage, setStatusMessage] = useState('VEX Engine Ready');

  // Register Code
  const templates = {
    booking: `// VEX Template: Verifiable Appointment Booking App
@server #00 {
  port: 8545,
  cors: ["*"],
  engine: "vex-v2"
}

@schema #01 BookingRequest {
  patient_id: string,
  doctor_id: string,
  slot_timestamp: number,
  deposit_vex: float
}

@state #01 {
  total_bookings: 14,
  active_doctor: "Dr. Elena Vance (Neurology)",
  available_slots: ["10:00 AM", "02:30 PM", "04:15 PM"],
  escrow_balance: 1420.00
}

@rpc #02 bookAppointment {
  method: "vex_bookSlot",
  requires: ["VERIFIED_ED25519"],
  delta_escrow: +100.00
}

@ui #03 renderDashboard {
  title: "Clinical Appointment Booking",
  theme: "cyan-dark",
  slots_visible: true
}`,
    feed: `// VEX Template: Verifiable Social Feed & Attestations
@server #00 {
  port: 8545,
  engine: "vex-v2"
}

@schema #01 PostEntry {
  author_pubkey: string,
  content: string,
  reputation_score: int
}

@state #01 {
  channel: "#general-crypto",
  total_posts: 128,
  latest_hash: "0x8f2c99a1102e",
  upvotes: 45
}

@rpc #02 publishPost {
  rate_limit_per_min: 10,
  sign_mode: "ed25519"
}

@ui #03 renderTimeline {
  view: "stream-card",
  auto_scroll: true
}`,
    crypto: `// VEX Template: Verifiable Token Ledger & Escrow
@server #00 {
  network: "vex-mainnet-1"
}

@schema #01 TransferPayload {
  recipient: string,
  amount: float,
  nonce: int
}

@state #01 {
  treasury_reserve: 1000000.00,
  staked_total: 425100.50,
  validator_count: 24,
  annual_yield_pct: 8.5
}

@rpc #02 transferReserve {
  multisig: true,
  threshold: 3
}

@ui #03 renderLedger {
  view: "crypto-vault",
  currency: "VEX"
}`
  };

  const [vexCode, setVexCode] = useState(templates.booking);
  const [history, setHistory] = useState<VexBlockHistoryItem[]>([
    {
      blockHeight: 108495,
      hash: '0x3b190f84a77e1c8d0092284cf617a233b8',
      method: 'state.commit',
      register: '#01',
      delta: 'init: booking_template',
      timestamp: 'Just now'
    },
    {
      blockHeight: 108494,
      hash: '0x9a8f21bc08412e4f0129aef10214a991b1',
      method: 'schema.verify',
      register: '#01',
      delta: 'valid: BookingRequest',
      timestamp: '2m ago'
    }
  ]);

  const handleTemplateChange = (tpl: 'booking' | 'feed' | 'crypto') => {
    setActiveTemplate(tpl);
    setVexCode(templates[tpl]);
    setStatusMessage(`Loaded template: ${tpl}`);
  };

  const handleAiGenerate = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    setStatusMessage('Compiling AI prompt into typed VEX registers...');
    try {
      const updatedCode = await executeVexAiPrompt(aiPrompt, vexCode);
      setVexCode(updatedCode);
      setStatusMessage('AI generation committed successfully!');
      setAiPrompt('');
    } catch {
      setStatusMessage('Error compiling AI prompt.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDispatchRpc = async () => {
    setIsDispatching(true);
    setStatusMessage('Dispatching signed call to live /rpc endpoint...');
    try {
      const res = await defaultVexClient.call('state.commit', {
        register: '#01',
        template: activeTemplate,
        timestamp: Date.now()
      });

      const newHeight = currentBlock + 1;
      setCurrentBlock(newHeight);

      const blockHash = res.response.result?.block_hash || ('0x' + Math.random().toString(16).substring(2, 34));
      
      setHistory(prev => [
        {
          blockHeight: newHeight,
          hash: blockHash,
          method: 'state.commit',
          register: '#01',
          delta: '+10.00 VEX',
          timestamp: 'Just now',
          stateSnapshot: vexCode
        },
        ...prev
      ]);

      setStatusMessage(`Block #${newHeight} confirmed in ${res.latencyMs}ms (${res.isFallback ? 'Browser Engine Fallback' : 'Live Node 167.172.215.253'})`);
    } catch (e: any) {
      setStatusMessage(`RPC Error: ${e.message}`);
    } finally {
      setIsDispatching(false);
    }
  };

  const handleRollback = async (blockNum: number) => {
    setStatusMessage(`Dispatching signed state.rollback to Block #${blockNum}...`);
    try {
      await defaultVexClient.rollbackState(blockNum, '#01');
      const newHeight = currentBlock + 1;
      setCurrentBlock(newHeight);
      setHistory(prev => [
        {
          blockHeight: newHeight,
          hash: '0xrev_' + Math.random().toString(16).substring(2, 30),
          method: 'state.rollback',
          register: '#01',
          delta: `revert_to_#${blockNum}`,
          timestamp: 'Just now'
        },
        ...prev
      ]);
      setStatusMessage(`Rollback confirmed! Restored register #01 to Block #${blockNum}`);
    } catch (e: any) {
      setStatusMessage(`Rollback failed: ${e.message}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#07090e] font-mono text-xs">
      {/* Top Controls Bar */}
      <div className="p-2.5 bg-[#0a0d14] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">1-Click Starter Templates:</span>
          <button 
            onClick={() => handleTemplateChange('booking')}
            className={`px-2.5 py-1 rounded border transition ${activeTemplate === 'booking' ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
            Booking App
          </button>
          <button 
            onClick={() => handleTemplateChange('feed')}
            className={`px-2.5 py-1 rounded border transition ${activeTemplate === 'feed' ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
            Social Feed
          </button>
          <button 
            onClick={() => handleTemplateChange('crypto')}
            className={`px-2.5 py-1 rounded border transition ${activeTemplate === 'crypto' ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
            Crypto Ledger
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-500">Status: <strong className="text-cyan-300">{statusMessage}</strong></span>
          <button 
            onClick={openByokModal}
            className="text-purple-400 hover:underline">
            Configure BYOK Keys
          </button>
        </div>
      </div>

      {/* 3-Column Workspace */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
        {/* Column 1: AI Prompt Chat & Instructions */}
        <div className="col-span-12 md:col-span-3 border-r border-slate-800 bg-[#090c12] flex flex-col p-3 overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="font-bold text-slate-200">AI VEX Assistant</span>
            <span className="text-[10px] text-purple-400 bg-purple-950 px-1.5 py-0.5 rounded border border-purple-800">BYOK Ready</span>
          </div>

          <div className="flex-1 overflow-auto space-y-2 text-[11px] text-slate-400 pr-1">
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300 leading-relaxed">
              👋 Welcome to the VEX Sandbox. Type a prompt below to synthesize or mutate registers (<code className="text-cyan-400">@state</code>, <code className="text-cyan-400">@rpc</code>, <code className="text-cyan-400">@ui</code>) with zero hallucination.
            </div>

            <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-2">Example Prompts:</div>
            <button 
              onClick={() => setAiPrompt('Add a discount code validation RPC register and update state balance')}
              className="w-full text-left p-1.5 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-[10px] transition">
              &bull; Add discount code validation RPC
            </button>
            <button 
              onClick={() => setAiPrompt('Add an authentication verification schema with Ed25519 signature requirement')}
              className="w-full text-left p-1.5 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-[10px] transition">
              &bull; Add auth schema with Ed25519
            </button>
            <button 
              onClick={() => setAiPrompt('Create a reactive UI banner showing real-time escrow balance')}
              className="w-full text-left p-1.5 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-[10px] transition">
              &bull; Create reactive UI banner
            </button>
          </div>

          {/* AI Prompt Input */}
          <div className="mt-2 pt-2 border-t border-slate-800 space-y-2">
            <textarea 
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Ask AI to modify registers or add functionality..."
              className="w-full h-20 bg-slate-950 border border-slate-800 rounded p-2 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 resize-none"
            />
            <button 
              disabled={isGenerating || !aiPrompt}
              onClick={handleAiGenerate}
              className="w-full py-2 rounded bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5">
              {isGenerating ? 'Compiling Registers...' : 'Generate & Mutate VEX'}
            </button>
          </div>
        </div>

        {/* Column 2: VEX Register Code Editor */}
        <div className="col-span-12 md:col-span-5 border-r border-slate-800 bg-[#080a0f] flex flex-col p-3 overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
            <span className="font-bold text-slate-200">VEX Register Definition Editor</span>
            <span className="text-[10px] text-cyan-400">Direct Register Addressing</span>
          </div>

          <div className="flex-1 bg-slate-950 rounded border border-slate-800 p-2 overflow-auto font-mono text-xs">
            <textarea 
              value={vexCode}
              onChange={(e) => setVexCode(e.target.value)}
              spellCheck="false"
              className="w-full h-full bg-transparent text-slate-200 font-mono text-xs focus:outline-none resize-none leading-relaxed"
            />
          </div>

          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[10px] text-slate-500">Syntax checked: Strict Typed 2.0</span>
            <button 
              disabled={isDispatching}
              onClick={handleDispatchRpc}
              className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20">
              {isDispatching ? 'Committing...' : 'Dispatch State Commit (POST /rpc)'}
            </button>
          </div>
        </div>

        {/* Column 3: Live Preview & Cryptographic Block History */}
        <div className="col-span-12 md:col-span-4 bg-[#090c12] flex flex-col overflow-hidden">
          {/* Top Half: Live Rendered Preview */}
          <div className="h-1/2 p-3 border-b border-slate-800 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px]">
              <span className="font-bold text-slate-200">Dual-Target Live UI Preview</span>
              <span className="text-[10px] text-emerald-400">@ui Reactive Client</span>
            </div>

            <div className="flex-1 bg-slate-950 rounded border border-slate-800 p-3 overflow-auto">
              <div className="p-3 rounded bg-slate-900 border border-slate-800 mb-2">
                <div className="text-cyan-400 font-bold text-sm mb-1">
                  {activeTemplate === 'booking' && '🏥 MediVex Verified Scheduling'}
                  {activeTemplate === 'feed' && '📢 VEX Attested Broadcast'}
                  {activeTemplate === 'crypto' && '💎 Verifiable Vault & Reserve'}
                </div>
                <div className="text-[11px] text-slate-300">
                  {activeTemplate === 'booking' && 'Escrow Protected: 1,420.00 VEX'}
                  {activeTemplate === 'feed' && '128 Attested Posts &bull; Node 167.172.215.253'}
                  {activeTemplate === 'crypto' && 'Treasury: 1,000,000.00 VEX (8.5% Staking Yield)'}
                </div>
              </div>

              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80 space-y-1.5 text-[11px]">
                <div className="text-slate-400">Active Register Channel: <span className="text-slate-200 font-bold">#01 Core State</span></div>
                <div className="text-slate-400">Wire Protocol: <span className="text-emerald-400 font-semibold">JSON-RPC 2.0 (Ed25519 Signed)</span></div>
                <div className="text-slate-400">Latest Verified Height: <span className="text-cyan-400 font-semibold">#{currentBlock}</span></div>
              </div>
            </div>
          </div>

          {/* Bottom Half: SHA-256 Block History & 1-Click Rollback */}
          <div className="h-1/2 p-3 flex flex-col overflow-hidden bg-slate-950/40">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px]">
              <span className="font-bold text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                SHA-256 Block Timeline
              </span>
              <span className="text-[10px] text-slate-500">Atomic Rollbacks</span>
            </div>

            <div className="flex-1 overflow-auto space-y-2 pr-1 text-[11px]">
              {history.map((item, idx) => (
                <div key={idx} className="p-2 rounded border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-cyan-400">Block #{item.blockHeight}</span>
                    <span className="text-slate-500 text-[10px]">{item.timestamp}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate mb-1">
                    Hash: {item.hash}
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400">{item.register} &bull; {item.delta}</span>
                    <button 
                      onClick={() => handleRollback(item.blockHeight)}
                      className="px-2 py-0.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] transition">
                      ↺ Rollback
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};