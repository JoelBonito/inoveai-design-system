"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const autocompleteBasicCode = `<!-- Autocomplete Basic -->
<div class="relative w-full max-w-xs group">
  <div class="relative">
    <input 
      type="text" 
      placeholder="Selecione um país..." 
      class="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    />
    <div class="absolute left-3 top-2.5 text-muted-foreground">
      <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
  
  <!-- Dropdown (simulado visível no hover para demo) -->
  <div class="absolute z-10 w-full mt-1 bg-popover rounded-lg shadow-lg border border-border hidden group-hover:block">
    <ul class="py-1 max-h-60 overflow-auto">
      <li class="px-4 py-2 hover:bg-accent cursor-pointer text-foreground font-medium">Brasil</li>
      <li class="px-4 py-2 hover:bg-accent cursor-pointer text-foreground">Argentina</li>
      <li class="px-4 py-2 hover:bg-accent cursor-pointer text-foreground">Chile</li>
      <li class="px-4 py-2 hover:bg-accent cursor-pointer text-foreground">Uruguai</li>
    </ul>
  </div>
</div>`;

const autocompleteWithBadgeCode = `<!-- Autocomplete Multi-select -->
<div class="w-full max-w-md space-y-2">
  <div class="flex flex-wrap gap-2 mb-2">
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
      React
      <button class="hover:text-destructive transition-colors">
        <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </span>
    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
      TypeScript
      <button class="hover:text-destructive transition-colors">
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
      class="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
    />
  </div>
</div>`;

const autocompleteProps: PropDefinition[] = [
  {
    name: "suggestions",
    type: "string[] | object[]",
    description: "Lista de sugestões para filtrar",
  },
  {
    name: "onSelect",
    type: "(value: any) => void",
    description: "Callback executado ao selecionar um item",
  },
  {
    name: "multiple",
    type: "boolean",
    defaultValue: "false",
    description: "Permite seleção múltipla (tags)",
  },
  {
    name: "loading",
    type: "boolean",
    defaultValue: "false",
    description: "Exibe estado de carregamento nas sugestões",
  },
];

function AutocompleteBasicPreview() {
  return (
    <div className="group relative w-full max-w-xs">
      <div className="relative">
        <input
          type="text"
          placeholder="Selecione um país..."
          className="border-border bg-background text-foreground focus:ring-primary w-full rounded-lg border py-2 pr-4 pl-10 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
        <div className="text-muted-foreground absolute top-2.5 left-3">
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown (simulado visível no hover para demo) */}
      <div className="bg-popover border-border absolute z-10 mt-1 hidden w-full rounded-lg border shadow-lg group-hover:block">
        <ul className="max-h-60 overflow-auto py-1">
          <li className="bg-accent/50 hover:bg-accent text-foreground cursor-pointer px-4 py-2 font-medium">
            Brasil
          </li>
          <li className="hover:bg-accent text-foreground cursor-pointer px-4 py-2">Argentina</li>
          <li className="hover:bg-accent text-foreground cursor-pointer px-4 py-2">Chile</li>
          <li className="hover:bg-accent text-foreground cursor-pointer px-4 py-2">Uruguai</li>
        </ul>
      </div>
    </div>
  );
}

function AutocompleteTagsPreview() {
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="mb-2 flex flex-wrap gap-2">
        <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold">
          React
          <button className="hover:text-destructive transition-colors">
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
        <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-semibold">
          TypeScript
          <button className="hover:text-destructive transition-colors">
            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Adicionar tags..."
          className="border-border bg-background text-foreground focus:ring-primary w-full rounded-lg border px-4 py-2 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default function AutocompletePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

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
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={autocompleteProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
