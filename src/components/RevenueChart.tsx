import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useState } from "react";

const DATA_SETS = {
    "6M": [
        { month: 'Jul', revenue: 95000 }, { month: 'Aug', revenue: 110000 },
        { month: 'Sep', revenue: 105000 }, { month: 'Oct', revenue: 140000 }, // Pujo season spike
        { month: 'Nov', revenue: 115000 }, { month: 'Dec', revenue: 125000 },
    ],
    "1Y": [
        { month: 'Jan', revenue: 98000 }, { month: 'Feb', revenue: 102000 },
        { month: 'Mar', revenue: 115000 }, { month: 'Apr', revenue: 108000 },
        { month: 'May', revenue: 120000 }, { month: 'Jun', revenue: 130000 },
        { month: 'Jul', revenue: 95000 }, { month: 'Aug', revenue: 110000 },
        { month: 'Sep', revenue: 105000 }, { month: 'Oct', revenue: 140000 },
        { month: 'Nov', revenue: 115000 }, { month: 'Dec', revenue: 125000 },
    ],
    "5Y": [
        { month: '2021', revenue: 850000 },
        { month: '2022', revenue: 1020000 },
        { month: '2023', revenue: 1150000 },
        { month: '2024', revenue: 1320000 },
        { month: '2025', revenue: 1420000 },
    ]
};

export const RevenueChart = () => {
    const [timeRange, setTimeRange] = useState<keyof typeof DATA_SETS>("6M");

    return (
        <div className="bg-white border border-slate-200 p-8 rounded-[3rem] mt-8 relative shadow-xl shadow-slate-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Revenue Trend</h3>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Showing period: {timeRange}</p>
                </div>

                <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
                    {(["6M", "1Y", "5Y"] as const).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                                timeRange === range ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'
                            }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DATA_SETS[timeRange]}>
                        <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px' }}
                            itemStyle={{ color: '#0f172a', fontSize: '12px', fontWeight: 'bold' }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={4} fill="url(#colorRev)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};