import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ComponentCardProps {
    /** Nome do componente */
    name: string;
    /** Descrição breve */
    description: string;
    /** URL da página do componente */
    href: string;
    /** Mini preview do componente (opcional) */
    preview?: ReactNode;
    /** Ícone do componente (opcional) */
    icon?: ReactNode;
    /** Se o componente é novo */
    isNew?: boolean;
    /** Se o componente está em beta */
    isBeta?: boolean;
}

/**
 * ComponentCard - Card de navegação para listagem de componentes
 * 
 * Usado nas páginas de categoria para listar os componentes disponíveis
 * com mini preview, descrição e link para a página detalhada.
 * 
 * @example
 * <ComponentCard
 *   name="Button"
 *   description="Elemento interativo para ações"
 *   href="/primitivos/button"
 *   isNew
 * />
 */
export function ComponentCard({
    name,
    description,
    href,
    preview,
    icon,
    isNew = false,
    isBeta = false,
}: ComponentCardProps) {
    return (
        <Link
            href={href}
            className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] 
                       overflow-hidden transition-all duration-200 
                       hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
        >
            {/* Preview Area */}
            <div className="relative h-40 bg-[var(--background)] border-b border-[var(--border)] 
                            flex items-center justify-center overflow-hidden">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                    }}
                />

                {preview ? (
                    <div className="relative z-10 scale-90 group-hover:scale-100 transition-transform duration-300">
                        {preview}
                    </div>
                ) : icon ? (
                    <div className="relative z-10 size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary
                                    group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                ) : (
                    <div className="relative z-10 size-16 rounded-xl bg-primary/10 flex items-center justify-center
                                    group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-black text-primary">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                    {isNew && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase 
                                        bg-green-500/20 text-green-400 border border-green-500/30">
                            Novo
                        </span>
                    )}
                    {isBeta && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase 
                                        bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            Beta
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <ArrowRight
                        size={18}
                        className="text-[var(--text-secondary)] group-hover:text-primary group-hover:translate-x-1 transition-all"
                    />
                </div>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>
    );
}
