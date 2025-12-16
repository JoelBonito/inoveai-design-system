"use client";

import React, { useState, useEffect } from 'react';
import { hex } from 'wcag-contrast';
import { ArrowLeft, Check, AlertTriangle, XCircle, Info, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// Helper to check standard conformance
const checkConformance = (ratio: number, level: 'AA' | 'AAA', size: 'normal' | 'large') => {
    if (level === 'AA') {
        return size === 'large' ? ratio >= 3 : ratio >= 4.5;
    } else {
        return size === 'large' ? ratio >= 4.5 : ratio >= 7.0;
    }
};

const A11Y_CHECKLIST = [
    {
        id: 1, category: 'Estrutura', items: [
            { text: 'Página possui um título único e descritivo', critical: true },
            { text: 'Headings seguem uma hierarquia lógica (h1 -> h2 -> h3)', critical: true },
            { text: 'Landmarks (main, nav, header, footer) são usados corretamente', critical: false },
        ]
    },
    {
        id: 2, category: 'Interação', items: [
            { text: 'Todos elementos interativos são acessíveis via teclado (Tab)', critical: true },
            { text: 'Estados de foco são visíveis e distintos', critical: true },
            { text: 'Não existem armadilhas de teclado', critical: true },
        ]
    },
    {
        id: 3, category: 'Imagens & Mídia', items: [
            { text: 'Todas imagens têm alt text ou alt="" se decorativas', critical: true },
            { text: 'Imagens complexas possuem descrições detalhadas', critical: false },
            { text: 'Controles de mídia são acessíveis', critical: false },
        ]
    },
    {
        id: 4, category: 'Formulários', items: [
            { text: 'Todos inputs possuem labels associados', critical: true },
            { text: 'Mensagens de erro associadas via aria-describedby', critical: true },
            { text: 'Campos obrigatórios são claramente indicados', critical: true },
        ]
    },
];

export default function AccessibilityPage() {
    const [fg, setFg] = useState('#ffffff');
    const [bg, setBg] = useState('#2b2bee'); // Primary
    const [ratio, setRatio] = useState(0);

    useEffect(() => {
        try {
            const r = hex(fg, bg);
            setRatio(Number(r.toFixed(2)));
        } catch (e) {
            // Invalid hex
            setRatio(0);
        }
    }, [fg, bg]);

    return (
        <div className="min-h-screen bg-background-dark text-white">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-border-dark mb-12">
                        <h1 className="text-5xl font-black text-white tracking-tight mb-4">
                            Acessibilidade (a11y)
                        </h1>
                        <p className="text-text-secondary text-lg max-w-3xl">
                            Ferramentas e diretrizes para garantir que nossa interface seja utilizável por todos.
                            Conformidade com WCAG 2.1 AA torna a web mais inclusiva.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contrast Checker */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="p-1.5 rounded bg-surface-dark border border-border-dark text-primary material-symbols-outlined">
                                    contrast
                                </span>
                                Verificador de Contraste
                            </h2>

                            <div className="bg-surface-dark border border-border-dark rounded-xl p-8">
                                <div className="grid grid-cols-2 gap-8 mb-8">
                                    {/* Background Picker */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-secondary">Cor de Fundo</label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="color"
                                                value={bg}
                                                onChange={(e) => setBg(e.target.value)}
                                                className="size-10 rounded cursor-pointer bg-transparent border-0 p-0"
                                            />
                                            <input
                                                type="text"
                                                value={bg}
                                                onChange={(e) => setBg(e.target.value)}
                                                className="bg-background-dark border border-border-dark rounded px-3 py-2 text-white font-mono w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Foreground Picker */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-secondary">Cor do Texto</label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="color"
                                                value={fg}
                                                onChange={(e) => setFg(e.target.value)}
                                                className="size-10 rounded cursor-pointer bg-transparent border-0 p-0"
                                            />
                                            <input
                                                type="text"
                                                value={fg}
                                                onChange={(e) => setFg(e.target.value)}
                                                className="bg-background-dark border border-border-dark rounded px-3 py-2 text-white font-mono w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Preview */}
                                <div
                                    className="h-32 rounded-xl flex items-center justify-center mb-8 border border-white/10"
                                    style={{ backgroundColor: bg }}
                                >
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold mb-1" style={{ color: fg }}>Texto Normal</h3>
                                        <p className="text-sm" style={{ color: fg }}>Texto Pequeno (14px)</p>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-background-dark/50 rounded-lg text-center">
                                        <div className="text-text-secondary text-xs font-bold uppercase tracking-wider mb-2">Razão de Contraste</div>
                                        <div className={`text-4xl font-black ${ratio < 3 ? 'text-red-500' : ratio < 4.5 ? 'text-yellow-500' : 'text-emerald-500'}`}>
                                            {ratio}:1
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between p-2 rounded bg-background-dark/30">
                                            <span className="text-sm text-text-secondary">AA Normal (4.5:1)</span>
                                            {checkConformance(ratio, 'AA', 'normal')
                                                ? <Check className="text-emerald-500" size={18} />
                                                : <XCircle className="text-red-500" size={18} />}
                                        </div>
                                        <div className="flex items-center justify-between p-2 rounded bg-background-dark/30">
                                            <span className="text-sm text-text-secondary">AA Grande (3:1)</span>
                                            {checkConformance(ratio, 'AA', 'large')
                                                ? <Check className="text-emerald-500" size={18} />
                                                : <XCircle className="text-red-500" size={18} />}
                                        </div>
                                        <div className="flex items-center justify-between p-2 rounded bg-background-dark/30">
                                            <span className="text-sm text-text-secondary">AAA Normal (7:1)</span>
                                            {checkConformance(ratio, 'AAA', 'normal')
                                                ? <Check className="text-emerald-500" size={18} />
                                                : <XCircle className="text-red-500" size={18} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Checklist */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="p-1.5 rounded bg-surface-dark border border-border-dark text-primary material-symbols-outlined">
                                    checklist
                                </span>
                                Checklist WCAG 2.1
                            </h2>

                            <div className="space-y-6">
                                {A11Y_CHECKLIST.map((category) => (
                                    <div key={category.id} className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
                                        <div className="bg-background-dark/50 border-b border-border-dark px-6 py-3 font-bold text-white flex items-center gap-2">
                                            <div className="size-2 rounded-full bg-primary" />
                                            {category.category}
                                        </div>
                                        <div className="p-6 space-y-4">
                                            {category.items.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className={`mt-0.5 rounded-full p-0.5 border ${item.critical ? 'border-red-500/50 text-red-500' : 'border-emerald-500/50 text-emerald-500'}`}>
                                                        {item.critical ? <AlertTriangle size={12} /> : <Check size={12} />}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-white">{item.text}</p>
                                                        {item.critical && <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">Crítico</span>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
