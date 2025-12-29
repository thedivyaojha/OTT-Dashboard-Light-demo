import React, { useState } from 'react';
import {
    LayoutDashboard, Music, CreditCard, MessageCircle, LogOut,
    Search, CheckCircle2, Upload, FileBarChart, ChevronDown, FileText
} from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    setView: (view: string) => void;
    currentView: string;
    onLogout: () => void;
}

// --- Sub-component for Sidebar Items (Fixed Colors) ---
const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all 
            ${active
            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
            : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
        }`}
    >
        <Icon size={20} className={active ? 'text-white' : 'text-slate-500'} />
        <span className="text-[10px] font-black tracking-[0.2em]">{label}</span>
    </button>
);

export const Layout = ({ children, setView, currentView, onLogout }: LayoutProps) => {
    const [isReportsOpen, setIsReportsOpen] = useState(false);

    return (
        /* Change: Global background is now Slate-50 and base text is Slate-900 */
        <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">

            {/* --- SIDEBAR --- */}
            <aside className="w-72 border-r border-slate-200 p-8 flex flex-col fixed h-full bg-white z-50">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                        <Music size={22} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-lg tracking-tighter leading-none uppercase text-slate-900">
                            OTT <span className="text-indigo-600">MUSIC</span>
                        </span>
                        <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] mt-1">ONLINE PORTAL</span>
                    </div>
                </div>

                <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
                    <SidebarItem icon={LayoutDashboard} label="Music Label / Artist" active={currentView === 'OVERVIEW'} onClick={() => setView('OVERVIEW')} />
                    <SidebarItem icon={Music} label="REPERTOIRE" active={currentView === 'SONGS'} onClick={() => setView('SONGS')} />
                    <SidebarItem icon={Upload} label="WORKSPACE" active={currentView === 'WORKSPACE'} onClick={() => setView('WORKSPACE')} />
                    <SidebarItem icon={FileText} label="RESOURCES" active={currentView === 'RESOURCES'} onClick={() => setView('RESOURCES')} />
                    <SidebarItem icon={CreditCard} label="REVENUE" active={currentView === 'REVENUE'} onClick={() => setView('REVENUE')} />

                    {/* Reports Dropdown */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setIsReportsOpen(!isReportsOpen)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                                currentView.includes('REPORTS')
                                    ? 'text-indigo-600 bg-indigo-50'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <FileBarChart size={20} />
                                <span className="text-[10px] font-black tracking-[0.2em]">REPORTS</span>
                            </div>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isReportsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isReportsOpen && (
                            <div className="ml-6 space-y-1 animate-in slide-in-from-top-2">
                                <button
                                    onClick={() => setView('REPORTS_CRBT')}
                                    className={`w-full text-left px-10 py-3 rounded-xl text-[9px] font-black tracking-widest transition-all ${
                                        currentView === 'REPORTS_CRBT' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    • CALLER TUNE
                                </button>
                                <button
                                    onClick={() => setView('REPORTS_DSP')}
                                    className={`w-full text-left px-10 py-3 rounded-xl text-[9px] font-black tracking-widest transition-all ${
                                        currentView === 'REPORTS_DSP' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    • DSP REPORTS
                                </button>
                            </div>
                        )}
                    </div>
                    <SidebarItem icon={MessageCircle} label="SUPPORT" active={currentView === 'SUPPORT'} onClick={() => setView('SUPPORT')} />
                </nav>

                <div className="pt-8 border-t border-slate-100">
                    <SidebarItem icon={LogOut} label="LOGOUT" onClick={onLogout} />
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 ml-72 p-12 max-w-7xl mx-auto w-full relative">

                {/* Fixed Header: White background, Slate text */}
                <header className="flex justify-between items-center mb-12 bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="relative w-20 h-20 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                            <Music className="text-indigo-600" size={32} />
                        </div>
                        <div>
                            <h2 className="text-slate-400 text-[10px] font-black tracking-[0.3em] uppercase italic">
                                {currentView.includes('REPORTS') ? 'Analytics & Recovery' : 'Artist Management'}
                            </h2>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mt-1 leading-none">
                                {currentView.replace('_', ' ')}
                            </h1>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        {/* Search Input: bg-slate-50 and text-slate-900 */}
                        <div className="bg-slate-50 hidden lg:flex items-center px-6 py-3 rounded-2xl border border-slate-200 focus-within:border-indigo-500 transition-all">
                            <Search size={18} className="text-slate-400 mr-3" />
                            <input
                                placeholder="Search workspace..."
                                className="bg-transparent border-none outline-none text-sm font-bold w-48 text-slate-900 placeholder:text-slate-300"
                            />
                        </div>
                        <div className="text-right ml-4">
                            <div className="flex items-center gap-2 justify-end">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-emerald-600 text-[10px] font-black tracking-widest uppercase">System Online</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* This is where your StatsGrid and SongCatalog appear */}
                <div className="animate-in fade-in duration-700">
                    {children}
                </div>
            </main>
        </div>
    );
};