"use client";

import React, { useState, useMemo, useRef } from "react";
import { Search, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { VirtuosoGrid } from "react-virtuoso";

import { MATERIAL_SYMBOLS } from "./icon-service";

// Get all Lucide icon names (excluding internal exports and generic Icon component)
const lucideIconList = Object.keys(LucideIcons).filter(
  (key) =>
    key !== "createLucideIcon" &&
    key !== "default" &&
    key !== "Icon" && // Exclude empty base component which causes crash
    /^[A-Z]/.test(key)
);

// Grid item component for Lucide icons
const LucideIconCard = ({
  iconName,
  onCopy,
  copied,
}: {
  iconName: string;
  onCopy: (code: string) => void;
  copied: string | null;
}) => {
  // @ts-ignore
  const Icon = LucideIcons[iconName];
  if (!Icon) return null;

  const code = `<${iconName} />`;

  return (
    <button
      onClick={() => onCopy(code)}
      className="group hover:border-primary/50 relative flex aspect-square h-full w-full flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:bg-[var(--surface)]/80"
      title={iconName} // Fallback nativo
    >
      <Icon className="h-10 w-10 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--foreground)]" />

      {/* Custom Tooltip */}
      <div className="pointer-events-none absolute bottom-2 z-20 max-w-[90%] translate-y-2 truncate rounded bg-black/80 px-2 py-1 text-[10px] whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        {iconName}
      </div>

      {/* Overlay */}
      <div
        className={`bg-primary/90 absolute inset-0 flex items-center justify-center rounded-xl transition-opacity ${copied === code ? "opacity-100" : "opacity-0"} z-30`}
      >
        <div className="flex flex-col items-center gap-1 text-xs font-bold text-white">
          <Check size={20} />
          COPIADO
        </div>
      </div>
    </button>
  );
};

// Grid item component for Material Symbols
const MaterialIconCard = ({
  icon,
  onCopy,
  copied,
}: {
  icon: string;
  onCopy: (code: string) => void;
  copied: string | null;
}) => {
  const code = `<span className="material-symbols-outlined">${icon}</span>`;

  return (
    <button
      onClick={() => onCopy(code)}
      className="group hover:border-primary/50 relative flex aspect-square h-full w-full flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:bg-[var(--surface)]/80"
      title={icon} // Fallback nativo
    >
      <span className="material-symbols-outlined text-4xl text-[var(--text-secondary)] transition-colors group-hover:text-[var(--foreground)]">
        {icon}
      </span>

      {/* Custom Tooltip */}
      <div className="pointer-events-none absolute bottom-2 z-20 max-w-[90%] translate-y-2 truncate rounded bg-black/80 px-2 py-1 text-[10px] whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        {icon}
      </div>

      {/* Overlay */}
      <div
        className={`bg-primary/90 absolute inset-0 flex items-center justify-center rounded-xl transition-opacity ${copied?.includes(icon) ? "opacity-100" : "opacity-0"} z-30`}
      >
        <div className="flex flex-col items-center gap-1 text-xs font-bold text-white">
          <Check size={20} />
          COPIADO
        </div>
      </div>
    </button>
  );
};

export default function IconsPage() {
  const [activeTab, setActiveTab] = useState<"material" | "lucide">("material");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredMaterial = useMemo(
    () => MATERIAL_SYMBOLS.filter((icon) => icon.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const filteredLucide = useMemo(
    () => lucideIconList.filter((icon) => icon.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  // Grid components for virtuoso defined outside to prevent re-renders
  const GridList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ style, children, ...props }, ref) => (
      <div
        ref={ref}
        {...props}
        style={{
          ...style, // Base styles from Virtuoso first
          display: "grid", // Force grid layout
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", // Denser grid (approx 8 per line)
          gap: "1rem",
          width: "100%",
        }}
      >
        {children}
      </div>
    )
  );

  const GridItem = ({ children, ...props }: any) => (
    <div {...props} style={{ ...props.style, margin: 0, height: "100%", width: "100%" }}>
      {children}
    </div>
  );

  const gridComponents = {
    List: GridList,
    Item: GridItem,
  };

  return (
    <div className="min-h-screen" ref={containerRef}>
      <main className="container mx-auto px-4 pt-10 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-4">
          {/* Toolbar */}
          <div className="flex flex-col-reverse items-center justify-between gap-4 border-b border-[var(--border)] pb-4 md:flex-row">
            {/* Tabs */}
            <div className="flex w-full items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-1 md:w-fit">
              <button
                onClick={() => setActiveTab("material")}
                className={`flex-1 rounded-md px-4 py-1.5 text-sm font-medium transition-all md:flex-none ${activeTab === "material" ? "bg-primary text-white shadow-lg" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
              >
                Material Symbols
              </button>
              <button
                onClick={() => setActiveTab("lucide")}
                className={`flex-1 rounded-md px-4 py-1.5 text-sm font-medium transition-all md:flex-none ${activeTab === "lucide" ? "bg-primary text-white shadow-lg" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
              >
                Lucide React ({lucideIconList.length})
              </button>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="text"
                placeholder={`Buscar em ${activeTab === "material" ? filteredMaterial.length : filteredLucide.length} ícones...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="focus:border-primary/50 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] py-2 pr-4 pl-10 text-[var(--foreground)] transition-colors placeholder:text-[var(--text-secondary)]/50 focus:outline-none"
              />
            </div>
          </div>

          {/* Virtualized Grid */}
          <div className="h-[calc(100vh-180px)] min-h-[400px]">
            {activeTab === "material" ? (
              <VirtuosoGrid
                totalCount={filteredMaterial.length}
                components={gridComponents}
                itemContent={(index) => (
                  <MaterialIconCard
                    icon={filteredMaterial[index]}
                    onCopy={copyCode}
                    copied={copied}
                  />
                )}
              />
            ) : (
              <VirtuosoGrid
                totalCount={filteredLucide.length}
                components={gridComponents}
                itemContent={(index) => (
                  <LucideIconCard
                    iconName={filteredLucide[index]}
                    onCopy={copyCode}
                    copied={copied}
                  />
                )}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
