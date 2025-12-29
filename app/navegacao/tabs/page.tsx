"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const tabsUnderlineCode = `<!-- Tabs Underline -->
<div class="border-b border-slate-200 dark:border-slate-800">
  <nav class="-mb-px flex space-x-8" aria-label="Tabs">
    <a href="#" class="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" aria-current="page">
      Minha Conta
    </a>
    <a href="#" class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Empresa
    </a>
    <a href="#" class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Membros
    </a>
    <a href="#" class="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">
      Cobrança
    </a>
  </nav>
</div>`;

const tabsPillsCode = `<!-- Tabs Pills -->
<div class="flex space-x-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
  <button class="bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm rounded-md py-2 px-4 text-sm font-medium transition-all">
    Mensal
  </button>
  <button class="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-md py-2 px-4 text-sm font-medium transition-all">
    Anual
  </button>
</div>`;

const tabsProps: PropDefinition[] = [
    {
        name: "defaultValue",
        type: "string",
        description: "Valor da aba selecionada inicialmente"
    },
    {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback disparado ao trocar de aba"
    },
    {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        defaultValue: '"horizontal"',
        description: "Orientação das abas"
    },
];

function TabsUnderlinePreview() {
    const { border, isDark } = useThemeClasses();
    const textActive = "text-primary border-primary";
    const textInactive = isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-700";

    return (
        <div className={`border-b ${border} w-full`}>
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a href="#" className={`${textActive} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`} aria-current="page">
                    Minha Conta
                </a>
                <a href="#" className={`border-transparent ${textInactive} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}>
                    Empresa
                </a>
                <a href="#" className={`border-transparent ${textInactive} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}>
                    Membros
                </a>
                <a href="#" className={`border-transparent ${textInactive} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}>
                    Cobrança
                </a>
            </nav>
        </div>
    );
}

function TabsPillsPreview() {
    const { isDark } = useThemeClasses();
    const bgContainer = isDark ? "bg-slate-800" : "bg-slate-100";
    const bgActive = isDark ? "bg-slate-700 text-white" : "bg-white text-slate-900";
    const textInactive = isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900";

    return (
        <div className={`flex space-x-2 ${bgContainer} p-1 rounded-lg`}>
            <button className={`${bgActive} shadow-sm rounded-md py-2 px-4 text-sm font-medium transition-all`}>
                Mensal
            </button>
            <button className={`${textInactive} rounded-md py-2 px-4 text-sm font-medium transition-all`}>
                Anual
            </button>
        </div>
    );
}

export default function TabsPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
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
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={tabsProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
