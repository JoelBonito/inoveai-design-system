import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { Switch } from "@/components/ui/switch";

const switchBasicCode = `<!-- Switch Basic -->
<div class="flex items-center gap-2 space-x-2">
  <Switch id="airplane" />
  <label htmlFor="airplane" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Modo Avião</label>
</div>`;

const switchStatesCode = `<!-- Switch States -->
<!-- Off -->
<Switch />

<!-- On -->
<Switch checked />

<!-- Disabled -->
<Switch disabled />`;

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
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback executado quando o estado muda"
    },
];

export default function SwitchPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Basic */}
                    <ComponentShowcase
                        title="Uso Básico"
                        description="Switch simples com label"
                        code={switchBasicCode}
                        previewClassName="!flex-col !items-start gap-4"
                    >
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" />
                            <label htmlFor="airplane-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Modo Avião</label>
                        </div>
                    </ComponentShowcase>

                    {/* Estados */}
                    <ComponentShowcase
                        title="Estados"
                        description="Estados visuais do switch"
                        code={switchStatesCode}
                    >
                        <Switch />
                        <Switch defaultChecked />
                        <Switch disabled />
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
