"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const paginationBasicCode = `<!-- Pagination Basic -->
<nav class="flex items-center justify-between border-t border-border px-4 sm:px-0">
  <div class="-mt-px flex w-0 flex-1">
    <a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">
      <svg class="mr-3 h-5 w-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
      </svg>
      Anterior
    </a>
  </div>
  <div class="hidden md:-mt-px md:flex">
    <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">1</a>
    <a href="#" class="inline-flex items-center border-t-2 border-primary px-4 pt-4 text-sm font-medium text-primary" aria-current="page">2</a>
    <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">3</a>
    <span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground">...</span>
    <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">8</a>
    <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">9</a>
    <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">10</a>
  </div>
  <div class="-mt-px flex w-0 flex-1 justify-end">
    <a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-muted-foreground hover:border-border hover:text-muted-foreground dark:hover:text-white dark:hover:border-border">
      Próximo
      <svg class="ml-3 h-5 w-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</nav>`;

const paginationCardCode = `<!-- Pagination Card Style -->
<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
  <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-muted-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 dark:ring-border dark:hover:bg-muted">
    <span class="sr-only">Anterior</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
    </svg>
  </a>
  <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">1</a>
  <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-border dark:hover:bg-muted">2</a>
  <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-white dark:ring-border dark:hover:bg-muted">3</a>
  <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border focus:outline-offset-0 dark:text-muted-foreground dark:ring-border">...</span>
  <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 md:inline-flex dark:text-white dark:ring-border dark:hover:bg-muted">8</a>
  <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-border dark:hover:bg-muted">9</a>
  <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 dark:text-white dark:ring-border dark:hover:bg-muted">10</a>
  <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-muted-foreground ring-1 ring-inset ring-border hover:bg-accent focus:z-20 focus:outline-offset-0 dark:ring-border dark:hover:bg-muted">
    <span class="sr-only">Próximo</span>
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
    </svg>
  </a>
</nav>`;

const paginationProps: PropDefinition[] = [
    {
        name: "currentPage",
        type: "number",
        description: "Página atual ativa"
    },
    {
        name: "totalPages",
        type: "number",
        description: "Número total de páginas"
    },
    {
        name: "onPageChange",
        type: "(page: number) => void",
        description: "Callback disparado ao mudar de página"
    },
];

function PaginationBasicPreview() {
    const textDefault = "text-muted-foreground hover:text-foreground hover:border-border";
    const textPrimary = "text-primary border-primary";

    return (
        <nav className={`flex items-center justify-between border-t border-border px-4 sm:px-0 w-full`}>
            <div className="-mt-px flex w-0 flex-1">
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium ${textDefault}`}>
                    <ChevronLeft className="mr-3 h-5 w-5 text-muted-foreground" />
                    Anterior
                </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${textDefault}`}>1</a>
                <a href="#" className={`inline-flex items-center border-t-2 ${textPrimary} px-4 pt-4 text-sm font-medium`} aria-current="page">2</a>
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${textDefault}`}>3</a>
                <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-muted-foreground">...</span>
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${textDefault}`}>8</a>
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${textDefault}`}>9</a>
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${textDefault}`}>10</a>
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <a href="#" className={`inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium ${textDefault}`}>
                    Próximo
                    <ChevronRight className="ml-3 h-5 w-5 text-muted-foreground" />
                </a>
            </div>
        </nav>
    );
}

function PaginationCardPreview() {
    const ringColor = "ring-border";
    const hoverBg = "hover:bg-accent";
    const textColor = "text-foreground";
    const textMuted = "text-muted-foreground";

    const itemClass = `relative inline-flex items-center px-4 py-2 text-sm font-semibold ${textColor} ring-1 ring-inset ${ringColor} ${hoverBg} focus:z-20 focus:outline-offset-0`;
    const activeClass = "relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

    return (
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-muted-foreground ring-1 ring-inset ${ringColor} ${hoverBg} focus:z-20 focus:outline-offset-0`}>
                <span className="sr-only">Anterior</span>
                <ChevronLeft className="h-5 w-5" />
            </a>
            <a href="#" aria-current="page" className={activeClass}>1</a>
            <a href="#" className={itemClass}>2</a>
            <a href="#" className={`${itemClass} hidden md:inline-flex`}>3</a>
            <span className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${textMuted} ring-1 ring-inset ${ringColor} focus:outline-offset-0`}>...</span>
            <a href="#" className={`${itemClass} hidden md:inline-flex`}>8</a>
            <a href="#" className={itemClass}>9</a>
            <a href="#" className={itemClass}>10</a>
            <a href="#" className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-muted-foreground ring-1 ring-inset ${ringColor} ${hoverBg} focus:z-20 focus:outline-offset-0`}>
                <span className="sr-only">Próximo</span>
                <ChevronRight className="h-5 w-5" />
            </a>
        </nav>
    );
}

export default function PaginationPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Basic */}
                    <ComponentShowcase
                        title="Estilo Básico"
                        description="Paginação minimalista com bordas superiores"
                        code={paginationBasicCode}
                        previewClassName="!block"
                    >
                        <PaginationBasicPreview />
                    </ComponentShowcase>

                    {/* Card Style */}
                    <ComponentShowcase
                        title="Estilo Card (Isolado)"
                        description="Paginação com botões agrupados e bordas conectadas"
                        code={paginationCardCode}
                    >
                        <PaginationCardPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={paginationProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
