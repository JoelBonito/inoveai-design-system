interface PropDefinition {
    /** Nome da propriedade */
    name: string;
    /** Tipo TypeScript */
    type: string;
    /** Valor padrão */
    defaultValue?: string;
    /** Descrição da prop */
    description: string;
    /** Se é obrigatória */
    required?: boolean;
}

interface PropsTableProps {
    /** Lista de definições de props */
    props: PropDefinition[];
    /** Título da seção */
    title?: string;
}

/**
 * PropsTable - Tabela de documentação de API/Props
 * 
 * Exibe de forma organizada todas as props de um componente
 * com tipos, valores padrão e descrições.
 * 
 * @example
 * <PropsTable
 *   props={[
 *     { name: "variant", type: '"primary" | "secondary"', defaultValue: '"primary"', description: "Estilo visual" },
 *     { name: "disabled", type: "boolean", defaultValue: "false", description: "Desabilita o componente" },
 *   ]}
 * />
 */
export function PropsTable({ props, title = "API Reference" }: PropsTableProps) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[var(--foreground)]">
                {title}
            </h3>

            <div className="rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--surface)]">
                <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--background)] border-b border-[var(--border)]">
                        <tr>
                            <th className="px-6 py-4 font-bold text-[var(--foreground)] uppercase text-xs tracking-wider">
                                Prop
                            </th>
                            <th className="px-6 py-4 font-bold text-[var(--foreground)] uppercase text-xs tracking-wider">
                                Tipo
                            </th>
                            <th className="px-6 py-4 font-bold text-[var(--foreground)] uppercase text-xs tracking-wider">
                                Padrão
                            </th>
                            <th className="px-6 py-4 font-bold text-[var(--foreground)] uppercase text-xs tracking-wider">
                                Descrição
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)]">
                        {props.map((prop) => (
                            <tr
                                key={prop.name}
                                className="group hover:bg-[var(--background)]/50 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <code className="font-mono font-bold text-primary">
                                            {prop.name}
                                        </code>
                                        {prop.required && (
                                            <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                                                Obrigatório
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <code className="font-mono text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                                        {prop.type}
                                    </code>
                                </td>
                                <td className="px-6 py-4">
                                    {prop.defaultValue ? (
                                        <code className="font-mono text-xs text-[var(--text-secondary)]">
                                            {prop.defaultValue}
                                        </code>
                                    ) : (
                                        <span className="text-[var(--text-secondary)]/50">—</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-[var(--text-secondary)]">
                                    {prop.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export type { PropDefinition };
