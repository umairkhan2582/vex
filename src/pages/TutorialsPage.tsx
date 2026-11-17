import React from 'react';

export const TutorialsPage: React.FC<{ navigate: (p: string) => void }> = ({ navigate }) => {
  return (
    <div className="flex-1 overflow-auto p-6 max-w-4xl mx-auto w-full font-mono text-xs text-slate-300">
      <div className="border-b border-slate-800 pb-5 mb-8">
        <div className="text-cyan-400 text-[11px] mb-1">STEP-BY-STEP QUICKSTART</div>
        <h1 className="text-2xl font-bold text-slate-100">Build and Verify Your First App in VEX</h1>
        <p className="text-slate-400 mt-2 text-xs font-sans leading-relaxed">
          Learn how to define a schema, initialize state on register #01, expose a typed RPC handler, and deploy in under 5 minutes.
        </p>
      </div>

      <div className="space-y-8 font-sans">
        {/* Step 1 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-cyan-400 font-bold text-sm">
            <span>STEP 1:</span> <span>Define Schema & State Registers</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Create an immutable schema contract to prevent runtime type errors, and initialize your starting state variables on register <code className="font-mono text-cyan-300">#01</code>.
          </p>
          <div className="bg-slate-950 p-3.5 rounded border border-slate-800 font-mono text-xs text-slate-200">
<pre>{`@schema #01 CounterState {
  count: int,
  last_updated: number
}

@state #01 {
  count: 0,
  last_updated: 1794903540
}`}</pre>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-blue-400 font-bold text-sm">
            <span>STEP 2:</span> <span>Expose a Signed RPC Handler</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Declare a typed RPC method on execution channel <code className="font-mono text-blue-300">#02</code> that modifies state with deterministic hash attestation.
          </p>
          <div className="bg-slate-950 p-3.5 rounded border border-slate-800 font-mono text-xs text-slate-200">
<pre>{`@rpc #02 incrementCounter {
  method: "vex_increment",
  requires_signature: true,
  action: { count: count + 1 }
}`}</pre>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-purple-400 font-bold text-sm">
            <span>STEP 3:</span> <span>Bind Reactive UI Manifest</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Emit a zero-bundle reactive view on register <code className="font-mono text-purple-300">#03</code> for instant client rendering.
          </p>
          <div className="bg-slate-950 p-3.5 rounded border border-slate-800 font-mono text-xs text-slate-200">
<pre>{`@ui #03 renderCounterView {
  component: "CounterDisplay",
  reactive_binding: "#01.count"
}`}</pre>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <button 
            onClick={() => navigate('/sandbox')}
            className="px-5 py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs font-mono transition">
            Test this in the Live Sandbox &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};