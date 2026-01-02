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
      className="group hover:border-primary/50 hover:shadow-primary/5 relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:shadow-lg"
    >
      {/* Preview Area */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
        {/* Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {preview ? (
          <div className="relative z-10 scale-90 transition-transform duration-300 group-hover:scale-100">
            {preview}
          </div>
        ) : icon ? (
          <div className="bg-primary/10 text-primary relative z-10 flex size-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        ) : (
          <div className="bg-primary/10 relative z-10 flex size-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary text-2xl font-black">{name.charAt(0)}</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {isNew && (
            <span className="rounded border border-green-500/30 bg-green-500/20 px-2 py-0.5 text-[10px] font-bold text-green-400 uppercase">
              Novo
            </span>
          )}
          {isBeta && (
            <span className="rounded border border-yellow-500/30 bg-yellow-500/20 px-2 py-0.5 text-[10px] font-bold text-yellow-400 uppercase">
              Beta
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="group-hover:text-primary text-lg font-bold text-[var(--foreground)] transition-colors">
            {name}
          </h3>
          <ArrowRight
            size={18}
            className="group-hover:text-primary text-[var(--text-secondary)] transition-all group-hover:translate-x-1"
          />
        </div>
        <p className="line-clamp-2 text-sm text-[var(--text-secondary)]">{description}</p>
      </div>

      {/* Hover Glow Effect */}
      <div className="from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}
