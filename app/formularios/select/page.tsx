"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const selectBasicCode = `<!-- Select Basic -->
<div class="relative w-full max-w-xs">
  <select class="w-full appearance-none bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
    <option>Selecione uma opção</option>
    <option>Opção 1</option>
    <option>Opção 2</option>
    <option>Opção 3</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700 dark:text-slate-300">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
</div>`;

const selectStatesCode = `<!-- Select States -->
<!-- Disabled -->
<div class="relative w-full max-w-xs opacity-50 cursor-not-allowed">
  <select disabled class="w-full appearance-none bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500 py-2 px-4 pr-8 rounded-lg leading-tight cursor-not-allowed">
    <option>Desabilitado</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
</div>

<!-- Error -->
<div class="relative w-full max-w-xs">
  <select class="w-full appearance-none bg-white dark:bg-slate-900 border-2 border-red-500 text-slate-900 dark:text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 transition-all">
    <option>Erro de validação</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-red-500">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
</div>`;

const selectProps: PropDefinition[] = [
    {
        name: "options",
        type: "Option[]",
        description: "Array de objetos com label e value"
    },
    {
        name: "placeholder",
        type: "string",
        description: "Texto exibido quando nada está selecionado"
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Desabilita o select"
    },
    {
        name: "error",
        type: "boolean",
        defaultValue: "false",
        description: "Aplica estilo de erro"
    },
];

// Componentes de preview que usam o tema local
function SelectBasicPreview() {
    const { bg, text, border, textSecondary } = useThemeClasses();

    return (
        <div className="relative w-full max-w-xs">
            <select className={`w-full appearance-none ${bg} border ${border} ${text} py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}>
                <option>Selecione uma opção</option>
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${textSecondary}`}>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}

function SelectStatesPreview() {
    const { bg, text, border, bgSurface, isDark } = useThemeClasses();

    return (
        <>
            <div className="relative w-full max-w-xs opacity-50 cursor-not-allowed">
                <select disabled className={`w-full appearance-none ${bgSurface} border ${border} text-slate-500 py-2 px-4 pr-8 rounded-lg leading-tight cursor-not-allowed`}>
                    <option>Desabilitado</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>

            <div className="relative w-full max-w-xs">
                <select className={`w-full appearance-none ${bg} border-2 border-red-500 ${text} py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}>
                    <option>Erro de validação</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-red-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default function SelectPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Select
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Formulário
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componente de seleção que permite ao usuário escolher uma única opção de uma lista drop-down.
                            Interface nativa estilizada para consistência visual.
                        </p>
                    </div>

                    {/* Basic */}
                    <ComponentShowcase
                        title="Uso Básico"
                        description="Select simples estilizado"
                        code={selectBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <SelectBasicPreview />
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Select desabilitado e com erro"
                        code={selectStatesCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <SelectStatesPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={selectProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
