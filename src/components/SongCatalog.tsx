import React from 'react';
import { Play, TrendingUp, DollarSign, Calendar, Music2, Youtube, PlayCircle, Radio, Mic2, LayoutGrid } from 'lucide-react';
import { SONGS, Song } from '../data/songs';

// --- Reusable Smart Link Component (Fixed for Light Mode) ---
const SmartLinks = ({ links }: { links: Song['links'] }) => {
    const platforms = [
        { id: 'spotify', icon: Music2, color: '#1DB954', label: 'Spotify', url: links.spotify },
        { id: 'apple', icon: PlayCircle, color: '#FA243C', label: 'Apple Music', url: links.apple },
        { id: 'ytMusic', icon: Youtube, color: '#FF0000', label: 'YT Music', url: links.ytMusic },
        { id: 'amazon', icon: Mic2, color: '#00A8E1', label: 'Amazon', url: links.amazon },
        { id: 'jiosaavn', icon: Radio, color: '#2BC5B4', label: 'JioSaavn', url: links.jiosaavn },
        { id: 'gaana', icon: Play, color: '#E72C33', label: 'Gaana', url: links.gaana },
    ];

    return (
        /* Changed bg-black/40 to bg-slate-50 */
        <div className="flex items-center gap-1 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
            {platforms.map((p) => (
                <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    title={p.label}
                    className="p-2.5 rounded-xl transition-all hover:scale-110 active:scale-95 group/icon relative"
                >
                    <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/icon:opacity-10 transition-opacity"
                        style={{ backgroundColor: p.color }}
                    />
                    <p.icon
                        size={16}
                        className="text-slate-400 transition-colors duration-300" // Changed text-zinc-600 to text-slate-400
                        onMouseEnter={(e) => (e.currentTarget.style.color = p.color)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                    />
                </a>
            ))}
        </div>
    );
};

export const SongCatalog = () => {
    return (
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex justify-between items-center mb-8 px-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <LayoutGrid size={14} className="text-indigo-600" />
                        <span className="text-[10px] font-black text-indigo-600 tracking-[0.4em] uppercase">Archive</span>
                    </div>
                    {/* Changed text-white to text-slate-900 */}
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Songs Repertoire</h3>
                    <p className="text-slate-500 text-[10px] font-black tracking-[0.2em] uppercase mt-1">Global Performance & Platform Assets</p>
                </div>
                {/* Changed glass to white bg with border */}
                <button className="bg-white px-8 py-3 rounded-2xl text-[10px] font-black text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all border border-slate-200 shadow-sm tracking-widest uppercase">
                    View Full Catalog
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {SONGS.map((song) => (
                    <div
                        key={song.id}
                        /* Changed bg and border for light theme visibility */
                        className="bg-white group flex flex-col xl:flex-row items-center justify-between p-6 rounded-[2.5rem] hover:bg-slate-50 transition-all border border-slate-200 shadow-sm hover:shadow-md relative overflow-hidden"
                    >
                        {/* Song Info */}
                        <div className="flex items-center gap-6 w-full xl:w-1/3">
                            {/* FIXED: Changed bg-zinc-900 (black box) to bg-slate-50 and text-slate-400 */}
                            <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-[1.5rem] flex items-center justify-center text-slate-400 font-black group-hover:text-indigo-600 group-hover:border-indigo-200 transition-all shadow-inner shrink-0 text-lg italic">
                                {song.id < 10 ? `0${song.id}` : song.id}
                            </div>
                            <div className="truncate">
                                {/* FIXED: Changed text-white to text-slate-900 */}
                                <h4 className="text-slate-900 font-black text-xl tracking-tight group-hover:text-indigo-600 transition-colors uppercase truncate italic">
                                    {song.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-2">
                                    {/* FIXED: Status badges */}
                                    <span className={`text-[8px] font-black uppercase tracking-widest ${song.trendColor} px-2.5 py-1 bg-slate-50 rounded-full border border-slate-200`}>
                                        {song.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-3 flex-1 w-full mt-8 xl:mt-0 px-8 gap-10">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 mb-1">
                                    <Play size={10} className="text-indigo-600" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Streams</span>
                                </div>
                                {/* FIXED: Changed text-white to text-slate-900 */}
                                <span className="text-slate-900 font-black text-2xl tracking-tighter">{song.streams}</span>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 mb-1">
                                    <DollarSign size={10} className="text-emerald-600" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Revenue</span>
                                </div>
                                <span className="text-emerald-600 font-black text-2xl tracking-tighter">{song.revenue}</span>
                            </div>

                            <div className="hidden md:flex flex-col">
                                <div className="flex items-center gap-2 text-slate-400 mb-1">
                                    <Calendar size={10} />
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Year</span>
                                </div>
                                {/* FIXED: Changed text-zinc-400 to text-slate-600 */}
                                <span className="text-slate-600 font-black text-lg italic">{song.date}</span>
                            </div>
                        </div>

                        {/* Links & Action */}
                        <div className="flex items-center gap-4 mt-8 xl:mt-0 w-full xl:w-auto justify-end">
                            <SmartLinks links={song.links} />
                            {/* FIXED: Button colors */}
                            <button className="p-5 rounded-[1.5rem] bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                <TrendingUp size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};