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
        description: "Conteúdo a ser exibido no tooltip"
    },
    {
        name: "side",
        type: "'top' | 'right' | 'bottom' | 'left'",
        description: "Posição do tooltip em relação ao trigger"
    },
    {
        name: "delayDuration",
        type: "number",
        description: "Tempo em ms antes de exibir (padrão: 700)"
    },
];

function TooltipTopPreview() {
    const btnClass = "bg-primary text-primary-foreground hover:bg-primary/90";

    const tooltipBg = "bg-card";

    return (
        <div className="relative flex flex-col items-center group">
            <button className={`${btnClass} px-4 py-2 rounded-md text-sm font-medium transition-colors`}>
                Passe o mouse (Topo)
            </button>
            <div className="absolute bottom-full mb-2 hidden flex-col items-center group-hover:flex">
                <span className={`relative z-10 p-2 text-xs leading-none text-card-foreground whitespace-nowrap ${tooltipBg} shadow-lg rounded-md border border-border`}>
                    Tooltip Exemplo
                </span>
                <div className={`w-3 h-3 -mt-2 rotate-45 ${tooltipBg} border-l border-b border-border`}></div>
            </div>
        </div>
    );
}

function TooltipRightPreview() {
    return (
        <div className="relative flex items-center group">
            <button className="bg-popover border border-border px-4 py-2 rounded-md text-sm font-medium text-foreground transition-colors hover:bg-accent">
                Passe o mouse (Direita)
            </button>
            <div className="absolute left-full ml-2 hidden items-center group-hover:flex">
                <div className="w-3 h-3 -mr-2 rotate-45 bg-popover"></div>
                <span className="relative z-10 p-2 text-xs leading-none text-popover-foreground whitespace-nowrap bg-popover shadow-lg rounded-md border border-border">
                    Informação extra
                </span>
            </div>
        </div>
    );
}

export default function TooltipPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
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
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={tooltipProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
