import { IndianRupee, Users, Play, TrendingUp, LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string;
    trend: string;
    icon: LucideIcon;
    color: string;
}

const StatCard = ({ title, value, trend, icon: Icon, color }: StatCardProps) => (
    <div className="glass p-6 rounded-[2rem] relative group overflow-hidden transition-all hover:scale-[1.02] border border-white/5">
        <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
        <div className="flex justify-between items-start mb-6">
            <div className={`p-4 rounded-2xl ${color} bg-opacity-20`}>
                <Icon size={24} className="text-white" />
            </div>
            <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <span className="text-white text-[10px] font-black">{trend}</span>
            </div>
        </div>
        <h3 className="text-zinc-500 text-xs font-black uppercase tracking-widest">{title}</h3>
        <p className="text-3xl font-black text-white mt-1 tracking-tighter">{value}</p>
    </div>
);

export const StatsGrid = () => {
    return (
        <div className="space-y-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Estimated Revenue" value="₹14.2L" trend="+2.4%" icon={IndianRupee} color="bg-emerald-500" />
                <StatCard title="Total Streams" value="84.2M" trend="+1.1%" icon={Play} color="bg-blue-500" />
                <StatCard title="Monthly Listeners" value="240K" trend="+0.8%" icon={Users} color="bg-purple-500" />
                <StatCard title="Avg. Monthly" value="₹1.15L" trend="+2.4%" icon={TrendingUp} color="bg-orange-500" />
            </div>
            <div className="flex justify-end px-6 opacity-[0.08]">
                <p className="text-[7px] font-black text-zinc-500 tracking-[0.6em] uppercase"></p>
            </div>
        </div>
    );
};