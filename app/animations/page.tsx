"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { RefreshCw, Copy, Check } from "lucide-react";

// Animation Variants
const VARIANTS: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" as const } },
  },
  slideInRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "circOut" as const } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
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
</motion.ul>`,
};

export default function AnimationsPage() {
  const [trigger, setTrigger] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const reset = () => setTrigger((t) => t + 1);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-8 md:flex-row md:items-end">
            <div>
              <h1 className="mb-4 text-4xl font-black tracking-tight text-[var(--foreground)] lg:text-5xl">
                Biblioteca de Motion
              </h1>
              <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
                Padrões de animação padronizados usando Framer Motion. Use-os para dar vida à
                interface mantendo performance e consistência.
              </p>
            </div>
            <button
              onClick={reset}
              className="bg-primary hover:bg-primary/90 shadow-primary/20 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap text-white shadow-lg transition-all"
            >
              <RefreshCw size={16} />
              Replay Animações
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Basic Transitions */}
            <section className="space-y-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="text-primary material-symbols-outlined rounded border border-[var(--border)] bg-[var(--surface)] p-1.5">
                  animation
                </span>
                Animações de Entrada
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Fade In */}
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-4 font-mono text-xs text-[var(--text-secondary)]">fadeIn</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`fade-${trigger}`}
                      variants={VARIANTS.fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="bg-primary shadow-primary/20 size-20 rounded-xl shadow-lg"
                    />
                  </AnimatePresence>
                </div>

                {/* Fade In Up */}
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-4 font-mono text-xs text-[var(--text-secondary)]">
                    fadeInUp
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`fadeup-${trigger}`}
                      variants={VARIANTS.fadeInUp}
                      initial="hidden"
                      animate="visible"
                      className="size-20 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20"
                    />
                  </AnimatePresence>
                </div>

                {/* Scale In */}
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-4 font-mono text-xs text-[var(--text-secondary)]">scaleIn</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`scale-${trigger}`}
                      variants={VARIANTS.scaleIn}
                      initial="hidden"
                      animate="visible"
                      className="size-20 rounded-xl bg-amber-500 shadow-lg shadow-amber-500/20"
                    />
                  </AnimatePresence>
                </div>

                {/* Slide Right */}
                <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-4 font-mono text-xs text-[var(--text-secondary)]">
                    slideInRight
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`slide-${trigger}`}
                      variants={VARIANTS.slideInRight}
                      initial="hidden"
                      animate="visible"
                      className="size-20 rounded-xl bg-purple-500 shadow-lg shadow-purple-500/20"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/50 px-4 py-3">
                  <span className="text-xs font-bold text-[var(--text-secondary)]">
                    Uso Básico (React)
                  </span>
                  <button
                    onClick={() => copyCode(CODE_SNIPPETS.fadeInUp, "basic")}
                    className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {copied === "basic" ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copied === "basic" ? "Copiado" : "Copiar"}
                  </button>
                </div>
                <pre className="overflow-x-auto bg-[#0d0d12] p-4 font-mono text-xs text-gray-300">
                  {CODE_SNIPPETS.fadeInUp}
                </pre>
              </div>
            </section>

            {/* Staggered */}
            <section className="space-y-8">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="text-primary material-symbols-outlined rounded border border-[var(--border)] bg-[var(--surface)] p-1.5">
                  checklist
                </span>
                Listas Escalonadas (Staggered)
              </h2>

              <div className="flex min-h-[416px] flex-col justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`stagger-${trigger}`}
                    variants={VARIANTS.staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto w-full max-w-sm space-y-3"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        variants={VARIANTS.fadeInUp}
                        className="flex h-14 items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4"
                      >
                        <div className="size-8 rounded-full border border-[var(--border)]/50 bg-[var(--surface)]" />
                        <div className="h-2 w-24 rounded-full bg-[var(--surface)]" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Code Snippet */}
              <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/50 px-4 py-3">
                  <span className="text-xs font-bold text-[var(--text-secondary)]">
                    Escalonar Filhos
                  </span>
                  <button
                    onClick={() => copyCode(CODE_SNIPPETS.stagger, "stagger")}
                    className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {copied === "stagger" ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copied === "stagger" ? "Copiado" : "Copiar"}
                  </button>
                </div>
                <pre className="overflow-x-auto bg-[#0d0d12] p-4 font-mono text-xs text-gray-300">
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
