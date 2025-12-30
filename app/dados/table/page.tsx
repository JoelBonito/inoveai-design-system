"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";

const tableBasicCode = `<!-- Table Basic -->
<div class="relative overflow-x-auto rounded-lg border border-border">
  <table class="w-full text-sm text-left text-muted-foreground">
    <thead class="text-xs text-muted-foreground uppercase bg-card">
      <tr>
        <th scope="col" class="px-6 py-3">Nome do Produto</th>
        <th scope="col" class="px-6 py-3">Cor</th>
        <th scope="col" class="px-6 py-3">Categoria</th>
        <th scope="col" class="px-6 py-3">Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-popover border-b border-border">
        <th scope="row" class="px-6 py-4 font-medium text-foreground whitespace-nowrap">
          MacBook Pro
        </th>
        <td class="px-6 py-4">Prata</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4">R$ 12.999</td>
      </tr>
      <tr class="bg-popover border-b border-border">
        <th scope="row" class="px-6 py-4 font-medium text-foreground whitespace-nowrap">
          Magic Mouse 2
        </th>
        <td class="px-6 py-4">Branco</td>
        <td class="px-6 py-4">Acessório</td>
        <td class="px-6 py-4">R$ 599</td>
      </tr>
      <tr class="bg-popover">
        <th scope="row" class="px-6 py-4 font-medium text-foreground whitespace-nowrap">
          Monitor 4K
        </th>
        <td class="px-6 py-4">Preto</td>
        <td class="px-6 py-4">Monitor</td>
        <td class="px-6 py-4">R$ 2.499</td>
      </tr>
    </tbody>
  </table>
</div>`;

const tableProps: PropDefinition[] = [
    {
        name: "data",
        type: "T[]",
        description: "Array de dados para preencher a tabela"
    },
    {
        name: "columns",
        type: "ColumnDef[]",
        description: "Definição das colunas (header, accessor, cell)"
    },
    {
        name: "striped",
        type: "boolean",
        defaultValue: "false",
        description: "Alterna a cor de fundo das linhas"
    },
    {
        name: "hoverable",
        type: "boolean",
        defaultValue: "true",
        description: "Destaca a linha ao passar o mouse"
    },
];

function TableBasicPreview() {
    const thClass = "px-6 py-3 text-xs uppercase text-muted-foreground bg-card";
    const tdClass = "px-6 py-4";
    const trClass = "bg-popover border-b border-border last:border-0";
    const thRowClass = "px-6 py-4 font-medium text-foreground whitespace-nowrap";

    return (
        <div className="relative overflow-x-auto rounded-lg border border-border w-full">
            <table className="w-full text-sm text-left text-muted-foreground">
                <thead className={thClass}>
                    <tr>
                        <th scope="col" className="px-6 py-3">Nome do Produto</th>
                        <th scope="col" className="px-6 py-3">Cor</th>
                        <th scope="col" className="px-6 py-3">Categoria</th>
                        <th scope="col" className="px-6 py-3">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={trClass}>
                        <th scope="row" className={thRowClass}>
                            MacBook Pro
                        </th>
                        <td className={tdClass}>Prata</td>
                        <td className={tdClass}>Laptop</td>
                        <td className={tdClass}>R$ 12.999</td>
                    </tr>
                    <tr className={trClass}>
                        <th scope="row" className={thRowClass}>
                            Magic Mouse 2
                        </th>
                        <td className={tdClass}>Branco</td>
                        <td className={tdClass}>Acessório</td>
                        <td className={tdClass}>R$ 599</td>
                    </tr>
                    <tr className="bg-popover">
                        <th scope="row" className={thRowClass}>
                            Monitor 4K
                        </th>
                        <td className={tdClass}>Preto</td>
                        <td className={tdClass}>Monitor</td>
                        <td className={tdClass}>R$ 2.499</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function TablePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <main className="container mx-auto px-4 sm:px-8 pt-10 pb-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero removed */}

                    {/* Basic */}
                    <ComponentShowcase
                        title="Tabela Básica"
                        description="Estrutura padrão de tabela"
                        code={tableBasicCode}
                        previewClassName="!block"
                    >
                        <TableBasicPreview />
                    </ComponentShowcase>

                    {/* API Reference */}
                    <div className="pt-12 border-t border-[var(--border)]">
                        <PropsTable props={tableProps} />
                    </div>
                </div>
            </main>
        </div>
    );
}
