"use client";

import React, { useState, useMemo } from 'react';
import { Search, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

import { MATERIAL_SYMBOLS } from './icon-service';

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
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Toolbar */}
                    <div className="pb-8 border-b border-[var(--border)] flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                        {/* Tabs */}
                        <div className="flex items-center gap-4 bg-[var(--surface)] p-1 rounded-md border border-[var(--border)] w-full md:w-fit">
                            <button
                                onClick={() => setActiveTab('material')}
                                className={`flex-1 md:flex-none px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'material' ? 'bg-primary text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
                            >
                                Material Symbols
                            </button>
                            <button
                                onClick={() => setActiveTab('lucide')}
                                className={`flex-1 md:flex-none px-4 py-1.5 text-sm font-medium rounded-md transition-all ${activeTab === 'lucide' ? 'bg-primary text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
                            >
                                Lucide React
                            </button>
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
