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
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="border-b border-[var(--border)] pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                <MessageSquare size={24} />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)]">
                Feedback
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Componentes vitais para comunicação do sistema com o usuário. Informam sobre status,
              erros, sucessos e atenção necessária.
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
