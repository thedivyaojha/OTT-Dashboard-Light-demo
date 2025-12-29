import React from 'react';
import { Play, Users, Calendar, ArrowUpRight, IndianRupee } from 'lucide-react';

export const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* TOTAL REVENUE CARD */}
            <StatCard
                label="Total Revenue"
                value="₹14.2L"
                growth="+1.1%"
                icon={<IndianRupee size={20} />}
                color="indigo"
            />

            {/* TOTAL STREAMS CARD */}
            <StatCard
                label="Total Streams"
                value="84.2M"
                growth="+0.8%"
                icon={<Play size={20} />}
                color="blue"
            />

            {/* MONTHLY LISTENERS CARD */}
            <StatCard
                label="Monthly Listeners"
                value="240K"
                growth="+2.4%"
                icon={<Users size={20} />}
                color="purple"
            />

            {/* AVG MONTHLY CARD */}
            <StatCard
                label="Avg. Monthly"
                value="₹1.15L"
                growth="+4.2%"
                icon={<Calendar size={20} />}
                color="emerald"
            />

        </div>
    );
};

// --- Internal Helper Card ---
const StatCard = ({ label, value, growth, icon, color }: any) => {
    // Mapping colors to specific Tailwind classes for the icon background
    const colorMap: any = {
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
        blue: "bg-blue-50 text-blue-600 border-blue-100",
        purple: "bg-purple-50 text-purple-600 border-purple-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    };

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            {/* Top Row: Icon and Growth */}
            <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl border ${colorMap[color]}`}>
                    {icon}
                </div>
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <ArrowUpRight size={12} strokeWidth={3} />
                    <span className="text-[10px] font-black">{growth}</span>
                </div>
            </div>

            {/* Bottom Row: Values */}
            <div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    {label}
                </p>
                {/* FIXED: Changed text-white to text-slate-900 */}
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">
                    {value}
                </h3>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        </div>
    );
};