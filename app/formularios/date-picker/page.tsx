"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const datePickerBasicCode = `<!-- Date Picker Basic -->
<div class="relative w-full max-w-xs">
  <input 
    type="date" 
    class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
  />
</div>`;

const datePickerRangeCode = `<!-- Date Range Picker (Visual Simulation) -->
<div class="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg max-w-sm">
  <div class="relative flex-1">
    <input 
      type="date"
      class="w-full bg-transparent border-none text-slate-900 dark:text-white text-sm focus:ring-0 p-1"
    />
  </div>
  <span class="text-slate-400">→</span>
  <div class="relative flex-1">
    <input 
      type="date"
      class="w-full bg-transparent border-none text-slate-900 dark:text-white text-sm focus:ring-0 p-1"
    />
  </div>
</div>`;

const datePickerCustomCode = `<!-- Custom Date Trigger -->
<button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300">
  <svg class="size-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
  <span>Selecione uma data</span>
</button>`;

const datePickerProps: PropDefinition[] = [
    {
        name: "value",
        type: "Date | Date[]",
        description: "Data selecionada ou array de datas (range)"
    },
    {
        name: "mode",
        type: '"single" | "range" | "multiple"',
        defaultValue: '"single"',
        description: "Modo de seleção"
    },
    {
        name: "minDate",
        type: "Date",
        description: "Data mínima permitida"
    },
    {
        name: "maxDate",
        type: "Date",
        description: "Data máxima permitida"
    },
];

function DatePickerBasicPreview() {
    const { bg, text, border } = useThemeClasses();

    return (
        <div className="relative w-full max-w-xs">
            <input
                type="date"
                className={`w-full px-4 py-2 rounded-lg border ${border} ${bg} ${text} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            />
        </div>
    );
}

function DatePickerRangePreview() {
    const { bg, text, border } = useThemeClasses();

    return (
        <div className={`flex items-center gap-2 p-2 ${bg} border ${border} rounded-lg max-w-sm`}>
            <div className="relative flex-1">
                <input
                    type="date"
                    className={`w-full bg-transparent border-none ${text} text-sm focus:ring-0 p-1`}
                />
            </div>
            <span className="text-slate-400">→</span>
            <div className="relative flex-1">
                <input
                    type="date"
                    className={`w-full bg-transparent border-none ${text} text-sm focus:ring-0 p-1`}
                />
            </div>
        </div>
    );
}

function DatePickerTriggerPreview() {
    const { bg, border, isDark } = useThemeClasses();

    return (
        <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${border} ${bg} ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-50 text-slate-700'} transition-colors`}>
            <svg className="size-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Selecione uma data</span>
        </button>
    );
}

export default function DatePickerPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Date Picker
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Formulário
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componente para seleção interativa de datas e intervalos de tempo.
                            Suporta seleção única, múltipla ou por intervalo.
                        </p>
                    </div>

                    {/* Basic */}
                    <ComponentShowcase
                        title="Seleção Simples"
                        description="Input nativo de data estilizado"
                        code={datePickerBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <DatePickerBasicPreview />
                    </ComponentShowcase>

                    {/* Range */}
                    <ComponentShowcase
                        title="Intervalo de Datas"
                        description="Seleção de data inicial e final"
                        code={datePickerRangeCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <DatePickerRangePreview />
                    </ComponentShowcase>

                    {/* Trigger Customizado */}
                    <ComponentShowcase
                        title="Trigger Customizado"
                        description="Botão para abrir calendário (apenas visual)"
                        code={datePickerCustomCode}
                    >
                        <DatePickerTriggerPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={datePickerProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
