"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Palette,
  Type,
  LayoutGrid,
  Sparkles,
  Box,
  Layers,
  Accessibility,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

const NAV_ITEMS = [
  {
    title: "Fundamentos",
    items: [
      { name: "Cores", href: "/colors", icon: Palette },
      { name: "Tipografia", href: "/typography", icon: Type },
      { name: "Grid e Layout", href: "/grid", icon: LayoutGrid },
      { name: "Ícones", href: "/icons", icon: Sparkles },
    ]
  },
  {
    title: "Componentes",
    items: [
      { name: "Galeria", href: "/", icon: Box },
      { name: "Design Tokens", href: "/tokens", icon: Layers },
    ]
  },
  {
    title: "Recursos",
    items: [
      { name: "Animações", href: "/animations", icon: Sparkles },
      { name: "Acessibilidade", href: "/accessibility", icon: Accessibility },
      { name: "Playground", href: "/playground", icon: Box },
    ]
  }
];

export function SiteSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:hidden transition-colors">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </div>
          <span className="text-[var(--foreground)] text-lg font-bold tracking-tight">
            Stitch DS
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 flex-col border-r border-[var(--border)] bg-[var(--surface)] py-6 transition-colors
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:flex
      `}>
        {/* Brand (Desktop only) */}
        <div className="hidden lg:block px-6 pb-6 border-b border-[var(--border)] mb-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">terminal</span>
            </div>
            <span className="text-[var(--foreground)] text-lg font-bold tracking-tight">
              Stitch DS
            </span>
          </Link>
        </div>

        {/* Mobile padding for header */}
        <div className="h-14 lg:hidden" />

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
          <div className="space-y-8">
            {NAV_ITEMS.map((section) => (
              <div key={section.title}>
                <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-50">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${isActive
                          ? "bg-[var(--background)] text-primary shadow-sm ring-1 ring-primary/10"
                          : "text-[var(--text-secondary)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"
                          }`}
                      >
                        <item.icon size={16} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Theme Toggle (Desktop) */}
        <div className="mt-auto px-6 pt-6 border-t border-[var(--border)]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden lg:flex w-full items-center justify-between p-3 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
              <span className="text-sm font-medium text-[var(--foreground)]">
                {isDark ? 'Modo Escuro' : 'Modo Claro'}
              </span>
            </div>
            <div className={`w-10 h-5 rounded-full p-0.5 transition-colors ${isDark ? 'bg-primary' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isDark ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </button>

          {/* Version badge */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[var(--text-secondary)]">
            <span>Stitch DS</span>
            <span className="px-1.5 py-0.5 rounded bg-[var(--background)] text-[10px]">v1.0.0</span>
          </div>
        </div>
      </aside>
    </>
  );
}
