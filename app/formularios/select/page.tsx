"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const selectBasicCode = `<!-- Select Basic -->
<div class="relative w-full max-w-xs">
  <select class="w-full appearance-none bg-background border border-border text-foreground py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
    <option>Selecione uma opção</option>
    <option>Opção 1</option>
    <option>Opção 2</option>
    <option>Opção 3</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
</div>`;

const selectStatesCode = `<!-- Select States -->
<!-- Disabled -->
<div class="relative w-full max-w-xs opacity-50 cursor-not-allowed">
  <select disabled class="w-full appearance-none bg-muted border border-border text-muted-foreground py-2 px-4 pr-8 rounded-lg leading-tight cursor-not-allowed">
    <option>Desabilitado</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
    </svg>
  </div>
</div>

<!-- Error -->
<div class="relative w-full max-w-xs">
  <select class="w-full appearance-none bg-background border-2 border-destructive text-foreground py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-destructive transition-all">
    <option>Erro de validação</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-destructive">
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


// Componentes de preview usando tokens CSS diretos
function SelectBasicPreview() {
    return (
        <div className="relative w-full max-w-xs">
            <select className="w-full appearance-none bg-background border border-border text-foreground py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                <option>Selecione uma opção</option>
                <option>Opção 1</option>
                <option>Opção 2</option>
                <option>Opção 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
}

function SelectStatesPreview() {
    return (
        <>
            <div className="relative w-full max-w-xs opacity-50 cursor-not-allowed">
                <select disabled className="w-full appearance-none bg-muted border border-border text-muted-foreground py-2 px-4 pr-8 rounded-lg leading-tight cursor-not-allowed">
                    <option>Desabilitado</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>

            <div className="relative w-full max-w-xs">
                <select className="w-full appearance-none bg-background border-2 border-destructive text-foreground py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-destructive transition-all">
                    <option>Erro de validação</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-destructive">
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
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

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
