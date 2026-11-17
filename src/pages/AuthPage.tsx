import React, { useState } from 'react';
import { loginUser, signupUser } from '../lib/auth';

export const AuthPage: React.FC<{ mode: 'login' | 'signup'; navigate: (p: string) => void }> = ({ mode, navigate }) => {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    if (isLogin) {
      loginUser(email, password);
    } else {
      signupUser(email, password);
    }

    navigate('/sandbox');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-[#07090e] font-mono">
      <div className="max-w-md w-full p-6 rounded-xl border border-slate-800 bg-[#0c0f17] shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-blue-600 text-black font-bold text-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-cyan-500/20">
            VX
          </div>
          <h2 className="text-xl font-bold text-slate-100">
            {isLogin ? 'Sign In to VEX Platform' : 'Create VEX Account'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Access your isolated VEX Sandbox & RPC node manager
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2.5 rounded bg-red-950/60 border border-red-800 text-red-400 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block text-slate-400 mb-1">Email Address:</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@vex.network"
              className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1">Password:</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs transition shadow-lg shadow-cyan-400/20 mt-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-5 text-center text-xs text-slate-400 pt-3 border-t border-slate-800">
          {isLogin ? (
            <span>
              Don't have an account?{' '}
              <button onClick={() => setIsLogin(false)} className="text-cyan-400 hover:underline">
                Sign Up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} className="text-cyan-400 hover:underline">
                Sign In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};