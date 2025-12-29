import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxBasicCode = `<!-- Checkbox Basic -->
<label class="flex items-center gap-2 cursor-pointer">
  <Checkbox />
  <span class="text-slate-700 dark:text-slate-300 select-none">Aceito os termos</span>
</label>

<label class="flex items-center gap-2 cursor-pointer">
  <Checkbox checked />
  <span class="text-slate-700 dark:text-slate-300 select-none">Notificações por email</span>
</label>`;

const checkboxStatesCode = `<!-- Checkbox States -->
<label class="flex items-center gap-2 cursor-pointer">
  <Checkbox />
  <span class="text-slate-700 dark:text-slate-300">Normal</span>
</label>

<label class="flex items-center gap-2 cursor-pointer">
  <Checkbox checked />
  <span class="text-slate-700 dark:text-slate-300">Checked</span>
</label>

<label class="flex items-center gap-2 cursor-not-allowed opacity-50">
  <Checkbox disabled />
  <span class="text-slate-400">Disabled</span>
</label>`;

const checkboxGroupCode = `<!-- Checkbox Group -->
<div class="space-y-3">
  <label class="flex items-center gap-2 cursor-pointer">
    <Checkbox checked />
    <span class="text-slate-700 dark:text-slate-300">React</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <Checkbox checked />
    <span class="text-slate-700 dark:text-slate-300">TypeScript</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <Checkbox />
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
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback executado quando o estado muda"
    },
];

export default function CheckboxPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Basic */}
                    <ComponentShowcase
                        title="Uso Básico"
                        description="Checkbox simples com label"
                        code={checkboxBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Aceito os termos
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="newsletter" defaultChecked />
                            <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Notificações por email
                            </label>
                        </div>
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Estados visuais do checkbox"
                        code={checkboxStatesCode}
                    >
                        <div className="flex items-center gap-2">
                            <Checkbox id="normal" />
                            <label htmlFor="normal" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Normal</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="checked" defaultChecked />
                            <label htmlFor="checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Checked</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="disabled" disabled />
                            <label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</label>
                        </div>
                    </ComponentShowcase>

                    {/* Group */}
                    <ComponentShowcase
                        title="Grupo de Checkboxes"
                        description="Múltiplas opções selecionáveis"
                        code={checkboxGroupCode}
                    >
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="react" defaultChecked />
                                <label htmlFor="react" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">React</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="ts" defaultChecked />
                                <label htmlFor="ts" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">TypeScript</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="next" />
                                <label htmlFor="next" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Next.js</label>
                            </div>
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
