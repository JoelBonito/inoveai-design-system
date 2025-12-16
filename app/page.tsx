import fs from 'fs';
import path from 'path';
import { ComponentGallery } from '@/components/component-gallery';

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  darkMode: { screenshot: string; htmlPath: string } | null;
  lightMode: { screenshot: string; htmlPath: string } | null;
  tokensUsed: string[];
  tags: string[];
}

export default async function HomePage() {
  // Read components.json
  const componentsPath = path.join(process.cwd(), 'data', 'components.json');
  const componentsData = JSON.parse(fs.readFileSync(componentsPath, 'utf-8')) as Component[];

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-[1600px]">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="flex flex-col gap-6 pb-8 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl lg:text-5xl font-black text-[var(--foreground)] tracking-tight">
                Galeria de Componentes
              </h1>
              <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                {componentsData.length} Componentes
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
              Explore todos os componentes do Stitch Design System. Cada componente está disponível nos modos claro e escuro.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-[var(--foreground)] mb-1">{componentsData.length}</div>
              <div className="text-sm text-[var(--text-secondary)]">Componentes</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-[var(--text-secondary)]">Modos</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-emerald-500 mb-1">
                {new Set(componentsData.map(c => c.category)).size}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">Categorias</div>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-[var(--foreground)] mb-1">100%</div>
              <div className="text-sm text-[var(--text-secondary)]">Cobertura</div>
            </div>
          </div>

          {/* Interactive Gallery */}
          <ComponentGallery components={componentsData} />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 mt-20">
        <div className="container mx-auto px-8 text-center text-[var(--text-secondary)] text-sm">
          <p>Stitch Design System © 2025 - Desenvolvido com Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
