import { ComponentCard } from "@/components/component-card";
import { Square } from "lucide-react";

export default function PrimitivosPage() {
    const primitivos = [
        {
            name: "Botão",
            description: "Elemento interativo fundamental para acionar ações. Suporta variantes, tamanhos e estados.",
            href: "/primitivos/button",
        },
        {
            name: "Input",
            description: "Campo de entrada de texto com suporte para labels, mensagens de ajuda e estados de erro.",
            href: "/primitivos/input",
        },
        {
            name: "Checkbox",
            description: "Controle de seleção binária ou múltipla para formulários.",
            href: "/primitivos/checkbox",
        },
        {
            name: "Switch",
            description: "Controle de alternância imediata entre dois estados (ligado/desligado).",
            href: "/primitivos/switch",
        },
        {
            name: "Badge",
            description: "Componente de rótulo compacto usado para exibir status, contagens ou metadados.",
            href: "/primitivos/badge",
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Square size={24} />
                            </div>
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Primitivos
                            </h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componentes fundamentais do Design System. São os blocos de construção básicos
                            que formam interfaces mais complexas.
                        </p>
                    </div>

                    {/* Components Grid */}
                    <section className="py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {primitivos.map((component) => (
                                <ComponentCard
                                    key={component.href}
                                    name={component.name}
                                    description={component.description}
                                    href={component.href}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
