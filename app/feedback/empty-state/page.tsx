"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";
import { Search, FolderOpen, Plus } from "lucide-react";

const emptySearchCode = `<!-- Empty State Search -->
<div class="text-center py-12 bg-white dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
  <div class="inline-flex size-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
    <svg class="size-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </div>
  <h3 class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Nenhum resultado encontrado</h3>
  <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Não encontramos nada com "xyz". Tente ajustar sua busca.</p>
</div>`;

const emptyDataCode = `<!-- Empty State Data -->
<div class="text-center py-12 bg-white dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
  <div class="inline-flex size-14 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20">
    <svg class="size-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.41l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  </div>
  <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Sem projetos</h3>
  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
    Comece criando um novo projeto para organizar suas tarefas.
  </p>
  <div class="mt-6">
    <button type="button" class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      <svg class="-ml-0.5 size-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
      </svg>
      Novo Projeto
    </button>
  </div>
</div>`;

const emptyStateProps: PropDefinition[] = [
    {
        name: "title",
        type: "string",
        description: "Título principal do estado vazio"
    },
    {
        name: "description",
        type: "string",
        description: "Descrição explicativa ou instrução"
    },
    {
        name: "icon",
        type: "ReactNode",
        description: "Ícone ilustrativo central"
    },
    {
        name: "action",
        type: "ReactNode",
        description: "Botão de ação principal (opcional)"
    },
];

function EmptyStateSearchPreview() {
    const { bg, border, text, isDark } = useThemeClasses();
    const iconBg = isDark ? "bg-slate-800" : "bg-slate-100";
    const dashedBorder = isDark ? "border-slate-700" : "border-slate-300";
    const descColor = isDark ? "text-slate-400" : "text-slate-500";

    return (
        <div className={`text-center py-12 ${bg} rounded-lg border border-dashed ${dashedBorder}`}>
            <div className={`inline-flex size-12 items-center justify-center rounded-full ${iconBg}`}>
                <Search className="size-6 text-slate-400" />
            </div>
            <h3 className={`mt-4 text-sm font-semibold ${text}`}>Nenhum resultado encontrado</h3>
            <p className={`mt-1 text-sm ${descColor}`}>Não encontramos nada com "xyz". Tente ajustar sua busca.</p>
        </div>
    );
}

function EmptyStateDataPreview() {
    const { bg, border, text, isDark } = useThemeClasses();
    const iconBg = isDark ? "bg-blue-900/20" : "bg-blue-50";
    const iconColor = isDark ? "text-blue-400" : "text-blue-600";
    const dashedBorder = isDark ? "border-slate-700" : "border-slate-300";
    const descColor = isDark ? "text-slate-400" : "text-slate-500";

    return (
        <div className={`text-center py-12 ${bg} rounded-lg border border-dashed ${dashedBorder}`}>
            <div className={`inline-flex size-14 items-center justify-center rounded-full ${iconBg}`}>
                <FolderOpen className={`size-6 ${iconColor}`} />
            </div>
            <h3 className={`mt-4 text-lg font-semibold ${text}`}>Sem projetos</h3>
            <p className={`mt-2 text-sm ${descColor} max-w-sm mx-auto`}>
                Comece criando um novo projeto para organizar suas tarefas.
            </p>
            <div className="mt-6">
                <button type="button" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    <Plus className="-ml-0.5 size-5" />
                    Novo Projeto
                </button>
            </div>
        </div>
    );
}

export default function EmptyStatePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Empty State
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Feedback
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componente utilizado quando não há dados a serem exibidos. Deve explicar o motivo e, se possível, oferecer uma ação para resolver.
                        </p>
                    </div>

                    {/* Search */}
                    <ComponentShowcase
                        title="Busca Vazia"
                        description="Exibido quando filtros ou buscas não retornam resultados."
                        code={emptySearchCode}
                        previewClassName="p-6"
                    >
                        <EmptyStateSearchPreview />
                    </ComponentShowcase>

                    {/* Data */}
                    <ComponentShowcase
                        title="Sem Dados (com Ação)"
                        description="Estado inicial de uma lista ou tabela vazia, encorajando o primeiro cadastro."
                        code={emptyDataCode}
                        previewClassName="p-6"
                    >
                        <EmptyStateDataPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={emptyStateProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
