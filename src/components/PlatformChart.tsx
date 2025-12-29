import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const DATA = [
    { name: 'YouTube Music', value: 45, color: '#FF0000' },
    { name: 'Spotify', value: 30, color: '#1DB954' },
    { name: 'Apple Music', value: 15, color: '#FA243C' },
    { name: 'JioSaavn', value: 10, color: '#00D8F5' },
];

export const PlatformChart = () => (
    <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 h-[480px] relative flex flex-col">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-slate-900 font-black uppercase tracking-tighter text-sm">Platform Engagement</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 italic">Market Share 2025</p>
            </div>
        </div>

        {/* CHART AREA */}
        <div className="flex-1 relative min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={DATA}
                        innerRadius={85}
                        outerRadius={115}
                        paddingAngle={10}
                        dataKey="value"
                        stroke="none"
                        cx="50%"
                        cy="50%"
                    >
                        {DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} className="outline-none hover:opacity-80 cursor-pointer" />
                        ))}
                    </Pie>
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xl">
                                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">{payload[0].name}</p>
                                        <p className="text-slate-900 font-black text-2xl italic leading-none">{payload[0].value}%</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>

            {/* CENTER TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">Total</p>
                <p className="text-3xl font-black text-slate-900 italic leading-tight">100%</p>
            </div>
        </div>

        {/* CUSTOM LEGEND: This is what was missing */}
        <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-slate-50">
            {DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                    <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                    />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-tight leading-none">
                            {item.name}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400">
                            {item.value}% Share
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);