import React, { useState } from 'react';
import {
    Upload, Music, Send, UserCheck, PenTool,
    Calendar, Hash, Mic2, CheckCircle2, Clock,
    Info, FileAudio, Sparkles
} from 'lucide-react';

export const CreatorWorkspace = () => {
    const [submissions] = useState([
        { id: 101, title: "Ke Jeno Dake", date: "Dec 22", status: "Published", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-100" },
        { id: 102, title: "Tor Sathe Chole Jai", date: "Dec 23", status: "Review", color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-amber-100" },
    ]);

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12 pb-20">

            {/* INTRO HEADER */}
            <div className="px-4 flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-indigo-600"></div>
                        <span className="text-[10px] font-black text-indigo-600 tracking-[0.4em] uppercase">Artist Portal</span>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        Creator <span className="text-slate-300">Workspace</span>
                    </h3>
                    <p className="text-slate-500 text-xs font-black tracking-widest uppercase mt-4">
                        Asset Submission & Metadata Management
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[7px] text-slate-400 font-black tracking-[0.4em] uppercase mb-1 italic">Secure Upload Uplink: active</p>
                    <div className="flex items-center gap-2 justify-end">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="text-indigo-600 text-[9px] font-black tracking-widest uppercase">Encrypted Session</span>
                    </div>
                </div>
            </div>

            <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                {/* LEFT: SUBMISSION FORM (3 Cols) */}
                <div className="lg:col-span-3 bg-white p-10 rounded-[3.5rem] border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-200/50">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                        <Sparkles size={120} className="text-slate-900" />
                    </div>

                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100 text-white">
                            <Upload size={22} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Song & Meta Submission</h3>
                            <p className="text-slate-400 text-[9px] font-black tracking-widest uppercase italic">Ensure all fields match official ID documentation</p>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Title & Singer Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Song Title</label>
                                <input type="text" placeholder="e.g. Ke Jeno Dake" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 font-bold" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Mic2 size={12} className="text-indigo-600" /> Primary Singer
                                </label>
                                <input type="text" placeholder="Full legal name..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 font-bold" />
                            </div>
                        </div>

                        {/* Credits Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <PenTool size={12} className="text-indigo-600" /> Lyricist
                                </label>
                                <input type="text" placeholder="Lyricist name..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 font-bold" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <UserCheck size={12} className="text-indigo-600" /> Composer
                                </label>
                                <input type="text" placeholder="Composer name..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all placeholder:text-slate-300 font-bold" />
                            </div>
                        </div>

                        {/* Genre & Date Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Hash size={12} className="text-indigo-600" /> Musical Genre
                                </label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all appearance-none font-bold uppercase tracking-widest text-[10px]">
                                    <option>Select Genre</option>
                                    <option>Classical</option>
                                    <option>Folk</option>
                                    <option>Pop</option>
                                    <option>Indie</option>
                                    <option>Devotional</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2 flex items-center gap-2">
                                    <Calendar size={12} className="text-indigo-600" /> Planned Release
                                </label>
                                <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:border-indigo-600 outline-none transition-all font-bold" />
                            </div>
                        </div>

                        {/* File Upload Area */}
                        <div className="p-12 border-2 border-dashed border-slate-200 rounded-[3rem] text-center bg-slate-50 group cursor-pointer hover:border-indigo-600 hover:bg-white transition-all duration-500 relative">
                            <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 text-slate-400">
                                <FileAudio size={32} />
                            </div>
                            <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Upload Master Audio</p>
                            <p className="text-[10px] text-slate-400 mt-2 font-black uppercase tracking-[0.2em]">MP3 (320kbps) or WAV (24-bit) preferred</p>
                        </div>

                        <button className="w-full bg-slate-900 hover:bg-black text-white font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 shadow-xl transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-xs italic">
                            <Send size={18} className="italic" /> SUBMIT TO COMPLIANCE
                        </button>
                    </form>
                </div>

                {/* RIGHT: STATUS & INFO (2 Cols) */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="px-4">
                        <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">Recent Submissions</h3>
                        <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase mt-1">Real-time status tracking</p>
                    </div>

                    <div className="space-y-4">
                        {submissions.map((sub) => (
                            <div key={sub.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center justify-between group hover:bg-slate-50 transition-all border-l-4 shadow-sm" style={{borderLeftColor: sub.status === 'Published' ? '#10b981' : '#f59e0b'}}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 ${sub.color}`}>
                                        {sub.status === 'Published' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-black text-sm tracking-tight uppercase group-hover:text-indigo-600 transition-colors">{sub.title}</h4>
                                        <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">System ID: #{sub.id} • {sub.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${sub.bgColor} ${sub.color} border ${sub.borderColor}`}>
                                        {sub.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Card */}
                    <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute -bottom-4 -right-4 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                            <Info size={80} className="text-indigo-600" />
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <div className="p-2 bg-white rounded-xl h-fit border border-indigo-100 shadow-sm text-indigo-600">
                                <Info size={18} />
                            </div>
                            <div className="space-y-3">
                                <p className="text-[11px] text-indigo-900 font-black uppercase tracking-widest italic">Compliance Note</p>
                                <p className="text-[10px] text-indigo-700/70 font-medium leading-relaxed uppercase tracking-wider">
                                    All audio and metadata is verified by OTT Music Compliance before distribution.
                                    Review usually takes <span className="text-indigo-600 font-black">24-48 hours</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};