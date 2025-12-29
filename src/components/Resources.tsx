import React from 'react';
import { FileText, Download, Search, Filter, ShieldCheck, FileType } from 'lucide-react';

const RESOURCES_DATA = [
    { id: 1, title: "Industry Meet 2025 Invite", type: "PDF", size: "2.4 MB", date: "Dec 20, 2025", category: "Events" },
    { id: 2, title: "Global Licensing Policy v4", type: "PDF", size: "1.2 MB", date: "Dec 22, 2025", category: "Legal" },
    { id: 3, title: "International Tour Guidelines", type: "PDF", size: "3.1 MB", date: "Dec 24, 2025", category: "Distribution" },
    { id: 4, title: "Revenue Sharing Annexure", type: "DOCX", size: "850 KB", date: "Dec 28, 2025", category: "Finance" },
];

export const Resources = () => {
    return (
        <div className="space-y-10 pb-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 px-4">
                <div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        Resource <span className="text-slate-300">Vault</span>
                    </h2>
                </div>
                <div className="bg-white flex items-center px-6 py-4 rounded-2xl border border-slate-200 flex-1 lg:w-64 shadow-sm">
                    <Search size={16} className="text-slate-400 mr-3" />
                    <input placeholder="SEARCH DOCUMENTS..." className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest w-full text-slate-900 placeholder:text-slate-300" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {RESOURCES_DATA.map((file) => (
                    <div key={file.id} className="bg-white p-8 rounded-[3rem] border border-slate-200 group hover:border-indigo-500/40 transition-all duration-500 shadow-sm hover:shadow-xl">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-6">
                            <FileType size={28} />
                        </div>
                        <h4 className="text-slate-900 font-black text-lg mb-4 uppercase tracking-tighter italic">{file.title}</h4>
                        <button className="w-full py-4 bg-slate-900 text-white hover:bg-black rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                            <Download size={14} /> DOWNLOAD
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};