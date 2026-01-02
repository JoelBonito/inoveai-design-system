"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Palette,
  Type,
  Ruler,
  Layers,
  Activity,
  Layers2,
  Check,
} from "lucide-react";
import { toast } from "sonner";

// Mock data directly since we can't use 'fs' in client components easily without API routes
// In a real app, this should be an API route or passed as props
const tokens = {
  colors: {
    "background-layer-1": { var: "var(--background)", hex: "#f9fafb" },
    "card-layer-2": { var: "var(--card)", hex: "#f1f2f4" },
    "popover-layer-3": { var: "var(--popover)", hex: "#ffffff" },
    "accent-layer-4": { var: "var(--accent)", hex: "#f9fafb" },
    "sidebar-selected-layer-5": { var: "var(--sidebar-accent)", hex: "#e0e7e6" },
    "primary-action": { var: "var(--primary)", hex: "#457b77" },
  },
  typography: {
    fontFamilies: {
      display: ["Space Grotesk", "sans-serif"],
      body: ["Noto Sans", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    sizes: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
    },
  },
  spacing: {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
  },
  borderRadius: {
    DEFAULT: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  zIndex: {
    dropdown: "1000",
    sticky: "1020",
    fixed: "1030",
    "modal-backdrop": "1040",
    modal: "1050",
    popover: "1060",
    tooltip: "1070",
  },
};

export default function TokensPage() {
  const handleCopy = async (text: string, label: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        toast.success(`${label} copiado para a área de transferência!`);
      } else {
        // Fallback for insecure contexts (HTTP)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
          toast.success(`${label} copiado para a área de transferência!`);
        } catch (err) {
          toast.error(`Não foi possível copiar ${label}`);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      toast.error(`Erro ao copiar ${label}`);
    }
  };

  // Cast values to any to avoid TS issues with the new structure in map
  const colorEntries = Object.entries(tokens.colors) as unknown as [
    string,
    { var: string; hex: string },
  ][];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero removed */}

          {/* Colors */}
          <section className="pb-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
              <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                <Palette size={24} />
              </span>
              Paleta de Cores
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {colorEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="bg-card group hover:border-primary/50 rounded-xl border border-[var(--border)] p-4 transition-all"
                >
                  <div
                    className="border-border/10 relative mb-4 aspect-video w-full overflow-hidden rounded-lg border shadow-lg"
                    style={{ backgroundColor: value.var }}
                  ></div>

                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-bold text-[var(--foreground)] capitalize">
                      {key.replace(/-/g, " ")}
                    </h4>
                    <button
                      onClick={() => handleCopy(value.hex, key)}
                      className="hover:text-primary text-[var(--text-secondary)] transition-colors"
                      title={`Copiar HEX: ${value.hex}`}
                    >
                      <Copy size={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <code className="bg-popover flex-1 rounded-md px-2 py-1 font-mono text-sm text-[var(--text-secondary)]">
                      {value.hex}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="border-t border-[var(--border)] py-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
              <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                <Type size={24} />
              </span>
              Tipografia
            </h2>

            <div className="bg-card overflow-hidden rounded-xl border border-[var(--border)]">
              {/* Font Families */}
              <div className="border-b border-[var(--border)] p-6">
                <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">
                  Famílias de Fontes
                </h3>
                <div className="grid gap-4">
                  {tokens.typography &&
                    Object.entries(tokens.typography.fontFamilies).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-4">
                        <div className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                          {key}
                        </div>
                        <div
                          className="flex-1 text-[var(--foreground)]"
                          style={{ fontFamily: (value as string[]).join(", ") }}
                        >
                          A rápida raposa marrom pula sobre o cão preguiçoso
                        </div>
                        <code className="rounded bg-[var(--background)] px-2 py-1 font-mono text-xs text-[var(--text-secondary)]">
                          {(value as string[]).join(", ")}
                        </code>
                      </div>
                    ))}
                </div>
              </div>

              {/* Font Sizes */}
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-[var(--foreground)]">
                  Tamanhos de Fonte
                </h3>
                <div className="grid gap-4">
                  {tokens.typography &&
                    Object.entries(tokens.typography.sizes).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-4">
                        <div className="w-16 font-mono text-sm text-[var(--text-secondary)]">
                          {key}
                        </div>
                        <div
                          className="flex-1 text-[var(--foreground)]"
                          style={{ fontSize: value as string }}
                        >
                          Texto de exemplo em {value as string}
                        </div>
                        <code className="text-primary bg-primary/10 rounded px-2 py-1 font-mono text-xs">
                          text-{key}
                        </code>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* Spacing */}
          <section className="border-t border-[var(--border)] py-12">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
              <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                <Ruler size={24} />
              </span>
              Espaçamento
            </h2>

            <div className="bg-card rounded-xl border border-[var(--border)] p-6">
              <div className="grid gap-4">
                {Object.entries(tokens.spacing).map(([key, value]) => (
                  <div key={key} className="group flex items-center gap-4">
                    <div className="w-16 text-right font-mono text-sm text-[var(--text-secondary)]">
                      {value as string}
                    </div>
                    <div
                      className="bg-primary/20 border-primary/50 group-hover:bg-primary/40 relative flex h-8 items-center rounded border transition-colors"
                      style={{ width: value as string }}
                    >
                      <div className="text-primary absolute inset-0 flex items-center justify-center text-[10px] font-bold opacity-0 group-hover:opacity-100">
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
            <section className="border-t border-[var(--border)] py-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                  <Layers size={24} />
                </span>
                Sombras (Shadows)
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {Object.entries(tokens.shadows).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center gap-3">
                    <div
                      className="bg-card size-24 rounded-xl border border-[var(--border)]"
                      style={{ boxShadow: value as string }}
                    />
                    <div className="text-center">
                      <div className="font-bold text-[var(--foreground)] capitalize">{key}</div>
                      <code className="bg-popover rounded-md px-1 py-0.5 text-xs text-[var(--text-secondary)]">
                        {key === "DEFAULT" ? "shadow" : `shadow-${key}`}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Transitions */}
          {tokens.transitions && (
            <section className="border-t border-[var(--border)] py-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                  <Activity size={24} />
                </span>
                Transições
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {Object.entries(tokens.transitions).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-card group hover:border-primary/50 flex flex-col gap-4 rounded-xl border border-[var(--border)] p-6 transition-colors"
                  >
                    <div className="flex h-24 items-center justify-center overflow-hidden rounded-lg bg-[var(--background)]">
                      <div
                        className="bg-primary size-12 translate-x-[-40px] transform rounded shadow-lg group-hover:translate-x-[40px]"
                        style={{ transition: `transform ${value}` }}
                      />
                    </div>
                    <div>
                      <div className="mb-1 font-bold text-[var(--foreground)] capitalize">
                        {key}
                      </div>
                      <code
                        className="bg-popover block truncate rounded-md px-1.5 py-0.5 text-xs text-[var(--text-secondary)]"
                        title={value as string}
                      >
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
            <section className="border-t border-[var(--border)] py-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[var(--foreground)]">
                <span className="bg-card text-primary rounded-md border border-[var(--border)] p-1.5">
                  <Layers2 size={24} />
                </span>
                Z-Index
              </h2>
              <div className="bg-card rounded-xl border border-[var(--border)] p-6">
                <div className="space-y-2">
                  {Object.entries(tokens.zIndex)
                    .sort((a, b) => Number(a[1]) - Number(b[1]))
                    .map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between border-b border-[var(--border)]/50 pb-2 last:border-0"
                      >
                        <span className="text-primary font-mono text-sm">z-{key}</span>
                        <span className="font-mono text-[var(--foreground)]">
                          {value as string}
                        </span>
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
