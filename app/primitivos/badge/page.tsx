import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const badgeVariantsCode = `<!-- Badge Variants -->
<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Primary
</span>

<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
  Secondary
</span>

<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
  Success
</span>

<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
  Warning
</span>

<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
  Error
</span>`;

const badgeSizesCode = `<!-- Badge Sizes -->
<span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
  Small
</span>

<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Medium
</span>

<span class="px-3 py-1 rounded text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
  Large
</span>`;

const badgeShapesCode = `<!-- Badge Shapes -->
<span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Soft
</span>

<span class="px-2.5 py-0.5 rounded-none text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  Square
</span>`;

const badgeWithIconCode = `<!-- Badge With Icon -->
<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
  <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
  </svg>
  Verificado
</span>

<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
  <span class="size-2 rounded-full bg-green-500"></span>
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
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Badge
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Primitivo
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componente de rótulo compacto usado para exibir status, contagens ou metadados de forma visual.
                            Ideal para indicadores de notificação, tags e estados.
                        </p>
                    </div>

                    {/* Variantes */}
                    <ComponentShowcase
                        title="Variantes"
                        description="Diferentes cores para diferentes contextos semânticos"
                        code={badgeVariantsCode}
                    >
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            Primary
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            Secondary
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                            Success
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
                            Warning
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                            Error
                        </span>
                    </ComponentShowcase>

                    {/* Tamanhos */}
                    <ComponentShowcase
                        title="Tamanhos"
                        description="Três tamanhos disponíveis"
                        code={badgeSizesCode}
                    >
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20">
                            Small
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            Medium
                        </span>
                        <span className="px-3 py-1 rounded text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                            Large
                        </span>
                    </ComponentShowcase>

                    {/* Formatos */}
                    <ComponentShowcase
                        title="Formatos"
                        description="Diferentes estilos de borderRadius"
                        code={badgeShapesCode}
                    >
                        <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            Soft
                        </span>
                        <span className="px-2.5 py-0.5 rounded-none text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            Square
                        </span>
                    </ComponentShowcase>

                    {/* Com Ícone */}
                    <ComponentShowcase
                        title="Com Ícone"
                        description="Badges com ícones e indicadores"
                        code={badgeWithIconCode}
                    >
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                            <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verificado
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                            <span className="size-2 rounded-full bg-green-500"></span>
                            Online
                        </span>
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
