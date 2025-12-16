"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const autocompleteBasicCode = `<!-- Autocomplete Basic -->
<div class="relative w-full max-w-xs group">
  <div class="relative">
    <input 
      type="text" 
      placeholder="Selecione um país..." 
      class="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    />
    <div class="absolute left-3 top-2.5 text-slate-400">
      <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
  
  <!-- Dropdown (simulado visível no hover para demo) -->
  <div class="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 hidden group-hover:block">
    <ul class="py-1 max-h-60 overflow-auto">
      <li class="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-slate-700 dark:text-slate-300 font-medium">Brasil</li>
      <li class="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-slate-700 dark:text-slate-300">Argentina</li>
      <li class="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-slate-700 dark:text-slate-300">Chile</li>
      <li class="px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer text-slate-700 dark:text-slate-300">Uruguai</li>
    </ul>
  </div>
</div>`;

const autocompleteWithBadgeCode = `<!-- Autocomplete Multi-select -->
<div class="w-full max-w-md space-y-2">
  <div class="flex flex-wrap gap-2 mb-2">
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
      React
      <button class="hover:text-red-500 transition-colors">
        <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
      TypeScript
      <button class="hover:text-red-500 transition-colors">
        <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
  </div>
  
  <div class="relative">
    <input 
      type="text" 
      placeholder="Adicionar tags..." 
      class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    />
  </div>
</div>`;

const autocompleteProps: PropDefinition[] = [
    {
        name: "suggestions",
        type: "string[] | object[]",
        description: "Lista de sugestões para filtrar"
    },
    {
        name: "onSelect",
        type: "(value: any) => void",
        description: "Callback executado ao selecionar um item"
    },
    {
        name: "multiple",
        type: "boolean",
        defaultValue: "false",
        description: "Permite seleção múltipla (tags)"
    },
    {
        name: "loading",
        type: "boolean",
        defaultValue: "false",
        description: "Exibe estado de carregamento nas sugestões"
    },
];

function AutocompleteBasicPreview() {
    const { bg, text, border, isDark } = useThemeClasses();

    return (
        <div className="relative w-full max-w-xs group">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Selecione um país..."
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${border} ${bg} ${text} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                />
                <div className="absolute left-3 top-2.5 text-slate-400">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Dropdown (simulado visível no hover para demo) */}
            <div className={`absolute z-10 w-full mt-1 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-lg shadow-lg border hidden group-hover:block`}>
                <ul className="py-1 max-h-60 overflow-auto">
                    <li className={`px-4 py-2 cursor-pointer font-medium ${isDark ? 'text-slate-300 bg-slate-700/50 hover:bg-slate-700' : 'text-slate-700 bg-slate-50 hover:bg-slate-100'}`}>Brasil</li>
                    <li className={`px-4 py-2 cursor-pointer ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-100'}`}>Argentina</li>
                    <li className={`px-4 py-2 cursor-pointer ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-100'}`}>Chile</li>
                    <li className={`px-4 py-2 cursor-pointer ${isDark ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-700 hover:bg-slate-100'}`}>Uruguai</li>
                </ul>
            </div>
        </div>
    );
}

function AutocompleteTagsPreview() {
    const { bg, text, border } = useThemeClasses();

    return (
        <div className="w-full max-w-md space-y-2">
            <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    React
                    <button className="hover:text-red-500 transition-colors">
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    TypeScript
                    <button className="hover:text-red-500 transition-colors">
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </span>
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Adicionar tags..."
                    className={`w-full px-4 py-2 rounded-lg border ${border} ${bg} ${text} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                />
            </div>
        </div>
    );
}

export default function AutocompletePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Autocomplete
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Formulário
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Campo de entrada inteligente que oferece sugestões enquanto o usuário digita.
                            Ideal para buscas, seleção de países ou listas extensas.
                        </p>
                    </div>

                    {/* Basic */}
                    <ComponentShowcase
                        title="Busca com Sugestões"
                        description="Dropdown aparece ao focar ou digitar (simulado com hover)"
                        code={autocompleteBasicCode}
                        previewClassName="!flex-col !items-start gap-4 !overflow-visible min-h-[300px]"
                    >
                        <AutocompleteBasicPreview />
                    </ComponentShowcase>

                    {/* Multi-select */}
                    <ComponentShowcase
                        title="Seleção Múltipla"
                        description="Autocomplete usado para criar tags"
                        code={autocompleteWithBadgeCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <AutocompleteTagsPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={autocompleteProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
