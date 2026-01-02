import { ComponentCard } from "@/components/component-card";
import { Square } from "lucide-react";

export default function PrimitivosPage() {
  const primitivos = [
    {
      name: "Botão",
      description:
        "Elemento interativo fundamental para acionar ações. Suporta variantes, tamanhos e estados.",
      href: "/primitivos/button",
    },
    {
      name: "Input",
      description:
        "Campo de entrada de texto com suporte para labels, mensagens de ajuda e estados de erro.",
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
      description:
        "Componente de rótulo compacto usado para exibir status, contagens ou metadados.",
      href: "/primitivos/badge",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="border-b border-[var(--border)] pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                <Square size={24} />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)]">
                Primitivos
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Componentes fundamentais do Design System. São os blocos de construção básicos que
              formam interfaces mais complexas.
            </p>
          </div>

          {/* Components Grid */}
          <section className="py-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
