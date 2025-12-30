"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Search, FolderOpen, Plus } from "lucide-react";

const emptySearchCode = `<!-- Empty State Search -->
<div class="text-center py-12 bg-background rounded-lg border border-dashed border-border">
  <div class="inline-flex size-12 items-center justify-center rounded-full bg-muted">
    <svg class="size-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  </div>
  <h3 class="mt-4 text-sm font-semibold text-foreground">Nenhum resultado encontrado</h3>
  <p class="mt-1 text-sm text-muted-foreground">Não encontramos nada com "xyz". Tente ajustar sua busca.</p>
</div>`;

const emptyDataCode = `<!-- Empty State Data -->
<div class="text-center py-12 bg-background rounded-lg border border-dashed border-border">
  <div class="inline-flex size-14 items-center justify-center rounded-full bg-primary/10">
    <svg class="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.41l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  </div>
  <h3 class="mt-4 text-lg font-semibold text-foreground">Sem projetos</h3>
  <p class="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
    Comece criando um novo projeto para organizar suas tarefas.
  </p>
  <div class="mt-6">
    <button type="button" class="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
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
    const iconBg = "bg-muted";
    const dashedBorder = "border-border";
    const descColor = "text-muted-foreground";

    return (
        <div className={`text-center py-12 bg-background rounded-lg border border-dashed ${dashedBorder}`}>
            <div className={`inline-flex size-12 items-center justify-center rounded-full ${iconBg}`}>
                <Search className="size-6 text-muted-foreground" />
            </div>
            <h3 className={`mt-4 text-sm font-semibold text-foreground`}>Nenhum resultado encontrado</h3>
            <p className={`mt-1 text-sm ${descColor}`}>Não encontramos nada com "xyz". Tente ajustar sua busca.</p>
        </div>
    );
}

function EmptyStateDataPreview() {
    return (
        <div className="text-center py-12 bg-background rounded-lg border border-dashed border-border">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10">
                <FolderOpen className="size-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Sem projetos</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                Comece criando um novo projeto para organizar suas tarefas.
            </p>
            <div className="mt-6">
                <button type="button" className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
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
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

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
