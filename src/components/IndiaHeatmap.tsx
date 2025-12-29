const REGIONS = [
    { state: 'West Bengal', density: 95, label: 'Kolkata Hub' },
    { state: 'Maharashtra', density: 70, label: 'Mumbai/Pune' },
    { state: 'Delhi NCR', density: 65, label: 'Northern Base' },
    { state: 'Karnataka', density: 40, label: 'Bangalore' },
    { state: 'Bangladesh', density: 85, label: 'International' },
];

export const IndiaHeatmap = () => (
    <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
        <h3 className="text-slate-900 font-black uppercase tracking-widest text-xs mb-8">Listener Density</h3>
        <div className="space-y-5">
            {REGIONS.map((reg) => (
                <div key={reg.state}>
                    <div className="flex justify-between text-[10px] mb-2 font-black uppercase tracking-widest">
                        <span className="text-slate-400">{reg.state}</span>
                        <span className="text-slate-900">{reg.density}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${reg.density}%` }} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);