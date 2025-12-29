import React from 'react';
import { Download, ArrowUpRight, Globe } from 'lucide-react';
import { RevenueChart } from './RevenueChart';
import { PlatformChart } from './PlatformChart';

const PAYOUT_HISTORY = [
    { id: 'TXN-9021', date: 'Dec 01, 2025', amount: '₹1,12,400', status: 'Settled', method: 'Direct Deposit' },
    { id: 'TXN-8842', date: 'Sep 01, 2025', amount: '₹1,08,900', status: 'Settled', method: 'Direct Deposit' },
    { id: 'TXN-8710', date: 'Jun 01, 2025', amount: '₹1,24,300', status: 'Settled', method: 'Direct Deposit' },
];

export const RevenuePortal = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-10">

            {/* TOP ROW: TREND & PLATFORM SPLIT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div className="flex flex-col gap-8">
                    <PlatformChart />

                    {/* NEXT PAYOUT CARD */}
                    <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40 bg-gradient-to-br from-indigo-50/50 to-transparent">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Next Payout</p>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic leading-none">₹1,18,240.00</h2>
                        <div className="flex items-center gap-2 mt-4 text-emerald-600 text-[10px] font-black tracking-widest uppercase">
                            <ArrowUpRight size={14} />
                            <span>Estimated for Mar 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: GEOGRAPHICS & PAYOUT LEDGER */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-20">

                {/* REGIONAL PERFORMANCE */}
                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">Geo-Revenue</h3>
                            <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Top Earning Regions</p>
                        </div>
                        <Globe className="text-slate-100" size={32} />
                    </div>

                    <div className="space-y-8">
                        <RegionBar label="Kolkata, WB" percent={88} amount="₹9.2L" />
                        <RegionBar label="Dhaka, BD" percent={65} amount="₹3.1L" />
                        <RegionBar label="Mumbai, MH" percent={42} amount="₹1.4L" />
                        <RegionBar label="London, UK" percent={22} amount="₹0.5L" />
                    </div>
                </div>

                {/* PAYOUT HISTORY LEDGER */}
                <div className="lg:col-span-3 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40">
                    <div className="flex items-center justify-between mb-8 px-2">
                        <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">Payout History</h3>
                        <p className="text-[7px] text-slate-300 font-black tracking-[0.5em] uppercase">Auth Ledger v2.0</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                            <tr className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] border-b border-slate-100">
                                <th className="pb-4 px-4 font-black">Ref ID</th>
                                <th className="pb-4 px-4 font-black">Settlement Date</th>
                                <th className="pb-4 px-4 text-right font-black">Net Amount</th>
                                <th className="pb-4 px-4 text-center font-black">Status</th>
                            </tr>
                            </thead>
                            <tbody className="text-sm">
                            {PAYOUT_HISTORY.map((payout) => (
                                <tr key={payout.id} className="group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-none">
                                    <td className="py-6 px-4 font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase italic">{payout.id}</td>
                                    <td className="py-6 px-4 text-slate-500 font-bold">{payout.date}</td>
                                    <td className="py-6 px-4 text-right font-black text-slate-900 text-lg tracking-tighter">{payout.amount}</td>
                                    <td className="py-6 px-4">
                                        <div className="flex justify-center">
                                                <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-4 py-1.5 rounded-full uppercase border border-emerald-100 tracking-widest">
                                                    {payout.status}
                                                </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <button className="w-full mt-10 py-5 bg-slate-900 hover:bg-black rounded-2xl text-[10px] font-black text-white transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] tracking-widest uppercase italic">
                        <Download size={16} /> Download Full Tax Invoice (PDF)
                    </button>
                </div>

            </div>
        </div>
    );
};

// --- Internal Helper for Regional Bars (Visibility Fixed) ---
const RegionBar = ({ label, percent, amount }: { label: string, percent: number, amount: string }) => (
    <div className="group cursor-default">
        <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-900 transition-colors">{label}</span>
            <span className="text-slate-900 font-black text-sm italic">{amount}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div
                className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-1000 rounded-full"
                style={{ width: `${percent}%` }}
            />
        </div>
    </div>
);