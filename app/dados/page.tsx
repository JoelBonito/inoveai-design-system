import { ComponentCard } from "@/components/component-card";
import { BarChart3 } from "lucide-react";

export default function DadosPage() {
    const components = [
        {
            name: "Tabela",
            description: "Componente para exibição de dados tabulares com suporte a ordenação e paginação.",
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
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <BarChart3 size={24} />
                            </div>
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Dados
                            </h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componentes para exibição e visualização de dados complexos.
                            Inclui tabelas responsivas e gráficos interativos.
                        </p>
                    </div>

                    {/* Components Grid */}
                    <section className="py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
