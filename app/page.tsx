import Link from "next/link";
import {
  Square,
  FormInput,
  BarChart3,
  Navigation,
  MessageSquare,
  Palette,
  ArrowRight,
  Sparkles
} from "lucide-react";

const CATEGORIES = [
  {
    name: "Primitivos",
    description: "Componentes base como Botão, Input, Checkbox, Switch e Badge.",
    href: "/primitivos",
    icon: Square,
    count: 5,
    color: "bg-blue-500",
  },
  {
    name: "Formulários",
    description: "Select, Autocomplete, Date Picker e File Upload.",
    href: "/formularios",
    icon: FormInput,
    count: 4,
    color: "bg-emerald-500",
  },
  {
    name: "Dados",
    description: "Tabelas interativas e gráficos (Barras, Linha, Donut).",
    href: "/dados",
    icon: BarChart3,
    count: 2,
    color: "bg-amber-500",
  },
  {
    name: "Navegação",
    description: "Tabs, Breadcrumbs, Paginação e estruturas de layout.",
    href: "/navegacao",
    icon: Navigation,
    count: 4,
    color: "bg-purple-500",
  },
  {
    name: "Feedback",
    description: "Modal, Toast, Tooltip, Empty State e páginas de erro.",
    href: "/feedback",
    icon: MessageSquare,
    count: 5,
    color: "bg-rose-500",
  },
];

export default function HomePage() {
  const totalComponents = CATEGORIES.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center py-16 border-b border-[var(--border)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>v2.0 — Totalmente Reestruturado</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Stitch Design System
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              Uma coleção de {totalComponents}+ componentes React renderizados com código,
              organizados em categorias para fácil navegação e reutilização.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tokens"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
              >
                <Palette size={18} />
                Ver Design Tokens
              </Link>
              <Link
                href="/primitivos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] font-semibold hover:bg-[var(--background)] transition-colors"
              >
                Explorar Componentes
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm text-center">
              <div className="text-3xl font-bold text-[var(--foreground)] mb-1">{totalComponents}</div>
              <div className="text-sm text-[var(--text-secondary)]">Componentes</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm text-center">
              <div className="text-3xl font-bold text-primary mb-1">{CATEGORIES.length}</div>
              <div className="text-sm text-[var(--text-secondary)]">Categorias</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-1">2</div>
              <div className="text-sm text-[var(--text-secondary)]">Temas</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm text-center">
              <div className="text-3xl font-bold text-[var(--foreground)] mb-1">100%</div>
              <div className="text-sm text-[var(--text-secondary)]">Código Real</div>
            </div>
          </div>

          {/* Categories Grid */}
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-8">Explorar por Categoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`size-12 rounded-lg ${category.color} flex items-center justify-center text-white`}>
                      <category.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--background)] text-[var(--text-secondary)]">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="absolute bottom-4 right-4 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-12 border-t border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-6">Acesso Rápido</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/tokens" className="p-4 rounded-lg border border-[var(--border)] hover:border-primary/50 transition-colors text-center">
                <Palette className="mx-auto mb-2 text-[var(--text-secondary)]" size={24} />
                <span className="text-sm font-medium">Design Tokens</span>
              </Link>
              <Link href="/primitivos/button" className="p-4 rounded-lg border border-[var(--border)] hover:border-primary/50 transition-colors text-center">
                <Square className="mx-auto mb-2 text-[var(--text-secondary)]" size={24} />
                <span className="text-sm font-medium">Botão</span>
              </Link>
              <Link href="/formularios/select" className="p-4 rounded-lg border border-[var(--border)] hover:border-primary/50 transition-colors text-center">
                <FormInput className="mx-auto mb-2 text-[var(--text-secondary)]" size={24} />
                <span className="text-sm font-medium">Select</span>
              </Link>
              <Link href="/feedback/modal" className="p-4 rounded-lg border border-[var(--border)] hover:border-primary/50 transition-colors text-center">
                <MessageSquare className="mx-auto mb-2 text-[var(--text-secondary)]" size={24} />
                <span className="text-sm font-medium">Modal</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 mt-8">
        <div className="container mx-auto px-8 text-center text-[var(--text-secondary)] text-sm">
          <p>Stitch Design System © 2025 — Desenvolvido com Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
