import { ComponentCard } from "@/components/component-card";
import { BarChart3 } from "lucide-react";

export default function DadosPage() {
  const components = [
    {
      name: "Tabela",
      description:
        "Componente para exibição de dados tabulares com suporte a ordenação e paginação.",
      href: "/dados/table",
    },
    {
      name: "Gráfico",
      description: "Visualização de dados estatísticos usando gráficos de linha e barra.",
      href: "/dados/chart",
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
                <BarChart3 size={24} />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)]">Dados</h1>
            </div>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Componentes para exibição e visualização de dados complexos. Inclui tabelas
              responsivas e gráficos interativos.
            </p>
          </div>

          {/* Components Grid */}
          <section className="py-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {components.map((component) => (
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
