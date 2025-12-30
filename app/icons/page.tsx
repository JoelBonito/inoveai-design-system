"use client";

import React, { useState, useMemo, useRef } from 'react';
import { Search, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { VirtuosoGrid } from 'react-virtuoso';

import { MATERIAL_SYMBOLS } from './icon-service';

// Get all Lucide icon names (excluding internal exports and generic Icon component)
const lucideIconList = Object.keys(LucideIcons).filter(key =>
    key !== 'createLucideIcon' &&
    key !== 'default' &&
    key !== 'Icon' && // Exclude empty base component which causes crash
    /^[A-Z]/.test(key)
);

// Grid item component for Lucide icons
const LucideIconCard = ({ iconName, onCopy, copied }: { iconName: string; onCopy: (code: string) => void; copied: string | null }) => {
    // @ts-ignore
    const Icon = LucideIcons[iconName];
    if (!Icon) return null;

    const code = `<${iconName} />`;

    return (
        <button
            onClick={() => onCopy(code)}
            className="group flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-primary/50 hover:bg-[var(--surface)]/80 transition-all relative w-full h-full aspect-square"
            title={iconName} // Fallback nativo
        >
            <Icon className="w-10 h-10 text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors" />

            {/* Custom Tooltip */}
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 bottom-2 px-2 py-1 bg-black/80 text-white text-[10px] rounded pointer-events-none translate-y-2 group-hover:translate-y-0 z-20 whitespace-nowrap max-w-[90%] truncate">
                {iconName}
            </div>

            {/* Overlay */}
            <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center rounded-xl transition-opacity ${copied === code ? 'opacity-100' : 'opacity-0'} z-30`}>
                <div className="text-white text-xs font-bold flex flex-col items-center gap-1">
                    <Check size={20} />
                    COPIADO
                </div>
            </div>
        </button>
    );
};

// Grid item component for Material Symbols
const MaterialIconCard = ({ icon, onCopy, copied }: { icon: string; onCopy: (code: string) => void; copied: string | null }) => {
    const code = `<span className="material-symbols-outlined">${icon}</span>`;

    return (
        <button
            onClick={() => onCopy(code)}
            className="group flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-primary/50 hover:bg-[var(--surface)]/80 transition-all relative w-full h-full aspect-square"
            title={icon} // Fallback nativo
        >
            <span className="material-symbols-outlined text-4xl text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors">
                {icon}
            </span>

            {/* Custom Tooltip */}
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 bottom-2 px-2 py-1 bg-black/80 text-white text-[10px] rounded pointer-events-none translate-y-2 group-hover:translate-y-0 z-20 whitespace-nowrap max-w-[90%] truncate">
                {icon}
            </div>

            {/* Overlay */}
            <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center rounded-xl transition-opacity ${copied?.includes(icon) ? 'opacity-100' : 'opacity-0'} z-30`}>
                <div className="text-white text-xs font-bold flex flex-col items-center gap-1">
                    <Check size={20} />
                    COPIADO
                </div>
            </div>
        </button>
    );
};

export default function IconsPage() {
    const [activeTab, setActiveTab] = useState<'material' | 'lucide'>('material');
    const [search, setSearch] = useState('');
    const [copied, setCopied] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredMaterial = useMemo(() =>
        MATERIAL_SYMBOLS.filter(icon => icon.toLowerCase().includes(search.toLowerCase())),
        [search]);

    const filteredLucide = useMemo(() =>
        lucideIconList.filter(icon => icon.toLowerCase().includes(search.toLowerCase())),
        [search]);

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(code);
        setTimeout(() => setCopied(null), 2000);
    };

    // Grid components for virtuoso defined outside to prevent re-renders
    const GridList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ style, children, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            style={{
                ...style, // Base styles from Virtuoso first
                display: 'grid', // Force grid layout
                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', // Denser grid (approx 8 per line)
                gap: '1rem',
                width: '100%',
            }}
        >
            {children}
        </div>
    ));

    const GridItem = ({ children, ...props }: any) => (
        <div {...props} style={{ ...props.style, margin: 0, height: '100%', width: '100%' }}>
            {children}
        </div>
    );

    const gridComponents = {
        List: GridList,
        Item: GridItem,
    };

    return (
        <div className="min-h-screen" ref={containerRef}>
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-4">
                    {/* Toolbar */}
                    <div className="pb-4 border-b border-[var(--border)] flex flex-col-reverse md:flex-row items-center justify-between gap-4">
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
                                Lucide React ({lucideIconList.length})
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] w-4 h-4" />
                            <input
                                type="text"
                                placeholder={`Buscar em ${activeTab === 'material' ? filteredMaterial.length : filteredLucide.length} ícones...`}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-md pl-10 pr-4 py-2 text-[var(--foreground)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Virtualized Grid */}
                    <div className="h-[calc(100vh-180px)] min-h-[400px]">
                        {activeTab === 'material' ? (
                            <VirtuosoGrid
                                totalCount={filteredMaterial.length}
                                components={gridComponents}
                                itemContent={(index) => (
                                    <MaterialIconCard
                                        icon={filteredMaterial[index]}
                                        onCopy={copyCode}
                                        copied={copied}
                                    />
                                )}
                            />
                        ) : (
                            <VirtuosoGrid
                                totalCount={filteredLucide.length}
                                components={gridComponents}
                                itemContent={(index) => (
                                    <LucideIconCard
                                        iconName={filteredLucide[index]}
                                        onCopy={copyCode}
                                        copied={copied}
                                    />
                                )}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
