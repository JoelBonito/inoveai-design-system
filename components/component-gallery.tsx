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
    const categories = ["all", ...Array.from(new Set(components.map(c => c.category)))];

    // Filter components
    const filteredComponents = components.filter(c => {
        const matchesCategory = filter === "all" || c.category === filter;
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.description.toLowerCase().includes(search.toLowerCase()) ||
            c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-8">
            {/* Filters Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[var(--surface)] border border-[var(--border)] p-4 rounded-xl shadow-sm">
                {/* Category Filters */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    <Filter className="w-4 h-4 text-[var(--text-secondary)] shrink-0 mr-2" />
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors whitespace-nowrap ${filter === cat
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-[var(--background)] text-[var(--text-secondary)] hover:bg-[var(--background)]/80 hover:text-[var(--foreground)]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* View & Search */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Filter components..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-1.5 text-sm text-[var(--foreground)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>
                    <div className="flex bg-[var(--background)] rounded-lg p-1 border border-[var(--border)]">
                        <button
                            onClick={() => setView("grid")}
                            className={`p-1.5 rounded ${view === "grid" ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
                        >
                            <Grid size={16} />
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={`p-1.5 rounded ${view === "list" ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}`}
                        >
                            <List size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            {filteredComponents.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-xl">
                    <p className="text-[var(--text-secondary)]">Nenhum componente encontrado.</p>
                    <button
                        onClick={() => { setFilter("all"); setSearch(""); }}
                        className="mt-4 text-primary text-sm hover:underline"
                    >
                        Limpar filtros
                    </button>
                </div>
            ) : (
                <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                    {filteredComponents.map((component) => (
                        <Link
                            key={component.id}
                            href={`/components/${component.id}`}
                            className={`group bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(43,43,238,0.15)] ${view === "list" ? "flex flex-col md:flex-row h-auto md:h-48" : ""
                                }`}
                        >
                            {/* Screenshot Preview */}
                            <div className={`relative bg-[var(--background)] overflow-hidden ${view === "list" ? "h-48 md:h-full md:w-1/3" : "h-48"}`}>
                                {(component.darkMode || component.lightMode) && (
                                    <>
                                        {/* Light Mode Image (Visible by default, hidden in dark) */}
                                        <img
                                            src={component.lightMode?.screenshot || component.darkMode?.screenshot || ""}
                                            alt={`${component.name} light mode`}
                                            className="absolute inset-0 w-full h-full object-cover object-top dark:opacity-0 opacity-100 transition-opacity duration-300 group-hover:scale-105"
                                        />
                                        {/* Dark Mode Image (Hidden by default, visible in dark) */}
                                        <img
                                            src={component.darkMode?.screenshot || component.lightMode?.screenshot || ""}
                                            alt={`${component.name} dark mode`}
                                            className="absolute inset-0 w-full h-full object-cover object-top dark:opacity-100 opacity-0 transition-opacity duration-300 group-hover:scale-105"
                                        />
                                    </>
                                )}
                                <div className="absolute top-3 right-3 flex gap-2">
                                    {component.darkMode && (
                                        <span className="px-2 py-1 rounded bg-black/60 backdrop-blur text-white text-[10px] font-bold border border-white/10">
                                            Dark
                                        </span>
                                    )}
                                    {component.lightMode && (
                                        <span className="px-2 py-1 rounded bg-white/90 backdrop-blur text-black text-[10px] font-bold border border-black/10">
                                            Light
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className={`p-5 flex flex-col ${view === "list" ? "flex-1 justify-center" : ""}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-primary transition-colors">
                                        {component.name}
                                    </h3>
                                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-md capitalize">
                                        {component.category}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
                                    {component.description}
                                </p>

                                {/* Tags */}
                                <div className={`flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]/50 ${view === "list" ? "mt-auto" : "mt-auto"}`}>
                                    {component.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-[var(--text-secondary)] bg-[var(--background)] px-2 py-1 rounded-md border border-[var(--border)]"
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
