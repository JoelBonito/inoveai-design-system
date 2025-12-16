import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const checkboxBasicCode = `<!-- Checkbox Basic -->
<label class="flex items-center gap-2 cursor-pointer">
  <input 
    type="checkbox" 
    class="size-5 rounded border-2 border-slate-300 dark:border-slate-700 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer transition-all checked:bg-primary checked:border-primary"
  />
  <span class="text-slate-700 dark:text-slate-300 select-none">Aceito os termos</span>
</label>

<label class="flex items-center gap-2 cursor-pointer">
  <input 
    type="checkbox" 
    checked
    class="size-5 rounded border-2 border-slate-300 dark:border-slate-700 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer transition-all checked:bg-primary checked:border-primary"
  />
  <span class="text-slate-700 dark:text-slate-300 select-none">Notificações por email</span>
</label>`;

const checkboxStatesCode = `<!-- Checkbox States -->
<label class="flex items-center gap-2 cursor-pointer">
  <input 
    type="checkbox" 
    class="size-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary cursor-pointer"
  />
  <span class="text-slate-700 dark:text-slate-300">Normal</span>
</label>

<label class="flex items-center gap-2 cursor-pointer">
  <input 
    type="checkbox" 
    checked
    class="size-5 rounded border-2 border-primary bg-primary text-white focus:ring-2 focus:ring-primary cursor-pointer"
  />
  <span class="text-slate-700 dark:text-slate-300">Checked</span>
</label>

<label class="flex items-center gap-2 cursor-not-allowed opacity-50">
  <input 
    type="checkbox" 
    disabled
    class="size-5 rounded border-2 border-slate-300 dark:border-slate-700 cursor-not-allowed"
  />
  <span class="text-slate-400">Disabled</span>
</label>`;

const checkboxGroupCode = `<!-- Checkbox Group -->
<div class="space-y-3">
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" checked class="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
    <span class="text-slate-700 dark:text-slate-300">React</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" checked class="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
    <span class="text-slate-700 dark:text-slate-300">TypeScript</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" class="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
    <span class="text-slate-700 dark:text-slate-300">Next.js</span>
  </label>
</div>`;

const checkboxProps: PropDefinition[] = [
    {
        name: "checked",
        type: "boolean",
        defaultValue: "false",
        description: "Define se o checkbox está marcado"
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Desabilita o checkbox"
    },
    {
        name: "label",
        type: "string",
        description: "Label associado ao checkbox"
    },
    {
        name: "onChange",
        type: "(checked: boolean) => void",
        description: "Callback executado quando o estado muda"
    },
];

export default function CheckboxPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Checkbox
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Primitivo
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Controle de seleção binária ou múltipla. Permite que o usuário selecione uma ou mais opções
                            de um conjunto. Ideal para formulários e configurações.
                        </p>
                    </div>

                    {/* Basic */}
                    <ComponentShowcase
                        title="Uso Básico"
                        description="Checkbox simples com label"
                        code={checkboxBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="size-5 rounded border-2 border-slate-300 dark:border-slate-700 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer transition-all checked:bg-primary checked:border-primary"
                            />
                            <span className="text-slate-700 dark:text-slate-300 select-none">Aceito os termos</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="size-5 rounded border-2 border-slate-300 dark:border-slate-700 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer transition-all checked:bg-primary checked:border-primary"
                            />
                            <span className="text-slate-700 dark:text-slate-300 select-none">Notificações por email</span>
                        </label>
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Estados visuais do checkbox"
                        code={checkboxStatesCode}
                    >
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="size-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                            />
                            <span className="text-slate-700 dark:text-slate-300">Normal</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="size-5 rounded border-2 border-primary bg-primary text-white focus:ring-2 focus:ring-primary cursor-pointer"
                            />
                            <span className="text-slate-700 dark:text-slate-300">Checked</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                            <input
                                type="checkbox"
                                disabled
                                className="size-5 rounded border-2 border-slate-300 dark:border-slate-700 cursor-not-allowed"
                            />
                            <span className="text-slate-400">Disabled</span>
                        </label>
                    </ComponentShowcase>

                    {/* Group */}
                    <ComponentShowcase
                        title="Grupo de Checkboxes"
                        description="Múltiplas opções selecionáveis"
                        code={checkboxGroupCode}
                    >
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
                                <span className="text-slate-700 dark:text-slate-300">React</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
                                <span className="text-slate-700 dark:text-slate-300">TypeScript</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="size-5 rounded border-2 text-primary focus:ring-2 focus:ring-primary cursor-pointer checked:bg-primary checked:border-primary" />
                                <span className="text-slate-700 dark:text-slate-300">Next.js</span>
                            </label>
                        </div>
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={checkboxProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
