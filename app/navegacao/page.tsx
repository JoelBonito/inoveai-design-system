import { ComponentCard } from "@/components/component-card";
import { Compass } from "lucide-react";

export default function NavegacaoPage() {
  const components = [
    {
      name: "Tabs",
      description:
        "Navegação em abas para alternar entre diferentes visualizações no mesmo contexto.",
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
      <main className="container mx-auto px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="border-b border-[var(--border)] pb-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-xl">
                <Compass size={24} />
              </div>
              <h1 className="text-5xl font-black tracking-tight text-[var(--foreground)]">
                Navegação
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Componentes essenciais para guiar o usuário através da aplicação. Inclui menus, abas e
              indicadores estruturais.
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
