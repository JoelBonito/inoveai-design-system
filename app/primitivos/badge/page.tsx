import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Badge } from "@/components/ui/badge";

const badgeVariantsCode = `<!-- Badge Variants -->
<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Primary
</span>

<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-muted text-muted-foreground border border-border">
  Secondary
</span>

<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
  Success
</span>

<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
  Warning
</span>

<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/20">
  Error
</span>`;

const badgeSizesCode = `<!-- Badge Sizes -->
<span class="px-1.5 py-0.5 rounded-lg text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
  Small
</span>

<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Medium
</span>

<span class="px-3 py-1 rounded-lg text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
  Large
</span>`;

const badgeShapesCode = `<!-- Badge Shapes -->
<span class="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Soft
</span>

<span class="px-2.5 py-0.5 rounded-none text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Square
</span>`;

const badgeWithIconCode = `<!-- Badge With Icon -->
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  Verificado
</span>

<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
  <span class="size-2 rounded-full bg-emerald-500"></span>
  Online
</span>`;

const badgeProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "success" | "warning" | "error"',
    defaultValue: '"primary"',
    description: "Define a cor e o estilo do badge"
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "Define o tamanho do badge"
  },
  {
    name: "shape",
    type: '"soft" | "square"',
    defaultValue: '"soft"',
    description: "Define o formato das bordas"
  },
];

export default function BadgePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero removed */}

          {/* Variantes */}
          <ComponentShowcase
            title="Variantes"
            description="Diferentes cores para diferentes contextos semânticos"
            code={badgeVariantsCode}
          >
            <Badge variant="brand">Brand</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </ComponentShowcase>

          {/* Tamanhos */}
          <ComponentShowcase
            title="Tamanhos"
            description="Três tamanhos disponíveis conforme o Design System"
            code={badgeSizesCode}
          >
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </ComponentShowcase>

          {/* Formatos */}
          <ComponentShowcase
            title="Formatos"
            description="Diferentes estilos de borderRadius (Soft = 8px [Padrão], Square = 0px)"
            code={badgeShapesCode}
          >
            <Badge shape="soft">Soft (8px)</Badge>
            <Badge shape="square">Square (0px)</Badge>
          </ComponentShowcase>

          {/* Com Ícone */}
          <ComponentShowcase
            title="Com Ícone"
            description="Badges com ícones e indicadores"
            code={badgeWithIconCode}
          >
            <Badge className="gap-1" variant="brand">
              <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verificado
            </Badge>
            <Badge variant="success" className="gap-1">
              <span className="size-2 rounded-full bg-emerald-500"></span>
              Online
            </Badge>
          </ComponentShowcase>

          {/* API Reference */}
          <div className="pt-12 border-t border-[var(--border)]">
            <PropsTable props={badgeProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
