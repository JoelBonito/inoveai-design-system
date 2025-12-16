"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, Check } from 'lucide-react';

export default function TypographyPage() {
    const [copied, setCopied] = React.useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)] mb-12">
                        <h1 className="text-4xl lg:text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                            Tipografia
                        </h1>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            A tipografia define a hierarquia e a clareza do conteúdo. Utilizamos uma combinação de fontes com e sem serifa projetadas para legibilidade em interfaces modernas.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Font Families */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined">
                                    text_fields
                                </span>
                                Famílias de Fontes
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                                    <div className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Display</div>
                                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4 font-display">Space Grotesk</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                        Usada para títulos, headings e elementos de destaque. Possui personalidade técnica e moderna.
                                    </p>
                                    <div className="text-4xl font-display">Aa Bb Cc 123</div>
                                </div>

                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                                    <div className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Body</div>
                                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4 font-sans">Noto Sans</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                        Usada para textos longos, parágrafos e UI em geral. Otimizada para legibilidade em telas.
                                    </p>
                                    <div className="text-4xl font-sans">Aa Bb Cc 123</div>
                                </div>

                                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                                    <div className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Monospace</div>
                                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4 font-mono">JetBrains Mono</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                        Usada para código, dados tabulares e elementos técnicos.
                                    </p>
                                    <div className="text-4xl font-mono">Aa Bb Cc 123</div>
                                </div>
                            </div>
                        </section>

                        {/* Type Scale */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[var(--foreground)]">Escala Tipográfica</h2>

                            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
                                <div className="grid gap-0 divide-y divide-[var(--border)]">
                                    {[
                                        { tag: 'h1', size: 'text-5xl', label: 'Heading 1', px: '48px', weight: 'Black' },
                                        { tag: 'h2', size: 'text-4xl', label: 'Heading 2', px: '36px', weight: 'Bold' },
                                        { tag: 'h3', size: 'text-3xl', label: 'Heading 3', px: '30px', weight: 'Bold' },
                                        { tag: 'h4', size: 'text-2xl', label: 'Heading 4', px: '24px', weight: 'Bold' },
                                        { tag: 'h5', size: 'text-xl', label: 'Heading 5', px: '20px', weight: 'Bold' },
                                        { tag: 'h6', size: 'text-lg', label: 'Heading 6', px: '18px', weight: 'Bold' },
                                        { tag: 'p', size: 'text-base', label: 'Body', px: '16px', weight: 'Regular' },
                                        { tag: 'small', size: 'text-sm', label: 'Small', px: '14px', weight: 'Regular' },
                                        { tag: 'span', size: 'text-xs', label: 'Tiny', px: '12px', weight: 'Regular' },
                                    ].map((item) => (
                                        <div key={item.tag} className="p-6 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-[var(--background)]/50 transition-colors">
                                            <div className="w-32 flex flex-col gap-1">
                                                <span className="text-primary font-mono text-sm">{item.tag}</span>
                                                <span className="text-[var(--text-secondary)] text-xs">{item.size} • {item.px}</span>
                                            </div>
                                            <div className={`flex-1 text-[var(--foreground)] ${item.tag === 'p' || item.tag === 'small' || item.tag === 'span' ? 'font-sans' : 'font-display font-bold'}`}>
                                                <span className={item.size}>The quick brown fox jumps over the lazy dog</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Weights */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[var(--foreground)]">Pesos</h2>
                            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-8 grid gap-8">
                                <div className="flex items-baseline gap-8">
                                    <span className="w-24 text-[var(--text-secondary)] text-sm font-mono">Light (300)</span>
                                    <span className="text-3xl font-display font-light">Design is intelligence made visible.</span>
                                </div>
                                <div className="flex items-baseline gap-8">
                                    <span className="w-24 text-[var(--text-secondary)] text-sm font-mono">Regular (400)</span>
                                    <span className="text-3xl font-display font-normal">Design is intelligence made visible.</span>
                                </div>
                                <div className="flex items-baseline gap-8">
                                    <span className="w-24 text-[var(--text-secondary)] text-sm font-mono">Medium (500)</span>
                                    <span className="text-3xl font-display font-medium">Design is intelligence made visible.</span>
                                </div>
                                <div className="flex items-baseline gap-8">
                                    <span className="w-24 text-[var(--text-secondary)] text-sm font-mono">Bold (700)</span>
                                    <span className="text-3xl font-display font-bold">Design is intelligence made visible.</span>
                                </div>
                                <div className="flex items-baseline gap-8">
                                    <span className="w-24 text-[var(--text-secondary)] text-sm font-mono">Black (900)</span>
                                    <span className="text-3xl font-display font-black">Design is intelligence made visible.</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
