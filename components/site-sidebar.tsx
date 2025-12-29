"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Palette,
  Type,
  LayoutGrid,
  Sparkles,
  Box,
  Layers,
  Menu,
  X,
  Square,
  FormInput,
  BarChart3,
  Navigation,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon
} from "lucide-react";
import { useSidebar } from "@/components/providers/sidebar-provider";

// =====================================================
// NOVA ESTRUTURA DE NAVEGAÇÃO POR CATEGORIAS
// =====================================================

const CATEGORIES = [
  {
    id: "primitivos",
    title: "Primitivos",
    href: "/primitivos",
    icon: Square,
    color: "text-emerald-500", // "Clientes" style
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
    title: "Formulários",
    href: "/formularios",
    icon: FormInput,
    color: "text-blue-500", // "Finanças" style
    items: [
      { name: "Select", href: "/formularios/select" },
      { name: "Autocomplete", href: "/formularios/autocomplete" },
      { name: "Seletor de Data", href: "/formularios/date-picker" },
      { name: "Upload de Arquivo", href: "/formularios/file-upload" },
    ]
  },
  {
    id: "dados",
    title: "Dados",
    href: "/dados",
    icon: BarChart3,
    color: "text-amber-500", // "Produtos" style
    items: [
      { name: "Tabela", href: "/dados/table" },
      { name: "Gráfico", href: "/dados/chart" },
    ]
  },
  {
    id: "navegacao",
    title: "Navegação",
    href: "/navegacao",
    icon: Navigation,
    color: "text-purple-500",
    items: [
      { name: "Tabs", href: "/navegacao/tabs" },
      { name: "Breadcrumbs", href: "/navegacao/breadcrumbs" },
      { name: "Paginação", href: "/navegacao/paginacao" },
      { name: "Headers & Sidebar", href: "/navegacao/headers" },
    ]
  },
  {
    id: "feedback",
    title: "Feedback",
    href: "/feedback",
    icon: MessageSquare,
    color: "text-rose-500",
    items: [
      { name: "Modal", href: "/feedback/modal" },
      { name: "Toast", href: "/feedback/toast" },
      { name: "Tooltip", href: "/feedback/tooltip" },
      { name: "Estado Vazio", href: "/feedback/empty-state" },
      { name: "Página de Erro", href: "/feedback/error-page" },
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
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["primitivos"]);

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
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-sidebar-background px-4 py-3 lg:hidden transition-colors">
        <Link href="/" className="flex items-center gap-2">
          <img src="/inove-logo.png" alt="Inove AI" className="size-8 rounded" />
          <span className="text-sidebar-foreground text-sm font-semibold tracking-tight">
            Design System
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
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
        fixed inset-y-0 left-0 z-50 flex-col border-r border-sidebar-border bg-sidebar-background py-6 transition-all duration-300
        transform ease-in-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:flex
        ${isCollapsed ? 'w-20' : 'w-64'} 
      `}>
        {/* Header Container (Brand + Toggle on Divider) */}
        <div className={`relative flex flex-col items-center pb-6 mb-2 border-b border-sidebar-border transition-all duration-300 ${isCollapsed ? 'px-2' : 'px-6'}`}>
          <Link href="/" className="flex flex-col items-center gap-2 overflow-hidden">
            <img src="/inove-logo.png" alt="Inove AI" className={`transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-16 h-16'} rounded-xl shadow-sm`} />
            <span className={`text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1 text-center whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 h-0 hidden' : 'opacity-100'}`}>
              Design System
            </span>
          </Link>

          {/* Desktop Toggle Button - Positioned exactly on the bottom border */}
          <div className="hidden lg:block absolute -right-3 bottom-0 translate-y-1/2 z-50">
            <button
              onClick={toggleSidebar}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-sidebar-background border border-sidebar-border shadow-md text-muted-foreground hover:text-foreground hover:border-primary transition-all hover:scale-110"
              title={isCollapsed ? "Expandir" : "Recolher"}
            >
              {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
          </div>
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
                  ? "bg-sidebar-accent text-sidebar-primary shadow-sm ring-1 ring-sidebar-ring/10"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? "Início" : undefined}
              >
                <Box size={18} className="text-sidebar-foreground/70" />
                {!isCollapsed && <span>Início</span>}
              </Link>
            </div>

            {/* Design Tokens */}
            <div>
              <Link
                href="/tokens"
                className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${pathname === "/tokens"
                  ? "bg-sidebar-accent text-sidebar-primary shadow-sm ring-1 ring-sidebar-ring/10"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? "Design Tokens" : undefined}
              >
                <Layers size={18} className="text-sidebar-foreground/70" />
                {!isCollapsed && <span>Design Tokens</span>}
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
                    className={`w-full flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors group ${isCategoryActive
                      ? "bg-sidebar-accent/10 text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? category.title : undefined}
                  >
                    <div className="flex items-center gap-3">
                      {/* Ícone Colorido */}
                      <category.icon size={18} className={category.color} />
                      {!isCollapsed && <span className="group-hover:text-sidebar-accent-foreground">{category.title}</span>}
                    </div>
                    {!isCollapsed && (isExpanded ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />)}
                  </button>

                  {/* Category Items */}
                  {isExpanded && !isCollapsed && (
                    <div className="relative z-10 mt-1 ml-2 space-y-1 border-l border-sidebar-border/60">
                      {category.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`relative z-10 flex w-full items-center pl-6 py-2 text-sm transition-all cursor-pointer rounded-r-full mr-2 ${isActive
                              ? "bg-sidebar-accent text-sidebar-primary font-bold border-l-4 border-sidebar-primary"
                              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 border-l-4 border-transparent"
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
              {!isCollapsed && (
                <h3 className="mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-sidebar-foreground/40">
                  Fundamentos
                </h3>
              )}
              <div className="space-y-1">
                {FOUNDATION_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${isActive
                        ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        } ${isCollapsed ? 'justify-center' : ''}`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <item.icon size={18} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
                      {!isCollapsed && item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Powered by Inove AI */}
        <div className={`mt-auto px-6 py-6 border-t border-sidebar-border/40 ${isCollapsed ? 'px-2 py-4' : ''}`}>
          <div className="flex flex-col items-center gap-2">
            {!isCollapsed && (
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] whitespace-nowrap">
                Powered By
              </span>
            )}
            <div className="flex items-center justify-center">
              <img src="/inove-powered-logo.jpg" alt="Inove AI" className={`h-10 w-auto opacity-90 hover:opacity-100 transition-opacity rounded-md ${isCollapsed ? 'h-8' : ''}`} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

