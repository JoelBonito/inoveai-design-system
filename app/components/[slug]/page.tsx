import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Copy, Download } from 'lucide-react';

interface Component {
    id: string;
    name: string;
    category: string;
    description: string;
    darkMode: { screenshot: string; htmlPath: string } | null;
    lightMode: { screenshot: string; htmlPath: string } | null;
    tokensUsed: string[];
    tags: string[];
}

export async function generateStaticParams() {
    const componentsPath = path.join(process.cwd(), 'data', 'components.json');
    const componentsData = JSON.parse(fs.readFileSync(componentsPath, 'utf-8')) as Component[];

    return componentsData.map((component) => ({
        slug: component.id,
    }));
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Ler components.json
    const componentsPath = path.join(process.cwd(), 'data', 'components.json');
    const componentsData = JSON.parse(fs.readFileSync(componentsPath, 'utf-8')) as Component[];

    const component = componentsData.find((c) => c.id === slug);

    if (!component) {
        notFound();
    }

    // Ler HTML code
    let darkHtmlCode = '';
    let lightHtmlCode = '';

    if (component.darkMode) {
        const darkHtmlPath = path.join(process.cwd(), 'public', component.darkMode.htmlPath);
        if (fs.existsSync(darkHtmlPath)) {
            darkHtmlCode = fs.readFileSync(darkHtmlPath, 'utf-8');
        }
    }

    if (component.lightMode) {
        const lightHtmlPath = path.join(process.cwd(), 'public', component.lightMode.htmlPath);
        if (fs.existsSync(lightHtmlPath)) {
            lightHtmlCode = fs.readFileSync(lightHtmlPath, 'utf-8');
        }
    }

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors">
            {/* Header */}
            {/* Header Removed - Managed by Global Sidebar Layout */}

            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-gray-200 dark:border-border-dark">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                                {component.name}
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                {component.category}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-text-secondary text-lg max-w-3xl">
                            {component.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {component.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs text-slate-500 dark:text-[var(--text-secondary)] bg-slate-100 dark:bg-[var(--surface)] border border-gray-200 dark:border-[var(--border)] px-3 py-1.5 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Screenshots */}
                    <section className="py-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Visualização</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Dark Mode */}
                            {component.darkMode && (
                                <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden flex flex-col h-[600px] shadow-sm">
                                    <div className="p-4 border-b border-gray-200 dark:border-border-dark flex items-center justify-between shrink-0 bg-slate-50 dark:bg-surface-dark">
                                        <span className="text-sm font-bold text-slate-700 dark:text-white">Modo Escuro (Interativo)</span>
                                        <div className="flex gap-2">
                                            <a
                                                href={component.darkMode.htmlPath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 rounded bg-white hover:bg-slate-100 dark:bg-surface-light dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-text-secondary dark:hover:text-white text-[10px] font-bold border border-gray-200 dark:border-white/10 transition-colors"
                                            >
                                                ABRIR NOVA ABA
                                            </a>
                                            <span className="px-2 py-1 rounded bg-slate-900 dark:bg-black/60 text-white text-[10px] font-bold border border-white/10">
                                                PADRÃO
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-background-dark relative">
                                        <iframe
                                            src={component.darkMode.htmlPath}
                                            title={`${component.name} modo escuro`}
                                            className="w-full h-full border-none"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Light Mode */}
                            {component.lightMode && (
                                <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden flex flex-col h-[600px] shadow-sm">
                                    <div className="p-4 border-b border-gray-200 dark:border-border-dark flex items-center justify-between shrink-0 bg-slate-50 dark:bg-surface-dark">
                                        <span className="text-sm font-bold text-slate-700 dark:text-white">Modo Claro (Interativo)</span>
                                        <div className="flex gap-2">
                                            <a
                                                href={component.lightMode.htmlPath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 rounded bg-white hover:bg-slate-100 dark:bg-surface-light dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-text-secondary dark:hover:text-white text-[10px] font-bold border border-gray-200 dark:border-white/10 transition-colors"
                                            >
                                                ABRIR NOVA ABA
                                            </a>
                                            <span className="px-2 py-1 rounded bg-white text-black border border-gray-200 text-[10px] font-bold">
                                                ALTERNATIVO
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-background-light relative">
                                        <iframe
                                            src={component.lightMode.htmlPath}
                                            title={`${component.name} modo claro`}
                                            className="w-full h-full border-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* HTML Code */}
                    {darkHtmlCode && (
                        <section className="py-12 border-t border-gray-200 dark:border-border-dark">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Código HTML</h2>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[var(--surface)] border border-gray-200 dark:border-[var(--border)] text-slate-600 dark:text-[var(--text-secondary)] hover:text-primary dark:hover:text-[var(--foreground)] hover:border-primary/50 rounded-md text-sm font-medium transition-all shadow-sm">
                                        <Copy size={16} />
                                        Copiar Código
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded-md text-sm font-bold transition-all shadow-md shadow-primary/20">
                                        <Download size={16} />
                                        Baixar HTML
                                    </button>
                                </div>
                            </div>

                            <div className="bg-[#0d0d12] border border-gray-200 dark:border-border-dark rounded-xl overflow-hidden shadow-lg">
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-surface-dark border-b border-gray-200 dark:border-border-dark">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="size-3 rounded-full bg-red-500"></div>
                                            <div className="size-3 rounded-full bg-yellow-500"></div>
                                            <div className="size-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="ml-3 text-xs text-slate-500 dark:text-text-secondary font-mono">
                                            {component.id}.html
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 overflow-x-auto max-h-[600px] overflow-y-auto">
                                    <pre className="text-sm text-gray-300 font-mono">
                                        <code>{darkHtmlCode}</code>
                                    </pre>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Tokens Used */}
                    <section className="py-12 border-t border-gray-200 dark:border-border-dark">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Tokens de Design Usados</h2>

                        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark rounded-xl p-6 shadow-sm">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {component.tokensUsed.map((token) => (
                                    <Link
                                        key={token}
                                        href="/tokens"
                                        className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-background-dark rounded-lg border border-gray-200 dark:border-border-dark/50 hover:border-primary/50 transition-all group"
                                    >
                                        <div className="size-8 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-[18px]">palette</span>
                                        </div>
                                        <span className="text-sm font-mono text-slate-700 dark:text-white">{token}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
