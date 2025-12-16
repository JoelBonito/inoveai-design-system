"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { RefreshCw, Copy, Check } from 'lucide-react';

// Animation Variants
const VARIANTS: Record<string, Variants> = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" as const } }
    },
    slideInRight: {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "circOut" as const } }
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
};

const CODE_SNIPPETS = {
    fadeInUp: `const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Content
</motion.div>`,

    stagger: `const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.ul variants={container} initial="hidden" animate="visible">
  <motion.li variants={item} />
</motion.ul>`
};

export default function AnimationsPage() {
    const [trigger, setTrigger] = useState(0);
    const [copied, setCopied] = useState<string | null>(null);

    const reset = () => setTrigger(t => t + 1);

    const copyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-border-dark mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                                Biblioteca de Motion
                            </h1>
                            <p className="text-text-secondary text-lg max-w-3xl">
                                Padrões de animação padronizados usando Framer Motion. Use-os para dar vida à interface mantendo performance e consistência.
                            </p>
                        </div>
                        <button
                            onClick={reset}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                        >
                            <RefreshCw size={16} />
                            Replay Animações
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Basic Transitions */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="p-1.5 rounded bg-surface-dark border border-border-dark text-primary material-symbols-outlined">
                                    animation
                                </span>
                                Animações de Entrada
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Fade In */}
                                <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
                                    <div className="text-xs text-text-secondary font-mono mb-4">fadeIn</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`fade-${trigger}`}
                                            variants={VARIANTS.fadeIn}
                                            initial="hidden"
                                            animate="visible"
                                            className="size-20 bg-primary rounded-xl shadow-lg shadow-primary/20"
                                        />
                                    </AnimatePresence>
                                </div>

                                {/* Fade In Up */}
                                <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
                                    <div className="text-xs text-text-secondary font-mono mb-4">fadeInUp</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`fadeup-${trigger}`}
                                            variants={VARIANTS.fadeInUp}
                                            initial="hidden"
                                            animate="visible"
                                            className="size-20 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20"
                                        />
                                    </AnimatePresence>
                                </div>

                                {/* Scale In */}
                                <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
                                    <div className="text-xs text-text-secondary font-mono mb-4">scaleIn</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`scale-${trigger}`}
                                            variants={VARIANTS.scaleIn}
                                            initial="hidden"
                                            animate="visible"
                                            className="size-20 bg-amber-500 rounded-xl shadow-lg shadow-amber-500/20"
                                        />
                                    </AnimatePresence>
                                </div>

                                {/* Slide Right */}
                                <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px]">
                                    <div className="text-xs text-text-secondary font-mono mb-4">slideInRight</div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`slide-${trigger}`}
                                            variants={VARIANTS.slideInRight}
                                            initial="hidden"
                                            animate="visible"
                                            className="size-20 bg-purple-500 rounded-xl shadow-lg shadow-purple-500/20"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Code Snippet */}
                            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden mt-6">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark bg-background-dark/50">
                                    <span className="text-xs font-bold text-text-secondary">Uso Básico (React)</span>
                                    <button
                                        onClick={() => copyCode(CODE_SNIPPETS.fadeInUp, 'basic')}
                                        className="text-xs flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors"
                                    >
                                        {copied === 'basic' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                        {copied === 'basic' ? 'Copiado' : 'Copiar'}
                                    </button>
                                </div>
                                <pre className="p-4 text-xs font-mono text-gray-300 overflow-x-auto bg-[#0d0d12]">
                                    {CODE_SNIPPETS.fadeInUp}
                                </pre>
                            </div>
                        </section>

                        {/* Staggered */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <span className="p-1.5 rounded bg-surface-dark border border-border-dark text-primary material-symbols-outlined">
                                    checklist
                                </span>
                                Listas Escalonadas (Staggered)
                            </h2>

                            <div className="bg-surface-dark border border-border-dark rounded-xl p-8 min-h-[416px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`stagger-${trigger}`}
                                        variants={VARIANTS.staggerContainer}
                                        initial="hidden"
                                        animate="visible"
                                        className="space-y-3 max-w-sm mx-auto w-full"
                                    >
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <motion.div
                                                key={i}
                                                variants={VARIANTS.fadeInUp}
                                                className="h-14 bg-background-dark border border-border-dark rounded-lg flex items-center px-4 gap-4"
                                            >
                                                <div className="size-8 rounded-full bg-surface-dark border border-border-dark/50" />
                                                <div className="h-2 w-24 bg-surface-dark rounded-full" />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Code Snippet */}
                            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden mt-6">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark bg-background-dark/50">
                                    <span className="text-xs font-bold text-text-secondary">Escalonar Filhos</span>
                                    <button
                                        onClick={() => copyCode(CODE_SNIPPETS.stagger, 'stagger')}
                                        className="text-xs flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors"
                                    >
                                        {copied === 'stagger' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                        {copied === 'stagger' ? 'Copiado' : 'Copiar'}
                                    </button>
                                </div>
                                <pre className="p-4 text-xs font-mono text-gray-300 overflow-x-auto bg-[#0d0d12]">
                                    {CODE_SNIPPETS.stagger}
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
