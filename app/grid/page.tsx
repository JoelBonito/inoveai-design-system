"use client";

import React, { useState } from "react";
import { Monitor, Tablet, Smartphone, Maximize } from "lucide-react";

export default function GridPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Grid Overlay Demo */}
      {showOverlay && (
        <div className="pointer-events-none fixed inset-0 z-[60] container mx-auto px-4">
          <div className="grid h-full grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full border-x border-red-500/20 bg-red-500/10" />
            ))}
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed, Button kept */}
          <div className="flex justify-start border-b border-[var(--border)] pb-8">
            <button
              onClick={() => setShowOverlay(!showOverlay)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold whitespace-nowrap transition-all ${showOverlay ? "border border-red-500/50 bg-red-500/20 text-red-500" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
            >
              <Maximize size={16} />
              {showOverlay ? "Ocultar Grid" : "Mostrar Grid"}
            </button>
          </div>

          <div className="space-y-12">
            {/* Breakpoints */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">Breakpoints</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <Smartphone size={24} />
                    <span className="font-bold">Celular (sm)</span>
                  </div>
                  <div className="font-mono text-3xl font-bold">640px</div>
                  <code className="bg-background-dark text-text-secondary w-fit rounded p-2 text-xs">
                    @media (min-width: 640px)
                  </code>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Tablet size={24} />
                    <span className="font-bold">Tablet (md)</span>
                  </div>
                  <div className="font-mono text-3xl font-bold">768px</div>
                  <code className="bg-background-dark text-text-secondary w-fit rounded p-2 text-xs">
                    @media (min-width: 768px)
                  </code>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3 text-violet-400">
                    <Monitor size={24} />
                    <span className="font-bold">Desktop (lg)</span>
                  </div>
                  <div className="font-mono text-3xl font-bold">1024px</div>
                  <code className="bg-background-dark text-text-secondary w-fit rounded p-2 text-xs">
                    @media (min-width: 1024px)
                  </code>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-3 text-pink-400">
                    <Monitor size={24} className="scale-125" />
                    <span className="font-bold">Wide (xl)</span>
                  </div>
                  <div className="font-mono text-3xl font-bold">1280px</div>
                  <code className="bg-background-dark text-text-secondary w-fit rounded p-2 text-xs">
                    @media (min-width: 1280px)
                  </code>
                </div>
              </div>
            </section>

            {/* Common Patterns */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Padrões de Layout Comuns
              </h2>

              {/* 12 Column Demo */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold tracking-wider text-[var(--text-secondary)] uppercase">
                  Grid de 12 Colunas
                </h3>
                <div className="grid h-12 grid-cols-12 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary/20 border-primary/50 text-primary flex items-center justify-center rounded border font-mono text-[10px]"
                    >
                      1
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Layout */}
              <div className="space-y-2 pt-4">
                <h3 className="text-sm font-bold tracking-wider text-[var(--text-secondary)] uppercase">
                  Layout Dashboard (Sidebar + Conteúdo)
                </h3>
                <div className="flex h-64 overflow-hidden rounded-xl border border-[var(--border)]">
                  {/* Sidebar */}
                  <div className="hidden w-64 flex-col gap-3 border-r border-[var(--border)] bg-[var(--surface)] p-4 md:flex">
                    <div className="bg-primary mb-4 h-8 w-8 rounded" />
                    <div className="h-4 w-3/4 rounded bg-[var(--foreground)]/10" />
                    <div className="h-4 w-1/2 rounded bg-[var(--foreground)]/10" />
                    <div className="h-4 w-2/3 rounded bg-[var(--foreground)]/10" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4 bg-[var(--background)] p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-8 w-1/3 rounded bg-[var(--foreground)]/10" />
                      <div className="bg-primary/20 h-8 w-24 rounded" />
                    </div>
                    <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]" />
                      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] lg:col-span-2" />
                    </div>
                  </div>
                </div>
                <code className="mt-2 block rounded-lg border border-[var(--border)] bg-[#0d0d12] p-4 font-mono text-xs text-[var(--text-secondary)] text-white">
                  grid grid-cols-1 md:grid-cols-[250px_1fr]
                </code>
              </div>

              {/* Card Grid */}
              <div className="space-y-2 pt-4">
                <h3 className="text-sm font-bold tracking-wider text-[var(--text-secondary)] uppercase">
                  Grid Responsivo de Cards
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]"
                    >
                      Card {i}
                    </div>
                  ))}
                </div>
                <code className="mt-2 block rounded-lg border border-[var(--border)] bg-[#0d0d12] p-4 font-mono text-xs text-[var(--text-secondary)] text-white">
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
