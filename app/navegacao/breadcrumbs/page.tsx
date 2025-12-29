"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";
import { ChevronRight, Home } from "lucide-react";

const breadcrumbBasicCode = `<!-- Breadcrumb Basic -->
<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-400 dark:hover:text-white">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <a href="#" class="ml-1 text-sm font-medium text-slate-700 hover:text-primary md:ml-2 dark:text-slate-400 dark:hover:text-white">Projetos</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
        </svg>
        <span class="ml-1 text-sm font-medium text-slate-500 md:ml-2 dark:text-slate-400">Design System</span>
      </div>
    </li>
  </ol>
</nav>`;

const breadcrumbSlashesCode = `<!-- Breadcrumb Slashes -->
<nav class="flex" aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2">
    <li><a href="#" class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Docs</a></li>
    <li><span class="text-slate-400">/</span></li>
    <li><a href="#" class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Componentes</a></li>
    <li><span class="text-slate-400">/</span></li>
    <li><span class="text-slate-900 dark:text-white font-medium">Breadcrumb</span></li>
  </ol>
</nav>`;

const breadcrumbProps: PropDefinition[] = [
    {
        name: "separator",
        type: "ReactNode",
        description: "Elemento separador (ex: Chevron, Slash)"
    },
    {
        name: "items",
        type: "{ label: string, href?: string }[]",
        description: "Lista de itens da trilha"
    },
];

function BreadcrumbBasicPreview() {
    const { isDark } = useThemeClasses();
    const textLink = isDark ? "text-slate-400 hover:text-white" : "text-slate-700 hover:text-primary";
    const textCurrent = isDark ? "text-slate-500" : "text-slate-500";
    const iconColor = "text-slate-400";

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="#" className={`inline-flex items-center text-sm font-medium ${textLink}`}>
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <ChevronRight className={`w-5 h-5 ${iconColor}`} />
                        <a href="#" className={`ml-1 text-sm font-medium ${textLink} md:ml-2`}>Projetos</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <ChevronRight className={`w-5 h-5 ${iconColor}`} />
                        <span className={`ml-1 text-sm font-medium ${textCurrent} md:ml-2`}>Design System</span>
                    </div>
                </li>
            </ol>
        </nav>
    );
}

function BreadcrumbSlashesPreview() {
    const { isDark } = useThemeClasses();
    const textLink = isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900";
    const textCurrent = isDark ? "text-white" : "text-slate-900";
    const separator = "text-slate-400";

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
                <li><a href="#" className={textLink}>Docs</a></li>
                <li><span className={separator}>/</span></li>
                <li><a href="#" className={textLink}>Componentes</a></li>
                <li><span className={separator}>/</span></li>
                <li><span className={`${textCurrent} font-medium`}>Breadcrumb</span></li>
            </ol>
        </nav>
    );
}

export default function BreadcrumbPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Basic */}
                    <ComponentShowcase
                        title="Estilo com Ícones"
                        description="Breadcrumb padrão com separadores de seta (Chevron)"
                        code={breadcrumbBasicCode}
                        previewClassName="!flex-col !items-start"
                    >
                        <BreadcrumbBasicPreview />
                    </ComponentShowcase>

                    {/* Slashes */}
                    <ComponentShowcase
                        title="Estilo Minimalista"
                        description="Separadores de barra simples"
                        code={breadcrumbSlashesCode}
                        previewClassName="!flex-col !items-start"
                    >
                        <BreadcrumbSlashesPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={breadcrumbProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
