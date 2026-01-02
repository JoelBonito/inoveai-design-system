"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const tooltipTopCode = `<!-- Tooltip Top -->
<div class="relative flex flex-col items-center group">
  <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
    Passe o mouse
  </button>
  <div class="absolute bottom-full mb-2 hidden flex-col items-center group-hover:flex">
    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-popover shadow-lg rounded-md dark:bg-card">
      Tooltip no topo
    </span>
    <div class="w-3 h-3 -mt-2 rotate-45 bg-popover"></div>
  </div>
</div>`;

const tooltipRightCode = `<!-- Tooltip Right -->
<div class="relative flex items-center group">
  <button class="bg-popover border border-border px-4 py-2 rounded-md text-sm font-medium text-foreground">
    Direita
  </button>
  <div class="absolute left-full ml-2 hidden items-center group-hover:flex">
    <div class="w-3 h-3 -mr-2 rotate-45 bg-popover"></div>
    <span class="relative z-10 p-2 text-xs leading-none text-popover-foreground whitespace-no-wrap bg-popover shadow-lg rounded-md border border-border">
      Tooltip na direita
    </span>
  </div>
</div>`;

const tooltipProps: PropDefinition[] = [
  {
    name: "content",
    type: "string | ReactNode",
    description: "Conteúdo a ser exibido no tooltip",
  },
  {
    name: "side",
    type: "'top' | 'right' | 'bottom' | 'left'",
    description: "Posição do tooltip em relação ao trigger",
  },
  {
    name: "delayDuration",
    type: "number",
    description: "Tempo em ms antes de exibir (padrão: 700)",
  },
];

function TooltipTopPreview() {
  const btnClass = "bg-primary text-primary-foreground hover:bg-primary/90";

  const tooltipBg = "bg-card";

  return (
    <div className="group relative flex flex-col items-center">
      <button className={`${btnClass} rounded-md px-4 py-2 text-sm font-medium transition-colors`}>
        Passe o mouse (Topo)
      </button>
      <div className="absolute bottom-full mb-2 hidden flex-col items-center group-hover:flex">
        <span
          className={`text-card-foreground relative z-10 p-2 text-xs leading-none whitespace-nowrap ${tooltipBg} border-border rounded-md border shadow-lg`}
        >
          Tooltip Exemplo
        </span>
        <div
          className={`-mt-2 h-3 w-3 rotate-45 ${tooltipBg} border-border border-b border-l`}
        ></div>
      </div>
    </div>
  );
}

function TooltipRightPreview() {
  return (
    <div className="group relative flex items-center">
      <button className="bg-popover border-border text-foreground hover:bg-accent rounded-md border px-4 py-2 text-sm font-medium transition-colors">
        Passe o mouse (Direita)
      </button>
      <div className="absolute left-full ml-2 hidden items-center group-hover:flex">
        <div className="bg-popover -mr-2 h-3 w-3 rotate-45"></div>
        <span className="text-popover-foreground bg-popover border-border relative z-10 rounded-md border p-2 text-xs leading-none whitespace-nowrap shadow-lg">
          Informação extra
        </span>
      </div>
    </div>
  );
}

export default function TooltipPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Hero removed */}

          {/* Top */}
          <ComponentShowcase
            title="Posição Superior"
            description="Tooltip aparecendo acima do elemento (padrão)."
            code={tooltipTopCode}
            previewClassName="flex justify-center items-center h-32"
          >
            <TooltipTopPreview />
          </ComponentShowcase>

          {/* Right */}
          <ComponentShowcase
            title="Posição Lateral"
            description="Tooltip aparecendo à direita do elemento."
            code={tooltipRightCode}
            previewClassName="flex justify-center items-center h-32"
          >
            <TooltipRightPreview />
          </ComponentShowcase>

          {/* API Reference */}
          <div className="border-t border-[var(--border)] pt-12">
            <PropsTable props={tooltipProps} />
          </div>
        </div>
      </main>
    </div>
  );
}
