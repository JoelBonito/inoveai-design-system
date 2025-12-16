import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const switchBasicCode = `<!-- Switch Basic -->
<label class="flex items-center gap-3 cursor-pointer">
  <div class="relative inline-flex items-center">
    <input type="checkbox" class="sr-only peer" />
    <div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
    <div class="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
  </div>
  <span class="text-slate-700 dark:text-slate-300">Notificações</span>
</label>

<label class="flex items-center gap-3 cursor-pointer">
  <div class="relative inline-flex items-center">
    <input type="checkbox" checked class="sr-only peer" />
    <div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
    <div class="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
  </div>
  <span class="text-slate-700 dark:text-slate-300">Modo Escuro</span>
</label>`;

const switchSizesCode = `<!-- Switch Sizes -->
<!-- Small -->
<div class="relative inline-flex items-center">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
  <div class="absolute left-0.5 top-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
</div>

<!-- Medium -->
<div class="relative inline-flex items-center">
  <input type="checkbox" checked class="sr-only peer" />
  <div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
  <div class="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
</div>`;

const switchStatesCode = `<!-- Switch States -->
<!-- Off -->
<div class="relative inline-flex items-center">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
  <div class="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
</div>

<!-- On -->
<div class="relative inline-flex items-center">
  <input type="checkbox" checked class="sr-only peer" />
  <div class="w-11 h-6 bg-primary rounded-full transition-colors"></div>
  <div class="absolute left-6 top-1 size-4 bg-white rounded-full shadow-sm"></div>
</div>

<!-- Disabled -->
<div class="relative inline-flex items-center opacity-50 cursor-not-allowed">
  <input type="checkbox" disabled class="sr-only peer" />
  <div class="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
  <div class="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
</div>`;

const switchProps: PropDefinition[] = [
    {
        name: "checked",
        type: "boolean",
        defaultValue: "false",
        description: "Define se o switch está ativado"
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Desabilita o switch"
    },
    {
        name: "size",
        type: '"sm" | "md"',
        defaultValue: '"md"',
        description: "Tamanho do switch"
    },
    {
        name: "onChange",
        type: "(checked: boolean) => void",
        description: "Callback executado quando o estado muda"
    },
];

export default function SwitchPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Switch
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Primitivo
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Controle de alternância imediata entre dois estados (ligado/desligado), funcionando como um interruptor físico.
                            Ideal para configurações e preferências do usuário.
                        </p>
                    </div>

                    {/* Basic */}
                    <ComponentShowcase
                        title="Uso Básico"
                        description="Switch simples com label"
                        code={switchBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative inline-flex items-center">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
                                <div className="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">Notificações</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div className="relative inline-flex items-center">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
                                <div className="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">Modo Escuro</span>
                        </label>
                    </ComponentShowcase>

                    {/* Tamanhos */}
                    <ComponentShowcase
                        title="Tamanhos"
                        description="Dois tamanhos disponíveis"
                        code={switchSizesCode}
                    >
                        <div className="relative inline-flex items-center">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
                            <div className="absolute left-0.5 top-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
                            <div className="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                        </div>
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Estados visuais do switch"
                        code={switchStatesCode}
                    >
                        <div className="relative inline-flex items-center">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer-checked:bg-primary transition-colors"></div>
                            <div className="absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
                        </div>
                        <div className="relative inline-flex items-center">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-primary rounded-full transition-colors"></div>
                            <div className="absolute left-6 top-1 size-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                        <div className="relative inline-flex items-center opacity-50 cursor-not-allowed">
                            <input type="checkbox" disabled className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                            <div className="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={switchProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
