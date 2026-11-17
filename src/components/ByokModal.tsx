import React, { useState, useEffect } from 'react';
import { loadByokConfig, saveByokConfig } from '../lib/byok';
import { ByokConfig } from '../types/vex';

interface ByokModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ByokModal: React.FC<ByokModalProps> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<ByokConfig>(loadByokConfig());
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    if (isOpen) setConfig(loadByokConfig());
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    saveByokConfig(config);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0c0f17] border border-slate-800 rounded-xl max-w-md w-full p-5 font-mono text-xs text-slate-200 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 text-base">🔑</span>
            <h3 className="font-bold text-sm text-slate-100">BYOK: Bring Your Own AI Key</h3>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white">✕</button>
        </div>

        <p className="text-[11px] text-slate-400 my-3 leading-relaxed">
          Keys are stored <strong>strictly locally in your browser's LocalStorage</strong>. They are never sent to any intermediary server—calls go directly to your chosen AI inference provider.
        </p>

        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Provider:</label>
            <select 
              value={config.provider}
              onChange={(e) => setConfig({ ...config, provider: e.target.value as any })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-slate-200 focus:outline-none focus:border-cyan-500">
              <option value="groq">Groq (Ultra-Low Latency Llama 3.3)</option>
              <option value="openai">OpenAI (GPT-4o / o1)</option>
              <option value="gemini">Google Gemini (Gemini 2.5 Flash / Pro)</option>
              <option value="openrouter">OpenRouter (Multi-Model Gateway)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">API Key:</label>
            <input 
              type="password"
              placeholder="sk-..."
              value={config.apiKey}
              onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-cyan-300 font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Model Name:</label>
            <input 
              type="text"
              value={config.model}
              onChange={(e) => setConfig({ ...config, model: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-slate-300 font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800">
          <span className="text-[11px] text-emerald-400">{savedNotice ? '✓ Saved locally!' : ''}</span>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">Cancel</button>
            <button onClick={handleSave} className="px-4 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-semibold">Save Keys</button>
          </div>
        </div>
      </div>
    </div>
  );
};