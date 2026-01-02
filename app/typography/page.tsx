"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

export default function TypographyPage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          <div className="space-y-12">
            {/* Font Families */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="text-primary material-symbols-outlined rounded border border-[var(--border)] bg-[var(--surface)] p-1.5">
                  text_fields
                </span>
                Famílias de Fontes
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="text-text-secondary mb-2 text-sm font-bold tracking-wider uppercase">
                    Display
                  </div>
                  <h3 className="font-display mb-4 text-3xl font-bold text-[var(--foreground)]">
                    Space Grotesk
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    Usada para títulos, headings e elementos de destaque. Possui personalidade
                    técnica e moderna.
                  </p>
                  <div className="font-display text-4xl">Aa Bb Cc 123</div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="text-text-secondary mb-2 text-sm font-bold tracking-wider uppercase">
                    Body
                  </div>
                  <h3 className="mb-4 font-sans text-3xl font-bold text-[var(--foreground)]">
                    Noto Sans
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    Usada para textos longos, parágrafos e UI em geral. Otimizada para legibilidade
                    em telas.
                  </p>
                  <div className="font-sans text-4xl">Aa Bb Cc 123</div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="text-text-secondary mb-2 text-sm font-bold tracking-wider uppercase">
                    Monospace
                  </div>
                  <h3 className="mb-4 font-mono text-3xl font-bold text-[var(--foreground)]">
                    JetBrains Mono
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    Usada para código, dados tabulares e elementos técnicos.
                  </p>
                  <div className="font-mono text-4xl">Aa Bb Cc 123</div>
                </div>
              </div>
            </section>

            {/* Type Scale */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Escala Tipográfica</h2>

              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
                <div className="grid gap-0 divide-y divide-[var(--border)]">
                  {[
                    {
                      tag: "h1",
                      size: "text-5xl",
                      label: "Heading 1",
                      px: "48px",
                      weight: "Black",
                    },
                    { tag: "h2", size: "text-4xl", label: "Heading 2", px: "36px", weight: "Bold" },
                    { tag: "h3", size: "text-3xl", label: "Heading 3", px: "30px", weight: "Bold" },
                    { tag: "h4", size: "text-2xl", label: "Heading 4", px: "24px", weight: "Bold" },
                    { tag: "h5", size: "text-xl", label: "Heading 5", px: "20px", weight: "Bold" },
                    { tag: "h6", size: "text-lg", label: "Heading 6", px: "18px", weight: "Bold" },
                    { tag: "p", size: "text-base", label: "Body", px: "16px", weight: "Regular" },
                    {
                      tag: "small",
                      size: "text-sm",
                      label: "Small",
                      px: "14px",
                      weight: "Regular",
                    },
                    { tag: "span", size: "text-xs", label: "Tiny", px: "12px", weight: "Regular" },
                  ].map((item) => (
                    <div
                      key={item.tag}
                      className="group flex flex-col gap-6 p-6 transition-colors hover:bg-[var(--background)]/50 md:flex-row md:items-center"
                    >
                      <div className="flex w-32 flex-col gap-1">
                        <span className="text-primary font-mono text-sm">{item.tag}</span>
                        <span className="text-xs text-[var(--text-secondary)]">
                          {item.size} • {item.px}
                        </span>
                      </div>
                      <div
                        className={`flex-1 text-[var(--foreground)] ${item.tag === "p" || item.tag === "small" || item.tag === "span" ? "font-sans" : "font-display font-bold"}`}
                      >
                        <span className={item.size}>
                          The quick brown fox jumps over the lazy dog
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Weights */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Pesos</h2>
              <div className="grid gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-baseline gap-8">
                  <span className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                    Light (300)
                  </span>
                  <span className="font-display text-3xl font-light">
                    Design is intelligence made visible.
                  </span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                    Regular (400)
                  </span>
                  <span className="font-display text-3xl font-normal">
                    Design is intelligence made visible.
                  </span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                    Medium (500)
                  </span>
                  <span className="font-display text-3xl font-medium">
                    Design is intelligence made visible.
                  </span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                    Bold (700)
                  </span>
                  <span className="font-display text-3xl font-bold">
                    Design is intelligence made visible.
                  </span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="w-24 font-mono text-sm text-[var(--text-secondary)]">
                    Black (900)
                  </span>
                  <span className="font-display text-3xl font-black">
                    Design is intelligence made visible.
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
