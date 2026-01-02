"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const tabsUnderlineCode = `<!-- Tabs Underline -->
<div class="border-b border-border">
  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
    <a href="#" class="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
      Minha Conta
    </a>
    <a href="#" class="border-transparent text-muted-foreground hover:text-foreground hover:border-border whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Empresa
    </a>
    <a href="#" class="border-transparent text-muted-foreground hover:text-foreground hover:border-border whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Membros
    </a>
    <a href="#" class="border-transparent text-muted-foreground hover:text-foreground hover:border-border whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Cobrança
    </a>
  </nav>
</div>`;

const tabsPillsCode = `<!-- Tabs Pills -->
<div class="flex space-x-2 bg-muted p-1 rounded-lg">
  <button class="bg-card text-foreground shadow-sm rounded-md py-2 px-4 text-sm font-medium transition-all">
    Mensal
  </button>
  <button class="text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-white rounded-md py-2 px-4 text-sm font-medium transition-all">
    Anual
  </button>
</div>`;

const tabsProps: PropDefinition[] = [
  {
    name: "defaultValue",
    type: "string",
    description: "Valor da aba selecionada inicialmente",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback disparado ao trocar de aba",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "Orientação das abas",
  },
];

function TabsUnderlinePreview() {
  const textActive = "text-primary border-primary";
  const textInactive = "text-muted-foreground hover:text-foreground";

  return (
    <div className={`border-border w-full border-b`}>
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        <a
          href="#"
          className={`${textActive} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
          aria-current="page"
        >
          Minha Conta
        </a>
        <a
          href="#"
          className={`border-transparent ${textInactive} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
        >
          Empresa
        </a>
        <a
          href="#"
          className={`border-transparent ${textInactive} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
        >
          Membros
        </a>
        <a
          href="#"
          className={`border-transparent ${textInactive} border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap`}
        >
          Cobrança
        </a>
      </nav>
    </div>
  );
}

function TabsPillsPreview() {
  const bgContainer = "bg-muted";
  const bgActive = "bg-card text-foreground shadow-sm";
  const textInactive = "text-muted-foreground hover:text-foreground";

  return (
    <div className={`flex space-x-2 ${bgContainer} rounded-lg p-1`}>
      <button
        className={`${bgActive} rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-all`}
      >
        Mensal
      </button>
      <button className={`${textInactive} rounded-md px-4 py-2 text-sm font-medium transition-all`}>
        Anual
      </button>
    </div>
  );
}

export default function TabsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          {/* Underline */}
          <ComponentShowcase
            title="Estilo Underline"
            description="Abas simples com indicador de borda inferior"
            code={tabsUnderlineCode}
            previewClassName="!block"
          >
            <TabsUnderlinePreview />
          </ComponentShowcase>

          {/* Pills */}
          <ComponentShowcase
            title="Estilo Pills (Segmented)"
            description="Abas com aparência de botão segmentado"
            code={tabsPillsCode}
            previewClassName="!flex-col !items-start"
          >
            <TabsPillsPreview />
          </ComponentShowcase>

          {/* API Reference */}
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={tabsProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
