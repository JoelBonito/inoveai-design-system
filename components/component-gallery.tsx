"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Filter, Grid, List } from "lucide-react";
import { useCommandState } from "cmdk"; // Not really needed here but good to know

interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  darkMode: { screenshot: string; htmlPath: string } | null;
  lightMode: { screenshot: string; htmlPath: string } | null;
  tags: string[];
}

interface ComponentGalleryProps {
  components: Component[];
}

export function ComponentGallery({ components }: ComponentGalleryProps) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(components.map((c) => c.category)))];

  // Filter components
  const filteredComponents = components.filter((c) => {
    const matchesCategory = filter === "all" || c.category === filter;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Filters Toolbar */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm md:flex-row">
        {/* Category Filters */}
        <div className="scrollbar-hide flex w-full items-center gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
          <Filter className="mr-2 h-4 w-4 shrink-0 text-[var(--text-secondary)]" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap capitalize transition-colors ${
                filter === cat
                  ? "bg-primary shadow-primary/20 text-white shadow-lg"
                  : "bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--background)]/80 hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View & Search */}
        <div className="flex w-full items-center gap-4 md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Filter components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="focus:border-primary/50 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-1.5 pr-4 pl-9 text-sm text-[var(--foreground)] transition-colors placeholder:text-[var(--text-secondary)]/50 focus:outline-none"
            />
          </div>
          <div className="flex rounded-lg border border-[var(--border)] bg-[var(--background)] p-1">
            <button
              onClick={() => setView("grid")}
              className={`rounded p-1.5 ${view === "grid" ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`rounded p-1.5 ${view === "list" ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      {filteredComponents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--border)] py-20 text-center">
          <p className="text-[var(--text-secondary)]">Nenhum componente encontrado.</p>
          <button
            onClick={() => {
              setFilter("all");
              setSearch("");
            }}
            className="text-primary mt-4 text-sm hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {filteredComponents.map((component) => (
            <Link
              key={component.id}
              href={`/components/${component.id}`}
              className={`group hover:border-primary/50 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-all hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(43,43,238,0.15)] ${
                view === "list" ? "flex h-auto flex-col md:h-48 md:flex-row" : ""
              }`}
            >
              {/* Screenshot Preview */}
              <div
                className={`relative overflow-hidden bg-[var(--background)] ${view === "list" ? "h-48 md:h-full md:w-1/3" : "h-48"}`}
              >
                {(component.darkMode || component.lightMode) && (
                  <>
                    {/* Light Mode Image (Visible by default, hidden in dark) */}
                    <img
                      src={component.lightMode?.screenshot || component.darkMode?.screenshot || ""}
                      alt={`${component.name} light mode`}
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-100 transition-opacity duration-300 group-hover:scale-105 dark:opacity-0"
                    />
                    {/* Dark Mode Image (Hidden by default, visible in dark) */}
                    <img
                      src={component.darkMode?.screenshot || component.lightMode?.screenshot || ""}
                      alt={`${component.name} dark mode`}
                      className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:scale-105 dark:opacity-100"
                    />
                  </>
                )}
              </div>

              {/* Card Content */}
              <div
                className={`flex flex-col p-5 ${view === "list" ? "flex-1 justify-center" : ""}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="group-hover:text-primary text-lg font-bold text-[var(--foreground)] transition-colors">
                    {component.name}
                  </h3>
                  <span className="text-primary bg-primary/10 rounded-md px-2 py-0.5 font-mono text-xs capitalize">
                    {component.category}
                  </span>
                </div>
                <p className="mb-4 line-clamp-2 text-sm text-[var(--text-secondary)]">
                  {component.description}
                </p>

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 border-t border-[var(--border)]/50 pt-4 ${view === "list" ? "mt-auto" : "mt-auto"}`}
                >
                  {component.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
