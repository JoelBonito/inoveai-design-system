"use client";

import React, { useState } from "react";
import chroma from "chroma-js";
import { Copy, Check } from "lucide-react";

// Define base colors from our design system
const baseColors = {
  primary: "#2b2bee",
  "background-light": "#f6f6f8",
  "background-dark": "#111118",
  "surface-dark": "#1C1C26",
  "border-dark": "#282839",
  "text-secondary": "#9d9db9",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
};

// Function to generate 50-900 scale
const generateScale = (hex: string, name: string) => {
  const white = chroma("#ffffff");
  const black = chroma("#000000");

  return {
    name,
    base: hex,
    shades: [
      { name: "50", value: chroma.mix(white, hex, 0.1).hex() },
      { name: "100", value: chroma.mix(white, hex, 0.3).hex() },
      { name: "200", value: chroma.mix(white, hex, 0.5).hex() },
      { name: "300", value: chroma.mix(white, hex, 0.7).hex() },
      { name: "400", value: chroma.mix(white, hex, 0.85).hex() },
      { name: "500", value: hex },
      { name: "600", value: chroma.mix(black, hex, 0.2).hex() },
      { name: "700", value: chroma.mix(black, hex, 0.4).hex() },
      { name: "800", value: chroma.mix(black, hex, 0.6).hex() },
      { name: "900", value: chroma.mix(black, hex, 0.8).hex() },
      { name: "950", value: chroma.mix(black, hex, 0.9).hex() },
    ],
  };
};

export default function ColorsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const palettes = Object.entries(baseColors).map(([name, hex]) => generateScale(hex, name));

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          <div className="space-y-12">
            {palettes.map((palette) => (
              <section key={palette.name} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="size-12 rounded-lg border border-[var(--border)] shadow-lg"
                      style={{ backgroundColor: palette.base }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold capitalize">{palette.name}</h3>
                      <code className="font-mono text-sm text-[var(--text-secondary)]">
                        {palette.base}
                      </code>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const tailwindConfig = `  ${palette.name}: {\n${palette.shades.map((s) => `    ${s.name}: '${s.value}',`).join("\n")}\n  },`;
                      copyToClipboard(tailwindConfig);
                    }}
                    className="hover:border-primary/50 flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:text-[var(--foreground)]"
                  >
                    {copied && copied.includes(palette.name) ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                    Copiar Config
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
                  {palette.shades.map((shade) => {
                    const contrastWhite = chroma.contrast(shade.value, "#ffffff");
                    const textColor = contrastWhite > 4.5 ? "white" : "black";

                    return (
                      <div
                        key={shade.name}
                        className="group relative cursor-pointer"
                        onClick={() => copyToClipboard(shade.value)}
                      >
                        <div
                          className="mb-2 h-20 w-full rounded-lg border border-[var(--border)] shadow-lg transition-transform group-hover:-translate-y-1"
                          style={{ backgroundColor: shade.value }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                            <span
                              className="rounded bg-black/20 px-2 py-1 text-xs font-bold backdrop-blur-sm"
                              style={{ color: textColor }}
                            >
                              {copied === shade.value ? "COPIADO!" : "COPIAR"}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[var(--foreground)]">
                            {shade.name}
                          </span>
                          <span className="font-mono text-xs text-[var(--text-secondary)]">
                            {shade.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
