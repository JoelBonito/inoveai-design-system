"use client";

import { ComponentShowcase } from "@/components/component-showcase";
import { PropsTable, PropDefinition } from "@/components/props-table";
import { useThemeClasses } from "@/components/showcase-theme-context";

const tableBasicCode = `<!-- Table Basic -->
<div class="relative overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
  <table class="w-full text-sm text-left text-slate-500 dark:text-slate-400">
    <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-400">
      <tr>
        <th scope="col" class="px-6 py-3">Nome do Produto</th>
        <th scope="col" class="px-6 py-3">Cor</th>
        <th scope="col" class="px-6 py-3">Categoria</th>
        <th scope="col" class="px-6 py-3">Preço</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-white dark:bg-slate-900 border-b dark:border-slate-800">
        <th scope="row" class="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
          MacBook Pro
        </th>
        <td class="px-6 py-4">Prata</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4">R$ 12.999</td>
      </tr>
      <tr class="bg-white dark:bg-slate-900 border-b dark:border-slate-800">
        <th scope="row" class="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
          Magic Mouse 2
        </th>
        <td class="px-6 py-4">Branco</td>
        <td class="px-6 py-4">Acessório</td>
        <td class="px-6 py-4">R$ 599</td>
      </tr>
      <tr class="bg-white dark:bg-slate-900">
        <th scope="row" class="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap">
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
    const { bg, text, border, bgSurface, textSecondary, isDark } = useThemeClasses();

    // Classes específicas para tabela
    const thClass = `px-6 py-3 text-xs uppercase ${isDark ? 'text-slate-400 bg-slate-800' : 'text-slate-700 bg-slate-50'}`;
    const tdClass = "px-6 py-4";
    const trClass = `${bg} border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} last:border-0`;
    const thRowClass = `px-6 py-4 font-medium ${text} whitespace-nowrap`;

    return (
        <div className={`relative overflow-x-auto rounded-lg border ${border} w-full`}>
            <table className={`w-full text-sm text-left ${textSecondary}`}>
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
                    <tr className={`${bg}`}>
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
            <main className="container mx-auto px-4 sm:px-8 py-8">
                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Hero */}
                    <div className="pb-8 border-b border-[var(--border)]">
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black text-[var(--foreground)] tracking-tight">
                                Table
                            </h1>
                            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold border border-primary/20 capitalize">
                                Dados
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg max-w-3xl">
                            Componente de tabela responsivo para exibição de conjuntos de dados.
                            Suporta cabeçalhos fixos, ordenação e estados de loading.
                        </p>
                    </div>

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
