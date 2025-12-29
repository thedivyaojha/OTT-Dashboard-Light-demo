import { ShieldAlert, LifeBuoy, FileText, Send } from 'lucide-react';

export const SupportGrievance = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

        {/* TOP CARDS: CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group">
                <ShieldAlert className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">Copyright Issue</h4>
                <p className="text-slate-500 text-[10px] font-bold mt-2 uppercase tracking-wide">Report unauthorized re-uploads of your songs.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
                <LifeBuoy className="text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">Payout Dispute</h4>
                <p className="text-slate-500 text-[10px] font-bold mt-2 uppercase tracking-wide">Queries regarding quarterly royalty distributions.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group">
                <FileText className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">Metadata Update</h4>
                <p className="text-slate-500 text-[10px] font-bold mt-2 uppercase tracking-wide">Change credits, lyrics, or album artwork.</p>
            </div>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                <h3 className="text-slate-900 font-black uppercase tracking-widest text-sm">File a New Grievance</h3>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Subject</label>
                    <input
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-900 text-sm font-bold outline-none focus:border-emerald-500 focus:bg-white transition-all placeholder:text-slate-300"
                        placeholder="What is the issue about?"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Detailed Description</label>
                    <textarea
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-900 text-sm font-bold outline-none focus:border-emerald-500 focus:bg-white transition-all h-40 placeholder:text-slate-300 resize-none"
                        placeholder="Please provide transaction IDs, song names, or relevant links..."
                    />
                </div>

                <button className="bg-slate-900 hover:bg-black text-white font-black py-5 px-8 rounded-2xl w-full transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg uppercase tracking-[0.2em] text-xs italic">
                    <Send size={18} /> SUBMIT SUPPORT TICKET
                </button>
            </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Average Response Time: <span className="text-emerald-600">24 Hours</span>
        </p>
    </div>
);