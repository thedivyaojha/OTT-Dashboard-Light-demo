import React, { useState } from 'react';
import { Music, Lock, User, ArrowRight } from 'lucide-react';

export const Auth = ({ onLogin }: { onLogin: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulation: In the demo, any valid-looking input grants access
        if (email && password) onLogin();
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />

            <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-700">
                <div className="glass p-10 rounded-[3rem] border border-white/10 shadow-2xl bg-white/[0.01] backdrop-blur-xl">

                    {/* Brand Header */}
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                            <Music size={32} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tighter uppercase text-center leading-tight">
                            OTT Music <span className="text-indigo-500">Creators</span> Dashboard
                        </h1>
                        <p className="text-zinc-500 text-[9px] font-black tracking-[0.4em] uppercase mt-4 text-center">
                            Official Secure Artist Gateway
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Access ID</label>
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="artist@ottmusic.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-zinc-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-4">Security Key</label>
                            <div className="relative">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all transform active:scale-[0.98] shadow-xl uppercase tracking-widest text-xs"
                        >
                            Enter Portal <ArrowRight size={18} />
                        </button>
                    </form>

                    {/* Footer Info */}
                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-zinc-600 text-[8px] font-black tracking-[0.4em] uppercase">
                            System Architect: <span className="text-zinc-400">Divya Ojha</span>
                        </p>
                        <p className="text-[7px] text-zinc-800 font-bold mt-2 uppercase tracking-tighter">
                            Proprietary Software &copy; 2025 OTT SOLUTIONS PVT LTD
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};