"use client";

import React, { useState, useEffect } from "react";
import { hex } from "wcag-contrast";
import { ArrowLeft, Check, AlertTriangle, XCircle, Info, RefreshCw } from "lucide-react";
import Link from "next/link";

// Helper to check standard conformance
const checkConformance = (ratio: number, level: "AA" | "AAA", size: "normal" | "large") => {
  if (level === "AA") {
    return size === "large" ? ratio >= 3 : ratio >= 4.5;
  } else {
    return size === "large" ? ratio >= 4.5 : ratio >= 7.0;
  }
};

const A11Y_CHECKLIST = [
  {
    id: 1,
    category: "Estrutura",
    items: [
      { text: "Página possui um título único e descritivo", critical: true },
      { text: "Headings seguem uma hierarquia lógica (h1 -> h2 -> h3)", critical: true },
      { text: "Landmarks (main, nav, header, footer) são usados corretamente", critical: false },
    ],
  },
  {
    id: 2,
    category: "Interação",
    items: [
      { text: "Todos elementos interativos são acessíveis via teclado (Tab)", critical: true },
      { text: "Estados de foco são visíveis e distintos", critical: true },
      { text: "Não existem armadilhas de teclado", critical: true },
    ],
  },
  {
    id: 3,
    category: "Imagens & Mídia",
    items: [
      { text: 'Todas imagens têm alt text ou alt="" se decorativas', critical: true },
      { text: "Imagens complexas possuem descrições detalhadas", critical: false },
      { text: "Controles de mídia são acessíveis", critical: false },
    ],
  },
  {
    id: 4,
    category: "Formulários",
    items: [
      { text: "Todos inputs possuem labels associados", critical: true },
      { text: "Mensagens de erro associadas via aria-describedby", critical: true },
      { text: "Campos obrigatórios são claramente indicados", critical: true },
    ],
  },
];

export default function AccessibilityPage() {
  const [fg, setFg] = useState("#ffffff");
  const [bg, setBg] = useState("#2b2bee"); // Primary
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="mb-12 border-b border-[var(--border)] pb-8">
            <h1 className="mb-4 text-5xl font-black tracking-tight text-[var(--foreground)]">
              Acessibilidade (a11y)
            </h1>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Ferramentas e diretrizes para garantir que nossa interface seja utilizável por todos.
              Conformidade com WCAG 2.1 AA torna a web mais inclusiva.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contrast Checker */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="text-primary material-symbols-outlined rounded border border-[var(--border)] bg-[var(--surface)] p-1.5">
                  contrast
                </span>
                Verificador de Contraste
              </h2>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="mb-8 grid grid-cols-2 gap-8">
                  {/* Background Picker */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--text-secondary)]">
                      Cor de Fundo
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                        className="size-10 cursor-pointer rounded border-0 bg-transparent p-0"
                      />
                      <input
                        type="text"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                        className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-3 py-2 font-mono text-[var(--foreground)]"
                      />
                    </div>
                  </div>

                  {/* Foreground Picker */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--text-secondary)]">
                      Cor do Texto
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={fg}
                        onChange={(e) => setFg(e.target.value)}
                        className="size-10 cursor-pointer rounded border-0 bg-transparent p-0"
                      />
                      <input
                        type="text"
                        value={fg}
                        onChange={(e) => setFg(e.target.value)}
                        className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-3 py-2 font-mono text-[var(--foreground)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div
                  className="mb-8 flex h-32 items-center justify-center rounded-xl border border-white/10"
                  style={{ backgroundColor: bg }}
                >
                  <div className="text-center">
                    <h3 className="mb-1 text-2xl font-bold" style={{ color: fg }}>
                      Texto Normal
                    </h3>
                    <p className="text-sm" style={{ color: fg }}>
                      Texto Pequeno (14px)
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[var(--background)]/50 p-4 text-center">
                    <div className="mb-2 text-xs font-bold tracking-wider text-[var(--text-secondary)] uppercase">
                      Razão de Contraste
                    </div>
                    <div
                      className={`text-4xl font-black ${ratio < 3 ? "text-red-500" : ratio < 4.5 ? "text-yellow-500" : "text-emerald-500"}`}
                    >
                      {ratio}:1
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded bg-[var(--background)]/30 p-2">
                      <span className="text-sm text-[var(--text-secondary)]">
                        AA Normal (4.5:1)
                      </span>
                      {checkConformance(ratio, "AA", "normal") ? (
                        <Check className="text-emerald-500" size={18} />
                      ) : (
                        <XCircle className="text-red-500" size={18} />
                      )}
                    </div>
                    <div className="flex items-center justify-between rounded bg-[var(--background)]/30 p-2">
                      <span className="text-sm text-[var(--text-secondary)]">AA Grande (3:1)</span>
                      {checkConformance(ratio, "AA", "large") ? (
                        <Check className="text-emerald-500" size={18} />
                      ) : (
                        <XCircle className="text-red-500" size={18} />
                      )}
                    </div>
                    <div className="flex items-center justify-between rounded bg-[var(--background)]/30 p-2">
                      <span className="text-sm text-[var(--text-secondary)]">AAA Normal (7:1)</span>
                      {checkConformance(ratio, "AAA", "normal") ? (
                        <Check className="text-emerald-500" size={18} />
                      ) : (
                        <XCircle className="text-red-500" size={18} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Checklist */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="text-primary material-symbols-outlined rounded border border-[var(--border)] bg-[var(--surface)] p-1.5">
                  checklist
                </span>
                Checklist WCAG 2.1
              </h2>

              <div className="space-y-6">
                {A11Y_CHECKLIST.map((category) => (
                  <div
                    key={category.id}
                    className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                  >
                    <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--background)]/50 px-6 py-3 font-bold text-[var(--foreground)]">
                      <div className="bg-primary size-2 rounded-full" />
                      {category.category}
                    </div>
                    <div className="space-y-4 p-6">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 rounded-full border p-0.5 ${item.critical ? "border-red-500/50 text-red-500" : "border-emerald-500/50 text-emerald-500"}`}
                          >
                            {item.critical ? <AlertTriangle size={12} /> : <Check size={12} />}
                          </div>
                          <div>
                            <p className="text-sm text-[var(--foreground)]">{item.text}</p>
                            {item.critical && (
                              <span className="text-[10px] font-bold tracking-wider text-red-400 uppercase">
                                Crítico
                              </span>
                            )}
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
