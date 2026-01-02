"use client";

import { useState, useEffect, ReactNode } from "react";
import { X, Copy, Check, Download } from "lucide-react";

interface CodeModalProps {
  /** Se o modal está aberto */
  isOpen: boolean;
  /** Callback para fechar o modal */
  onClose: () => void;
  /** Código a ser exibido */
  code: string;
  /** Título do modal */
  title?: string;
  /** Nome do arquivo para download */
  filename?: string;
}

/**
 * CodeModal - Modal fullscreen para exibição de código
 *
 * Funcionalidades:
 * - Exibição fullscreen com syntax highlighting
 * - Botão de copiar código
 * - Botão de download como arquivo
 * - Fecha com ESC ou clicando fora
 *
 * @example
 * <CodeModal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   code={htmlCode}
 *   title="button.html"
 * />
 */
export function CodeModal({
  isOpen,
  onClose,
  code,
  title = "component.html",
  filename = "component.html",
}: CodeModalProps) {
  const [copied, setCopied] = useState(false);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative mx-4 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#282839] bg-[#0d0d12] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#282839] bg-[#1a1a24] px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-[#ff5f57]" />
              <div className="size-3 rounded-full bg-[#febc2e]" />
              <div className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="font-mono text-sm text-[#9d9db9]">{title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 rounded-lg bg-[#282839] px-4 py-2 text-sm font-medium text-[#9d9db9] transition-all hover:bg-[#3a3a4a] hover:text-white"
              aria-label={copied ? "Código copiado" : "Copiar código para área de transferência"}
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all"
            >
              <Download size={16} />
              <span>Baixar HTML</span>
            </button>

            <button
              onClick={onClose}
              className="ml-2 rounded-lg p-2 text-[#6b6b80] transition-colors hover:bg-[#282839] hover:text-white"
              aria-label="Fechar modal de código"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="custom-scrollbar flex-1 overflow-auto p-6">
          <pre className="font-mono text-sm leading-relaxed break-words whitespace-pre-wrap text-[#e4e4e7]">
            <code>{code}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#282839] bg-[#1a1a24] px-6 py-3">
          <span className="text-xs text-[#6b6b80]">
            Pressione{" "}
            <kbd className="mx-1 rounded bg-[#282839] px-1.5 py-0.5 font-mono text-[#9d9db9]">
              ESC
            </kbd>{" "}
            para fechar
          </span>
          <span className="text-xs text-[#6b6b80]">
            {code.split("\n").length} linhas • {code.length} caracteres
          </span>
        </div>
      </div>
    </div>
  );
}
