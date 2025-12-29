import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Button } from "@/components/ui/button";

const buttonVariantsCode = `<!-- Button Variants -->
<button class="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
  Primary
</button>

<button class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
  Secondary
</button>

<button class="px-4 py-2 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
  Outline
</button>

<button class="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
  Ghost
</button>

<button class="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors">
  Destructive
</button>`;

const buttonSizesCode = `<!-- Button Sizes -->
<button class="px-3 py-1.5 rounded text-sm bg-primary text-white font-medium">
  Small
</button>

<button class="px-4 py-2 rounded-lg bg-primary text-white font-medium">
  Medium
</button>

<button class="px-6 py-3 rounded-lg text-lg bg-primary text-white font-medium">
  Large
</button>`;

const buttonStatesCode = `<!-- Button States -->
<button class="px-4 py-2 rounded-lg bg-primary text-white font-medium">
  Normal
</button>

<button class="px-4 py-2 rounded-lg bg-primary/50 text-white/70 font-medium cursor-not-allowed" disabled>
  Disabled
</button>

<button class="px-4 py-2 rounded-lg bg-primary text-white font-medium flex items-center gap-2">
  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading
</button>`;

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"',
    defaultValue: '"primary"',
    description: "Define o estilo visual do botão"
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "icon"',
    defaultValue: '"md"',
    description: "Define o tamanho do botão"
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Desabilita o botão"
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Exibe estado de carregamento"
  },
];

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero removed */}

          {/* Variantes */}
          <ComponentShowcase
            title="Variantes"
            description="Diferentes estilos visuais para diferentes contextos e hierarquias"
            code={buttonVariantsCode}
          >
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </ComponentShowcase>

          {/* Tamanhos */}
          <ComponentShowcase
            title="Tamanhos"
            description="Três tamanhos disponíveis para diferentes contextos de uso"
            code={buttonSizesCode}
          >
            <Button size="sm">Small</Button>
            <Button size="default">Medium</Button>
            <Button size="lg">Large</Button>
          </ComponentShowcase>

          {/* Estados */}
          <ComponentShowcase
            title="Estados"
            description="Estados visuais do botão (normal, disabled, loading)"
            code={buttonStatesCode}
          >
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </Button>
          </ComponentShowcase>

          {/* API Reference */}
          <div className="pt-12 border-t border-[var(--border)]">
            <PropsTable props={buttonProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
