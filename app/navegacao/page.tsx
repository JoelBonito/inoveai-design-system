import { ComponentCard } from "@/components/component-card";
import { Compass } from "lucide-react";

export default function NavegacaoPage() {
    const components = [
        {
            name: "Tabs",
            description: "Navegação em abas para alternar entre diferentes visualizações no mesmo contexto.",
            href: "/navegacao/tabs",
        },
        {
            name: "Breadcrumbs",
            description: "Trilha de navegação que ajuda o usuário a entender sua localização atual.",
            href: "/navegacao/breadcrumbs",
        },
        {
            name: "Paginação",
            description: "Navegação entre múltiplas páginas de dados.",
            href: "/navegacao/paginacao",
        },
        {
            name: "Headers & Sidebar",
            description: "Estruturas principais de navegação e layout.",
            href: "/navegacao/headers",
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
                                <Compass size={24} />
                            </div>
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Navegação
                            </h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componentes essenciais para guiar o usuário através da aplicação.
                            Inclui menus, abas e indicadores estruturais.
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
