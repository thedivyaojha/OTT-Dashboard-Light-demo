import React from 'react';
import { Download, Music, User, Disc, TrendingUp, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { SONGS } from '../data/songs.ts';

const CRBT_DATA = [
    { name: 'Ke Jeno Dake', airtel: 45000, jio: 52000, vi: 21000 },
    { name: 'Tor Sathe', airtel: 38000, jio: 48000, vi: 18000 },
    { name: 'Tramline', airtel: 32000, jio: 41000, vi: 15000 },
    { name: 'Hey Namaji', airtel: 41000, jio: 39000, vi: 22000 },
];

export const Reports = ({ type }: { type: 'CRBT' | 'DSP' }) => {
    return (
        <div className="space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* HEADER SECTION */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-2">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-indigo-600"></div>
                        <span className="text-[10px] font-black text-indigo-600 tracking-[0.4em] uppercase">Intelligence Suite</span>
                    </div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
                        {type === 'CRBT' ? 'Operator' : 'DSP'} <span className="text-slate-300">Analytics</span>
                    </h2>
                </div>

                <div className="flex gap-3">
                    <button className="bg-white border border-slate-200 px-6 py-4 rounded-2xl text-[10px] font-black text-slate-500 tracking-widest hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                        <Filter size={14} /> FILTERS
                    </button>
                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest flex items-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95">
                        <Download size={16} /> EXPORT {type} REPORT
                    </button>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Revenue" value="₹24.8L" growth="+12.4%" />
                <StatCard label="Active Assets" value="142" growth="Stable" />
                <StatCard label="Top Operator" value="Jio" growth="42% Share" />
                <StatCard label="Avg Payout" value="₹1.2L" growth="+2.1%" />
            </div>

            {type === 'CRBT' ? (
                /* OPERATOR VIEW */
                <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 relative overflow-hidden group shadow-xl shadow-slate-200/50">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-3">
                            <TrendingUp className="text-indigo-600" /> Revenue vs Operator Split
                        </h3>
                    </div>

                    <div className="h-[450px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={CRBT_DATA} barGap={12} margin={{ bottom: 20 }}>
                                <CartesianGrid strokeDasharray="0 0" stroke="#f1f5f9" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="#94a3b8"
                                    fontSize={10}
                                    tick={{fontWeight: '900', fill: '#0f172a'}}
                                    axisLine={false}
                                    tickLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    fontSize={10}
                                    tick={{fontWeight: '900', fill: '#0f172a'}}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip
                                    cursor={{fill: '#f8fafc'}}
                                    content={({ active, payload }) => {
                                        if (active && payload) return (
                                            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xl">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-50 pb-2">{payload[0].payload.name}</p>
                                                {payload.map((p, i) => (
                                                    <div key={i} className="flex justify-between gap-8 py-1">
                                                        <span className="text-[9px] font-bold text-slate-500 uppercase">{p.name}</span>
                                                        <span className="text-[10px] font-black text-slate-900">₹{p.value?.toLocaleString()}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                        return null;
                                    }}
                                />

                                {/* LEGEND ADDED HERE */}
                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    iconType="circle"
                                    iconSize={10}
                                    wrapperStyle={{ paddingTop: '30px' }}
                                    formatter={(value) => (
                                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest px-2">
                                            {value}
                                        </span>
                                    )}
                                />

                                <Bar dataKey="jio" name="Jio Tunes" stackId="a" fill="#6366f1" barSize={40} />
                                <Bar dataKey="airtel" name="Airtel" stackId="a" fill="#ef4444" />
                                <Bar dataKey="vi" name="Vi" stackId="a" fill="#eab308" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ) : (
                /* DSP VIEW */
                <div className="space-y-10">
                    <ReportBentoList
                        title="Top Track Performance"
                        icon={<Music size={24}/>}
                        data={SONGS.slice(0, 6).map(s => ({label: s.title, val: s.revenue}))}
                        fullWidth={true}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <ReportBentoList
                            title="Artist Performance"
                            icon={<User size={24}/>}
                            data={[
                                {label: 'Ishaan Mitra', val: '₹4.2L'},
                                {label: 'Arijit Singh', val: '₹3.8L'},
                                {label: 'Shreya Ghoshal', val: '₹2.9L'},
                                {label: 'Anupam Roy', val: '₹2.1L'},
                            ]}
                        />
                        <ReportBentoList
                            title="Album Rankings"
                            icon={<Disc size={24}/>}
                            data={[
                                {label: 'Ke Jeno Dake (OST)', val: '₹8.4L'},
                                {label: 'Bengali Folk Hits', val: '₹5.1L'},
                                {label: 'Moner Thikana', val: '₹3.9L'},
                                {label: 'Rainy Day Melodies', val: '₹2.2L'},
                            ]}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

/* SUPPORTING COMPONENTS */
const StatCard = ({ label, value, growth }: any) => (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-indigo-500/20 transition-all">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{label}</p>
        <div className="flex items-end justify-between">
            <h4 className="text-3xl font-black text-slate-900 tracking-tighter">{value}</h4>
            <span className={`text-[10px] font-black ${growth.includes('+') ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-slate-500 bg-slate-50 border-slate-100'} px-3 py-1.5 rounded-xl border`}>
                {growth}
            </span>
        </div>
    </div>
);

const ReportBentoList = ({ title, icon, data, fullWidth = false }: any) => (
    <div className="bg-white p-10 rounded-[3.5rem] border border-slate-200 flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all group overflow-hidden relative shadow-sm">
        <div className="flex items-center gap-5 mb-10">
            <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">{icon}</div>
            <div>
                <h4 className="font-black text-2xl uppercase tracking-tighter text-slate-900 italic leading-none">{title}</h4>
                <p className="text-[9px] text-slate-400 font-black tracking-widest uppercase mt-1">Net Performance Insights</p>
            </div>
        </div>

        <div className={`grid ${fullWidth ? 'grid-cols-1 md:grid-cols-2 gap-x-8' : 'grid-cols-1'} gap-y-3`}>
            {data.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all group/item cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                            {i + 1}
                        </div>
                        <span className="text-slate-900 text-sm font-black tracking-tight uppercase italic">{item.label}</span>
                    </div>
                    <span className="text-base font-black italic text-indigo-600 tracking-tighter">{item.val}</span>
                </div>
            ))}
        </div>
    </div>
);