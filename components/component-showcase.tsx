"use client";

import { useState, useEffect, ReactNode } from "react";
import { Code, Copy, Check } from "lucide-react";
import { ShowcaseThemeProvider } from "./showcase-theme-context";

interface ComponentShowcaseProps {
  /** Título da seção */
  title: string;
  /** Descrição opcional */
  description?: string;
  /** Componente(s) a serem exibidos */
  children: ReactNode;
  /** Código HTML/TSX para exibir no modal */
  code: string;
  /** Classe adicional para o container de preview */
  previewClassName?: string;
}

/**
 * ComponentShowcase - Container de exibição de componentes do Design System
 *
 * Funcionalidades:
 * - Preview do componente em tempo real
 * - Toggle Dark/Light mode local (independente do site)
 * - Botão para ver código HTML em modal
 * - Estilos adaptativos baseados no tema
 *
 * @example
 * <ComponentShowcase title="Variantes" code={buttonCode}>
 *   <Button variant="primary">Primary</Button>
 *   <Button variant="secondary">Secondary</Button>
 * </ComponentShowcase>
 */
export function ComponentShowcase({
  title,
  description,
  children,
  code,
  previewClassName = "",
}: ComponentShowcaseProps) {
  const [isLocalDark, setIsLocalDark] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync with global theme and watch for changes
  // Sync with global theme and watch for changes
  useEffect(() => {
    const checkTheme = () => {
      // Check both html and body for robustness
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark");
      setIsLocalDark(isDark);
    };

    // Check immediately
    checkTheme();

    // Double check after verify layout hydration
    const timer = setTimeout(checkTheme, 100);

    // Watch for changes to the html class attribute
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also observe body just in case
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback para navegadores sem acesso ao clipboard (não-HTTPS)
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-[var(--foreground)]">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium transition-all ${
              showCode
                ? "bg-primary border-primary text-white"
                : "hover:border-primary/50 border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--foreground)]"
            }`}
          >
            <Code size={16} />
            <span className="hidden sm:inline">Código</span>
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div
        className={`relative overflow-hidden rounded-xl border transition-colors ${
          isLocalDark ? "border-[#282839] bg-[#111118]" : "border-[#e2e2e8] bg-[#f6f6f8]"
        } `}
      >
        {/* Grid Pattern Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${isLocalDark ? "#ffffff" : "#000000"} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Component Preview Area */}
        <div
          className={`relative z-10 flex min-h-[200px] items-center justify-center p-8 ${previewClassName}`}
        >
          {/* Theme Provider for children - allows them to use useShowcaseTheme() */}
          <ShowcaseThemeProvider isDark={isLocalDark}>
            <div
              className={`${isLocalDark ? "dark" : ""} flex flex-wrap items-center justify-center gap-4 ${isLocalDark ? "text-white" : "text-[#111118]"} `}
            >
              {children}
            </div>
          </ShowcaseThemeProvider>
        </div>
      </div>

      {/* Code Panel (Expandable) */}
      {showCode && (
        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[#0d0d12]">
          {/* Code Header */}
          <div className="flex items-center justify-between border-b border-[#282839] bg-[#1a1a24] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-[#ff5f57]" />
                <div className="size-3 rounded-full bg-[#febc2e]" />
                <div className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-3 font-mono text-xs text-[#6b6b80]">component.html</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-md bg-[#282839] px-3 py-1.5 text-sm font-medium text-[#9d9db9] transition-all hover:bg-[#3a3a4a] hover:text-white"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Code Content */}
          <div className="custom-scrollbar max-h-[400px] overflow-x-auto overflow-y-auto p-6">
            <pre className="font-mono text-sm leading-relaxed text-[#e4e4e7]">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
