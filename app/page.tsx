import Link from "next/link";
import {
  Square,
  FormInput,
  BarChart3,
  Navigation,
  MessageSquare,
  Palette,
  ArrowRight,
  Sparkles,
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

// import { redirect } from "next/navigation";

export default function HomePage() {
  // redirect("/colors");
  const totalComponents = CATEGORIES.reduce((acc, cat) => acc + cat.count, 0);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pb-6 md:grid-cols-4">
            <div className="bg-card border-border rounded-xl border p-5 text-center shadow-sm">
              <div className="text-foreground mb-1 text-3xl font-bold">{totalComponents}</div>
              <div className="text-text-secondary text-sm">Componentes</div>
            </div>
            <div className="bg-card border-border rounded-xl border p-5 text-center shadow-sm">
              <div className="text-primary mb-1 text-3xl font-bold">{CATEGORIES.length}</div>
              <div className="text-text-secondary text-sm">Categorias</div>
            </div>
            <div className="bg-card border-border rounded-xl border p-5 text-center shadow-sm">
              <div className="mb-1 text-3xl font-bold text-emerald-500">2</div>
              <div className="text-text-secondary text-sm">Temas</div>
            </div>
            <div className="bg-card border-border rounded-xl border p-5 text-center shadow-sm">
              <div className="text-foreground mb-1 text-3xl font-bold">100%</div>
              <div className="text-text-secondary text-sm">Código Real</div>
            </div>
          </div>

          {/* Categories Grid */}
          <section className="pt-6 pb-8">
            <h2 className="mb-8 text-2xl font-bold">Explorar por Categoria</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group border-border bg-card hover:border-primary/50 relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`size-12 rounded-lg ${category.color} flex items-center justify-center text-white`}
                    >
                      <category.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="group-hover:text-primary text-lg font-semibold transition-colors">
                          {category.name}
                        </h3>
                        <span className="bg-background text-text-secondary rounded-full px-2 py-0.5 text-xs">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-text-secondary absolute right-4 bottom-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="border-border border-t pt-8 pb-4">
            <h2 className="mb-6 text-2xl font-bold">Acesso Rápido</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Link
                href="/tokens"
                className="border-border bg-card hover:border-primary/50 rounded-lg border p-4 text-center transition-colors"
              >
                <Palette className="text-text-secondary mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Design Tokens</span>
              </Link>
              <Link
                href="/primitivos/button"
                className="border-border bg-card hover:border-primary/50 rounded-lg border p-4 text-center transition-colors"
              >
                <Square className="text-text-secondary mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Botão</span>
              </Link>
              <Link
                href="/formularios/select"
                className="border-border bg-card hover:border-primary/50 rounded-lg border p-4 text-center transition-colors"
              >
                <FormInput className="text-text-secondary mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Select</span>
              </Link>
              <Link
                href="/feedback/modal"
                className="border-border bg-card hover:border-primary/50 rounded-lg border p-4 text-center transition-colors"
              >
                <MessageSquare className="text-text-secondary mx-auto mb-2" size={24} />
                <span className="text-sm font-medium">Modal</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border mt-0 border-t pt-6 pb-2">
        <div className="text-text-secondary container mx-auto px-8 text-center text-sm">
          <p>Stitch Design System © 2025 — Desenvolvido com Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
