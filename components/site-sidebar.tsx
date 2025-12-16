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
  Moon,
  Square,
  FormInput,
  BarChart3,
  Navigation,
  MessageSquare,
  BookOpen,
  ChevronDown,
  ChevronRight
} from "lucide-react";

// =====================================================
// NOVA ESTRUTURA DE NAVEGAÇÃO POR CATEGORIAS
// =====================================================

const CATEGORIES = [
  {
    id: "primitivos",
    title: "🧱 Primitivos",
    href: "/primitivos",
    icon: Square,
    items: [
      { name: "Botão", href: "/primitivos/button" },
      { name: "Input", href: "/primitivos/input" },
      { name: "Checkbox", href: "/primitivos/checkbox" },
      { name: "Switch", href: "/primitivos/switch" },
      { name: "Badge", href: "/primitivos/badge" },
    ]
  },
  {
    id: "formularios",
    title: "📝 Formulários",
    href: "/formularios",
    icon: FormInput,
    items: [
      { name: "Select", href: "/formularios/select" },
      { name: "Autocomplete", href: "/formularios/autocomplete" },
      { name: "Seletor de Data", href: "/formularios/date-picker" },
      { name: "Upload de Arquivo", href: "/formularios/file-upload" },
    ]
  },
  {
    id: "dados",
    title: "📊 Dados",
    href: "/dados",
    icon: BarChart3,
    items: [
      { name: "Tabela", href: "/dados/table" },
      { name: "Gráfico", href: "/dados/chart" },
    ]
  },
  {
    id: "navegacao",
    title: "🧭 Navegação",
    href: "/navegacao",
    icon: Navigation,
    items: [
      { name: "Tabs", href: "/navegacao/tabs" },
      { name: "Breadcrumbs", href: "/navegacao/breadcrumbs" },
      { name: "Paginação", href: "/navegacao/paginacao" },
      { name: "Headers & Sidebar", href: "/navegacao/headers" },
    ]
  },
  {
    id: "feedback",
    title: "💬 Feedback",
    href: "/feedback",
    icon: MessageSquare,
    items: [
      { name: "Modal", href: "/feedback/modal" },
      { name: "Toast", href: "/feedback/toast" },
      { name: "Tooltip", href: "/feedback/tooltip" },
      { name: "Estado Vazio", href: "/feedback/empty-state" },
      { name: "Página de Erro", href: "/feedback/error-page" },
    ]
  },
  {
    id: "referencia",
    title: "📚 Referência",
    href: "/referencia",
    icon: BookOpen,
    items: [
      { name: "Componentes Essenciais", href: "/referencia/essentials" },
    ]
  },
];

const FOUNDATION_ITEMS = [
  { name: "Cores", href: "/colors", icon: Palette },
  { name: "Tipografia", href: "/typography", icon: Type },
  { name: "Grid e Layout", href: "/grid", icon: LayoutGrid },
  { name: "Ícones", href: "/icons", icon: Sparkles },
];

interface SiteSidebarProps {
  components?: any[];
}

export function SiteSidebar({ components = [] }: SiteSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["primitivos"]);

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

  // Auto-expand category based on current path
  useEffect(() => {
    const category = CATEGORIES.find(cat => pathname.startsWith(cat.href));
    if (category && !expandedCategories.includes(category.id)) {
      setExpandedCategories(prev => [...prev, category.id]);
    }
  }, [pathname]);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? [] // Close if already open
        : [categoryId] // Open only this one (accordion behavior)
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:hidden transition-colors">
        <Link href="/" className="flex items-center gap-2">
          <img src="/inove-logo.png" alt="Inove AI" className="size-10 rounded" />
          <span className="text-[var(--foreground)] text-sm font-semibold tracking-tight">
            Design System
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
          <Link href="/" className="flex flex-col items-center gap-2">
            <img src="/inove-logo.png" alt="Inove AI" className="w-24 h-24 rounded-lg" />
            <span className="text-[var(--foreground)] text-base font-semibold tracking-tight">
              Design System
            </span>
          </Link>
        </div>

        {/* Mobile padding for header */}
        <div className="h-14 lg:hidden" />

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
          <div className="space-y-6">
            {/* Início */}
            <div>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${pathname === "/"
                  ? "bg-[var(--background)] text-primary shadow-sm ring-1 ring-primary/10"
                  : "text-[var(--text-secondary)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"
                  }`}
              >
                <Box size={16} />
                🏠 Início
              </Link>
            </div>

            {/* Design Tokens */}
            <div>
              <Link
                href="/tokens"
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${pathname === "/tokens"
                  ? "bg-[var(--background)] text-primary shadow-sm ring-1 ring-primary/10"
                  : "text-[var(--text-secondary)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"
                  }`}
              >
                <Layers size={16} />
                🎨 Design Tokens
              </Link>
            </div>

            {/* Categories */}
            {CATEGORIES.map((category) => {
              const isExpanded = expandedCategories.includes(category.id);
              const isCategoryActive = pathname.startsWith(category.href);

              return (
                <div key={category.id}>
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={`w-full flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors ${isCategoryActive
                      ? "bg-primary/10 text-primary"
                      : "text-[var(--text-secondary)] hover:bg-[var(--background)]/50 hover:text-[var(--foreground)]"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <category.icon size={16} />
                      {category.title}
                    </div>
                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>

                  {/* Category Items */}
                  {isExpanded && (
                    <div className="relative z-10 mt-1 ml-6 space-y-1 border-l border-[var(--border)]">
                      {category.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`relative z-10 block pl-4 py-2 text-sm transition-colors cursor-pointer ${isActive
                              ? "text-primary font-medium border-l-2 border-primary -ml-px"
                              : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                              }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Fundamentos */}
            <div>
              <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] opacity-50">
                Fundamentos
              </h3>
              <div className="space-y-1">
                {FOUNDATION_ITEMS.map((item) => {
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
          </div>
        </div>

        {/* Footer - Theme Toggle (Desktop) */}
        <div className="mt-auto px-6 py-6 border-t border-[var(--border)]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden lg:flex w-full items-center justify-between p-4 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
              <span className="text-sm font-medium text-[var(--foreground)]">
                {isDark ? 'Modo Escuro' : 'Modo Claro'}
              </span>
            </div>
            <div className={`w-11 h-6 rounded-full p-0.5 transition-colors ${isDark ? 'bg-primary' : 'bg-slate-300'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isDark ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </button>

          {/* Version badge */}
          <div className="flex items-center justify-center gap-3 mt-6 text-xs text-[var(--text-secondary)]">
            <span className="font-medium">Inove DS</span>
            <span className="px-2 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-[11px] font-mono">v2.0.0</span>
          </div>
        </div>
      </aside>
    </>
  );
}
