"use client";

import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize } from 'lucide-react';

export default function GridPage() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div className="min-h-screen relative">
            {/* Grid Overlay Demo */}
            {showOverlay && (
                <div className="fixed inset-0 z-[60] pointer-events-none container mx-auto px-4">
                    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 h-full">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="h-full bg-red-500/10 border-x border-red-500/20" />
                        ))}
                    </div>
                </div>
            )}

            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed, Button kept */}
                    <div className="pb-8 border-b border-[var(--border)] flex justify-start">
                        <button
                            onClick={() => setShowOverlay(!showOverlay)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${showOverlay ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
                        >
                            <Maximize size={16} />
                            {showOverlay ? 'Ocultar Grid' : 'Mostrar Grid'}
                        </button>
                    </div>

                    <div className="space-y-12">
                        {/* Breakpoints */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[var(--foreground)]">Breakpoints</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-emerald-400">
                                        <Smartphone size={24} />
                                        <span className="font-bold">Celular (sm)</span>
                                    </div>
                                    <div className="text-3xl font-mono font-bold">640px</div>
                                    <code className="text-xs bg-background-dark p-2 rounded text-text-secondary w-fit">@media (min-width: 640px)</code>
                                </div>

                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-blue-400">
                                        <Tablet size={24} />
                                        <span className="font-bold">Tablet (md)</span>
                                    </div>
                                    <div className="text-3xl font-mono font-bold">768px</div>
                                    <code className="text-xs bg-background-dark p-2 rounded text-text-secondary w-fit">@media (min-width: 768px)</code>
                                </div>

                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-violet-400">
                                        <Monitor size={24} />
                                        <span className="font-bold">Desktop (lg)</span>
                                    </div>
                                    <div className="text-3xl font-mono font-bold">1024px</div>
                                    <code className="text-xs bg-background-dark p-2 rounded text-text-secondary w-fit">@media (min-width: 1024px)</code>
                                </div>

                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-pink-400">
                                        <Monitor size={24} className="scale-125" />
                                        <span className="font-bold">Wide (xl)</span>
                                    </div>
                                    <div className="text-3xl font-mono font-bold">1280px</div>
                                    <code className="text-xs bg-background-dark p-2 rounded text-text-secondary w-fit">@media (min-width: 1280px)</code>
                                </div>
                            </div>
                        </section>

                        {/* Common Patterns */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[var(--foreground)]">Padrões de Layout Comuns</h2>

                            {/* 12 Column Demo */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">Grid de 12 Colunas</h3>
                                <div className="grid grid-cols-12 gap-4 h-12">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div key={i} className="bg-primary/20 border border-primary/50 rounded flex items-center justify-center text-[10px] text-primary font-mono">
                                            1
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dashboard Layout */}
                            <div className="space-y-2 pt-4">
                                <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">Layout Dashboard (Sidebar + Conteúdo)</h3>
                                <div className="h-64 border border-[var(--border)] rounded-xl overflow-hidden flex">
                                    {/* Sidebar */}
                                    <div className="hidden md:flex w-64 bg-[var(--surface)] border-r border-[var(--border)] flex-col p-4 gap-3">
                                        <div className="h-8 w-8 bg-primary rounded mb-4" />
                                        <div className="h-4 w-3/4 bg-[var(--foreground)]/10 rounded" />
                                        <div className="h-4 w-1/2 bg-[var(--foreground)]/10 rounded" />
                                        <div className="h-4 w-2/3 bg-[var(--foreground)]/10 rounded" />
                                    </div>
                                    {/* Content */}
                                    <div className="flex-1 bg-[var(--background)] p-6 flex flex-col gap-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-8 w-1/3 bg-[var(--foreground)]/10 rounded" />
                                            <div className="h-8 w-24 bg-primary/20 rounded" />
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                                            <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)]" />
                                            <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] lg:col-span-2" />
                                        </div>
                                    </div>
                                </div>
                                <code className="block mt-2 text-xs text-[var(--text-secondary)] font-mono bg-[#0d0d12] text-white p-4 rounded-lg border border-[var(--border)]">
                                    grid grid-cols-1 md:grid-cols-[250px_1fr]
                                </code>
                            </div>

                            {/* Card Grid */}
                            <div className="space-y-2 pt-4">
                                <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">Grid Responsivo de Cards</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="aspect-square bg-[var(--surface)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[var(--text-secondary)]">
                                            Card {i}
                                        </div>
                                    ))}
                                </div>
                                <code className="block mt-2 text-xs text-[var(--text-secondary)] font-mono bg-[#0d0d12] text-white p-4 rounded-lg border border-[var(--border)]">
                                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4
                                </code>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
