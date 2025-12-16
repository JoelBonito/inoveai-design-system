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
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl max-h-[90vh] mx-4 flex flex-col rounded-2xl overflow-hidden border border-[#282839] bg-[#0d0d12] shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#1a1a24] border-b border-[#282839]">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1.5">
                            <div className="size-3 rounded-full bg-[#ff5f57]" />
                            <div className="size-3 rounded-full bg-[#febc2e]" />
                            <div className="size-3 rounded-full bg-[#28c840]" />
                        </div>
                        <span className="text-sm text-[#9d9db9] font-mono">
                            {title}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                                       bg-[#282839] text-[#9d9db9] hover:text-white hover:bg-[#3a3a4a]"
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
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                                       bg-primary text-white hover:bg-primary/90"
                        >
                            <Download size={16} />
                            <span>Baixar HTML</span>
                        </button>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg text-[#6b6b80] hover:text-white hover:bg-[#282839] transition-colors ml-2"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Code Content */}
                <div className="flex-1 overflow-auto p-6 custom-scrollbar">
                    <pre className="text-sm text-[#e4e4e7] font-mono leading-relaxed whitespace-pre-wrap break-words">
                        <code>{code}</code>
                    </pre>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-[#1a1a24] border-t border-[#282839] flex items-center justify-between">
                    <span className="text-xs text-[#6b6b80]">
                        Pressione <kbd className="px-1.5 py-0.5 rounded bg-[#282839] text-[#9d9db9] font-mono mx-1">ESC</kbd> para fechar
                    </span>
                    <span className="text-xs text-[#6b6b80]">
                        {code.split('\n').length} linhas • {code.length} caracteres
                    </span>
                </div>
            </div>
        </div>
    );
}
