"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Input } from "@/components/ui/input";

const inputTypesCode = `<!-- Input Types -->
<input type="text" placeholder="Digite seu nome..." class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

<input type="email" placeholder="seu@email.com" class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

<input type="password" placeholder="Senha secreta" class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />`;

const inputStatesCode = `<!-- Input States -->
<!-- Normal -->
<input type="text" placeholder="Normal" class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

<!-- Error -->
<input type="text" placeholder="Email inválido" class="w-full max-w-xs px-4 py-2 rounded-lg border-2 border-red-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />

<!-- Disabled -->
<input type="text" placeholder="Desabilitado" disabled class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 cursor-not-allowed" />`;

const inputSizesCode = `<!-- Input Sizes -->
<input type="text" placeholder="Small" class="w-full max-w-xs px-3 py-1.5 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

<input type="text" placeholder="Medium" class="w-full max-w-xs px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

<input type="text" placeholder="Large" class="w-full max-w-xs px-5 py-3 text-lg rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />`;

const inputProps: PropDefinition[] = [
    {
        name: "type",
        type: '"text" | "email" | "password" | "number" | ...',
        defaultValue: '"text"',
        description: "Tipo do input HTML"
    },
    {
        name: "placeholder",
        type: "string",
        description: "Texto de placeholder"
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Desabilita o input"
    },
    {
        name: "error",
        type: "boolean",
        defaultValue: "false",
        description: "Aplica estilo de erro"
    },
    {
        name: "size",
        type: '"sm" | "md" | "lg"',
        defaultValue: '"md"',
        description: "Tamanho do input"
    },
];

export default function InputPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Tipos */}
                    <ComponentShowcase
                        title="Tipos"
                        description="Diferentes tipos de input para validação específica"
                        code={inputTypesCode}
                        previewClassName="!flex-col !items-center gap-4"
                    >
                        <Input type="text" placeholder="Digite seu nome..." className="max-w-xs" />
                        <Input type="email" placeholder="seu@email.com" className="max-w-xs" />
                        <Input type="password" placeholder="Senha secreta" className="max-w-xs" />
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Estados visuais do input (normal, error, disabled)"
                        code={inputStatesCode}
                        previewClassName="!flex-col !items-center gap-4"
                    >
                        <Input type="text" placeholder="Normal" className="max-w-xs" />
                        <Input type="text" placeholder="Email inválido" className="max-w-xs border-red-500 focus-visible:ring-red-500" />
                        <Input type="text" placeholder="Desabilitado" disabled className="max-w-xs" />
                    </ComponentShowcase>

                    {/* Tamanhos */}
                    <ComponentShowcase
                        title="Tamanhos"
                        description="Três tamanhos disponíveis (simulados via classe por enquanto)"
                        code={inputSizesCode}
                        previewClassName="!flex-col !items-center gap-4"
                    >
                        <Input type="text" placeholder="Small" className="max-w-xs h-8 text-xs" />
                        <Input type="text" placeholder="Medium" className="max-w-xs" />
                        <Input type="text" placeholder="Large" className="max-w-xs h-12 text-lg" />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={inputProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
