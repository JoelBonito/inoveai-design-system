import { ComponentCard } from "@/components/component-card";
import { MessageSquare } from "lucide-react";

export default function FeedbackPage() {
    const components = [
        {
            name: "Modal",
            description: "Janelas de diálogo sobrepostas para capturar foco e atenção do usuário.",
            href: "/feedback/modal",
        },
        {
            name: "Toast",
            description: "Notificações temporárias e não obstrutivas para feedback de operações.",
            href: "/feedback/toast",
        },
        {
            name: "Tooltip",
            description: "Pequenos popups informativos que aparecem ao passar o mouse.",
            href: "/feedback/tooltip",
        },
        {
            name: "Empty State",
            description: "Componentes para lidar com estados vazios de dados ou pesquisa.",
            href: "/feedback/empty-state",
        },
        {
            name: "Página de Erro",
            description: "Páginas dedicadas para comunicar erros de sistema ou acesso.",
            href: "/feedback/error-page",
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
                                <MessageSquare size={24} />
                            </div>
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Feedback
                            </h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componentes vitais para comunicação do sistema com o usuário.
                            Informam sobre status, erros, sucessos e atenção necessária.
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
