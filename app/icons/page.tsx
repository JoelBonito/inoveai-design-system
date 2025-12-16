"use client";

import React, { useState, useMemo } from 'react';
import { Search, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

// Common Material Symbols
const MATERIAL_SYMBOLS = [
    "search", "home", "settings", "menu", "close", "add", "delete", "edit",
    "check", "print", "share", "download", "upload", "cloud", "mail", "person",
    "notifications", "favorite", "arrow_forward", "arrow_back", "expand_more",
    "expand_less", "check_circle", "warning", "info", "help", "lock", "lock_open",
    "visibility", "visibility_off", "calendar_today", "schedule", "language",
    "dashboard", "analytics", "assignment", "pending", "done", "done_all",
    "account_circle", "logout", "login", "refresh", "sync", "wifi", "signal_cellular_4_bar",
    "battery_full", "bluetooth", "brightness_4", "dark_mode", "light_mode",
    "grid_view", "list", "filter_list", "sort", "tune", "search_off",
    "navigate_next", "navigate_before", "first_page", "last_page", "more_vert",
    "more_horiz", "apps", "arrow_drop_down", "arrow_drop_up", "chevron_right",
    "chevron_left", "folder", "folder_open", "create_new_folder", "file_download",
    "file_upload", "attach_file", "save", "save_alt", "content_copy", "content_paste",
    "content_cut", "undo", "redo", "history", "palette", "brush", "image",
    "photo_camera", "videocam", "mic", "volume_up", "volume_off", "play_arrow",
    "pause", "stop", "replay", "fast_forward", "fast_rewind", "movie", "subscriptions"
];

const lucideIconList = Object.keys(LucideIcons).filter(key => key !== 'createLucideIcon' && key !== 'default');

export default function IconsPage() {
    const [activeTab, setActiveTab] = useState<'material' | 'lucide'>('material');
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState<string | null>(null);

    const filteredMaterial = useMemo(() =>
        MATERIAL_SYMBOLS.filter(icon => icon.toLowerCase().includes(search.toLowerCase())),
        [search]);

    const [visibleCount, setVisibleCount] = useState(200);

    const filteredLucide = useMemo(() =>
        lucideIconList.filter(icon => icon.toLowerCase().includes(search.toLowerCase())),
        [search]);

    const displayLucide = filteredLucide.slice(0, visibleCount);

    // Reset pagination when search or tab changes
    React.useEffect(() => {
        setVisibleCount(200);
    }, [search, activeTab]);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 200, filteredLucide.length));
    };

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(code);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)] mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-black text-[var(--foreground)] tracking-tight mb-2">
                                Biblioteca de Ícones
                            </h1>
                            <p className="text-[var(--text-secondary)]">
                                Navegue e pesquise através dos nossos conjuntos de ícones suportados.
                                {activeTab === 'lucide' ? ' Ícones Lucide são componentes React tree-shakable.' : ' Material Symbols dependem da fonte de ligadura do Google Fonts.'}
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] w-4 h-4" />
                            <input
                                type="text"
                                placeholder={`Buscar ${activeTab === 'material' ? filteredMaterial.length : filteredLucide.length} ícones...`}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-md pl-10 pr-4 py-2 text-[var(--foreground)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-4 bg-[var(--surface)] p-1 rounded-md border border-[var(--border)] w-fit mb-8">
                        <button
                            onClick={() => setActiveTab('material')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'material' ? 'bg-primary text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
                        >
                            Material Symbols
                        </button>
                        <button
                            onClick={() => setActiveTab('lucide')}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'lucide' ? 'bg-primary text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
                        >
                            Lucide React
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 pb-20">
                        {activeTab === 'material' ? (
                            filteredMaterial.map((icon) => (
                                <button
                                    key={icon}
                                    onClick={() => copyCode(`<span className="material-symbols-outlined">${icon}</span>`)}
                                    className="group flex flex-col items-center justify-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-primary/50 hover:bg-[var(--surface)]/80 transition-all relative"
                                >
                                    <span className="material-symbols-outlined text-4xl mb-3 text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors">
                                        {icon}
                                    </span>
                                    <span className="text-xs text-[var(--text-secondary)] font-mono truncate w-full text-center group-hover:text-primary transition-colors">
                                        {icon}
                                    </span>

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center rounded-xl opacity-0 transition-opacity ${copied?.includes(icon) ? 'opacity-100' : 'group-hover:opacity-0'}`}>
                                        <div className="text-white text-xs font-bold flex flex-col items-center gap-1">
                                            <Check size={20} />
                                            COPIADO
                                        </div>
                                    </div>
                                </button>
                            ))
                        ) : (
                            displayLucide.map((iconName) => {
                                // @ts-ignore
                                const Icon = LucideIcons[iconName];
                                if (!Icon) return null;

                                const code = `<${iconName} />`;

                                return (
                                    <button
                                        key={iconName}
                                        onClick={() => copyCode(code)}
                                        className="group flex flex-col items-center justify-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-primary/50 hover:bg-[var(--surface)]/80 transition-all relative"
                                    >
                                        <Icon className="w-8 h-8 mb-3 text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors" />
                                        <span className="text-xs text-[var(--text-secondary)] font-mono truncate w-full text-center group-hover:text-primary transition-colors">
                                            {iconName}
                                        </span>

                                        {/* Overlay */}
                                        <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center rounded-xl opacity-0 transition-opacity ${copied === code ? 'opacity-100' : 'group-hover:opacity-0'}`}>
                                            <div className="text-white text-xs font-bold flex flex-col items-center gap-1">
                                                <Check size={20} />
                                                COPIADO
                                            </div>
                                        </div>
                                    </button>
                                );
                            })
                        )}
                    </div>

                    {activeTab === 'lucide' && visibleCount < filteredLucide.length && (
                        <div className="flex flex-col items-center gap-4 py-8">
                            <div className="text-[var(--text-secondary)] text-sm">
                                Mostrando {displayLucide.length} de {filteredLucide.length} ícones
                            </div>
                            <button
                                onClick={loadMore}
                                className="px-6 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                            >
                                Carregar mais
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
