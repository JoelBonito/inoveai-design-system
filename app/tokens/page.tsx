import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, Copy } from 'lucide-react';

// ... imports remain the same

export default async function TokensPage() {
    // ... data loading remains the same
    const tokensPath = path.join(process.cwd(), 'data', 'tokens.json');
    const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));

    const colorEntries = Object.entries(tokens.colors);

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight mb-4">
                            Design Tokens
                        </h1>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Os átomos fundamentais da nossa linguagem visual. Estes tokens garantem consistência em toda a interface.
                        </p>
                    </div>

                    {/* Colors */}
                    <section className="py-12">
                        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                            <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                palette
                            </span>
                            Paleta de Cores
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {colorEntries.map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 group hover:border-primary/50 transition-all"
                                >
                                    <div
                                        className="aspect-video w-full rounded-lg mb-4 relative overflow-hidden shadow-lg"
                                        style={{ backgroundColor: value as string }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-[var(--foreground)] font-bold capitalize">
                                            {key.replace(/-/g, ' ')}
                                        </h4>
                                        <button
                                            className="text-[var(--text-secondary)] hover:text-primary transition-colors"
                                            title="Copiar HEX"
                                        >
                                            <Copy size={16} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <code className="text-sm font-mono text-[var(--text-secondary)] bg-[var(--background)] px-2 py-1 rounded flex-1">
                                            {value as string}
                                        </code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Typography */}
                    <section className="py-12 border-t border-[var(--border)]">
                        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                            <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                text_fields
                            </span>
                            Tipografia
                        </h2>

                        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
                            {/* Font Families */}
                            <div className="p-6 border-b border-[var(--border)]">
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Famílias de Fontes</h3>
                                <div className="grid gap-4">
                                    {tokens.typography && Object.entries(tokens.typography.fontFamilies).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-4">
                                            <div className="w-24 text-sm text-[var(--text-secondary)] font-mono">{key}</div>
                                            <div className="flex-1 text-[var(--foreground)]" style={{ fontFamily: (value as string[]).join(', ') }}>
                                                A rápida raposa marrom pula sobre o cão preguiçoso
                                            </div>
                                            <code className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--background)] px-2 py-1 rounded">
                                                {(value as string[]).join(', ')}
                                            </code>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Font Sizes */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Tamanhos de Fonte</h3>
                                <div className="grid gap-4">
                                    {tokens.typography && Object.entries(tokens.typography.sizes).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-4">
                                            <div className="w-16 text-sm text-[var(--text-secondary)] font-mono">{key}</div>
                                            <div className="flex-1 text-[var(--foreground)]" style={{ fontSize: value as string }}>
                                                Texto de exemplo em {value as string}
                                            </div>
                                            <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                                text-{key}
                                            </code>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Spacing */}
                    <section className="py-12 border-t border-[var(--border)]">
                        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                            <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                straighten
                            </span>
                            Espaçamento
                        </h2>

                        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                            <div className="grid gap-4">
                                {Object.entries(tokens.spacing).map(([key, value]) => (
                                    <div key={key} className="flex items-center gap-4 group">
                                        <div className="w-16 text-right font-mono text-sm text-[var(--text-secondary)]">
                                            {value as string}
                                        </div>
                                        <div
                                            className="h-8 bg-primary/20 border border-primary/50 rounded flex items-center relative group-hover:bg-primary/40 transition-colors"
                                            style={{ width: value as string }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100">
                                                {key}
                                            </div>
                                        </div>
                                        <div className="text-xs text-[var(--text-secondary)]/50">
                                            p-{key} / m-{key}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Shadows */}
                    {tokens.shadows && (
                        <section className="py-12 border-t border-[var(--border)]">
                            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                                <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                    layers
                                </span>
                                Sombras (Shadows)
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.entries(tokens.shadows).map(([key, value]) => (
                                    <div key={key} className="flex flex-col items-center gap-3">
                                        <div
                                            className="size-24 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
                                            style={{ boxShadow: value as string }}
                                        />
                                        <div className="text-center">
                                            <div className="font-bold text-[var(--foreground)] capitalize">{key}</div>
                                            <code className="text-xs text-[var(--text-secondary)] bg-[var(--background)] px-1 py-0.5 rounded">{key === 'DEFAULT' ? 'shadow' : `shadow-${key}`}</code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Transitions */}
                    {tokens.transitions && (
                        <section className="py-12 border-t border-[var(--border)]">
                            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                                <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                    animation
                                </span>
                                Transições
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {Object.entries(tokens.transitions).map(([key, value]) => (
                                    <div key={key} className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4 group hover:border-primary/50 transition-colors">
                                        <div className="h-24 bg-[var(--background)] rounded-lg flex items-center justify-center overflow-hidden">
                                            <div
                                                className="size-12 bg-primary rounded shadow-lg transform translate-x-[-40px] group-hover:translate-x-[40px]"
                                                style={{ transition: `transform ${value}` }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[var(--foreground)] font-bold capitalize mb-1">{key}</div>
                                            <code className="text-xs text-[var(--text-secondary)] bg-[var(--background)] px-1.5 py-0.5 rounded block truncate" title={value as string}>
                                                {value as string}
                                            </code>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Z-Index */}
                    {tokens.zIndex && (
                        <section className="py-12 border-t border-[var(--border)]">
                            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-3">
                                <span className="p-1.5 rounded bg-[var(--surface)] border border-[var(--border)] text-primary material-symbols-outlined text-[24px]">
                                    layers_3d
                                </span>
                                Z-Index
                            </h2>
                            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                                <div className="space-y-2">
                                    {Object.entries(tokens.zIndex).sort((a, b) => Number(a[1]) - Number(b[1])).map(([key, value]) => (
                                        <div key={key} className="flex items-center justify-between border-b border-[var(--border)]/50 pb-2 last:border-0">
                                            <span className="font-mono text-primary text-sm">z-{key}</span>
                                            <span className="font-mono text-[var(--foreground)]">{value as string}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}
